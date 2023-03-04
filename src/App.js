import { useState } from "react"
import Header from "./components/Header";
import StudentNames from "./components/StudentNames";
import StudentNamesB from "./components/StudentNamesB";
import Gender from "./components/Gender";
import AddStudentName from "./components/AddStudentName";

const App = () => {
  const [showAddMaleStudent, setShowAddMaleStudent] = useState(false)
  const [maleStudentNames, setMaleStudentNames] = useState([
    
    {
        id: 1,
        lastName: 'Ikemba',
        firstName: 'Johnny',
        gender: 'male',
        height: "Height: 5'7",
        age:    'Age: 14',
        complexion: 'Complexion: Extremely fair skin'
    },
    {
        id: 2,
        lastName: 'Zike',
        firstName: 'John',
        gender: 'male',
        height: "Height: 5'9",
        age:    'Age: 13',
        complexion: 'Complexion: Brown skin'
    },
    {
        id: 3,
        lastName: 'Eze',
        firstName: 'Obikere',
        gender: 'male',
        height: "Height: 5'4",
        age:    'Age: 14',
        complexion: 'Complexion: Brown skin'
    },
    {
        id: 4,
        lastName: 'Eze',
        firstName: 'Chidindu',
        gender: 'male',
        height: "Height: 5'8",
        age:    'Age: 14',
        complexion: 'Complexion: Olive skin'
    },
])

const [femaleStudentNames, setFemaleStudentNames] = useState([
  {
    id: 1,
    lastName: 'Ike',
    firstName: 'Chisom',
    gender: 'female',
    height: "Height: 5'6",
    age:    'Age: 14',
    complexion: 'Complexion: Olive skin'
},
{
    id: 2,
    lastName: 'Amara',
    firstName: 'Chi',
    gender: 'female',
    height: "Height: 5'7",
    age:    'Age: 16',
    complexion: 'Complexion: Fair skin'
},
{
  id: 3,
  lastName: 'Enoch',
  firstName: 'Chiamaka',
  gender: 'female',
  height: "Height: 5'9",
  age:    'Age: 15',
  complexion: 'Complexion: Dark skin'
},
])

// Add student name
const addMaleStudentName = (maleStudentName) => {
  const id = Math.floor(Math.random() * 
  10000) + 1
  const newMaleStudentName = {id, ...maleStudentName}
  {maleStudentName.gender === 'Male' ? setMaleStudentNames([...maleStudentNames, newMaleStudentName]) 
  : setFemaleStudentNames([...femaleStudentNames, newMaleStudentName]) }
 }

// delete male student name
const deleteMaleStudentName = (id) => {
  setMaleStudentNames(maleStudentNames.filter((maleStudentName) => (maleStudentName.id !== id)))
}
// delete female student name
const deleteFemaleStudentName = (id) => {
  setFemaleStudentNames(femaleStudentNames.filter((femaleStudentName) => (femaleStudentName.id !== id)))
}

// Toggle bio details
const toggleBioDetails = (id) => {
  setMaleStudentNames(
   maleStudentNames.map((maleStudentName) => 
  maleStudentName.id === id ? {...maleStudentName} : maleStudentName
  ))
 }



  return (
    <div className="container">
      <Header onAddMaleStudent= {() => setShowAddMaleStudent
      (!showAddMaleStudent)} showAdd={showAddMaleStudent} />
      {showAddMaleStudent && <AddStudentName onAddMaleStudent={addMaleStudentName} />}
      <Gender />
      { maleStudentNames.length > 0 ? <StudentNames maleStudentNames={maleStudentNames} onDelete={deleteMaleStudentName} onToggle={toggleBioDetails} /> : 'No available Male Student.' }
      {femaleStudentNames.length > 0 ?  <StudentNamesB femaleStudentNames={femaleStudentNames} onDelete={deleteFemaleStudentName} /> : 'No available Female Student.'}
    </div>
  )
}


export default App;
