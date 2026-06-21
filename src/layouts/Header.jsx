import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar.jsx";

export default function Header() {
    return (
        <header className="flex h-20 items-center justify-between border-b bg-white px-8">
            <div>
                <h2 className="text-xl font-semibold text-neutral-950">
                    Dashboard
                </h2>
                <p className="text-sm text-neutral-500">
                    Welcome back, let&apos;s manage today&apos;s projects.
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden items-center gap-2 rounded-xl border bg-neutral-50 px-3 py-2 md:flex">
                    <Search size={18} className="text-neutral-400" />
                    <input
                        placeholder="Search..."
                        className="w-56 bg-transparent text-sm outline-none placeholder:text-neutral-400"
                    />
                </div>

                <button className="rounded-full border p-2 text-neutral-500 hover:bg-neutral-50">
                    <Bell size={18} />
                </button>

                <Avatar>
                    <AvatarFallback>HS</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
}