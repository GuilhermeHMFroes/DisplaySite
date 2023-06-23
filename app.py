from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/institucional')
def institucional():
    return render_template('institucional.html')

@app.route('/projetos')
def projetos():
    return render_template('projetos.html')

@app.route('/projetos/podcast')
def projetoPodcast():
    return render_template('projetoPodcast.html')
