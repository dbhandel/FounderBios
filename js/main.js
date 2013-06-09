$(function() {
	var founders = [{lastName: 'Handel', firstName: 'David', age: 60, id: 0}, 
		{lastName: 'Mazin', firstName: 'Lev', age: 33, id: 1},{lastName: 'Smallwood', firstName: 'April', age: 47, id: 2}];	
	$('.modal').hide();
	function addNewOptions(array) {
		var length = array.length;
		for (i = 0; i< length; i++) {
			var 	founderLastName = array[i].lastName,
				founderId = array[i].id;  //need to figure out how to set this

			var node = Creatable.create(["option", {value: founderId}, founderLastName]);


			// document.body.select.appendChild(node)
			$("select").append(node);
		}
    	}
    	function findByChosenID (array, chosenId) {
    		//var chosenID = parseInt(chosenID, 10);
		for (i=0; i < array.length; i++) {
			 if (array[i].id === parseInt(chosenId, 10)) {
			 	console.log(array[i]);
			 	return array[i];
			 }
		}

		return null;
	}
    	addNewOptions(founders);
	 $('.founders').change(function() {
	  	var chosenId = $(".founders>option:selected").val(); 
	  	var selectedFounder = findByChosenID (founders, chosenId);
	  	if (selectedFounder) {
		  	$('.firstName').text(selectedFounder.lastName);
		  	$('.lastName').text(selectedFounder.firstName);
		  	$('.age').text(selectedFounder.age);  
	  	}
	  	else {
	  		$('.firstName').text("");
	  		$('.lastName').text("");
	  		$('.age').text("");  
	  	} 	
	});
	 var $close = $('.close')
	$close.mouseover(function () {
		$close.css("cursor", "pointer");
	} );
	$close.click(function () {
		// $('.modal').attr("hidden", "true");
		$('.modal').toggle();
		$(".page").css({ opacity: 1.0 });
		$(".showmodal").attr('disabled', false);
	})
	$(".showModal").click(function() {
		$('.modal').toggle();
		$close.attr("disabled");
		$(".page").css({ opacity: 0.3 });
		$(".showmodal").attr('disabled', true);
	})
});



			
 


