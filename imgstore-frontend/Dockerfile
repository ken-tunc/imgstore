ARG BUILD_DIR=/app

# build
FROM node:14 as build
ARG BUILD_DIR

WORKDIR ${BUILD_DIR}
COPY package.json ${BUILD_DIR}
COPY yarn.lock ${BUILD_DIR}
COPY src ${BUILD_DIR}/src/
COPY public ${BUILD_DIR}/public/
RUN yarn install && yarn run build

# deploy
FROM nginx:1.19-alpine
ARG BUILD_DIR
COPY --from=build ${BUILD_DIR}/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
