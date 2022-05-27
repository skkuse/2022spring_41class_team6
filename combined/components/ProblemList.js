import {ListGroup} from "react-bootstrap";
import ProblemItem from "./ProblemItem";
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";

export default function ProblemList({index})
{
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.post("/api/allProblem", {
    }).then(function(res) {
      let ret = res["data"];
      ret = ret.filter(function(problem) {
        return problem["chapter"].split('-',1) == index
      });
      setProblems(ret);
    }).catch(function (error){
      console.log(error);
    });
  }, [index]);

  return (
    <ListGroup as="ol" numbered>
      {problems.map(problem =>
        <ProblemItem key={"problem_"+problem["chapter"]} title={problem["problem"].slice(0,20) + "..."} chapter={problem["chapter"]} Solved={"UnSolved"}/>
      )}
    </ListGroup>
  );
}
