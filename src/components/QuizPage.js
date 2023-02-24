import React,{useContext, useState} from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { QuizContext } from '../context/QuizStore'

function QuizPage() {
    const [current, setCurrent] = useState(0);
    return (
        <div className='mt-5'>
            <QuizHolder current={current} next={setCurrent}></QuizHolder>
        </div>
    )
    }
    const QuizHolder = ({current, next})=>{
        const { quizzes, correct, setCorrect, setExit, restart } = useContext(QuizContext);
        const [ans, setAns] = useState("");
        const saveHandler = () => {
            if (quizzes[current].answers[quizzes[current].correctIndex] === ans) {
                setCorrect(correct + 1);
            }
            setAns("");
            if ((current + 1) === quizzes.length) {
                setExit(true)
            } else if(ans!==""){
                next(current + 1);
            }
        }
    return (
        <div className='inner-card py-4'>
        <h2 className='mb-4'>
        {current + 1}. {quizzes[current].question}
        </h2>
        <hr/>
        <div className='answers p-2 my-5'>
            <Row>
                {quizzes[current].answers.map((answer, i)=>{
                    return <Col md={6} sm={12} key={i}>
                    <Button variant={`${ans === answer ? 'success' : 'primary'}`} onClick={() => setAns(answer)}>{answer}</Button>
                    </Col>
                    }
                )}
            </Row>
        </div>
        <div className='controls d-flex justify-content-between'>
            <Button variant='secondary' onClick={restart}>Restart</Button>
            <Button variant='success' onClick={saveHandler}>Next</Button>
        </div>
        </div>
    )
}

export default QuizPage