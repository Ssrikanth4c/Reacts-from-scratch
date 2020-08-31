import React from 'react';
const Card=({movie})=>{
    console.log(movie);
    return (
        <div className='card'>
            <img src={movie.img.src} className='card-img-top ' alt={movie.img.alt} max-width={200} height={400}/>
            <div className='card-body'>
                <h2>{`${movie.ranking}-${movie.title} ${movie.year}`}</h2>
            </div>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <p>{`Distributor: ${movie.distributor}`}</p>            
                </li>
                <li className='list-group-item'>
                    <p>{`Amount: ${movie.amount}`}</p>
                </li>
            </ul>
        </div>
    )
}

export default Card;