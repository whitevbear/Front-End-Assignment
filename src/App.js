//import logo from './logo.svg';
import dog01 from './dog01.png';
//import './App.css';
import './appindex.css';

//在 React 中，不建議直接使用 <script> 標籤來引入 JavaScript 文件。相反，您應該將 JavaScript 代碼放在 React 組件內部或使用 import 語句引入。
//我建議將 indextest.js 文件中的內容轉移到 React 組件中。請將 indextest.js 的內容複製到您的 App.js 文件中，然後刪除 <script src="indextest.js"></script> 行。

function App() {
  // 將 indextest.js 的內容放在這裡
  
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>
        猜數字遊戲
        </h1>
        <p className="message"></p>
        <section name="submitArea" id="submitArea" className="submitArea">
          <input type="text" id="guessText" className="guessText"/>
          <input type="submit" value="猜!" id="guessSubmit" className="guessSubmit"/>
        </section>

        <p className="answer">
        <button type="button" id="answerButton" className="answerButton"> 
          <img src={dog01} 
          id="answerButtonimg" 
          className="answerButtonimg" alt="dog01.png" />
          <p className="theanswer">( つ•̀ω•́)つ答案揭曉</p></button>
        </p>

      </header>
    </div>
  );
}

export default App;
