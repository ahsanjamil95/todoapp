 

var list =document.getElementById("list")
function addTodo(){
  var todo_item =document.getElementById("todo-item");

  // create li text node
  var li=document.createElement('li');
  li.setAttribute("class","mb-5")
  var litext=document.createTextNode(todo_item.value);
  li.appendChild(litext);

// create delete bbutton
  var delBtn = document.createElement('button');
  var delText = document.createTextNode("Delete");
  delBtn.setAttribute("class","btn");
  delBtn.setAttribute("class","bg-light");
  delBtn.setAttribute("class","ml-5");
  delBtn.setAttribute("onclick","deleteItem(this)");
  delBtn.appendChild(delText);

// create edit button
var editBtn = document.createElement('button');
  var editText = document.createTextNode("Edit");
  editBtn.setAttribute("class","btn");
  editBtn.setAttribute("class","bg-light");
  editBtn.setAttribute("class","ml-5");
  editBtn.setAttribute("onclick","editItem(this)");
  editBtn.appendChild(editText);


  li.appendChild(delBtn);
  li.appendChild(editBtn);
  list.appendChild(li)
  todo_item.value = "";
  console.log(li)
}




// delete function

function deleteItem(d){
    d.parentNode.remove()
}


// deleteall function

function deleteAll(){
  list.innerHTML = "";
}

// edititem function

function editItem(i){
  var val= prompt("new value", i.parentNode.firstChild.nodeValue);
  i.parentNode.firstChild.nodeValue=val;
}