import React from "react";

interface Props {
    children: React.ReactNode
    when: unknown;
    fallback?: React.ReactNode;
}

export const Show = ({children, when, fallback}: Props) =>
{
    return (
        <div>
            {
                when ? children : fallback
            }
        </div>
    );
}