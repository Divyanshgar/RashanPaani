import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
    Loading,
    Error,
    PageHero,
    ProductImages,
    AddToCart,
    Stars,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
    const {id} = useParams()
    const history = useHistory()
    const {single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct,} = useProductsContext()
    useEffect(() => {
        if(error){
            setTimeout(() => {
                history.push('/')
            }, 3000)
        }
    }, [error])
    useEffect(() => {
        fetchSingleProduct(`${url}${id}`)
    }, [id])
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    const {name, price, description, stock, stars, reviews, id: sku, company, images} = product
    return <Wrapper>
        <PageHero title={name} product/>
        <div className="section section-center page">
            <Link to="/products" className="btn">back to products</Link>    
        </div>
        <div className="product-center">
            <ProductImages images={images}/>
            <section className="content">
                <h2>{name}</h2>
                <Stars stars={stars} reviews={reviews}/>
                <h5 className='price'> {formatPrice(price)}</h5>
                <p className="desc"> {description} </p>
                <p className="info">
                    <span>Available: </span>
                    {sku}
                </p>
                <p className="info">
                    <span>SKU: </span>
                    {stock > 0 ? 'In stock':'out of stock'}
                </p>
                <p className="info">
                    <span>Brand: </span>
                    {company}
                </p>
                <hr/>
                {stock > 0 && <AddToCart product={product}/>}
            </section>
        </div>
    </Wrapper>
}
const Wrapper = styled.main`
    .product-center {
        display: grid;
        gap: 4rem;
        margin-top: 2rem;
    }
    .price{
        coor var(--clr-primary-5);
    }
    .desc {

    }
`
export default SingleProductPage