#!/bin/bash
set -euo pipefail

# Only run in Claude Code cloud sessions
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Install claude-mem (persistent memory plugin) if missing; idempotent
if ! command -v claude-mem >/dev/null 2>&1; then
  npm install -g claude-mem
fi

if [ ! -d "$HOME/.claude/plugins/marketplaces/thedotmack" ]; then
  claude-mem install --ide claude-code --provider claude --no-auto-start
fi

# Start the worker (no-op if already running)
claude-mem start || true
# /watch skill (bradautomates/claude-video, vendored in .claude/skills/watch):
# yt-dlp for non-YouTube URLs and the local engine, plus a Gemini-engine config.
# The key is a placeholder: the environment's network secret for
# generativelanguage.googleapis.com makes the agent proxy attach the real one.
if ! command -v yt-dlp >/dev/null 2>&1; then
  pip install --user -q yt-dlp || true
fi

WATCH_ENV="$HOME/.config/watch/.env"
mkdir -p "$HOME/.config/watch"
if ! grep -q '^GEMINI_API_KEY=.\+' "$WATCH_ENV" 2>/dev/null; then
  echo 'GEMINI_API_KEY=proxy-injected' >> "$WATCH_ENV"
fi
chmod 600 "$WATCH_ENV"
python3 "$CLAUDE_PROJECT_DIR/.claude/skills/watch/scripts/setup.py" --engine gemini >/dev/null 2>&1 || true
