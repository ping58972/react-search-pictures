import React from 'react';

const ImageList = (props) => {
    return props.images.map(({id, urls, description}) => {
        return <img key={id} src={urls.regular} alt={description}/>
    });
}

export default ImageList;
