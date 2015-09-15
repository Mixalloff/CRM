var Contact = React.createClass({displayName: "Contact",

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
				React.createElement("div", null, 
				React.createElement("tr", null, 
				React.createElement("td", null, " ", React.createElement("input", {type: "checkbox", name: "contactCheckBox"})
			), 
				React.createElement("td", null, " ", this.state.contact, " "), 
				React.createElement("td", null, " ", this.state.organization, " "), 
				React.createElement("td", null, " ", this.state.email, " "), 
				React.createElement("td", null, " ", this.state.phone, " "), 
				React.createElement("td", null, " ", this.state.skype, " ")
				)
				)
				)
		}
});
var Contacts = React.createClass({displayName: "Contacts",
	render: function() {
		return(
			React.createElement("table", null, 
			React.createElement("thead", null, 
			React.createElement("th", null, " ", React.createElement("input", {type: "checkbox", name: "selectAllContacts"})
			), 
			React.createElement("th", null, "Контакт"), 
			React.createElement("th", null, "Организация"), 
			React.createElement("th", null, "Email"), 
			React.createElement("th", null, "Телефон"), 
			React.createElement("th", null, "Skype")
			), 
			React.createElement(Contact, null), 
			React.createElement(Contact, null), 
			React.createElement(Contact, null), 
			React.createElement(Contact, null), 
			React.createElement(Contact, null), 
			React.createElement(Contact, null), 
			React.createElement(Contact, null), 
			React.createElement(Contact, null)
			)
			)
	}
});
React.render(React.createElement(Contacts, null),document.getElementById("contacts"));
