import styled from "styled-components";

const MyButton = styled.a`
display: inline-block;
cursor: pointer;
vertical-align: middle;
text-decoration: none;
text-align: center;
transform-style: preserve-3d;
line-height: 1.6;
font-weight: bold;
color: #382b22;
width: 100%;
height: 100%;
align-items: center;
padding-top: 15%;
background: #fff0f0;
border: 2px solid #b18597;
border-radius: 0.75em;
user-select: none;
font-size: 2rem;
transition: transform .15s ease-out, background .15s ease-out;
&::before{
  content: "";
  background: #f9c4d2;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 0.15s ease-out, box-shadow .15s ease-out;
}
&:hover{
  background: #ffe9e9;
  transform: translateY(0.25em);
}`;

export default function PinkButton({text,clickEvent}){
  return <MyButton onClick= {clickEvent}>{text}</MyButton>;
}
