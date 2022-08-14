import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

const ProjectsBtn = styled(NavLink)`
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: calc(2rem + 1vw);
  z-index: 1;
  font-size: 22px;
  
  @media (max-width: 600px) {
    right: .1rem;
    margin-top: 15px;  
    text-shadow: ${({isClicked}) => isClicked ? "rgb(0 0 0) 0px 0px 4px" : "none"};
    color: ${({isClicked}) => isClicked && "#fff"};

    p {
      font-size: 18px;
    }
  }
`;

const ProjectsButton = ({isClicked}) => {
    return (
        <ProjectsBtn to={"/projects"} isClicked={isClicked}>
            <motion.p
                initial={{y:-200}}
                animate={{y:0}}
                transition={{ type:'spring', duration: 1.5, delay:.4}}
                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Projects</motion.p>
        </ProjectsBtn>
    );
};

export default ProjectsButton;