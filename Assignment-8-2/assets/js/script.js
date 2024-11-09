$(document).ready(function() {
    
    const startBtn = $('#startBtn');
    const stopBtn = $('#stopBtn');
    const audio = document.getElementById('audio');
    
    let isRunning = false;
    let currentDirection = 1;
    let currentIndex = 0;
    let animationInterval;
    let lights = document.querySelectorAll('.light');

    
    startBtn.on('click', function() {
        if (!isRunning) {
            isRunning = true;
            startAnimation();
            audio.play();
            audio.loop = true;

        }
    });
    stopBtn.on('click', function() {
        isRunning = false;
        clearInterval(animationInterval);
        audio.pause();
        audio.currentTime = 0;
    });

    function startAnimation() {
        animationInterval = setInterval(() => {
            
            lights.forEach(light => {
                light.style.backgroundColor = 'white';
            });
            lights[currentIndex].style.backgroundColor = 'red';
            
            if (currentIndex > 0) lights[currentIndex - 1].style.backgroundColor = '#FF7F7F';
            if (currentIndex < lights.length - 1) lights[currentIndex + 1].style.backgroundColor = '#FF7F7F';
            currentIndex += currentDirection;
            if (currentIndex >= lights.length - 1) {
                currentDirection = -1;
            } else if (currentIndex <= 0) {
                currentDirection = 1;
            }
            

           
        }, 150); 
    }

});