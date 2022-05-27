import styled from "styled-components";
const MyButton = styled.a`


display: inline-block;
cursor: pointer;
vertical-align: middle;
text-decoration: none;
text-align: center;
transform-style: preserve-3d;
line-height: 1.6;
width: 100%;
height: 100%;
font-weight: bold;
color: #382b22;
padding-top: 15%;
background: #fefefe;
border: 2px solid #8599b1;
border-radius: 0.75em;
user-select: none;
align-items:center;
font-size: 2rem;

transition: transform .15s ease-out, background .15s ease-out;
&::before{
  content: "";
  background: #c4d8f9;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 2px #8599b1, 0 0.625em 0 0 #e2efff;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 0.15s ease-out, box-shadow .15s ease-out;
}
&:hover{
  transform: translateY(0.25em);
}
`;

export function BlueButton({text,clickEvent}){
  return <MyButton onClick= {clickEvent}>{text}</MyButton>;
}
