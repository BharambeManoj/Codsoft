import { Button } from "@mui/material";
import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import "./Result.css"


const Result = ({name , score}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!name) {
      navigate("/"); 
    }
  }, [name, navigate]); // Add navigate as a dependency
  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
      variant="contained"
      color="secondary"
      size="large"
      style={{alignSelf : "center" , marginTop: 20 , margin:20}}
      href="/"
      >Return to Homepage</Button>
    </div>
  )
}

export default Result