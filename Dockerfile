FROM node:12.18-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY . .
RUN npm install --silent
EXPOSE 4000
CMD [ "npm", "start" ]