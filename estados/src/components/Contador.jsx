import { useState } from "react"

export default function Contador() {
    // Guarda o valor atual do contador e disponibiliza a função para atualizá-lo.
    const [contador, setContador] = useState(0)

    // Atualiza o contador somando ou subtraindo 1, ou volta o valor para zero.
    const incrementar = () => setContador(contador + 1)
    const decrementar = () => setContador(contador - 1)
    const resetar = () => setContador(0)

    return (

        <div>
            <h1>Contador: {contador}</h1>
            <div>
                {/* Cada botão executa a ação correspondente no contador. */}
                <button onClick={incrementar}>+</button>
                <button onClick={decrementar}>-</button>
                <button onClick={resetar}>Reset</button>
            </div>
        </div>
    )
}