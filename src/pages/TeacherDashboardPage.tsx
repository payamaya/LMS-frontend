/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useState } from 'react'
import { CourseDetailsCard } from '../components/CourseDetailsCard'
import CourseListCard from '../components/CourseListCard'
import { ReusableBtn } from '../components/ReusableBtn'
import { ModalOverlay } from '../components/ModalOverlay'

export function TeacherDashboardPage(): ReactElement {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleAddClick = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	const handleSubmit = (formData: any) => {
		console.log('Form Data Submitted:', formData)
		// Add logic to handle the form data submission
	}

	return (
		<div className='teacher-dashboard-container g-container'>
			<section className='teacher-dashboard-section'>
				<h1 className='g-page-header'>Teacher Dashboard</h1>
				<ReusableBtn className="g-button" onClick={handleAddClick}>
					<span className="material-symbols-outlined">post_add</span>
					Add Course
				</ReusableBtn>
			</section>
			<div className='g-page-card-container'>
				<CourseListCard />
				<CourseDetailsCard />
			</div>

			<ModalOverlay
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onSubmit={handleSubmit} // Pass handleSubmit as a prop
			/>
		</div>
	)
}
