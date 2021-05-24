from flask import Flask,jsonify
from flask_cors import CORS
from keplergl import KeplerGl
import pandas as pd
import os
import json

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/data',methods=['GET'])
def getData():
    req_json=df.to_json(orient="split")
    req_dict = json.loads(req_json)
    req_dict.pop('index',None)
    req_dict.pop('columns',None)
    req_dict["fields"] = [{'name':"date",'format':'YYYY-M-D','type':'timestamp'},{'name':"hour",'format':'H:m:s','type':'timestamp'},{'name':"lat",'format':'','type':'real'},{'name':"long",'format':'','type':'tral'},{'name':"signal",'format':'','type':'integer'},{'name':"network",'format':'','type':'string'},{'name':"operator",'format':'','type':'string'},{'name':"status",'format':'','type':'integer'},{'name':"description",'format':'','type':'string'},{'name':"net",'format':'','type':'string'},{'name':"speed",'format':'','type':'real'},{'name':"satellites",'format':'','type':'real'},{'name':"precission",'format':'','type':'real'},{'name':"provider",'format':'','type':'string'},{'name':"activity",'format':'','type':'string'},{'name':"downloadSpeed",'format':'','type':'real'},{'name':"uploadSpeed",'format':'','type':'real'},{'name':"postal_code",'format':'','type':'real'},{'name':"town_name",'format':'','type':'string'},{'name':"position_geom",'format':'','type':'geo'}]
    req_dict["rows"] = req_dict.pop("data")
    # print(req_json)
    return jsonify(req_dict)
    # return map_1._repr_html_()

if __name__ == '__main__':
    print("Loading dataset....")
    df = pd.read_csv(os.path.join(os.path.dirname(__file__),'feb03.csv'), sep='\t',error_bad_lines=False, nrows=59999)
    print("df.info ",df.info())
    print("Loaded dataset")
    # map_1 = KeplerGl()
    # map_1.add_data(data=df, name='CellCoverage')
    app.run(debug=True)
