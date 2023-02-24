import React, { useState } from 'react'
import { createContext } from 'react'
import Data from '../data.json'

const QuizContext = createContext();
const quizzes = Data.questions;

export default function QuizStore(props) {
    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    const restart = ()=>{
        setExit(false);
        setStart(false);
        setCorrect(0);
    }
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect, restart
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };