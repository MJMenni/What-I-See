import { createGlobalStyle } from "styled-components";

// export const breakpoints = { tablet: "600px" };

const GlobalStyles = createGlobalStyle`
  :root {
    --sec-font: "Libre Baskerville", serif;
    --main-font: "Helvetica", sans-serif;
    --block-font: "Red Hat Display", sans-serif;
    --blue: #004aad;
  }

  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
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
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
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
