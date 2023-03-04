import {FaTimes} from 'react-icons/fa'



const MaleStudentName = ({maleStudentName, onDelete, onToggle}) => {
  return (
    <div className="male-names name" style={{float: 'left', clear: 'left'}} onDoubleClick={() => onToggle(maleStudentName.id)} >
      <h3>{maleStudentName.lastName} {maleStudentName.firstName} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(maleStudentName.id)} />
      </h3>
      
    </div>
  )
}

export default MaleStudentName
