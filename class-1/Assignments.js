// For today 

// 1. Create a counter in javascript (counts down from 30 to 0)
// 2. Calaculate the time it takes between a setTimeout call and the inner function actually running 
// 3. create a terminal CSSLayerBlockRule(HH:MM:SS)


//  1. Create a counter in javascript (counts down from 30 to 0)

for(let i=30;i>=0;i--){
    console.log("count is : "+ i )
}

// 2. Calaculate the time it takes between a setTimeout call and the inner function actually running

// performance.now(): This method captures a high-resolution timestamp at the beginning

const startTime = performance.now();  // can use Date.now()

console.log(startTime);

setTimeout(function(){
  const endTime = performance.now(); // Date.now()
  console.log(endTime);
  const delay = endTime - startTime;
  console.log("Delay:", delay, "milliseconds");
}, 1000);

let text = "5";
text = text.padStart(4,"0");

console.log(text);

// 3. create a terminal CSSLayerBlockRule(HH:MM:SS)

function displayTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  console.clear(); // Clear previous output
  console.log(formattedTime);
}

setInterval(displayTime, 1000); // Update every second

displayTime(); // Initial call to display current time
