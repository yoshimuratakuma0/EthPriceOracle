FROM node:18.19.0

RUN npm install -g truffle

COPY / /dapp

WORKDIR /dapp

RUN truffle compile
