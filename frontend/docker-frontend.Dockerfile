FROM node:12-alpine as build
WORKDIR /app
COPY frontend/package.json /app
COPY frontend/package-lock.json /app
RUN npm install
COPY . /app
RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]