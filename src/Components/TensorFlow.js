import React, { useReducer, useState, useRef} from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import WebCam from './Webcam';
import Runner from './DogRunning';


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

  const [imageUrl, setImageUrl] = useState(null);
  const inputRef = useRef();

  const captureImage = () => <WebCam/>

  const triggerClick = () => inputRef.current.click()

  const updateImageURL = (url) => {
    setImageUrl(url);
    changeState()
  }

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
        text: "Upload Image",
        text1: "Capture Image",
        action: triggerClick,
        action1: captureImage
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
  const [dogs, setDogs] = useState([]);
  const [button, setButton] = useState(false);

  const changeButtonStatus = () => {
      setButton(!(button))
      console.log(button)
  }

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
     
      
      <div className="btn">
        <button className="btn1" onClick={phases.states[state].action} >{phases.states[state].text}
            <input type="file" id="uploadInput" accept="image/*" capture="camera" ref={inputRef} onChange={handleUpload}/>
        </button>
        <Runner id="runner"/>
        {
        (button) ? 
        <button className="btn2" onClick={changeButtonStatus} >{<WebCam updateImageURL={updateImageURL}/>}</button> 
        : 
        <button className="btn2" onClick={changeButtonStatus} >{phases.states[state].text1}</button>   
        }

      </div>
      <div className= {dogs.length > 1 ? "DogInfo": "DogInfo NoRender"}>
        {renderDogInfo()}
      </div>
    </div>
  );
}  

export default App;

