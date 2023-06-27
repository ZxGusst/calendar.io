document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    var monthElement = document.querySelector('.month');
    var yearElement = document.querySelector('.year');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');

    // Função para atualizar o calendário
    function updateCalendar(month, year) {
        monthElement.textContent = getMonthName(month);
        yearElement.textContent = year;

        var daysContainer = document.querySelector('.days');
        daysContainer.innerHTML = '';

        var days = getDaysInMonth(month, year);
        var firstDayIndex = new Date(year, month, 1).getDay();

        var dayIndex = 1;
        for (var i = 0; i < 5; i++) {
            var row = document.createElement('tr');
            for (var j = 0; j < 7; j++) {
                var cell = document.createElement('td');
                if (i === 0 && j < firstDayIndex) {
                    // Células vazias antes do primeiro dia do mês
                    cell.classList.add('empty');
                } else if (dayIndex <= days) {
                    // Células com os dias do mês
                    cell.textContent = dayIndex;
                    dayIndex++;
                } else {
                    // Células vazias após o último dia do mês
                    cell.classList.add('empty');
                }
                row.appendChild(cell);
            }
            daysContainer.appendChild(row);
        }
    }

    // Função para obter o nome do mês
    function getMonthName(month) {
        var monthNames = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];

        return monthNames[month];
    }

    // Função para obter o número de dias em um mês
    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    // Atualizar calendário com o mês e ano atual
    updateCalendar(currentMonth, currentYear);

    // Evento do botão anterior
    prevBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar(currentMonth, currentYear);
    });

    // Evento do botão próximo
    nextBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar(currentMonth, currentYear);
    });

    // Evento do menu lateral
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var selectedMonth = parseInt(this.getAttribute('data-month'));
            updateCalendar(selectedMonth, currentYear);
        });
    });
});


