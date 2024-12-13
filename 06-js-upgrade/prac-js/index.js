
//과제1.















//과제1.



// const userInfo = {
//     name: 'Lee',
//     age: 25,
//     job: 'Developer',
//     city: 'Seoul'
//   };

//   const { name, age, ...restInfo } = userInfo;

//   console.log(name); // Output: 'Lee'
//   console.log(age); // Output: 25
//   console.log(restInfo); // Output: { job: 'Developer', city: 'Seoul' }
////////////////////////////////////////////////////////////////





//과제2



















//과제2

// const evenNumber = [2, 4, 6];
// const oddNumber = [1, 3, 5];

// const allNumbers = [...evenNumber, ...oddNumber];

// const [first, second, ...remaining] = allNumbers;

// console.log(first); // Output: 2
// console.log(second); // Output: 4
// console.log(remaining); // Output: [6, 1, 3, 5]

///////////////////////////////











//과제3

//Shape(직사각형) 클래스 속성 : 가로와 세로
//Shape 클래스의 메소드 : getArea()
//-넓이  반환하는 메소드(가로 * 세로)




// let rec1 = new Shape(3, 4);
// console.log(rec.getArea());//12가 나오는지 확인


///////////////////////////////////////////////////

// class Shape {
//     constructor(widght, height)  {
//         this.widgh
//         this.height
//     }

//     getArea() {
//         console.log
//     }

// }



/////////////////////////////////////////////////////
//과제3

// class Shape {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
  
//     getArea() {
//       return this.width * this.height;
//     }
//   }
  
//   let rec1 = new Shape(3, 4);
//   console.log(rec1.getArea()); // Output: 12



/////////////////////////////////////////////////////

//과제4


// // 단계적으로 도형 클래스를 작성해보는 코드

// // 1. Shape 클래스 작성
// class Shape {
//     getArea() {
//         throw new Error('getArea() 메소드는 서브클래스에서 구현되어야 합니다.');
//     }
// }

// // 2. Rectangle(직사각형) 클래스 작성
// class Rectangle extends Shape {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }

//     getDiagonal() {
//         return Math.sqrt(this.width ** 2 + this.height ** 2);
//     }
// }

// // 3. Triangle(삼각형) 클래스 작성
// class Triangle extends Shape {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }

//     getArea() {
//         return (this.base * this.height) / 2;
//     }
// }

// // 4. Circle(원) 클래스 작성
// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }
// }

// // 5. 각 클래스 인스턴스 생성 및 테스트
// const rectangle = new Rectangle(5, 10);
// console.log('Rectangle Area:', rectangle.getArea()); // 직사각형 면적
// console.log('Rectangle Diagonal:', rectangle.getDiagonal()); // 직사각형 대각선 길이

// const triangle = new Triangle(4, 8);
// console.log('Triangle Area:', triangle.getArea()); // 삼각형 면적

// const circle = new Circle(7);
// console.log('Circle Area:', circle.getArea()); // 원 면적
