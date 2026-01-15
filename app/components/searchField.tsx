"use client";

import React from "react";
import { SearchIcon } from "lucide-react";
import FilterOption from "@/components/ui/filter-option";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import Image from "next/image";

function searchField() {
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

        {/* <div className="flex flex-row">
          <FilterOption
            title="Specialties"
            options={[
              { value: "anxiety", label: "Anxiety" },
              { value: "depression", label: "Depression" },
              { value: "stress", label: "Stress" },
            ]}
            onChange={(vals) => console.log("filters:", vals)}
          />

          <FilterOption
            title="Insurance"
            options={[
              { value: "blue cross", label: "Blue Cross" },
              { value: "aetna", label: "Aetna" },
            ]}
            onChange={(vals) => console.log("filters:", vals)}
          />
        </div> */}
      </div>
    </>
  );
}

export default searchField;
