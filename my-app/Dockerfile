FROM node:14.17.3-buster 

WORKDIR /app

COPY package.json package.json
COPY package-lock.json packag-lock.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]