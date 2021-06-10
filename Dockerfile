# FROM node:14.15.4-alpine3.12
# WORKDIR /usr/src/back
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . ./
# RUN apk add --no-cache tzdata
# RUN npm run compile