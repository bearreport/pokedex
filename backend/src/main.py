from .entities.entity import Session, engine, Base
from .entities.pokemon import Pokemon

Base.metadata.create_all(engine)

session = Session()

pokemons = session.query(Pokemon).all()

if len(pokemons) == 0:
	pokemon = Pokemon('Pikachu', 'Pikachu description', 'init script')
	session.add(pokemon)
	session.commit()
	session.close()

	pokemons = session.query(Pokemon).all()

for pokemon in pokemons:
	print(pokemon.name)