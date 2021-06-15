# Introdução

Esse é um projeto de autenticação de usuarios utilizando o AdonisJs 5

<br />

# Configuração do Projeto

1. Instalar dependencias

```
npm install
```

2. Inicializar MYSQL via container:

```
docker-compose up -d --build
```

3. Copiar o arquivo .env.example alterando o nome da copia para .env (obs: não excluir o arquivo .env.example)

4. Configurar as variáveis de ambiente dentro do arquivo .env

5. rodar migratration

```
node ace migration:run
```

6. Executar o modo de desenvolvimento:

```
node ace serve --watch
```

7. Acessar aplicacação: http://localhost:3333

<br />
