
function dragenter(event){ // added by me
    event.preventDefault();
}
function dragover(event){ // same
    event.preventDefault();
}
function drag(event){   //same
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event, element){
    console.log(element);
    event.preventDefault();
    var draggable_element_id = event.dataTransfer.getData("text");
   // element.querySelector(".dropArea").appendChild(document.getElementById(draggable_element_id));
    element.getElementsByClassName("dropArea")[0].appendChild(document.getElementById(draggable_element_id));
}
