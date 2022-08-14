import styled from "styled-components";
import {motion} from "framer-motion";

export const SkillsContainer = styled(motion.div)`
  background: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  @media (max-width: 600px) {
    height: max-content;
  }
  
`;

export const SkillsWrapper = styled.div`
  height: 55vh;
  width: 63vw;
  display: flex;
  gap: 50px;
  z-index: 5;

  @media (max-width: 600px) {
    flex-direction: column;
    height: fit-content;
    width: 85%;
    margin-top: 70px;
    padding: 30px 0;
  }

`;

export const LeftBox = styled(motion.div)`
  flex: 1;
  gap: 20px;
  padding: 40px 70px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: #4c4f65 0px 2px 8px;
  transition: all .3s ease;

  h2 {
    color: #c3c7e0;
  }

  &:hover {
    background: rgba(76, 79, 101, 0.3);
    border: none;

  }

  @media (max-width: 600px) {
    padding: 40px 15px;

    h2 {
      font-size: 22px;
    }
  }
`;

export const RightBox = styled(motion.div)`
  box-shadow: #4c4f65 0px 2px 8px;
  flex: 1;
  gap: 20px;
  padding: 40px 70px;
  border-radius: 30px;
  cursor: pointer;
  transition: all .6s ease;
  
  h2 {
    color: #c3c7e0;
  }

  &:hover {
    background: rgba(76, 79, 101, 0.3);
    border: none;
  }

  @media (max-width: 600px) {
    padding: 40px 15px;
    
    h2 {
      font-size: 22px;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  row-gap: 30px;
`;