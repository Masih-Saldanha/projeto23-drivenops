import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [student, setStudent] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const API_URL = process.env.REACT_APP_BASE_URL;
      try {
        const response = await axios.get(`${API_URL}/students/random`);
        const student = response.data;
        if(!student){
          alert("Putz! Não há estudantes cadastrados para o sorteio!");
        } else {
          setStudent(student);
        }
      } catch (error) {
        alert("Não foi possível realizar o sorteio!");
      }
    }
    fetchData();
  }, []);
  
  return (
    <>
      <h1>Link: {process.env.REACT_APP_BASE_URL}</h1>
      {student ? <h1>Sorteado: {student.name}</h1> : "Carregando..."}
    </>
  )
}

export default App;
