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

const difficultySelect = document.getElementById("difficultySelect");
const startButton = document.getElementById("startButton");
const difficultySelection = document.getElementById("difficultySelection");
const gameContent = document.getElementById("gameContent");

startButton.addEventListener("click", function () {
    const selectedDifficulty = difficultySelect.value;
    difficultySelection.style.display = "none";
    gameContent.style.display = "block";

    // Call a function to start the game based on the selected difficulty
    startGame(selectedDifficulty);
});

function startGame(difficulty) {
    let maxTime;
    let easyimg1 = "images/img-1.png";
    let easyimg2 = "images/img-2.png";
    let easyimg3 = "images/img-3.png";
    let easyimg4 = "images/img-4.png";
    let easyimg5 = "images/img-5.png";
    let easyimg6 = "images/img-6.png";
    let norimg1 = "images/nimg-1.png";
    let norimg2 = "images/nimg-2.png";
    let norimg3 = "images/nimg-3.png";
    let norimg4 = "images/nimg-4.png";
    let norimg5 = "images/nimg-5.png";
    let norimg6 = "images/nimg-6.png";
    let hardimg1 = "images/himg-1.png";
    let hardimg2 = "images/himg-2.png";
    let hardimg3 = "images/himg-3.png";
    let hardimg4 = "images/himg-4.png";
    let hardimg5 = "images/himg-5.png";
    let hardimg6 = "images/himg-6.png";

    switch (difficulty) {
        case "easy":
            maxTime = 60;
            document.getElementById("imageid1").src = easyimg1;
            document.getElementById("imageid2").src = easyimg2;
            document.getElementById("imageid3").src = easyimg3;
            document.getElementById("imageid4").src = easyimg4;
            document.getElementById("imageid5").src = easyimg5;
            document.getElementById("imageid6").src = easyimg6;
            break;
        case "normal":
            maxTime = 45;
            document.getElementById("imageid1").src = norimg1;
            document.getElementById("imageid2").src = norimg2;
            document.getElementById("imageid3").src = norimg3;
            document.getElementById("imageid4").src = norimg4;
            document.getElementById("imageid5").src = norimg5;
            document.getElementById("imageid6").src = norimg6;
            break;
        case "hard":
            maxTime = 30;
            document.getElementById("imageid1").src = hardimg1;
            document.getElementById("imageid2").src = hardimg2;
            document.getElementById("imageid3").src = hardimg3;
            document.getElementById("imageid4").src = hardimg4;
            document.getElementById("imageid5").src = hardimg5;
            document.getElementById("imageid6").src = hardimg6;
            break;
        default:
            maxTime = 30;
    }

    const difficultySelection = document.getElementById("difficultySelection");
    const gameContent = document.getElementById("gameContent");

    difficultySelection.style.display = "none";
    gameContent.style.display = "block";

    const cards = document.querySelectorAll("#gameContent .card");
    const flipsTag = document.querySelector("#gameContent .flips b");
    const refreshBtn = document.querySelector("#gameContent .details button");

    const timeTag = document.querySelector(".time b");

    let timeLeft = maxTime;
    let flips = 0;
    let matchedCard = 0;
    let disableDeck = false;
    let isPlaying = false;
    let cardOne, cardTwo, timer;

    function initTimer() {
        if (timeLeft <= 0) {
            return clearInterval(timer);
        }
        timeLeft--;
        timeTag.innerText = timeLeft;
    }

    function flipCard({ target: clickedCard }) {
        if (!isPlaying) {
            isPlaying = true;
            timer = setInterval(initTimer, 1000);
        }
        if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
            flips++;
            flipsTag.innerText = flips;
            clickedCard.classList.add("flip");
            if (!cardOne) {
                return (cardOne = clickedCard);
            }
            cardTwo = clickedCard;
            disableDeck = true;
            let cardOneImg = cardOne.querySelector(".back-view img").src;
            let cardTwoImg = cardTwo.querySelector(".back-view img").src;
            matchCards(cardOneImg, cardTwoImg);
        }
    }

    function matchCards(img1, img2) {
        if (img1 === img2) {
            matchedCard++;
            if (matchedCard == 6 && timeLeft > 0) {
                return clearInterval(timer);
            }
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            cardOne = cardTwo = "";
            disableDeck = false;
            return;
        }

        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }

    function shuffleCard() {
        timeLeft = maxTime;
        flips = matchedCard = 0;
        cardOne = cardTwo = "";
        clearInterval(timer);
        timeTag.innerText = timeLeft;
        flipsTag.innerText = flips;
        disableDeck = isPlaying = false;

        let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
        arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

        if (difficulty == "easy") {
            cards.forEach((card, index) => {
                card.classList.remove("flip");
                let imgTag = card.querySelector(".back-view img");
                setTimeout(() => {
                    imgTag.src = `images/img-${arr[index]}.png`;
                }, 500);
                card.addEventListener("click", flipCard);
            });
        } else if (difficulty == "normal") {
            cards.forEach((card, index) => {
                card.classList.remove("flip");
                let imgTag = card.querySelector(".back-view img");
                setTimeout(() => {
                    imgTag.src = `images/nimg-${arr[index]}.png`;
                }, 500);
                card.addEventListener("click", flipCard);
            });
        } else {
            cards.forEach((card, index) => {
                card.classList.remove("flip");
                let imgTag = card.querySelector(".back-view img");
                setTimeout(() => {
                    imgTag.src = `images/himg-${arr[index]}.png`;
                }, 500);
                card.addEventListener("click", flipCard);
            });
        }

        refreshBtn.addEventListener("click", function () {
            gameContent.style.display = "none";
            difficultySelection.style.display = "flex"; // Change display to flex
            difficultySelection.style.alignItems = "center"; // Add this line
            difficultySelection.style.justifyContent = "center"; // Add this line
        });
    }

    shuffleCard();

    refreshBtn.addEventListener("click", shuffleCard);

    cards.forEach((card) => {
        card.addEventListener("click", flipCard);
    });
}
