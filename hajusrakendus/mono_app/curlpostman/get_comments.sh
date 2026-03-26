#!/bin/bash

POST_ID=$1

URL="http://localhost:5001/posts/$POST_ID/comments"

curl -s "$URL" | jq .
