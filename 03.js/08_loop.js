// 반복문

// 1. for문

/*
    * 구문
    for([변수 선언 & 초기 값 설정]; [조건식(범위 지정)]; [증감식]) {
        반복 시킬 코드 내용 입력.
    }
*/
for (let i = 0; i < 10; i++) {
    // i가 0~9 총 10번 반복
    console.log('안녕', i);
}

// Q1) 1 ~ 5 출력
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// Q2) 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(i, sum);
}
console.log(sum);
console.log('-------------------');

////////////////////////////////////////////////
// 2. for ~ if 중첩
// * 간단 실습
// Hint 1) 1 ~ 20 까지 숫자를 반복
// Hint 2) 현재 반복 숫자가 짝수라면 (변수)에 더하기.
// Hint 3) for문 안에 if문 조합 해보세요.

// Q) 1 ~ 20 중에서 짝수 일 때의 합을 구하기.
let sum2 = 0; // 짝수의 합 저장할 변수

for (let i = 1; i <= 20; i++) {
    // console.log(i);
    if (i % 2 === 0) {
        sum2 = sum2 + i;
        console.log(i, sum2);
    }
}
console.log(sum2);

/////////////////////////////////////////
// 3. while 문
// Ex1)
let idx = 0;
while (idx < 10) {
    console.log('안녕', idx);
    // idx = idx + 1;
    idx += 1;
}
console.log('------------------');

// Ex2) 무한 루프
let idx2 = 0;
while (true) {
    // 의도적으로 무한루프
    console.log('idx2 안녕', idx2);
    idx2 += 1;

    // 무한 루프를 빠져나오는 조건
    if (idx2 === 10) {
        break;
    }
}
console.log('------------------');
// Ex3) while문 구구단
let i = 2,
    j = 1;
while (i < 10) {
    while (j < 10) {
        // console.log(i, 'x', j, '=', i * j);
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
    j = 1;
}

// Q) 1부터 20까지의 홀수 합 구하기 (while 사용)

///////////////////////////////////////// leader

// 1부터 10,000까지의 숫자 중에서 13의 배수이면서 홀수인 숫자 찾기
for (let i = 1; i <= 10000; i++) {
    if (i % 13 === 0 && i % 2 !== 0) {
        // 13의 배수이고 홀수 조건
        console.log(i);
    }
}
////////////////////////////////////////

//Q) 1부터20까지의 홀수 합 구하기(실습 while 사용)

//me 지움

//blua blua

// 합을 저장할 변수
// 합을 저장할 변수
// 20까지 반복
// 홀수일 때만
// sum에 홀수를 더함
// 다음 숫자로 증가

///////////////////////////////////////////////////

//leader님
//오류
// let sum = 0;   // 합계를 저장할 변수
// let number = 1;  // 시작 숫자 (1부터)

// while (number <= 20) {  // 20까지 반복
//     if (number % 2 === 0) {  // 숫자가 짝수라면
//         sum += number;  // 합계에 더하기
//     }
//     number++;  // 다음 숫자로 증가
// }

// console.log(`1부터 20까지의 짝수 합은: ${sum}`);

///////////////////////////////////////////////////
///////////////////////////////////////////////////

//Q) 10부터 1까지 역순으로 숫자 출력하기. (실습 while 사용)

//na
let number = 10;

while (number >= 1) {
    console.log(number);
    number--;
}

//////////////////////////////////////////////////////

// Q. 0~100의 숫자 중에서 2 또는 5의 배수 총합 구하기

// 힌트
// 나머지 연산자 %를  사용
// 5 % 3  2(5를 3으로 나눈 나무지인 2의 값을 반환)

// me

// while (number <= 100) {  // 100까지 반복
//     if (number % 2 === 0 || number % 5 === 0) {  // 2 또는 5의 배수일 때
//         sum += number;  // sum에 현재 숫자를 더함
//     }
//     number++;  // 다음 숫자로 증가
// }

// console.log("0부터 100까지의 2 또는 5의 배수 합은:", sum);

/////////////////////////////////////////////////////




// Q) for문을 활용한 별 찍기.
// 결과 모습)
/**
 * h = 5 입력
 *     *    // i = 1; / j = h-1 = 4 / k = 1
 *    **    // i = 2; / j = h-2 = 3 / k = 2
 *   ***    // i = 3; / j = h-3 = 2 / k = 3
 *  ****
 * *****    // i = 5; / j = h-5 = 0 / k = 5
 */
// Hint 1) prompt 사용해서 높이를 입력 받기. - 10진수의 정수(int)형으로 형변환 할 것.
// Hint 2) 각 줄의 내용을 저장할 문자열 변수 만들기.
// Hint 3) 문자열(" ") 과 문자열(*)을 더한다.
// Hint 4) for문 중첩.

const h = parseInt(prompt('높이를 입력하세요: '), 10);

// 별 찍기
for (let i = 1; i <= h; i++) {
    let line = ''; // 각 줄의 내용을 저장할 문자열

    // 공백 추가
    for (let j = 1; j <= h - i; j++) {
        line = line + ' ';
    }
    // line = "    "

    // 별 추가
    for (let k = 1; k <= i; k++) {
        line = line + '*';
    }
    // line = "    *"

    console.log(line);
}
// h = 5 입력 했을 가정)
// i = 1 / j = 1 ~ 4 / k = 1 ====>        *
// i = 2 / j = 1 ~ 3 / k = 2 ====>       **
// i = 5 / j = 0 만족 x / k = 5 ====> *****
//leader

//////////////////////////////////////////////////

// // 사용자 입력 받기
// let height = parseInt(prompt("별 찍기 높이를 입력하세요."));

// // 별 찍기 로직
// for (let i = 0; i < height; i++) {
//   let line = "";
//   for (let j = 0; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }
