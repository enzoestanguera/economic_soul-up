import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 80px)',
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#030712',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>

      {/* Número 404*/}
      <h1 style={{
        fontSize: 'clamp(9rem, 15vw, 8rem)',
        fontWeight: '900',
        letterSpacing: '0.05em',
        margin: '0 0 8px 0',
        color: '#231b54'
      }}>404
      </h1>

      {/* Título*/}
      <h2 style={{
        fontSize: '1.75rem',/*altura da letra*/
        fontWeight: '700', /*largura da letra*/
        margin: '0 0 12px 0',
        color: '#f3f4f6'
      }}>
        Destino não encontrado
      </h2>

      {/* Descrição Alinhada ao Projeto */}
      <p style={{
        fontSize: '1rem',
        color: '#f3f4f6',
        maxWidth: '400px',
        margin: '0 0 32px 0',
        lineHeight: '1.6'
      }}>
        Ops! Esta página não existe.
      </p>

      {/* Botão*/}
      <Link 
        to="/" 
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '14px 28px',
          backgroundColor: '#231b54',
          color: '#ffffff',
          borderRadius: '12px',
          fontSize: '1rem',
          fontWeight: '500',
          textDecoration: 'none',
        }}
      > Voltar ao Início
      </Link>
    </div>
  );
}