$(document).ready(function(){
	// barbell buttons
	const barbellBtns = $(".btn-barbell");

	// weight buttons
	const weightBtns = $(".btn-plate");

	// html element to display total weight
	const total = $(".total");

	// start over button
	const startOver = $(".start-over");

	// array to store the weights that are selected
	let weightsArray = [ ];

	// variable to store the barbell weight selected
	let barbellWeight;

	// variable to store the weightsArray + barbellWeight
	let totalWeight;

	// add barbell weight
	barbellBtns.on('click touch', function(e) {
		// prevent the thing from doing the thing
		e.preventDefault();

		// grab the data attribute
		let tappedBarbell = $(this).data("weight");

		// convert string to a number - using parseInt here because they are integers
		barbellWeight = (parseInt(tappedBarbell));

		// setting the total text to the barbell weight
		total.text("Weight Total: " + barbellWeight);
	});

	weightBtns.on('click touch', function (e) {
		// prevent the thing from doing the thing
		e.preventDefault();

		// check to see if user has selected barbellWeight first
		if (barbellWeight) {
			// convert the string to a number
			let weight = (parseFloat($(this).data("weight")));

			// grab the data-quantity attribute and turn it into a number
			let plateQuantity = parseInt($(this).find(".plate-quantity").attr("data-quantity"));

			// grab the plate-quantity span
			let plateQuantityBadge = $(this).find(".plate-quantity");

			// update plateQuantity
			// TODO optimize this
			plateQuantityBadge.attr('data-quantity', plateQuantity + 2 );
			plateQuantityBadge.text(plateQuantity + 2);

			// add the number to the weightsArrayh
			weightsArray.push(weight*2);

			// add all the values in the array
			totalWeight = weightsArray.reduce((total, amount) => total + amount);

			// display the totalWeight on the page
			total.text("Weight Total: " + (totalWeight + barbellWeight));

		} else {
			alert("Hold on there meathead. Please select barbell weight first!");
		}
	});

	startOver.on('click touch', function(e) {
		// prevent the thing from doing the thing
		e.preventDefault();

		// set the weightsArray length to 0
		weightsArray.length = 0;

		// set barbellWeight to 0
		barbellWeight = 0;

		// display updated weight on page
		total.text("Weight Total: 0");

	});

	// TODO: display which weights you have selected visually

	// TODO: only allow 1 barbell selection

	// TODO show barbell with weights selected
});
