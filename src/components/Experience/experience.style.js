import styled from "styled-components"

const ExperienceWrapper = styled.section`
  background: #f9f9f9;
  padding: 80px 0;

  span.type {
    background: ${props => props.theme.SecondaryColor};
    color: ${props => props.theme.White};
    padding: 10px 15px;
  }

  span.position {
    display: block;
    font-size: 90%;
    margin-bottom: 10px;
  }

  .experience__block h4 {
    margin: 20px 0;
  }
`

export default ExperienceWrapper
