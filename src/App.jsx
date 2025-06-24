import Header from "./widgets/Header"
import Today from "./widgets/Today"

function App() {
  return (
    <div className="dark:bg-backgraund h-[100vh]">
      <div className="container">
        <Header />
        <Today/>
      </div>
    </div>
  )
}

export default App
