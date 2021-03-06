# base image 
FROM node:10-alpine

USER root

# create folder working
RUN mkdir /app

# set working directory
WORKDIR /app

LABEL   com.midominio.maintainer="micorreo@midominio.com"
LABEL   com.midominio.description="Image with web app developed in angular"
LABEL   com.midominio.vendor=midominio.com
LABEL   com.midominio.copyright=midominio.com
LABEL   com.midominio.version=1.0.0
LABEL   com.midominio.project=miproject


# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install


# add app
COPY . /app

# expose the port in the container
EXPOSE 4200

# start app
RUN ng serve 