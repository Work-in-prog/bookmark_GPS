import React from 'react';
import axios from 'axios';

const googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE';

//div for displaying an individual bookmark
const bookmarkCard =()=>{
    const {lat, lon, address} = this.props;

    return(
        <div className="bookmark-box">
            <p>{address}</p>
            <p>Lat:{lat}, Lon:{lon}</p>
        </div>
    )
}


export default class Listing extends React.Component{
    //Listing inherits scrollToBookmark function from the top-level
    //react class, with 'this' bound to that original class. it assigns
    //this function as the onClick event of individual bookmarks.
    //back in the top-level class, scrollToBookmark calls another function
    // sending data back to the map.

    constructor(){
        super();
        this.state ={
            bookmarksList = [],
            scrollToBookmark = this.props.scrollToBookmark
        }
    }

    componentDidMount(){
        //set pinList to the masterlist received from database

    }

    render(){
        return(
            //a box to contain all the bookmarks
            <div>
                {/* a list of procedurally generated bookmarks */}
                {this.state.bookmarksList.map((bookmark,index)=>{
                    return(
                        <bookmarkCard lat={bookmark.lat} lon={bookmark.lon} address={bookmark.addess}/>
                    )
                })}
            </div>
        )
    }
}