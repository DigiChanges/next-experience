import React from "react";


export interface ValueEventTarget extends EventTarget
{
  value: string
}

export interface ValueMouseEvent extends React.MouseEvent<HTMLElement>
{
  target: ValueEventTarget
}
