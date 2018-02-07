// NOTE: I have used FileReader API to handle reading files
// find the API at:  https://developer.mozilla.org/en-US/docs/Web/API/FileReader

// HANDLING FILE UPLOAD

var datapoints = [];
// var threshold = parseInt(document.getElementById('threshold').value);
// console.log(threshold);
var csv;

// handleFiles is a method that makes sure the browser supports file reader before we continue
function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.

    console.log("files: ", files);
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	csv = event.target.result;
	
	provideThreshold();
}

function errorHandler(event) {
	if(event.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

// END OF HANDLING FILE UPLOAD
