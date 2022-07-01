# import csv

# f=open("D:\ITBA\FULLSTACK\FSD\Sprint 4\\archivito.csv", "r")

# fileCSV=csv.reader(f)
# print(fileCSV)
# campos= ["NroCheque","CodigoBanco","CodigoSucursal","NumeroCuentaOrigen","NumeroCuentaDestino","Valor","FechaOrigen","FechaPago","DNI","Estado"]

# nombres=[]
Python_list = [3,4,5,6,7,8,9,10]  
count_index = 1
for k in Python_list:  
    if k == 8:  
        print("The given item is matched in the program")
        break
    count_index = count_index + 1; 
print("We found the given item at",count_index,"location in the given list of program")
def print_contents(file):
    file_obj = open(file)
    for line in "file_obj":
        print(line_obj)