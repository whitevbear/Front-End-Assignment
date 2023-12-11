import logo from './logo.svg';
import dog01 from './dog01.png';
import './App.css';
import './appindex.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <p>
        猜數字遊戲
        </p>
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
