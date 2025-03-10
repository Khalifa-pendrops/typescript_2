# Todo List App

___

## Description

This is a simple and efficient Todo List Application implemented in **TypeScript**. This program allows you to manage your tasks with features like adding, completing, removing, and filtering todos, as well as updating task descriptions and due dates. The `TodoItem` interface is extended to `ITodoItems` interface.

___

## Features

- **Add Todos**: Add new tasks.
- **Complete Todos**: Mark tasks as completed by ID.
- **Remove Todos**: Delete tasks by their ID.
- **List Todos**: View all tasks.
- **Filter Todos**: Filter completed tasks.
- **Update Todos**: Modify task descriptions and due dates.
- **Clear Completed Todos**: Remove all completed tasks in one go.

___

## Usage

1. Clone the repository.
2. Navigate to file directory.
3. Compile and run the TypeScript code with the code below

```typescript

node todo.js

```
___

## Interface and Class Details

### TodoItem Interface:

```
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    decsription?: string;
}


interface ITodoItem extends TodoItem {
  dueDate: Date;
}

```

### TodoList Class:

1. Maintains an array of TodoItem objects.

2. Provides methods to manage todos (add, complete, remove, update, filter, and clear).

___


## Expected Output on the Console

When the code is executed, the below output is expected: 

```
Added tasks:  {
  id: 1000,
  task: 'Attend SOTU!',
  completed: false,
  dueDate: 2025-03-01T19:52:04.266Z
}
Added tasks:  {
  id: 1001,
  task: 'Fill appraisal form',
  completed: false,
  dueDate: 2025-03-01T19:52:04.274Z
}
Added tasks:  {
  id: 1002,
  task: 'Do your Task',
  completed: false,
  dueDate: 2025-03-01T19:52:04.274Z
}
Added tasks:  {
  id: 1003,
  task: 'Buy Groceries',
  completed: false,
  dueDate: 2025-03-01T19:52:04.275Z
}
Added tasks:  {
  id: 1004,
  task: 'Learn TypeScript',
  completed: false,
  dueDate: 2025-03-01T19:52:04.275Z
}
Added tasks:  {
  id: 1005,
  task: 'Practice CSS BEM',
  completed: false,
  dueDate: 2025-03-01T19:52:04.276Z
}

Completed Task:
 ID: 1000
 Task: Attend SOTU!
 Completed: true ☑️
Completed Task:
 ID: 1003
 Task: Buy Groceries
 Completed: true ☑️

Removed Task:
 ID: 1001
 Removed Task: Fill appraisal form ❌
Removed Task:
 ID: 1002
 Removed Task: Do your Task ❌

[
  {
    id: 1000,
    task: 'Attend SOTU!',
    completed: true,
    dueDate: 2025-03-01T19:52:04.266Z
  },
  {
    id: 1003,
    task: 'Buy Groceries',
    completed: true,
    dueDate: 2025-03-01T19:52:04.275Z
  },
  {
    id: 1004,
    task: 'Learn TypeScript',
    completed: false,
    dueDate: 2025-03-01T19:52:04.275Z
  },
  {
    id: 1005,
    task: 'Practice CSS BEM',
    completed: false,
    dueDate: 2025-03-01T19:52:04.276Z
  }
]

Filtered Items (completed):  [
  {
    id: 1000,
    task: 'Attend SOTU!',
    completed: true,
    dueDate: 2025-03-01T19:52:04.266Z
  },
  {
    id: 1003,
    task: 'Buy Groceries',
    completed: true,
    dueDate: 2025-03-01T19:52:04.275Z
  }
]

Updated Task Description:  {
  id: 1005,
  task: 'Practice CSS BEM',
  completed: false,
  dueDate: 2025-03-01T19:52:04.276Z,
  description: "Remove 'morning fresh' from the grocery list"
}

Notification 📢
 Todo List has been cleared successfully!

[]

```

___

