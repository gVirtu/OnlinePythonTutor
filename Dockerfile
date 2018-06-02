FROM node:8.1.2-alpine

# Set up the application directory
WORKDIR /opt/app

RUN apk add --no-cache --virtual .persistent-deps \
        curl \
        openssl \
        # for node-sass module
        make \
        gcc \
        g++ \
        python \
        python3 \
        py-pip \
    # Install node packages
    && npm install -g yarn \
    && yarn add webpack \
        webpack-dev-server \
        webpack-cli \
        gulp-cli \
        typescript \
        tsd

EXPOSE 8003

CMD ["npm", "-v"]
