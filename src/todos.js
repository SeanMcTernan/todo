import  uuidv4  from 'uuid/v4'

let todos = []


// Load Todos from local storage 

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
       todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
    todos = []
    }
}


// Save todos to local storage

const saveTodos = () => {
localStorage.setItem('todos', JSON.stringify(todos)) 

}    

// Return Called Todos

const getTodos = () => todos


const createTodos = (text) =>  {
    text.trim()
    if (text.length > 0){ 
    todos.push({
       
        id: uuidv4(),
        text,
        complete: false })

        saveTodos()  
    }
}

// remove a todo based on it's id

const removeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    
    index > -1 ? todos.splice(index, 1) : !index
    saveTodos()  
    
    
     }

// Change the value of a todo to/from compltete

const toggleTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
        
    todos[index].complete = !todos[index].complete ? todos[index].complete = true : todos[index].complete = false
    saveTodos()  
        
    }
        
    loadTodos()

    export { getTodos, createTodos, removeTodo, toggleTodo, loadTodos }