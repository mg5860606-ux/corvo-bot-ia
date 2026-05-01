#!/bin/sh
pm2 start corvo.js --name "corvo-bot" --watch --ignore-watch "node_modules session database database.json"
pm2 logs corvo-bot