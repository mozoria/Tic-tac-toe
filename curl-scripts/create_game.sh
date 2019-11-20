TOKEN="BAhJIiU5ZWIyMTUzMGQ3OWIxYWZiNjQ2MDFlY2RlZTRjNmExYwY6BkVG--637bd824af8076753a69978fda4821c96688eddb"

curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
