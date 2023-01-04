import pandas
import numpy as np
from matplotlib import pyplot as plot
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

def polinomial(x_name, y_name, datos, degree):
    numDegree = int(degree)
    x = datos[x_name].values.reshape(-1,1)
    y = datos[y_name].values.reshape(-1,1)
    poly = PolynomialFeatures(degree=numDegree, include_bias=False)
    x_poly = poly.fit_transform(x)
    model = LinearRegression()
    model.fit(x_poly,y)
    y_pred = model.predict(x_poly)
    plot.scatter(x,y)
    plot.plot(x,y_pred,color='r')
    plot.show()
    rmse = np.sqrt(mean_squared_error(y,y_pred))
    r2 = r2_score(y,y_pred)
    print ('RMSE: ' + str(rmse))
    print ('R2: ' + str(r2))
    plot.savefig('./static/polinomial.png')
    plot.close()
    return
