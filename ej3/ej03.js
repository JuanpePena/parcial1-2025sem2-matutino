/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
  const numeroSegmentado = [
    {
      numero: 0,
      a: true,
      b: true,
      c: true,
      d: true,
      e: true,
      f: true,
      g: false
    },
    {numero: 1, segmento: {a: false,b: true,c: true,d: false,e: false,f: false,g: false}},
    {numero: 2, segmento: {a: true,b: true,c: false,d: true,e: true,f: false,g: true}},
    {numero: 3, segmento: {a: true, b: true, c: true, d: true, e: false, f: false, g: true}},
    {numero: 4, segmento: {a: false, b: true, c: true, d: false, e: false, f: true, g: true}},
    {numero: 5, segmento: {a: true, b: false, c: true, d: true, e: false, f: true, g: true}},
    {numero: 6, segmento: {a: true, b: false, c: true, d: true, e: true, f: true, g: true}},
    {numero: 7, segmento: {a: true, b: true, c: true, d: false, e: false, f: false, g: false}},
    {numero: 8, segmento: {a: true, b: true, c: true, d: true, e: true, f: true, g: true}},
    {numero: 9, segmento: {a: true, b: true, c: true, d: true, e: false, f: true, g: true}}
  ]
  document.querySelectorAll(".segment").forEach(s => s.classList.add("hiden"))
  const numero = Math.floor(Math.random() * 10)
  console.log(numero)
  const segmento = numeroSegmentado.find(s => s.numero === numero).segmento
  if (segmento.a) {document.getElementById("seg-a").classList.remove("hiden")}
  if (segmento.b) {document.getElementById("seg-b").classList.remove("hiden")}
  if (segmento.c) {document.getElementById("seg-c").classList.remove("hiden")}
  if (segmento.d) {document.getElementById("seg-d").classList.remove("hiden")}
  if (segmento.e) {document.getElementById("seg-e").classList.remove("hiden")}
  if (segmento.f) {document.getElementById("seg-f").classList.remove("hiden")}
  if (segmento.g) {document.getElementById("seg-g").classList.remove("hiden")}
}
