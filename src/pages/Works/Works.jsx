import {Button, ButtonContainer, Image, Line, Work, WorksContainer, WorksWrapper} from "./workStyles";
import Logo from "../../small-components/Logo";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import HomeButton from "../../small-components/HomeButton";
import ParticlesComponent from "../../components/ParticlesJS/Particles";
import {works} from "../../data";

const Works = () => {

    return (
        <WorksContainer initial={{x: -400}} animate={{x: 0}} exit={{x: 200}} transition={{ease: "linear", duration: .4}}>
            <Logo/>
            <SocialIcons isProjectPage={true} isDarkPage={true}/>
            <HomeButton/>
            <ParticlesComponent/>

            <WorksWrapper>
                {works.map((work, index) => <Work initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: index / 2}} key={work.id}>
                    <Image loading={"lazy"} src={work.img}/>
                    <p>{work.details}</p>
                    <Line />
                    <ButtonContainer>
                        <Button target={"_blank"} href={work.githubLink}>Github</Button>
                        <Button target={"_blank"} href={work.link}>Live Demo</Button>
                    </ButtonContainer>

                </Work>)}

            </WorksWrapper>
        </WorksContainer>
    );
};

export default Works;