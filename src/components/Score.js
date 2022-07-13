import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../dataContext';
import axios from 'axios';

function Score(props) {
    const {quizAnswers, setQuizAnswers} = useContext(DataContext);
    console.log(quizAnswers)
    const [userAnswers, setUserAnswers] = useState()
    const [correctAnswers, setCorrectAnswers] = useState()
    const [userCorrectAnswers, setUserCorrectAnswers] = useState()
    const [score, setScore] = useState()

    let correctAnswersTemp = []

    async function getCorrectAnswers() {
        const response = await axios.get(
					`https://badjjr.herokuapp.com/api/quizzes/62cc994fc582b1dd9b70a621`
				)
        response.data.questions.forEach((question) => {
            correctAnswersTemp.push(question.correctAnswer)
        })
        setCorrectAnswers(correctAnswersTemp)
    }

    function compareAnswers() {
        let sameAnswer = userAnswers.filter((answer) => {
           if  (correctAnswers.includes(answer)) {
            return true
           } else return false
        })
        setUserCorrectAnswers(sameAnswer);
    }

    function gradeQuiz() {
        let pointsPerQuestion = 100/correctAnswers.length
        let scoreTemp = userCorrectAnswers.length * pointsPerQuestion
        setScore(scoreTemp)
    }
    useEffect(() => {
        setUserAnswers(Object.values(quizAnswers));
        getCorrectAnswers()
    }, [])

    useEffect(() => {
        if (correctAnswers) {
            compareAnswers()
        }
    }, [correctAnswers])

    useEffect(() => {
        if (userCorrectAnswers) {
            gradeQuiz()
        }
    }, [userCorrectAnswers])
    return (
        <div>
           {userCorrectAnswers ? (<div>
               <h3>Your result is: {score}%</h3>
                You answered {userCorrectAnswers.length} of {correctAnswers.length} questions correctly.
           </div>) : (<h3>Score is being calculated...</h3>)}
        </div>
    );
}

export default Score;