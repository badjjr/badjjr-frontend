// import { useContext, useEffect, useState } from 'react';
// import { DataContext } from '../dataContext';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

function QuizQuestionsEdit() {
	// Hard-coded data
	const testDATA = {
		_id: '62cf5e01c08e0c47c85182b0',
		title: 'test',
		numberOfQuestions: 1,
		category: 'testing',
		questions: [
			{
				type: 'multiple choice',
				question: 'question',
				answerChoices: ['correct', 'wrong'],
				correctAnswer: 'correct',
				incorrectAnswers: ['wrong'],
				_id: '62cf5e01c08e0c47c85182b1',
				createdAt: '2022-07-14T00:06:25.595Z',
				updatedAt: '2022-07-14T00:06:25.595Z',
			},
		],
		createdAt: '2022-07-14T00:06:25.595Z',
		updatedAt: '2022-07-14T00:06:25.595Z',
		__v: 0,
	};

	return <div>HEY</div>;
}

export default QuizQuestionsEdit;
