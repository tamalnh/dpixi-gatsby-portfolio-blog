import styled from "styled-components"

export const HeroWrapper = styled.div`
  position: relative;
`
export const HeroBackground = styled.div`
  background: ${props => props.theme.BackgroundColor};
  padding: 140px 0 170px 0;
`
export const HeroContent = styled.div`
  text-align: center;
  h1 {
    font-size: 52px;
    margin-bottom: 20px;
  }
  p {
    font-size: 23px;
    padding: 0 100px;
  }
`
export const SocialIcons = styled.div`
  margin: 30px 0;
  a {
    display: inline-block;
    font-size: 19px;
    padding: 10px 15px; 
  }
`
export const HeroAvatar = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: -80px;
  margin-left: -107px;

  img {
    margin: 0 auto;
    width: 214px;
    height: 214px;
    border-radius: 50%;
    border: 10px solid #fff;
  }
`
