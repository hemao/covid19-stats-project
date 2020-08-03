import React from 'react'

function Country(props){
    console.log(props)
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
            <h5 className="card-title" >{props.item.Country}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Summary</h6>
            <p className="card-text">
                <ul>
                    <li>NewConfirmed:{props.item.NewConfirmed} </li>
                    <li>NewDeaths: {props.item.NewDeaths}</li>
                    <li>NewRecovered: {props.item.NewRecovered}</li>
                    <li>Slug: {props.item.Slug}</li>
                    <li>TotalConfirmed: {props.item.TotalConfirmed}</li>
                    <li>TotalDeaths: {props.item.TotalDeaths}</li>
                    <li>TotalRecovered: {props.item.TotalRecovered}</li>
                </ul>
            </p>
            <a href="#" className="card-link">Edit</a>
            <a href="#" className="card-link">Delete</a>
            </div>
        </div>        
    );
}

export default Country

