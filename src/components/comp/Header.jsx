import React from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="h-14 p-2 px-3  flex items-center justify-between shadow-sm">
      <Nav />
      <SearchBar />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>PP</AvatarFallback>
      </Avatar>
    </header>
  );
}
