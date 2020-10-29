import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import apiID from './config.json'

class Source extends Component {
   
    handleSelect1 = (e) =>{
        var hash = document.URL
        hash = hash.substring(5).split("&")[0].split("=")[1];
        this.props.addSpotifyToken(hash)
        let source = "appleToSpotify";
        this.props.addSource(source);
        let idA2S = Math.floor(Math.random()*100000);
        this.props.addIDA2S(idA2S)
        let music = window.MusicKit.configure({
            developerToken: apiID.appleAuth,
            app: {
                name: 'Playlist Converter'
            },
            declarativeMarkup: true
            });

        music.authorize().then(musicUserToken=>{
            console.log(musicUserToken);
            let token = musicUserToken;
            this.props.addAppleToken(token);
    
            })
        
        
    }
    handleSelect2 = (e) =>{
        var hash = document.URL
        hash = hash.substring(5).split("&")[0].split("=")[1];
        this.props.addSpotifyToken(hash)
        let source = "spotifyToApple";
        this.props.addSource(source)
        let id = Math.floor(Math.random()*100000);
        this.props.addID(id)
        let music = window.MusicKit.configure({
            developerToken: apiID.appleAuth,
            app: {
                name: 'My Cool Web App'
            },
            declarativeMarkup: true
            });

        music.authorize().then(musicUserToken=>{
            console.log(musicUserToken);
            let token = musicUserToken;
            this.props.addAppleToken(token);
    
            })

    }
    
    render(){
        
        return(
            <Form>
            <div className="text-center">
            <Form.Label
            className = "title">Choose Source and Destination</Form.Label>
            <br />
            <div className="radio-container" >
            
            <ButtonGroup toggle className="mb-2">
            <ToggleButton type="checkbox" variant="dark" onClick={this.handleSelect1} >Apple Music to Spotify</ToggleButton>
            <ToggleButton type="checkbox" variant="dark" onClick={this.handleSelect2} >Spotify to Apple Music</ToggleButton>
            </ButtonGroup>
            
            </div>
            </div>
            </Form>

        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return{
        addSource: (source)=> {dispatch({type: 'ADD_SOURCE', payload:source})}, 
        addID: (id) => {dispatch ({type: 'ADD_ID', payload:id})},
        addIDA2S: (idA2S) => {dispatch ({type: 'ADD_IDA2S', payload:idA2S })},
        addSpotifyToken: (hash) => {dispatch ({type: 'ADD_SPOTIFYTOKEN', payload: hash})},
        addAppleToken: (token) => {dispatch ({type: 'ADD_APPLETOKEN', payload: token})}
    }
 }
    



export default connect(null, mapDispatchToProps)(Source);