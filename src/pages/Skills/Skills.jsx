import {GridContainer, LeftBox, RightBox, SkillsContainer, SkillsWrapper} from "./skillsStyles";
import ExperienceCard from "../../small-components/ExperienceCard";
import Logo from "../../small-components/Logo";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import HomeButton from "../../small-components/HomeButton";
import ParticlesComponent from "../../components/ParticlesJS/Particles";

const Skills = () => {
    return (
        <SkillsContainer initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <SkillsWrapper>
                <Logo/>
                <SocialIcons isSkillsPage={true} isDarkPage={true}/>
                <HomeButton/>
                <ParticlesComponent/>

                <LeftBox initial={{y: -350}} animate={{y: 0}} transition={{type: "spring", duration: .5, stiffness: 400, damping: 10 }}>
                    <h2>Frontend Development</h2>

                    <GridContainer>
                        <ExperienceCard language={"HTML5"} level={"Experienced"}/>
                        <ExperienceCard language={"CSS3"} level={"Experienced"}/>
                        <ExperienceCard language={"Javascript"} level={"Experienced"}/>
                        <ExperienceCard language={"React"} level={"Experienced"}/>
                        <ExperienceCard language={"NextJS"} level={"Experienced"}/>
                        <ExperienceCard language={"Tailwind"} level={"Experienced"}/>
                        <ExperienceCard language={"React Native"} level={"Experienced"}/>
                        <ExperienceCard language={"Styled Components"} level={"Experienced"}/>
                        <ExperienceCard language={"Redux"} level={"Experienced"}/>
                        <ExperienceCard language={"Git & Github"} level={"Experienced"}/>
                        <ExperienceCard language={"Figma"} level={"Experienced"}/>

                    </GridContainer>
                </LeftBox>

                <RightBox initial={{y: 350}} animate={{y: 0}} transition={{type: "spring", duration: .5, stiffness: 400, damping: 10 }}>
                    <h2>Backend Development</h2>

                    <GridContainer>
                        <ExperienceCard language={"Node JS"} level={"Experienced"}/>
                        <ExperienceCard language={"MongoDB"} level={"Experienced"}/>
                        <ExperienceCard language={"PostgreSQL"} level={"Experienced"}/>
                        <ExperienceCard language={"Firebase"} level={"Experienced"}/>
                        <ExperienceCard language={"Express"} level={"Experienced"}/>
                        <ExperienceCard language={"Solidity"} level={"Experienced"}/>
                        <ExperienceCard language={"GO"} level={"Basic"}/>
                    </GridContainer>

                </RightBox>

            </SkillsWrapper>
        </SkillsContainer>
    );
};

export default Skills;