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
  
      // Project modal functionality
      if (document.getElementById("imageModal")) {
        const imageModal = new bootstrap.Modal("#imageModal", {
          backdrop: true,
          keyboard: true,
          focus: true,
        });

        $(".project-item img").click(function () {
          $("#modalImage").attr("src", $(this).attr("src"));
          $("#modalTitle").text($(this).attr("alt"));
          imageModal.show();
        });
      }

      // Modal body class handling
      $("#imageModal")
        .on("show.bs.modal", function () {
          $("body").addClass("modal-open");
        })
        .on("hidden.bs.modal", function () {
          $("body").removeClass("modal-open");
        });

      // Newsletter form handling
      const $form = $(".newsletter-collapse form");
      const $successMessage = $("#successMessage");

      $form.on("submit", function (e) {
        e.preventDefault();

        $successMessage.removeClass("d-none");
        this.reset();

        setTimeout(() => {
          $successMessage.addClass("d-none");
        }, 5000);
      });
  
    // CAROUSEL SLICK
    $(".carousel-slick").slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 0,
      pauseOnHover: false,
      pauseOnFocus: false,
      cssEase: "linear",
      speed: 10000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            speed: 20000,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            speed: 20000,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            speed: 20000,
          },
        },
      ],
    });
  });
  