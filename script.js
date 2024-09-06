function numeroALetrasEs(num) {
    const unidades = ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE'];
    const decenas = ['DIEZ', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA'];
    const centenas = ['CIEN', 'DOSCIENTOS', 'TRESCIENTOS', 'CUATROCIENTOS', 'QUINIENTOS', 'SEISCIENTOS', 'SETECIENTOS', 'OCHOCIENTOS', 'NOVECIENTOS'];

    if (num < 10) {
        return unidades[num];
    } else if (num < 100) {
        let decena = Math.floor(num / 10);
        let unidad = num % 10;
        return unidad === 0 ? decenas[decena - 1] : decenas[decena - 1] + ' Y ' + unidades[unidad];
    } else if (num < 1000) {
        let centena = Math.floor(num / 100);
        let resto = num % 100;
        if (resto === 0) {
            return centenas[centena - 1];
        } else {
            return centenas[centena - 1] + ' ' + numeroALetrasEs(resto);
        }
    } else {
        return 'Número fuera de rango';
    }
}

function numeroALetrasEn(num) {
    const unidades = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
    const decenas = ['TEN', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY'];
    const centenas = ['ONE HUNDRED', 'TWO HUNDRED', 'THREE HUNDRED', 'FOUR HUNDRED', 'FIVE HUNDRED', 'SIX HUNDRED', 'SEVEN HUNDRED', 'EIGHT HUNDRED', 'NINE HUNDRED'];

    if (num < 10) {
        return unidades[num];
    } else if (num < 100) {
        let decena = Math.floor(num / 10);
        let unidad = num % 10;
        return unidad === 0 ? decenas[decena - 1] : decenas[decena - 1] + '-' + unidades[unidad];
    } else if (num < 1000) {
        let centena = Math.floor(num / 100);
        let resto = num % 100;
        if (resto === 0) {
            return centenas[centena - 1];
        } else {
            return centenas[centena - 1] + ' ' + numeroALetrasEn(resto);
        }
    } else {
        return 'Number out of range';
    }
}

function traducirNumero(idioma) {
    const numero = parseInt(document.getElementById('numero').value);
    let resultado;

    if (idioma === 'es') {
        resultado = numeroALetrasEs(numero);
    }else if (idioma === 'en') {
        resultado = numeroALetrasEn(numero);
    }

    document.getElementById('modalResultado').innerText = resultado;
    
    var modal = new bootstrap.Modal(document.getElementById('resultadoModal'));
    modal.show();
}