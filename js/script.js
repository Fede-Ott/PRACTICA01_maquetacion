$(document).ready(function () {
    // Menu state tracking
    let menuStates = {
      navbar: false,
      newsletter: false,
    };
  
    // Helper functions
    const toggleMenu = (menuId, direction, state) => {
      const animationProps = {};
      animationProps[direction] = state ? "0" : direction === "right" ? "-100vw" : "-550px";
  
      $(`#${menuId}`).css("height", "100%").animate(animationProps, 300);
      menuStates[menuId === "navbarNav" ? "navbar" : "newsletter"] = state;
  
      if (menuStates.navbar || menuStates.newsletter) {
        $("body").addClass("no-scroll");
      } else {
        $("body").removeClass("no-scroll");
      }
    };
  
    // Navbar toggle
    $(".navbar-toggler").click(function (event) {
      event.stopPropagation();
      toggleMenu("navbarNav", "right", true);
    });
  
    // Newsletter toggle
    $(".newsletter-btn").click(function (event) {
      event.stopPropagation();
      toggleMenu("newsletterNav", "left", true);
    });
  
    // Close buttons
    $(".btn-close").click(function (event) {
      event.stopPropagation();
      toggleMenu("navbarNav", "right", false);
    });
  
    $("#closeNewsletter").click(function (event) {
      event.stopPropagation();
      toggleMenu("newsletterNav", "left", false);
    });
  
    // Document click handler
    $(document).click(function (event) {
      const navbarNav = $("#navbarNav");
      const newsletterNav = $("#newsletterNav");
  
      const isClickInsideNavbar = navbarNav.is(event.target) || navbarNav.has(event.target).length !== 0;
      const isClickInsideNewsletter = newsletterNav.is(event.target) || newsletterNav.has(event.target).length !== 0;
  
      if (!isClickInsideNavbar && menuStates.navbar) {
        toggleMenu("navbarNav", "right", false);
      }
  
      if (!isClickInsideNewsletter && menuStates.newsletter) {
        toggleMenu("newsletterNav", "left", false);
      }
    });
  
    // Navbar scroll effect
    $(window).scroll(function () {
      $(".navbar").toggleClass("scrolled", $(this).scrollTop() > 50);
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter-collapse form');
    const successMessage = document.getElementById('successMessage');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      successMessage.classList.remove('d-none');
      form.reset();
      
      setTimeout(() => {
        successMessage.classList.add('d-none');
      }, 5000);
    });
  });
  