import {Image, IntroBox, LeftBox, RightBox} from "./introStyles";
import Profile from "../../assets/Images/codeSikal.svg";
import {motion} from "framer-motion";

const Intro = () => {
    return (
        <IntroBox
            initial={{height: 0, opacity: 0}}
            animate={{height: "50vh", opacity: 1}}
            transition={{type: "spring", duration: 2, delay: 1}}
        >
            <LeftBox>
                <motion.h1 initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1, delay: 1.3}}>Hi,</motion.h1>
                <motion.h3
                    initial={{opacity: 0}}
                    animate={{opacity:1}}
                    transition={{duration: 1, delay: 1.5}}
                >I'm Sikal.</motion.h3>
                <motion.h6
                    initial={{opacity: 0}}
                    animate={{opacity:1}}
                    transition={{duration: 1, delay: 1.7}}
                >I use an artistic approach to solve problems efficiently.</motion.h6>
            </LeftBox>

            <RightBox>
                <Image
                    initial={{opacity: 0}}
                    animate={{opacity:1}}
                    transition={{duration: 1, delay: 2}}
                    src={Profile}/>
            </RightBox>
        </IntroBox>
    );
};

export default Intro;