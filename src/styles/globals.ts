import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
        background-color: hsl(
    207.85714285714286,
    90.32258064516132%,
    87.84313725490196%
  );
    }
    #root{
        margin:0 auto;
    }`;
export default GlobalStyle;
