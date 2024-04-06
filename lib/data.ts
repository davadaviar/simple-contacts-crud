import { prisma } from "./prisma";

export async function getContacts() {
    try {

        const contacts = await prisma.contact.findMany();
        return contacts;
        
    } catch (error) {
        throw new Error("Failed to fetch contacts data");
    }
}

export async function getContactById(id: string) {
    try {
        
        const contact = await prisma.contact.findUnique({
            where: {
                id: id
            }
        });
        return contact;
        
    } catch (error) {
        throw new Error("Failed to fetch contact data");
    }
}