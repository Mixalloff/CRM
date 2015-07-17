var User = React.createClass({displayName: "User",
	getInitialState:function() {
		return({
			name:"Иванов Иван",
			post: "Директор"
		})
	},
	render: function() {
		return(
				React.createElement("div", {className: "col-md-2"}, 
						React.createElement("div", {className: "profile-border"}, 
							React.createElement("div", {className: "profile"}, 
								React.createElement("i", {className: "fa fa-user"})
							), 
							React.createElement("div", {className: "user-name"}, 
								this.state.name
							), 
							React.createElement("div", {className: "post"}, 
									this.state.post
							)
						), 
						React.createElement("div", {className: "pass"}, 
							React.createElement("input", {type: "password", placeholder: "Пароль"}), 
							React.createElement("i", {className: "fa fa-lock"})
						)
					)
			);
	}
});
var Users = React.createClass({displayName: "Users",
	getInitialState: function() {
		return({
			department: "Администрация"
		})
	},
	render: function() {
		return(
		React.createElement("div", null, 
		React.createElement("div", {className: "name-department"}, 
					this.state.department
		), 

		React.createElement("div", {className: "profiles"}, 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null)
		)
		)
		);
	}
});
React.render(React.createElement(Users, null), document.getElementById('user-groups'));
