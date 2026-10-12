---
name: youtube-automation-agent
description: Instala, configura e opera o AgentTube (Lumen), um agente open-source em Node.js que automatiza um canal de YouTube de ponta a ponta — pesquisa de temas, roteiro, thumbnail, SEO, narração, montagem do vídeo, revisão, agendamento, publicação e análise de resultados. Use quando o usuário quiser automatizar um canal do YouTube, gerar/publicar vídeos em escala, subir o dashboard de automação ou ajustar provedores de IA, agendamento e métricas.
---

# YouTube Automation Agent (AgentTube / Lumen)

Aplicação self-hosted (MIT, Node 18+) que roda um canal de YouTube com **aprovação humana por padrão**: nada é agendado ou publicado sem passar pelos portões de qualidade, direitos de mídia e revisão factual. O código está em `app/`.

## O que ele faz

Pipeline de agentes (cada um em `app/agents/`):

| Agente | Função |
|---|---|
| Content Strategy | Tendências, concorrentes, calendário de conteúdo |
| Script Writer | Gancho, narrativa, CTA e metadados |
| Thumbnail Designer | Thumbnails e variações A/B |
| SEO Optimizer | Palavras-chave, títulos, descrição, tags |
| Production Management | TTS, imagens/vídeo (FFmpeg ou provedores de vídeo IA), montagem do MP4 |
| Publishing & Scheduling | Upload, agendamento e playlists |
| Analytics & Optimization | Snapshots de 24h/7d, retenção por cena, aprendizados que realimentam a estratégia |

Extras: Operador Autônomo de Canal (objetivo → plano editorial → produção), Review Studio (reparo de cena, evidências/proveniência), Shorts a partir de vídeos aprovados, experimentos de título/thumbnail, ROI por pilar, engajamento com rascunhos de respostas a comentários (nunca posta sozinho), auditoria de descobribilidade embutida.

Provedores de texto: OpenAI, Gemini, OpenRouter, Kimi, MiMo, GLM ou qualquer endpoint compatível com OpenAI. Vídeo: slideshow local (padrão, sem custo), Seedance, MiniMax H3, Gemini Omni Flash, Kling, Wan.

## Quando usar

- "Quero automatizar meu canal do YouTube"
- Subir o dashboard (`http://localhost:3456`) e configurar chaves/provedores
- Gerar um vídeo por API (`POST /generate`) ou retomar uma geração interrompida
- Entender, ajustar ou depurar agentes, agendamento (`app/schedules/daily-automation.js`) e banco SQLite

## Instalação e uso

```bash
cd youtube-automation-agent/app
cp .env.example .env        # preencha ao menos uma chave de IA de texto
npm install
npm run walkthrough         # guia interativo: provedores, teste de credenciais, OAuth do YouTube
npm start                   # dashboard em http://localhost:3456
npm test                    # suíte de testes do sistema
```

Requisitos: Node 18+, projeto no Google Cloud com **YouTube Data API v3** e cliente OAuth tipo **Desktop app** salvo em `app/config/credentials.json` (modelo: `credentials.example.json`), e uma chave de IA de texto. FFmpeg vem via `ffmpeg-static`.

Gerar um vídeo manualmente:

```bash
curl -X POST http://localhost:3456/generate \
  -H "Content-Type: application/json" -H "x-api-key: $API_KEY" \
  -d '{"topic": "Seu tema", "style": "list"}'
curl http://localhost:3456/api/jobs/<jobId>
```

Agenda padrão após `npm start`: geração 06:00, fila de publicação a cada 15 min, analytics 09:00, otimização 22:00.

## Roteiros em inglês, humanizados

Os roteiros são gerados em inglês. Depois que a IA escreve o roteiro, `app/utils/script-humanizer.js` faz uma passada de humanização (padrões do skill `humanizer`: sem contrastes "não é X, é Y", sem fechamentos de efeito, sem travessões, sem vocabulário inflado, etc.) em título, gancho, seções e CTA. Fatos, números e a lista de `claims` não são alterados. Se a passada falhar ou mudar o formato, o roteiro original é mantido. Desative com `SCRIPT_HUMANIZER_ENABLED=false`. A lista completa de padrões está em `references/humanizer.md`.

Ao revisar ou editar roteiros manualmente, use o skill `humanizer` do Claude e siga `references/humanizer.md`.

## Instruções para o Claude

1. Nunca coloque chaves de API ou `credentials.json` em commits; só em `.env` / `config/` (já no `.gitignore`).
2. Mantenha `DEFAULT_PRIVACY_STATUS=private` até o usuário pedir o contrário e defina `API_KEY` para proteger rotas que mudam estado.
3. Não contorne os portões de aprovação (vídeo simulado, narração ausente, claims sem fonte, direitos de mídia não confirmados).
4. Operações pagas (vídeo IA, imagens IA) exigem confirmação explícita do usuário e respeitam `VIDEO_MAX_GENERATED_SECONDS`.
5. A telemetria anônima é desligada por padrão; só ative se o usuário configurar `ANONYMOUS_TELEMETRY_ENABLED` e um endpoint próprio.
6. Antes de mudanças, rode `npm test` e `npm run lint` dentro de `app/`.

## Origem

Pacote de terceiros (`darkzOGx/youtube-automation-agent`, v2.10.0, MIT). Foram removidos relatórios de growth, templates do GitHub e imagens. O título do README original continha um endereço de token de criptomoeda ("…pump") sem relação com o software; foi removido e o código não o referencia. Rode `npm audit` antes de usar em produção.
