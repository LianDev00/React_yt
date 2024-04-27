import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log("efecto", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event
      //console.log('handleMove', { clientX, clientY })
    }
    
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

  }, [enabled]);

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: 'translate(0px, 0px)'
      }}>

      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar " : "Activar "}seguir cursor
      </button>
    </main>
  );
}

export default App;
