function sendSpaceship(spaceship: { pilot: string; copilot?: string }) {
  // o "?" faz com que o parametro copilot seja opcional
}
sendSpaceship({ pilot: "Han Solo", copilot: "Chewbacca" });
sendSpaceship({ pilot: "Luke" });

let input: unknown; //tipo desconhecido
input = "Teste";
input = 20;
input = [];

let valor: any; // desabilita o Typescript
valor = "Teste";
valor = 20;
input = [];

let text: string;
text = valor;

function verification(test) {
  if (test) {
  } else {
    let _check: never; //indica que o valor está errado. Não permite que a variavel receba um valor
    let a = _check;
    a = "";
    return _check;
  }
}
