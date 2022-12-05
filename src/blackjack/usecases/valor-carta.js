
/**
 * Esta funcion calcula el valor de las cartas
 * @param {String} carta ejemplo: "7H"
 * @returns {Number} retorna el valor de una carta en particular
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };