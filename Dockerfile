FROM node:20

WORKDIR /app

# Copiar arquivos do projeto
COPY package.json package-lock.json ./
RUN npm install

# Copiar todos os arquivos, incluindo o start.sh
COPY . .

# Tornar o script start.sh executável
RUN chmod +x start.sh

# Expor porta
EXPOSE 3000

CMD ["./start.sh"]
