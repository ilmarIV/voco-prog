#!/bin/bash

POST_ID=$1
CONTENT=$2

URL="http://localhost:5001/posts/$POST_ID/comments"

curl -s -X POST "$URL" \
  -H "Content-Type: application/json" \
  -d "{\"content\": \"$CONTENT\"}" | jq .
