const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let curIndex = 1;

prev.addEventListener('click', () => {
    curIndex--;

    update();
})

next.addEventListener('click', () => {
    curIndex++;

    update();
})

function update() {
    if (curIndex >= circles.length) {
        next.disabled = true;
    } else if (curIndex <= 1) {
        prev.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }

    circles.forEach((circle, index) => {
        if (index + 1 <= curIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    progress.style.width = (curIndex - 1) / (circles.length - 1) * 100 + '%';    
}