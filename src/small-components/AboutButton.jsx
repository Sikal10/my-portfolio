import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

const AboutBtn = styled(NavLink)`
  color: ${({isClicked}) => isClicked && "#FFF"};
  z-index: 1;
  font-size: 25px;
  
  @media (max-width: 600px) {

    p {
      font-size: 18px;
      color: ${({isClicked}) => isClicked && "#000"};
    }
  }
`;

const AboutButton = ({isClicked}) => {
    return (
        <AboutBtn isClicked={isClicked} to={"/about"}>
            <motion.p
                initial={{y:200}}
                animate={{y:0}}
                transition={{ type:'spring', duration: 1.5, delay:1}}
                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>About</motion.p>
        </AboutBtn>
    );
};

export default AboutButton;