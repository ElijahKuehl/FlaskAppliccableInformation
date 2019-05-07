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
    nameFilt = ""

    if ' -' in pokemon:
        val = 0
        tempList = pokemon.split(' -')
        for x in tempList:
            if val != 0:
                nameFilt += "AND NOT name LIKE '%%" + pokemon.split(' -')[val] + "%%' "
            val += 1
        pokemon = pokemon.split(' -')[0]

    if False == True:
        sort = ""
    #Sort by Stats, highest first.
    elif highStats == "HighTotal":
        sort = "ORDER BY total DESC"
    elif highStats == "HighHp":
        sort = "ORDER BY hp DESC"
    elif highStats == "HighAtk":
        sort = "ORDER BY attack DESC"
    elif highStats == "HighDef":
        sort = "ORDER BY defense DESC"
    elif highStats == "HighSAtk":
        sort = "ORDER BY sp_attack DESC"
    elif highStats == "HighSDef":
        sort = "ORDER BY sp_defense DESC"
    elif highStats == "HighSpd":
        sort = "ORDER BY Speed DESC"
    #Sort by Stats, lowest first.
    elif lowStats == "LowTotal":
        sort = "ORDER BY total ASC"
    elif lowStats == "LowHp":
        sort = "ORDER BY hp ASC"
    elif lowStats == "LowAtk":
        sort = "ORDER BY attack ASC"
    elif lowStats == "LowDef":
        sort = "ORDER BY defense ASC"
    elif lowStats == "LowSAtk":
        sort = "ORDER BY sp_attack ASC"
    elif lowStats == "LowSDef":
        sort = "ORDER BY sp_defense ASC"
    elif lowStats == "LowSpd":
        sort = "ORDER BY Speed ASC"
    #Don't Sort
    else:
        sort = ""

    #Filters a certian Generation
    if generationFilt == "1":
        genFilt = "AND generation=1 "
    elif generationFilt == "2":
        genFilt = "AND generation=2 "
    elif generationFilt == "3":
        genFilt = "AND generation=3 "
    elif generationFilt == "4":
        genFilt = "AND generation=4 "
    elif generationFilt == "5":
        genFilt = "AND generation=5 "
    elif generationFilt == "6":
        genFilt = "AND generation=6 "
    elif generationFilt == "7":
        genFilt = "AND generation=7 "
    elif generationFilt == "8":
        genFilt = "AND generation=8 "
    #Don't filter Generation
    else:
        genFilt = ""

    #Filters if a pokemon is Legendary/Mythical or not.
    if legendFilt == "Is":
        legFilt = "AND legendary='True' "
    elif legendFilt == "Not":
        legFilt = "AND legendary='False' "
    #Don't filter Legendary
    else:
        legFilt = ""

#TODO: Make a second Type menu.
    #Filters based on a certian type.
    if typeFilt == "Bug":
        typFilt = "AND (type1='Bug' OR type2='Bug') "
    elif typeFilt == "Dragon":
        typFilt = "AND (type1='Dragon' OR type2='Dragon') "
    elif typeFilt == "Ice":
        typFilt = "AND (type1='Ice' OR type2='Ice') "
    elif typeFilt == "Fighting":
        typFilt = "AND (type1='Fighting' OR type2='Fighting') "
    elif typeFilt == "Fire":
        typFilt = "AND (type1='Fire' OR type2='Fire') "
    elif typeFilt == "Flying":
        typFilt = "AND (type1='Flying' OR type2='Flying') "
    elif typeFilt == "Grass":
        typFilt = "AND (type1='Grass' OR type2='Grass') "
    elif typeFilt == "Ghost":
        typFilt = "AND (type1='Ghost' OR type2='Ghost') "
    elif typeFilt == "Ground":
        typFilt = "AND (type1='Ground' OR type2='Ground') "
    elif typeFilt == "Electric":
        typFilt = "AND (type1='Electric' OR type2='Electric') "
    elif typeFilt == "Normal":
        typFilt = "AND (type1='Normal' OR type2='Normal') "
    elif typeFilt == "Posion":
        typFilt = "AND (type1='Posion' OR type2='Posion') "
    elif typeFilt == "Psychic":
        typFilt = "AND (type1='Psychic' OR type2='Psychic') "
    elif typeFilt == "Rock":
        typFilt = "AND (type1='Rock' OR type2='Rock') "
    elif typeFilt == "Water":
        typFilt = "AND (type1='Water' OR type2='Water') "
    elif typeFilt == "Dark":
        typFilt = "AND (type1='Dark' OR type2='Dark') "
    elif typeFilt == "Steel":
        typFilt = "AND (type1='Steel' OR type2='Steel') "
    elif typeFilt == "Fairy":
        typFilt = "AND (type1='Fairy' OR type2='Fairy') "
    #Don't filter Type
    else:
        typFilt = ""

    results = engine.execute(("SELECT id, number, name, type1, CASE type2 WHEN '' THEN 'None' ELSE type2 END AS type2, total, hp, attack, defense, sp_attack, sp_defense, speed, generation, CASE legendary WHEN 'False' THEN 'Not' WHEN 'True' THEN 'Is' END AS legendary FROM Pokedex WHERE name LIKE '%%{}%%' "+nameFilt+genFilt+legFilt+typFilt+sort+";").format(pokemon))
    return jsonify([(dict(row.items())) for row in results])
