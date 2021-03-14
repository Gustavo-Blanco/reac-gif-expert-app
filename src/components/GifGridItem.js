import React from 'react'

export const GifGridItem = ({id,title,url}) => {

    return (
        <div className="card animate__animated animate__fadeInUp animate__faster">
            <div className="img-container">
                <img src={url} alt={title}/>
            </div>
            <p>{title}</p>        
        </div>
    )
}
