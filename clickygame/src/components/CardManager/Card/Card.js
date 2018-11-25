import React from 'react';

export const Card = props => {
    //Object destructuring, variable on right of equals sign is the object, on the kleft we reference properties of the object and which keys we want to pull off as variables with the values from the object sotred in them.
    const {configData:{id, image}, cardClickHandler} = props;
    //Styling this would each individual card
    return (
        <div onClick={() => cardClickHandler(id)}>
           <img data-id={id} src={image} alt="some fun picture" />
           <p>{id}</p>
            </div>
    )
}