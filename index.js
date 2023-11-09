var teacherCards = document.querySelectorAll(".teacher-card");
var currentIndex = 0;

function showCard(index) {
    teacherCards.forEach((card, i) => {
        card.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % teacherCards.length;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + teacherCards.length) % teacherCards.length;
    showCard(currentIndex);
}

showCard(currentIndex);


// Add event listeners to navigate the carousel
document.getElementById("next-button").addEventListener("click", nextCard);
document.getElementById("prev-button").addEventListener("click", prevCard);

var abc=JSON.parse(localStorage.getItem("login"))

function login2()
{
    if(abc)
    {
        window.location.href="content.html";
    }
    else{
        alert("Please signUp or Login")
    }
}
