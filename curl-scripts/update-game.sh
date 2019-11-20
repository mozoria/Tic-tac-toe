TOKEN="BAhJIiU5ZWIyMTUzMGQ3OWIxYWZiNjQ2MDFlY2RlZTRjNmExYwY6BkVG--637bd824af8076753a69978fda4821c96688eddb" ID="2891" INDEX="8" VALUE="o" OVER="false"

curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
