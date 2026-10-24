import { useState } from "react";

export default function Form({ aoAdicionar }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function enviarFormulario(evento) {
        if (!nome.trim() || !email.trim()) {
            return;
        }
        evento.preventDefault();

        aoAdicionar({ nome: nome.trim(), email: email.trim() });

        setNome("");
        setEmail("");
    }


    return (
        <form onSubmit={enviarFormulario}>
            <label htmlFor="nome">Nome</label>
            <input
                id="nome"
                type="text"
                required
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
    )
}