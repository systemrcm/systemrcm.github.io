$(document).ready(function(){
	 var banner = {
	 	padre: $('#banner6'),
	 	numeroSlides: $('#banner6').children('.slide').length,
	 	posicion: 1
	  }

	 banner.padre.children('.slide').first().css({
	 	'left': 0
	 });


	 var altoBanner = function(){
	 	var alto = banner.padre.children('.slide').outerHeight();

	 	banner.padre.css({
	 		'height': alto + 'px'
	 	});
	 }

	 altoBanner();

	 $(window).resize(function(){
	 	altoBanner();

	 });

/*-----------------------------
	BTN SIGUIENTE
-------------------------------*/

	 $('#banner-next6').on('click', function(e){
		e.preventDefault();

		if (banner.posicion < banner.numeroSlides) {

			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner6 .active').removeClass('active').next().addClass('active').animate({
			'left':'0'
		});

			$('#banner6 .active').prev().animate({
				'left': '-100%'
			})

			banner.posicion=banner.posicion + 1;

		}else{

			$('#banner6 .active').animate({
				'left': '-100%'
			});

			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner6 .active').removeClass('active');
			banner.padre.children('.slide').first().addClass('active').animate({
				'left': '0'
			});

			banner.posicion = 1;
		}
	});

/*-----------------------------
	BTN ANTERIOR
-------------------------------*/
	

	 $('#banner-prev6').on('click', function(e){
		e.preventDefault();

		if (banner.posicion > 1) {

			banner.padre.children().not('.active').css({
				'left': '-100%'
			});

			$('#banner6 .active').animate({
				'left': '100%'
			});

			$('#banner6 .active').removeClass('active').prev().addClass('active').animate({
			'left':'0'
		}); 

			banner.posicion=banner.posicion - 1;

		}else{

			banner.padre.children().not('.active').css({
				'left': '-100%'
			});

			$('#banner6 .active').animate({
				'left': '100'
			});

			$('#banner6 .active').removeClass('active');
			banner.padre.children().last().addClass('active').animate({
				'left': '0'
			});

			banner.posicion = banner.numeroSlides;
		}
	});
 });

