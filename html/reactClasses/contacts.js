var Contact = React.createClass({

	getInitialState: function() {
		return({
			contact: "Орлов А.А",
			organization: "ИП Орлов А.А",
			email: "orlov@gmail.com",
			phone: "+7 (910) 999 88 77",
			skype: "orlov"	
		})
	},
		render: function() {
			return (
				<div>
				<tr>
				<td> <input type="checkbox" name="contactCheckBox"/>
			</td>
				<td> {this.state.contact} </td>
				<td> {this.state.organization} </td>
				<td> {this.state.email} </td>
				<td> {this.state.phone} </td>
				<td> {this.state.skype} </td>
				</tr>
				</div>
				)
		}
});
var Contacts = React.createClass({
	render: function() {
		return(
			<table>
			<thead>
			<th> <input type="checkbox" name="selectAllContacts"/>
			</th>
			<th>Контакт</th>
			<th>Организация</th>
			<th>Email</th>
			<th>Телефон</th>
			<th>Skype</th>
			</thead>
			<Contact/>
			<Contact/>
			<Contact/>
			<Contact/>
			<Contact/>
			<Contact/>
			<Contact/>
			<Contact/>
			</table>
			)
	}
});
React.render(<Contacts/>,document.getElementById("contacts"));