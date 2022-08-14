import styled from "styled-components";
import logo from "../assets/Images/codeSikal.svg";
import {motion} from "framer-motion";

const StyledLogo = styled.div`
  font-family: serif;
  display: inline-block;
  color: ${({isClicked, theme}) => isClicked ? theme.colors.body : theme.colors.text};
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  @media (max-width: 600px) {
    left: 1.5rem;
  }
`;

const Image = styled(motion.img)`
    width: 30px;

  @media (max-width: 600px) {
    width: 25px;
  }
`;

const Logo = ({isClicked}) => {
    return (
        <StyledLogo isClicked={isClicked}>
            <Image initial={{x:-200}} animate={{x:0}} transition={{ type:'spring', duration: 1.5, delay:.7}} src={logo} />
        </StyledLogo>
    );
};

export default Logo;