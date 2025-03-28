//Sougandhi Manonmani Pendyala - A20549991
// ITMD 541-01 Graduate Student

  (function () {
    // 1. Change the main headline text in the hero section
    // "Uplift Your Brand with Stellar Marketing"
    const heroHeadline = document.querySelector("#hero h1");
    if (heroHeadline) {
      heroHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
    }
  })();
  
  (function () {
    // 2. Change the line of text below the hero headline, adding bold and italic formatting
    // "Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.
    const heroTagline = document.querySelector("#hero p");
    if (heroTagline) {
      heroTagline.innerHTML =
        "Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel.</i></b>";
    }
  })();
  
  (function () {
    // 3. Change the background image in the hero section
    // 'https://picsum.photos/id/683/1280/720'
    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      heroSection.style.backgroundImage =
        "url('https://picsum.photos/id/683/1280/720')";
    }
  })();
  
  (function () {
    // 4. Change the background color of the navbar to match the footer's background color
    const footer = document.querySelector("footer");
    const header = document.querySelector("header");
    if (footer && header) {
      const footerColor = window
        .getComputedStyle(footer)
        .getPropertyValue("background-color");
      header.style.backgroundColor = footerColor; // Set navbar background color to footer color
    }
  })();
  
  (function () {
    // 5. Remove the 'Get Started' CTA button from the hero section
    const ctaButton = document.querySelector("#hero a");
    if (ctaButton) {
      ctaButton.remove(); // Remove the CTA button
    }
  })();

  (function () {
    // 6. Center Align the heading for sections
    // "Services", "Solutions", and "Contact"
    const sectionIds = ["services", "solutions", "contact"];
    sectionIds.forEach(id => {
      const heading = document.querySelector(`#${id} h2`);
      if (heading) {
        heading.style.textAlign = "center";
      }
    });
  })();
  
  (function () {
    // 7. Change the icons' color in the services section
    // Dark Green  (#47C714)
    const icons = document.querySelectorAll("#services span");
    icons.forEach((icon) => {
      icon.style.color = "#47C714"; // Change icon color to Dark Green
    });
  })();
  
  (function () {
    // 8. Change the digital marketing icon to 'ads_click'
    const digitalMarketingIcon = document.querySelector(
      '#services .material-symbols-outlined[data-icon="digital"]'
    );
    if (digitalMarketingIcon) {
      digitalMarketingIcon.textContent = "ads_click"; // Change the icon to 'ads_click'
    }
  })();
  
  (function () {
    // 9. Update the layout of the tiles in the Specialized Marketing Solutions section to 4 columns at >=1024px
    const solutionsSection = document.querySelector("#solutions .grid");
    if (solutionsSection) {
      const mediaQuery = window.matchMedia("(min-width: 1024px)");
  
      function updateGridLayout() {
        if (mediaQuery.matches) {
          solutionsSection.classList.add("lg:grid-cols-4"); // Update layout to 4 columns
        }
      }
  
      mediaQuery.addEventListener("change", updateGridLayout);
      updateGridLayout(); // Initialize on page load
    }
  })();
  
  (function () {
    // 10. Change the Musicians image in the Specialized Marketing Solutions section
    // "https://picsum.photos/id/453/400/300"
    const musiciansImage = document.querySelector(
      '#solutions img[alt="Musicians"]'
    );
    if (musiciansImage) {
      musiciansImage.src = "https://picsum.photos/id/453/400/300"; // Update image source
    }
  })();
  
  (function () {
    // 11. Prevent form submission to a broken URL and handle form validation
    // "Thank you, [name]! We will be in touch with you shortly at [email]."
    // "Please provide a name and email."
    const form = document.querySelector("#contact form");
  
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting to broken URL
  
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
  
        if (name && email) {
          // Show success message with user's name and email
          alert(
            `Thank you, ${name}! We will be in touch with you shortly at ${email}.`
          );
        } else {
          // Show error message if name or email are missing
          alert("Please provide a name and email.");
        }
      });
    }
  })();
          