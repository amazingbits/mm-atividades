## Descrição do projeto

Trata-se de um software onde duas atividades de teor psicológico serão realizadas. No fim, os dados obtidos dos resultados destas atividades deverão ser utilizados para pesquisa em tese de mestrado.

A seguir, a descrição de cada atividade:

### Stroop

Trata-se de uma sequência de palavras que aparecerá em tela. Cada palavra será de uma determinada cor. Cada cor corresponde a uma tecla no teclado. O objetivo é pressionar a tecla correspondente à cor da palavra. Os dados levados em consideração no fim da atividade são: tempo de resposta (tempo em segundos que o usuário levou do momento em que a palavra apareceu em tela até o momento em que a tecla foi pressionada) e a congruência, ou seja, se a cor correspondente à tecla pressionada é a mesma cor da palavra que apareceu em tela.

### Classificação afetiva

Também se trata de uma sequência de palavras que aparecerá em tela. Cada palavra aparecerá com cinco níveis de emoção: nada emocional/neutra, pouco emocional, moderadamente emocional, muito emocional e completamente emocional. O usuário deve escolher qual o seu nível de emoção para com aquela palavra. Os dados levados em consideração são: o nível emocional do usuário com cada palavra e a porcentagem emocional de cada palavra de acordo com todas as atividades de todos os usuários.

## Requisitos

<table style="width: 100%;">
  <tr>
    <th colspan="2" style="text-align: center;">Requisitos funcionais</th>
  </tr>
  <tr>
    <th>RF01</th>
    <td>Deve permitir o gerenciamento de usuários</td>
  </tr>
  <tr>
    <th>RF02</th>
    <td>Deve permitir a autenticação de um usuário administrador para telas específicas de controle</td>
  </tr>
  <tr>
    <th>RF03</th>
    <td>Deve permitir o gerenciamento das atividades realizadas</td>
  </tr>
</table>

<table style="width: 100%;">
  <tr>
    <th colspan="2" style="text-align: center;">Requisitos não funcionais</th>
  </tr>
  <tr>
    <th>RNF01</th>
    <td>Deve funcionar completamente offline</td>
  </tr>
  <tr>
    <th>RNF02</th>
    <td>Usar o IndexedDB do navegador como banco de dados</td>
  </tr>
</table>

## Regras de negócio

<table style="width: 100%;">
  <tr>
    <th>RN01</th>
    <td>Não deve ser permitido registrar dois ou mais usuários com o mesmo e-mail</td>
  </tr>
  <tr>
    <th>RN02</th>
    <td>Cada usuário pode fazer somente uma vez cada atividade</td>
  </tr>
</table>

## Schemas

### Usuário (user)
```json
{
  "id": 1,
  "username": "Carlos de Oliveira",
  "email": "carlos.oliveira@email.com",
  "created_at": "2025-03-01 10:00:00",
}
```

### Tipo de atividade (activity_type)
```json
{
  "id": 1,
  "description": "stroop",
  "created_at": "2025-03-01 10:00:00",
}
```

### Atividade - Stroop (activity)
```json
{
  "id": 1,
  "activity_type_id": 1,
  "user_id": 1,
  "response_time": 0.45,
  "correct": true,
  "word": "Cadeira",
  "color": "green",
  "created_at": "2025-03-01 10:00:00",
}
```

### Atividade - Class. Afetiva (activity)
```json
{
  "id": 1,
  "activity_type_id": 2,
  "user_id": 1,
  "word": "Cadeira",
  "emotion": 2,
  "created_at": "2025-03-01 10:00:00",
}
```

## Links

- <p><a href="https://www.figma.com/proto/kKhpOndxH8TRwPGHfdpNyt/Maria-Moog---Projeto?node-id=1-5&t=BSgCGcrSmpbppoWv-1" target="_blank">Protótipo no Figma</a></p>

- <p><a href="https://www.figma.com/design/kKhpOndxH8TRwPGHfdpNyt/Maria-Moog---Projeto?node-id=4-380" target="_blank">Telas no Figma</a></p>

## Demais anotações

- Como o projeto deve funcionar totalmente offline, sem depender de internet ou imports externos, irei utilizar como banco de dados o IndexedDB do navegador. Desta maneira, os dados ficarão salvos, porém somente no navegador em que o software estiver rodando.