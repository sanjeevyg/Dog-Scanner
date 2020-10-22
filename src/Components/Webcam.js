import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
  };
  
class WebcamCapture extends React.Component {
    
    state = {
        imageURL: null,
    }
    
    setRef = (webcam) => {
        this.webcam = webcam
    }

    capture = () => {
        console.log(this.webcam)
        const imageSRC = this.webcam.getScreenshot();
        this.setState({
            imageData: imageSRC
        })
        this.props.updateImageURL(imageSRC)
    }

    onClickRetake = (e) => {    
        e.persist();
        this.setState({
            imageData: null
        })
        const imageSRC = this.webcam.getScreenshot();
        this.setState({
            imageData: imageSRC
        })
        this.props.updateImageURL(imageSRC)
    }
  
    videoConstraints = {
         width: 350, 
         height: 500,
         facingMode: 'user',
     };
  
    render() {       
        return (
            <div>
                <Webcam
                audio={false}
                height={500}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
                videoConstraints={videoConstraints}
                />
                <div>
                    <button onClick={this.capture}>Capture photo</button>
                    {this.state.imageData ? 
                        <div>
                            <p><img src={this.state.imageData} alt="" /></p>
                            <button onClick={this.onClickRetake}>Retake</button> 
                        </div> : null
                    }
                </div>
            </div>
           
        );
    }
}


export default WebcamCapture