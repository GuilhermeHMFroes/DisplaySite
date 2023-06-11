from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/bate_papo')
def bate_papo():
    return render_template('bate_papo.html')

@app.route('/projetos')
def projetos():
    return render_template('projetos.html')