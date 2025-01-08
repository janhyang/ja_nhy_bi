//#1.이벤트 핸들링 실습 
// src/components/ex/HandlerEx.js
// import React, { Component } from 'react';

// class HandlerEx extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'Hello World!'
//     };
//   }

//   handleClick = () => {
//     this.setState({
//       message: 'Goodbye World!'
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>{this.state.message}</h2>
//         <button onClick={this.handleClick}>
//           클릭하세요
//         </button>
//       </div>
//     );
//   }
// }

// export default HandlerEx;


/////////////////////////////////////////


//#2.이벤트 핸들링 실습 
// import React, { useState } from 'react';

// const ColorHandler = () => {
//   const [text, setText] = useState('검정색 글씨');
//   const [color2, setColor2] = useState('black');

//   const changeRed = () => {
//     setColor2('red');
//     setText('빨간 글씨')
//   }

//   const changeBlue = () => {
//     setColor2('blue');
//     setText('파란 글씨')
//   }

//   return (
//     <div>
//       <h2 style={{color: color2}}>{text}</h2>
//       <button onClick={changeRed}> 빨간 글씨 </button>
//       <button onClick={changeBlue}>파란 글씨</button>
//     </div>
//   );
// };

// export default ColorHandler;


////////////////////////////////////////////////////////////////////



//#3.이벤트 핸들링 실습 
// import React, { useState } from 'react';

// const GreetingToggle = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   return (
//     <div className="flex flex-col items-center gap-4 p-4 border-2 border-orange-300 rounded-lg bg-green-50">
//       <button 
//         onClick={() => setIsVisible(false)}
//         className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100"
//       >
//         사라져라
//       </button>
      
//       {isVisible && (
//         <div className="text-2xl font-bold">
//           안녕하세요
//         </div>
//       )}
      
//       <button 
//         onClick={() => setIsVisible(true)}
//         className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100"
//       >
//         보여라
//       </button>
//     </div>
//   );
// };

// export default GreetingToggle;

////////////////////////////////////////////////////

//실습.종합실습(props,state,event)
import React, { useState } from 'react';

// 이미지 import
// 실제 프로젝트에서는 이 경로들을 실제 이미지 경로로 변경해야 합니다
import appleImg from './img/사과.jpg';
import bananaImg from './img/바나나.jpg';
import orangeImg from './img/오렌지.jpg';
import grapeImg from './img/포도.jpg';

const FruitForm = () => {
  const [fruit, setFruit] = useState('사과');
  const [backgroundColor, setBackgroundColor] = useState('검정');
  const [textColor, setTextColor] = useState('검정');
  const [text, setText] = useState('');
  
  const fruits = ['사과', '바나나', '오렌지', '포도'];
  const colors = ['검정', '빨강', '파랑', '초록'];
  
  // 이미지 매핑 객체
  const fruitImages = {
    '사과': appleImg,
    '바나나': bananaImg,
    '오렌지': orangeImg,
    '포도': grapeImg
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출된 데이터:', {
      fruit,
      backgroundColor,
      textColor,
      text
    });
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="min-w-20">과일:</label>
          <select 
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {fruits.map(f => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          
          <label className="min-w-20">배경색:</label>
          <select 
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {colors.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          
          <label className="min-w-20">글자색:</label>
          <select 
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {colors.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-4">
          <label className="min-w-20">내용:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="내용을 입력하세요"
            className="border border-gray-300 rounded px-2 py-1 flex-1"
          />
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-center">
            <img 
              src={fruitImages[fruit]}
              alt={fruit}
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <div 
            className="p-4 text-center rounded"
            style={{
              backgroundColor: backgroundColor === '검정' ? 'black' : 
                            backgroundColor === '빨강' ? 'red' :
                            backgroundColor === '파랑' ? 'blue' : 'green',
              color: textColor === '검정' ? 'black' : 
                     textColor === '빨강' ? 'red' :
                     textColor === '파랑' ? 'blue' : 'green'
            }}
          >
            {text || 'text'}
          </div>
        </div>

        <button 
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          제출
        </button>
      </form>
    </div>
  );
};

export default FruitForm;