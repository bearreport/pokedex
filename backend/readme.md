make bootstrap.sh executable (chmod +x bootstrap.sh)
./bootstrap.sh on command line to get the server running

use docker to create a db

# docker run --name pokedex \

# -p 5432:5432 \

# -e POSTGRES_DB=pokedex \

# -e POSTGRES_PASSWORD=AshKetchum\

# -d postgres

create env and download dependencies for pokescraper.py
run pokescraper (this populates the db with the default pokemon)
