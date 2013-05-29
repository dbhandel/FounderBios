$(function() {
	var founders = [{lastName: 'Handel', firstName: 'David', age: 60, id: 0}, 
		{lastName: 'Mazin', firstName: 'Lev', age: 33, id: 1},{lastName: 'Smallwood', firstName: 'April', age: 47, id: 2}];	
	
	function addNewOptions(array) {
		var length = array.length;
		for (i = 0; i< length; i++) {
			var 	founderLastName = array[i].lastName,
				founderId = array[i].id;  //need to figure out how to set this

			var node = Creatable.create(["option", founderLastName, {value: founderLastName}]);
			console.log(node);
			// document.body.select.appendChild(node)
			$("select").append(node);
		}
    	}
    	addNewOptions(founders);
    });
	 
	
			
 
/*founders.forEach(function(id, lastName) {
	var newOption = Creatable.create(["a", { href: "http://google.com" }, "Google"]);
	$("select").select.append(newOption);
	console.log('the last name is {a}'.supplant({a: id}));
	$('select').append("<option value = {a} > {b} </>option>".supplant({a: id, b: lastName}));
	})*/


/*String.prototype.supplant = function (o) {
	    return this.replace(/{([^{}]*)}/g,
	        function (a, b) {
	            var r = o[b];
	            return typeof r === 'string' || typeof r === 'number' ? r : a;*/



// Usage:
/*alert("I'm {age} years old!".supplant({ age: 29 }));
alert("The {a} says {n}, {n}, {n}!".supplant({ a: 'cow', n: 'moo' }));*/

