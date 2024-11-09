let boxes = document.querySelectorAll('.box');

console.log(boxes);
currentIndex = 0;

function changeColor() {
    boxes.forEach(box => {
       

    });
    currentIndex = (currentIndex + 1) % boxes.length;
     boxes[currentIndex ].textContent = 'A';
   let prevIndex = (currentIndex - 1 +  boxes.length ) % boxes.length;
    boxes[prevIndex].textContent = 'B';
    let nextIndex = (currentIndex + 4) % boxes.length;
    boxes[nextIndex].textContent = 'C';
    let nextIndex2 = (currentIndex + 3) % boxes.length;
    boxes[nextIndex2].textContent = 'D';
    let nextIndex3 = (currentIndex + 2) % boxes.length;
    boxes[nextIndex3].textContent = 'E';
    let nextIndex4 = (currentIndex + 1) % boxes.length;
    boxes[nextIndex4].textContent = 'F';
}

setInterval(changeColor, 1000);