import React from 'react'

interface BlueButtonProps {
  nombre: string
  url: string
}

const BlueButton: React.FC<BlueButtonProps> = ({ nombre, url }) => {
  const [hover, setHover] = React.useState(false)

  const irAlCurso = () => {
    window.open(url, '_blank')
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: hover ? '#1565c0' : '#00B1D3',
          color: '#fff',
          width: '80%',
          padding: '15px 70px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontFamily: 'inter, sans-serif',
          fontWeight: 'bold',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          transition: 'background 0.2s',
          marginBottom: '16px',
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={irAlCurso}
      >
        {nombre}
      </button>
    </div>
  )
}

export default BlueButton
