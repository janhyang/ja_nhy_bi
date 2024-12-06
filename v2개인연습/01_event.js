// const body = document.querySelector('body');
// const button = document.querySelector('button');
// const colorText = document.querySelector('h2');
//per
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const colorText = document.querySelector('h2');

    button.addEventListener('click', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        colorText.textContent = `rgb(${r}, ${g}, ${b})`;
    });
});

/////////////////////////////////////////////////////
//ch
// const button = document.querySelector('button');
// const body = document.querySelector('body');
// const colorText = document.querySelector('h2');

// button.addEventListener('click', () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     colorText.textContent = `rgb(${r}, ${g}, ${b})`;
// });

////////////////////////////////////////////////////////
//me
// button.addEventListener('click', () => {

//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     bodystyle.backgroundColor = `rgb${r}${g}${b}`;
//     colorText.textContent.backgroundColor = `rgb${r}${g}${b}`;
// });

// btn.addEventListener('click', function () {
//     // event 객체
//     // 이벤트에 대한 다양한 정보를 포함.
//     console.log(h2); // 이벤트 객체에 대한 정보 출력
// });

// btn3.addEventListener('click', changeColor);

// function changeColor() {
//     const divs = document.querySelectorAll('#body');
//     console.log(divs);
//     // 해당 요소들 전부 CSS 변화를 적용 시키기 위해 for..of 반복 사용
//     for (let div of divs) {
//         div.style.backgroundColor = 'skyblue';
//     }
// }

////////////////////////////////////////////////////////////

// const button = document.querySelector('button');
// const body = document.querySelector('body');
// const colorText = document.querySelector('h2');

// button.addEventListener('click', () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     colorText.textContent = `rgb(${r}, ${g}, ${b})`;
// });

// 버튼을 클릭했을 때 h2 태그의 색상 값이 변경됩니다.
// h2 태그의 content(내용)을 변경하려면 textContent 속성값을 변경해야 합니다.

// 이 프로젝트에서는 10진 코드(r, g, b) 방식을 사용합니다.
// rgb(r, g, b)에서 red, green, blue 숫자 범위는 0 이상 255 이하입니다.
// 각 색상마다 0 ~ 255 사이의 랜덤한 값을 생성해야 합니다.
