import {FaHome} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import styled from "styled-components";

const PowerBtn = styled(motion.button)`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background: #FCF6F4;
  padding: .3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.4rem;
  height: 2.4rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 10;
  

  a {
    color: black;
    text-decoration: none;

    svg {
      font-size: 25px;
    }
  }

`;

const HomeButton = () => {
    return (
        <PowerBtn initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type:'spring', duration: 1, delay:1.5}}>
            <NavLink to={"/"}>
                <motion.p whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                    <FaHome />
                </motion.p>
            </NavLink>
        </PowerBtn>
    );
};

export default HomeButton;