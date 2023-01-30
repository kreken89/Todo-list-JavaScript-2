// const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
const form = document.querySelector('.card form');

// const output = document.querySelector('#output');
// output.innerHTML = '';



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

  const button = document.createElement('button');
  button.innerText = 'Delete';

  // Eventlistener on each and every button////////////////
  // button.addEventListener('click', () => {
  //     button.parentElement.remove()
  // })

  item.appendChild(p);
  item.appendChild(button);

  return item;
}



form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form.querySelector('input[type=text]');
  const inputValue = input.value;
// Här kan läggas till en popup modal med att fältet är tomt///////////
  if( inputValue.trim() === '') {
    return
  }


  const item = createItemElement(inputValue);
  document.querySelector('#output').appendChild(item)

  form.reset()
});