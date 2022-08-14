import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

const SkillsBtn = styled(NavLink)`
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

const SkillsButton = () => {
    return (
        <SkillsBtn to={"/skills"}>
            <motion.p
                initial={{y:200}}
                animate={{y:0}}
                transition={{ type:'spring', duration: 1.5, delay:.5}}
                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Skills</motion.p>
        </SkillsBtn>
    );
};

export default SkillsButton;