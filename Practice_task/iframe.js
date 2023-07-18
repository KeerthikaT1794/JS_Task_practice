

function myFunction() {
    const x = document.getElementById("mySelect").value;
    const y = document.getElementById("myInput").value;
    document.getElementById("myframe").src = x + "/search?q=" + y;
}