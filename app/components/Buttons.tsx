"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import { IoAddSharp, IoPencil, IoTrash } from "react-icons/io5";
import clsx from "clsx";

export function CreateButton() {
    return (
        <Link 
            href="/contacts/create"
            className="inline-flex items-center px-4 py-[9px] text-sm space-x-1 font-medium text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            <IoAddSharp size={20} />
            Create
        </Link>
    );
}

export function EditButton({id} : {id: string}) {
    return (
        <Link
            href={`/contacts/edit/${id}`}
            className="rounded-sm border p-1 hover:bg-gray-100"
        >
            <IoPencil size={20} />
        </Link>
    );
}

export function DeleteButton() {
    return (
        <button className="rounded-sm border p-1 hover:bg-gray-100">
            <IoTrash size={20} />
        </button>
    );
}

export function SubmitButton({label} : {label: string}) {
    const { pending } = useFormStatus();
    const className = clsx(
        "w-full px-5 py-3 rounded-lg shadow mt-8 text-white font-medium text-center bg-blue-700 hover:bg-blue-800 outline-none focus:ring focus:ring-blue-300 ease-in-out duration-300",
        {
            "opacity-50 cursor-progress": pending
        }
    );

    return (
        <button 
            type="submit" 
            className={className}
            disabled={pending}
        >
         {
            label === "Save" ? (<span>{pending ? "Saving..." : "Save"}</span>) : (<span>{pending ? "Updating..." : "Update"}</span>)
         }   
        </button>
    );
}