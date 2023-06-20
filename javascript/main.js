
function incioDePrograma () {

    
    alert('bienvenido a padel compras, tu lugar favorito para el deporte; comencemos....')
    
    function saludo(){
        let nombre = prompt ('ingresa tu nombre');
        let edad = parseInt (prompt ('ingresa tu edad'));
    if (edad >= 18) {
        alert( nombre +' tenemos paletas desde principiantes hasta profesionales, es cuestion de que encuentres la que mejor se adapte a vos. Podes utilizar todos los medios de pago.')
    } else if(edad <= 12) {
        alert( nombre +' te recomendamos paletas junior, de menor peso y muy buena calidad; para realizar las compras deberas llamar a un adulto.')
    } else {
        alert (nombre + ' te recomendamos las paletas con un peso promedio de entre 370 y 385 gramos, para realizar las compras deberas llamar a un adulto.')
    }
}
saludo();

let entrada = prompt('ingresa el nombre del producto que queres averiguar, para salir escribi esc. Actualmente contamos con paletas de: foam, eva y eva soft');
while (entrada !== 'esc') {
switch (entrada) {
    case 'foam':
    alert('El foam es una goma que tiene un tacto más blando, por lo que su juego se caracteriza por tener un gran control, muchísimo confort y una gran salida de bola. Aunque lo llevan muchas palas de nivel alto, este tipo de goma gusta mucho a los jugadores que empiezan porque le parece más fácil jugar con ellas, actualmente contamos con la raptor y la style')
let paletas = prompt ('¿queres saber mas sobre la raptor o sobre la stile? escribi el nombre')
    if (paletas === 'raptor') {
alert('con un peso posible de 360 a 400 gramos, la paleta raptor se caracteriza por un buen control de bola y punta diamante, orientado mayormente a la agresividad. Recomendado para jugadores de nivel alto')
    } else if (paletas === 'style') {
        alert('La paleta style se caracteriza por un gran control, con un peso variable de 340 a 410 gramos y un diseño redondo, es ideal para jugadores que inician en el deporte')
    } else alert('veamos otras opciones de paleta') 
        break;
    case 'eva': 
    alert('La goma eva en las palas de padel se trata de un material mucho más rígido, lo que dará lugar a un tacto más duro que el que nos proporciona la goma foam. actualmente contammos con la irish y la conqueror')
    let paletasEva = prompt ('¿queres saber mas sobre la irish o sobre la conqueror? escribi el nombre')
        if (paletasEva === 'irish') {
    alert('la paleta irish, de formato gota, permite un equilibrio entre potencia y control, aunque buscando siempre una mayor agresividad en el golpeo. es recomendada para personas de nivel medio.')
        } else if (paletasEva === 'conqueror') {
            alert('la paleta conqueror, de formato diamante, es reconocida por su gran potencia, buscando siempre definir el ultimo punto. Es recomendada para jugadores avanzados a profesionales.')
        } else alert('veamos otras opciones de paleta') 
        break;
    case 'eva soft': 
    alert('La goma eva soft en las paletas de padel se trata de un material híbrido entre el foam y la goma eva; dando un tacto mas blando que a la vez despide con buena potencia. actualmente contammos con la rocket y la dark')
    let paletasEvaSoft = prompt ('¿queres saber mas sobre la rocket o sobre la dark? escribi el nombre')
        if (paletasEvaSoft === 'rocket') {
    alert('la paleta rocket, con su formato gota y superficie rugosa, busca sumar un extra a la potencia del jugador, sin perder es tacto que puede caracterizar a las paletas de control')
        } else if (paletasEvaSoft === 'dark') {
            alert('el formato redondo junto a la superficie rugosa dan a la dark el equilibrio perfecto entre control y potencia, siendo muy polivalente. Recomendada para jugadores de todos los niveles.')
        } else alert('veamos otras opciones de paleta') 
    break;
    default: alert('la opcion seleccionada no corresponde a las mostradas en pantalla')
        break;
} entrada = prompt('ingresa el nombre del producto que queres averiguar, para salir escribi esc. Actualmente contamos con paletas de: foam, eva y eva soft')
}

}
incioDePrograma ();

