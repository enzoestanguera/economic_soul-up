import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh_-_80px)] px-5 py-10 text-center bg-[#030712] text-white font-[system-ui,-apple-system,sans-serif]">

      {/* Número 404*/}
      <h1 className="text-[clamp(9rem,15vw,8rem)] font-black tracking-[0.05em] mt-0 mx-0 mb-2 text-[#231b54]">404
      </h1>

      {/* Título*/}
      <h2 className="text-[1.75rem] font-bold mt-0 mx-0 mb-3 text-[#f3f4f6]">
        Destino não encontrado
      </h2>

      {/* Descrição Alinhada ao Projeto */}
      <p className="text-[1rem] text-[#f3f4f6] max-w-[400px] mt-0 mx-0 mb-8 leading-[1.6]">
        Ops! Esta página não existe.
      </p>

      {/* Botão*/}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#231b54] text-white rounded-xl text-[1rem] font-medium no-underline"
      > Voltar ao Início
      </Link>
    </div>
  );
}