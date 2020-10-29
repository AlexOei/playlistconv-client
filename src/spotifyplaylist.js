import React, { Component } from 'react';
import { connect } from 'react-redux'



class Spotify extends Component {
    state = {
        url: null,
        authtoken: null
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let playlistURI = this.state.url
        
        const { spotifyToken } = this.props;
        const Token = { spotifyToken };
        console.log(Token)
        const { id }=this.props
        const theid = { id }
        let fillplaylist = async function(){
            setTimeout (function(){
                
                    fetch('http://localhost:8888/spotify',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    'url': playlistURI,
                    'authToken': Token,
                    'id': theid
                })
                    
                })
            
            },5000)  
        }

        fillplaylist();
        console.log(this.state); 
    }
   handleChange = async (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
       var hash = document.URL
       
       hash = hash.substring(5).split("&")[0].split("=")[1];
       console.log(hash)
       
       this.props.addToken(hash)
   }
    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>Enter Spotify playlist URL to Convert</label>
            <input type = "text" id="url" onChange={this.handleChange}></input>
            <button>Submit</button>
            </form>

        </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        spotifyToken: state.spotifyToken,
        id: state.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToken: (hash) => {dispatch ({type: 'ADD_SPOTIFYTOKEN', payload: hash})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spotify);