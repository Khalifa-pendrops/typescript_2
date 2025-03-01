// to-do app
// should add, complete, remove, and view items
// create an interface Todoitem with id, task, and completed properties
// create a TodoList class with addTodo(task: string): void, completeTodo(task: string): void, removeTodo(task: string): void, listTodo(): TodoItem[] methods
// TodoList class should be an array of Todo objects
// add a methd to filter todos by their completed status
// add a method to update the task dcsription of a todo item
// add a method to clear todos
// extend the TodoItem interface to include a dueDate property of type Date. Update relevant methods to accommodate this new property
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todoItems = [];
        this.todoId = 1000;
    }
    TodoList.prototype.addTodo = function (task, dueDate) {
        var newTodoItem = {
            id: this.todoId++,
            task: task,
            completed: false,
            dueDate: dueDate,
        };
        this.todoItems.push(newTodoItem);
        console.log("Added tasks: ", newTodoItem);
    };
    TodoList.prototype.completeTodo = function (id) {
        var itemIndex = this.todoItems.findIndex(function (item) { return item.id === id; });
        if (this.todoItems.length !== -1) {
            if (itemIndex >= 0) {
                this.todoItems[itemIndex].completed = true;
                console.log("Completed Task:\n ID: ".concat(id, "\n Task: ").concat(this.todoItems[itemIndex].task, "\n Completed: ").concat(this.todoItems[itemIndex].completed, " \u2611\uFE0F"));
            }
            else {
                console.log("Invalid task ID");
            }
        }
        else {
            console.log("Taks not found");
        }
    };
    TodoList.prototype.removeTodo = function (id) {
        var itemIndex = this.todoItems.findIndex(function (item) { return item.id === id; });
        if (itemIndex >= 0) {
            var removedTask = this.todoItems.splice(itemIndex, 1)[0];
            console.log("Removed Task:\n ID: ".concat(removedTask.id, "\n Removed Task: ").concat(removedTask.task, " \u274C"));
        }
        else {
            console.log("Task not found or Invalid task ID");
        }
    };
    TodoList.prototype.listTodo = function () {
        return this.todoItems;
    };
    TodoList.prototype.filterTodos = function () {
        var completedTodos = this.todoItems.filter(function (item) { return item.completed; });
        console.log("Filtered Items (completed): ", completedTodos);
    };
    TodoList.prototype.updateDescription = function (id, newDescription) {
        var item = this.todoItems.find(function (item) { return item.id === id; });
        if (item) {
            item.description = newDescription;
            console.log("Updated Task Description: ", item);
        }
        else {
            console.log("Item with not found");
        }
    };
    TodoList.prototype.clearTodoList = function () {
        this.todoItems = [];
        console.log("Notification 📢\n Todo List has been cleared successfully!");
    };
    return TodoList;
}());
//Instance of TodoList Class
var todoList = new TodoList();
console.log(todoList.todoItems);
console.log();
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
