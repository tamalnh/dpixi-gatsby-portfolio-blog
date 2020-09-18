import styled from "styled-components"

const SkillsWrapper = styled.section`
  padding: 160px 0;

  .skill__item {
    font-size: 17px;
    text-align: center;
    padding: 40px 30px;
    color: ${props => props.theme.PrimaryColor};
    background: ${props => props.theme.BackgroundColor};
    border-radius: 2px;
    margin-bottom: 30px;

    &:hover {
      color: ${props => props.theme.SecondaryColor};
    }
  }
`

export default SkillsWrapper
