import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

        /* Brand Colors - Muted Blue */
        --color-brand-50: #f0f1f5;
    --color-brand-100: #d9dce5;
    --color-brand-200: #c2c6d5;
    --color-brand-300: #acb0c5;
    --color-brand-400: #959ab5;
    --color-brand-500: #7f84a5;  /* Slightly darker than original */
    --color-brand-600: #697194;
    --color-brand-700: #535e84;
    --color-brand-800: #3e4b74;
    --color-brand-900: #2a3864;

    /*red*/
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(255, 255, 255, 0.1);
  
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

      
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    --font-secondary:"Basic", sans-serif
}

*,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  
    /* Creating animations for dark mode */
    /* transition: background-color 0.3s, border 0.3s; */
  }
  
  html {
    font-size: 62.5%;
  }
  body {
    font-family: "Raleway", sans-serif;
    color: var(--color-grey-700);
  
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
  }
  
  *:disabled {
    cursor: not-allowed;
  }
  
  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }
  
  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: transparent;
    /* outline-offset: -1px; */
  }
  
  /* Parent selector, finally 😃 */
  button:has(svg) {
    line-height: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  img {
    max-width: 100%;
  
    /* For dark mode */
    /* filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity)); */
  }

`;

export default GlobalStyle;
