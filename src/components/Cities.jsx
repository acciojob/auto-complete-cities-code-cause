import React, { useState } from "react";

const Cities = ({ suggestion }) => {
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    const filteredArray = suggestion.filter(
      (item) => item.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(filteredArray);
    setShowSuggestion(true);
  }

  function handlesave(value) {
    setInput(value);
    setShowSuggestion(false);
    setFiltered([]);
  }

  return (
    <div>
      <p>Search cities in India</p>
      <input
        type="text"
        placeholder="Type your city name"
        value={input}
        onChange={handleChange}
      />

      {showSuggestion && input && filtered.length > 0 && (
        <ul>
          {filtered.map((value, index) => (
            <li key={index} onClick={() => handlesave(value)}>
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cities;
