import styled from "styled-components";
import {motion} from "framer-motion";

export const WorksContainer = styled(motion.div)`
  background: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  align-items: center;
  z-index: 5;
  display: grid;
  place-items: center;
  overflow-y: hidden;
`;

export const WorksWrapper = styled.div`
  width: 60%;
  height: 80%;
  margin: 0 auto;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  overflow-y: scroll;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 80%;
  }
`;

export const Work = styled(motion.div)`
  border: 1px solid rgba(211, 211, 211, 0.24);
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;

  p {
    color: white;
    font-size: 17px;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #363434;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 90%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  opacity: .7;
  transition: all ease .5s;
  
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.a`
  padding: 15px 38px;
  border-radius: 7px;
  border: 1px solid #e3e3e5;
  background: transparent;
  color: #e3e3e5;
  cursor: pointer;
  font-weight: bold;
  transition: all ease .4s;
  font-size: 16px;

  @media (max-width: 600px) {
    padding: 13px 34px;
    font-size: 14px;
  }
  
  &:last-child {
    background: lightgray;
    color: black;
    font-weight: bold;

    &:hover {
      background: transparent;
      border: 1px solid #e3e3e5;
      color: #e3e3e5;
    }
  }
`;