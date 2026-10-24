# ⚛️ Estados no React (estados-React)

Projeto desenvolvido como parte dos estudos sobre manipulação de **Estados no React** no curso de **Análise e Desenvolvimento de Sistemas (ADS)** no **SENAI**.

O objetivo deste repositório é consolidar os fundamentos do gerenciamento de estado no React, explorando desde conceitos básicos com tipos primitivos até formulários controlados, listas dinâmicas e efeitos colaterais assíncronos.

---

## 📌 Conteúdos e Conceitos Abordados

- **`useState` com Tipos Primitivos (`Contador.jsx`):**
  - Controle de números inteiros para operações de incremento, decremento e reset.
  - Re-renderização e atualização de interface reativa.

- **Formulários Controlados (`Formulario.jsx`):**
  - Captura e sincronização de entradas do usuário (inputs de texto e e-mail).
  - Prevenção do comportamento padrão de submissão (`preventDefault`).
  - Limpeza e validação simples de campos.

- **Manipulação de Listas e Imutabilidade (`Lista.jsx`):**
  - Armazenamento e renderização dinâmica de coleções de dados (arrays de objetos).
  - Adição imutável de novos itens utilizando o *spread operator* (`...`).
  - Geração de identificadores únicos (`crypto.randomUUID()`).
  - Comunicação entre componentes via *props* e funções de callback (`aoAdicionar`).

- **Efeitos Colaterais e Estados Assíncronos (`useEffect` em `Lista.jsx`):**
  - Simulação de consumo de API externa utilizando `setTimeout`.
  - Controle de estado de carregamento (*loading state*).
  - Função de limpeza (*cleanup function*) com `clearTimeout` para evitar vazamentos de memória.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) (v19)
- [Vite](https://vite.dev/)
- JavaScript (ES6+)
- CSS3 / HTML5

---

## 📁 Estrutura do Projeto

```text
estados-React/
├── estados/                  <-- Diretório da aplicação React (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Contador.jsx   # Exemplo prático de contador com useState
│   │   │   ├── Formulario.jsx # Formulário controlado com useState
│   │   │   └── Lista.jsx      # Lista com useState, useEffect e simulação de API
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🚀 Como Executar o Projeto

> [!IMPORTANT]
> O arquivo `package.json` está dentro da pasta `estados`. Por isso, é necessário entrar nela antes de rodar os comandos do `npm`.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/estados-React.git
   ```

2. **Acesse a pasta da aplicação:**
   ```bash
   cd estados-React/estados
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 👨‍💻 Autor

Desenvolvido por um estudante de **Análise e Desenvolvimento de Sistemas (ADS)** no **SENAI**.
