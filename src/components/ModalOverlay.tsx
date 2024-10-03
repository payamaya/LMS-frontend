/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, ReactElement } from 'react'
import { ReusableBtn } from './ReusableBtn' // Import the reusable button component
import { BASE_URL } from '../utils/constants'
// Ensure jwt-decode is correctly imported if you decide to use it

import { jwtDecode } from 'jwt-decode'

interface ModalOverlayProps {
	isOpen: boolean
	onClose: () => void
	onSubmit: (formData: FormData) => void
}

interface FormData {
	courseName: string
	description: string
	startDate: string
	teacherId: string
	teacherName: string // Added teacherName to FormData
}
export function ModalOverlay({
	isOpen,
	onClose,
}: ModalOverlayProps): ReactElement | null {
	const [formData, setFormData] = useState<FormData>({
		courseName: '',
		description: '',
		startDate: '',
		teacherId: '',
		teacherName: '', // Initialize teacherName
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
			!formData.startDate ||
			// !formData.teacherId ||
			!formData.teacherName // Validate teacherName
		) {
			setError('All fields are required.')
			return false
		}
		return true
	}

	const handleSubmit = async () => {
		const token = localStorage.getItem('tokens') // Correct token key
		console.log('Authorization Token:', token)

		if (!token) {
			setError('No authorization token found. Please log in.')
			return
		}

		try {
			const decodedToken: any = jwtDecode(token)
			console.log('Decoded Token:', decodedToken)

			// Check if token is expired
			const currentTime = Math.floor(Date.now() / 1000)
			if (decodedToken.exp < currentTime) {
				setError('Token has expired. Please log in again.')
				return
			}

			// Check if the role or permissions allow access to /courses
			if (!decodedToken.roles.includes('Teacher')) {
				setError('You do not have the required permissions to add a course.')
				return
			}
		} catch (error) {
			console.error('Failed to decode token:', error)
			setError('Invalid token. Please log in again.')
			return
		}

		// Validate form data
		if (!validateForm()) {
			return
		}

		const courseData = {
			CourseName: formData.courseName,
			Description: formData.description,
			StartDate: formData.startDate,
			Teacher: {
				id: formData.teacherId,
				name: formData.teacherName,
			},
		}

		console.log('Submitting Course Data:', courseData)

		try {
			setLoading(true)
			const response = await fetch(`${BASE_URL}/Courses`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`, // Include the token in the request
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
				startDate: '',
				teacherId: '',
				teacherName: '',
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
				<div className='modal-input'>
					<label htmlFor='teacherId'>Teacher ID:</label>
					<input
						id='teacherId'
						type='text'
						name='teacherId'
						value={formData.teacherId}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className='modal-input'>
					<label htmlFor='teacherName'>Teacher Name:</label>
					<input
						id='teacherName'
						type='text'
						name='teacherName'
						value={formData.teacherName}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className='modal-buttons'>
					<ReusableBtn
						className='g-button'
						onClick={handleSubmit}
						type='button'>
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
