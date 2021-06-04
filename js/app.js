let month = window.prompt(`Ingrese el mes que nacio`);
let day =window.prompt(`Ingrese el dia`);

month = month.toLowerCase();

console.log(month);


switch(month) {
    case 'enero':
        if( day >= 21) {
            document.write('<p> su signo es ACUARIO</p>');
            document.write('<img src="assets/acuario.jpg">');
        }else{
            document.write('<p> su signo es capricornio</p>');
            document.write('<img src="assets/capricornio.jpg">');
        }
        
        break;

    case 'febrero':
        if( day >= 19) {
            document.write('<p> su signo es PISCIS</p>');
            document.write('<img src="assets/piscis.jpg">');
        }else{
            document.write('<p> su signo es ACUARIO</p>');
            document.write('<img src="assets/acuario.jpg">');
        }
        
        break;

    case 'marzo':
        if( day >= 21) {
            document.write('<p> su signo es ARIES</p>');
            document.write('<img src="assets/aries.jpg">');
        }else{
            document.write('<p> su signo es PISCIS</p>');
            document.write('<img src="assets/piscis.jpg">');
        }
        
        break;

    case 'abril':
        if( day >= 21) {
            document.write('<p> su signo es TAURO</p>');
            document.write('<img src="assets/tauro.jpg">');
        }else{
            document.write('<p> su signo es ARIES</p>');
            document.write('<img src="assets/aries.jpg">');
        }
        
        break;

    case 'mayo':
        if( day >= 21) {
            document.write('<p> su signo es GEMINIS</p>');
            document.write('<img src="assets/geminis.jpg">');
        }else{
            document.write('<p> su signo es TAURO</p>');
            document.write('<img src="assets/tauro.jpg">');
        }
        
        break;

    case 'junio':
        if( day >= 22) {
            document.write('<p> su signo es CANCER</p>');
            document.write('<img src="assets/cancer.jpg">');
        }else{
            document.write('<p> su signo es GEMINIS</p>');
            document.write('<img src="assets/geminis.jpg">');
        }
        
        break;

    case 'julio':
        if( day >= 23) {
            document.write('<p> su signo es LEO</p>');
            document.write('<img src="assets/leo.jpg">');
        }else{
            document.write('<p> su signo es CANCER</p>');
            document.write('<img src="assets/cancer.jpg">');
        }
        
        break;

    case 'agosto':
        if( day >= 23) {
            document.write('<p> su signo es VIRGO</p>');
            document.write('<img src="assets/virgo.jpg">');
        }else{
            document.write('<p> su signo es LEO</p>');
            document.write('<img src="assets/leo.jpg">');
        }
        
        break;

    case 'septiembre':
        if( day >= 23) {
            document.write('<p> su signo es LIBRA</p>');
            document.write('<img src="assets/libra.jpg">');
        }else{
            document.write('<p> su signo es VIRGO</p>');
            document.write('<img src="assets/virgo.jpg">');
        }
        
        break;

    case 'octubre':
        if( day >= 23) {
            document.write('<p> su signo es ESCORPIO</p>');
            document.write('<img src="assets/escorpio.jpg">');
        }else{
            document.write('<p> su signo es LIBRA</p>');
            document.write('<img src="assets/libra.jpg">');
        }
        
        break;

    case 'noviembre':
        if( day >= 23) {
            document.write('<p> su signo es Sagitario</p>');
            document.write('<img src="assets/acuario.jpg">');
        }else{
            document.write('<p> su signo es ESCORPIO</p>');
            document.write('<img src="assets/escorpio.jpg">');
        }
        
        break;

    case 'diciembre':
        if( day >= 22) {
            document.write('<p> su signo es CAPRICORNIO</p>');
            document.write('<img src="assets/capricornio.jpg">');
        }else{
            document.write('<p> su signo es Sagitario</p>');
            document.write('<img src="assets/acuario.jpg">');
        }
        
        break;

    default:
        document.write('Error')
}