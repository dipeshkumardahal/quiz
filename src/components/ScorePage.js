import React from 'react'
import {useContext} from 'react'
import {Button } from 'react-bootstrap'
import { QuizContext } from '../context/QuizStore'

function ScorePage() {
    const { correct, quizzes, restart } = useContext(QuizContext)

    return (
        <div className='inner-card py-5'>
            <b>{correct} correct</b>
            <h2 className='mt-2'>{parseInt(correct/(quizzes.length)*100)}%</h2>
            <Button onClick={restart} className='my-4'>Play agian</Button> <br/>
            <b className=''>{correct} correct, {quizzes.length - correct} incorrect. out of {quizzes.length} questions.</b>
        </div>
    )
}

export default ScorePage