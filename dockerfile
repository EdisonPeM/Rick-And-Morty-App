FROM node:14.12

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "start" ]
