import { UpdateForm } from "@/app/components/UpdateForm";
import { getContactById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Update({ params }: { params: { id : string} }) {
    const id = params.id;
    const contact = await getContactById(id);

    if (!contact) {
        notFound();
    }

    return (
        <div className="max-w-screen-sm mx-auto mt-5">
            <section>
                <h1 className="text-3xl text-center font-medium">Update your data here!</h1>
            </section>
            <section>
                <UpdateForm contact={contact} />
            </section>
        </div>
    );
}