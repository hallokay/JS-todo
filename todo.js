const todoForm = document.querySelector('.todo_form'),
        todoInput = todoForm.querySelector('input'),
        todoList = document.querySelector('.todo_list');


const TODO_LS = 'todos';

let todoArr = [];

function deleteTodo (e) {
    
const delBtn = e.target;
const delLi = delBtn.parentNode;

todoList.removeChild(delLi);

const clearTodos = todoArr.filter( todo => {
    return todo.id !== parseInt(delLi.id);
});


todoArr = clearTodos;
saveTodo();

}


function saveTodo () {
    localStorage.setItem(TODO_LS, JSON.stringify(todoArr));
};

function paintTodo(todo) {
    const todoLi = document.createElement('li'),
          todoSpan = document.createElement('span'),
            delBtn = document.createElement('button');
    const newId = todoArr.length + 1;
    todoLi.id = newId;


    delBtn.innerText = 'X';
    delBtn.addEventListener('click', deleteTodo)

    todoSpan.innerText =  todo;
    todoLi.appendChild(delBtn);
    todoLi.appendChild(todoSpan);

    todoList.appendChild(todoLi);

    const todoObj =  {
        text: todo,
        id: newId
    };

    todoArr.push(todoObj);
    saveTodo();

}

function handleSubmit(e) {
e.preventDefault();
const currentValue = todoInput.value;
paintTodo(currentValue);
todoInput.value = '';
}



function loadTodo() {
    const loadedTodo = localStorage.getItem(TODO_LS);

    if( loadedTodo != null){
        const parsedTodo = JSON.parse(loadedTodo);
        parsedTodo.forEach( todo => {
            paintTodo(todo.text);
        })
    }
}


        (function init () {
            loadTodo();

            todoForm.addEventListener('submit', handleSubmit);
        })();