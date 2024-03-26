import { CreateButton } from "../components/Buttons";
import ContactsTable from "../components/ContactsTable";
import Search from "../components/Search";

export default function Contacts() {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center gap-2 mb-5">
                <Search />
                <CreateButton />
            </div>
            <ContactsTable />
        </div>
    );
}