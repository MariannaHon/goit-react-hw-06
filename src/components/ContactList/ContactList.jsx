import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from './ContactList.module.css'


const ContactList = () => {

    const contacts = useSelector(selectContacts);

    const filter = useSelector(selectNameFilter);

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={css.list}>
            {visibleContacts.map(contact => (
                <li className={css.item} key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))}
        </ul>
    );
}

export default ContactList;