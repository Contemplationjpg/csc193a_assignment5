function bigger() {
    document.getElementById("Text").style.fontSize = "24pt";
}
function fancify() {
    document.getElementById("Text").style.fontWeight = "bold";
    document.getElementById("Text").style.color = "blue";
    document.getElementById("Text").style.textDecoration = "underline";
}

function borify() {
    document.getElementById("Text").style.fontWeight = ""
    document.getElementById("Text").style.color = "black";
    document.getElementById("Text").style.textDecoration = "";
}

function moo() {
    var str = document.getElementById("Text").value;
    var parts = str.split(".");
    var newStr = parts.join("Moo.");
    document.getElementById("Text").value = newStr;
}
