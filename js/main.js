$(function () { 
      
    const hamburger = document.getElementById('menu__btn');
    const headerMenu = document.getElementById('menu__list');
    const menuLink = document.querySelectorAll('.menu__link');
    const popUpBody = document.getElementById('popup');
    const openPopUp = document.querySelectorAll('.popup-open-btn');
    const closePopUp = document.getElementById('close-popup');  
    const form = document.getElementById('form');   
    
       
     
     

  $('.reasons__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/prev.arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next.arrow.svg"></button>',
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1271,
        settings: {
          slidesToShow: 3,
        }
      },  
       
      {
        breakpoint: 978,
        settings: {
          slidesToShow: 1, 
        }
      }, 
       
      {
        breakpoint: 701,
        settings: {
          dots: true,  
          slidesToShow: 1, 
        }
      }, 
       
      {
        breakpoint: 541,
        settings: {
          dots: true,  
          slidesToShow: 1,  
          arrows: false,
        }
      },
    ]
  });   
     
   
  
  
      hamburger.addEventListener('click', () => {
        headerMenu.classList.toggle('menu__list--active');
        hamburger.classList.toggle('menu__btn--open');
      })
  
      menuLink.forEach(link => {
        link.addEventListener('click', () => {
          headerMenu.classList.remove('menu__list--active');
          hamburger.classList.remove('menu__btn--open');
        })
      })
  
    openPopUp.forEach(link => {
        link.addEventListener('click', () => {
          popUpBody.classList.add('active-popup');
        })
      })
    
    
    
      closePopUp.addEventListener('click', () => {
        popUpBody.classList.remove('active-popup');
      }) 
         
       
      var input = document.querySelector("#phone");
     window.intlTelInput(input); 

      
       $("#form").validate({ 
          rules: {  
             phone:{ 
               required:true,    
            //  // phone:true, 
             
             },
            name:{ 
              required: true, 
             
            },
          }, 
          messages:{ 
            phone:{ 
               required:'Error'
             },  
             
            name:{ 
              required:'Error'
            },
          }
       }); 
     

});