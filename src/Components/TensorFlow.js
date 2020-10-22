import React, { useReducer, useState, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
// import './App.css';

// import WebCamCapture from './Webcam/WebcamCapture';


function App() {

  const loadModel = async () => {
    changeState()
    const mobilenetModel = await mobilenet.load()
    setModel(mobilenetModel);
    changeState()
  }

  const placeholderFunction = () => {}

  const identify = async () => {
    changeState()
    const dogsList = await model.classify(imageRef.current)
    console.log(dogsList)
    setDogs(dogsList)
    renderDogInfo()
    changeState()
  }

  const renderDogInfo = () => { 
    if (dogs.length > 1) {
      return dogs[0].className
    }  
  }
  
  const reset = () => {
    setImageUrl(null);
    setDogs([])
    changeState()
  }

  const triggerClick = () => inputRef.current.click()

  const phases = {
    initial: 'initial',
    states: {
      initial: { 
        on: { upComingState: "loadingModel"}, 
        text: "Load Model",
        action: loadModel
      },
      loadingModel: { 
        on: { upComingState: "awaitingUpload"}, 
        text: "Loading Model...",
        action: placeholderFunction
      },
      awaitingUpload: { 
        on: { upComingState: "ready"},
        text: "Upload Dog Image",
        action: triggerClick
      },
      ready: { 
        on: { upComingState: 'classifying' }, 
        showImage: true, 
        text: "Identify",
        action: identify
      },
      classifying: { 
        on: { upComingState: "complete"}, 
        text: "Identifying",
        action: placeholderFunction
      },
      complete: { 
        on: { upComingState: "awaitingUpload"}, 
        showImage: true,
        text: "Reset",
        action: reset
      }
    }
  }

  const reducer = (currentState, action) => {
    if(action === "upComingState") {
      return phases.states[currentState].on[action]
    }
    return phases.initial
  }

  const [state, dispatch] = useReducer(reducer, phases.initial);
  const [model, setModel] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [dogs, setDogs] = useState([]);
  const inputRef = useRef();
  const imageRef = useRef();


  const changeState = () => dispatch('upComingState');
  
  const handleUpload = event => {
    const { files } = event.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageUrl(url);
      changeState()
    }
  }

  const {showImage = false} = phases.states[state]

  return (
    <div className="dog-model" >
      {showImage && <img alt="upload-preview" src={imageUrl} width="auto" height="500" ref={imageRef} />}
      <input type="file" accept="image/*" capture="camera" ref={inputRef} onChange={handleUpload}/>
      <button onClick={phases.states[state].action}>{phases.states[state].text}</button>
      <div className="DogInfo">
        {renderDogInfo()}
      </div>
    </div>
  );
}  

export default App;



  // const phases = {
  //   initial: { next: 'Load Model', action: loadModel },
  //   loadingModel: { next: 'Loading Model...', action: placeholderFunction},
  //   awaitingUpload: { next: 'Upload Model', action: triggerClick},
  //   ready: { next: 'Identify', action: identify},
  //   classifying: { next: 'Identifying', action: placeholderFunction},
  //   complete: { next: 'Reset', action: restart}
  // 
