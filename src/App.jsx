import DancingCat from './components/DancingCat'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 Dancing Cat 🐱</h1>
        <p>Watch the adorable cat dance!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
