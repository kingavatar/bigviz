from flask import Flask
from keplergl import KeplerGl
import pandas as pd
import os


app = Flask(__name__)


@app.route('/')
def index():
    return map_1._repr_html_()

if __name__ == '__main__':
    print("Loading dataset....")
    df = pd.read_csv(os.path.join(os.path.dirname(__file__),'feb03.csv'), sep='\t',error_bad_lines=False, nrows=999999)
    print(df.info())
    print("Loaded dataset")
    map_1 = KeplerGl()
    map_1.add_data(data=df, name='CellCoverage')
    app.run(debug=True)
