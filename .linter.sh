#!/bin/bash
cd /home/kavia/workspace/code-generation/webtictactoe-49742-1752fe93/webtictactoe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

