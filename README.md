# health_simples

PG + Relationship

## Prod

`docker compose --env-file .env --file Docker/docker-compose.yml up --build --remove-orphans`

## Dev

`docker compose --env-file .env --file Docker/db/docker-compose.yml up --build --remove-orphans`
