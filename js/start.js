var startState = true;
function toggleStart() {
    if (startState === true) {
        document.getElementById("start").style.width = "";
        document.getElementById("start").style.height = "";
    } else {
        document.getElementById("start").style.width = "0";
        document.getElementById("start").style.height = "0"
    }
    startState = !startState;
}
document.getElementById("desktop").addEventListener("click",function () {
    if (startState == false) return toggleStart();
})
function shutdown() {
    require("electron").remote.app.exit();
}