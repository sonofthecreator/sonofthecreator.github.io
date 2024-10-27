let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }else{
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}

let swiperCards = new Swiper('.products-container', {
  loop: true,
  spaceBetween: 50,
  grabCursor:true,
  center:true,
  autoplay:true,
  speed: 500,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints:{
      0:{
          slidesPerView:1,
      },
      500:{
          slidesPerView:1,
      },
      800:{
          slidesPerView:2,
      },
      1000:{
          slidesPerView:3,
      },
      1400:{
          slidesPerView:4,
      }
  }

});