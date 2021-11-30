import contacts from "./contacts.json"
import { useState } from "react";
import './App.css';

const remainingContacts = [...contacts]
const initAgenda = remainingContacts.splice(0,5) 

function App() {

  const [agenda, setAgenda] = useState(initAgenda)

  const addContact = () => {

    const randomIndex = Math.floor(Math.random() * remainingContacts.length)
    const randomContact = remainingContacts.splice(randomIndex, 1)

    setAgenda(agenda.concat(randomContact))
 
  }

  const sortName = () => {

    const newlist = [ agenda.sort( ( a , b  ) => a.name.localeCompare(b.name) ) ]

    setAgenda( agenda.splice(...newlist) )  

  }

  const sortPopularity = () => {

    const newlistPopularity = [ agenda.sort( ( a , b  ) => a.popularity - b.popularity ) ]

    const arraycopy = agenda.splice( ...newlistPopularity)
    
    setAgenda( arraycopy )  

  }

  const deleteContact = (id) => {

    const updatedarr = agenda.filter(item => item.id !== id);
    
    setAgenda( updatedarr)
  
  }

  return (
<>
    <h1> Iron contacts </h1>

<div className="buttonclass">
    <button onClick={addContact}> Add Random Contact </button>

    <button onClick={sortName}> Sort by Name </button>

    <button onClick={sortPopularity}> Sort by Popularity </button>

</div>

    <div className="App">
      
      <table>
      <thead> 
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar</th>
      <th>Won Emmy</th> 
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
  
    {agenda.map((contact) => {
      return (

          <tr key={contact.id}>
          
            <td> 
            <img src={contact.pictureUrl} alt={contact.name}
            width="100px"
            height="150px"
             />
            </td>
            
            <td> {contact.name} </td>
            <td> {contact.popularity.toFixed(2)} </td>
            <td> {contact.wonOscar && "🏆"} </td>
            <td> {contact.wonEmmy && "🏆"} </td>

            <td> <button onClick={ () => deleteContact(contact.id)}> Delete </button>  </td>

          </tr>
        )
    })}
    </tbody>
    </table>
  </div>
</>
  );
}

export default App;
