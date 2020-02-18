import styled from "styled-components";

export const Menu = styled.div`
  background-color: black;
  height: 100%!important;
  width: 190px;
  margin-right: 30px;
  padding: 0;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  animation: ${props => props.menuState ? "closeMenu 0.7s forwards" : "openMenu 0.7s forwards"};
  
  @keyframes closeMenu{
    0%{
      left: -50px;
    }
    100%{
       left: -140px;
    }
  }
  
  @keyframes openMenu{
    0%{
      left: -140px;
    }
    100%{
       left: 0;
    }
  }
  
  ul{
    list-style-type: none;
    text-align: center;
    padding: 0;
    color: white;
    width: 100%!important;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    height: 100%!important;
    margin: 0;
  }
  li{
    margin-top: 10px;
    width: 100%!important;
  }
  .toggle{
    cursor:pointer;
    position: absolute;
    top: 10px;
    right: 3px;
    
  }
`;

export const ButtonMenu = styled.button`
  background-color: transparent!important;
  font-weight: bolder;
  border-style: none;
  color: white;
  width: 100%;
  padding: 5px;
  font-size: 18px;
  text-align: left;
 
 &:hover{
  font-size: 22px;
 }
`;

export const BodyMenu  = styled.div`
  width: 100%!important;
  height: 80%!important;
  position: absolute;
  top: 180px;
  animation: ${props => props.menuState ? "closeMenu 0.7s forwards" : "openMenu"};
`;

export const HeaderMenu = styled.div`
  position: absolute;
  top: 60px;
  width: 100%!important;
  height: 20%!important;
  flex-direction: column;
  align-items: center;
  display: flex;
  color: white;
  animation: ${props => props.menuState ? "closeMenu 0.7s forwards" : "openMenu"};
  
  h4{
    font-family: 'Oswald', sans-serif;
  }
`;
