let searchState = true;

function toggleSearch() {
    if (!startState) toggleStart();
    if (searchState === true) {
        document.getElementById("searchMenu").style.width = "";
        document.getElementById("searchMenu").style.height = "";
    } else {
        document.getElementById("searchMenu").style.width = "0";
        document.getElementById("searchMenu").style.height = "0"
    }
    searchState = !searchState;
}