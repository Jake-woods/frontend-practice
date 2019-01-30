const navLinks = $('.nav-link');

$(window).scroll(() => {
   // Gets scroll location
   const scrollLocation = $(this).scrollTop();

   navLinks.each(function () {
      // How far from the top
      const sectionOffSet = $(this.hash).offset().top;

      // If in view
      if (sectionOffSet <= scrollLocation) {
         $(this).parent().addClass('active');
         $(this).parent().siblings().removeClass('active');
      }
   });

})