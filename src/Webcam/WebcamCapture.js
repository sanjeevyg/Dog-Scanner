// import React, {useState, useRef, useCallback} from "react";
// import Webcam from "react-webcam";


// const Capture = (props) => {
//     const webcamRef = useRef();
//     console.log(webcamRef)
//     const [imgSrc, setImgSrc] = useState(null);

//     const capture = useCallback(() => {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setImgSrc(imageSrc);
//     }, [webcamRef, setImgSrc]);

//     return (
//         <div className="webcam-capture">
//             <input  audio={false} ref={webcamRef} screenshotFormat="image/jpeg"/>
//             <button onClick={capture}>Capture photo</button>
//             {imgSrc && (<img src={imgSrc} alt="upload-preview"/>)}
//         </div>
//     )
// }

// export default Capture