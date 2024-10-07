import { ReactElement, useState } from 'react'
import { IContext, IUser } from '../utils/interfaces'
import { useOutletContext } from 'react-router-dom'

interface ICourseDetailsStudentsDropdownProps {
	students: IUser[] | undefined
}

export function CourseDetailsStudentsDropdown({
	students,
}: ICourseDetailsStudentsDropdownProps): ReactElement {
	const [isOpen, setIsOpen] = useState(false)
	const { isLoading }: IContext = useOutletContext<IContext>()

	return (
		<div className='course-details-students-dropdown'>
			<button
				className='course-details-students-dropdown-button'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className='material-symbols-outlined'>keyboard_arrow_down</span>
				<p>View Students</p>
			</button>
			{isOpen && (
				<ul className='g-list'>
					{isLoading ? (
						<p className='isLoading'>Loading students...</p>
					) : (
						students?.map((user) => (
							<li key={user.id} className='g-text'>
								{user.name}
							</li>
						))
					)}
				</ul>
			)}
		</div>
	)
}
