FROM node:19-alpine3.15

WORKDIR /usr/back

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]
