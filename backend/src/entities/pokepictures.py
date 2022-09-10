from sqlalchemy import Column, String, ForeignKey, Integer
from marshmallow import Schema, fields

from .entity import Entity, Base

class Pokepictures(Entity, Base):
	__tablename__ = 'pokepictures'

	pokeid = Column(Integer, ForeignKey('pokemon.id'))
	imageUrl = Column(String)

	def __init__(self, name, description, created_by):
		Entity.__init__(self, created_by)
		self.pokeid = pokeid
		self.imageUrl = imageUrl

class PokepicturesSchema(Schema):
	id = fields.Number()
	pokeid = fields.Number()
	imageUrl = fields.Str()
	created_at = fields.DateTime()
	updated_at = fields.DateTime()
	last_updated_by = fields.Str()