import styled from "styled-components"

const SkillsWrapper = styled.section`
  padding: 150px 0;

  .skill__item {
    font-size: 17px;
    text-align: center;
    padding: 40px 30px;
    color: ${props => props.theme.PrimaryColor};
    background: ${props => props.theme.White}; 
    border-radius: 5px; 
    box-shadow: 0 0 15px #f3f2f2; 
    margin-bottom: 30px; 

    &:hover {
      color: ${props => props.theme.SecondaryColor};
    }
  }
`

export default SkillsWrapper
