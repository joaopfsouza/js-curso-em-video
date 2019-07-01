# Curso Em Video - Javascript



[Link do curso](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)


## Sumário

[Curso Em Video - Javascript](#curso-em-video---javascript)
- [Curso Em Video - Javascript](#Curso-Em-Video---Javascript)
  - [Sumário](#Sum%C3%A1rio)
- [Modulo A](#Modulo-A)
  - [Aula 03](#Aula-03)
  - [Aula 04](#Aula-04)
- [Módulo B](#M%C3%B3dulo-B)
  - [Aula 05](#Aula-05)
  - [Aula 06](#Aula-06)
  - [Aula 07](#Aula-07)
  - [Aula 08](#Aula-08)
- [Módulo C](#M%C3%B3dulo-C)
  - [Aula09](#Aula09)
  - [Aula 10](#Aula-10)
- [Módulo D](#M%C3%B3dulo-D)
  - [Aula 12](#Aula-12)



# Modulo A

## Aula 03

Referências
- [Guia Monzilla de Javascript](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript)
- [Guia Ecma de padronização](https://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)


## Aula 04


```js
//Pede para confirmar com Ok ou Cancel
window.confirm('msg')

//Mostra mensagem e solicita um valor de entrada
window.prompt('msg')
```



# Módulo B

## Aula 05

Diacas de nomeclatura:

- Case sensitive;
- Usar nome coerentes para as variáveis;
  
Todos números são considerados **number**
 
DataTypes:
  - number
    - infinity
    - NaN
  - string
  - boolean 
  - null
  - undefined
  - object
    - array
  - function

```js
//Mostra o tipo da variável
typeof var

```
## Aula 06

Converter tipos
```js
Number.parseInt(n)
Number.parseFloat(n)
Number(n)

String(n)
n.toString()

```

Formatando string
```js
var s = 'Javascript'
'Eu estou aprednendo' + s //concatenação
`Eu estou apredendendo ${s}` //usa template string - importante é crase para montar a string - placeholder

s.length //quantos caractes a string tem
s.toUpperCase() //Tudo para Maiúsculas
s.toLowerCase() //Tudo para Minúsculas
```

Formatando number
```js
n1.toFixed(2) //Fiza casa decimal
n1.toFixed(2).replace('.',',')  //Troca ponto por vírgula
n1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) //formata moeda
```

## Aula 07

Operadores

Aritméticos
```js
 5 + 2 = 7
 5 - 2 = 3
 5 * 2 = 10
 5 / 2 = 2.5
 5 % 2 = 1
 5 ** 2 = 25
 n **= 2
```
## Aula 08

```js
//Operador de igualdade restrita
5==='5' //false
5===5 //true

//Operador Ternário
teste?true:false

media>= 7.0 ? "Aprovado":"Reprovado"

```

# Módulo C

DOM - Document Object Model

## Aula09

**Ávore Dom**:

- window (Raiz - Janela do Navegador)
  - location (url, página anterios)
  - document
    - html(parent)
      - head(child html)
        - meta
        - title
      - body(child html)
        - h1
        - p
        - p
          - span/strong
        - div
  - history (histórico)
  - Outros


Selecionando elemento no DOM

- Marca
- ID
- Nome
- Classe
- Seletor


```js
//Marca
var p = document.getElementsByTagName('p')[0] //div,p,h1
p.innerHtml //Valor do que está escrito na tag

//ID
var d = document.getElementById('msg')

//Name
var d = window.document.getElementsByName('msg')[0]

//Classe
var d = window.document.getElementsByClassName('msg')[0]

//Seletor
var d = window.document.querySelector("div#msg")
var d = window.document.querySelector("span.msg")

     
```

## Aula 10

Eventos
- MouserEnter
- MouseMove
- MouseDown
- MouseUp
- click
- MouseOut

```js
//Evento Click chamado no html

  var area = document.getElementById('area')

        function clicar() {
            area.innerText = 'Clicou!!!'

        }

        function entrar() {


            area.innerText = 'Entrei!!!'

        }

        function sair() {


            area.innerText = 'Saido!!!'

        }
    </script>


    //=====================================================================
    //addEventList()

    <div id="area">

        Interaja....

    </div>


    <script>


        var area = document.getElementById('area')

        area.addEventListener('click',clicar)
        area.addEventListener('mouseenter', entrar)
        area.addEventListener('mouseout',sair)



        function clicar() {
            area.innerText = 'Clicou!!!'
            area.style.background = 'red'

        }

        function entrar() {


            area.innerText = 'Entrei!!!'
            area.style.background = '#11c26a'

        }

        function sair() {


            area.innerText = 'Saido!!!'
            area.style.background = '#11c26a'

        }
    </script>

```



Funcões

```js

fucntion action(param){

}

```

# Módulo D

## Aula 12

```js

switch(var){

  case var1:

    break;

  case var2:
    break;

  case var3:
  case var4
    break;
  

  default:



}


/*
 var agora = new Date()
 var diaSem = agora.getDay()
 
 0 - Domingo
 1 - Segunda
 2 - Terça
 3 - Quarta
 4 - Quinta
 5 - Sexta
 6 - Sábado
 
*/


```

