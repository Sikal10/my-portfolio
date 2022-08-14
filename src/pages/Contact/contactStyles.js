import styled from "styled-components";
import {motion} from "framer-motion";

export const ContactContainer = styled(motion.div)`
  background: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ContactWrapper = styled.div`
  height: 55vh;
  width: 50vw;

  @media (max-width: 600px) {
    width: 85%;
    height: 85%;
    margin-top: 25px;
  }
`;

export const ContactBox = styled.div`
  width: 100%;
  height: 100%;

  h3 {
    color: #e3e3e5;
    text-transform: uppercase;
    font-size: 3.5vw;

    span {
      color: #57a3e4;
    }
  }

  p {
    color: #e3e3e5;
    font-size: 22px;
  }
  
  @media (max-width: 600px) {
    padding: 0 10px;
    padding-top: 40px;

    h3 {
      font-size: 35px;
    }
    
    p {
      font-size: 17px;
      margin-top: 5px;
    }
  }
`;

export const ContactFormWrapper = styled.div`
    z-index: 10;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;

  @media (max-width: 600px) {
    gap: 15px;
  }
`;

export const Input = styled(motion.input)`
  height: 55px;
  padding: 0 40px;
  border-radius: 10px;
  border: none;
  transition: all .3s ease;
  background: #1c1d25;
  font-size: 16px;
  outline: 0;
  color: white;

  &:focus {
    border-bottom: 2px solid #ff7730;
  }
  
  &::placeholder {
    color: #e3e3e5;
  }

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const TextArea = styled(motion.textarea)`
  padding: 30px 40px;
  border-radius: 10px;
  border: none;
  background: #1c1d25;
  font-size: 16px;
  outline: 0;
  color: white;
  transition: all .3s ease;

  &:focus {
    border-bottom: 2px solid #ff7730;
  }

  &::placeholder {
    color: #e3e3e5;
  }

  @media (max-width: 600px) {
    padding: 30px 10px;
  }

`;

export const Button = styled(motion.button)`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0 20px;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  
  @media (max-width: 600px) {
    width: 47%;
  }
`;