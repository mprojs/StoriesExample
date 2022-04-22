FROM node:14-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
COPY . ./
RUN npm install --no-package-lock && npm run build

#STAGE 2: Run ###
FROM nginx:1.21.6-alpine

COPY ci/nginx.conf /etc/nginx/conf.d/default.conf
COPY ci/entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
COPY --from=build /app/dist /app/dist

CMD ["/app/entrypoint.sh"]
