"use client";

export default function TomDeVoz() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-12">
      {/* Cabeçalho */}
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-slate-800 mb-4">
          Tom de Voz
        </h1>
        <p className="text-lg text-slate-600">
          A comunicação da Ambientha é amigável, elegante e próxima. É a voz de
          quem entende de decoração e gosta genuinamente de ajudar as pessoas a
          transformarem seus lares.
        </p>
      </div>

      {/* Regra importante */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
        <p className="text-amber-800 font-medium">
          ⚠️ Importante: respondemos sempre no plural (nós, nosso, nossa
          equipe). Nunca use a primeira pessoa do singular.
        </p>
      </div>

      {/* Pilares de comunicação */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Pilares de comunicação
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-2">🤗 Acolhedora</h3>
            <p className="text-slate-600 text-sm">
              Faz o seguidor sentir que está sendo bem recebido, não apenas
              respondido
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-2">✨ Elegante</h3>
            <p className="text-slate-600 text-sm">
              Linguagem cuidada, sem gírias, mas sem ser distante ou fria
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-2">
              🎯 Especialista
            </h3>
            <p className="text-slate-600 text-sm">
              Transmite conhecimento sem ser pedante — inspira confiança
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-2">💛 Humana</h3>
            <p className="text-slate-600 text-sm">
              Pequenos gestos de carinho fazem parte
            </p>
          </div>
        </div>
      </section>

      {/* Emojis da marca */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Emojis da marca
        </h2>

        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <p className="text-slate-600 mb-4">
            A Ambientha utiliza emojis com critério. Os principais são:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✨</span>
              <p className="text-slate-600">
                Usado sozinho para dar leveza e brilho a uma frase
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🤍💫</span>
              <p className="text-slate-600">
                Usados sempre juntos e nessa ordem, como assinatura afetiva
              </p>
            </div>
          </div>

          <p className="text-slate-500 text-sm mt-4 italic">
            Evite emojis muito informais ou que fujam da estética da marca.
          </p>
        </div>
      </section>

      {/* Palavras e expressões */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Palavras e expressões
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Usar */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="font-semibold text-emerald-800 mb-4">✓ Usar</h3>
            <ul className="space-y-2 text-emerald-700 text-sm">
              <li>aconchego, conforto, lar, elegância, sofisticação</li>
              <li>transformar, inspirar, cuidar, personalizar</li>
              <li>exclusivo, sob medida, com carinho, com atenção</li>
            </ul>
          </div>

          {/* Evitar */}
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <h3 className="font-semibold text-rose-800 mb-4">✕ Evitar</h3>
            <ul className="space-y-2 text-rose-700 text-sm">
              <li>Gírias: mano, show de bola, top demais</li>
              <li>Promessas vagas: o melhor preço da cidade!</li>
              <li>Respostas genéricas de qualquer loja</li>
              <li>Excesso de exclamações (máximo uma por mensagem)</li>
            </ul>
          </div>
        </div>

        <p className="text-slate-600 mt-6 p-4 bg-slate-50 rounded-xl">
          💡 Em resumo: escreva como uma consultora atenciosa e refinada que
          conhece cada produto e se importa de verdade com o espaço do cliente.
        </p>
      </section>

      {/* Modelos de resposta */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Modelos de resposta
        </h2>

        {/* Pedidos de orçamento */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Pedidos de orçamento
          </h3>

          <div className="space-y-4">
            {/* Comentário público */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Comentário público
              </span>

              <div className="mt-4 p-3 bg-slate-100 rounded-lg">
                <p className="text-slate-600 text-sm">
                  🗣️ Quanto custa uma persiana para janela de 1,20m?
                </p>
              </div>

              <div className="mt-3 p-3 bg-emerald-50 rounded-lg">
                <p className="text-slate-700 text-sm">
                  ✍️ Olá, [Nome]! Que ótima escolha para o seu espaço. O valor
                  varia conforme o modelo e o tecido escolhidos. Envia pra gente
                  o seu e-mail ou número de WhatsApp que te chamamos por lá,
                  pode ser? Assim fica mais fácil para fazermos um orçamento
                  personalizado para você. ✨
                </p>
              </div>
            </div>

            {/* DM direta */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                DM direta
              </span>

              <div className="mt-4 p-3 bg-slate-100 rounded-lg">
                <p className="text-slate-600 text-sm">
                  🗣️ Oi, quero saber o preço de cortinas para sala.
                </p>
              </div>

              <div className="mt-3 p-3 bg-emerald-50 rounded-lg">
                <p className="text-slate-700 text-sm">
                  ✍️ Olá, [Nome]! Ficamos felizes em ajudar. Para criar um
                  orçamento, precisamos de algumas informações como o tamanho da
                  janela, o ambiente e o estilo que você tem em mente. Se
                  preferir, envia seu número de WhatsApp que te chamamos por lá.
                  🤍🫶
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Elogios */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Elogios e comentários positivos
          </h3>

          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="p-3 bg-slate-100 rounded-lg">
                <p className="text-slate-600 text-sm">
                  🗣️ Que loja linda, amei a decoração!
                </p>
              </div>

              <div className="mt-3 p-3 bg-emerald-50 rounded-lg">
                <p className="text-slate-700 text-sm">
                  ✍️ Que alegria! Ficamos muito felizes com a sua mensagem e
                  também com o carinho. Cada detalhe desse espaço foi pensado
                  para você se sentir em casa. Sempre que quiser, nossa porta
                  está aberta. ✨
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="p-3 bg-slate-100 rounded-lg">
                <p className="text-slate-600 text-sm">
                  🗣️ Ficou incrível minha cortina, super recomendo!
                </p>
              </div>

              <div className="mt-3 p-3 bg-emerald-50 rounded-lg">
                <p className="text-slate-700 text-sm">
                  ✍️ Que notícia maravilhosa! Ficamos muito felizes que tenha
                  ficado do jeito que você imaginou. Obrigada pela confiança em
                  nosso trabalho, significa muito para nós. 🤍🫶
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reclamações */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Reclamações ou insatisfações
          </h3>

          <p className="text-slate-600 mb-4">
            Nunca ignore. Responda com empatia, ofereça solução e, se
            necessário, direcione para um canal privado.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="p-3 bg-slate-100 rounded-lg">
              <p className="text-slate-600 text-sm">
                🗣️ Minha persiana chegou com defeito.
              </p>
            </div>

            <div className="mt-3 p-3 bg-emerald-50 rounded-lg">
              <p className="text-slate-700 text-sm">
                ✍️ Olá, [Nome]! Sentimos muito pelo ocorrido. Isso não é o
                padrão que a Ambientha preza. Por favor, manda uma mensagem aqui
                no direct para que possamos resolver o mais rápido possível.
                Estamos à disposição. 🙏
              </p>
            </div>
          </div>
        </div>

        {/* Respostas rápidas */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Respostas rápidas
          </h3>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-slate-700">
                    Situação
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-slate-700">
                    Resposta sugerida
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 text-sm text-slate-600">
                    Qual o horário de atendimento?
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    Olá! Nosso atendimento é de segunda a sexta das 8h30 às 12h
                    e das 13h30 às 18h. Aos sábados, atendemos das 9h às 12h.
                    Será um prazer receber você! ✨
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-sm text-slate-600">
                    Vocês entregam para outra cidade?
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    Sim! Atendemos clientes em outras cidades. Entre em contato
                    pelo telefone (47) 3041-0382 para combinarmos os detalhes.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-sm text-slate-600">
                    Vocês fazem instalação?
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    Com certeza! A instalação é parte do nosso serviço.
                    Acompanhamos o cliente do início ao fim do projeto. 🤍💫
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Aviso final */}
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
        <p className="text-rose-800 font-medium">
          ⚠️ Nunca confirme prazos ou valores exatos por DM sem verificar com a
          equipe primeiro.
        </p>
      </div>
    </main>
  );
}
