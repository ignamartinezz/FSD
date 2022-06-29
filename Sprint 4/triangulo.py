
def triangulo(x):
    print("|\\")
    if x>2:
        for i in range(1,x-1):
            print("|" + i*" "+ "\\")
    print("|" + (x-1)*"_"+ "\\")

x = int(input("Ingresar dimension del triangulo: "))

triangulo(x)