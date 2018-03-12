class Polygon(object):
    def __init__(self, w, h):
        self.width = w
        self.height = h

    def calcArea(self):
        return self.width * self.height

a = 54
b = 10
p = Polygon(a,b)
c = p.calcArea()
