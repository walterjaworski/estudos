# Estudos
Repositório para estudos separados por pastas.

## ES6

### Map, Reduce e Filter

**Map** - Faz um mapeamento da array.

**Reduce** - Consome todo o array e transforma em um único número.

**Filter** - Filtra o array conforme alguma informação passada, por exemplo filtrar os números divisíveis por 2.

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

No Styled Components do React Native, não funciona o encadeamento de classes como no ReactJs, exemplo:
```
export const Container = styled.Div`
  background: #eee;

  button {
    border: 10px solid #c00;
  }
`;
```

Outro ponto é que não é permitido a criação de um css global quando se utiliza Styled Components no React Native, a única maneira de fazer algo semelhante seria criar uma pasta (para organizar os arquivos) e definir um estilo para algum elemento e importar nos componentes que desejo aplicá-los.

## ReactJs
P: Quando que decido se vou utilizar um componente estilizado ou um componente html?

R: Quando um componente possui mais de dois niveis de encadeamento, cria-se um novo elemento estilizado!

## React Native
Depois de rodado o emulador de ios ou android pela primeira vez, não é necessário rodar
```react-native run-ios```
ou
```react-native run-android```
novamente pois o emulador já foi criado em sua máquina, basta rodar o comando
```react-native start```
que o emulador será reiniciado

Dois comandos que podem ajudar caso esteja dando erro no emulador:
```react-native start --reset-cache``` ou ```react-native run-ios``` ou ```react-native run-android``` dependendo do seu emulador.

## Arquitetura Flux
Toda action deve possuir um "**type**" informando qual o tipo de ação, deve ser único;
O estado do Redux é o único ponto de verdade, ou seja, não pode manter pedaços em diversos componentes;
Não podemos mutar o estado do Redux sem uma action;
Actions e Reducers não são assíncronas, ou seja, são funções puras;
Qualquer lógica síncrona para regras de negócios deve ficar no reducer e nunca na action;
**Nem toda aplicação precisa de redux, inicie sem ele e sinta a necessidade depois;**
