# CRUD API com JWT e Node.js: Análise e Solução

Este documento detalha a análise e a implementação final de uma API RESTful para gerenciamento de usuários, desenvolvida com Node.js e Express. O projeto atende a todos os requisitos do exercício proposto, incluindo autenticação baseada em token JWT e persistência de dados em um arquivo JSON.

## 📝 Resumo da Análise

A implementação inicial do projeto demonstrou uma boa compreensão da estrutura de rotas e da lógica de autenticação em um controller. O código-base inicial serviu como um excelente ponto de partida.

A análise focou em corrigir pequenos erros de sintaxe, completar os módulos ausentes (middleware de autenticação, controller de usuários, módulo de persistência) e fortalecer a segurança, resultando em uma aplicação robusta, funcional e segura.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de APIs.
- **JSON Web Token (JWT)**: Para geração de tokens de autenticação.
- **bcryptjs**: Para hashear e comparar senhas de forma segura.
- **uuid**: Para gerar IDs únicos para os usuários.
- **dotenv**: Para gerenciar variáveis de ambiente (como o segredo do JWT).
- **Thunder Client**: Para testes de API.

## 📂 Estrutura do Projeto
     ├─ db.json
     ├─ server.js
     ├─ utils/
     │     └─ db.js
     ├─ middleware/
     │     └─ auth.js
     ├─ controllers/
     │    ├─ authController.js
     │    └─ usersController.js
     └─ routes/
          ├─ auth.js
          └─ users.js



## 🛠️ Pontos de Melhoria Corrigidos

A análise identificou e corrigiu os seguintes pontos:

1.  **Erros de Sintaxe:** Ajustes nos comandos `require()` para importar módulos corretamente (ex: `require('express').Router()`).
2.  **Módulos Ausentes:** Foram implementados os seguintes módulos essenciais que estavam vazios:
    - `utils/db.js`: Abstrai a manipulação do arquivo `db.json`.
    - `middleware/auth.js`: Protege as rotas que exigem autenticação.
    - `controllers/usersController.js`: Contém toda a lógica para as operações de CRUD.
    - `server.js`: Configurado para iniciar o servidor e conectar todas as partes da aplicação.
3.  **Segurança Aprimorada:** O segredo do JWT, que estava fixo no código ("hardcoded"), foi movido para uma variável de ambiente (`.env`) para evitar exposição em ambientes de produção.
4.  **Tratamento de Erros:** Adicionado tratamento de erros com blocos `try...catch` nos controllers para garantir que a aplicação não quebre inesperadamente.
5.  **Sanitização de Dados:** Implementada a remoção do campo de senha das respostas da API para não expor dados sensíveis.

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente.

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente instalado com o Node.js)

### 1. Instalação

Clone o repositório e instale as dependências:

```bash
# Clone este repositório (exemplo)
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

# Navegue até a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install
```
### 2. Configuração
Crie um arquivo chamado .env na raiz do projeto e adicione a seguinte variável:

JWT_SECRET=SUA_CHAVE_SECRETA_E_SEGURA_AQUI
Substitua o valor por qualquer string longa e segura.

### 3. Execução
Inicie o servidor:

```Bash
node server.js
```
O servidor estará rodando em http://localhost:3000.

⚡ Testando a API com Thunder Client
Endpoints Públicos (Não requerem token)
### 1. Cadastrar um novo usuário

Método: POST

URL: http://localhost:3000/register

Body (JSON):

JSON

{
  "nome": "Usuário Teste",
  "email": "teste@email.com",
  "senha": "senha123"
}
### 2. Autenticar um usuário

Método: POST

URL: http://localhost:3000/login

Body (JSON):

JSON

{
  "email": "teste@email.com",
  "senha": "senha123"
}
Ação: Copie o token retornado na resposta para usar nos endpoints protegidos.

Endpoints Protegidos 🛡️
⚠️ Autenticação Requerida: Para todas as rotas abaixo, vá para a aba Auth, selecione Bearer Token e cole o token JWT obtido no login.

### 3. Listar todos os usuários

Método: GET

URL: http://localhost:3000/users

### 4. Buscar um usuário por ID

Método: GET

URL: http://localhost:3000/users/{id_do_usuario}

### 5. Atualizar um usuário

Método: PUT

URL: http://localhost:3000/users/{id_do_usuario}

Body (JSON):

JSON

{
  "nome": "Nome Atualizado",
  "email": "email.atualizado@email.com"
}
### 6. Deletar um usuário

Método: DELETE

URL: http://localhost:3000/users/{id_do_usuario}