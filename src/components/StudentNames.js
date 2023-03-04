import MaleStudentName from "./MaleStudentName"


const StudentNames = ({maleStudentNames, onDelete, onToggle}) => {

  return (
    <div style={{float: 'left', clear: 'left'}}>
      {maleStudentNames.map((maleStudentName) => (
      <MaleStudentName key={maleStudentName.id} maleStudentName={maleStudentName} onDelete={onDelete} onToggle={onToggle} />
       ) )}
       
    
      
    </div>
  )
}

export default StudentNames
