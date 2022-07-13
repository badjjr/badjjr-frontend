import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DisplayQuiz from './components/DisplayQuiz'
import Header from './components/Header'
import Score from './components/Score'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/quiz' element={<DisplayQuiz />} />
        <Route path='/score' element={<Score />} />
      </Routes>
    </div>
  );
}

export default App;
