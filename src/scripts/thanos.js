import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
    try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        const survivedContacts = JSON.parse(contacts).filter(() => Math.random() > 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(survivedContacts));
        console.log('Thanos has snapped his fingers...');
    } catch (error) {
        console.error(`Error executing Thanos: ${error.message}`);
    }
};

await thanos();
