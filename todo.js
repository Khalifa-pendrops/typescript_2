"use strict";
// to-do app
// should add, complete, remove, and view items
// create an interface Todoitem with id, task, and completed properties
// create a TodoList class with addTodo(task: string): void, completeTodo(task: string): void, removeTodo(task: string): void, listTodo(): TodoItem[] methods
// TodoList class should be an array of Todo objects
// add a methd to filter todos by their completed status
// add a method to update the task dcsription of a todo item
// add a method to clear todos
// extend the TodoItem interface to include a dueDate property of type Date. Update relevant methods to accommodate this new property
class TodoList {
    constructor() {
        this.todoItems = [];
        this.todoId = 1000;
    }
    addTodo(task, dueDate) {
        const newTodoItem = {
            id: this.todoId++,
            task,
            completed: false,
            dueDate,
        };
        this.todoItems.push(newTodoItem);
        console.log("Added tasks: ", newTodoItem);
    }
    completeTodo(id) {
        const itemIndex = this.todoItems.findIndex((item) => item.id === id);
        if (this.todoItems.length !== -1) {
            if (itemIndex >= 0) {
                this.todoItems[itemIndex].completed = true;
                console.log(`Completed Task:\n ID: ${id}\n Task: ${this.todoItems[itemIndex].task}\n Completed: ${this.todoItems[itemIndex].completed} ☑️`);
            }
            else {
                console.log("Invalid task ID");
            }
        }
        else {
            console.log("Taks not found");
        }
    }
    removeTodo(id) {
        const itemIndex = this.todoItems.findIndex((item) => item.id === id);
        if (itemIndex >= 0) {
            const removedTask = this.todoItems.splice(itemIndex, 1)[0];
            console.log(`Removed Task:\n ID: ${removedTask.id}\n Removed Task: ${removedTask.task} ❌`);
        }
        else {
            console.log("Task not found or Invalid task ID");
        }
    }
    listTodo() {
        return this.todoItems;
    }
    filterTodos() {
        const completedTodos = this.todoItems.filter((item) => item.completed);
        console.log(`Filtered Items (completed): `, completedTodos);
    }
    updateDescription(id, newDescription) {
        const item = this.todoItems.find((item) => item.id === id);
        if (item) {
            item.description = newDescription;
            console.log(`Updated Task Description: `, item);
        }
        else {
            console.log(`Item with not found`);
        }
    }
    clearTodoList() {
        this.todoItems = [];
        console.log("Notification 📢\n Todo List has been cleared successfully!");
    }
}
//Instance of TodoList Class
const todoList = new TodoList();
// Adding tasks
todoList.addTodo("Attend SOTU!", new Date());
todoList.addTodo("Fill appraisal form", new Date());
todoList.addTodo("Do your Task", new Date());
todoList.addTodo("Buy Groceries", new Date());
todoList.addTodo("Learn TypeScript", new Date());
todoList.addTodo("Practice CSS BEM", new Date());
console.log();
// Showing completed tasks
todoList.completeTodo(1000);
todoList.completeTodo(1003);
console.log();
// Removing tasks
todoList.removeTodo(1001);
todoList.removeTodo(1002);
console.log();
// Show tasks left after removing tasks
console.log(todoList.listTodo());
console.log();
// Filter tasks
todoList.filterTodos();
console.log();
// Updating task Description
todoList.updateDescription(1005, "Remove 'morning fresh' from the grocery list");
console.log();
// Clear Todo List
todoList.clearTodoList();
console.log();
// Check to see if list has been cleared
console.log(todoList.todoItems);
console.log();
