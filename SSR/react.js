import React from "react";
import ReactDOMServer from "react-dom/server";

// Create our React component
function MyComponent({ title, text }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

// Generate the HTML using ReactDOMServer
const html = ReactDOMServer.renderToString(
  <MyComponent
    title="Ejemplo de SSR con React"
    text="Este es un ejemplo de Server Side Rendering con React"
  />
);

// Send the generated HTML to the client
res.send(`
  <html>
    <head>
      <title>Ejemplo de SSR con React</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`);
