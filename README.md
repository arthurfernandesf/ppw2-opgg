# ppw2-opgg

end points
1. /api/rank
2. /api/level

Parametros 
string nome = nome do invocador 
##

Libs
1. express como servidor http  
2. axios para realizar requests http  
3. parser para converter e filtrar o html
##

# Exemplo de api Rank
URL: http://localhost:8080/api/rank?nome=qiyanazedzed1
Retorno:
[
  {
    "name":"qiyanazedzed1",
    "rank":"1",
    "tier":"C1",
    "timestamp":1625188797738
  }
]

# Exemplo de api level
URL: http://localhost:8080/api/level?nome=Carinhosa
Retorno:
[
  {
    "name":"Carinhosa",
    "rank":"lv  1096",
    "tier":"D1",
    "timestamp":1625188957566
  }
]
 
