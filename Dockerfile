FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm i typescript
RUN npm i @types/node
COPY . .
CMD [ "node", "dist/index.js", "dist/objeto.js"]
# docker build -t typescript . 