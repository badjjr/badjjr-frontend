import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Score(props) {
    const [userAnswers, setUserAnswers] = useState()
    const [correctAnswers, setCorrectAnswers] = useState()
    const [userCorrectAnswers, setUserCorrectAnswers] = useState()
    const [score, setScore] = useState()

    let uanswers = { 0: "JavaScript", 1: "Mocha", 2: "False", 3: "git checkout dev", 4: "True, True", 5: "Amazon", 6: "False", 7: "Props", 8: "Response Evaluation Process Line used in asynchronous error handling with the Try/Catch syntax", 9: "True"};

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
        setUserAnswers(Object.values(uanswers));
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
            Your result is: {score}%
        </div>
    );
}

export default Score;