import { useState } from "react";
import { useParams } from "react-router-dom";

export default function EditarProdutos(){

  const{id} = useParams();

  const [openModal, setOpenModal] = useState(false);

  const isModal = ()=>{
    setOpenModal(!openModal);
  }

  return(
    <div>

      <dialog open={openModal}>
        <h1>Editar Produto</h1>

        <h2>{id}</h2>

      </dialog>
      <button onClick={()=> isModal()}>{openModal ? "CLOSE-MODAL" : "OPEN-MODAL"}</button>
    
    </div>
  );
}