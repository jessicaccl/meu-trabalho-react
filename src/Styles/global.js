import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* O Instagram usa fontes próprias, mas 'Roboto' ou 'sans-serif' 
       dão uma aparência limpa similar */
    font-family: 'Roboto', 'Helvetica', sans-serif;
  }

  body {
    background-color: #FAFAFA; /* Fundo cinza-claro do Instagram */
    color: #262626; /* Cor do texto principal (escuro) */
  }
`;