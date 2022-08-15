import {FaGithub, FaLinkedinIn, FaTwitter, FaCodepen} from "react-icons/fa";
import {IconsContainer, Line} from "./socialIconStyles";
import {motion} from "framer-motion";

const SocialIcons = ({isClicked, isDarkPage, isProjectPage, isSkillsPage, isAboutPage, isContactPage, isHomePage}) => {
    return (
        <IconsContainer isClicked={isClicked} isDarkPage={isDarkPage} isProjectPage={isProjectPage} isSkillsPage={isSkillsPage} isAboutPage={isAboutPage} isContactPage={isContactPage} isHomePage={isHomePage}>
            <motion.div initial={{scale: 0}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1}}>
                <a target={"_blank"} href={"https://github.com/sikal10"}>
                    <FaGithub />
                </a>
            </motion.div>

            <motion.div initial={{scale: 0}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.2}}>
                <a target={"_blank"} href={"https://www.twitter.com/sikal_sikal"}>
                <FaTwitter />
                </a>
            </motion.div>

            <motion.div initial={{scale: 0}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.4}}>
                <a target={"_blank"} href={"https://www.codesandbox.io/u/Sikal10"}>
                <FaCodepen />
                </a>
            </motion.div>

            <motion.div initial={{scale: 0}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.6}}>
                <a target={"_blank"} href={"https://www.linkedin.com/in/sikal_sikal"}>
                <FaLinkedinIn />
                </a>
            </motion.div>

            <Line initial={{scale: 0}} animate={{scale:1}} transition={{type:'spring', duration:1, delay:1.7}} isClicked={isClicked} isDarkPage={isDarkPage} isHomePage={isHomePage} />
        </IconsContainer>
    );
};

export default SocialIcons;