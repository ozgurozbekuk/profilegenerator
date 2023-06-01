import { useState } from 'react';
import axios from "axios"
import './App.css';

function App() {

  const [profileName,setProfileName] = useState("");
  const [profileCell,setProfileCell] = useState("");
  const [profileImage,setProfileImage] = useState("");
  const [profileEmail,setProfileEmail] = useState("");

 

  const profileData = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/')
      console.log(res.data.results[0].name.first);
      setProfileCell(res.data.results[0].cell);
      setProfileEmail(res.data.results[0].email)
      setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
      setProfileImage(res.data.results[0].picture.large)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">
      <div className='container'>
        <img src={profileImage} />
        <h1>{profileName}</h1>
        <p>{profileEmail}</p>
        <p>{profileCell}</p>
        <button onClick={profileData}>New Profile</button>
      </div>
    </div>
  );
}

export default App;
