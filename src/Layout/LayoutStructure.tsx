import React, { ComponentProps } from "react";

export default function LayoutStructure({ children }: ComponentProps<"div">) {
  return (
    <div className="flex justify-between flex-col h-screen border border-green-500">
      {children}
    </div>
  );
}
