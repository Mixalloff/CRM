var RegisterForm = React.createClass({
    displayName: "RegisterForm",

    handleLogin: function (e) {
        $.ajax({
            type: "post",
            url: "/Account/Register",
            data: $(".reg_form").serializeArray(),
            success: function (data) {              
                if (data.constructor === Array)
                {
                    alertify.error("Ошибки в форме");
                    var s = "";               
                        for (var i = 0; i < data.length; i++) {
                            s += data[i] + '<br\>';
                        }
                        alertify.alert(s);
                }           
                else {
                    alertify.success("Регистрация прошла успешно")
                    window.location.href = data;
                }                       
            },
            errors: function (data) {
                alertify.error('Ошибка на сервере')
            }
        });
        e.preventDefault();
    },
   
    render: function () {
        return (

        React.createElement("div", { className: "modal-dialog" },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("button", { className: "close", type: "button", "data-dismiss": "modal" }, "×"),
                    React.createElement("h4", null, "Регистрация компании")
                ),
                React.createElement("div", { className: "modal-header" },
                    React.createElement("div", { className: "fluid-container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("form", { className: "col-md-12 reg_form", name: "model", onSubmit: this.handleLogin },

                                React.createElement("input", { name: "CompanyName", type: "text", className: "form-control", placeholder: "Название организации" }),
                                React.createElement("input", { name: "FIO", type: "text", className: "form-control", placeholder: "Фамилия Имя Отчество" }),
                                React.createElement("input", { name: "Email", type: "email", className: "form-control", placeholder: "Email" }),
                                React.createElement("input", { name: "Phone", type: "tel", className: "form-control", placeholder: "Телефон"}),
                                React.createElement("input", { name: "Password", type: "password", className: "form-control", placeholder: "Пароль" }),
                                React.createElement("input", { name: "ConfirmPassword", type: "password", className: "form-control", placeholder: "Повторите пароль" }),

                                React.createElement("input", { type: "submit", className: "col-md-12 btn btn-primary register-btn", value: "Регистрация" })
                            )
                        )
                    )
                ),
                React.createElement("div", { className: "modal-footer" },
                    React.createElement("button", { className: "btn btn-danger", type: "button", "data-dismiss": "modal" }, "Отмена")
                )
            )
        )

            )
    }

});

React.render(React.createElement(RegisterForm, null), document.getElementById('register'));