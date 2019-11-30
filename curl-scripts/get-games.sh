TOKEN="BAhJIiUxNTI3ZDUzZTZiMTY4OGM5ODZlZGI1NzZlN2FkOGEyOAY6BkVG--a23f09f49a5cd1e546d52a16d064f7ad8ab71dc2"

curl --include --request GET "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
