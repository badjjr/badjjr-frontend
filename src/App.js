import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DisplayQuiz from './components/DisplayQuiz'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/quiz/' element={<DisplayQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
