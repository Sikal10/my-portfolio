import styled from "styled-components";
import {motion} from "framer-motion";

export const IntroBox = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 55vw;
  height: 40vh;
  display: flex;

  //--------background-------//
  background: linear-gradient(to right,
  ${props => props.theme.colors.body} 50%,
  ${props => props.theme.colors.text} 50%) bottom,
  linear-gradient(to right,
  ${props => props.theme.colors.body} 50%,
  ${props => props.theme.colors.text} 50%) top;

  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${props => props.theme.colors.body};
  border-right: 2px solid ${props => props.theme.colors.text};

  z-index: 1;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    //gap: 50px;
    width: 80%;
    height: 60vh !important;
    background: none;
    border: none;

    z-index: 1;

  }
`;

export const LeftBox = styled.div`
  width: 50%;
  color: #FCF6F4;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;

  h1 {
    font-size: 50px;
    padding: 0 20px;
    margin-top: -10px;
  }

  h3 {
    padding: 0 20px;
    font-size: 65px;

  }

  h6 {
    padding: 0 20px;
    font-size: 30px;
    color: #707493;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 60px 0 59px 0;
    border: 2px solid white;
    border-bottom: none;

    h1 {
      font-size: 41px;
      padding: 0 40px;
    }

    h3 {
      font-size: 26px;
      padding: 0 40px;
    }

    h6 {
      font-size: 14px;
      padding: 0 40px;
    }
  }

`;

export const RightBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
    border: 2px solid black;
    border-top: none;
    margin-top: -90px;
  }

`;

export const Image = styled(motion.img)`
  max-width: 100%;
  width: 50%;

  @media (max-width: 600px) {

  }
`;