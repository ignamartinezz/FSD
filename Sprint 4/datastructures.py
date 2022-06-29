#listas

frutas=['manzana', 'naranja', 'peras']

frutas.append('frutita')
print(frutas)


item='lol'
pos=1
frutas.insert(pos,item) #agrega item en pos
print(frutas)
frutas.append(item)

frutas.remove(item) #saca el primero que encuentra
print(frutas)


frutas.pop(pos) #retorna item
print(frutas.count(item)) #cuantas veces aparece


#frutas.reverse  da vuelta toda la lista
#frutas.copy ??

from collections import deque

queue= deque(["nacho","jorge","juan"])
print(queue)

queue.append("juancito")
queue.popleft() #nacho se va

print(queue)