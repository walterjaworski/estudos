# Estudos
Repositório para estudos separados por pastas

## ES6

### Map, Reduce e Filter

**Map** - Faz um mapeamento da array

**Reduce** - Consome todo o array e transforma em um único número

**Filter** - Filtra o array conforme alguma informação passada, por exemplo filtrar os números divisíveis por 2

### Rest e Spread

**Rest** - Pega o resto dos parâmetros. Exemplo:
```
function soma(a, b, ...params) { return params }
```
console.log(soma(1, 2, 3, 4, 5, 6)); retorna 3, 4, 5 e 6, que é o resto da array.

**Spread** - Pega todos os parâmetros. Exemplo:
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
```
a variável arr3 será 1, 2, 3, 4, 5, 6.

```
const usuario1 = {
  nome: 'Walter',
  idade: 37,
  empresa: 'Mirum',
};
const usuario2 = { ...usuario1, nome: 'José'};
```
Usuário2 tem o nome modificado, mas mantém as outras propriedades.