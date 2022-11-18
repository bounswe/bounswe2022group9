#!/bin/sh

docker-compose -f docker-compose-deploy.yml down
docker-compose -f docker-compose-deploy.yml build --no-cache
docker-compose -f docker-compose-deploy.yml up -d
