IF NOT EXIST docker-compose.yml (
    cd api
)

REM docker compose down && docker compose pull && docker compose up
docker compose up


