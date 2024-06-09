import { Children, Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid'
import scss from "./Phonebook.module.scss";
import buttonScss from "../../globalStyles/buttonStyles.module.scss";

export const ButtonControl = ({ changeValue, label, style, name }) => (
    <button name={name} className={style} type="button" onClick={changeValue}>
        {label}
    </button>
);

ButtonControl.propTypes = {
    changeValue: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [],
            name: "",
            number: "",
            filter: "",
        };
    }

    handleChange = (ev) => {
        const { name, value } = ev.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.setState((prev) => {
            const list = [...prev.contacts];
            list.push({
                id: nanoid(),
                name: this.state.name,
                number: this.state.number,
            });
            return { contacts: list };
        });
    };

    render() {
        return (
            <div className={scss.phonebookContainer}>
                <h1>Phonebook</h1>
                <ContactForm />

                <h2>Contacts</h2>
                {/* <Filter ... />
            <ContactList ... /> */}
            </div>
        )
    }
}

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [],
            name: "",
            number: "",
            filter: "",
        };
    }

    handleChange = (ev) => {
        const { name, value } = ev.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.setState((prev) => {
            const list = [...prev.contacts];
            list.push({
                id: nanoid(),
                name: this.state.name,
                number: this.state.number,
            });
            return { contacts: list };
        });
    };

    render() {
        const nameId = nanoid();
        const numId = nanoid();
        const searchId = nanoid();
        return (
            <>
                <form className={scss.form} onSubmit={this.handleSubmit}>
                    <label htmlFor={nameId}>Name</label>
                    <input
                        id={nameId}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Za]+(([' -][a-zA-Za ])?[a-zA-Za]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor={numId}>Phone number</label>
                    <input
                        id={numId}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add contact</button>
                </form>
                <h1>Contacts</h1>
                <label htmlFor={searchId}>Find contact</label>
                <input
                    type="text"
                    id={searchId}
                    name="filter"
                    value={this.state.filter}
                    onChange={this.handleChange}
                />
                <ul className={scss.list}>
                    {this.state.contacts
                        .filter((el) =>
                            el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
                        )
                        .map((contact) => (
                            <li key={contact.id}>
                                {contact.name} - {contact.number}
                            </li>
                        ))}
                </ul>
            </>
        );
    }
}

class ContactList extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [],
            name: "",
            number: "",
            filter: "",
        };
    }

    handleChange = (ev) => {
        const { name, value } = ev.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.setState((prev) => {
            const list = [...prev.contacts];
            list.push({
                id: nanoid(),
                name: this.state.name,
                number: this.state.number,
            });
            return { contacts: list };
        });
    };

    render() {
        const nameId = nanoid();
        const numId = nanoid();
        const searchId = nanoid();
        return (
            <>

                <ul className={scss.list}>
                    {this.state.contacts
                        .filter((el) =>
                            el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
                        )
                        .map((contact) => (
                            <li key={contact.id}>
                                {contact.name} - {contact.number}
                            </li>
                        ))}
                </ul>
            </>
        );
    }
}