import requests

URL = "https://pokeapi.co/api/v2/pokemon?limit=151"

postURL = "http://127.0.0.1:5000/pokemons"

pokeList = requests.get(URL).json()
pokeList = pokeList['results']

for pokemon in pokeList:
	myPokemon = {'name': pokemon['name'], 'tattooed': False}
	print(myPokemon)
	x = requests.post(postURL, json = myPokemon)