import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setFilterSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.some(person => person.name.toLowerCase() === newName.trim().toLowerCase())) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newName.trim(),   
      number: newNumber.trim(),  
      id: persons.length + 1
    }    
    
    setPersons(persons.concat(personObject));
    setNewName('') 
    setNewNumber('')
  }  

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setFilterSearch(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchPerson.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={searchPerson} onChange={handleSearchChange} />

      <h3>Add a new</h3>

      <PersonForm 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App