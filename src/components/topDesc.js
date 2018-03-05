import React, { Component } from 'react';

class topDesc extends Component {
    render() {
        let siteDesc = ( "description" in this.props.data ) ? this.props.data.description : "site-desc"
        
        if ( !( "description" in this.props.data ) ) return <p>Loading...</p>
        return (
            <div className="callout large primary">
                <div className="row column text-center">
                    <h1 className="description">{siteDesc}</h1>
                </div>
            </div> 
        )
    }
}

export default topDesc;