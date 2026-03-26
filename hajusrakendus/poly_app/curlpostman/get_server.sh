#!/bin/bash

URL="http://localhost:5000/posts"

curl -s "$URL" | jq .
