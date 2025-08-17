import React from 'react'

interface BlueButtonProps {
  nombre: string
  value: boolean
}

const QuizButton: React.FC<BlueButtonProps> = ({ nombre}) => {

  const [hover, setHover] = React.useState(false)

  return (
    <div>
      <button
        style={{
          backgroundColor: hover ? '#baf7fcff' : '#ffffffff', 
          color: hover ? '#000000ff' : '#000',
          width: '80%',
          padding: '15px 70px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontFamily: 'inter, sans-serif',
          fontWeight: 'bold',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
          marginBottom: '16px',
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {nombre}
      </button>
    </div>
  )
}

export default QuizButton
