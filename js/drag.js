document.getElementById("desktop").addEventListener("dragend",function (drop) {
    drop.preventDefault();
    drop.target.style.opacity = "100";
    drop.target.style.left = drop.pageX + "px";
    drop.target.style.top = drop.pageY + "px";


})
document.getElementById("desktop").addEventListener("dragstart",function (drag) {
    drag.target.style.opacity = "0.4";
})