
function aumenta() {
    // Aumentar tamanho da fonte
    document.getElementById('font-size-increase').addEventListener('click', function () {
        var currentFontSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue(
            'font-size'));
        document.body.style.fontSize = (currentFontSize + 2) + 'px';

        // Selecionar a tabela pelo ID
        var table = document.getElementById('table');

        // Selecionar todos os elementos de texto da tabela
        var tableElements = table.querySelectorAll('th, td, caption');

        // Alterar o tamanho da fonte de cada elemento de texto da tabela
        for (var i = 0; i < tableElements.length; i++) {
            var fontSize = parseFloat(window.getComputedStyle(tableElements[i], null).getPropertyValue(
                'font-size'));
            tableElements[i].style.fontSize = (fontSize + 2) + 'px';
        }
    });
}

function diminui() {
    // Diminuir tamanho da fonte
    document.getElementById('font-size-decrease').addEventListener('click', function () {
        var currentFontSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue(
            'font-size'));
        document.body.style.fontSize = (currentFontSize - 2) + 'px';

        // Selecionar a tabela pelo ID
        var table = document.getElementById('table');

        // Selecionar todos os elementos de texto da tabela
        var tableElements = table.querySelectorAll('th, td, caption');

        // Alterar o tamanho da fonte de cada elemento de texto da tabela
        for (var i = 0; i < tableElements.length; i++) {
            var fontSize = parseFloat(window.getComputedStyle(tableElements[i], null).getPropertyValue(
                'font-size'));
            tableElements[i].style.fontSize = (fontSize - 2) + 'px';
        }
    });
}