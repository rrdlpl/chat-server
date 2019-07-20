FROM node:8-alpine as builder

RUN mkdir -p /app
RUN mkdir -p /app/bin
RUN mkdir -p /app/src
RUN mkdir -p /app/node_modules
RUN mkdir -p /app/config
RUN mkdir -p /app/public
RUN mkdir -p /app/scripts

COPY ./package.json /app/package.json
COPY ./tsconfig.json /app/tsconfig.json
COPY ./src/ /app/src/
COPY ./public/ /app/public/


WORKDIR /app


RUN npm install
RUN npm run build
FROM node:8-alpine

RUN npm install -g serve

COPY --from=builder /app/build /build
CMD ["serve", "-l", "3000", "-s", "build"]
