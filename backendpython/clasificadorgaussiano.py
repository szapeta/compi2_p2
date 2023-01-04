import pandas
import urllib.request
import numpy as np
from matplotlib import pyplot as plot
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score, accuracy_score
from sklearn.naive_bayes import BernoulliNB, GaussianNB, MultinomialNB
from sklearn.model_selection import train_test_split

def Gauss(df, param, ini_pred, fin_pred, ini_predecip, num_state):
    p = float (param)
    #Variables Predictorias
    #x = df.iloc[:, 10:12]
    x = df.iloc[:, int(ini_pred):int(fin_pred)]
    print(x)
    #Variables a Predecip
    #y = df.iloc[:, 1]
    y = df.iloc[:, int(ini_predecip)]
    print(y)
    x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=p, random_state=int(num_state)) #17
    y_expect = y_test
    GausNB = GaussianNB()
    GausNB.fit (x_train, y_train)
    y_pred = GausNB.predict(x_test)
    print(accuracy_score (y_expect, y_pred))
    return accuracy_score (y_expect, y_pred)