/*i• Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres
• Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)
• Luego de resolverlo, pensar en
aprovechar métodos y discutir
como representar la información
33*/

let A: number = Number(prompt(" ingrese numero de alumnos"));
let notas1: number[] = new Array(A);
let notas2: number[] = new Array(A);
let notas3: number[] = new Array(A);
let nombres: string[] = new Array(A);
let i = 0;
for (let i = 0; i < A; i++) {
  nombres[i] = String(prompt("ingrese nombre del alumno"));
  notas1[i] = Number(prompt(" ingrese nota Nª1"));
  notas2[i] = Number(prompt(" ingrese nota Nª2"));
  notas3[i] = Number(prompt(" ingrese nota Nª3"));

  let suma = 0;
  let promedio = 0;

  suma = notas1[i] + notas2[i] + notas3[i];
  promedio = suma / 3;

  console.log(
    "el promedio del estudiante" + "",
    "" + nombres[i] + "",
    "" + "es" + "",
    "" + promedio
  );
}
