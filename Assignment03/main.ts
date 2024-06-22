// Assignment 03

//Task 1 
//Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.

async function fetchGreeting() {
    setTimeout(() => {
        console.log("Eid Mubarak");
    }, 2000);
}
fetchGreeting()

//Task 2
//Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask() {
    console.log("Task Started");
    setTimeout(()=>{
        console.log("Task Completed");
    },1000)
}
simulateTask()

//Task 3
//Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.

async function fetchData(){
    return new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Data fetched successfully")
    },1000)
})}
fetchData().then((response)=>{console.log(response);
})

//Task 4
//Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch

async function fetchWithError() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let randomlyChosen = Math.floor(Math.random()*10+1)
            if (randomlyChosen < 5) {
                resolve("Data fetched successfully!!!")
            } else {
                reject("Data fetch failed!!!")
            }
        },1000)
    })
}
fetchWithError().then((response)=>{console.log(response);
}).catch((error)=>{console.log(error);
})


//Task 5
//Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called.

async function fetchedData() {
    return new Promise((resolve)=>{
    resolve(`The data is fetched successfully`);
    })
}

async function processData() {
    return new Promise((resolve) => {
    resolve("Processing completed");
    })

}

async function executeSequentially() {
    fetchedData().then((response)=>{
        console.log(response);
    })
    processData().then((response)=>{
        console.log(response);
    })

}
executeSequentially()