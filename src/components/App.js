
import React from "react";
import './../styles/App.css';
import Cities from "./Cities";


const citySuggestions = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Hyderabad',
  'Ahmedabad',
  'Kolkata',
  'Pune',
  'Jaipur',
  'Lucknow'
];

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Cities suggestion={citySuggestions}/>
        
    </div>
  )
}

export default App
