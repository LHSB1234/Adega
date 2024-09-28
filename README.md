# Adega Copão de 5 - Aplicação React

Este é um projeto React que implementa uma aplicação de catálogo de bebidas. O usuário pode fazer login, visualizar o catálogo de produtos e navegar pelo menu lateral (sidebar). A sessão do usuário é gerenciada utilizando `localStorage`.

## Funcionalidades
- **Login/Logout:** O usuário pode realizar login e logout. O estado de login é persistido através do `localStorage`.
- **Página Inicial (Home):** Após o login, o usuário acessa a página inicial com um catálogo de bebidas.
- **Catálogo de Produtos:** A página principal exibe uma lista de bebidas disponíveis.
- **Sidebar:** Um menu lateral que pode ser aberto e fechado.
- **Persistência com Local Storage:** A sessão do usuário é mantida mesmo após recarregar a página.

## Componentes

### `App.js`
Componente principal da aplicação que gerencia o estado de login do usuário, a exibição da página inicial e o controle da sidebar.

### `Login.js`
Componente responsável pelo login do usuário. O nome do usuário é armazenado no `localStorage`.

### `Home.js`
Componente da página inicial, onde o usuário vê o catálogo de produtos e pode usar a sidebar ou realizar logout. Inclui componentes como o `Header`, `ProductList`, e o `Footer`.

### `Sidebar.js`
Um menu lateral que o usuário pode abrir ou fechar para navegação adicional.

### `ProductList.js`
Componente que exibe uma lista de produtos (bebidas) disponíveis no catálogo.

### `Header.js`
Componente de cabeçalho da página principal, que contém opções para logout e para alternar a sidebar.

### `Footer.js`
Componente de rodapé da aplicação.

## Estrutura de Arquivos

## Como Usar

- **Login:** Insira um nome de usuário para fazer login. A sessão será armazenada no `localStorage`.
- **Logout:** Clique no botão de logout no cabeçalho para encerrar a sessão.
- **Navegação Sidebar:** Utilize a logo para alternar a sidebar no cabeçalho para abrir ou fechar o menu lateral.
- **Catálogo de Produtos:** Após o login, explore a lista de produtos disponíveis na página inicial.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS:** Estilização da interface da aplicação.
- **localStorage:** Armazenamento no navegador para persistência da sessão do usuário.