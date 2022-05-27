import {ListGroup} from "react-bootstrap";
import ProblemItem from "./ProblemItem";

export default function ProblemList({chapter})
{
  //const makeProblemList =
  const ProblemList=["문제 이름","문제 이름","문제 이름","문제 이름",
  "문제 이름","문제 이름","문제 이름","문제 이름","문제 이름","문제 이름",
  "문제 이름","문제 이름","문제 이름","문제 이름","문제 이름",
  "문제 이름","문제 이름","문제 이름","문제 이름","문제 이름",
  "문제 이름","문제 이름","문제 이름","문제 이름","문제 이름"];
  return (
    <ListGroup as="ol" numbered>
      {ProblemList.map((title, index) => (
        <ProblemItem key= {index} pid={index+1} title={title} chapter={chapter} Solved={"UnSolved"}/>
      ))}
    </ListGroup>
  );
}
