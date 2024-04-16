#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList : string []= [];
let conditions = true;

console.log(chalk.magenta("\n \tWelcome To CodeWithNimra - Todo-List Application\n \t"));



let main = async () => {
    while (conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update task", "View Todo-list", "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if (option.choice === "Delete Task"){
            await deleteTask()
        }
        else if (option.choice === "Update task"){
            await updateTask()
        }
        else if (option.choice === "View Todo-list"){
            await viewTask()
        }
        else if (option.choice ==="Exit"){
            conditions = false;
        }
    }
}

let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"

        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} Task added sucessfully in Todo-List`);
}

let viewTask = () => {
    console.log ("\n Your Todo-List: \n");
    todoList.forEach((task,index) => {
        console.log(`${index + 1}:${task}`)
    })
}

let deleteTask = async () => {
    await viewTask ()
    let taskIndex =await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task that you want to delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index -1, 1);
    console.log(`\n ${deletedTask} This task has been deleted sucessfully from your Todo-List\n`)
}

let updateTask = async () => {
    await viewTask ()
    let update_task_index = await inquirer.prompt([
        {
            name:"index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log (`\n Task at index no.${update_task_index.index - 1} successfully updated [For updated list check option: "view Todo-List"]`)
    
    


}

main();

