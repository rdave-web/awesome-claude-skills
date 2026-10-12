# Roteiro Step by Step — Gerando vídeos no DarkLab (com Claude via MCP)

Fontes: vídeo "Guia completo de como usar a DARKLAB" (nPkvR4wPhEI) e vídeo "Darklab: a máquina de criar qualquer tipo de vídeo" (8S0AnCI7Oc8), mais as ferramentas MCP do DarkLab disponíveis nesta sessão.

> Legenda: 🧑 = você faz na interface do DarkLab/navegador · 🤖 = Claude faz via MCP · ⏱ = minutagem do vídeo de origem (V1 = nPkvR4wPhEI, V2 = 8S0AnCI7Oc8)

---

## 0. Entenda o mapa antes de começar

**Duas rotas de entrada (V1, 04:26–05:55):**

| Rota | Quando usar | Quem escreve os prompts |
|---|---|---|
| **A. Áudio** (recomendada) | Você já tem a narração (ex.: ElevenLabs) | DarkLab (IA interna) **ou Claude via MCP** |
| **B. Lista de prompts / SRT** | Você quer controle total dos prompts | Você ou Claude |

**Conceitos-chave**

- **Sessões vs. Segmentos (V1, 12:01–15:02).** Sessão = clipes fixos de 8 s. Segmento = um clipe por frase narrada; o DarkLab corta sozinho (3 s, 4 s, 6 s…). **Use segmentos**: mais imersivo, melhor retenção e não precisa cortar na edição.
- **Project Bible (V1, 18:09–21:10).** O DarkLab lê o áudio/roteiro e cria o estilo global, regras do que pode/não pode aparecer (ex.: sem carros modernos numa história bíblica). Seu **template** (até ~2.000 palavras) é seguido 100%.
- **Imagem → Vídeo separados (V1, 16:14–17:00).** Gerar todas as imagens primeiro, revisar e só depois animar. Permite animar no Flow *ou* no Grok.
- **Cenas = automação (V2, 33:00).** No app novo, tudo que é imagem/vídeo/avatar roda em "Cenas" (antiga "Automação").

---

## 1. Preparação única (faça uma vez)

1. 🧑 **Instalar a extensão** do DarkLab no Chrome (menu *Extension* → *Add to Chrome*) (V1, 00:35).
2. 🧑 **Autenticar a extensão**: login direto ou **token** (copiar do modal e colar na extensão). Use token se estiver em outro navegador/perfil (V1, 01:01).
3. 🧑 **Abrir Flow (Veo) e/ou Grok** logados nas contas que vai usar. Pode conectar duas extensões (uma Flow, outra Grok) e escolher qual recebe cada automação (V1, 21:46–22:39).
4. 🧑 *(Opcional)* Instalar o **app desktop** do DarkLab — necessário para download local com corte automático, mesclar imagens e **enviar para o CapCut** (V1, 15:30, 35:40).
5. 🧑 **Conectar o Claude ao MCP do DarkLab** (já feito nesta sessão — as ferramentas `mcp__DarkLab__*` estão ativas).
6. 🧑 *(Pesquisa de nicho)* Usar a extensão no YouTube: tag de monetização, aba **Canais similares** e o **Nichefinder** do DarkLab para achar canais a modelar (V1, 01:27–03:47; 48:00–50:00).

---

## 2. Fluxo principal — do áudio ao vídeo, com Claude no comando

### Passo 1 — Defina o estilo (Template) 🤖
Seu template substitui o "estilo automático" e é seguido à risca.

- `list_templates` → ver templates próprios e globais.
- `copy_template` → partir de um global e editar a cópia.
- `create_template` / `edit_template` → criar o seu (até 20.000 caracteres).

**O que colocar no template** (V1, 19:07–20:41):
- Estilo global (ex.: "cinematográfico, ultrarrealista, emocional, nada cartoon" ou "3D Pixar").
- **Regra absoluta do que NÃO pode aparecer** (ex.: "nenhuma pessoa em cena", "sem texto/letras na tela", "sem tela dividida"). Se não proibir, o modelo pode inserir texto escrito (V1, 41:27).
- Época/cenário, tom narrativo, efeitos permitidos/proibidos.
- Se usa personagens: como descrevê-los (o template também orienta a ficha dos personagens).

> Prompt para o Claude: *"Liste meus templates e crie um template chamado 'X' com estas regras: …"*

### Passo 2 — Narração e SRT 🧑 + 🤖
O Claude **não consegue enviar os bytes do áudio**; o upload é feito por você.

1. 🧑 Gere a narração (ElevenLabs etc.) — funciona em qualquer idioma e sem limite de duração (V1, 16:55).
2. 🤖 `create_audio_srt_upload_link` → Claude te entrega um link.
3. 🧑 Abra o link, suba o áudio e anote o **ID da geração**.
4. 🤖 `get_srt_generation` (com o ID) → devolve o SRT (status: queued/processing/done/error).
   - Se o áudio já estiver em URL pública: `generate_srt` (ou `transcribe_audio` só para texto).

O SRT do DarkLab vem em blocos **UNIDADE / TEMPO / TEXTO / PROMPT**. O TEMPO define o corte de cada cena (V1, 45:06–46:44). Em modo "segmentos naturais" cada bloco segue a frase; em sessões fixas o DarkLab calcula palavra por palavra para fechar o tempo sem repetir cena.

### Passo 3 — Project Bible + prompts por cena 🤖
Aqui o Claude substitui a IA interna do DarkLab (V1, 43:57–47:27):

1. Lê o SRT e o template (Passo 1).
2. **Monta a Bíblia do projeto** (estilo, época, regras proibidas, paleta, lista de personagens/objetos/cenários recorrentes).
3. **Preenche o campo `PROMPT:` de cada bloco**, sem mexer em TEMPO/TEXTO.
4. Para cena com personagem consistente, escreve o **nome do personagem entre marcadores** (ex.: `char`, `god`) — o nome tem de bater com o nome da imagem do personagem (ex.: `char 2` ↔ `char 2.png`) (V1, 46:10).
5. Só inclui o personagem quando ele realmente aparece na cena (V1, 28:02).

Regras de qualidade para cada prompt: um clipe = uma ação visual clara; respeitar a duração do bloco (3–8 s); repetir os traços fixos do personagem; seguir o "proibido" do template.

### Passo 4 — Criar a automação 🤖
`create_automation` com:

| Campo | Recomendação |
|---|---|
| `name` | Nome do projeto (você o usará para achar tudo depois) |
| `prompt_srt_content` | O SRT completo com PROMPT preenchido (caminho B do tool) — mantém sincronia e cortes |
| `prompts` | Alternativa: lista simples, 1 prompt por cena (não combinar com o SRT) |
| `media_type` | `image` primeiro (fluxo imagem→vídeo), depois `video`; `hybrid` se quiser os dois |
| `platform` | `flow` (Veo) ou `grok` |
| `model` | `veo3_fast_lower` (econômico, padrão), `veo3_lite`, `veo3_fast`, `veo3_quality` |
| `aspect_ratio` | `16:9` (YouTube) ou `9:16` (Shorts/TikTok) |

> ⚠️ A automação é criada **PARADA**. Você revisa e dá o play dentro do DarkLab.

### Passo 5 — Personagens consistentes 🤖 + 🧑
Se o vídeo tem personagem recorrente (V1, 56:00–31:11):

- `add_character` → cria o personagem (nome, descrição, prompt visual). Imagem é opcional.
- **Com foto sua**: 🤖 `create_character_upload_link` → 🧑 você sobe uma ou várias fotos (vínculo automático pelo nome do arquivo).
- **Com imagem de URL pública**: `upload_character_image` → `add_character` com `image_url`.
- **Gerada por IA**: `generate_character_image` (exige o `prompt` visual; até ~3 min).
- `list_characters` → ver ranking de importância e nº de aparições.
- `assign_character_to_scenes` → vincular a cenas (`replace=true` define exatamente essas; padrão faz merge). Equivale ao "1-17" / "1,17" da interface.
- `update_character` / `remove_character` → ajustar. Trocar a imagem de um personagem propaga para todas as cenas vinculadas.

> Obs.: no Flow só entram **3 imagens de referência** por geração; a imagem gerada da cena tem prioridade e a última referência cai (V1, 33:36).

### Passo 6 — Revisar antes de rodar 🤖 + 🧑
- `get_automation_status` → lista cenas, prompts, scene_ids e progresso.
- `edit_scene_prompt` → editar o texto de uma cena (você dá o novo prompt).
- `refine_prompt` → pedir à IA do DarkLab para reescrever uma cena.
- `add_scenes` → acrescentar cenas (só enquanto a automação está parada).
- `edit_automation` → mudar nome ou modelo.

**Regra de ouro (V1, 28:41–30:00):** editar prompt da **automação de imagens** reflete na de vídeo ligada (a imagem é a referência da animação). Editar na de **vídeo** não volta para a imagem — por isso dá para refazer só a animação.

### Passo 7 — Configurar velocidade e segurança 🧑
No DarkLab, antes do play (V1, 08:21–10:35):

- **Vídeos simultâneos:** 10 é rápido, mas o Flow bloqueia ("tente novamente mais tarde"). Em dia de demanda alta, reduza.
- **Intervalo aleatório mín/máx:** ex. **5–20 s** (o autor gerou 340 imagens sem erro). Quebra o padrão robótico que o Flow detecta. Pode ser editado depois da automação criada.
- **Armazenamento:** *Storage* (nuvem, baixa tudo no fim e refaz substituindo) ou *Local* (app aberto; corta ao baixar).
- **Recuperação (Recovery) ligada** (V1, 26:39): falhou → reenvia; falhou de novo → vai para recuperação no fim, em **6 ciclos**, alternando reenviar e **reescrever com IA**.
- **Extensão destino:** escolha Flow ou Grok (dá para trocar depois de criada).

### Passo 8 — Rodar 🧑
1. Dê **play** na automação de imagens. Pode minimizar e usar o computador; roda em segundo plano (V1, 31:37).
2. 🤖 Acompanhe com `get_automation_status` quando quiser um resumo ("quantas cenas prontas / com erro?").
3. Quando as imagens terminarem, revise (Passo 9) e **só então** dê play na automação de vídeo — as imagens já estão ligadas como referência.
4. Se o Flow estiver ruim no dia (policy/demanda), **redirecione a automação de vídeo para o Grok** (V1, 06:33–07:27, 34:29). Imagem no Flow costuma ter menos bloqueio que vídeo.

### Passo 9 — Corrigir cenas ruins 🤖
- `regenerate_scene` (com `scene_id`, opcionalmente já com novo `prompt`) → refaz uma cena mesmo após a automação concluída; o resultado substitui o anterior.
- Prompt barrado por policy → deixe a Recuperação agir ou peça ao Claude para suavizar o prompt e usar `regenerate_scene`.

### Passo 10 — Exportar e editar 🧑
- 🧑 No **app desktop**: *Mesclar imagens* no timing correto, abrir pasta, **Cortar** (se baixou com o app fechado) e **Enviar para o CapCut** (V1, 35:40–40:32).
- O projeto abre no CapCut com **áudio, vídeos/imagens na duração exata da fala e legendas** no padrão CapCut (compatível com os templates de legenda).
- Funciona para imagens e para vídeos já cortados.

---

## 3. Variações úteis

**Rota B pura (você/Claude escreve tudo fora do DarkLab)** — V1, 43:57–47:27
Gere o SRT no DarkLab, leve para o Claude escrever os prompts e devolva. Tudo escrito no `PROMPT:` é tratado como prompt de imagem; nomes de personagem têm de bater com os arquivos. Aceita centenas de prompts; o DarkLab ainda faz os cortes pelo TEMPO.

**Teste rápido de canal (sem personagem)** — V1, 43:06
Vídeo direto ou só imagens, sem personagem consistente: roda mais rápido e barato para validar nicho.

**Fluxo híbrido de vídeo longo**
Defina no plano a mistura de fontes (ex.: % de clipes do YouTube, % Flow, % banco de mídia, % imagens GPT) — o agente do app novo respeita isso (V2, 08:25–10:43, 21:15, 30:24).

---

## 4. O app novo do DarkLab (V2) — o que muda

> O V2 mostra o novo aplicativo, que ainda estava em lançamento. As tools MCP acima cobrem principalmente **Cenas/Automações, templates, SRT e personagens**; agentes, fluxos e editor abaixo são recursos do app.

1. **Provedores (V2, 04:04–11:19)** — conecte chat (ex.: Antigravity, ChatGPT), geração de imagem/vídeo (Flow, GPT, fal.ai: Seedance, MiniMax…), voz (ex.: Wesley Studios com ElevenLabs/CapCut/MiniMax), música (Suno), bancos de mídia sem API (Wikipedia, Internet Archive, NASA) e transcrição/pesquisa.
2. **Combos/Sequências (V2, 05:43)** — se uma IA falhar ou acabar a cota, parte para a próxima. *Ordem* = fallback; *revezar* = divide entre contas do mesmo modelo.
3. **Agentes (V2, 11:19–16:32)** — multiagente, cada um com modelo, memória (própria/compartilhada), skills (do Claude Code, criar ou importar zip) e ferramentas. Exemplo: agente criador gera o roteiro e manda ao agente revisor (outro modelo) corrigir. Dá para montar equipes com líder.
4. **Fluxos/esteiras (V2, 16:32–28:16)** — colunas (pesquisa → roteiro → correção → bíblia → prompts → cenas → edição → miniatura…), cada uma com instrução, agente/modelo e opção de parar para revisão. Cards em fila (limite de execuções simultâneas), agendamento (ex.: 9h e 18h), exportar/importar JSON. Deixe a *especificação do card* enxuta: ela vai para todas as colunas.
5. **Narração (V2, 29:06–30:54)** — o agente escolhe a voz dos **favoritos** que você rotulou (ex.: "documentário", "terror"). Rotule antes.
6. **Estúdio/Editor (V2, 35:41–48:59)** — transcrição na timeline, templates (2–8 cenas, ~160), destaques com variações, textos, legendas karaokê, efeitos, transições com som, filtros, marca d'água, aba **Direção** (quantidade de templates/efeitos/cor do projeto, pesos de sorteio, presets). Exportação rápida (vídeo de 3 min ≈ 40 s sem GPU).
7. **Telegram (V2, 49:34–51:20)** — converse com o agente, peça vídeos por áudio e receba avisos de cada etapa do fluxo.

---

## 5. Prompt-mestre para colar no Claude (rota MCP)

```
Use o MCP do DarkLab para produzir um vídeo seguindo este roteiro:

Projeto: <nome>
Nicho/tema: <tema>
Formato: <16:9 | 9:16> · Plataforma: <flow | grok> · Modelo: <veo3_fast_lower | …>
Mídia: gerar imagens primeiro (media_type=image), depois vídeo.
Divisão: segmentos naturais (um clipe por frase, sem sessões fixas de 8s).

1. list_templates e me proponha um template (ou copy_template + edição).
   Regras do template: <estilo, o que NÃO pode aparecer, sem texto na tela, etc.>
2. create_audio_srt_upload_link e me mande o link. Vou subir a narração e te passo o ID.
3. get_srt_generation com o ID.
4. Monte a Bíblia do projeto e preencha o PROMPT de cada bloco do SRT sem alterar TEMPO/TEXTO.
   Personagens recorrentes: <nomes + descrição>. Marque o nome do personagem só nas cenas em que ele aparece.
5. create_automation com prompt_srt_content (automação parada).
6. add_character / create_character_upload_link para os personagens; assign_character_to_scenes.
7. get_automation_status e me mostre um resumo das cenas para revisão antes do play.
Não dê por concluído sem eu confirmar a revisão. Depois que eu rodar, acompanhe o status e refaça cenas com erro usando regenerate_scene.
```

---

## 6. Checklist rápido

- [ ] Extensão instalada e autenticada (Flow e/ou Grok)
- [ ] Template com regras de "proibido" (inclui "sem texto na tela")
- [ ] Narração pronta e SRT gerado (segmentos naturais)
- [ ] PROMPT de todas as cenas preenchido; nomes de personagem batendo com os arquivos
- [ ] Personagens criados, com imagem e vinculados às cenas certas
- [ ] Automação revisada; simultâneos baixos e intervalo 5–20 s; Recovery ligada
- [ ] Imagens geradas → revisadas → vídeo animado (Flow ou Grok)
- [ ] Cenas ruins refeitas (`regenerate_scene`)
- [ ] Exportado para o CapCut / Estúdio

## 7. Problemas comuns

| Sintoma | Causa provável | Solução |
|---|---|---|
| Flow: "pedindo muitas gerações / tente de novo" | Muitos simultâneos ou ritmo robótico | Reduzir simultâneos; intervalo 5–20 s ou maior |
| Muitos vídeos falhando no Flow | Demanda alta / policy de vídeo | Gerar imagem no Flow e animar no Grok |
| Texto/letras aparecendo nas cenas | Template não proibiu | Adicionar "sem texto/escrita na tela" ao template |
| Tela dividida indesejada | Idem | Proibir no template |
| Personagem não aparece | Nome no PROMPT ≠ nome do arquivo, ou cena não vinculada | Conferir nomes; `assign_character_to_scenes` |
| Não consigo adicionar cenas | Automação já começou | `add_scenes` só com automação parada |
| Vídeos sem corte ao baixar local | App fechado durante o download | Abrir o app e clicar em **Cortar** |
| Claude não consegue subir áudio/foto | Bytes de anexos não passam pelo MCP | Usar `create_audio_srt_upload_link` e `create_character_upload_link` |
