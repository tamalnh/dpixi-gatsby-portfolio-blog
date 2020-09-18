import styled from "styled-components"

const SectionTitleWrapper = styled.div`
  .section__title {
    display: flex;
    align-items: center;
    margin-bottom: 70px;

    span {
      display: inline-block;
      height: 1px;
      width: 120px;
      background: ${props => props.theme.SecondaryColor};
      margin-right: 20px;
    }
    h3 {
      text-transform: uppercase;
    }
  }
`

export default SectionTitleWrapper
