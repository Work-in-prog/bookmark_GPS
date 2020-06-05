// import React from 'react';

// export default class New extends React.Component{

//     handleSubmit = (event) => {
//         event.preventDefault();
//         fetch('/bookmarks',{
//             body: JSON.stringify({address: this.state.address, lat: this.state.lat, lon:this.state.lon}),
//             method: "POST",
//             headers:{
//                 'Accept':'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//             }
//         }).then(response=> response.json())
//         .then(newBookmark=>{
//             this.setState({
//                 bookmarks:[newBookmark, ...this.state.bookmarks],
//                 address:'',
//                 lat:0,
//                 lon:0,
//             })
//         })
//     }

//     render(){
//         return(

//         )
//     }
// }