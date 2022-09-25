import React, { useEffect, useState } from 'react'
import { MainContainer, AdviceContainer } from './main-page-elements'
import DividerDesktop from '../images/pattern-divider-desktop.svg';
import DividerMobile from '../images/pattern-divider-mobile.svg';
import Dice from '../images/icon-dice.svg';
import { ThreeDots } from 'react-loader-spinner'


const MainPage = () => {

    const [randomAdvice, setRandomAdvice] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getRandomAdvice();
    }, isLoading)

    const getRandomAdvice = () => {
        setLoading(true);
        fetch('https://api.adviceslip.com/advice')
            .then((response) => response.json())
            .then((data) => {

                setTimeout(() => {
                    setRandomAdvice(data.slip)
                    setLoading(false);
                }, 1000);

            });
        return;
    }

    return (
        <MainContainer>

            <div className="wrapper">
                <AdviceContainer>
                    <p className="header-text"> {isLoading ? 'GETTING ADVICE..' : 'ADVICE #' + randomAdvice?.id}</p>
                    <br />
                    {isLoading ?
                        <ThreeDots
                            height={80}
                            width={80}
                            color="hsl(150, 100%, 66%)"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='three-dots-loading'
                            secondaryColor="hsl(150, 100%, 66%)"
                            strokeWidth={2}
                            strokeWidthSecondary={2}

                        />
                        :
                        <p className="advice-text">"{randomAdvice?.advice}"</p>
                    }

                    <br />
                    <img src={DividerDesktop} alt="Divider" className='divider-desktop' />
                    <img src={DividerMobile} alt="Divider" className='divider-mobile' />
                    <br />
                    <div className='dice-container' onClick={getRandomAdvice}>
                        <img src={Dice} alt="Dividers" className='divider' />
                    </div>


                </AdviceContainer>
                <div className='footer'>
                    <p>Challenged by <a href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a>. Coded by <a href="https://rodel-cabil-portfolio.web.app/" target="_blank">Rodel E. Cabil</a>. </p>
                </div>
            </div>

        </MainContainer>
    )
}

export default MainPage