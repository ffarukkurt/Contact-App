import { useState, useEffect } from "react";
import "./style.css"
import List from "../contacts/List";
import Form from "../contacts/Form";

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullname: "ahmet", phone_number: "123456" },
        { fullname: "Mehmet", phone_number: "7823456" },
        { fullname: "Nazlı ", phone_number: "987465" }
    ]);

    useEffect(() => {
        console.log(contacts);

    }, [contacts]);
    return (
        <div id="container">
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts