import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

const ContactBtn = styled(NavLink)`
  position: absolute;
  top: 2rem;
  right: calc(2rem + 1vw);
  z-index: 1;
  
  p {
    font-size: 22px;
  }

  @media (max-width: 600px) {
    right: 1rem;
    top: 2.2rem;
    color: ${({isClicked}) => isClicked ? "#FFF" : "#000"};
    
    p {
      font-size: 18px;
      margin-top: 5px;
    }
  }
`;

const ContactButton = ({isClicked}) => {
    return (
        <ContactBtn to={"/contact"} isClicked={isClicked}>
            <motion.p
                initial={{y:-200}}
                animate={{y:0}}
                transition={{ type:'spring', duration: 1.5, delay:.6}}
                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Contact</motion.p>
        </ContactBtn>
    );
};

export default ContactButton;