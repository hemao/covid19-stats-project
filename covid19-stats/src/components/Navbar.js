import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">COVID19 Stats</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Countries Summary</Link>
                    </li>            
                </ul>
            </div>
        </nav>
        )
    }

    
}

export default Navbar