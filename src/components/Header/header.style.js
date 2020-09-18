import styled from "styled-components"

const HeaderWrapper = styled.header`
  padding: 20px 0;

  ul{
      li{
          a{
              color: ${props => props.theme.PrimaryColor};
              
              &:hover{
                  color: ${props => props.theme.SecondaryColor};
              }
          }
      }
  }

`


export default HeaderWrapper;