import styled from 'styled-components'

export const MainContainer = styled.div`

    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(218, 23%, 16%);
    padding: 20px;
   

   .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;

            .footer {
                color: #fff;
                margin-top: 60px;
                text-align: center;
                
                a{
                    text-decoration: none;
                    color: hsl(150, 100%, 66%);
                    
                }
               
            }

        @media screen and (max-width: 375px){
            width: 100%;
        }
   }

`

export const AdviceContainer = styled.div`

    display: flex;
    flex-direction: column;
    background-color: hsl(217, 19%, 24%);
    border-radius: 20px;
    width: 100%;
    padding: 40px;
    align-items: center;
    position: relative;

    .header-text {
        font-weight: 800;
        color: hsl(150, 100%, 66%);
        letter-spacing: 2px;
    }

    .advice-text{
        font-size: 28px;
        color: #fff;
        font-weight: 800;
        text-align: center;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .divider-desktop,  .divider-mobile{
       width: 100%;
    }

    .divider-desktop{
        display: block;
        
        @media screen and (max-width: 375px){
           display: none;
        }
    }

    .divider-mobile{
        display: none;
        
        @media screen and (max-width: 375px){
           display: block;
           margin-bottom: 10px;
        }
    }

    .dice-container{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom:0;
        margin-bottom: -30px;
        background-color: hsl(150, 100%, 66%);
        padding: 15px;
        border-radius: 50%;
        cursor: pointer;
    }

    @media screen and (max-width: 375px){
        width: 100%;
        padding: 15px;
    }

`