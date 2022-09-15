

var country = new Swiper('.country-slide', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerGroup:1,

	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
	grabCursor:true,
	watchSlidesProgress: true,

	breakpoints: {
    // when window width is >= 320px
    200: {
    	navigation: {
    		enabled:false,
    	},
    	slidesPerGroup:1,

    	centeredSlides: true,
    	slidesPerView: 1.7,
    	spaceBetween: 20,
    },

    320: {
    	navigation: {
    		enabled:false,
    	},
    	slidesPerGroup:1,

    	centeredSlides: true,
    	slidesPerView: 1.2,
    	spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
    	navigation: {
    		enabled:false
    	},
    	slidesPerGroup:1,

    	centeredSlides: true,
    	slidesPerView: 1.6,
    	spaceBetween: 0
    },
    // when window width is >= 640px
    640: {
    	navigation: {
    		enabled:false,
    	},
    	slidesPerGroup:1,

    	centeredSlides: true,	
    	slidesPerView: 1.8,
    	spaceBetween: 10,
    },
    900: {
    	navigation: {
    		enabled:true,
    	},
    	slidesPerGroup:1,

    	slidesPerView: 3,
    	spaceBetween: -20,
    },
    1200:{
    	navigation: {
    		enabled:true,
    	},
    	slidesPerGroup:1,
    	slidesPerView:3,
    	spaceBetween:-30
    }
}


});



var swiper = new Swiper('.category', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerGroup:1,
	grabCursor:true,
	slidesPerView:12,
	watchSlidesProgress: true,

scrollbar: {
    enabled:false
  },
	breakpoints: {
		200: {
scrollbar: {
	enabled:true,
    el: '.swiper-scrollbar',
    draggable: true,
  },
			navigation: {
				enabled:false,
			},
			slidesPerGroup: 2,
			slidesPerView: 2,
			spaceBetween: -50,
		},
    // when window width is >= 320px
    320: {
    	scrollbar: {
    		enabled:true,
    el: '.swiper-scrollbar',
    draggable: true,
  },
    	navigation: {
    		enabled:false,
    	},
    	slidesPerGroup: 4,
    	slidesPerView: 4,
    	spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
    	scrollbar: {
    		enabled:true,
    el: '.swiper-scrollbar',
    draggable: true,
  },
    	navigation: {
    		enabled:false,
    	},
    	slidesPerGroup: 6,
    	slidesPerView: 6,
    	spaceBetween: -10,
    },
    // when window width is >= 640px
    640: {
scrollbar: {
	enabled:true,
    el: '.swiper-scrollbar',
    draggable: true,
  },
    	slidesPerView: 8,
    	spaceBetween: -30,
    },
    900: {
    	

    	slidesPerView: 10,
    	spaceBetween: -20,
    },
    1200:{

    	slidesPerGroup:1,
    	slidesPerView:10,
    	spaceBetween:-30
    }
}

});





const sponsors = new Swiper('.sponsors', {

	slidesPerView:4,
	centeredSlides:true,
	spaceBetween:200,

	autoplay: {
		delay : 400
	},
	loop: true,
	speed: 2800,
	stopOnLastSlide:false,
	watchSlidesProgress: true,

	breakpoints: {
    // when window width is >= 320px
    200: {
    	navigation: {
    		enabled:false,
    	},
    	slidesPerGroup:1,

    	centeredSlides: true,
    	slidesPerView: 1,
    	spaceBetween: 20,
    },

    320: {
    	navigation: {
    		enabled:false,
    	},
    	slidesPerGroup:1,

    	centeredSlides: true,
    	slidesPerView: 1,
    	spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
    	navigation: {
    		enabled:false
    	},
    	slidesPerGroup:1,

    	centeredSlides: true,
    	slidesPerView: 1.2,
    	spaceBetween: 60
    },
    // when window width is >= 640px
    640: {
    	navigation: {
    		enabled:false,
    	},
    	slidesPerGroup:1,

    	centeredSlides: true,	
    	slidesPerView: 1.3,
    	spaceBetween: 10,
    },
    900: {
    	navigation: {
    		enabled:true,
    	},
    	slidesPerGroup:1,

    	slidesPerView: 2,
    	spaceBetween: -30,
    },
    1200:{
    	navigation: {
    		enabled:true,
    	},
    	slidesPerGroup:1,
    	slidesPerView:3,
    	spaceBetween:-30
    }
}


});


var nav_link1= document.querySelector('.nav-link1');
var nav_link2= document.querySelector('.nav-link2');
var nav_link3= document.querySelector('.nav-link3');
var nav_link4= document.querySelector('.nav-link4');
var nav_link5= document.querySelector('.nav-link5');
var menu_Off = document.getElementById('menu-off');
var slider1 = document.getElementById('category1');
var slider2 = document.getElementById('country-slider');
var navList = document.getElementById('nav-list');
var login_register = document.querySelector('.login-panel');

var mediaQuery = window.matchMedia('(max-width: 900px)')
if (mediaQuery.matches) {
	login_register.style.display='none';
}

function menuOff(){
	if (document.getElementById("check").checked==true) {
		navList.style.zIndex = '999';

		document.body.style.position = 'fixed';
		nav_link1.style.display = "block";
		nav_link2.style.display = "block";

		nav_link3.style.display = "block";

		nav_link4.style.display = "block";

		nav_link5.style.display = "block";

		menu_Off.innerHTML="Menüyü kapat";

		login_register.style.display='flex';

		slider1.style.zIndex = '0';
		slider2.style.zIndex = '0';

	}
	else{
		navList.style.zIndex = '0';

		document.body.style.position = '';
		nav_link1.style.display = "none";
		nav_link2.style.display = "none";

		nav_link3.style.display = "none";

		nav_link4.style.display = "none";

		nav_link5.style.display = "none";

		menu_Off.innerHTML="";

		login_register.style.display='none';
		slider1.style.zIndex = '1';
		slider2.style.zIndex = '1';

	}
}

