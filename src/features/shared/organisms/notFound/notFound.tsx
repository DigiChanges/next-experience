'use client';
import React from 'react';
import Error from 'next/error';
import style from "./notFound.module.css";

export const NotFoundComponent: React.FC = () =>{
    return(
        <div className={style.container}>
            <Error statusCode={404} />
            <a href="/auth/login">Volver a la página principal</a>
        </div>
    )
}
