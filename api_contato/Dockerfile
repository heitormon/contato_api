FROM node:12.13-alpine As development
WORKDIR usr/src/app
COPY ..
RUN npm install
CMD ["npm","run","migration:run"]
CMD ["npm","run","migration1:run"]
CMD ["npm","run","start"]