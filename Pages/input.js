import React, { useState } from 'react';

import '../Css/style.css';
import '../Css/styleproduct.css';


import images from './ImageLoader';

function UserInputForm() {
  // State variables to store user input
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [functionType, setFunctionType] = useState('');
  const [functionTime, setFunctionTime] = useState('');

  const [responseFromServer, setResponseFromServer] = useState(null);

  const imageName = 'image2.jpg';

  // const outrespons = '../Images/'{responseFromServer};

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can do something with the user input here, like sending it to an API or displaying it
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('Gender:', gender);
    console.log('Favorite Color:', favoriteColor);
    console.log('Function Type:', functionType);
    console.log('Function Time:', functionTime); 


    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/cloth?v1=140&v2=66&v3=25&v4=0&v5=5&v6=7&v7=3', {
        method: 'GET', // Change to 'GET' or other method as needed
        // You can add headers or a request body if required
      });

      if (response.ok) {
        const data = await response.json();
        // setResponseFromServer(data.prediction[0]);
        setResponseFromServer((data.prediction[0]).replace(/"/g, ''))
      } else {
        console.error('Server response not OK.');
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  

  return (
    <div>
      <div class="allbox">
      <div class="leftside">
        <div class="form">
        <div class="title">User Input Form</div>
        <form onSubmit={handleSubmit}>
          <div>
            <div class="input-container ic1">
              {/* <label htmlFor="height" class="placeholder">Height:</label> */}
              <input
                type="text"
                class="input"
                id="height"
                placeholder="Height:"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />

              
            </div>
          </div>
          <div>
            <div class="input-container ic1">
              {/* <label htmlFor="weight" class="placeholder">Weight:</label> */}
              <input
                type="text"
                class="input"
                id="weight"
                placeholder="Weight:"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div class="input-container ic1">
              {/* <label htmlFor="gender">Gender:</label> */}
              <input
                type="text"
                id="gender"
                class="input"
                placeholder="Gender:"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div class="input-container ic1">
              {/* <label htmlFor="favoriteColor">Favorite Color:</label> */}
              <input
                type="text"
                id="favoriteColor"
                class="input"
                placeholder="Favorite Color:"
                value={favoriteColor}
                onChange={(e) => setFavoriteColor(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div class="input-container ic1">
              {/* <label htmlFor="functionType">Function Type:</label> */}
              <input
                type="text"
                id="functionType"
                class="input"
                placeholder="Function Type:"
                value={functionType}
                onChange={(e) => setFunctionType(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div class="input-container ic1">
              {/* <label htmlFor="functionTime">Function Time:</label> */}
              <input
                type="text"
                id="functionTime"
                class="input"
                placeholder="Function Time:"
                value={functionTime}
                onChange={(e) => setFunctionTime(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" class="submit">Submit</button>
        </form>

        </div>
      </div>
      <div class="itemboxset">
        {/* <div class="itembox"> */}
        {/* <img src={require('../Images/image4.webp')} class="imagset" alt="Image 1" /> */}
        {/* <img src={require("../Images/"({responseFromServer}))} class="imagset" alt="Image 1" /> */}
        {/* <img src={require('../Images/'+responseFromServer)} class="imagset" alt="Image 1" /> */}
        {/* <img src={"Images/${responseFromServer}"} class="imagset" alt="Image 1" /> */}
        
        {/* </div> */}
        
        
        {responseFromServer && (
        <div>
          <h2>Response from Flask Server:</h2>
          {/* console.log({JSON.stringify(responseFromServer, null, 2)}); */}
          {/* console.log({responseFromServer}) */}
          {/* <pre>{JSON.stringify(responseFromServer, null, 2)}</pre> */}
          <h1>{responseFromServer}</h1>
          <div class="itembox">
          <img src={require('../Images/'+responseFromServer)} class="imagset" alt="Image 1" />
          </div>
          {/* <img src={'Images/${responseFromServer}'} class="imagset" alt="Image 1" /> */}
        </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default UserInputForm;