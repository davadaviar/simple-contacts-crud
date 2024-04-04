import { ContactForm } from "@/app/components/CreateForm";

export default function Create() {
    return (
        <div className="max-w-screen-sm mx-auto mt-5">
            <section>
                <h1 className="text-3xl text-center font-medium">Input your data here!</h1>
            </section>
            <section>
                <ContactForm />
            </section>
        </div>
    );
}