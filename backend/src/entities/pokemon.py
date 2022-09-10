from sqlalchemy import Column, String, Boolean
from marshmallow import Schema, fields

from .entity import Entity, Base


class Pokemon(Entity, Base):
    __tablename__ = 'pokemon'

    name = Column(String)
    tattooed = Column(Boolean)

    def __init__(self, name, tattooed, created_by):
        Entity.__init__(self, created_by)
        self.name = name
        self.tattooed = tattooed

class PokemonSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    tattooed = fields.Boolean()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()