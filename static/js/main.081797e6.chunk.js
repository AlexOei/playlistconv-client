(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"appleAuth":"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjlSR0o1OUxIQVQifQ.eyJpYXQiOjE1OTcxODg5NTksImV4cCI6MTYxMjc0MDk1OSwiaXNzIjoiQkJEMzU1UDY3MyJ9.US0Y9NvwZqjy5IS0Ugcqzl0RJc9u8i4yEsrVjBt5f8bteLd0hLGLkuR4zpl-9AsUweif13kM3Ai58hicZiXhgA"}')},28:function(e,t,n){e.exports=n(43)},33:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),l=n.n(o),c=(n(33),n(6)),i=n(7),s=n(9),p=n(8),u=n(5),d=n.n(u),f=n(11),h=n(12),y=n(27),m=(n(40),n(13)),v=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={login:null},e.handleClickApple=function(){var t=Object(f.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(m.appleAuth),window.MusicKit.configure({developerToken:m.appleAuth,app:{name:"My Cool Web App"},declarativeMarkup:!0}).authorize().then((function(t){e.setState({login:"Logged In!"});var n=t;e.props.addToken(n)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleClickSpotify=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://playlist-converter-server.herokuapp.com/authorize",{method:"GET"});case 2:return n=e.sent,e.next=5,n.text();case 5:a=e.sent,window.location=a;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-login"},r.a.createElement("div",{className:"text-center"},r.a.createElement("br",null),r.a.createElement(y.a,{variant:"dark",onClick:this.handleClickSpotify,className:"spotify"}," Login to Spotify"),r.a.createElement(y.a,{variant:"dark",className:"applemusic",onClick:this.handleClickApple}," Login to Apple Music"),r.a.createElement("p",null,this.state.login)))}}]),n}(a.Component),k=Object(h.b)(null,(function(e){return{addToken:function(t){e({type:"ADD_APPLETOKEN",payload:t})}}}))(v),b=n(47),O=n(44),E=n(45),S=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSelect1=function(t){var n=document.URL;n=n.substring(5).split("&")[0].split("=")[1],e.props.addSpotifyToken(n);e.props.addSource("appleToSpotify");var a=Math.floor(1e5*Math.random());e.props.addIDA2S(a),window.MusicKit.configure({developerToken:m.appleAuth,app:{name:"Playlist Converter"},declarativeMarkup:!0}).authorize().then((function(t){console.log(t);var n=t;e.props.addAppleToken(n)}))},e.handleSelect2=function(t){var n=document.URL;n=n.substring(5).split("&")[0].split("=")[1],e.props.addSpotifyToken(n);e.props.addSource("spotifyToApple");var a=Math.floor(1e5*Math.random());e.props.addID(a),window.MusicKit.configure({developerToken:m.appleAuth,app:{name:"My Cool Web App"},declarativeMarkup:!0}).authorize().then((function(t){console.log(t);var n=t;e.props.addAppleToken(n)}))},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(b.a.Label,{className:"title"},"Choose Source and Destination"),r.a.createElement("br",null),r.a.createElement("div",{className:"radio-container"},r.a.createElement(O.a,{toggle:!0,className:"mb-2"},r.a.createElement(E.a,{type:"checkbox",variant:"dark",onClick:this.handleSelect1},"Apple Music to Spotify"),r.a.createElement(E.a,{type:"checkbox",variant:"dark",onClick:this.handleSelect2},"Spotify to Apple Music")))))}}]),n}(a.Component),g=Object(h.b)(null,(function(e){return{addSource:function(t){e({type:"ADD_SOURCE",payload:t})},addID:function(t){e({type:"ADD_ID",payload:t})},addIDA2S:function(t){e({type:"ADD_IDA2S",payload:t})},addSpotifyToken:function(t){e({type:"ADD_SPOTIFYTOKEN",payload:t})},addAppleToken:function(t){e({type:"ADD_APPLETOKEN",payload:t})}}}))(S),j=n(17),A=n(46),T=n(26),w=(n(42),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={url:" ",playName:null,link:null,done:null,valid:null},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n=e.props.source;if("spotifyToApple"!==n&&"appleToSpotify"!==n&&e.setState({valid:"Please choose a source."}),"appleToSpotify"===n){var a,r=e.props.appleToken,o={idA2S:e.props.idA2S},l=e.props.spotifyToken,c=e.state.playName,i=e.state.url;if(" "===i)return e.setState({done:"Invalid ID"}),!1;e.setState({done:"Converting...",link:" ",valid:null}),i.includes("us/playlist")?a=(a=i.split("playlist/")[1]).split("/")[1]:i.includes("/playlist")?a=i.split("playlist/")[1]:i.includes("p.")||i.includes("pl.u")?a=i:e.setState({done:"Invalid URL",valid:null});var s=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://playlist-converter-server.herokuapp.com/getAppleISRC",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({url:a,authToken:{appleToken:r},id:o})});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var t=Object(f.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://playlist-converter-server.herokuapp.com/createSpotifyPlaylist",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({createplaylist:c,authToken:{spotifyToken:l},id:o})});case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,console.log(a),e.setState({done:a.done,link:a.link});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,console.log(t.done),"done"===t.done&&p();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}if("spotifyToApple"===n){var u,h=e.props.appleToken,y=e.props.spotifyToken,m={id:e.props.id},v=e.state.playName,k=e.state.url;if(" "===k)return e.setState({done:"Invalid URL"}),console.log("why"),!1;e.setState({done:"Converting...",link:" ",valid:null}),k.includes("https://open")?u=(u=k.split("?")[0]).split("playlist/")[1]:k.includes("open.spotify")?u=k.split("playlist/")[1]:22===k.length?u=k:e.setState({done:"Invalid URL"});var b=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://playlist-converter-server.herokuapp.com/getSpotifyISRC",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({url:u,authToken:{spotifyToken:y},id:m})});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var t=Object(f.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://playlist-converter-server.herokuapp.com/createApplePlaylist",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({playlist:v,authToken:{appleToken:h},id:m})});case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,console.log(a),e.setState({done:a.done,link:a.link});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,console.log(t),"done"===t.done&&O();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(b.a.Group,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(A.a,{className:"justify-content-md-center"},r.a.createElement(T.a,{xs:5},r.a.createElement(b.a.Control,{size:"med",type:"text",placeholder:"Enter Playlist URL",onChange:this.handleChange,id:"url"}))),r.a.createElement("br",null),r.a.createElement(A.a,{className:"justify-content-md-center"},r.a.createElement(T.a,{xs:3},r.a.createElement(b.a.Control,{size:"med",type:"text",placeholder:"Enter Name of New Playlist",onChange:this.handleChange,id:"playName"}))),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"dark",type:"submit",onClick:this.handleSubmit,className:"convert"},"Convert!"),r.a.createElement("h1",null,this.state.done),r.a.createElement("a",{href:this.state.link},this.state.link),r.a.createElement("h1",null,this.state.valid),r.a.createElement("p",null,"Convert your favorite playlists to and from Apple Music and Spotify!"),r.a.createElement("p",null,"Your playlist link will appear below the convert button when completed."),r.a.createElement("p",null," Note: Due to Spotify's song limit per request, conversion caps at 100 songs"),r.a.createElement("p",null," Note: Spotify exclusives such as Spotify singles cannot be converted"),r.a.createElement("p",null," Note: If you are already logged into Apple Music on your browser, a popup to login may not appear"))))}}]),n}(a.Component)),C=Object(h.b)((function(e){return{appleToken:e.appleToken,id:e.id,spotifyToken:e.spotifyToken,idA2S:e.idA2S,source:e.source}}))(w),N=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Playlist Converter")))}}]),n}(a.Component),x=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"mailto: alexoei13589@gmail.com"},"Contact "),r.a.createElement("a",{href:"https://github.com/AlexOei/PlaylistConverter"}," Github")))}}]),n}(a.Component),D=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap",rel:"stylesheet"}),r.a.createElement("script",{src:"https://js-cdn.music.apple.com/musickit/v1/musickit.js"}),r.a.createElement(N,null),r.a.createElement(k,null),r.a.createElement("div",{class:"container-convert"},r.a.createElement(g,null),r.a.createElement(C,null),r.a.createElement(x,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(16),M=n(10),P={appleToken:[],spotifyToken:[],id:[],idA2S:[],source:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return"ADD_APPLETOKEN"===t.type?Object(M.a)(Object(M.a)({},e),{},{appleToken:t.payload}):"ADD_SPOTIFYTOKEN"===t.type?Object(M.a)(Object(M.a)({},e),{},{spotifyToken:t.payload}):"ADD_ID"===t.type?Object(M.a)(Object(M.a)({},e),{},{id:t.payload}):"ADD_IDA2S"===t.type?Object(M.a)(Object(M.a)({},e),{},{idA2S:t.payload}):"ADD_SOURCE"===t.type?Object(M.a)(Object(M.a)({},e),{},{source:t.payload}):e},U=Object(I.b)(L);U.subscribe((function(){console.log(U.getState())})),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:U},r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));t.default=U}},[[28,1,2]]]);
//# sourceMappingURL=main.081797e6.chunk.js.map