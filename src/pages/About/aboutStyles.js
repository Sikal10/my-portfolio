import styled from "styled-components";
import {motion} from "framer-motion";

export const AboutContainer = styled(motion.div)`
  background: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const AboutWrapper = styled.div`
  height: 55vh;
  width: 60vw;
  display: flex;
  gap: 50px;
  z-index: 5;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 85%;
    height: 75%;
  }

`;

export const LeftBox = styled.div`
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 30px;
    text-transform: uppercase;

    span {
      color: #707493;
      font-size: 25px;
    }
  }

  p {
    color: #707493;
    font-size: 19px;
    line-height: 25px;

    span {
      color: #57a3e4;
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    gap: 25px;
    padding: 0 15px;

    h2 {
      margin-bottom: -15px;
      font-size: 35px;
      
      span {
        font-size: 30px;
      }
    }
    
    p {
      line-height: 25px;
      
    }
  }

`;

export const RightBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }

`;

export const Image = styled.img`
  width: 300px;
`;