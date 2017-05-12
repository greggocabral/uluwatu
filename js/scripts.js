var slideSpeed = 500;

var scrollPosition = 0;

var showingProduct = false;

function showProject(productSelectedId){

	console.log(productSelectedId);

	console.log(products);

	var product = [];
		product = $.grep(products, function(iproduct){
			return iproduct.id == productSelectedId;
		});

		$('#product-title').html(product[0].title);
		$('#img-col').html('');
		if(product[0].images != []){
			product[0].images.forEach(function(image){
				$('#img-col').addClass("col-xs-10 col-xs-offset-1");
				$('#img-col').append('<div class="row mt-20"><img class="product-img" src="'+image+'"></div>');
			});
			
		} else {
			$('#img-col').removeClass("col-sm-4 col-xs-10 offset-xs-1");
			$('#product-img').html('');
		}

		$('#product-description').html(product[0].description);

		if(product[0].link != undefined){
			$('#product-link').html('<a href="http://'+product[0].link+'"> <i class="fa fa-shopping-cart sr-icons"></i> Comprar</a>');
		} 
		
}

function hideProduct(){

	showingProduct = false;

	$(".product-panel").animate({'margin-top': '-1000%'},slideSpeed);

	//scroll back to previous position
	$('html,body').animate({ scrollTop: scrollPosition }, slideSpeed);

	// $('body').css('overflow', 'auto');
		
}


$(document).ready(function() {

	$(".category-text").hide();
	$(".sub-category-text").hide();
	$(".product-panel").css({'margin-top': '-1000%'});


	$(".link-category" ).click(function() { 
	 		
	 	$(".category-text").slideUp(slideSpeed);
	 	$(".sub-category-text").slideUp(slideSpeed);
	 	$(this).next().slideDown(slideSpeed);

	});	

	$(".link-sub-category" ).click(function() { 
	 		
		$(".sub-category-text").slideUp(slideSpeed);

	 	$(this).next().slideDown(slideSpeed);
	});	

	$(".symbol-close" ).click(function() { 

		hideProduct();
		 		
	});

	$(".product" ).click(function() { 

		showingProduct = true;

		// get current scroll position
		scrollPosition = $(document).scrollTop();

		// scroll to top
		$('html,body').animate({ scrollTop: 0 }, slideSpeed);

		$(".product-panel").animate({'margin-top': '0%'},slideSpeed);
	 		
		var id = $(this).attr('id');
		
		showProject(id);


      	// $('body').css('overflow', 'hidden');
	    
	 		
	});	

	



});