import {BottomButtons, CenterButton, DarkContainer, HomeContainer, HomeWrapper} from "./homeStyles";
import HomeButton from "../../small-components/HomeButton";
import Logo from "../../small-components/Logo";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import ContactButton from "../../small-components/ContactButton";
import ProjectsButton from "../../small-components/ProjectsButton";
import AboutButton from "../../small-components/AboutButton";
import SkillsButton from "../../small-components/SkillsButton";
import {FaYinYang} from "react-icons/fa";
import {useState} from "react";
import Intro from "../../components/Intro/Intro";

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <HomeContainer initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <HomeWrapper>

                {/*----Dark Container that opens when the button is Clicked-------*/}
                <DarkContainer isClicked={isClicked} />

                <HomeButton/>
                <Logo isClicked={isClicked} />
                <SocialIcons isHomePage={true} isClicked={isClicked}/>

                <ContactButton isClicked={isClicked} />
                <ProjectsButton isClicked={isClicked} />

                <CenterButton initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:  .5, delay: 1.1}} isClicked={isClicked}>
                    <FaYinYang isClicked={isClicked} color={"#15151e"} onClick={() => setIsClicked(!isClicked)} />
                    <span>Click here</span>
                </CenterButton>


                <BottomButtons>
                    <AboutButton isClicked={isClicked} />

                    <SkillsButton />
                </BottomButtons>
            </HomeWrapper>

            {isClicked && <Intro />}
        </HomeContainer>
    );
};

export default Home;