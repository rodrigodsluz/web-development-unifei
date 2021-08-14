BLACK        := $(shell tput -Txterm setaf 0)
RED          := $(shell tput -Txterm setaf 1)
GREEN        := $(shell tput -Txterm setaf 2)
YELLOW       := $(shell tput -Txterm setaf 3)
LIGHTPURPLE  := $(shell tput -Txterm setaf 4)
PURPLE       := $(shell tput -Txterm setaf 5)
BLUE         := $(shell tput -Txterm setaf 6)
WHITE        := $(shell tput -Txterm setaf 7)

RESET := $(shell tput -Txterm sgr0)

up:
	docker-compose up

build:
	docker-compose build

stop:
	docker-compose stop

down:
	docker-compose down
	
sh\:frontend:
	docker-compose exec frontend sh
	
sh\:backend:
	docker-compose exec backend sh

help:
	@echo ""
	@echo "${RED}BÁSICO${RESET}"
	@echo "${YELLOW}make up${RESET} 	${LIGHTPURPLE}|${RESET} Iniciar os containers"
	@echo "${YELLOW}make build${RESET} 	${LIGHTPURPLE}|${RESET} Criar as imagens, containers e volumes"
	@echo "${YELLOW}make stop${RESET} 	${LIGHTPURPLE}|${RESET} Parar a execução de todos os containers"
	@echo "${YELLOW}make down${RESET} 	${LIGHTPURPLE}|${RESET} Parar e remover todos as imagens, containers, volumes criados"
	@echo ""
	@echo "${RED}AVANÇADO: ADENTRANDO OS CONTAINERS${RESET}"
	@echo "${YELLOW}make sh:frontend${RESET}${LIGHTPURPLE}|${RESET} Acessa o container do frontend"
	@echo "${YELLOW}make sh:backend${RESET} ${LIGHTPURPLE}|${RESET} Acessa o container do backend (API)"
	@echo ""