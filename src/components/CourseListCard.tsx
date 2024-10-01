import { useOutletContext } from 'react-router-dom'
import { IBasicCourseInfo, IContext } from '../utils/interfaces'
import CourseItem from './CourseItem'
import { useEffect } from 'react'
import { useLoading } from '../hooks/useLoading'

export default function CourseListCard() {
  const {
    teacherBasicData,
    toggleActiveCourse,
    activeCourse,
    fetchCourses,
  }: IContext = useOutletContext<IContext>()

  const isLoading = useLoading(2000)

  useEffect(() => {
    if (!teacherBasicData) {
      fetchCourses()
    }
  }, [fetchCourses, teacherBasicData])

  return (
    <div className='g-card'>
      <h2 className='g-card-header'>Courses</h2>
      {isLoading ? (
        <p className='isLoading'>Loading courses...</p>
      ) : teacherBasicData && teacherBasicData.length > 0 ? (
        <ul className='g-list'>
          {teacherBasicData.map((item: IBasicCourseInfo) => (
            <CourseItem
              key={item.id}
              data={item}
              toggleActiveCourse={toggleActiveCourse}
              isActive={activeCourse?.id === item.id}
            />
          ))}
        </ul>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  )
}
