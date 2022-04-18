console.clear();
const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

//Todo el texto original en un string
const stringCesar =
  "¿Txh wh sduhfh xpd dyhpwxud? ¡Ihñlflgdghv! Ghvfxeulvwh hñ fliudgr fruuhfwr sdud ñhhu hvwh ohpvdmh. Hvwh wlsr gh shpvdolhpwr ñdwhudñ wh vhud oxb xwlñ sdud pxhvwur suóalor hpfxhpwur. Vhud xp hpfxhpwur wrwdñohpwh dwlslfr hp hñ txh uhvrñyhuhorv xp mxhjr hpwuh wrgrv b wrgdv. Xpd hvshflh gh “ghvdilr gh hvfdsh yluwxdñ”. Shur, dsduwh gh dsñlfdu shpvdolhpwr ñdwhudñ, ghehudv dsñlfdu xp srfr gh mdydvfulsw, kwoñ b fvv sdud ññhjdu dñ ilpdñ. Wh ghmdorv xpd slvwd txh wh vhud oxb xwlñ hp hñ mxhjr: ¿txh iruod wlhph ñd udlc ghñ duerñ? ¿Hvwáv ñlvwr/d sdud xpd dyhpwxud?";

//Ahora el stringCesar separado caracter por caracter y dentro de un arreglo con split
const arrayCesar = stringCesar.toUpperCase().split("");
//Muestro en consola el resultado de lo anterior
console.log(arrayCesar);

//Funcion que evalua un caracter retrocediendo 3 posiciones,
//luego le asigno su posición dentro del alfabeto y
//retorno la letra del alfabeto decifrada
const decifrar = (val) => {
  //si el indexOf es 3 puedo retroceder 3 posiciones en el alfabeto
  if (alfabeto.indexOf(val) >= 3) {
    return alfabeto[alfabeto.indexOf(val) - 3];
  }
  //si el indexOf es -1 significa que el caracter no está en el alfabeto,
  //asi que retorno val para mantener el caracter original
  if (alfabeto.indexOf(val) === -1) {
    return val;
  }
  //Si indexOf es igual a cero significa que la letra a decifrar esta en la primera posicion del alfabeto
  //asi que debo retroceder 3 posiciones pero desde el final del alfabeto usando length
  if (alfabeto.indexOf(val) === 0) {
    return alfabeto[alfabeto.length - 3];
  }
  //Si indexOf es igual a 1 significa que la letra a decifrar esta en la segunda posicion del alfabeto
  //asi que debo retroceder 2 posiciones pero desde el final del alfabeto usando length
  if (alfabeto.indexOf(val) === 1) {
    return alfabeto[alfabeto.length - 2];
  }
  //Si indexOf es igual a 2 significa que la letra a decifrar esta en la tercera posicion del alfabeto
  //asi que debo retroceder 1 posicion pero desde el final del alfabeto usando length
  if (alfabeto.indexOf(val) === 2) {
    return alfabeto[alfabeto.length - 1];
  }
};

//Utilizo ahora la funcion map, y defino que por cada letra mapeada invoque la funcion decifrar
//como map retorna un arreglo evito crearlo yo mismo y hacer push por cada letra
//ya que map retorna un nuevo arreglo
const arrayTextoDecifrado = arrayCesar.map((letra) => decifrar(letra));
console.log(arrayTextoDecifrado.join(""));
