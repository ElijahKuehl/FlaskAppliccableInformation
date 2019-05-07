from flask import Flask, jsonify, render_template, request
from sqlalchemy import create_engine
app = Flask(__name__)

Pokedex = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
    username="ElijahKuehl",
    password="DarkusSQL9d9",
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
