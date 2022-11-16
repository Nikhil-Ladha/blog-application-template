import styled from "styled-components";

export const HeroSectionWrapper = styled.section`

    background: #FFF6DD;
    margin: 0;
    padding: 3rem 1.5rem;
    text-align: center;

    h1 {
        margin: 0 0 2rem;
        font-size: 2.25rem;

        svg {
            color: #FFA500;
            animation: wave 1.2s linear 0s infinite alternate;
        }

        @keyframes wave {
            0% {
                transform: rotateZ(-43deg) translate(-3px, 1px);
            }
            25% {
                transform: rotateZ(-40deg) translate(-3px, 1px);
            }
            50% {
                transform: rotateZ(-35deg) translate(-3px, 1px);
            }
            75% {
                transform: rotateZ(-30deg) translate(-3px, 1px);
            }
            100% {
                transform: rotateZ(-25deg) translate(-3px, 1px);
            }
        }
    }

    h3 {
        margin: 2rem 0 1rem;
        font-size: 1.5rem;
    }

    .social {
        display: flex;
        gap: 1rem;
        justify-content: center;
        font-size: 1.25rem;

        a {
            text-decoration: none;
            color: inherit;
            padding: 0.15rem;
        }
    }
`;