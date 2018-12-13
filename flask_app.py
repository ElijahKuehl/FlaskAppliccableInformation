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
def process_inputs():
    pokemon = request.args["pokeName"]
    # get the value from Total in the HighStats dropdown.
    sortVal = request.args.get("HighStats")
    dex = "SELECT id, number, name, type1, CASE type2 WHEN '' THEN 'None' ELSE type2 END AS type2, total, hp, attack, defense, sp_attack, sp_defense, speed, generation, CASE legendary WHEN 'False' THEN 'Not' WHEN 'True' THEN 'Is' END AS legendary from Pokedex where name like '%%{}%%' "
    # for total stats high:
    print(str(sortVal))

    if sortVal == "Total":
        sort = "ORDER BY total DESC"
    else:
        sort = ""
    results = engine.execute((dex+sort+";").format(pokemon))
    return jsonify([(dict(row.items())) for row in results])


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