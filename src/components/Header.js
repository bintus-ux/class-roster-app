import Button from "./Button"


const Header = ({onAddMaleStudent, showAdd}) => {
  return (
    <div className='header'>
      <h1 style={{fontSize: 40}}>Class Roster</h1>
      <Button text={showAdd ? 'Close' : 'Add Student'} color= {showAdd ? 'red' : 'rgb(10, 10, 111)' }  onClick={onAddMaleStudent} />
    </div>
  )
}

export default Header
