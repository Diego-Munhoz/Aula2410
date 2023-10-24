import React from 'react';
import '../ProfileImage.css';

const ProductCard = ({titulo, imagem, descricao, preco, caracteristica, alt}) => {
    return(
        <div className='card'>
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} alt={alt} className='imagem'/>
            <h6>{preco}</h6>
            <p>{descricao}</p>
            <p className='span'>{caracteristica}</p>

        </div>
    )
}

export default ProductCard;