const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/';
const form = document.querySelector('.card form');
let todos = [];
const todoList = document.querySelector('#output');
const toggleBtn = document.querySelector('#toggleBtn');
// output.innerHTML = '';

// GET function from the database//////////////////////
const getTodos = () => {
  // fetch(BASE_URL)
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.forEach((todo) => {
        todos.push(todo);
      });

      listTodos();
    });
};
getTodos();


const toggleModal = () => {
  const modal = document.querySelector('#myModal');
  modal.classList.toggle('modal_flex');
};

toggleBtn.addEventListener('click', () => {
  toggleModal();
});

const listTodos = () => {
  // todoList.innerHTML = ""
  todos.forEach((item) => {
    const todoElement = createTodoElement(item);
    todoList.appendChild(todoElement);
  });
};

const createTodoElement = (todoData) => {
  let todo = document.createElement('div');
  todo.classList.add('item');

  let addTodo = document.createElement('p');
  addTodo.classList.add('addTodo');
  // if(todoData.completed){
  //     addTodo.classList.add('completed')
  // }

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.innerText = 'Delete';

  if (todoData.completed) {
    addTodo.classList.add('completed');
    deleteBtn.classList.add('done');
  }

  addTodo.innerText = todoData.title;
  todo.appendChild(addTodo);
  todo.appendChild(deleteBtn);

  return todo;
};

// Eventlistener on whole output////////////////
document.querySelector('#output').addEventListener('click', (e) => {
  if (e.target.innerText === 'Delete') {
    if (e.target.classList.contains('done')) {
      e.target.parentElement.remove();
      return;
    }
    toggleModal();
  }

  if (e.target.nodeName === 'P') {
    e.target.classList.toggle('completed');
    console.log(e.target);
  }
});

// document.querySelector('#output').addEventListener('click', (e) => {
//   if (e.target.innerText === 'Delete') {
//     e.target.classList.contains('done')
//       ? e.target.parentElement.remove()
//       : toggleModal();
//       return
//   }

//   if (e.target.nodeName === 'P') {
//     e.target.classList.toggle('completed');
//     console.log(e.target);
//   }
// });

// Function to create a TODO with a delete button/////////////////////
const createItemElement = (inputValue) => {
  const item = document.createElement('div');
  item.classList.add('item');

  const p = document.createElement('p');
  p.innerText = inputValue;

  const button = document.createElement('button');
  button.innerText = 'Delete';
  button.className = 'delete';

  item.appendChild(p);
  item.appendChild(button);

  return item;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form.querySelector('input[type=text]');
  const inputValue = input.value;
  const errorMessage = document.querySelector('#errorMessage');

  //IF satsen ser till att man ej kan skicka in en tom input///////////
  if (inputValue.trim() === '') {
    errorMessage.classList.remove('popup_text');
    return;
  } else {
    errorMessage.classList.add('popup_text');
  }

  const item = createItemElement(inputValue);
  document.querySelector('#output').prepend(item);

  form.reset();
});
