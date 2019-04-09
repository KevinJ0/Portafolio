 // select DOM items


 $(document).ready(() => {


     const menuBtn = $(".menu-btn");
     const menuNav = $(".menu-nav");
     const menuBranding = $(".menu-Branding");
     let show = true;
     const navItems = $('.nav-item');
       
     navItems.fadeOut();
     menuBtn.click(() => {
         menuBtn.toggleClass('close');
         $('.menu-side-right').slideToggle();
         $('.menu-side-left').slideToggle();
         navItems.addClass('nav-item');

         show = false;
         navItems.fadeToggle();

     });

 });