"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const contactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().min(11),
});

export async function createContact(prevState: any, formData: FormData) {

    // Checking form validation
    const validatedForm = contactSchema.safeParse(Object.fromEntries(formData));

    if(!validatedForm.success) {
        return {
            Error: validatedForm.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.create({
            data: {
                name: validatedForm.data.name,
                phone: validatedForm.data.phone
            }
        })
        
    } catch (error) {
        return {
            message: "Failed to save contact"
        }
    }

    revalidatePath("/contacts");
    redirect("/contacts");
}