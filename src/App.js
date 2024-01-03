import react, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import CoolBG from './components/CoolBG/CoolBG';
import Recognition from './components/Recognition/Recognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

 



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL:'',
      route: 'signin',
      box: {},
      isSignedIn: false,
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }



  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
  }
  onRouteChange = (route) =>{
    this.setState({route: route});
    if(route==='signout'){
      this.setState({isSignedIn:false})
    }else if (route==='home'){
      this.setState({isSignedIn:true})
    };
  }


  render() {
 
        return(
          
          <div className="App">
            <CoolBG/>
            <div className='navi'>
                   <Logo/>
                  <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />     
              </div>

            { this.state.route === 'home' ? 
             <div>


              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <Recognition imageURL={this.state.imageURL} />
            </div>

        :( this.state.route === 'signin' ?
            <Signin onRouteChange={this.onRouteChange}/> :
            <Register onRouteChange={this.onRouteChange}/>
        
        )
            
        }
          </div>

      );
  }
}
      

export default App;
