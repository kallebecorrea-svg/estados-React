import { useState } from "react";

export default function Form(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");


    return(
        <div>
            <label htmlFor="nome">Nome</label>
            <input
            id="nome"
            type="text"
            value={nome}
            onChange={(evento) => setNome()} 
             />
        </div>
    )
}