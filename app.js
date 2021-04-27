const todoInput = document.querySelector('.todo_input'),
    todoBtn = document.querySelector('.todo_btn'),
    todoList = document.querySelector('.todo_list');


//ADD TODO

function addTodo(e) {
    e.preventDefault();

    // create tododiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // todo li
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo_li');
    todoLi.innerText = '엉덩qndqnsqndqnd';
    //텍스트만 들어감

    // todo button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('todo_li_btn');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    // html태그 요소를 넣고 싶을 때는 innerHTML을 쓴다

    const trashBtn = document.createElement('button');
    trashBtn.classList.add('todo_li_btn');
    trashBtn.innerHTML = '<i class="fa fa-trash"></i>';


    todoDiv.appendChild(todoLi); 
    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);


}


todoBtn.addEventListener('click', addTodo);