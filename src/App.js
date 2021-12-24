import React from 'react';
import { FaAlignJustify, FaFacebookSquare, FaTwitter, FaInstagramSquare, FaLinkedin, FaOutdent } from 'react-icons/fa';
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
                    <div className='logo'>Dog Scanner</div>
                    <img src={require("./Images/husky3.png")} alt="dog"  className="bg"/>
                        <div className="content">
                             <h2 className="second-heading">“Did you know that there are over 300 words for love in canine?” – Gabriel Zevin</h2>
                            <button className={this.state.tensorFlowActive ? "get-started active": "get-started"} onClick={this.toggleTensorFlow}> {this.state.tensorFlowActive ?  "Close Identifier" : "Get Started" }</button>    
                        </div>
                        <div className={this.state.tensorFlowActive ? "tensor-flow active": "tensor-flow"} >
                            <TensorFlow />
                        </div>
                    {/* <p className="copyrightText">@2020 <FaCopyright /> Sanjeev Yogi</p> */}
                </section> 
                <div className= {this.state.active ? "menuToggle active": "menuToggle"} onClick={this.toggleClass}>
                    {this.state.active ? <FaOutdent size={40}/> :<FaAlignJustify size={40}/>}
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
                            <li><a href="#"></a><FaLinkedin size={31}/></li>
                            <li><a href="#"></a><FaFacebookSquare size={31}/></li>
                            <li><a href="#"></a><FaTwitter size={31}/></li>
                            <li><a href="#"></a><FaInstagramSquare size={31}/></li>
                        </ul>
                        <a href="yogi.sjv@gmail.com" className="email">@</a>
                    </div>
                </div>
                
            </body>
        )   
    }
}

export default App
