start: ## Start the docker containers
	@echo "Starting the docker containers"
	@docker-compose up
	@echo "Containers started - http://localhost:3000"

start-db: ## start just the database
	@docker-compose up -d db

stop: ## Stop Containers
	@docker-compose down

restart: stop start ## Restart Containers

start-bg:  ## Run containers in the background
	@docker-compose up -d

build: ## Build Containers
	@docker-compose build

migrations: ## Create DB migrations in the container, add the migration name after the command
	@dotnet ef migrations add $(filter-out $@,$(MAKECMDGOALS))

migrate: ## Run DB migrations in the container
	@docker-compose exec backend dotnet ef database update --verbose

build-backend: ## Run DB migrations in the container
	@docker-compose exec backend dotnet build

test-frontend: ## Run front end tests
	@docker-compose exec frontend yarn test

backend-bash: ## Run bash in the backend container
	@docker-compose exec backend /bin/bash