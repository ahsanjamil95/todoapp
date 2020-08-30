

function getVal(){
	var input = document.getElementById("input");
	if(input.value === ""){
		var req = document.getElementById("req");
		req.innerHTML = "Required Field";
		req.delay(1000).remove();
	}else{
	var p = document.createElement("p");
	p.setAttribute("class","pgf");
	var text = document.createTextNode(input.value);
	p.appendChild(text);
	var div = document.getElementById("main");
	div.appendChild(p);
	
	// delete btn
	var del_btn = document.createElement("button");
	var del_text = document.createTextNode("Delete");
		del_btn.setAttribute("onclick","remove(this)");
	del_btn.setAttribute("class","del");
	del_btn.appendChild(del_text);
	
	// update btn
	var updt_btn = document.createElement("button");
	var updt_text = document.createTextNode("Update");
	updt_btn.setAttribute("onclick","updt(this)");
	updt_btn.setAttribute("class","updt");
	updt_btn.appendChild(updt_text);
	
	// append del+ update btn
	p.appendChild(del_btn);
	p.appendChild(updt_btn);
	
	
	input.value = "";
	 
}	
}

// delete one item
function remove(e){
	e.parentNode.remove();
}
// delete all function
function dellAll(){
	main.innerHTML ="";
}
// update one item
function updt(e){
	var userInput = prompt("New Value Enter",e.parentNode.firstChild.nodeValue);
	e.parentNode.firstChild.nodeValue = userInput;
	
	
}







