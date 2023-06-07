from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sobre')
def about():
    return render_template('about.html')


@app.route('/bate_papo')
def bate_papo():
    return render_template('bate_papo.html')