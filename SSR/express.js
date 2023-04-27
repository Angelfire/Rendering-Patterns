const express = require("express");
const path = require("path");
const fs = require("fs");
const { createServer } = require("http");
const { renderToString } = require("react-dom/server");
const React = require("react");

// Create Express app
const app = express();

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Define a route to handle requests to the home page
app.get("/", (req, res) => {
  // Read the contents of the React component file
  const componentFile = path.join(__dirname, "components", "Home.js");
  const component = require(componentFile).default;

  // Render the component to a string
  const html = renderToString(React.createElement(component));

  // Read the contents of the HTML template file
  const templateFile = path.join(__dirname, "templates", "index.html");
  const template = fs.readFileSync(templateFile, "utf8");

  // Replace the placeholder in the template with the rendered component
  const finalHtml = template.replace("{{content}}", html);

  // Send the final HTML document to the client
  res.send(finalHtml);
});

// Create a server to listen for incoming requests
const server = createServer(app);

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
