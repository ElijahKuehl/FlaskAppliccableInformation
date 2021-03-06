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
def process_inputs():
    pokemon = request.args["pokeName"]
    highStats = request.args["highStats"]
    lowStats = request.args["lowStats"]
    generationFilt = request.args["generationFilt"]
    legendFilt = request.args["legendFilt"]
    typeFilt = request.args["typeFilt"]
    type2Filt = request.args["type2Filt"]
    teamBool = request.args["teamBool"]
    team = request.args["team"]
    nameFilt = ""
    query = ""

    if ' -' in pokemon:
        val = 0
        tempList = pokemon.split(' -')
        for x in tempList:
            if val != 0:
                nameFilt += "AND NOT name LIKE '%%" + pokemon.split(' -')[val] + "%%' "
            val += 1
        pokemon = pokemon.split(' -')[0]


    #Sort by Stats, highest first, if a random team wasnt requested.
    if highStats != "Default" and lowStats == "Default":
        sort = "ORDER BY "+ highStats +" DESC"
    #Sort by Stats, lowest first.
    elif lowStats != "Default" and highStats == "Default":
        sort = "ORDER BY "+ lowStats +" ASC"
    #Don't Sort
    else:
        sort = ""

    if teamBool == "1":
        if team == "rand":
            sort = "ORDER BY RAND() LIMIT 6"
        else:
            query = "SELECT * FROM Pokedex WHERE name IN ('" + team.replace("|","', '") + "') " + "ORDER BY FIELD(name, '"+ team.replace("|","', '") +"') LIMIT 6"


    #Filters a certian Generation
    if generationFilt != "Default":
        genFilt = "AND generation="+ generationFilt +" "
    #Don't filter Generation
    else:
        genFilt = ""

    #Filters if a pokemon is Legendary/Mythical or not.
    if legendFilt != "Default":
        legFilt = "AND legendary='"+legendFilt+"' "
    #Don't filter Legendary
    else:
        legFilt = ""

    #Filters based on a certian type.
    def types(var):
        if var == "None":
            return "AND (type1='' OR type2='') "
        elif var != "Default":
            return "AND (type1='"+var+"' OR type2='"+var+"') "
        #Don't filter Type
        else:
            return ""

    typFilt = types(typeFilt)
    typ2Filt = types(type2Filt)

    if query == "":
        # CASE legendary WHEN 'False' THEN 'Not' WHEN 'True' THEN 'Is' END AS
        query = "SELECT id, number, name, type1, CASE type2 WHEN '' THEN 'None' ELSE type2 END AS type2, total, hp, attack, defense, sp_attack, sp_defense, speed, generation, legendary FROM Pokedex WHERE name LIKE '%%{}%%' "+nameFilt+genFilt+legFilt+typFilt+typ2Filt+sort+";"
    results = engine.execute(query.format(pokemon))
    print(query)
    return jsonify([(dict(row.items())) for row in results])
