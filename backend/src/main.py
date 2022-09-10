from flask import Flask, jsonify, request
from flask_cors import CORS

from .entities.entity import Session, engine, Base
from .entities.pokemon import Pokemon, PokemonSchema
from .entities.pokepictures import Pokepictures, PokepicturesSchema

app = Flask(__name__)
CORS(app)

Base.metadata.create_all(engine)

session = Session()

pokemons = session.query(Pokemon).all()


for pokemon in pokemons:
	print(pokemon.name)

@app.route('/pokemons', methods=['GET'])
def get_pokemons():
	session = Session()
	pokemon_objects = session.query(Pokemon).all()

	pokemon_schema = PokemonSchema(many=True)
	pokemons = pokemon_schema.dump(pokemon_objects)

	session.close()
	return jsonify(pokemons)

@app.route('/pokemons/<id>', methods=['GET'])
def get_pokemon(id):
	session = Session()
	pokemon_object = session.query(Pokemon).get(id)

	pokemon_schema = PokemonSchema()
	pokemon = pokemon_schema.dump(pokemon_object)

	session.close()
	return jsonify(pokemon)

@app.route('/pokepictures/<id>', methods=['GET'])
def get_pokepictures(id):
	session = Session()
	pokepictures_object = session.query(Pokepictures).filter_by(pokeid=id).all()

	pokepictures_schema = PokepicturesSchema()
	pokepictures = pokepictures_schema.dump(pokepictures_object)

	session.close()
	return jsonify(pokepictures)	

@app.route('/pokemons', methods=['POST'])
def add_pokemon():
	posted_pokemon = request.get_json()

	pokemon = Pokemon(**posted_pokemon, created_by="HTTP post request")

	session = Session()
	session.add(pokemon)
	session.commit()

	new_pokemon = PokemonSchema().dump(pokemon)
	session.close()
	return jsonify(new_pokemon), 201


#get all pokepictures
@app.route('/pokepictures', methods=['GET'])
def get_all_pokepictures():
	session = Session()
	pokepictures_objects = session.query(Pokepictures).all()

	pokepictures_schema = PokepicturesSchema(many=True)
	pokepictures = pokepictures_schema.dump(pokepictures_objects)

	session.close()
	return jsonify(pokepictures)

#add a new pokepicture, linked by the foreignkey pokeid
@app.route('/pokepictures', methods=['POST'])
def add_pokepicture():
	posted_pokepicture = request.get_json()

	pokepicture = Pokepictures(**posted_pokepicture, created_by="HTTP post request")

	session = Session()
	session.add(pokepicture)
	session.commit()

	new_pokepicture = PokepicturesSchema().dump(pokepicture)
	session.close()
	return jsonify(new_pokepicture), 201