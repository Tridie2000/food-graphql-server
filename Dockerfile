FROM node:12.18-alpine
ENV NODE_ENV=development
COPY ./ /usr/src/app
WORKDIR /usr/src/app
RUN npm install --silent
EXPOSE 4000
CMD [ "npm", "start" ]