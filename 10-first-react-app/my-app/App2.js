// App.js
// import React from 'react';

// function App() {
//   const name = "로이"; // 반려동물의 이름
//   const animal = "강아지"; // 반려동물의 종

//   return (
//     <div>
//       <h2>제 반려 동물의 이름은 {name}입니다.</h2>
//       <h2>{name}는 {animal}입니다.</h2>
//       <img
//         src="https://via.placeholder.com/150"
//         alt={`${animal} ${name}`}
//       />
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////



import React from "react";

function App() {
  const result = 3 + 5 === 8 ? "정답입니다!" : "오답입니다!";

  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
}

export default App;




