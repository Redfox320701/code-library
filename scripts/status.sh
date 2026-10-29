#!/usr/bin/env bash
# Quick resource snapshot for the Code Library project.
# Usage: bash scripts/status.sh

set -euo pipefail

echo "=== Code Library — resource snapshot ==="
date -u +"%Y-%m-%d %H:%M UTC"

echo
echo "--- Disk ---"
df -h . | awk 'NR==1 || NR==2'

echo
echo "--- Memory ---"
free -h | awk 'NR==1 || /Mem/'

echo
echo "--- Project size ---"
du -sh . 2>/dev/null
du -sh node_modules 2>/dev/null || echo "node_modules: not installed"
du -sh dist 2>/dev/null || echo "dist: not built yet"

echo
echo "--- Largest files in repo (excluding node_modules/dist) ---"
find . -path ./node_modules -prune -o -path ./dist -prune -o -type f -print0 2>/dev/null \
  | xargs -0 du -k 2>/dev/null | sort -rn | head -5 | awk '{printf "%6.1f MB  %s\n", $1/1024, $2}'

echo
echo "Done."
