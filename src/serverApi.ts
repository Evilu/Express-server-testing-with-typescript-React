import {delay} from "./helpers";

export async function getAllContacts(): Promise<any> {
    return await fetch ("http://localhost:4000/contacts")
        .then((res)=>{
            return res.json();
    })
}

export async function updateContact(contact: Contact) {
    await delay(2500);
    // throw new Error(`Contact ${contact.id} does not exist`);
}

export interface Contact {
    id: number;
    name: string;
}

