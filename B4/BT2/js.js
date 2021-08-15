// 2.Write a script to store and process the learning tasks to become a front-end developer
let route = [{ id: 1, task: "HTML", complete: "false" },
{ id: 2, task: "CSS", complete: "false" },
{ id: 3, task: "Basics of JavaScript", complete: "false" },
{ id: 4, task: "Node Package Manager (npm)", complete: "false" },
{ id: 5, task: "Git", complete: "false" },];

// 2.1 Print it out
// console.log("Hi there, this is your learning tasks to front-end developer career:");
// for (let i = 0; i < route.length; i++) {
//     console.log(route[i].id + ". " + route[i].task);
//     console.log("   Complete: " + route[i].complete);
// }
// console.log("------------------------------------------------------------------");
console.clear();
// function display() {
//     console.log("Hi there, this is your learning tasks to front-end developer career:");
//     for (let i = 0; i < route.length; i++) {
//         console.log(route[i].id + ". " + route[i].task);
//         console.log("   Complete: " + route[i].complete);
//     }
//     console.log("------------------------------------------------------------------");
// }
// display();
// let input = prompt("Enter your command (New, Delete, Update, Complete)");
// console.clear();

// // 2.2 Let users add new task
// if (input === "new") {
//     let id = route.length + 1;
//     let task = prompt("Enter new task:");
//     let complete = "false";
//     let newTask = {
//         id: id,
//         task: task,
//         complete: complete
//     };
//     route.push(newTask);
//     display();

// // 2.3 Let users update task
// }else if (input === "update") {
//     let position = prompt("Enter position:");
//     let title = prompt("Enter new title");
//     route[position - 1].task = title;
//     display();

// // 2.5 Let users complete task
// }else if (input === "complete") {
//     let position = prompt("Enter position:");
//     let newComplete = "true";
//     route[position - 1].complete = newComplete;
//     display();
// }else if (input === "delete") {
//     let position = prompt("Enter position:");
//     route.splice(position - 1 ,1);
//     display();
// }else {
//     alert("Sai r");
// }       
console.log("Hi there, this is your learning tasks to front-end developer career:");
let position = prompt("Nhập vị trí cần tick:");
for (let i = 0; i < route.length; i++) {
    if (position == route[i].id) {
        console.log(route[i].id + ". " + "[X] " + route[i].task);
    } else {
        console.log(route[i].id + ". " + "[ ] " + route[i].task);
    }
}
console.log("------------------------------------------------------------------------");
