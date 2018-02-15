
from flask import Flask

app = Flask(__name__)

from flask import render_template

@app.route('/', methods=['Get'])
def index():
    return render_template('main_page.html')