import React,{useContext} from 'react'
import { Button } from 'react-bootstrap'
import { QuizContext } from '../context/QuizStore'

function StartPage() {
    const { setStart } = useContext(QuizContext);
  return (
    <div className='start-page'>
    <div className='inner-card'>
        <Button onClick={() => setStart(true)}  variant='primary'>Start</Button>
    </div>
    </div>
  )
}

export default StartPage