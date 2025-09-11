import React, { useState } from "react";
import "./../styles/App.css";
import Card from "./Card";

const states = [
  {
    name: "Madhya Pradesh",
    description:
      "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    city: [
      {
        name: "Indore",
        description:
          "Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
        landmarks: [
          {
            name: "Mhow",
            description:
              "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",
          },
          {
            name: "Dewas",
            description:
              "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
          },
        ],
      },
      {
        name: "Bhopal",
        description:
          "Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest cities. There are two main lakes, the Upper Lake and the Lower Lake.",
        landmarks: [
          {
            name: "MANIT",
            description:
              "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India.",
          },
          {
            name: "Berasia",
            description:
              "Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India.",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    description:
      "Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
    city: [
      {
        name: "Dhanbad",
        description:
          "Dhanbad is the second-most populated city in the Indian state of Jharkhand.",
        landmarks: [
          {
            name: "IIT(ISM) Dhanbad",
            description:
              "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university.",
          },
          {
            name: "Hirapur",
            description:
              "Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
          },
        ],
      },
      {
        name: "Wasseypur",
        description:
          "Wasseypur is a neighbourhood in the city of Dhanbad in Jharkhand.",
        landmarks: [
          {
            name: "Pandey muhalla",
            description: "Located behind the dhanbad junction.",
          },
          {
            name: "MPI Hall",
            description: "Space for everyone.",
          },
        ],
      },
    ],
  },
];

function App() {
  
  const [selectedState, setSelectedState] = useState(states[0]);
  const [selectedCity, setSelectedCity] = useState(states[0].city[0]);
  const [selectedLandmark, setSelectedLandmark] = useState(
    states[0].city[0].landmarks[0]
  );

  return (
    <div id="main">
      
      <select
  id="state"
  onChange={(e) => {
    const state = states[e.target.value];
    setSelectedState(state);
    setSelectedCity(state.city[0]);
    setSelectedLandmark(state.city[0].landmarks[0]);
  }}
>
  <option value="">Select state</option>
  {states.map((state, index) => (
    <option key={index} value={index}>
      {state.name}
    </option>
  ))}
</select>


      
      <select
        id="city"
        onChange={(e) => {
          const city = selectedState.city[e.target.value];
          setSelectedCity(city);
          setSelectedLandmark(city.landmarks[0]); 
        }}
      >
        {selectedState.city.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      
      <select
        id="landmark"
        onChange={(e) =>
          setSelectedLandmark(selectedCity.landmarks[e.target.value])
        }
      >
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      
      <Card
        state={selectedState}
        city={selectedCity}
        landmark={selectedLandmark}
      />
    </div>
  );
}

export default App;
