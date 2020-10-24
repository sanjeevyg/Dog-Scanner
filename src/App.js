import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { FaFacebookSquare} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import { FaOutdent } from 'react-icons/fa';
import TensorFlow from './Components/TensorFlow'
import './App.css';
import WebCam from './Components/Webcam';
import SignInForm from './Components/Form';



class App extends React.Component {
    state = {
        active: false, 
        tensorFlowActive: false

    }

    toggleClass = () => {     
        const currentState = this.state.active   
        this.setState({active: !currentState})
    }

    toggleTensorFlow = () => {     
      const currentState = this.state.tensorFlowActive 
      this.setState({tensorFlowActive: !currentState})
    }

    

    render() {
     
        return(
            <body>
                <section>
                    <div className='logo'>Dog Scanner</div>
                    <img src={require("./Images/husky3.png")} alt="dog"  className="bg"/>
                        <div className="content">
                             <h2 className="second-heading">What <br/> Breed Is Your Dog?</h2>
                             {/* <WebCam/> */}
                            <p>
                            The dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf)is a domesticated carnivore of the family Canidae. It is part of the 
                            wolf-like canids,and is the most widely abundant terrestrial carnivore.The dog and the extant gray wolf are sister taxa as modern wolves are not closely related to the wolves that were first domesticated,
                             which implies that the direct ancestor of the dog is extinct. The dog was the first species to be domesticated, and has been selectively bred over millennia for various behaviors, sensory capabilities, 
                             and physical attributes
                            </p>
                            <a href={"#"} className={this.state.tensorFlowActive ? "get-started active": "get-started"} onClick={this.toggleTensorFlow}> {this.state.tensorFlowActive ?  "Close Identifier" : "Get Started" }</a>    
                           
                        </div>
                        <div className={this.state.tensorFlowActive ? "tensor-flow active": "tensor-flow"} >
                            <TensorFlow />
                        </div>
                    <p className="copyrightText">@2020 <FaCopyright /> Sanjeev Yogi</p>
                </section> 
                <div className= {this.state.active ? "menuToggle active": "menuToggle"} onClick={this.toggleClass}>{this.state.active ? <FaOutdent size={40}/> :<FaAlignJustify size={40}/>}</div>
                <div className= {this.state.active ? "navigation active": "navigation"}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign In</a> </li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                    <div className={this.state.active ? "socialBar active": "socialBar"} >
                        <ul>
                            <li><a href="#"></a><FaFacebookSquare size={30}/></li>
                            <li><a href="#"></a><FaTwitter size={30}/></li>
                            <li><a href="#"></a><FaInstagramSquare size={30}/></li>
                        </ul>
                        <a href="yogi.sjv@gmail.com" className="email">@</a>
                    </div>
                </div>
                
            </body>
        )   
    }
}

export default App
