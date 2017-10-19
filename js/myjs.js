

// $(document).ready(function(){
// 	$(".facet-title").click() {
// 		$(".element").toggle("slow");
// 	};
// })
$(document).ready(function(){
	$(".facet-title").click(function() {
		console.log('hehe');
		$(".element").toggle("slow");
	});


	$(".categorie-1").click(function () {
    	$(".categorie-1").addClass("active");
	});




$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$.getJSON("https://api.airtable.com/v0/appIiozFdX3Mv6NcD/musics?api_key=keythl8GoS7nMwIzL", 
		function(data) {

		counter = 1;
		$.each(data.records ,function( index, value ) {

			$("#musiques").append("\
						<div class='col-md-6 col-sm-6 col-xs-12'>\
						<ul>\
								<li class='first'> <p>"+counter+"</p> \
									<div class='trais-hone'>\
									</div>\
									<iframe src='"  + value.fields['spotify-link'] + "' frameborder='0' allowtransparency='true'></iframe>\
								</li>\
									<input type='checkbox' name='' id='btn' />\
								<label class='btn-love' for='btn'></label>\
									<div class='vote'>\
										<img src='img/plusone.png'>\
									</div>\
							</ul>\
						</div>");

			counter = counter +1;

			 // $('body').append("<div class='row'>" + "<div class='col-md-6 col-sm-6 col-xs-12'>" + "<ul>" + "<li>" +"<p>3</p>" + "<div class='trais-h'>" 
			 // 	+ "</div>" + " <iframe src=' "  + value.fields['spotify-link'] + " 'frameborder='0' allowtransparency='true'></iframe>" 
			 // 	+ "<div class='like'><img src='img/like.png'></div>" + "</div class='vote'><img src='img/plusone.png'>" + "</div>" + "</ul>" + "</div>"	+


			 // 	"<div class='col-md-6 col-sm-6 col-xs-12'>" + "<ul>" + "<li>" +"<p>3</p>" + "<div class='trais-h'>" 
			 // 	+ "</div>" + " <iframe src=' "  + value.fields['spotify-link'] + " 'frameborder='0' allowtransparency='true'></iframe>" 
			 // 	+ "<div class='like'><img src='img/like.png'></div>" + "</div class='vote'><img src='img/plusone.png'>" + "</div>" + "</ul>" + "</div>"	+ "</div>"




			 			 

			 

		});



		//	console.log(data.records[0].fields.title);


		}
);

});

