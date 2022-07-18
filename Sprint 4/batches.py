import csv 
from datetime import datetime
from datetime import date

f = open("test.csv", "r")

campos = {
    "checkNumber": 0, 
    "bankCode": 0, 
    "sucursal": 0, 
    "origin": 0, 
    "destiny": 0, 
    "ammount": 0, 
    "originTime": 0, 
    "paymentTime": 0, 
    "dni": 0, 
    "status": 0, 
    "type": 0
    }

# campos= ["NroCheque","CodigoBanco","CodigoSucursal","NumeroCuentaOrigen","NumeroCuentaDestino","Valor","FechaOrigen","FechaPago","DNI","Estado"]

datos_csv = csv.reader(f)
data = []

for line in datos_csv: #append csv data in data = []
    data.append(line)

def dniSearch(dni): # Search for user by DNI, returns checks.
    dniList = []
    for user in data:
        if user["dni"] == dni:
            dniList.append(user)
    return dniList

def createCsv(user):
    """Crea un archivo .csv con parametro el usuario"""
    with open(campos["dni"],str(datetime.timestamp(datetime.now())) + ".csv", 'a') as output:
        for checks in user:
            for check in checks:
                output.write(str(check), ',')
            output.write("\n")

def printScreen(user):
    for checks in user:
        print( "NroCheque:" , checks[0],"CodigoBanco:" , checks[1],
        "CodigoSucursal:", checks[2]," NumeroCuentaOrigen:", checks[3],
        "NumeroCuentaDestino:", checks[4]," Valor:", checks[5],
        "Fecha Origen:", campos["originTime"] , "Fecha Pago:",campos["paymentTime"],
        "Dni:" , campos["dni"] , "Estado:", campos["status"])

def checkStatus(user, type):
    finalList = []
    for check in user:
        if check.campus["type"] == type:
            finalList.append(check)
    return finalList

def checkType(user, type):
    finalList = []
    for i in user:
        if i == campos["type"]:
            if campos["type"] == type:
                finalList.append(i)
    return finalList

def dateFilter(user, desde, hasta):
    finalList = []
    for check in user:
        if desde <= date.fromtimestamp(check.campos["originTime"]) <= hasta:
            finalList.append(check)
    return finalList

def main(): #MAIN DEL PROGRAMA
    # f=input("Ingrese nombre de archivo csv")
    user = dniSearch(input("Ingrese DNI sin comas ni puntos: "))
    # print(listausuario)
    salida = input("Ingrese parametro de salida: ")
    
    #Modifica segun el tipo del cheque
    listausuario = checkType(user, input("Imprimir cheque por tipo:\nEMITIDO o DEPOSITADO: "))
    
    #Modifica segun el estado del cheque
    if("SI" == input("Filtrar por estado de cheque? INSERTE SI o NO: ")):
        listausuario = checkStatus(listausuario,input("Imprimir cheque por estado:\nPENDIENTE, APROBADO, RECHAZADO: "))
    
    #Filtro de rango de fechas    
    if("SI"==input("Filtrar por rango de fecha? INSERTE SI o NO: ")):
        listausuario = dateFilter(listausuario,date.fromtimestamp(input("Ingrese primer fecha de filtrado en timestamp:")),date.fromtimestamp(input("Ingrese fecha de cierre de filtrado en timestamp:")))
    
    if(salida=="CSV"): #IMPRIME SEGUN LA SALIDA DETERMINADA ANTERIORMENTE
        createCsv(listausuario)
    elif(salida=="PANTALLA"):
        printScreen(listausuario)

print(campos)