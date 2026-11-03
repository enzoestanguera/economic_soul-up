import metroImg from '../assets/img/metro.jpg'

function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-[1100px] px-6 py-8 [@media(max-width:640px)]:px-4 [@media(max-width:640px)]:py-5">
        <section className="p-0 [&_p]:text-[1rem] [&_p]:max-w-[66ch]">
          <span className="block mb-0">Challenge Soul Up · Mobilidade Urbana</span>
          <h1 className="font-['Poppins',sans-serif] text-[2rem] text-[#1b1947] font-bold leading-[1.25] mb-4 [@media(max-width:640px)]:text-[1.5rem] [@media(max-width:640px)]:leading-[1.3]">Mobilidade urbana mais sustentável, uma missão de cada vez</h1>
          <p>
            O ECO Mobility SoulUp nasceu a partir do desafio de pensar em alternativas para problemas
            relacionados à mobilidade urbana. Como usuários de transporte público, identificamos uma
            realidade que faz parte do nosso cotidiano e buscamos transformá-la em uma oportunidade para
            incentivar escolhas mais sustentáveis.
          </p>
          <p>
            Para isso, o projeto utiliza gamificação: o usuário realiza missões ecológicas, acumula pontos
            de acordo com as ações concluídas e acompanha uma estimativa do CO₂ economizado. Dessa forma, a
            experiência transforma atitudes sustentáveis em uma trajetória que pode ser acompanhada ao
            longo do tempo.
          </p>
        </section>

        <div className="w-[min(100%,760px)] m-0 rounded-3xl overflow-hidden p-2.5 bg-[linear-gradient(135deg,#f4f8ff,#dcecff)] border-2 border-indigo-dark shadow-[0_14px_35px_rgba(23,27,46,0.12)]">
          <img
            src={metroImg}
            alt="Estação de metrô, um dos meios de transporte contemplados pelo projeto"
            className="w-full h-auto rounded-2xl block object-cover"
          />
        </div>

        <section className="py-0 border-t border-line">
          <h2 className="mb-0 font-['Poppins',sans-serif] text-[1.5rem] font-bold text-[#1b1947] [@media(max-width:640px)]:text-[1.25rem]">O que é o SoulUp?</h2>
          <p>
            O SoulUp é uma proposta de solução de mobilidade sustentável baseada em recompensas. Em vez de
            apenas apresentar informações sobre sustentabilidade, o projeto cria uma dinâmica em que ações
            relacionadas à mobilidade podem gerar pontos e contribuir para a evolução ecológica do usuário.
          </p>
          <p>
            O sistema também permite consultar missões, acompanhar pontos, visualizar a trajetória
            ecológica, avançar por níveis de sustentabilidade e utilizar os pontos acumulados no resgate de
            vouchers disponíveis.
          </p>
        </section>

        <section className="py-0 border-t border-line">
          <h2 className="mb-0 font-['Poppins',sans-serif] text-[1.5rem] font-bold text-[#1b1947] [@media(max-width:640px)]:text-[1.25rem]">Como a solução funciona</h2>
          <p>
            A lógica é simples: o usuário escolhe uma missão disponível, realiza a atividade e registra sua
            conclusão. A missão concluída gera a quantidade de pontos correspondente e sua estimativa de
            CO₂ economizado passa a compor a trajetória ecológica.
          </p>
          <p>
            Conforme acumula pontos, o usuário pode acompanhar sua evolução e alcançar diferentes níveis de
            sustentabilidade. Os pontos também podem ser utilizados para resgatar vouchers, tornando a
            experiência mais participativa e recompensadora.
          </p>
        </section>

        <section className="py-0 border-t border-line">
          <h2 className="mb-0 font-['Poppins',sans-serif] text-[1.5rem] font-bold text-[#1b1947] [@media(max-width:640px)]:text-[1.25rem]">Impacto esperado</h2>
          <p>
            O principal impacto esperado é incentivar a adoção de hábitos mais sustentáveis relacionados à
            mobilidade, mostrando ao usuário que pequenas ações podem ser registradas, acompanhadas e
            valorizadas dentro de uma jornada ecológica.
          </p>
          <p>
            Ao reunir missões, pontuação, níveis e estimativa de CO₂ economizado, o SoulUp busca tornar o
            tema mais próximo da rotina das pessoas e estimular a participação contínua em práticas
            sustentáveis.
          </p>
        </section>

        <section className="py-0 border-t border-line">
          <h2 className="mb-0 font-['Poppins',sans-serif] text-[1.5rem] font-bold text-[#1b1947] [@media(max-width:640px)]:text-[1.25rem]">Considerações finais</h2>
          <p>
            O SoulUp surgiu da nossa identificação com o problema apresentado no Challenge e da vontade de
            transformar uma questão presente no cotidiano em uma solução prática e gamificada. A proposta
            combina mobilidade, tecnologia e recompensas para incentivar uma participação mais ativa do
            usuário.
          </p>
          <p>
            Mais do que acumular pontos, a ideia é permitir que cada missão concluída faça parte de uma
            trajetória ecológica mensurável, aproximando o usuário do impacto positivo de suas escolhas e
            dando continuidade ao propósito de construir uma mobilidade mais sustentável.
          </p>
        </section>
      </main>

      <footer className="w-full bg-[#231b54] px-10 py-6 text-white [@media(max-width:640px)]:px-4 [@media(max-width:640px)]:py-5">
        <p className="m-0">&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Home
