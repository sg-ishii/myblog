#!/bin/bash
echo "start make env file"
echo "GATSBY_API_KEY=$API_KEY" >> .env.production
echo "GATSBY_AUTH_DOMAIN=$AUTH_DOMAIN" >> .env.production
echo "GATSBY_PROJECT_ID=$PROJECT_ID" >> .env.production
echo "end make env file"
cat .env.production 