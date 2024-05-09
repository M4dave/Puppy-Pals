import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";
// import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featurePup = puppies.find((puppy) => puppy.id === featPupId);
  console.log("featurePup: ", featurePup);
  console.log("puppyList: ", puppyList);

  function handlePuppyClick() {
    
  }

  return (
    <div className="App">
      {featPupId && <p>Featured Puppy: {featPupId}</p>}
      {featurePup && (
        <div>
          <h2>{featurePup.name}</h2>
          <ul>
            <li>Age: {featurePup.age}</li>
            <li>Email: {featurePup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
