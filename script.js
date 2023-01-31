const BASE_URL = "https://jsonplaceholder.typicode.com/todos/";
const form = document.querySelector('.card form');
// Lista för att spara todos
const todos = []
const todoList = document.querySelector('#output');
// output.innerHTML = '';

// GET function from the database//////////////////////
const getTodos = () => {
    // fetch(BASE_URL)
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')

      .then(res => res.json())
      .then(data => {

        console.log(data);

        data.forEach(todo => {
            todos.push(todo)
        });

        listTodos()

    })
}
getTodos()



const listTodos = () => {
    // todoList.innerHTML = ""
    todos.forEach(item => {

        const todoElement = createTodoElement(item)
        todoList.appendChild(todoElement)
    })
}

const createTodoElement = (todoData) => {
    let todo = document.createElement('div')
    todo.classList.add('item')
    // console.log(todoData.title);
    
    let sak = document.createElement('p')
    sak.classList.add('sak')
    
    sak.innerText = todoData.title
    todo.appendChild(sak)


    return todo
}



// Eventlistener on whole output////////////////
document.querySelector('#output').addEventListener('click', e => {
    if(e.target.innerText === 'Delete'){
        e.target.parentElement.remove()
    }
    // Finns en bugg om man klickar på själva texten, måste toggla, då försvinner ej strecket
   if(e.target.nodeName === 'P') {
    e.target.style.textDecoration = 'line-through'
   } 
   if (e.target.nodeName === 'DIV') {
     e.target.querySelector('p').classList.toggle('completed')
   } 
})

const createItemElement = (inputValue) => {
  const item = document.createElement('div');
  item.classList.add('item');

  const p = document.createElement('p');
  p.innerText = inputValue;

//   p.addEventListener('click')

  const button = document.createElement('button');
  button.innerText = 'Delete';



//   Eventlistener on each and every button////////////////
//   button.addEventListener('click', () => {
//       button.parentElement.remove()
//   })

  item.appendChild(p);
  item.appendChild(button);

  return item;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form.querySelector('input[type=text]');
  const inputValue = input.value;
  let errorMessage = document.querySelector('#errorMessage');

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

// Function to delete todo//////////////
const deleteTodo = e => {
    console.log(e.target);
    console.log(e.target.classList.contains('output'));
}

output.addEventListener('click', deleteTodo)
