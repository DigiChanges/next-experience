'use client';
import React from 'react';
import style from "./menuSetting.module.css";
import Link from "next/link";

export const MenuSetting: React.FC = () => {
  return (
      <div className={style.container}>
          <div className={style.containerUrl}>
              <p>Home</p><span>></span><Link href={'/dashboard'}>Dashboard</Link><span>></span><p>Setting</p>
          </div>
          <div className={style.containerSetting}>
              <h1 data-aos="fade-down" data-aos-duration="1500">
                  Configuración de Cuenta
              </h1>
              <h2>Personaliza tu cuenta según tus preferencias y necesidades.</h2>
              <div className={style.containerList}>
                  <div className={style.tab}>
                      <input type="radio" name="tabs" id="t1" defaultChecked={true}/>
                      <label htmlFor="t1">Cambiar contraseña</label>
                      <div className={style.listRight}>
                          <h3>Cambie su contraseña</h3>
                          <p>
                              Star Wars is an epic science fiction franchise created by George Lucas. The story unfolds
                              in a galaxy
                              far,
                              far away and focuses on the battle between good and evil, represented by the Rebel
                              Alliance and the
                              Galactic Empire, respectively.
                              The main characters include Jedi, warriors trained in the use of the Force, a mystical
                              energy that
                              grants them special abilities.
                          </p>
                      </div>
                  </div>
                  <div className={style.tab}>
                      <input type="radio" name="tabs" id="t2"/>
                      <label htmlFor="t2">Eliminar Cuenta</label>
                      <div className={style.listRight}>
                          <h3>¿Desea eliminar su cuenta?</h3>
                          <em>
                              The series is renowned for its groundbreaking special effects, complex plots, and the creation of an
                              extensive universe.
                              Star Wars has had a profound impact on popular culture and has spawned a plethora of films, TV series,
                              books, video games, and merchandise.
                          </em>
                      </div>
                  </div>
                  <div className={style.tab}>
                      <input type="radio" name="tabs" id="t3"/>
                      <label htmlFor="t3">Configuración de Notificaciones</label>
                      <div className={style.listRight}>
                          <h3>Configuración de notificaciones</h3>
                          <p>
                              Star Wars is an epic science fiction franchise created by George Lucas. The story unfolds
                              in a galaxy
                              far,
                              far away and focuses on the battle between good and evil, represented by the Rebel
                              Alliance and the
                              Galactic Empire, respectively.
                              The main characters include Jedi, warriors trained in the use of the Force, a mystical
                              energy that
                              grants them special abilities.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};
