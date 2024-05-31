import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Product = ({image, name, price, id }) => {
    return (
        <Wrapper>
            <div className="container">
                <img src={image} alt={name}/>
                <Link to={`/products/${id}`}className="link">
                    <FaSearch/>
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>${formatPrice(price)}</p>
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    .container {
        position: relative;
        background: var(--clr-black);
        border-radius: var(--radius);
    }
    img {
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: var(--radius);
        transition: var(--transition);
    }
    link{
        position: absolute;
        top: 50%;
    }
`

export default Product