# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:alpine AS builder
# Set working directory
WORKDIR /app
ADD package*.json /app
RUN yarn install
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN yarn build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# ARG ENV
copy ./nginx.production.conf /etc/nginx/conf.d/default.conf
#copy ./nginx.conf /etc/nginx/conf.d/default.conf  2种
# COPY install.sh install.sh
# RUN chmod u+r+x ./install.sh
# RUN ./install.sh
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]