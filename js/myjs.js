
$(document).ready(function(){



$.getJSON("https://api.airtable.com/v0/appIiozFdX3Mv6NcD/musics?pageSize=10&api_key=keythl8GoS7nMwIzL", function(data) {
		$.each(data.records, function( index, value ) {
			$(".template").append("<div class='col-md-6 col-sm-6 col-xs-12'><ul><li class='first'> <p>" + (index + 1)+ "</p><div class='trais-hone'></div><iframe src='"  + value.fields['spotify-link'] + "' frameborder='0' allowtransparency='true'></iframe><div class='likeshare'><img src='img/like.png'></div><div class='vote'><img src='img/plusone.png'></div></li></ul></div> ");			
		
		});

	});


$.getJSON("https://api.airtable.com/v0/appIiozFdX3Mv6NcD/musics?api_key=keythl8GoS7nMwIzL", function(data) {


		$.each(data.records, function( index, value ) {
			$(".template2").append("<div class='col-md-4 col-sm-4 col-xs-12'><ul><li class='first'><div class='trais-hone-1'></div><iframe src='"  + value.fields['spotify-link'] + "' frameborder='0' allowtransparency='true'></iframe><div class='likeshare'><img src='img/like.png'></div><div class='vote-1'><img src='img/plusone.png'></div></li></ul></div> ");			
		});
		//	console.log(data.records[0].fields.title);
	});




});