
import './App.css'
import ProgressBar from "./components/ProgressBar.tsx";

function App() {

  return (
    <>
        <div>
            <ProgressBar value={75} version={2} />
            <div>Ola</div>
            <ProgressBar value={25} version={1} />
        </div>
    </>
  )
}

export default App
