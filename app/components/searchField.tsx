"use client";

import React from "react";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";

function SearchField() {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center content-center md:flex-row gap-4 p-4 ">
        <InputGroup className="w-auto">
          <InputGroupInput placeholder="Location..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary">Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </>
  );
}

export default SearchField;
