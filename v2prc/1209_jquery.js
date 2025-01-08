// function changeImg(사과) {
// name: apple or banana or grape or peach
function changeImg(name) {
    // name: apple or banana or grape or peach
    $('img').attr('src', `"./img/${name}기본.jpg"`);
}
console.log($('img').changeImg());



//  function changeImg(fruit){
//     const image = {
//         apple = '"C:\Users\USER\OneDrive\Desktop\test\v2개인연습\img\사과.jpg"'
//         banana ='"C:\Users\USER\OneDrive\Desktop\test\v2개인연습\img\바나나.jpg"'
//         grape = '"C:\Users\USER\OneDrive\Desktop\test\v2개인연습\img\포도.jpg"'
//         peach = '"C:\Users\USER\OneDrive\Desktop\test\v2개인연습\img\복숭아.jpg"'

//     }

//     const imageElement = document.getElementById('fruit-image')
//     imageElement.src = image[fruit]

//     $('a').attr(image, )

//  }

// function changeImg(fruit) {
//     // 이미지 경로와 이름 매핑
//     const images = {
//         apple: './img/apple.jpg',
//         banana: './img/banana.jpg',
//         grape: './img/grape.jpg',
//         peach: './img/peach.jpg'
//     };

//     // 이미지 변경
//     const imageElement = document.getElementById('fruit-image');
//     imageElement.src = images[fruit] || './img/기본.jpg'; // 기본 이미지로 복원
// }
