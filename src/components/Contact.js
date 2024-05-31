import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return <Wrapper>
        <div className="section-center">
            <h3>Join our newsletter and get 20% off</h3>
            <div className='content'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis et similique omnis assumenda veritatis minima cupiditate, corrupti dolor ipsam ut.
                </p>
                <form className='contact-form' action="https://formspree.io/f/xvoenqqp" method="POST">
                    <input 
                    type="email" 
                    className='form-input'
                    placeholder='enter email'
                    name='_replyto'
                    />
                <button type='submit' className='submit-btn'>
                    subscribe
                </button>
                </form>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
    padding: 5rem 0;
    h3 {
        text-transform: none;
    }
    p {
        line-height: 2;
        max-width: 45rem;
        color: var(--clr-grey-5);
    }
    .contact-form {
        width: 90vw;
        max-width: 500px;
        display: grid;
        grid-template-columns: 1fr auto;
    }


`