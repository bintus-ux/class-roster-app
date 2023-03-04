import {FaTimes} from 'react-icons/fa'


const FemaleStudentName = ({femaleStudentName, onDelete}) => {
  return (
     <div className='female-names name' style={{float: 'right', clear: 'right'}} >
      <h3>{femaleStudentName.lastName} {femaleStudentName.firstName} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(femaleStudentName.id)} /> </h3>
    </div>
  )
}

export default FemaleStudentName
