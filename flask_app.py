
from flask import Flask

app = Flask(__name__)

from flask import render_template

@app.route('/', methods=['Get'])
def index():
    return render_template('main_page.html')

from datetime import datetime
now = datetime.now()
@app.route('/datetime', methods=['Get'])
def date():
    return '%s/%s/%s' % (now.month, now.day, now.year)