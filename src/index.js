
// Bonus: Add a watcher for local storage

import { setFilters } from './filters'
import { createTodos, loadTodos } from './todos'
import { renderTodos } from './views.js'


renderTodos()


 // Listen for Filter Todos 
 document.querySelector('#search-text').addEventListener('input', (e) => {
   setFilters({
   searchText: e.target.value
   }) 
   renderTodos()
 })

 
document.querySelector('#submitTodo').addEventListener('submit', (e) => {
   e.preventDefault()
   createTodos(e.target.elements.text.value)
   renderTodos()
   })


    
document.querySelector('#hide-completed').addEventListener('change', (e) => {
      setFilters({
         status: e.target.checked
      }) 
      renderTodos()
     })
   

window.addEventListener('storage', (e) => {
      if (e.key === 'todos') {
      loadTodos()
      renderTodos()
      }
   })

 

   // window.addEventListener('keypress', (e) => {
   //    console.log('New Press')
   //    renderTodos()
   // })
  