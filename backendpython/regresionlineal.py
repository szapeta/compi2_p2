import pandas
import numpy as np
from matplotlib import pyplot as plot
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score, accuracy_score

def lineal(x_name, y_name, datos):
    x = datos[x_name].values.reshape(-1,1)
    y = datos[y_name].values.reshape(-1,1)
    plot.scatter(x,y)
    model = LinearRegression()
    model.fit(x,y)
    y_pred =model.predict(x)
    plot.plot(x,y_pred,color='r')
    #plot.show()
    rmse = np.sqrt(mean_squared_error(y, y_pred))
    r2 = r2_score(y,y_pred)
    print('RMSE', rmse)
    print('R2', r2)
    plot.savefig('./static/lineal.png')
    plot.close()
    return


