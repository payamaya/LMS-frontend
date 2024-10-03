/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, ReactElement } from 'react'
import { ReusableBtn } from './ReusableBtn' // Import the reusable button component
import { BASE_URL } from '../utils/constants'
import { ITokens } from '../utils/interfaces'

interface ModalOverlayProps {
	isOpen: boolean
	onClose: () => void
	onSubmit: (formData: FormData) => void
}

interface FormData {
	courseName: string
	description: string
	startDate: string
}
export function ModalOverlay({
	isOpen,
	onClose,
}: ModalOverlayProps): ReactElement | null {
	const [formData, setFormData] = useState<FormData>({
		courseName: '',
		description: '',
		startDate: ''
	})

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const validateForm = (): boolean => {
		// Validate all form fields are filled
		if (
			!formData.courseName ||
			!formData.description ||
			!formData.startDate
		) {
			setError('All fields are required.')
			return false
		}
		return true
	}

	const handleSubmit = async () => {
		const token: any | null = localStorage.getItem('tokens') // Correct token key

		if (!token) {
			console.log('No authorization token found. Please log in.');
			setError('No authorization token found. Please log in.')
			return
		}

		// Validate form data
		if (!validateForm()) {
			return
		}

		const courseData = {
			CourseName: formData.courseName,
			Description: formData.description,
			StartDate: formData.startDate
		}

		console.log('Submitting Course Data:', courseData)

		try {
			const parsedToken: ITokens = JSON.parse(token);

			setLoading(true)
			const response = await fetch(`${BASE_URL}/Courses`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${parsedToken.accessToken}`, // Include the token in the request
				},
				body: JSON.stringify(courseData),
			})

			const responseText = await response.text()

			if (!response.ok) {
				const parsedError = JSON.parse(responseText)
				setError(parsedError?.message || 'Failed to submit data')
				console.error('Submission Error:', response.status, responseText)
				return
			}

			console.log('Course added successfully:', JSON.parse(responseText))

			setError(null) // Clear errors on success
			onClose() // Close modal
			setFormData({
				courseName: '',
				description: '',
				startDate: ''
			})
		} catch (error) {
			console.error('Unexpected error:', error)
			setError('An error occurred while submitting the form')
		} finally {
			setLoading(false)
		}
	}

	// If modal is not open, return null to avoid rendering
	if (!isOpen) return null

	return (
		<div className='modal-overlay'>
			{loading && <p>Loading...</p>}
			{error && <p className='error-message'>{error}</p>}
			<div className='modal-content'>
				<h2>Add Course</h2>
				<div className='modal-input'>
					<label htmlFor='courseName'>Course Name:</label>
					<input
						id='courseName'
						type='text'
						name='courseName'
						value={formData.courseName}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className='modal-input'>
					<label htmlFor='description'>Description:</label>
					<input
						id='description'
						type='text'
						name='description'
						value={formData.description}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className='modal-input'>
					<label htmlFor='startDate'>Start Date:</label>
					<input
						id='startDate'
						type='datetime-local'
						name='startDate'
						value={formData.startDate}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className='modal-buttons'>
					<ReusableBtn
						className='g-button'
						onClick={handleSubmit}
						type='submit'>
						<span className="material-symbols-outlined">
							send
						</span>
						Submit
					</ReusableBtn>
					<ReusableBtn className='g-button' onClick={onClose} type='button'>
						<span className="material-symbols-outlined">
							close
						</span>
						Close
					</ReusableBtn>
				</div>
			</div>
		</div>
	)
}
