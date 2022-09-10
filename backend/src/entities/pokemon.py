from sqlalchemy import Column, String
from marshmallow import Schema, fields

from .entity import Entity, Base


class Pokemon(Entity, Base):
    __tablename__ = 'pokemon'

    name = Column(String)

    def __init__(self, name, created_by):
        Entity.__init__(self, created_by)
        self.name = name

class PokemonSchema(Schema):
	id = fields.Number()
	name = fields.Str()
	created_at = fields.DateTime()
	updated_at = fields.DateTime()
	last_updated_by = fields.Str()