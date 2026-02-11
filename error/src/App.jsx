import { useState } from "react";
import Pagina from "./components/pagina";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="all">
        <Pagina />
      </div>
    </>
  );
}

export default App;
