$(document).ready(function() {
    $("#sum").bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    $("#period").bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    $("#rate").bind("change keyup input click", function() {
        if (this.value.match(/[^0-9\.]/g)) {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        }
    });
});
$("#calc").on("click", function() {
    let sum = $("#sum").val().trim();
    let period = $("#period").val().trim();
    let rate = $("#rate").val().trim();

    if ((sum === '') || (sum > 10000000) || (sum < 500000)) {
        $("#answer").text("Сумма кредита может иметь сумму от 500000 до 10000000");
        return false;
    } else if ((period === '') || (period < 10) || (period > 50)) {
        $("#answer").text("Срок кредита может быть от 10 до 50");
        return false;
    } else if ((rate === '') || (rate < 1) || (rate > 100)) {
        $("#answer").text("Годовая процентная ставка может быть от 1 до 100");
        return false;
    }
    $("#answer").text("Ваш ежемесячный платеж будет отображен здесь");

    $.ajax ({
        url: 'ajax/calc.php',
        type: 'post',
        cache: false,
        data: { 'sum': sum, 'period': period, 'rate': rate},
        dataType: 'html',
        beforeSend: function () {
            $("#calc").prop("disabled",true)
        },
        success: function (data)
        {
            $("#answer").text(data + " рублей составляет ваша ежемесячная выплата");
            $("#calc").prop("disabled",false);
        }
    });
});