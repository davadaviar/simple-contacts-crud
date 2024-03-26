import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrash } from "react-icons/io5";

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

export function EditButton() {
    return (
        <Link
            href="/contacts/edit"
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