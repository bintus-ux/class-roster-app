import FemaleStudentName from "./FemaleStudentName"


const StudentNamesB = ({femaleStudentNames, onDelete}) => {
  return (
    <div style={{float: 'right', clear: 'right'}}>
      {femaleStudentNames.map((femaleStudentName) => (
      <FemaleStudentName key={femaleStudentName.id} femaleStudentName={femaleStudentName} onDelete={onDelete} />
       ) )}
    </div>
  )
}

export default StudentNamesB
