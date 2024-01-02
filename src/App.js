import react, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import CoolBG from './components/CoolBG/CoolBG';
import Recognition from './components/Recognition/Recognition';


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL:'',
      startRecog: false,
      box: {},
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }



  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    this.setState({startRecog: true});
  }


  render() {
    if (this.state.startRecog === true) {

        return(
          <div className="App">
            <div className='navi'>
              <Logo/>
              <Navigation />
              
            </div>
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <CoolBG/>
          <Recognition imageURL={this.state.imageURL}/>
          
    
        </div>
      );
      
    } else {
      return(
        <div className="App">
          <div className='navi'>
            <Logo/>
            <Navigation />
            
          </div>
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        
        <p className='f4 tc white'>Your image will appare here!</p>

        <CoolBG/>
      </div>
      );
    }



  }
}



export default App;
