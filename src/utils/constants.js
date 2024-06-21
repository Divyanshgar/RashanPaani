import React from  'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
    {
        id: 1, 
        text: 'home', 
        url: '/',
    },
    {
        id: 2,
        text: 'about',
        url:'/about',
    },
    {
        id: 3,
        text: 'products',
        url: '/products',
    },
]

export const services = [
    {
        id: 1,
        icon: <GiCompass/>,
        title: "mission",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste'
    } ,
    {
        id: 2,
        icon: <GiDiamondHard />,
        title: 'vision',
        text: 'edch dhcvtg hrctg'
    },
    {
        id: 3, 
        icon: <GiStabbedNote />,
        title: 'history',
        text: 'ksjdaf alkdjfh lkdshf',
    }
]

export const products_url = 'https://www.course-api.com/react-store-products'

export const single_product_url = 'https://www.course-api.com/react-store-single-product?id='