---
name: roteiro-em-etapas
description: Produz roteiros de vídeo (YouTube, tutoriais, marketing, treinamentos) em oito etapas com controle de qualidade, em vez de pedir o roteiro inteiro de uma vez. Use quando o usuário pedir um roteiro de vídeo, quiser melhorar retenção e clareza, ou quiser transformar suas edições em um guia de estilo reutilizável.
---

# Roteiro em Etapas

Método para gerar roteiros com IA de forma modular: briefing → título → introdução → estrutura → seções (payoff, setup, tensão, transição) → chamadas para ação → revisão → guia de estilo. Cada entrega é aprovada pelo usuário antes da etapa seguinte.

## Quando usar

- Pedidos de roteiro para YouTube, vídeo educativo, tutorial, vídeo de marketing ou treinamento interno
- O usuário reclama que roteiros da IA saem genéricos
- O usuário quer padronizar briefing, revisão e estilo de uma produção recorrente
- O usuário tem um roteiro editado e quer extrair um guia de estilo

## Por que em etapas

Pedir o roteiro inteiro obriga a IA a resolver ao mesmo tempo: interpretar o tema para uma audiência, organizar ideias, desenvolver argumentos, sustentar curiosidade, controlar ritmo e imitar a voz do criador. Resultado: texto genérico. Dividir permite avaliar e corrigir cada entrega. Não substitui boas informações de entrada nem revisão humana.

## Regras de condução

1. **Uma etapa por vez.** Entregue, avalie, peça aprovação ou ajuste, só então avance. Não gere o roteiro completo de uma só vez, salvo pedido explícito.
2. **Dê opções onde há escolha** (títulos, introduções): 3 a 5 versões com abordagens diferentes.
3. **Material próprio primeiro.** Use anotações, experiências e dados fornecidos. Não invente casos, números ou depoimentos.
4. **Números e fatos:** remova, peça fonte ou rotule como "exemplo hipotético". Nunca apresente estatísticas inventadas como reais.
5. **Honestidade sobre curiosidade:** evidencie dificuldades reais do público. Não invente riscos, não exagere consequências, não atrase a resposta sem necessidade. Técnicas como "pergunta em aberto" (efeito Zeigarnik) são hipóteses editoriais a testar, não garantia científica.
6. **Se existir guia de estilo** (arquivo do usuário ou `references/guia-de-estilo-template.md` preenchido), carregue-o no início e aplique em todas as etapas.
7. **Adapte ao formato:** em conteúdo educativo e treinamento, entregue valor cedo; suspense excessivo atrapalha a aprendizagem e informação essencial nunca deve ser escondida para reter.

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
| Formato e duração | YouTube, tutorial, marketing, treinamento; minutos |

Resuma o briefing em um bloco e peça confirmação. Modelo em `references/briefing-template.md`.

## As oito etapas

| # | Etapa | Função | O que fazer |
|---|---|---|---|
| 1 | Título | Definir a promessa que motiva o clique | Gerar alternativas; checar se o vídeo consegue cumprir cada uma |
| 2 | Introdução | Confirmar a promessa e mostrar relevância | Versões com abordagens distintas: problema, contraste, ironia, situação concreta |
| 3 | Estrutura | Ordenar as ideias em sequência lógica | Montar o esqueleto a partir do material do usuário |
| 4 | Payoffs | Planejar a resposta/recompensa de cada seção | Especificar o que o espectador aprende ou consegue fazer |
| 5 | Setups | Preparar o contexto da resposta | Situação concreta que justifique o tema da seção |
| 6 | Tensão | Sustentar interesse no desenvolvimento | Obstáculos, consequências, dúvidas relevantes |
| 7 | Ganchos de transição | Ligar uma seção à próxima | Explicar por que a resposta anterior leva ao próximo problema |
| 8 | Chamadas para ação | Orientar o próximo passo | Ação coerente com o que foi entregue, sem promessa que o conteúdo não sustenta |

As etapas 4 a 7 normalmente são executadas juntas, **seção por seção**, ao escrever o corpo do roteiro. Isso é esperado; mantenha cada função explícita nas notas internas.

### Fluxo recomendado

1. **Título** → apresentar 5 opções, cada uma com a verificação "o vídeo cumpre essa promessa?". Aguardar escolha.
2. **Introdução** → 3 versões; fazer a revisão crítica da escolhida (ver checklist de introdução abaixo); ajustar.
3. **Estrutura** → listar seções com, para cada uma: dificuldade do público, pergunta em aberto, entrega (payoff) e transição. Aguardar aprovação.
4. **Escrita por seção** → escrever uma seção, aplicar o checklist de revisão, mostrar, aguardar ajuste, seguir para a próxima.
5. **CTA e encerramento** → propor chamada coerente com a entrega.
6. **Revisão final** → leitura de ponta a ponta (ritmo, repetições, continuidade, números sem fonte).
7. **Ciclo de feedback** → ver abaixo.

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
- Utilidade: há resposta concreta ou só promessa?
- Clareza: quem não conhece o tema acompanha?
- Evidência: números, resultados e casos têm sustentação?
- Naturalidade: soa bem lido em voz alta?
- Continuidade: a passagem para o próximo tópico faz sentido?
- Concisão: algo repete o que já foi dito?

Apresente a avaliação crítica ao usuário (pontos fortes, falhas, correções sugeridas) antes de avançar.

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
