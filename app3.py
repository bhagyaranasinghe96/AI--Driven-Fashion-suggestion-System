from flask import Flask, request
import pandas as pd
import pickle
import json


app = Flask(__name__)

# ------------------------Quize predict Senesh----------------------
@app.route('/cloth', methods=['GET', 'POST'])
def quzesselect():

    v1 = int(request.args.get('v1'))
    v2 = int(request.args.get('v2'))
    v3 = int(request.args.get('v3'))
    v4 = int(request.args.get('v4'))
    v5 = int(request.args.get('v5'))
    v6 = int(request.args.get('v6'))
    v7 = int(request.args.get('v7'))
  	

    df = pd.read_csv("cloth - cloth.csv")
    df.head()

    inputs = df.drop('SuitableClothImageName',axis='columns')
    target = df['SuitableClothImageName']

    from sklearn.preprocessing import LabelEncoder

    # le_Height = LabelEncoder()
    # le_Weight = LabelEncoder()
    # le_Age = LabelEncoder()
    le_Gender = LabelEncoder()
    le_FavoriteColor = LabelEncoder()
    le_FunctionType = LabelEncoder()
    le_FunctionTime = LabelEncoder()

    # inputs['Height_n'] = le_Height.fit_transform(inputs['Height'])
    # inputs['Weight_n'] = le_Weight.fit_transform(inputs['Weight'])
    # inputs['Age_n'] = le_Age.fit_transform(inputs['Age'])
    inputs['Gender_n'] = le_Gender.fit_transform(inputs['Gender'])
    inputs['FavoriteColor_n'] = le_FavoriteColor.fit_transform(inputs['FavoriteColor'])
    inputs['FunctionType_n'] = le_FunctionType.fit_transform(inputs['FunctionType'])
    inputs['FunctionTime_n'] = le_FunctionTime.fit_transform(inputs['FunctionTime'])
    inputs.head()

    inputs_n = inputs.drop(['Gender','FavoriteColor','FunctionType','FunctionTime'],axis='columns')
    # inputs_n

    from sklearn import tree

    model = tree.DecisionTreeClassifier()

    model.fit(inputs_n,target)

    model.score(inputs_n, target)

    output = model.predict([[v1,v2,v3,v4,v5,v6,v7]])
    # output = "test"
    result = {"prediction": output.tolist()}
    json_data = json.dumps(result)
    # return output
    # return 'Player Status: {}'.format(output)
    # return (format(output))
    return json_data
    # print(output)
    
if __name__ == '__main__':

  app.run(debug=True, port=5000)