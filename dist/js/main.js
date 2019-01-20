 // select DOM items


 $(document).ready(() => {


     const menuBtn = $(".menu-btn");
     const menu = $(".menu");
     const menuNav = $(".menu-nav");
     const menuBranding = $(".menu-Branding");

     const navItems = $('.nav-item');
     let showMenu = false;

    

     menuBtn.click(toggleMenu);
     function toggleMenu() {

        if (!showMenu) {
            menuBtn.addClass('close');
            menu.addClass('show');
            menuNav.addClass('show');
            menuBranding.addClass('show');
            navItems.forEach(item => item.addClass('show'));
            showMenu = true;

        } else {
            menuBtn.removeClass('close');
            menu.removeClass('show');
            menuNav.removeClass('show');
            menuBranding.removeClass('show');
            navItems.forEach(item => item.removeClass('show'));
            showMenu = false;
        }

    }
 });