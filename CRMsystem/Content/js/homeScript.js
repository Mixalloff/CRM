$(document).ready(function () {
    $(".register-btn").click(function () {
        var m = new Object();
        m.CompanyName = "asd";
        m.Email = "ss@ss.ru";
        m.Password = "@Qwerty9";
        m.ConfirmPassword = "@Qwerty9";

        $.post("/Account/Register",
            {
                model: m
            });
    });
});

