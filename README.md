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

## Styled Components
É possível criar funções JS dentro das classes. O bloco de exemplo abaixo, seta a cor vermelha se a props error for true e a cor preta se a props error for false.

```
color: ${props => (props.error ? '#c00' : '#000')};
```

## ReactJs
P: Quando que decido se vou utilizar um componente estilizado ou um componente html?
R: Quando um componente possui mais de dois niveis de encadeamento, cria-se um novo elemento estilizado