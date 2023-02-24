import './App.css';
import StartPage from './components/StartPage';
import { Container } from 'react-bootstrap';
import QuizPage from './components/QuizPage';
import { useContext } from 'react';
import { QuizContext } from './context/QuizStore';
import ScorePage from './components/ScorePage';

function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    <div className="App">
      <Container>
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <QuizPage/>
                :
                <StartPage />
            }
          </>
          : <ScorePage/>
      }
      </Container>
    </div>
  );
}

export default App;
