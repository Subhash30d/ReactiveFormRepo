# stage 1

FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm ci
RUN npm run build

# stage 2

FROM nginx:latest
COPY --from=build /usr/local/app/dist/ReactiveFormsTemplate /usr/share/nginx/html
EXPOSE 80
