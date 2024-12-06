/* eslint-disable @next/next/no-img-element */
import React, { ComponentProps } from "react";


export default function Banner({src,alt, ...props}:ComponentProps<"img">) {
  return (
    <div>
      <img src={src} alt={alt} {...props}/>
    </div>
  );
}
