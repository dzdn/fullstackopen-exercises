import Course from "./components/Course"

/*
const Total = (props) => {
  return (
    <div>
      Total number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
    </div>
  )
}
*/

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts:  [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />

  /*
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
  */
}

export default App;
