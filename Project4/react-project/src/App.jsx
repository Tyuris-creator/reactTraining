// props read only properties that are shared between components
// a parent component can send data to a child component
// <Component key=value />
// propTypes = a mechanism that ensures that the passed value is of the correct datatype
// age: PropTypes.number


import Student from "./Student.jsx"

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patric" age={37} isStudent={false}/>
      <Student name="Sandy" age={28} isStudent={false}/>
      <Student/>
      <Student/>
      <Student/>
    </>
  )
}

export default App
