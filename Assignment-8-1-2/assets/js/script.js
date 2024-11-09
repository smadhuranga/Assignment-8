
let boxes = document.querySelectorAll('.box');

console.log(boxes);
currentIndex = 0;

function changeColor() {
    boxes.forEach(box => {


    });
    currentIndex = (currentIndex + 1) % boxes.length;
    boxes[currentIndex].style.backgroundColor = 'red';
    let prevIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    boxes[prevIndex].style.backgroundColor = '#ffbfcd';
    let nextIndex = (currentIndex + 4) % boxes.length;
    boxes[nextIndex].style.backgroundColor = '#ee82ef';
    let nextIndex2 = (currentIndex + 3) % boxes.length;
    boxes[nextIndex2].style.backgroundColor = 'yellow';
    let nextIndex3 = (currentIndex + 2) % boxes.length;
    boxes[nextIndex3].style.backgroundColor = 'blue';
    let nextIndex4 = (currentIndex + 1) % boxes.length;
    boxes[nextIndex4].style.backgroundColor = 'green';
}

setInterval(changeColor, 1000);