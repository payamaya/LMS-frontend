import { ReactElement } from 'react'
import { IBasicCourseInfo } from '../utils/interfaces'
import DeleteCourse from './DeleteCourse'

interface ICourseItem {
  data: IBasicCourseInfo
  toggleActiveCourse: (id: string) => void
  isActive: boolean
  onDeleteSuccess: (deletedCourseId: string) => void // New prop for handling course deletion
}

export default function CourseItem({
  data,
  toggleActiveCourse,
  isActive,
  onDeleteSuccess,
}: ICourseItem): ReactElement {
  const handleDeleteSuccess = () => {
    onDeleteSuccess(data.id)
  }

  return (
    <li
      className={`g-list-item g-border-style ${isActive ? 'g-active' : ''}`}
      onClick={() => toggleActiveCourse(data.id)}
    >
      <h3 className='g-list-item-header'>{data.courseName}</h3>
      <div className='g-list-item-text'>
        {new Date(data.startDate).toLocaleDateString()} -{' '}
        {new Date(data.startDate).toLocaleDateString()}
      </div>
      <div className='g-list-item-text'>Teacher: {data.teacher?.name}</div>

      {/* Pass handleDeleteSuccess to DeleteCourse */}
      <DeleteCourse
        resourceId={data.id}
        onSuccess={handleDeleteSuccess}
        resourceType='courses'
      />
    </li>
  )
}
