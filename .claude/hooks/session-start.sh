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
