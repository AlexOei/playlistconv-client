import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiID from './config.json'

class AppleLogin extends Component {
   
    state = {
        login:null
    }

    handleClickApple = async (e) => {
        console.log(apiID.appleAuth)
        let music = window.MusicKit.configure({
            developerToken: apiID.appleAuth,
            app: {
                name: 'My Cool Web App'
            },
            declarativeMarkup: true
            });

        music.authorize().then(musicUserToken=>{
            this.setState({
                login:"Logged In!"
            })
            let token = musicUserToken;
            this.props.addToken(token);
    
            })
        

    }

    handleClickSpotify = async (e) => {
        const response = await fetch('https://playlist-converter-server.herokuapp.com/authorize',{
            method:'GET',
        });
        const data = await response.text()
        window.location = data;

    }
    
    render(){
        return(
            
        <div className="container-login">
            <div className="text-center">
            <br />
            <Button variant="dark" onClick={this.handleClickSpotify} className ="spotify" > Login to Spotify</Button>
            <Button variant="dark" className="applemusic" onClick={this.handleClickApple} > Login to Apple Music</Button>
            <p>{this.state.login}</p>
            </div>
        
        </div>

        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return{
        addToken: (token) => {dispatch ({type: 'ADD_APPLETOKEN', payload: token})},
       
    }
}


export default connect(null, mapDispatchToProps)(AppleLogin);