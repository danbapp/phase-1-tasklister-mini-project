document.addEventListener("DOMContentLoaded", () => {
  console.log('DOMContentLoaded has loaded')
});

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(e.target.new-task-description.value)
  form.reset()
})

function buildTodo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent= todo
  btn.textContent = 'x'
  document.querySelector('#tasks').appendChild(p)
  p.appendChild(btn)
  console.log(p)
}