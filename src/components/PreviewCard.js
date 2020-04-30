import React from 'react';

function PreviewCard(props){
    return (
        <div className="card" onClick={() => props.clicked(props.ID)}>
            <div className="container">
                <img alt={props.name} src={props.image} height="300px" width="300px"></img>
            </div>
        </div>
    )
}

export default PreviewCard