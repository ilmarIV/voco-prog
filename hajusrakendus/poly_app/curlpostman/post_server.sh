#!/bin/bash

URL="http://localhost:5000/posts"

TITLE=${1:-"Default title 2"}

curl -s -X POST "$URL" \
  -H "Content-Type: application/json" \
  -d "{\"title\": \"$TITLE\"}" | jq .
