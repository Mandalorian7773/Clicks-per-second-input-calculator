let clickCount = 0;
let startTime = null;
let clickSpeedElement = document.getElementById('clickSpeed');
let clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', function () {
   
    if (startTime === null) {
        startTime = new Date().getTime();
    }

   
    clickCount++;

 
    updateClickSpeed();
});


function updateClickSpeed() {
    
    let currentTime = new Date().getTime();
    let timeElapsed = (currentTime - startTime) / 1000; 

 
    if (timeElapsed > 0) {
        let clicksPerSecond = clickCount / timeElapsed;
        clickSpeedElement.textContent = `Clicks per second: ${clicksPerSecond.toFixed(2)}`;
    }
}
