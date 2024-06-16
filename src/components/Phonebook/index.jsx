import { Component } from "react";
import PropTypes from "prop-types";
import scss from "./Phonebook.module.scss";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";

export class Contacts extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ),
        filter: PropTypes.string,
        addContact: PropTypes.func,
        handleDelete: PropTypes.func,
    };

    constructor() {
        super();
        this.state = {
            contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            { id: 'id-5', name: 'Konrad', number: '2' },],
            filter: "",
        };
    }
    addContact = (contact) => {
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, contact],
        }));
    };

    handleDelete = (contactId) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(
                (contact) => contact.id !== contactId,
            ),
        }));
    };
    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value });
    };
    render() {
        const { filter, contacts } = this.state;
        return (
            <div className={scss.phonebookContainer}>
                <h1>Phonebook</h1>
                <ContactForm addContact={this.addContact} contacts={contacts} />

                <h2>Contacts</h2>
                <Filter filter={filter} onFilterChange={this.handleFilterChange} />
                <ContactList contacts={contacts}
                    filter={filter}
                    onDelete={this.handleDelete}
                />
            </div>
        )
    }
}



