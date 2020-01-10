// makeInitialSetup();

let slides = document.getElementsByClassName("image-sliderfade");
let buttons = document.querySelectorAll('.but');
let buttonsWall = document.querySelectorAll('.picture');

let goal = document.createElement('span');
goal.className = 'target';
goal.innerHTML = "Цель ";

slides[0].style.display = "block";
buttons[0].style.flexGrow = "2";
buttons[0].prepend(goal);

window.onresize = () => {
    if (document.body.offsetWidth <= 500) {
        slides[0].style.display = "block";
        buttons[0].style.flexGrow = "2";
        slides[17].style.display = "none";
        buttons[17].style.flexGrow = "1";
    }
}

buttons.forEach((element, index) => {
    element.addEventListener('click', function () {
        clear();
        makeActiveSlide(index);
    });
});

buttonsWall.forEach((element, index) => {
    element.addEventListener('click', function () {
        clear();
        makeActiveSlide(index);
    });
});


function clear() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        buttons[i].style.flexGrow = "1";
        const span = document.querySelector('.target');
        if (span) {
            span.remove();
        }
    }
}

function makeActiveSlide(index) {
    slides[index].style.display = "block";
    buttons[index].style.flexGrow = "2";
    buttons[index].prepend(goal);
}

// function makeInitialSetup() {
//
// }
