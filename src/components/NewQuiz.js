import { useContext } from 'react';
import { DataContext } from '../dataContext';

function NewQuiz() {
	const { quizFormData, quizQuestions } = useContext(DataContext);

	return <div></div>;
}

export default NewQuiz;
