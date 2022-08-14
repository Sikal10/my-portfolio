import styled from "styled-components";
import {motion} from "framer-motion";

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: fixed;
  bottom: 0;
  left: 2rem;
  align-items: center;
  z-index: 2;
  color: ${({isClicked, isDarkPage}) => isClicked || isDarkPage ? "#FFF" : "#000"};
  transition: color .5s ease .7s;

  div {
    svg {
      font-size: 27px;
    }
  }

  @media (max-width: 600px) {
    left: ${({isProjectPage, isSkillsPage, isAboutPage, isContactPage, isHomePage}) => isProjectPage ? ".6rem"  : "" || isSkillsPage ? ".1rem"  : "" || isAboutPage ? ".3rem" : "" || isContactPage ? ".3rem" : "" || isHomePage ? ".9rem" : ""};
    margin-left: ${({isHomePage}) => isHomePage && "-7px"};
    color: ${({isClicked}) => isClicked ? "#000" : ""};

    div {
      svg {
        font-size: 20px;
      }
    }
  }

`;

export const Line = styled(motion.span)`
  height: 8rem;
  width: 2px;
  background-color: ${({isClicked, theme, isDarkPage}) => isClicked || isDarkPage ? theme.colors.body : theme.colors.text};
  transition: background-color .5s ease .7s;

  @media (max-width: 600px) {
    height: 6rem;
    background-color: ${({isClicked, isHomePage}) => isClicked ? "#000" : "" || isHomePage ? "#000" : "" };
  }
`;