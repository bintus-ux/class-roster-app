import  { useState } from "react"


const AddStudentName = ( {onAddMaleStudent} ) => {
const [lastName, setLastName] = useState('')
const [firstName, setFirstName] = useState('')
const [gender, setGender] = useState('')


const onSubmit = (e) => {
  e.preventDefault()

  if(!lastName) {
  alert('Please add last name.')
  return
  }

if(!firstName) {
    alert('Please add first name.')
    return
    }
 
 if(!gender) {
      alert('Please select gender.')
      return
      }

  onAddMaleStudent({lastName, firstName, gender} )

  setLastName('')
  setFirstName('')
  setGender('')
 } 


  return (
    <form className="add-form" onSubmit={onSubmit}>
    <div className="form-control" >
      <label>Last Name</label>
      <input type='text' placeholder="...Input last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
    <div className="form-control" >
      <label>First Name</label>
      <input type='text' placeholder="...Input First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </div>
    <div className="form-control form-control-check">
              <label>Select Gender:</label>
              <select name="gender" id="gender" required onChange={(e) => setGender(e.target.value)}>
                <option value="">Select a gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
      </div>

      <input type='submit' value= 'Submit' className="btn btn-block" />
    </form>
  )
}

export default AddStudentName
