import { getFilters } from  './filters'
import { getTodos, removeTodo, toggleTodo } from  './todos'

// Render Application Todos Based off Filters



const renderTodos = () => {
    const { searchText, status } = getFilters()
    const filteredTodos = getTodos().filter((todo) => {
 
return !status ? todo.text.toLowerCase().includes(searchText.toLowerCase()) : 
!todo.complete && todo.text.toLowerCase().includes(searchText.toLowerCase())

        
    })
    
    const incompleteTodos = filteredTodos.filter((todo) => !todo.complete)
      const todoEl = document.querySelector('#todos')
      todoEl.innerHTML = ''
      todoEl.appendChild(getSummaryDOM(incompleteTodos))
    
    if (filteredTodos.length > 0) {
       filteredTodos.forEach((todo) => todoEl.appendChild(generateTodoDOM(todo)))
    }
    
    else {
       const empty = document.createElement('p')
       empty.textContent = 'No todos to show'
       empty.classList.add("empty-message")
       todoEl.appendChild(empty)
    }
    }


 
//Get the DOM Element from an individual TODO

const generateTodoDOM = (todo) => {

    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
    const checkBox = document.createElement('input')

// Setup todo Checkbox 

   checkBox.setAttribute('type', 'checkbox')
   checkBox.checked = todo.complete
   containerEl.appendChild(checkBox)
   checkBox.addEventListener('change', () => {
    toggleTodo(todo.id)
    renderTodos()
   })

 
    // Set up the Todo Title Text

   todo.text.length ? textEl.textContent = todo.text : textEl.textContent = 'Unnamed Todo'
   todoEl.appendChild(textEl)

   todoEl.classList.add('list-item')
   containerEl.classList.add('list-item__container')
   todoEl.appendChild(containerEl)

   
//    Setup the remove todo button 
   
   button.textContent = 'remove'
   button.classList.add('button', 'button--text')
   containerEl.appendChild(button)
   button.addEventListener('click', () => {
    
       removeTodo(todo.id)
       renderTodos()
   })
   

   return todoEl
}



//Get the DOM Elements for list Summary

const getSummaryDOM = (incompleteTodos) => {
   const summary = document.createElement('H2')
   let plural = incompleteTodos.length === 1 ? '' : 's'
   summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
   summary.classList.add('list-title')
   return summary
}




export { renderTodos }
