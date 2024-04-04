"use client";

import { createContact } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./Buttons";

export function ContactForm() {
    const [state, formAction] = useFormState(createContact, null);

    return (
        <form action={formAction} className="mt-5">
            <div className="mb-5">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Full Name
                </label>
                <input 
                    type="text"
                    name="name"
                    id="name" 
                    className="w-full py-2 pl-4 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Fill your full name here..."
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500 mt-2 text-sm">{state?.Error?.name}</p>
                </div>
            </div>
            <div className="mb-5">
                <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Phone Number
                </label>
                <input 
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full py-2 pl-4 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Fill your phone number here..." 
                />
                <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500 mt-2 text-sm">{state?.Error?.phone}</p>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500 mt-2 text-sm">{state?.message}</p>
                </div>
            </div>
            <SubmitButton label="Save" />
        </form>
    );
}