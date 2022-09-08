from sqlalchemy import Column, String

from .entity import Entity, Base


class Pokemon(Entity, Base):
    __tablename__ = 'pokemon'

    name = Column(String)
    description = Column(String)

    def __init__(self, name, description, created_by):
        Entity.__init__(self, created_by)
        self.name = name
        self.description = description