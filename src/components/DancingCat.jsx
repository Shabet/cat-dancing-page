import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [animationSpeed, setAnimationSpeed] = useState(2)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const handleKeyPress = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      toggleAnimation()
    }
  }

  const handleSpeedChange = (event) => {
    setAnimationSpeed(Number(event.target.value))
  }

  useEffect(() => {
    const catElement = document.querySelector('.dancing-cat.dancing')
    if (catElement) {
      catElement.style.animationDuration = `${animationSpeed}s`
    }
  }, [animationSpeed, isAnimating])

  useEffect(() => {
    const handleGlobalKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleGlobalKeyPress)
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyPress)
    }
  }, [isAnimating])

  return (
    <div className="dancing-cat-container">
      <div
        className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}
        style={isAnimating ? { animationDuration: `${animationSpeed}s` } : {}}
      >
        <img
          src={catSvg}
          alt={`${isAnimating ? 'Dancing' : 'Idle'} orange cat with a playful expression`}
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          className="control-button primary"
          onClick={toggleAnimation}
          onKeyDown={handleKeyPress}
          aria-label={isAnimating ? 'Stop cat dancing animation' : 'Start cat dancing animation'}
          title="Press Space to toggle (anywhere on page)"
        >
          {isAnimating ? '⏸️ Stop Dancing' : '▶️ Start Dancing'}
        </button>

        <div className="speed-control">
          <label htmlFor="speed-slider" className="speed-label">
            ⚡ Animation Speed: {animationSpeed}s
          </label>
          <input
            id="speed-slider"
            type="range"
            min="0.5"
            max="5"
            step="0.5"
            value={animationSpeed}
            onChange={handleSpeedChange}
            className="speed-slider"
            disabled={!isAnimating}
            aria-label="Control animation speed from 0.5 to 5 seconds"
          />
          <div className="speed-markers">
            <span>Fast</span>
            <span>Slow</span>
          </div>
        </div>

        <div className="keyboard-hint">
          💡 Tip: Press <kbd>Space</kbd> to toggle dancing!
        </div>
      </div>
    </div>
  )
}

export default DancingCat