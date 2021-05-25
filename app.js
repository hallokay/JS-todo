const todoInput = document.querySelector('.todo_input'),
    todoBtn = document.querySelector('.todo_btn'),
    todoList = document.querySelector('.todo_list');


let todos;
todos = [];


// SAVE TODO
function saveTodo(todo) {
    if(localStorage.getItem('todos') !== null) {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// get todo
function getTodo(){
    if(localStorage.getItem('todos') !== null) {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach( todo => {

    })
}

//ADD TODO

function addTodo(e) {
    e.preventDefault();

    // create tododiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // todo li
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo_li');
    todoLi.innerText = todoInput.value;
    //텍스트만 들어감
    todoInput.value = '';

    // todo button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('check_btn');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    // html태그 요소를 넣고 싶을 때는 innerHTML을 쓴다

    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash_btn');
    trashBtn.innerHTML = '<i class="fa fa-trash"></i>';


    todoDiv.appendChild(todoLi); 
    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);

    // SAVE TODO
    saveTodo(todoInput.value);
}

todoBtn.addEventListener('click', addTodo);



function deleteCheck(e) {
    const item = e.target;
    const todo = item.parentElement;


    // =======delete todo======
    // 아이템의 클래스의 첫번째 인덱스가 삭제이면
    if(item.classList[0] === 'trash_btn') {
        todo.classList.add('todo_fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });

    }

    // ==========check todo=========
    if(item.classList[0] === 'check_btn') {
        todo.classList.toggle('todo_completed');
    }

};

todoList.addEventListener('click', deleteCheck);



// ===== filter option====
const filterOption = document.querySelector('.filter_todo');

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach( todo => {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if(todo.classList.contains('todo_completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('todo_completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
    
        }
    })

}
filterOption.addEventListener('click', filterTodo);


