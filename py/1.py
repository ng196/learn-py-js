class Brawler:
    game = "brawl stars"  # Class attribute
    
    def __init__(self, name, trio="mean", health="100", attack=1):  # Constructor
        self.__name = name
        self.__health = health
        self.__attack = attack
        self.__trio = trio

    # Getter and Setter for name
    def getname(self):
        return self.__name

    def setname(self, name=None):
        if name:
            self.__name = name

    # Getter and Setter for health
    def gethealth(self):
        return self.__health

    def sethealth(self, health=None):
        if health:
            self.__health = health

    # Getter and Setter for trio
    def gettrio(self):
        return self.__trio

    def settrio(self, trio=None):
        if trio:
            self.__trio = trio

    # Getter and Setter for attack
    def getattack(self):
        return self.__attack

    def setattack(self, attack=None):
        if attack:
            self.__attack = attack

    # Class method
    @classmethod
    def whichgame(cls):
        return cls.game

    # Static method
    @staticmethod
    def gamecompany():
        return "supercell"

    # Private method
    def __takendamage(self):
        print(f"{self.__name} has taken damage!")

    # Public method to access private method
    def isdamaged(self):
        self.__takendamage()
