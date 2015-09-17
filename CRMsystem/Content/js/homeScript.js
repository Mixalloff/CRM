$(document).ready(function () {

    $(".register-btn").click(function () {
        var registerModel = Object();
        registerModel.Email = $("#email").val();
        registerModel.CompanyName = $("#org_name").val();
        registerModel.Password = $("#password").val();
        registerModel.ConfirmPassword = $("#confirmPassword").val();
        registerModel.FIO = $("#fio").val();
        registerModel.Phone = $("#phone").val();

        $.post(
            "/Account/Register/",
            {
                model: registerModel,
                __RequestVerificationToken: $("input[name =__RequestVerificationToken]").val()
            }
            )
            .success(function () { alert("Успешное выполнение"); })
            .error(function () { alert("Ошибка выполнения"); })
            .complete(function (data) { alert(data); });
    });

});