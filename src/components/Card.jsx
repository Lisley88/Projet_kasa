import React from 'react';
import { Link } from 'react-router-dom';
import datas from '../datas/logements.json';
import '../styles/Card.scss'

function Card(props) {
    if (props.page === 'home') {
        return (
            <div className="cards">
                {React.Children.toArray(
                    datas.map((data)=>(
                        <Link to={`/logement/${data.id}`}>
                            <div className="card">
                                <img src={data.cover} alt={data.title} />
                                <h2>{data.title}</h2>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        )
    }
}

export default Card