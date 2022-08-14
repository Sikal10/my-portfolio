import {AboutContainer, AboutWrapper, Image, LeftBox, RightBox} from "./aboutStyles";
import logo from "../../assets/Images/codeSikal.svg";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import HomeButton from "../../small-components/HomeButton";
import ParticlesComponent from "../../components/ParticlesJS/Particles";
import Logo from "../../small-components/Logo";
import {motion} from "framer-motion";

const About = () => {
    return (
        <AboutContainer initial={{y: -150}} animate={{y: 0}} exit={{y: +150}} transition={{type: "spring", duration: 1, stiffness: 100 }}>
            <AboutWrapper>
                <Logo/>
                <SocialIcons isAboutPage={true} isDarkPage={true}/>
                <HomeButton/>
                <ParticlesComponent/>

                <LeftBox>
                    <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: .9}}><span>About</span> Me</motion.h2>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: .2}}>Hi, I'm Abiola, a <span>Full-Stack Web Developer</span>. I use an artistic approach to
                        solve problems <span>Efficiently</span>.
                        I've been professionally connected with the web development industry and information technology for quite
                        some years.
                        Effectiveness in the industry today requires an acute parity between <span>development</span> and
                        <span> artistic</span> tastes.
                    </motion.p>

                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: .4}}>I'm Interested in the entire <span> Frontend</span>  and
                        <span> Backend</span>  spectrum and working on ambitious projects with positive people.
                        I admire simple content structure, clean design models, and <span> responsive</span>  interactions.
                        I enjoy coding from scratch and enjoy bringing concepts and designs to life in the <span> browser</span>.
                    </motion.p>

                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: .7}}>I enjoy transforming ideas into reality using code. I am passionate about using
                        <span> Javascript</span> and Animation Libraries to create awesome user experiences.
                    </motion.p>

                </LeftBox>

                <RightBox>
                    <Image src={logo} />
                </RightBox>
            </AboutWrapper>
        </AboutContainer>
    );
};

export default About;