import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Col, Row } from 'react-bootstrap';

import './style.css';

class Converter extends Component{
    state = {
        url: " ",
        playName: null,
        link: null,
        done: null,
        valid: null
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        const { source } = this.props;
        const theSource = { source };

        if ( theSource.source !== "spotifyToApple" && theSource.source !== "appleToSpotify"){
            this.setState({
                valid:"Please choose a source."
            })
        }

        if ( theSource.source === "appleToSpotify" ){
           
            const { appleToken } = this.props;
            const { idA2S }=this.props
            const theid = { idA2S }
            const { spotifyToken } = this.props;
            let playName = this.state.playName
            let playlistURL = this.state.url
            let playlistURI;
            

            if(playlistURL === " "){
                this.setState({
                    done:"Invalid ID"
                })
                return false;
            }
            this.setState({
                done:"Converting...",
                link: " ",
                valid: null
            })

            if (playlistURL.includes("us/playlist")){
                playlistURI = playlistURL.split("playlist/")[1]
                playlistURI=playlistURI.split("/")[1]
                
            }
            else if (playlistURL.includes("/playlist")){
                playlistURI=playlistURL.split("playlist/")[1]

            }
            else if (playlistURL.includes("p.")){
               
                playlistURI=playlistURL
                
            }
            else if (playlistURL.includes("pl.u")){
                playlistURI=playlistURL
            }else {
                this.setState({
                    done:"Invalid URL",
                    valid: null
                })
            }


        let getAppleISRC = async function(){
            const response = await fetch('https://playlist-converter-server.herokuapp.com/getAppleISRC',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    'url': playlistURI,
                    'authToken': { appleToken },
                    'id': theid
                })     
            })
            return response.json()
        }

        let createSpotifyPlaylist =  (async()=>{
            const response = await fetch('https://playlist-converter-server.herokuapp.com/createSpotifyPlaylist',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    'createplaylist': playName,
                    'authToken': {spotifyToken},
                    'id':theid
                })
            })
        
        const responseData = await response.json()
            console.log(responseData)
            this.setState({
                done:responseData.done,
                link:responseData.link
            })
                
        })
        
        const createplaylist = async () => {
            const sendAppleISRC = await getAppleISRC()
            console.log(sendAppleISRC.done)
            if (sendAppleISRC.done === 'done'){
                createSpotifyPlaylist()
            }
        }

        createplaylist()
        
        }

        if ( theSource.source ==="spotifyToApple"){

            const { appleToken } = this.props;
            const { spotifyToken } = this.props;
            const { id }=this.props
            const theid = { id }
            let playName = this.state.playName
            let playlistURL = this.state.url
            let playlistURI

            if(playlistURL === " "){
                this.setState({
                    done:"Invalid URL"
                })
                console.log('why')
                return false;
            }

            this.setState({
                done:"Converting...",
                link: " ",
                valid: null
            })

            if (playlistURL.includes("https://open")){
               
                playlistURI = playlistURL.split("?")[0]
                playlistURI=playlistURI.split("playlist/")[1]
            }
            else if (playlistURL.includes("open.spotify")){
                playlistURI = playlistURL.split("playlist/")[1]
                
            }
            else if (playlistURL.length === 22){
                playlistURI=playlistURL
            }else {
                this.setState({
                    done:"Invalid URL"
                })
            }


    
            

        let sendSpotifyISRC = async function(){
            const response = await fetch('https://playlist-converter-server.herokuapp.com/getSpotifyISRC',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    'url': playlistURI,
                    'authToken': { spotifyToken },
                    'id': theid
                })
            })   

            return response.json()
        }

            
        const createApplePlaylist = (async()=>{
            const response = await fetch('https://playlist-converter-server.herokuapp.com/createApplePlaylist',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    'playlist': playName,
                    'authToken': { appleToken },
                    'id': theid

                })
            })
            
            const responseData = await response.json()
            console.log(responseData)
            this.setState({
                done:responseData.done,
                link:responseData.link
            })
             
        })

        const createplaylist = async () => {
            const sendISRC = await sendSpotifyISRC()
            console.log(sendISRC)
            if (sendISRC.done === 'done'){
                
                createApplePlaylist()
            }
        }
        
        createplaylist()

        }

        
    }
  
    
    render(){
        
        return(
        
        <Form>
        <Form.Group>
          <div className = "text-center">
          <Row className="justify-content-md-center">
          
          <Col xs={5} >
          <Form.Control  size = "med" type = "text" placeholder="Enter Playlist URL" onChange={this.handleChange} id="url" />
          </Col>
          </Row>
          <br />
          <Row className="justify-content-md-center">
          <Col xs={3}>
          <Form.Control  size = "med" type = "text" placeholder = "Enter Name of New Playlist" onChange={this.handleChange} id="playName"/>
          </Col>
          </Row>
          <br />
          <Button variant="dark" type="submit" onClick={this.handleSubmit} className="convert">Convert!</Button>
            <h1>{this.state.done}</h1>
            <a href = {this.state.link}>{this.state.link}</a>
            <h1>{this.state.valid}</h1>
            <p>Convert your favorite playlists to and from Apple Music and Spotify!</p>
            <p>Your playlist link will appear below the convert button when completed.</p>
           <p> Note: Due to Spotify's song limit per request, conversion caps at 100 songs</p>
           <p> Note: Spotify exclusives such as Spotify singles cannot be converted</p>
           <p> Note: If you are already logged into Apple Music on your browser, a popup to login may not appear</p>
          </div>
        </Form.Group>
        </Form>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        appleToken: state.appleToken,
        id: state.id,
        spotifyToken: state.spotifyToken,
        idA2S: state.idA2S,
        source: state.source
    }
}

export default connect(mapStateToProps)(Converter);