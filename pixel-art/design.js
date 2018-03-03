
// make a grid
function makeGrid(){
	
	let rows = $('#input_height').val();
	let columns = $('#input_width').val();
	let table = $('#pixel_canvas');
	
	
	//clear the table
	table.children().remove();
	
	//Creat rows
	for(let i = 0; i < rows; i++){
		table.append('<tr></tr>');
		//Creat columns
		for(let j = 0; j < columns; j++) {
			table.children().last().append('<td></td>');
		}
	}
	
}

//Call the makeGrid function and avoid page reload and submit
$("#button").click(function(evt) {
  evt.preventDefault(); 
  makeGrid();
});


//Lisent for click events
	$('#pixel_canvas').on("click", "td", function() {
    
    let color = $("#colorPicker").val();
    //Pick the background color
	if($(this).attr("bgcolor") !== color) {
		$(this).attr("bgcolor", color);
	}
	//Delete the background color
	else {
		$(this).attr("bgcolor", "");
	}
   
  });