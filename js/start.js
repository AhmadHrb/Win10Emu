var startState = true;
function toggleStart() {
    startState = !startState;
document.getElementById("start").hidden = startState;

}
document.getElementById("desktop").addEventListener("click",function () {
    if (startState == false) return toggleStart();
})
function shutdown() {
    require("electron").remote.app.exit();
}