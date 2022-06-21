
//import React, { useState } from "react";
//import "./styles.css";

//import { Card } from "../../componentes/Card"
//export function Home() {
//const [studentName, setStudentName] = useState();
  return (
    <div className="container">
      <h1> Nome: {studentName}</h1>
      <input 
      type="text" 
      placeholder="Digite o nome..." 
      onChange={e => setStudentName(e.target.value)}/>
      <button type="button">Adicionar</button>
      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="11:00:10"/>
      <Card name="Ana" time="11:05:00"/>
    </div>
  );
//}


