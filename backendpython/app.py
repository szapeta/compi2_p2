import pandas as pd
import numpy as np
from flask import config, jsonify, Flask, request
from http.server import HTTPServer, SimpleHTTPRequestHandler
import regresionlineal
import regresionpolinomial
import clasificadorgaussiano
import io
import base64
from PIL.Image import Image
from flask_cors import CORS, cross_origin
import csv

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plot
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score, accuracy_score

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def getHome():
    return jsonify('{"Sergio Felipe Zapeta" : "200715274"}')

@app.route('/regresionlineal',  methods=['POST'])
@cross_origin()
def postHome():

    dependiente_y = request.json["dependiente"]
    independiente_x = request.json["independiente"]
    name_csv = request.json["path_csv"]
    
    datos = pd.read_csv(name_csv)
    regresionlineal.lineal(dependiente_y, independiente_x, datos)
    
    with open("./static/lineal.png", "rb") as img_file:
        my_string = base64.b64encode(img_file.read())
    return my_string

@app.route('/regresionpolinomial',  methods=['POST'])
@cross_origin()
def postPolinomial():

    dependiente_y = request.json["dependiente"]
    independiente_x = request.json["independiente"]
    degree = request.json["degree"]
    name_csv = request.json["path_csv"]
    
    datos = pd.read_csv(name_csv)
    regresionpolinomial.polinomial(dependiente_y, independiente_x, datos, degree)
    
    with open("./static/polinomial.png", "rb") as img_file:
        my_string = base64.b64encode(img_file.read())
    return my_string

@app.route('/classgaussiano',  methods=['POST'])
@cross_origin()
def classgaussiano():
    param = request.json["param"]
    ini_pred = request.json["ini_pred"]
    fin_pred = request.json["fin_pred"]
    ini_predecip = request.json["ini_predecip"]
    num_state = request.json["num_state"]
    name_csv = request.json["path_csv"]
    
    df = pd.read_csv(name_csv)
    my_string = clasificadorgaussiano.Gauss(df, param, ini_pred, fin_pred, ini_predecip, num_state)
    
    return my_string      

@app.route('/uploadfile',  methods=['POST'])
@cross_origin()
def uploadcsv():
    f = request.files['archivo']
    f.save(f.filename)
    return "Hello"

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3001)