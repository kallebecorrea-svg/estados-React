import { useState, useEffect } from "react"

export default function Lista() {
    // Guarda a lista de usuários, que começa vazia.
    const [usuario, setUsuario] = useState([])

    // Controla qual conteúdo será exibido enquanto os dados não chegam.
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        // Simula uma consulta à API aguardando quatro segundos.
        const temporizador = setTimeout(() => {
            // Dados que seriam recebidos da API.
            const listaUsuario = [
                {
                    id: 1,
                    nome: "Liz Macedo",
                    email: "liz@email.com"
                },

                {
                    id: 2,
                    nome: "Virginia Fonseca",
                    email: "virginia@email.com"
                },

                {
                    id: 3,
                    nome: "Vini Junior",
                    email: "juniorvini@email.com"
                },

                {
                    id: 4,
                    nome: "Erica Hilton",
                    email: "hilton@email.com"
                }
            ]

            // Salva os usuários e encerra o estado de carregamento.
            setUsuario(listaUsuario);
            setCarregando(false)
        }, 4000)

        // Cancela o temporizador se o componente sair da tela antes da resposta.
        return () => clearTimeout(temporizador)
    }, [])

    return (
        <div>
            <h1>Lista de Usuario</h1>
            {/* Mostra o carregamento ou a lista, conforme o estado atual. */}
            {carregando ? (
                <p>Carregando dados...</p>
            ) : (
                <ul>
                    {/* Cria um item para cada usuário usando o id como chave. */}
                    {usuario.map((usuario) => (
                        <li key={usuario.id}>{usuario.nome}, {usuario.email}</li>
                    ))}
                </ul>
            )

            }
        </div>
    )
}