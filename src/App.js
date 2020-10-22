import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { FaFacebookSquare} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import { FaOutdent } from 'react-icons/fa';
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
                    <img alt="dog" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors-500x486.jpg" className="bg"/>
                        <div className="content">
                             <h2 className="second-heading">Lets know <br/>More About Your Dog</h2>
                            <p>
                            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half
                            a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
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
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className={this.state.active ? "socialBar active": "socialBar"} >
                        <ul>
                            <li><a href="#"></a><FaFacebookSquare size={30}/></li>
                            <li><a href="#"></a><FaTwitter size={30}/></li>
                            <li><a href="#"></a><FaInstagramSquare size={30}/></li>
                        </ul>
                        <a href="yogi.sjv@gmail.com" class="email">@</a>
                    </div>
                </div>
                
            </body>
        )   
    }
}

export default App
