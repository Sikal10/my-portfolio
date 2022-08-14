import {
    Button,
    ContactBox,
    ContactContainer,
    ContactForm,
    ContactFormWrapper,
    ContactWrapper,
    Input,
    TextArea
} from "./contactStyles";
import Logo from "../../small-components/Logo";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import HomeButton from "../../small-components/HomeButton";
import ParticlesComponent from "../../components/ParticlesJS/Particles";
import {HiArrowNarrowRight} from "react-icons/hi";
import {motion} from "framer-motion";

const Contact = () => {
    return (
        <ContactContainer initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <ContactWrapper>
                <Logo/>
                <SocialIcons isContactPage={true} isDarkPage={true}/>
                <HomeButton/>
                <ParticlesComponent/>

                <ContactBox>
                    <motion.h3 animate={{ y: [-400, 0] }} transition={{ type: "ease", duration: 1, delay: .1 }}>Get<span>In</span>Touch</motion.h3>

                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "spring", duration: 2, delay: .4 }}>Please leave us a message by filling the form below.</motion.p>

                    <ContactFormWrapper>
                        <ContactForm>
                            <Input initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "spring", duration: .7 }} required placeholder={"What's your name?"} />
                            <Input initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "spring", duration: 1.3 }} required placeholder={"Drop your email"} />
                            <Input initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "spring", duration: 1.8}} required placeholder={"Message Subject"} />

                            <TextArea initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "ease", duration: 1.5, delay: .3}} rows={8} required placeholder={"Type your message here..."} />

                            <Button whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}>Submit<HiArrowNarrowRight size={"30"} /></Button>
                        </ContactForm>
                    </ContactFormWrapper>
                </ContactBox>
            </ContactWrapper>
        </ContactContainer>
    );
};

export default Contact;