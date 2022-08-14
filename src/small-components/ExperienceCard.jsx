import styled from "styled-components";
import {HiBadgeCheck} from "react-icons/hi";

const CardContainer = styled.div`
  display: flex;
  gap: 10px;
  color: #c3c7e0;

  svg {
    font-size: 19px;
  }

  div {
    p {
      font-size: 18px;
      font-weight: 600;
    }

    span {
      font-size: 14px;
    }
  }
`;

const ExperienceCard = ({language, level}) => {
    return (
        <CardContainer>
            <HiBadgeCheck/>
            <div>
                <p>{language}</p>
                <span>{level}</span>
            </div>
        </CardContainer>
    );
};

export default ExperienceCard;