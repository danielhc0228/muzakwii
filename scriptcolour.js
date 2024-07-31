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

const setBg = () => {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = 6 - x.length;
    var z = "000000";
    var z1 = z.substring(0, y);
    var colour = "#" + z1 + x;

    document.body.style.backgroundColor = colour;
    colourtxt.innerHTML = colour;
};

genNew.addEventListener("click", setBg);
