var User = React.createClass({
	getInitialState:function() {
		return({
			name:"Иванов Иван",
			post: "Директор"
		})
	},
	render: function() {
		return(
			<div className="col-md-2">
			<div className="profile-border">
			<div className="profile">
			<i className="fa fa-user"></i>
			</div>
			<div className="user-name"> 
			{this.state.name}
			</div>
			<div className="post">
			{this.state.post}
			</div>
			</div>
			<div className="pass">
			<input type="password" placeholder="Пароль"/>
			<i className="fa fa-lock"></i>
			</div>
			</div>
			);
	}
});
var Users = React.createClass({

	render: function() {
		return(
			<div className="col-md-offset-1 col-md-10 department" >
			<div className="name-department">
			{this.props.dep}
			</div>

			<div className="profiles">
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			</div>
			</div>
			);
	}
});


var GroupsUsers = React.createClass({
	render: function() {
		return(
	<div>	
			<Users dep="Администрация"/>
			<Users dep="Отдел продаж"/>
			<Users dep="Отдел маркетинга"/>	
			<Users dep="Отдел разработки"/>	
	</div>	
			);
	}
});
React.render(<GroupsUsers/>, document.getElementById('groups-users'));