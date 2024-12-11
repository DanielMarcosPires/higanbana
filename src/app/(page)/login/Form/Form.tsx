import React from "react";


export default function Form({ children }: React.ComponentProps<"form">) {
  
  return (
    <form
      className="flex w-full items-center justify-center gap-3 flex-col py-2"
      action=""
    >
      {children}
    </form>
  );
}
