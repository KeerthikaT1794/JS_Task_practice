

function addData() {
	let firstname = document.getElementById('firstname').value;
	let lastname = document.getElementById('lastname').value;
	let address = document.getElementById('address').value;

	if (firstname == "" || lastname == "" || address == "") {
		alert("Please enter something first!");
	} else {
		let html = "";

		html = "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + address + "</td></tr>";

		document.getElementById('result').innerHTML += html;

		document.getElementById('firstname').value = "";
		document.getElementById('lastname').value = "";
		document.getElementById('address').value = "";
	}

}