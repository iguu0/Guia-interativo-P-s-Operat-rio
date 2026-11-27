# OdontoGuia

OdontoGuia é uma página web informativa para orientar pacientes sobre cuidados após alguns procedimentos odontológicos.

## O que o projeto já oferece

- Interface responsiva para celular e computador.
- Tema claro e tema escuro, com:
  - preferência salva no `localStorage`;
  - uso automático do tema configurado no sistema quando não há preferência salva.
- Seleção de três procedimentos:
  - extração de siso;
  - tratamento de canal;
  - clareamento dental.
- Exibição dos cuidados em duas tabelas:
  - "O que fazer";
  - "O que evitar".
- Destaque visual no procedimento selecionado.
- Ícones de status para facilitar a leitura.
- Estilos de impressão preparados para ocultar cabeçalho, seleção e controles.
- Ícones e favicon para o navegador e dispositivos Apple.
- Conteúdo totalmente localizado no front-end, sem banco de dados ou dependências externas.

## Estrutura do projeto

```text
.
├── index.html          # Estrutura e conteúdo principal da página
├── css/
│   └── style.css       # Layout, temas claro/escuro e responsividade
├── js/
│   └── script.js       # Dados dos procedimentos e troca de tema
└── img/
    ├── moon.png        # Ícone do tema claro
    ├── sun.png         # Ícone do tema escuro
    └── favicon/        # Ícones exibidos pelo navegador
```

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro

O projeto não utiliza frameworks, gerenciadores de pacotes ou APIs externas.

## Como executar

Abra o arquivo `index.html` diretamente no navegador.

Para uma execução com servidor local, por exemplo com Python:

```bash
cd "pasta/do/projeto"
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Comportamento atual

Ao clicar em um procedimento, o JavaScript busca os dados em `dadosCuidados`, atualiza o título e preenche as duas tabelas. O botão de tema alterna as variáveis CSS e guarda a escolha do usuário no navegador.

O botão "Baixar Cuidados" gera um arquivo `.txt` com o procedimento selecionado, incluindo os itens de "O que fazer", "O que evitar" e "Quando procurar ajuda". O procedimento escolhido também é salvo no navegador e restaurado ao recarregar a página.

## Observação sobre o conteúdo

Este projeto é informativo e não substitui avaliação, diagnóstico ou orientação de um profissional de odontologia. Antes de publicar novas recomendações médicas, confirme o conteúdo com um dentista ou cirurgião-dentista.
