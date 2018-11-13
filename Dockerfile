# FROM node:8.11.3

# RUN mkdir -p /src/app

# WORKDIR /src/app

# COPY . /src/app

# RUN npm install

# RUN npm run db:seed

# EXPOSE 3000

# CMD [ "npm", "run", "start" ]


FROM node
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
EXPOSE 3000
CMD [ "node", "server/index.js" ]