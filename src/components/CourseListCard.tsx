import { useOutletContext } from 'react-router-dom'
import { IBasicCourseInfo, IContext } from '../utils/interfaces'
import CourseItem from './CourseItem'
import { useEffect, useState } from 'react'

export default function CourseListCard() {
  const {
    teacherBasicData,
    toggleActiveCourse,
    activeCourse,
    fetchCourses,
    isLoading,
  }: IContext = useOutletContext<IContext>()

  const [courses, setCourses] = useState<IBasicCourseInfo[]>([])

  useEffect(() => {
    if (teacherBasicData) {
      setCourses(teacherBasicData)
    } else {
      fetchCourses()
    }
  }, [teacherBasicData, fetchCourses])

  // Function to remove the course from the state after deletion
  const handleDeleteSuccess = (deletedCourseId: string) => {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== deletedCourseId)
    )
  }

  return (
    <div className='g-card'>
      <h2 className='g-card-header'>Courses</h2>
      {isLoading ? (
        <p className='isLoading'>Loading courses...</p>
      ) : courses && courses.length > 0 ? (
        <ul className='g-list'>
          {courses.map((item: IBasicCourseInfo) => (
            <CourseItem
              key={item.id}
              data={item}
              toggleActiveCourse={toggleActiveCourse}
              isActive={activeCourse?.id === item.id}
              onDeleteSuccess={handleDeleteSuccess} // Pass delete success handler
            />
          ))}
        </ul>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  )
}
