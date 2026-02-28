
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="cp-spinner cp-meter"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*[ Select ]
    ===========================================================*/
    $(".selection-1").select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect1')
    });

    /*[ Daterangepicker ]
    ===========================================================*/
    $('.my-calendar').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        locale: {
            format: 'DD/MM/YYYY'
        },
    });

    var myCalendar = $('.my-calendar');
    var isClick = 0;

    $(window).on('click',function(){ 
        isClick = 0;
    });

    $(myCalendar).on('apply.daterangepicker',function(){ 
        isClick = 0;
    });

    $('.btn-calendar').on('click',function(e){ 
        e.stopPropagation();

        if(isClick == 1) isClick = 0;   
        else if(isClick == 0) isClick = 1;

        if (isClick == 1) {
            myCalendar.focus();
        }
    });

    $(myCalendar).on('click',function(e){ 
        e.stopPropagation();
        isClick = 1;
    });

    $('.daterangepicker').on('click',function(e){ 
        e.stopPropagation();
    });


    /*[ Play video 01]
    ===========================================================*/
    var srcOld = $('.video-mo-01').children('iframe').attr('src');

    $('[data-target="#modal-video-01"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

        setTimeout(function(){
            $('.video-mo-01').css('opacity','1');
        },300);      
    });

    $('[data-dismiss="modal"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src = srcOld;
        $('.video-mo-01').css('opacity','0');
    });
    

    /*[ Fixed Header ]
    ===========================================================*/
    var header = $('header');
    var logo = $(header).find('.logo img');
    var linkLogo1 = $(logo).attr('src');
    var linkLogo2 = $(logo).data('logofixed');


    $(window).on('scroll',function(){
        if($(this).scrollTop() > 5 && $(this).width() > 992) {
            $(logo).attr('src',linkLogo2);
            $(header).addClass('header-fixed');
        }
        else {
            $(header).removeClass('header-fixed');
            $(logo).attr('src',linkLogo1);
        }
        
    });

    /*[ Show/hide sidebar ]
    ===========================================================*/
    $('body').append('<div class="overlay-sidebar trans-0-4"></div>');
    var ovlSideBar = $('.overlay-sidebar');
    var btnShowSidebar = $('.btn-show-sidebar');
    var btnHideSidebar = $('.btn-hide-sidebar');
    var sidebar = $('.sidebar');

    $(btnShowSidebar).on('click', function(){
        $(sidebar).addClass('show-sidebar');
        $(ovlSideBar).addClass('show-overlay-sidebar');
    })

    $(btnHideSidebar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })

    $(ovlSideBar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })


    /*[ Isotope ]
    ===========================================================*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var labelGallerys = $('.label-gallery');

    $(labelGallerys).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<labelGallerys.length; i++) {
                $(labelGallerys[i]).removeClass('is-actived');
            }

            $(this).addClass('is-actived');
        });
    });

    

})(jQuery);


document.addEventListener("DOMContentLoaded", function () {

    var toggle = document.querySelector(".mobile-toggle");
    var menu = document.querySelector(".wrap_menu");
    var productLink = document.querySelector(".has-product-dropdown > a");
    var productItem = document.querySelector(".has-product-dropdown");

    if (toggle) {
        toggle.addEventListener("click", function () {
            toggle.classList.toggle("active");
            menu.classList.toggle("open");
        });
    }

    if (productLink) {
        productLink.addEventListener("click", function (e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                productItem.classList.toggle("open");
            }
        });
    }

});





document.addEventListener("DOMContentLoaded", function () {

  const mobileToggle = document.getElementById("mobileToggle");
  const menuWrap = document.querySelector(".wrap_menu");

  if (!mobileToggle || !menuWrap) return;

  const productItems = document.querySelectorAll(".has-product-dropdown");
  const subItems = document.querySelectorAll(".has-sub-dropdown");

  /* =============================
     MOBILE MENU TOGGLE
  ============================= */
  mobileToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileToggle.classList.toggle("active");
    menuWrap.classList.toggle("active");
  });

  /* =============================
     PRODUCT DROPDOWN (ALL DEVICES)
  ============================= */
  productItems.forEach(item => {
    const link = item.querySelector(":scope > a");
    if (!link) return;

    link.addEventListener("click", function (e) {

      e.preventDefault();
      e.stopPropagation();

      productItems.forEach(i => {
        if (i !== item) i.classList.remove("open");
      });

      item.classList.toggle("open");
    });
  });

  /* =============================
     SUB DROPDOWN (ALL DEVICES)
  ============================= */
  subItems.forEach(sub => {
    const subLink = sub.querySelector(":scope > a");
    if (!subLink) return;

    subLink.addEventListener("click", function (e) {

      e.preventDefault();
      e.stopPropagation();

      subItems.forEach(s => {
        if (s !== sub) s.classList.remove("open");
      });

      sub.classList.toggle("open");
    });
  });

  /* =============================
     OUTSIDE CLICK CLOSE (ALL DEVICES)
  ============================= */
  document.addEventListener("click", function (e) {

    const insideMenu = e.target.closest(".wrap_menu");
    const isToggle = e.target.closest("#mobileToggle");

    if (!insideMenu && !isToggle) {

      productItems.forEach(i => i.classList.remove("open"));
      subItems.forEach(s => s.classList.remove("open"));

      mobileToggle.classList.remove("active");
      menuWrap.classList.remove("active");
    }
  });

});


// product and drop down section start

(function ($) {

    $(document).ready(function () {

        // Mobile menu toggle
        $('.mobile-toggle').on('click', function () {
            $(this).toggleClass('active');
            $('.wrap_menu').toggleClass('open');
        });

        // Product dropdown for mobile
        $('.has-product-dropdown > a').on('click', function (e) {

            if (window.innerWidth <= 991) {
                e.preventDefault();
                $(this).parent().toggleClass('open');
            }

        });

    });

})(jQuery);


// product and drop down section End van drop


// our client section start

document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".client-track");

    if (!track) return; // safety check

    let position = 0;
    let speed = 0.9; // 0.2 slow | 0.5 normal | 1 fast

    function animate() {
        position -= speed;

        // Reset when half content scrolls
        if (Math.abs(position) >= track.scrollWidth / 2) {
            position = 0;
        }

        track.style.transform = "translateX(" + position + "px)";
        requestAnimationFrame(animate);
    }

    animate();

});



// our client section End

// galary stsem start


// ===== gallery.js =====

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

  // ===== Gallery Filter & Stagger Animation =====
  const buttons    = document.querySelectorAll(".label-gallery");
  const items      = document.querySelectorAll(".gallery-item");
  const paragraphs = document.querySelectorAll(".intro-text");

  // initial state
  items.forEach(item => item.classList.add("show"));

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const filter = btn.dataset.filter;

      // ACTIVE BUTTON
      buttons.forEach(b => b.classList.remove("is-actived"));
      btn.classList.add("is-actived");

      // IMAGE FILTER WITH ANIMATION
      items.forEach(item => {
        const match = filter === "*" || item.matches(filter);

        if (match) {
          item.style.display = "block";
          requestAnimationFrame(() => {
            item.classList.remove("hide");
            item.classList.add("show");
          });
        } else {
          item.classList.remove("show");
          item.classList.add("hide");

          // display none after animation
          setTimeout(() => {
            item.style.display = "none";
          }, 400);
        }
      });

      // PARAGRAPH SWITCH
      paragraphs.forEach(p => {
        p.classList.toggle(
          "active-intro",
          p.dataset.content === filter
        );
      });
    });
  });


  // ===== Simple Lightbox =====
  const links = document.querySelectorAll('.btn-show-gallery');
  const lightbox = document.getElementById('simple-lightbox');
  const lightboxImg = document.getElementById('sl-img');
  const closeBtn = document.getElementById('sl-close');
  const prevBtn = document.getElementById('sl-prev');
  const nextBtn = document.getElementById('sl-next');

  let currentIndex = 0;

  function showImage() {
    lightboxImg.src = links[currentIndex].getAttribute('href');
  }

  links.forEach((link, index) => {
    link.addEventListener('click', e => {
      e.preventDefault();
      currentIndex = index;
      showImage();
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.onclick = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  };

  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + links.length) % links.length;
    showImage();
  };

  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % links.length;
    showImage();
  };

  // ESC + keyboard arrows
  document.addEventListener('keydown', e => {
    if(lightbox.style.display !== 'flex') return;

    if(e.key === 'Escape') closeBtn.click();
    if(e.key === 'ArrowLeft') prevBtn.click();
    if(e.key === 'ArrowRight') nextBtn.click();
  });

});