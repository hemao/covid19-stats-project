import React from 'react'

function Country(props){
    console.log(props)
    return (
        <div>
            <h3>{props.item.Country}</h3>
        </div>        
    );
}

export default Country