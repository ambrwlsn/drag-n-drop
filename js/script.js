function allowDrop(ev) {
 ev.preventDefault();
}

function drag(ev) {
 console.log("dragStart");
 ev.dataTransfer.setData("content", ev.target.id);
}

function drop(ev) {
 ev.preventDefault();
 var data = ev.dataTransfer.getData("content");
 ev.target.appendChild(document.getElementById(data));
}
