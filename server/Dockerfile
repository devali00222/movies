FROM node
WORKDIR /app
COPY package*.json ./
COPY .env ./
RUN npm install
WORKDIR /app/dist
COPY dist /app/dist
EXPOSE 3500
CMD ["npm", "start"]