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

let rec1 = new Shape(3, 4);
console.log(rec.getArea());//12가 나오는지 확인


///////////////////////////////////////////////////

class Shape {
    constructor(widght, height)  {
        this.widgh
        this.height
    }

    getArea() {
        console.log
    }

}
















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
