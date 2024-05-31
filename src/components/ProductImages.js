import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({images = [{url:''}]}) => {
    const [main, setMain] = useState(images[0])
    return (<Wrapper>
        <img src={main.url} alt="main image" className='main'/>
        <div className="gallery">
            {images.map((image,index) => {
                return <img src={image.url} alt={image.filename} key={index} onClick={() => setMain(images[index])} className={`${image.url === main.url ? 'active' : null}`}/>
            })}
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.section`
    .main {
        height: 600px;
    }
    img {
        width: 100%;
        display: block;
        border-radius: var(--radius);
        object-fit: cover;
    }
    .gallery {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 1rem;
        img {
            height: 100px;

        }
    }
`

export default ProductImages