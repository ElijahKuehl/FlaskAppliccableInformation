from flask import Flask, jsonify, render_template, request
from sqlalchemy import create_engine
app = Flask(__name__)

Pokedex = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
    username="ElijahKuehl",
    password="EndyStar9d9",
    hostname="ElijahKuehl.mysql.pythonanywhere-services.com",
    databasename="ElijahKuehl$Pokedex")

engine = create_engine(Pokedex)

@app.route('/', methods=['Get'])
def index():
    return render_template('main_page.html')

@app.route('/pokedex', methods=['Get'])
def index2():
    pokemon= request.args["pokeName"]
    results = engine.execute("select id, number, name, type1, CASE type2 WHEN '' THEN 'None' ELSE type2 END AS type2, total, hp, attack, defense, sp_attack, sp_defense, speed, generation, CASE legendary WHEN 'False' THEN 'Not' WHEN 'True' THEN 'Is' END AS legendary from Pokedex where name like '%%{}%%';".format(pokemon))
    return jsonify([(dict(row.items())) for row in results])





"""
#car data stuff

from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from car_data import get_cars_by

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template("demo_page.html")

@app.route('/carsearch', methods=['GET'])
def car_search():
    print "Entering method car_search"

    year = request.args["year"] if request.args.has_key("year") else None
    make = request.args["make"] if request.args.has_key("make") else None
    model = request.args["model"] if request.args.has_key("model") else None

    print "year: " + year + " make: " + make + " model: " + model

    result = {"message": "No results"}

    result["rows"] = get_cars_by(year, make, model)


    if result["rows"]:
        result["message"] = str(len(result["rows"])) + " results"

    return jsonify(result)

"""

"""
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
"""