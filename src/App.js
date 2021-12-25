import React from 'react';
import { FaAlignJustify, FaTwitter, FaInstagramSquare, FaLinkedin, FaOutdent, FaPaw, FaGithub, FaDog, FaFemale, FaCommentAlt} from 'react-icons/fa';
import TensorFlow from './Components/TensorFlow'
import './App.css';

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
                    <div className='logo'>D<FaPaw size={31} id="paw"/>g Scanner</div>
                    <img src={require("./Images/husky3.png")} alt="dog"  className="bg"/>
                    {/* <img src={require("./Images/sittingDog.png")} alt="dog"  className="doggy"/> */}
                        <div className="content">
                             <h2 className="second-heading">
                             <span id="question-first-part">Did you know that there are</span> 
                             <span> over 300 words for love in canine?</span> 
                             <span id="writer">– Gabriel Zevin</span></h2>
                            <button className={this.state.tensorFlowActive ? "get-started active": "get-started"} onClick={this.toggleTensorFlow}> {this.state.tensorFlowActive ?  "Close Identifier" : "Paws Here" } <FaDog size={22} id="dogIcon"/></button>    
                        </div>
                        <div className={this.state.tensorFlowActive ? "tensor-flow active": "tensor-flow"} >
                            <TensorFlow />
                        </div>
                    {/* <p className="copyrightText">@2020 <FaCopyright /> Sanjeev Yogi</p> */}
                    <div>
                        <div><FaPaw size={150} className="paws paw1"/></div>
                        {/* <div><FaPaw size={200} className="paws paw2"/></div> */}
                        <div><FaPaw size={200} className="paws paw3"/></div>
                        <div><FaPaw size={100} className="paws paw4"/></div>
                    </div>
                    <button id="feedbackButton">Feedback</button>
                </section> 
                <div className= {this.state.active ? "menuToggle active": "menuToggle"} onClick={this.toggleClass}>
                    {this.state.active ? <FaOutdent size={45}/> :<FaAlignJustify size={45}/>}
                </div>
                <div className= {this.state.active ? "navigation active": "navigation"}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign In</a> </li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                    <div className={this.state.active ? "socialBar active": "socialBar"} >
                        <ul>
                            <li><a href="#"></a><FaLinkedin size={36}/></li>
                            <li><a href="#"></a><FaGithub size={36}/></li>
                            <li><a href="#"></a><FaTwitter size={36}/></li>
                            <li><a href="#"></a><FaInstagramSquare size={36}/></li>
                          
                        </ul>
                    </div>
                    
                </div>
                
            </body>
        )   
    }
}

export default App
