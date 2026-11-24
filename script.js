function showFact() {
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("fact").textContent =
        "I love Numair Ahmed \"Saad\" Chungtai";
}

function namea() {
    let name = document.getElementById("namee").value;
    if(name === "") {
        alert('You don\'t have a name? Ya donkey.')
    } else {
        alert("Hello, " + name + "!")
    }
}