const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 5;

function updateCounter(newValue) {
    count = newValue;
    counter.textContent = count;
    counter.classList.add("changed");
    setTimeout(() => counter.classList.remove("changed"), 300);
}

function updateCounter(newValue) {
    count = newValue;
    counter.textContent = count;

    updateBackground();
}


increaseBtn.addEventListener("click", () => {
    updateCounter(count + 1);
});

resetBtn.addEventListener("click", () => {
    updateCounter(0);
});

decreaseBtn.addEventListener("click", () => {
    updateCounter(count - 1);
});

function updateBackground() {
    const counterCard = document.querySelector(".counter-card");
    const backgrounds = [
        "url('public/images/bg-1.jpeg') no-repeat center center/cover",
        "url('public/images/bg-2.jpeg') no-repeat center center/cover",
        "url('public/images/bg-3.jpeg') no-repeat center center/cover",
    ];

    document.body.style.background = "linear-gradient(135deg, #e6f0ff 0%, #f5f7ff 100%)";
    counterCard.classList.remove("bg-multiple-5");

    if (count % 5 === 0 && count !== 0) {
        counterCard.classList.add("bg-multiple-5");
    } else if (count % 3 === 0 && count !== 0) {
        const bgIndex = (Math.floor(count / 3) - 1) % backgrounds.length;
        document.body.style.background = backgrounds[bgIndex];
    }
}

