---
name: roteiro-em-etapas
description: Produz roteiros de vídeo (YouTube, tutoriais, marketing, treinamentos) em oito etapas com controle de qualidade, em vez de pedir o roteiro inteiro de uma vez. Use quando o usuário pedir um roteiro de vídeo, quiser melhorar retenção e clareza, ou quiser transformar suas edições em um guia de estilo reutilizável.
---

# Roteiro em Etapas

Método para gerar roteiros com IA de forma modular: briefing → ficha de fatos → título → introdução → estrutura → seções (payoff, setup, tensão, transição) → chamadas para ação → revisão → entrega final (roteiro anotado + texto limpo para narração) → guia de estilo. Cada entrega é aprovada pelo usuário antes da etapa seguinte, e o resultado é **uma única versão final**, não várias paralelas.

## Quando usar

- Pedidos de roteiro para YouTube, vídeo educativo, tutorial, vídeo de marketing ou treinamento interno
- O usuário reclama que roteiros da IA saem genéricos
- O usuário quer padronizar briefing, revisão e estilo de uma produção recorrente
- O usuário tem um roteiro editado e quer extrair um guia de estilo

## Por que em etapas

Pedir o roteiro inteiro obriga a IA a resolver ao mesmo tempo: interpretar o tema para uma audiência, organizar ideias, desenvolver argumentos, sustentar curiosidade, controlar ritmo e imitar a voz do criador. Resultado: texto genérico. Dividir permite avaliar e corrigir cada entrega. Não substitui boas informações de entrada nem revisão humana.

## Regras de condução

1. **Uma etapa por vez.** Entregue, avalie, peça aprovação ou ajuste, só então avance. Não gere o roteiro completo de uma só vez, salvo pedido explícito ou modo contínuo (regra 10).
2. **Dê opções onde há escolha** (títulos, introduções): 3 a 5 versões com abordagens diferentes.
3. **Material próprio primeiro.** Use anotações, experiências e dados fornecidos. Não invente casos, números ou depoimentos.
4. **Números e fatos:** remova, peça fonte ou rotule como "exemplo hipotético". Nunca apresente estatísticas inventadas como reais.
5. **Honestidade sobre curiosidade:** evidencie dificuldades reais do público. Não invente riscos, não exagere consequências, não atrase a resposta sem necessidade. Técnicas como "pergunta em aberto" (efeito Zeigarnik) são hipóteses editoriais a testar, não garantia científica.
6. **Se existir guia de estilo** (arquivo do usuário ou `references/guia-de-estilo-template.md` preenchido), carregue-o no início e aplique em todas as etapas.
7. **Adapte ao formato:** em conteúdo educativo e treinamento, entregue valor cedo; suspense excessivo atrapalha a aprendizagem e informação essencial nunca deve ser escondida para reter.
8. **Densidade concreta.** Cada seção precisa de pelo menos 2 a 3 detalhes específicos e verificáveis (nomes, números, datas, lugares, citações curtas), todos presentes na ficha de fatos. Seção genérica volta para revisão, não segue adiante.
9. **Uma versão de rascunho e uma de revisão.** Pedidos de ajuste depois disso entram como edições na versão final. Não crie versões paralelas (A, B, híbrida); se o usuário trouxer várias, use o modo consolidação.
10. **Modo contínuo.** Se a sessão não permitir aprovação a cada etapa (execução automática, pedido de roteiro pronto), rode todas as etapas em sequência, **liste as suposições feitas** no topo do arquivo anotado e marque onde um humano deveria decidir.
11. **Linguagem inclusiva e neutra.** Não suponha religião, país, formação ou conhecimento prévio do público (evite "no seu livro", "como todo mundo sabe"). Explique siglas, nomes e unidades na primeira ocorrência.

## Etapa 0 — Briefing

Antes de gerar texto, preencha com o usuário (pergunte só o que faltar; proponha padrões razoáveis):

| Elemento | Pergunta |
|---|---|
| Público | Quem assiste? |
| Dificuldade | Qual problema real essa pessoa enfrenta? |
| Objetivo do vídeo | O que ela saberá ou fará ao final? |
| Tom | Ex.: direto, acolhedor, sem jargões |
| Material disponível | Anotações, dados, planilhas, exemplos (identifique o que é fictício) |
| Limites | O que não prometer ou afirmar |
| Formato e duração | YouTube, tutorial, marketing, treinamento; minutos-alvo (calcule a meta de palavras: minutos × 150) |
| Idioma | Idioma do roteiro falado e idioma das notas e instruções (podem ser diferentes) |
| Entrega | Só texto, ou texto limpo para narração/TTS também? |

Pergunte também, opcionalmente: **existe um roteiro de referência** (próprio ou de um canal que o usuário admira) para servir de benchmark? Se sim, peça o texto completo; um título ou ID não basta.

Resuma o briefing em um bloco e peça confirmação. Modelo em `references/briefing-template.md`.

## Portão de fontes e ficha de fatos (antes da estrutura)

Antes da etapa 3, verifique se há material factual suficiente (anotações, dados, links, documentos do usuário):

- **Há material:** extraia os fatos para a ficha de fatos.
- **Não há material e o tema depende de fatos** (história, ciência, números, datas, nomes): **pare** e ofereça duas saídas ao usuário: (a) ele fornece fontes, ou (b) você pesquisa antes de escrever as seções, citando as fontes encontradas. Título e introdução podem avançar; **seções com afirmações factuais não**.
- **Se o usuário insistir em seguir sem fontes:** escreva, mas marque cada afirmação factual com `[VERIFICAR]` e liste-as ao final. Nunca preencha datas, números, nomes ou citações por memória sem esse rótulo.

**Ficha de fatos.** Para cada fato que o roteiro vai usar, registre: o fato, a fonte (link ou documento) e o grau de certeza: **confirmado** (duas fontes ou fonte primária), **atribuído** (afirmado por uma pessoa ou grupo; o roteiro diz quem) ou **a conferir**. O roteiro só usa fatos da ficha. Itens "a conferir" viram a lista de verificação entregue ao usuário. Quando fontes divergem (datas, traduções, números), registre as duas versões e escolha uma formulação atribuída. Modelo em `references/ficha-de-fatos-template.md`.

## As oito etapas

| # | Etapa | Função | O que fazer |
|---|---|---|---|
| 1 | Título | Definir a promessa que motiva o clique | Gerar alternativas; checar se o vídeo consegue cumprir cada uma |
| 2 | Introdução | Confirmar a promessa e mostrar relevância | Versões com abordagens distintas: problema, contraste, ironia, situação concreta; termine com o roteiro do vídeo (ver elementos de retenção) |
| 3 | Estrutura | Ordenar as ideias em sequência lógica | Montar o esqueleto a partir do material do usuário |
| 4 | Payoffs | Planejar a resposta/recompensa de cada seção | Especificar o que o espectador aprende ou consegue fazer |
| 5 | Setups | Preparar o contexto da resposta | Situação concreta que justifique o tema da seção |
| 6 | Tensão | Sustentar interesse no desenvolvimento | Obstáculos, consequências, dúvidas relevantes |
| 7 | Ganchos de transição | Ligar uma seção à próxima | Explicar por que a resposta anterior leva ao próximo problema |
| 8 | Chamadas para ação | Orientar o próximo passo | Ação coerente com o que foi entregue, sem promessa que o conteúdo não sustenta; inclua pausa de interação no meio e indicação do próximo vídeo no fim |

As etapas 4 a 7 normalmente são executadas juntas, **seção por seção**, ao escrever o corpo do roteiro. Isso é esperado; mantenha cada função explícita nas notas internas.

### Fluxo recomendado

1. **Briefing** → confirmar (inclui duração-alvo, idioma e se haverá texto para narração).
2. **Título** → apresentar 5 opções, cada uma com a verificação "o vídeo cumpre essa promessa?". Aguardar escolha.
3. **Introdução** → 3 versões; fazer a revisão crítica da escolhida (ver checklist de introdução abaixo); ajustar.
4. **Portão de fontes e ficha de fatos** → conferir material factual; parar e pedir fontes ou pesquisar se faltar.
5. **Estrutura** → listar seções com, para cada uma: dificuldade do público, pergunta em aberto, entrega (payoff) e transição; indicar o orçamento de palavras por seção. Se o tema tiver disputa entre especialistas, aplicar a estrutura da seção correspondente. Aguardar aprovação.
6. **Escrita por seção** → escrever uma seção, aplicar o checklist de revisão, mostrar, aguardar ajuste, seguir para a próxima.
7. **CTA e encerramento** → pausa de interação, recap, chamada coerente e próximo vídeo.
8. **Revisão final** → leitura de ponta a ponta (ritmo, repetições, continuidade, inclusão, números sem fonte, itens `[VERIFICAR]` pendentes, contagem de palavras contra a meta).
9. **Consolidação ou comparação** (se houver roteiros de referência ou várias versões) → ver seções abaixo.
10. **Entrega final** → gerar, a partir do mesmo texto-fonte, o roteiro anotado e o texto limpo para narração (ver seção abaixo), mais a lista de verificação.
11. **Ciclo de feedback** → ver abaixo.

## Elementos de retenção do vídeo

Verifique que o roteiro tem:

- **Roteiro do vídeo na introdução:** uma frase que diz o que o espectador terá ao final ("what it says, why X, and the theories..."), depois do gancho.
- **Abertura de laços:** pelo menos duas promessas que só se resolvem mais adiante ("hold on to that").
- **Pausa de interação no meio:** uma pergunta concreta ao público (escolha entre opções) em vez de um "comente abaixo" genérico.
- **Recap antes do fim:** retome os pontos centrais em poucas frases.
- **Próximo vídeo:** indique um vídeo relacionado, com uma frase que explique por que interessa a quem acabou de assistir.

## Temas com disputa entre especialistas

Quando há teorias concorrentes, **não apresente todas como respostas à mesma pergunta**. Separe primeiro as perguntas:

1. O fato ou documento é autêntico e real?
2. De quem é, ou a quem se refere?
3. De onde veio, ou o que aconteceu depois?

Depois, para cada pergunta, apresente as posições **atribuídas a quem as defende**, o ponto forte e o ponto fraco de cada uma, e diga com clareza o que ainda ninguém consegue provar. Não use um argumento ("o estilo é prático") como se provasse o resultado.

## Elementos de cada seção

- **Preocupação específica:** algo que importa ao espectador.
- **Pergunta em aberto:** dúvida que a seção vai resolver.
- **Payoff:** a resposta à expectativa criada.
- **Rehook (gancho de transição):** liga a resposta entregue à próxima questão; não trate cada tópico como encerramento.

Formato de saída de cada seção:

```
SEÇÃO N — [nome]
Dificuldade do público: ...
Pergunta em aberto: ...
Texto (como falado): ...
Payoff: ...
Gancho para a próxima: ...
```

Exemplo (segurança digital): problema = reutilizar senhas expõe em vazamentos → pergunta = como ter senhas diferentes sem memorizar? → entrega = gerenciador de senhas → transição = proteger a senha não resolve todos os riscos; entra a autenticação em dois fatores.

## Checklists de revisão

**Introdução:** corresponde à promessa do título? há dúvida relevante? autoridade sem linguagem promocional? conduz à frase seguinte?

**Cada seção:**
- Concretude: há 2 a 3 detalhes específicos e verificáveis, presentes na ficha de fatos?
- Inclusão: o texto evita supor religião, país ou conhecimento prévio?
- Utilidade: há resposta concreta ou só promessa?
- Clareza: quem não conhece o tema acompanha?
- Evidência: números, resultados e casos têm sustentação?
- Naturalidade: soa bem lido em voz alta?
- Continuidade: a passagem para o próximo tópico faz sentido?
- Concisão: algo repete o que já foi dito?

Apresente a avaliação crítica ao usuário (pontos fortes, falhas, correções sugeridas) antes de avançar.

## Comparação com roteiro de referência (opcional)

Quando o usuário fornecer um roteiro de referência (benchmark), compare **depois da revisão final**, usando o texto completo. Se só houver título ou ID, diga que a comparação fica limitada à promessa do título e peça o texto.

Compare, em tabela:

| Aspecto | Roteiro gerado | Referência |
|---|---|---|
| Promessa do título e fidelidade da entrega | | |
| Abertura (primeiros 30 s): problema, contraste ou ironia | | |
| Estrutura: número de seções e ordem | | |
| Payoff por seção | | |
| Ganchos de transição | | |
| Ritmo: tamanho das seções, repetições | | |
| Tom e linguagem | | |
| Evidência: o que é verificável e o que não é | | |

Conclua com 3 a 5 ajustes concretos para o roteiro gerado e **aplique-os na versão final** (não gere outra versão). Não copie trechos da referência; extraia técnicas, não texto. Ajustes que o usuário aprovar podem alimentar o guia de estilo.

## Modo consolidação (várias versões)

Se o usuário trouxer duas ou mais versões (de IA, de plataformas diferentes, de edições anteriores), **não produza uma nova versão paralela por trecho**. Faça:

1. Tabela de decisão por trecho: **manter** (de qual versão), **cortar** ou **corrigir**, com o motivo.
2. Registre fatos divergentes entre as versões na ficha de fatos e escolha uma formulação atribuída.
3. Escreva **uma única versão final** a partir da melhor base, incorporando só o que a tabela aprovou.
4. Use versões extras apenas como referência de comparação, sem copiar texto.

## Entrega final: roteiro anotado e texto para narração

A partir do **mesmo texto-fonte**, gere:

1. **Roteiro anotado** (`.md`): suposições (modo contínuo), briefing, fontes, estrutura por seção (pergunta, payoff, gancho), revisão e lista de itens `[VERIFICAR]`.
2. **Texto limpo para narração/TTS** (`.txt`), com estas regras:
   - sem Markdown, títulos, listas, blocos de código nem colchetes;
   - um parágrafo por linha, separado por linha em branco; frases curtas;
   - números, anos e unidades por extenso ("nineteen fifty-two", "forty cubits"); sem siglas como "A.D." ou "e.g." (use "the year seventy");
   - nomes difíceis: grafia que o leitor sintético pronuncia bem, e liste-os para teste no fim do chat (não no arquivo);
   - nenhuma anotação interna, rótulo de seção ou `[VERIFICAR]` dentro do texto.
3. **Checagem de duração:** conte as palavras do `.txt` (por exemplo, `wc -w`) e compare com a meta (minutos-alvo × 150). Se passar da meta, **corte antes de entregar** e diga o que foi cortado; não entregue e avise depois.
4. Nomeie os arquivos de forma estável (`<tema>-roteiro-anotado.md`, `<tema>-tts.txt`) e, em edições futuras, **atualize os mesmos arquivos** em vez de criar novos.

## Ciclo de feedback e guia de estilo

Quando o usuário trouxer a versão que editou:

1. Preserve a versão da IA e a final (não sobrescreva).
2. Compare as duas e classifique as mudanças:
   - **Estruturais:** cortes, deslocamentos, reorganização
   - **De estilo:** vocabulário, construção de frases, tom
   - **Padrões recorrentes:** correções repetidas
3. Proponha regras, separando **preferências recorrentes** de **alterações pontuais**; o usuário aprova o que entra.
4. Salve/atualize o guia (com data e versão) usando `references/guia-de-estilo-template.md`.
5. Lembre o usuário: mostrar correções não faz a IA aprender permanentemente. Para reutilizar, o guia deve ser fornecido de novo no contexto ou guardado em recurso persistente da ferramenta.

Exemplo de regras: frases curtas e linguagem falada; abrir com situação concreta; explicar termo técnico na primeira ocorrência; evitar afirmações absolutas sem evidência; exemplo antes do conceito abstrato.

## Adaptações por aplicação

- **Educativo/tutorial:** dificuldades e soluções sucessivas (erro comum → causa → correção → próxima etapa). Valor cedo.
- **Marketing:** necessidade real → solução demonstrável → ação pertinente. Separe informação de promoção; não prometa o que o produto não sustenta.
- **Treinamento interno:** procedimentos como cenários de decisão (mensagem suspeita → sinais de alerta → procedimento). Instruções claras; retenção não depende de esconder o essencial.
- **Produção editorial recorrente:** modelo de briefing, critérios de aprovação e registro de correções frequentes; defina quem aprova fatos, linguagem e versão final.

## Exemplo completo (orçamento para autônomos)

- Título: dificuldade de planejar despesas com renda variável
- Introdução: quem recebe bem num mês e pouco no seguinte
- Estrutura: despesas essenciais → renda de referência → reserva
- Payoff: procedimento aplicável à própria planilha
- Transição: calculadas as essenciais, falta prever os meses de menor receita
- CTA: registrar as despesas essenciais antes de avançar
- Limite: não prometer resultado financeiro garantido; exemplos numéricos rotulados como fictícios
