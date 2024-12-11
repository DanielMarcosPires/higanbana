import { Loader2 } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="flex gap-2 items-center">
      <Loader2 className="animate-spin" />
      <h2 className="text-2xl">Loading...</h2>
    </div>
  );
}
