const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/';
const form = document.querySelector('.card form');
let todos = [];
const todoList = document.querySelector('#output');
const toggleBtn = document.querySelector('#toggleBtn');


// GET function from the database
const getTodos = (size) => {
  fetch(`${BASE_URL}?_limit=${size}`)
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data);

      data.forEach((todo) => {
        todos.push(todo);
      });

      listTodos();
    });
};
//Getting maximum 7 todos from the databese
getTodos(7);

//Function to toggel the Modal
const toggleModal = () => {
  const modal = document.querySelector('#myModal');
  modal.classList.toggle('modal_flex');
};

toggleBtn.addEventListener('click', () => {
  toggleModal();
});

//Function to list todos
const listTodos = () => {
  todos.forEach((item) => {
    const todoElement = createTodoElement(item);
    todoList.appendChild(todoElement);
  });
};

//Function to create a todo
const createTodoElement = (todoData) => {
  let todo = document.createElement('div');
  todo.classList.add('item');

  let addTodo = document.createElement('p');
  addTodo.classList.add('addTodo');

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.innerText = 'Delete';
  deleteBtn.setAttribute('id', todoData.id);

  if (todoData.completed) {
    addTodo.classList.add('completed');
    deleteBtn.classList.add('done');
  }

  addTodo.innerText = todoData.title;
  todo.appendChild(addTodo);
  todo.appendChild(deleteBtn);

  return todo;
};

// Eventlistener on whole output
document.querySelector('#output').addEventListener('click', (e) => {
  if (e.target.innerText === 'Delete') {
    if (e.target.classList.contains('done')) {
      e.target.parentElement.remove();
      removeTodo(e.target.id);
      return;
    }
    toggleModal();
  }

  if (e.target.nodeName === 'P') {
    e.target.classList.toggle('completed');
    e.target.nextSibling.classList.toggle('done');
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form.querySelector('input[type=text]');
  const inputValue = input.value;
  const errorMessage = document.querySelector('#errorMessage');

  //IF to makes sure you can't send an empty input
  if (inputValue.trim() === '') {
    errorMessage.classList.remove('popup_text');
    return;
  } else {
    errorMessage.classList.add('popup_text');
  }

  handleAdd(inputValue);
  form.reset();
});

// Function to delete a todo
const removeTodo = (id) => {
  fetch(BASE_URL + id, {
    method: 'DELETE',
  }).then((res) => {
    // console.log(res);
    if (res.ok) {
      const index = todos.findIndex((todo) => todo.id == id);
      todos.splice(index, 1);
    //   console.log(todos);
    }
  });
};

// Function to post to the database
const handleAdd = (title) => {
  const newTodo = {
    title: title,
    completed: false,
    userId: 1,
  };

  fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      todos.push(json);
      todoList.prepend(createTodoElement(json));
    });
};
