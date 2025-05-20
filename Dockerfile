# Étape 1 : Build Angular
FROM node:22 as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod --base-href=/

# Vérification du contenu du build (debug)
RUN echo "Contenu du dossier de build Angular :" && ls -lhr dist/snapface

# Étape 2 : Serveur Nginx
FROM nginx:alpine as production-stage


COPY --from=build-stage /app/dist/snapface/browser /usr/share/nginx/html

# Config Nginx personnalisée (routes Angular)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
