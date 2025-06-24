const PersonForm = ({ 
  newName, 
  handleNameChange, 
  newNumber, 
  handleNumberChange, 
  addPerson 
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input 
               value={newName} 
               onChange={handleNameChange}
               placeholder="Add a new name..."
             />
      </div>
      <div>
        number: <input
                 value={newNumber}
                 onChange={handleNumberChange}
                 placeholder="Add phone number..."
               />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm