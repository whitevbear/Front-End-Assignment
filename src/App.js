//import logo from './logo.svg';
import dog01 from './dog01.png';
import blackcat from './blackcat.png';
//import './App.css';
import './appindex.css';
import React, { useState ,useEffect } from 'react';

//在 React 中，不建議直接使用 <script> 標籤來引入 JavaScript 文件。相反，您應該將 JavaScript 代碼放在 React 組件內部或使用 import 語句引入。
//我建議將 indextest.js 文件中的內容轉移到 React 組件中。請將 indextest.js 的內容複製到您的 App.js 文件中，然後刪除 <script src="indextest.js"></script> 行。

function App() {
  // 將 indextest.js 的內容放在這裡
  // Random number
  const [targetNumber, settargetNumber] = useState(Math.floor(Math.random() * 100) + 1);

    // 定義一個函數，當需要生成新的隨機數時調用
    const newTargetnumber = () => {
      const newAnswer = targetNumber;
      // 使用 setTargetNumber 更新狀態
      settargetNumber(newAnswer);
      console.log("New answer: " + newAnswer);
    };


// Get element
// guessText 狀態變數和更新函數
const [guessText, setGuesstext] = useState('');
// 定義一個函數，用於處理 input 元素的變化事件
const handleguessText = (event) => {
  // 更新 inputText 狀態，使其與 input 元素的值同步
  setGuesstext(event.target.value);
};

  // guessSubmi狀態變數和更新函數
  const [guessSubmi, setGuesssubmi] = useState(false);
  // 定義一個函數，用於處理猜數字按鈕的點擊事件
  const guessSubmiClick = () => {
    // 在這裡處理猜數字按鈕的點擊邏輯

    // 例如，禁用猜數字按鈕
    //setGuesssubmi(true);
  };

  const [answerButtonImg, setAnswerButtonImg] = useState(dog01); // 初始化圖片路徑，您可以根據需要進行修改
  const [theAnswer, setTheanswer] = useState('( つ•̀ω•́)つ答案揭曉');
  // answerButton狀態變數和更新函數
  const [answerButton, setanswerButton] = useState(false);
  // 定義一個函數，用於處理按鈕點擊事件
  const answerButtonClick = () => {
    // 在這裡處理按鈕點擊的邏輯
    setTheanswer("( つ•̀ω•́)つ   " + targetNumber);
    // 更新圖片路徑，您可以根據需要進行修改
    setAnswerButtonImg(blackcat);
    // 例如，禁用按鈕
    setanswerButton(true);
  };

  useEffect(() => {
    console.log(targetNumber);
  }, [targetNumber]);


  return (
    
    <div className="App">
      <header className="App-header">
        <h1>
        猜數字遊戲
        </h1>
        <p className="message"></p>
        <section name="submitArea" id="submitArea" className="submitArea">
          <input 
          type="text" 
          id="guessText" className="guessText"
          value={guessText}
          onChange={handleguessText}
          />
          <input
          type="submit"
          value="猜!"
          id="guessSubmit"
          className="guessSubmit"
          //disabled={setGuesssubmi}
          /*onClick={guessSubmiClick}*//>
        </section>

        <p className="answer">
        <button 
          type="button"
          id="answerButton"
          className="answerButton"
          /* 使用狀態來決定按鈕是否禁用 */
          disabled={answerButton}
          onClick={answerButtonClick}
          > 
          <img src={answerButtonImg} 
          onClick={answerButtonClick}
          id="answerButtonimg" 
          className="answerButtonimg" alt="dog01.png" />
          <p className="theAnswer" >{theAnswer}</p></button>
        </p>

      </header>
    </div>
  );
}

export default App;
