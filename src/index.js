document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener('submit',(e) => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
  })
})

function buildToDo(todo) {
  let listElement = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' X '
  listElement.textContent = `${todo} `
  listElement.appendChild(btn)
  
  document.querySelector('#tasks').appendChild(listElement)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

