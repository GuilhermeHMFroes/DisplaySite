# Aplicação Flask

## Passos para configurar o banco de dados a ser implementado

Vá até o arquivo ```app.py``` e altere a seguinte linha:

```app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://teste:teste@localhost/music'```

Em ```mysql+pymysql``` é o banco de dados da máquina no caso esse sistema foi desenvolvido utilizando o banco de dados mysql-server.

Em ```teste:teste@localhost``` é o usuário e a senha do um usuário do seu banco de dados.

No seu SGBD crie um novo banco de dados chamado ```display```.



## Criando ambiente virtual para a aplicação

Acesse o diretório da aplicação e execute os seguintes comandos no terminal:

Para criar o ambiente virtual digite:

```
$ python3 -m venv .venv
```

## Iniciando aplicação pelo ambiente virtual

Para iniciar a aplicação execute os sequintes comandos:

```
$ source .venv/bin/activate
$ flask run
```

Agora basta acessar a aplicação através do navegador pelo endereço http://127.0.0.1:5000

## Informações relevantes

### Criação de novas páginas

Na hora da criação de alguma página ela deve ser criada dentro da pasta _**`templates`**_ com o nome da página. O conteúdo da página deve ficar entre as tags:

```
{% extends "main.html" %}

{% block content %}
```
e

```
{% endblock %}
```

como no arquivo index.html

### Pasta _**`static`**_

Dentro da pasta _**`static`**_ deve ficar as seguintes pastas:

+ Pasta _**`css`**_: Onde deve ficar todos os arquivos de css do site 
+ Pasta _**`js`**_: Onde deve ficar todos os arquivos de javascript do site
+ Pasta _**`images`**_: Onde deve ficar todas as imagens usadas no site, dentro da pasta _**`images`**_ tem uma pasta nomeada como _**`icons`**_ onde deve ficar os ícones usados no site

