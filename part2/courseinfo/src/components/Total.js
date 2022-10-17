import React from 'react'

const Total = ({ course }) => {
    return (
      <div>
        Total number of exercises: {course.parts.reduce((total, part) => total + part.exercises, 0)}
      </div>
    )
  }

  export default Total;