import ReactDom from "react-dom/client"
import "./style.css" 

// Importing components
import App from "./App"

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  <div>
    <App></App>
  </div>
)