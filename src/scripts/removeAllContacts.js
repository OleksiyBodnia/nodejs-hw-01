import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, '[]');
        console.log("All contacts were removed");
    } catch {
        console.log("Something went wrong!");
    }
};

await removeAllContacts();
