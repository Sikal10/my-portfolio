import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {useCallback} from "react";
import styled from "styled-components";

const ParticlesWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine) => {
       await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <ParticlesWrapper>
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 2,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#778899",
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "out",
                            },
                            random: false,
                            speed: 4,
                        },
                        number: {
                            value: 20,
                        },
                        opacity: {
                            value: .5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 10,
                        },
                    },
                }}
            />
        </ParticlesWrapper>
    );
};

export default ParticlesComponent;