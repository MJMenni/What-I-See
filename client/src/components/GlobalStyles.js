import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --main-font: "Helvetica", sans-serif;
    --blue: #004aad;
    --light-gray: #f1f3f4;
    --mid-gray: lightgray;
  }

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 50px;
  text-align: center;
}

#root, #__next {
  isolation: isolate;
}

#root {
  width: 100%;
  min-height: 100%;
  font-family: var(--main-font);
  color: var(--blue)
  }
`;

export default GlobalStyles;
