import styled from "styled-components";
import {keyframes} from "styled-components";
import {motion} from "framer-motion";

/** animation for the ying-yang */
const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const HomeContainer = styled(motion.div)`
  background: ${({theme}) => theme.colors.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const HomeWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
`;

export const BottomButtons = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
`;

export const CenterButton = styled(motion.button)`
  border: none;
  margin-top: -10px;
  position: absolute;
  background: transparent;
  cursor: pointer;
  top: ${({isClicked}) => isClicked ? "calc(95% - 60px)" : "calc(50% - 120px)"};
  left: ${({isClicked}) => isClicked ? "calc(95% - 60px)" : "calc(50% - 120px)"};
  transform: translate(50%, 50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  transition: all 1s ease;
  z-index: 2;

  span {
    display: ${({isClicked}) => isClicked ? "none" : "block"};
    color: black;
  }

  svg {
    font-size: ${({isClicked}) => isClicked ? "70px" : "120px"};
    animation: ${rotate} infinite 1.2s linear;
  }

  @media (max-width: 600px) {
    left: ${({isClicked}) => isClicked ? "calc(95% - 70px)" : "calc(50% - 120px)"};

    span {
      font-size: 15px;
    }
    
    svg {
      font-size: ${({isClicked}) => isClicked ? "50px" : "120px"};
    }
  }
`;

export const DarkContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${({isClicked}) => isClicked ? "50%" : "0%"};
  height: ${({isClicked}) => isClicked ? "100%" : "0%"};;
  background: #15151e;
  z-index: 1;
  transition: height .5s ease, width .5s ease .8s;

  @media (max-width: 600px) {
    position: absolute;
    top: 0;
    bottom: 50%;
    left: 0;
    width: ${({isClicked}) => isClicked ? "100%" : "0%"};
    height: ${({isClicked}) => isClicked ? "50%" : "0%"};;
    background: #15151e;
    z-index: 1;
    transition: height .5s ease, width .5s ease .8s;
  }
`;