import { useState } from "react";
import TheLayout from "./views/pages/TheLayout";

function App() {
  const [state, setState] = useState(null);
  return (
    <div>
      <TheLayout />
    </div>
  );
}

export default App;
