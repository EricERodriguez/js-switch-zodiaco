let month = window.prompt(`Ingrese el mes que nacio`);
let day =window.prompt(`Ingrese el dia`);

// month = month.toLowerCase();
month = parseInt(month);

console.log(month);


switch(month) {
    case 1:
        if( day >= 21) {
            document.write('<p> su signo es ACUARIO</p>');
            document.write('<img src="assets/acuario.jpg">');
        }else{
            document.write('<p> su signo es capricornio</p>');
            document.write('<img src="assets/capricornio.jpg">');
        }
        
        break;

    case 2:
        if( day >= 19) {
            document.write('<p> su signo es PISCIS</p>');
            document.write('<img src="assets/piscis.jpg">');
        }else{
            document.write('<p> su signo es ACUARIO</p>');
            document.write('<img src="assets/acuario.jpg">');
        }
        
        break;

    case 3:
        if( day >= 21) {
            document.write('<p> su signo es ARIES</p>');
            document.write('<img src="assets/aries.jpg">');
        }else{
            document.write('<p> su signo es PISCIS</p>');
            document.write('<img src="assets/piscis.jpg">');
        }
        
        break;

    case 4:
        if( day >= 21) {
            document.write('<p> su signo es TAURO</p>');
            document.write('<img src="assets/tauro.jpg">');
        }else{
            document.write('<p> su signo es ARIES</p>');
            document.write('<img src="assets/aries.jpg">');
        }
        
        break;

    case 5:
        if( day >= 21) {
            document.write('<p> su signo es GEMINIS</p>');
            document.write('<img src="assets/geminis.jpg">');
        }else{
            document.write('<p> su signo es TAURO</p>');
            document.write('<img src="assets/tauro.jpg">');
        }
        
        break;

    case 6:
        if( day >= 22) {
            document.write('<p> su signo es CANCER</p>');
            document.write('<img src="assets/cancer.jpg">');
        }else{
            document.write('<p> su signo es GEMINIS</p>');
            document.write('<img src="assets/geminis.jpg">');
        }
        
        break;

    case 7:
        if( day >= 23) {
            document.write('<p> su signo es LEO</p>');
            document.write('<img src="assets/leo.jpg">');
        }else{
            document.write('<p> su signo es CANCER</p>');
            document.write('<img src="assets/cancer.jpg">');
        }
        
        break;

    case 8:
        if( day >= 23) {
            document.write('<p> su signo es VIRGO</p>');
            document.write('<img src="assets/virgo.jpg">');
        }else{
            document.write('<p> su signo es LEO</p>');
            document.write('<img src="assets/leo.jpg">');
        }
        
        break;

    case 9:
        if( day >= 23) {
            document.write('<p> su signo es LIBRA</p>');
            document.write('<img src="assets/libra.jpg">');
        }else{
            document.write('<p> su signo es VIRGO</p>');
            document.write('<img src="assets/virgo.jpg">');
        }
        
        break;

    case 10:
        if( day >= 23) {
            document.write('<p> su signo es ESCORPIO</p>');
            document.write('<img src="assets/escorpio.jpg">');
        }else{
            document.write('<p> su signo es LIBRA</p>');
            document.write('<img src="assets/libra.jpg">');
        }
        
        break;

    case 11:
        if( day >= 23) {
            document.write('<p> su signo es Sagitario</p>');
            document.write('<img src="assets/acuario.jpg">');
        }else{
            document.write('<p> su signo es ESCORPIO</p>');
            document.write('<img src="assets/escorpio.jpg">');
        }
        
        break;

    case 12:
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