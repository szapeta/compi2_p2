import pandas
import numpy as np
import urllib
from matplotlib import pyplot as plot
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score, accuracy_score
from sklearn.naive_bayes import BernoulliNB, GaussianNB, MultinomialNB
from sklearn.model_selection import train_test_split

def prediction():
    url = 'https://archive.ics.uci.edu/ml/machine-learning-databases/spambase/spambase.data'
    raw_data = urllib.request.urlopen(url)
    dataset = np.loadtxt(raw_data, delimiter=',')
    x = dataset[:,0:48]
    y = dataset[:, -1]
    x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.33,random_state=17)
    BernNB = BernoulliNB(binarize=True)
    BernNB.fit(x_train, y_train)
    y_expect = y_test
    y_pred = BernNB.predict(x_test)
    print(accuracy_score(y_expect, y_pred))
    GausNB = GaussianNB()
    GausNB.fit(x_train, y_train)
    y_pred = GausNB.predict(x_test)
    print(accuracy_score(y_expect, y_pred))