# Usa a imagem estável do Node.js
FROM node:20

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de pacotes primeiro (otimiza o cache)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o resto do projeto
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 3000

# Altere de "npm run dev" para "npm run start"
CMD ["npm", "run", "start", "--", "--host"]