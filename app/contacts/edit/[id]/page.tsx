import { UpdateForm } from "@/app/components/UpdateForm";

export default function Update() {
    return (
        <div className="max-w-screen-sm mx-auto mt-5">
            <section>
                <h1 className="text-3xl text-center font-medium">Input your data here!</h1>
            </section>
            <section>
                <UpdateForm />
            </section>
        </div>
    );
}