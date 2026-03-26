#!/bin/bash

POST_ID=$1

URL="http://localhost:5000/posts/$POST_ID/comments"

curl -s "$URL" | jq .
