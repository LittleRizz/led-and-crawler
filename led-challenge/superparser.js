//I left a lot of my console.log commands in, because i wanted to show how I do a lot of 
// experiementing with it to figure out where and when processes take place


// //This is the setup i used to create letter combinations
// var matrix_a = [
// 	[1, 1, 1],
//   	[1, 0, 1],
//  	[1, 1, 1],
//  	[1, 0, 1],
//  	[1, 1, 1]
// ];
// //I would stringify the matricies, and copy and paste that into my dictionary, to avoid typeos
// var str_matrix = matrix_a.toString();

// console.log(str_matrix);


//Here is my binary dictionary where i can compare pieces of a string to see what letters it matches
// up with
var dict = {
	"a": "0,1,0,1,0,1,1,1,1,1,0,1,1,0,1",
	"b": "1,0,0,1,1,0,1,0,0,1,1,0,1,0,0",
	"c": "1,1,1,1,0,0,1,0,0,1,0,0,1,1,1",
	"d": "1,0,0,1,1,0,1,0,1,1,1,0,1,0,0",
	"e": "1,1,1,1,0,0,1,1,1,1,0,0,1,1,1",
	"f": "1,1,1,1,0,0,1,1,1,1,0,0,1,0,0",
	"g": "1,1,1,1,0,0,1,0,1,1,0,1,1,1,1",
	"h": "1,0,1,1,0,1,1,1,1,1,0,1,1,0,1",
	"i": "1,1,1,0,1,0,0,1,0,0,1,0,1,1,1",
	"j": "0,0,1,0,0,1,0,0,1,1,0,1,1,1,1",
	"k": "1,0,1,1,1,0,1,0,0,1,1,0,1,0,1",
	"l": "1,0,0,1,0,0,1,0,0,1,0,0,1,1,1",
	"m": "1,0,1,1,1,1,1,0,1,1,0,1,1,0,1",
	"n": "0,0,0,0,0,0,1,1,1,1,0,1,1,0,1",
	"o": "1,1,1,1,0,1,1,0,1,1,0,1,1,1,1",
	"p": "1,1,1,1,0,1,1,1,1,1,0,0,1,0,0",
	"q": "1,1,1,1,0,1,1,0,1,1,1,1,1,1,1",
	"r": "1,1,0,1,0,1,1,1,0,1,1,0,1,0,1",
	"s": "1,1,1,1,0,0,1,1,1,0,0,1,1,1,1",
	"t": "1,1,1,0,1,0,0,1,0,0,1,0,0,1,0",
	"u": "1,0,1,1,0,1,1,0,1,1,0,1,1,1,1",
	"v": "1,0,1,1,0,1,1,0,1,1,0,1,0,1,0",
	"w": "1,0,1,1,0,1,1,0,1,1,1,1,1,0,1",
	"x": "1,0,1,1,0,1,0,1,0,1,0,1,1,0,1",
	"y": "1,0,1,1,0,1,0,1,0,0,1,0,0,1,0",
	"z": "1,1,1,0,0,1,0,1,0,1,0,0,1,1,1",
	"1": "0,1,0,1,1,0,0,1,0,0,1,0,1,1,1",
	"2": "1,1,1,0,0,1,1,1,0,1,0,0,1,1,1",
	"3": "1,1,1,0,0,1,1,1,1,0,0,1,1,1,1",
	"4": "0,0,1,0,1,1,1,1,1,0,0,1,0,0,1",
	"5": "1,1,1,1,0,0,1,1,0,0,0,1,1,1,1",
	"6": "1,0,0,1,0,0,1,1,0,1,0,1,1,1,1",
	"7": "1,1,1,0,0,1,0,0,1,0,0,1,0,0,1",
	"8": "1,1,1,1,0,1,0,1,0,1,0,1,1,1,1",
	"9": "1,1,1,1,0,1,0,1,1,0,0,1,0,0,1",
	"0": "1,1,1,1,0,1,1,1,1,1,0,1,1,1,1"
};

//define global variables
var led_results = [];
var status = false;
var output = document.getElementById('textBoxOutput');
var doneAndDone = "";
var booyah;


// this would take the approiate string of numbers, and compare their stringified 
// layout to the dictionary i assembled.  When a match is found, the key-name for the matching value is
// pushed into a new array.
function letterTest (string_input){
	var NumString = string_input;
		for (var key in dict){
			if (NumString === dict[key]){
				console.log("letter found!")
				status = true;
				led_results.push(key);
				console.log(key);
			};
		};
	console.log(status);
};


// this takes the full string input, and breaks it down into the properly-sized segments the other 
// function needs to be able to parse.  Then my results-array pushes together all the letters.
// if you input the numbers incorrectly, then the dictionary values will be off, and a false-flag
// is triggered, and a pop up lets you know you messed up on the input.

function phraseTest (long_string_input){
	var chunks = [];
	var final_input = long_string_input;
	for (var i = 0, charsLength = final_input.length; i < charsLength; i += 30){
		chunks.push(final_input.substring(i, i + 29));
	}
	var output = final_input.substring(0,29);
	console.log(final_input.length);
	console.log(chunks);
	for (var jojo in chunks){
		letterTest(chunks[jojo]);
	};
	console.log("completed");
	console.log(led_results.join(""));
	booyah = led_results.join("");
	if (status == false){
	window.alert("Whoops, not a number there, big guy.  Better check your input.");
	};
	chunks = [];

};

// the bit that grabs info from the DOM element on the page, and places the new information back 
// onto the page.  And then cleans up, so inputs don't stack up.
function letsDoThis(){
	var meowmeow = document.getElementById('textBoxInput').value;
	console.log(meowmeow);
	phraseTest(meowmeow);
	console.log("test is done")
	console.log(booyah);
	document.getElementById("textBoxOutput").innerHTML = booyah;
	led_results = [];
	status = false;


};
