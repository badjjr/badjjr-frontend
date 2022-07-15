import '../styles/quizFormEdit.css';
import { useContext, useEffect } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function QuizFormEdit() {
	const { quizFormData, setQuizFormData, setQuizQuestions, setUpdatedQuizId } =
		useContext(DataContext);
	const navigate = useNavigate();
	const { id } = useParams();

	// On page load, grab the data of the quiz that is to be edited.
	useEffect(() => {
		const getQuizById = async () => {
			try {
				const res = await axios(
					`https://badjjr.herokuapp.com/api/quizzes/${id}`
				).then((res) => {
					console.log("Success! Here's the quiz:", res);
					setQuizFormData(res.data);
					setUpdatedQuizId(res.data._id);
				});
			} catch (err) {
				console.log("Uh-oh! We didn't get the quiz...", err);
			}
		};
		getQuizById();
	}, []);

	//============================================================================
	// SUBMITTING THE FORM
	// Update state, send a PATCH request, and navigate to the QuizQuestionsEdit
	// component.
	//============================================================================
	const handleQuizFormSubmit = (e) => {
		e.preventDefault();
		// Store user input for '# of Questions' in a variable for easy referral.
		const numberOfQuestions = e.currentTarget['num-of-questions'].value;

		setQuizFormData({
			title: e.currentTarget['title'].value,
			numberOfQuestions: numberOfQuestions,
			category: e.currentTarget['category'].value,
		});

		// If the quiz's original number of questions is modified
		if (parseInt(numberOfQuestions) !== quizFormData.numberOfQuestions) {
			// send a blank form,
			setQuizQuestions(
				new Array(parseInt(numberOfQuestions)).fill({
					type: '',
					question: '',
					answerChoices: [''],
					correctAnswer: '',
					incorrectAnswers: [''],
				})
			);
			// otherwise, send a form populated with the quiz's current data.
		} else {
			setQuizQuestions(quizFormData.questions);
		}

		// Navigate to the page holding the QuizQuestionsEdit component.
		navigate('/quizQuestionsEdit');
	};

	//============================================================================
	// UI
	//============================================================================
	return (
		<div>
			{/* Render the form with Bootstrap styling. */}
			<Form className='quiz-form' onSubmit={handleQuizFormSubmit}>
				<Form.Group>
					<Form.Label htmlFor='title'>Title</Form.Label>
					<Form.Control
						type='text'
						id='title'
						defaultValue={quizFormData.title}
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor='num-of-questions'># of Questions</Form.Label>
					<Form.Control
						type='number'
						id='num-of-questions'
						defaultValue={quizFormData.numberOfQuestions}
						min='1'
						max='20'
						required
					/>
					<p className='userNote'>
						Note: Changing this number will delete all of your current
						questions.
					</p>
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor='category'>Category</Form.Label>
					<Form.Control
						type='text'
						id='category'
						defaultValue={quizFormData.category}
						required
					/>
				</Form.Group>

				<Button variant='primary' type='submit' className='form-button'>
					Next
				</Button>
			</Form>
		</div>
	);
}

export default QuizFormEdit;
