var list = document.getElementById("list")
function addtodo(){
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo_item.value))
    var deleteButton=document.createElement("button");
    var deltext = document.createTextNode("Delete");
    deleteButton.setAttribute("onClick","deleteitems(this)")
    deleteButton.appendChild(deltext)
    li.appendChild(deleteButton);
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.setAttribute("onClick","editItems(this)")
    editbtn.appendChild(edittext);

    li.appendChild(editbtn)
    console.log(li)
    list.appendChild(li)


}
function deleteitems(e){
    e.parentNode.remove();

}
function editItems(e){
     //console.log(e.parentNode)
    var value = e.parentNode.firstChild.nodeValue
    var editedvalue = prompt("enter edit value",value)
    e.parentNode.firstChild.nodeValue= editedvalue
}
function deleteall(){
    list.innerHTML=""
}