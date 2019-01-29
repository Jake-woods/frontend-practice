const navLinks = $('.nav-link');

$(window).scroll(() => {
   const scrollLocation = $(this).scrollTop();

   navLinks.each(function () {
      const sectionOffSet = $(this.hash).offset().top;

      // If in view
      if (sectionOffSet <= scrollLocation) {
         $(this).parent().addClass('active');
         $(this).parent().siblings().removeClass('active')
      }
   })
})