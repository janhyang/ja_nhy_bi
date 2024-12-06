const todoForm = document.getElementById('userid');
const todos = document.querySelector('comment');









// const todoForm = document.getElementById('todo-form');
// const todos = document.querySelector('.todos');

// todoForm.addEventListener('submit', (e) => {
//     console.log('submit');
//     // submit : 폼에 대한 내용을 제출.
//     // 제출하는 순간, 새로고침 일어납니다.
//     e.preventDefault(); // 폼 submit 이벤트가 새로고침 되는 걸 막음. = 폼 제출을 막음

//     const todoInput = document.querySelector('input[name="todo"]');
//     // console.log(todoInput.value); // 입력된 값.

//     const newTodo = todoInput.value.trim(); // 양쪽 공백 제거

//     if (newTodo !== '') {
//         const newTodoLi = document.createElement('li'); // <li></li>
//         newTodoLi.append(newTodo); // <li>input 입력 값</li>
//         todos.append(newTodoLi);
//     }

//     // input 창 초기화
//     todoInput.value = '';
// });




// /**
//  * * input
//  * : input에 값이 입력될 때마다 이벤트 발생.
//  */
// chgInput.addEventListener('input', function () {
//     console.log('입력 발생!');
//     // console.log(this.value);
//     const div = document.querySelector('.intro');
//     div.textContent = this.value;
// });
