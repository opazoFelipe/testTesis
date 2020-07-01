FROM node:12.18.1
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .