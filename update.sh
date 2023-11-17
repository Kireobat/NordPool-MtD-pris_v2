#!/bin/bash

# Git fetch
git fetch

# Git reset
git reset --hard origin/main

# NPM install
npm install

# NPM run build
npm run build

# Run index.js
node build/index.js