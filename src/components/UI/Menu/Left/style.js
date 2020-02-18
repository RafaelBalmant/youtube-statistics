import styled from "styled-components";

export const Menu = styled.div`
  background-color: black;
  height: 100%!important;
  width: 190px;
  margin-right: 30px;
  padding: 0;
  display: flex;
  position: absolute;
  left: ${props => props.menuState ? "" : "-133px"};
  transition: 2s!important;
  flex-direction: column;
  justify-content: space-around;
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
  transition: 0.4s;
 }
`;

export const BodyMenu  = styled.div`
  width: 100%!important;
  height: 80%!important;
  left: ${props => props.menuState ? "": "-200px"};
  position: absolute;
  top: 180px;
`;

export const HeaderMenu = styled.div`
  position: absolute;
  top: 60px;
  left: ${props => props.menuState ? "": "-200px"};
  width: 100%!important;
  height: 20%!important;
  flex-direction: column;
  align-items: center;
  display: flex;
  color: white;
  h4{
    font-family: 'Oswald', sans-serif;
  }
`;
