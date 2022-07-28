import styled from 'styled-components';
// import Bg from './img/Bg.jpg';

export const HomeDiv = styled.div`
    font-family: 'gaegu';
    display: flex;
    flex-direction: column;

    .homeWrapper {
        height: 100vh;
        overflow: hidden;

        .main {
            margin-top: 135px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;



            .title {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            h1 {
                font-size: 30px;
                font-weight: 400;
            }

            hr {
                display: none;
            }
        }

        .desc {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-weight: 400;

            h3 {
                font-size: 17px;
            }
            p {
                color: #989898;
                margin-top: 6px;
                font-size: 13px;
            }

        }
        }

        button {
            transition: linear .5s;
            font-family: 'gaegu';
            font-size: 30px;
            font-weight: 400;
            border-radius: 8px;
            background-color: rgba(104, 148, 233, 1);
            color: white;
            width: 240px;
            height: 47px;
            border: none;
            margin-top: 48px;

            :hover {
                background-color: rgb(38 76 151);
                cursor: pointer

            }
            :active {
                transform: translateY(5px);
            }
        }

        .imageBox {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 56px;
            width: 100vw;
                height: 100vh;

            img {
                position: absolute;
                top: 0;
                z-index:2;
                display: block;
                width: 80%;
                max-width: 340px;
            }

            .bgColor {
                z-index:1;
                position: absolute;
                top: 0;
                margin-top: 80px;
                width: 100vw;
                height: 100vh;
                background-color: #C1D6FF;
            }

            .cpr {
                display: flex;
                width: 252px;
                z-index: 3;
                position: absolute;
                top: 360px;
                color: white;
                font-size: 13px;
                justify-content: space-around;

                @media (max-width: 400px) {
                    top: 335px;
                }
            }
        }
    }
`
// export default HomeDiv 

export const ContainerDiv = styled.div`

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    animation: ease-in-out fadein .5s;

    .rsd {
        display: flex;
        justify-content: flex-end;
        p {
            font-family: 'gaegu';
            color: rgba(118, 118, 118, 1);
            padding: 0 40px 32px 0;
        }
    }

    display: flex;
    flex-direction: column;
`

export const ContentDiv = styled.div`
    height: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center; */

    .contentWrapper {
        font-family: 'gaegu';

        h1 {
                font-size: 15px;
                font-weight: 700;
            }

        p {
            font-weight: 400;
            }

        .back {
            padding-top: 15px;
            outline: none;
            border: none;
            background: none;
            display:flex;
            justify-content: flex-start;

            svg {
                visibility: hidden;
                margin-left: 26px;
                :hover {
                    path {
                        stroke: #bbbbbb;
                    }
                }
            }
        }

        .questionBox {
            >h1 {
                margin-top:24px;

                @media (max-height: 760px) {
                        margin-top: 10px;
                    }
            }
            >p {
                margin-top: 1rem;
            }
        }

        .answerBox {
            margin-top: 54px;
            display: flex;
            align-items: center;
            flex-direction: column;

            @media (max-height: 760px) {
                margin-top: 25px;
            }

            .ans {
                outline: none;
                border: none;
                /* width: 287px; */
                padding: 13px;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: rgba(233, 240, 255, 1);

                :hover {
                    transition: .3s;
                    background-color: rgba(104, 148, 233, 1);
                    cursor: pointer;

                    h1 {
                        color:white;
                    }

                    .text {
                        background-color: rgba(180, 205, 255, 1);
                    }
                }

                :active {
                    transform: translateY(5px);
                }


                @media (max-height: 760px) {
                    padding: 6px;
                }

                h1 {
                        font-family: "gaegu";
                        font-size: 15px;
                        font-weight: 700;
                    }

                img {
                    margin-top: 15px;
                }

                .text {
                    background-color: rgba(255, 255, 255, 1);
                    width: 268px;
                    padding: 0 16.5px;
                    height: 36px;
                    margin-top: 24px;
                    border-radius: 8px;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    @media (max-height: 760px) {
                        margin-top: 10px;
                    }

                    p {
                        font-weight: 300;
                        font-size: 15px;
                        font-family: 'gaegu';
                    }
                }
            }
            .ans_B {
                margin-top: 23px;
            }
    }
}
`

export const BannerHeader = styled.header`
    width: 100%;

    .box {
        background-color: white;
        width: inherit;
        height: 82px;
        box-shadow: 0 7px 0 #EEEEEE;
    }
    .gauge {
            transition: cubic-bezier(0.42, 0, 0.05, 0.98) .5s;
            height: 7px;
            background-color: rgba(104, 148, 233, 1);
            border-radius: 0 5.5px 5.5px 0;
        }
`

export const ResultDiv = styled.div`
    @keyframes fadein {
            0% {
                opacity: 0;
            }

            70% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
    }

    animation: ease-in fadein 1s;
    font-family: 'gaegu';
    display: flex;
    flex-direction: column;
    align-items: center;

    .resultBox {
        height: 100vh;
        width: 100vw;

        .re_bgColor {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            background-color: #C1D6FF;
            width: 100vw;
            height: fit-content;

            .comment {
                padding-top: 120px;
                h3 {
                    font-weight: 400;
                }

                h2 {
                    margin-top:14px;
                    font-weight: 400;
                }
            }

            img {
                width: 80%;
                max-width: 340px;
            }

            .nameBox {
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: absolute;
                bottom: -20px;
                min-width: 200px;
                height: 38px;
                border-radius: 19px;
                padding: 0 16px;

                .name {
                    font-size: 20px;
                    font-weight: 400;
                }
            }
        }

        .dscBox {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 42px;

                .dscWrapper {
                    display: flex;
                    align-items: center;
                    width: 60%;
                    min-width: 300px;
                    height: 276px;
                    border-radius: 20px;
                    .dsc {
                        margin: 0 auto;
                        font-family: 'Noto Sans KR', sans-serif;
                        font-weight: 400;
                        font-size: 13px;
                        line-height: 30px;
                        text-align: center; 
                        width: 256px;
                    }
                }

                .another {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 23px;
                    width: 60%;
                    min-width: 300px;

                    img {
                        width: 96px;
                        height: auto;
                    }

                    .ano {
                        position: relative;
                        width: 45%;
                        min-width: 141px;
                        height: 160px;
                        border-radius: 14px;
                        padding: 0 0 15px 0;
                        background-color: #E9F0FF;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        h3 {
                            font-size: 14px;
                            font-weight: 400;
                        }

                        .txt{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: absolute;

                            bottom: 14px;
                            width: 115px;
                            height: 20px;
                            border-radius: 9.5px;
                            padding: 0 4px;
                            p {
                            font-size: 10px;
                            font-weight: 400;
                        }
                        }
                    }
                }

                .same {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #E1DADA;
                    border-radius: 14px;
                    margin-top: 23px;
                    min-width: 300px;
                    width: 60%;
                    height: 52px;
                    font-family: 'gaegu';
                    font-weight: 400;
                    font-size: 20px;
                    background-color: white;
                    p {
                        margin-left: 12px;
                    }
                    :hover {
                            color: #FFB800;
                            svg{
                                g {
                                    path {
                                        stroke: #FFB800;
                                    }
                                }
                            }
                        }
                }

                .share {
                    margin: 23px 0 35px 0;
                    :hover {
                        color: #FFB800;

                        svg {
                            path {
                                fill: #FFB800;
                            }
                        }
                    }
                }

            }
    }
    
`