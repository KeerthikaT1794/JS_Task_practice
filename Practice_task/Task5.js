
let stu = document.createElement('div');
document.body.appendChild(stu)

let st_hd = document.createElement('h2')
st_hd.setAttribute('align', 'center')
st_hd.innerText = "Enter details to append data into a table dynamically"
stu.appendChild(st_hd)




let det = document.createElement('div');
det.setAttribute('id','form1')
stu.appendChild(det);

let f1 = document.createElement('form')
f1.setAttribute('align', 'center')
det.appendChild(f1)




let det1 = document.createElement('div');
f1.appendChild(det1);

let l1 = document.createElement('label');
l1.innerText = "SNo";
det1.appendChild(l1)

let In1 = document.createElement('input');
In1.setAttribute('type','text');
In1.setAttribute('id','SNo');
det1.appendChild(In1)







let det2 = document.createElement('div');
f1.appendChild(det2);

let l2 = document.createElement('label');
l2.innerText = "Name";
det2.appendChild(l2)

let In2 = document.createElement('input');
In2.setAttribute('type','text');
In2.setAttribute('id','Name');
det2.appendChild(In2)





let det3= document.createElement('div');
f1.appendChild(det3);

let l3 = document.createElement('label');
l3.innerText = "Roll_no";
det3.appendChild(l3)

let In3 = document.createElement('input');
In3.setAttribute('type','text');
In3.setAttribute('id','Roll_no');
det3.appendChild(In3)





/* <center><button type="button" class="btn btn-primary" onclick="addData();">Add Data</button></center> */


let butn = document.createElement('center')
f1.appendChild(butn)

let btn = document.createElement('button')
btn.setAttribute('type','button')
btn.setAttribute('onclick','addData()')
btn.innerText = "Append data"
butn.appendChild(btn)


let St_details = document.createElement('div');
St_details.setAttribute('id','student');
stu.appendChild(St_details)

let header = document.createElement("h1");
header.setAttribute('align','center');
header.innerText = "Student Details";
St_details.appendChild(header); 

let table = document.createElement('table');
table.setAttribute('border', '5px')
table.setAttribute('cellSpacing', '0px')
table.setAttribute('cellPadding', '20px')
table.setAttribute('align', 'center')
table.setAttribute('background-color', '#DEF1CE');
St_details.appendChild(table)

let trow = document.createElement('tr');
table.appendChild(trow);

let thead = document.createElement('th');
thead.innerText = "S.No";
trow.appendChild(thead);

let thead1 = document.createElement('th');
thead1.innerText = "ST_Name";
trow.appendChild(thead1);

let thead2 = document.createElement('th');
thead2.innerText = "ST_No";
trow.appendChild(thead2)

// let thead3 = document.createElement('th');
// thead3.innerText = "ST_Course";
// trow.appendChild(thead3)

// let thead4 = document.createElement('th');
// thead4.innerText = "ST_Marks";
// trow.appendChild(thead4)

// let thead5 = document.createElement('th');
// thead5.innerText = "ST_%";
// trow.appendChild(thead5)

let tbody = document.createElement('tbody');
tbody.setAttribute('id','result')
table.appendChild(tbody)

function addData(){
	let SNo=document.getElementById('SNo').value;
	let Name=document.getElementById('Name').value;
	let Roll_no=document.getElementById('Roll_no').value;
 
	if(SNo =="" || Name =="" || Roll_no==""){
		alert("Please Enter Values...");
	}else{
		let html="";
		
		html="<tr><td>"+SNo+"</td><td>"+Name+"</td><td>"+Roll_no+"</td></tr>";
		
		document.getElementById('result').innerHTML+=html;
		document.getElementById('SNo').value="";
		document.getElementById('Name').value="";
		document.getElementById('Roll_no').value="";
	}
 
}