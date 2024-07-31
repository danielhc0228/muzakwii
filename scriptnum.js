function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function toggleSubNav() {
    var subNavContent = document.getElementById("subNavContent");
    if (subNavContent.style.display === "block") {
        subNavContent.style.display = "none";
    } else {
        subNavContent.style.display = "block";
    }
}

const setNum = () => {
    var x = Math.floor(Math.random() * 10 + 1);
    Numtext.innerHTML = x;
};

genNewNum.addEventListener("click", setNum);

function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generate() {
    let min = document.getElementById("min_value").value;
    let max = document.getElementById("max_value").value;
    let rand = randNum(min, max);
    document.getElementById("Numtext2").innerHTML = rand;
}
document.getElementById("genNewNum2").addEventListener("click", generate);
