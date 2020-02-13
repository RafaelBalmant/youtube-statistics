import styled from "styled-components";

export const CardHeader = styled.div`
  background-color: #161616;
  height: 45px;
  display: flex;
  width: 100%!important;
`;

export const BtnHeader = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bolder;
  width: 50%!important;
  height: 100%!important;
  display: block;
  margin-left: auto!important;
`;

export const DropDownUser = styled.div`
  transition: top 6s;
  background-color: #161616;
  width: 100%; 
  color: white;
  display: ${props => props.display === true ? "block" : "none"};
  font-weight: bolder;
  ul{
    padding: 0;
    list-style-type: none
  }
`;

export const UserSection = styled.div`
  width: 250px;
  height: 100%;
  display: block!important;
`;