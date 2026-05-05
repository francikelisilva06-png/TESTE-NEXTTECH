import React, { useEffect, useState } from 'react'

export default function Home() {
  const [dados, setDados] = useState(null)

  useEffect(() => {
    fetch('/dados.json')
      .then(res => res.json())
      .then(setDados)
  }, [])

  if (!dados) return <div style={{padding: 50}}>Carregando Site da IA...</div>

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '50px' }}>{dados.headline}</h1>
      <p style={{ fontSize: '20px', color: '#666' }}>{dados.subheadline}</p>
      <button style={{ background: '#000', color: '#fff', padding: '15px 30px', borderRadius: '8px', border: 'none', fontSize: '18px' }}>
        {dados.botao}
      </button>
    </div>
  )
}