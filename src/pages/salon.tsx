import React from "react";
import { useParams } from "react-router";

interface IParam {
  id: string;
}

function Salon() {
  const { id } = useParams<IParam>();
  return (
    <>
      <div>Bienvenu dans le salon {id}</div>
    </>
  );
}

export default Salon;
