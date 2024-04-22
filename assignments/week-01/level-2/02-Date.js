function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);

    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());

    // Setting components of the date 
    currentDate.setFullYear(2024);
    console.log("After setFullYear:", currentDate);

    currentDate.setMonth(4);
    console.log("After setMonth:", currentDate);

    // Getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());

    const newDate = new Date(2024, 4, 22); // Creating a new date
    console.log("New Date:", newDate);   
}

// Example Usage for Date Methods
dateMethods();

// example time calculated 

function calculateSum () {
    let a = 0;
    for (let i=0; i<100000; i++) {
        a = a+i;
    }
    return a;
}

const beforeDate = new Date();

const beforeTimeInMs = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs)

// set interval

function currenTimePrint() {
    console.log(new Date().getTime());
}
setInterval(currenTimePrint,1000)




