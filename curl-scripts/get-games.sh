TOKEN="BAhJIiU5ZWIyMTUzMGQ3OWIxYWZiNjQ2MDFlY2RlZTRjNmExYwY6BkVG--637bd824af8076753a69978fda4821c96688eddb"

curl --include --request GET "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "games": [
    {
      "id": "'"${1}"'",
      "cells": "'"${ARRAY}"'",
      "over": "'"true"'",
      "player_x": {
        "id": "'"${1}"'",
        "email": "'"${EMAIL}"'"
      },
      "player_o": {
        "id": "'"${3}"'",
        "email": "'"${EMAIL}"'"
      }
    }
    ]
  }'

echo
