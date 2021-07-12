import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

interface IRoute {
  title: string;
  startPosition: string;
  endPosition: string;
}

function App() {
  const [routes, setRoutes] = useState<IRoute[]>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/routes");
      setRoutes(data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {routes?.map((route) => (
          <div className="card">
            <p>{route.title}</p>
            <hr />
            <p>Início: {route.startPosition}</p>
            <p>Fim: {route.endPosition}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
