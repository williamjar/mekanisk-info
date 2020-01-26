import {react} from React;
import {Component} from React;
// components used 
import {WelcomeBox} from './components/';


export class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            _mounted: false,
        }
    }


    render(){
        return(
            <div>
            <WelcomeBox/>
            </div>
        )
    }
}