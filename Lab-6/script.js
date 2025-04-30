//script.js — A20549991 - Sougandhi Manonmani Pendyala

(() => {
  // 1. DOM elements
  const selectEl    = document.getElementById('location-select');
  const btnGeo      = document.getElementById('current-location');
  const btnFetch    = document.getElementById('fetch-button');
  const errorDiv    = document.getElementById('error-message');

  // 2. Insert dates next to headings
  const setDate = (id, offset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = new Date(Date.now() + offset)
      .toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  };
  setDate('date-today');
  setDate('date-tomorrow', 86400000);

  // 3. Fields to reset
  const fields = [
    'sunrise', 'sunset',
    'dawn',    'dusk',
    'day-length', 'solar-noon',
    'timezone'
  ];
  let geoCoords = null;

  // 4. UI helpers
  function resetUI() {
    fields.forEach(f =>
      ['today','tomorrow'].forEach(day => {
        const el = document.getElementById(`${f}-${day}`);
        if (el) el.textContent = '–';
      })
    );
    if (errorDiv) errorDiv.hidden = true;
  }

  function showError(msg) {
    if (!errorDiv) return;
    errorDiv.textContent = msg;
    errorDiv.hidden = false;
  }

  // 5. Fetch helpers
  async function fetchSunData(lat, lng, date) {
    const res = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=${date}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { status, results } = await res.json();
    if (status !== 'OK') throw new Error(status);
    return results;
  }

  function populate(day, data) {
    Object.entries(data).forEach(([key, val]) => {
      const el = document.getElementById(`${key.replace('_','-')}-${day}`);
      if (el) el.textContent = val;
    });
  }

  // 6. Core fetch routine
  async function doFetch(lat, lng) {
    resetUI();
    const today    = new Date().toISOString().slice(0,10);
    const tomorrow = new Date(Date.now()+86400000).toISOString().slice(0,10);
    try {
      const [t0, t1] = await Promise.all([
        fetchSunData(lat, lng, today),
        fetchSunData(lat, lng, tomorrow)
      ]);
      populate('today',    { ...t0, timezone: t0.timezone });
      populate('tomorrow', { ...t1, timezone: t1.timezone });
    } catch (err) {
      showError(`❗ ${err.message}`);
    }
  }

  // 7. Enable Fetch on dropdown change
  selectEl?.addEventListener('change', () => {
    resetUI();
    btnFetch.disabled = false;
  });

  // 8. Fetch button logic
  btnFetch?.addEventListener('click', async () => {
    if (selectEl?.value) {
      const [lat, lng] = selectEl.value.split(',').map(x => x.trim());
      await doFetch(lat, lng);
    } else if (geoCoords) {
      await doFetch(geoCoords.lat, geoCoords.lng);
    } else {
      showError('Please select a city or use “Use My Location.”');
    }
  });

  // 9. Geolocation logic
  btnGeo?.addEventListener('click', () => {
    resetUI();
    if (!navigator.geolocation) {
      showError('Geolocation not supported.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async pos => {
        geoCoords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        btnFetch.disabled = false;
        await doFetch(geoCoords.lat, geoCoords.lng);
      },
      err => {
        const msgs = {
          1: 'Permission denied.',
          2: 'Position unavailable.',
          3: 'Request timed out.'
        };
        showError(msgs[err.code] || 'Unknown geolocation error.');
      }
    );
  });

  // 10. Initialize
  btnFetch.disabled = true;
  resetUI();
})();
