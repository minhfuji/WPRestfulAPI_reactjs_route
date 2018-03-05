import React, { Component } from 'react';

class TopTitle extends Component {
    render() {
        let siteTitle = ( "name" in this.props.data ) ? this.props.data.name : "site-title"
        
        if ( !( "name" in this.props.data ) ) return <p>Loading...</p>
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text site-title">{  siteTitle }</li>
                    </ul>
                </div>
                <div className="top-bar-right">    
                </div>
            </div>
        )
    }
}

export default TopTitle;