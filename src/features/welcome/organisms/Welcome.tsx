import React from 'react';

import style from './welcome.module.css';
export const Welcome = () => {
  return (
    <div className={style.charactersWelcome}>
      <h1 data-aos='fade-down' data-aos-duration='1500'>
        Welcome
      </h1>
      <h2>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
      <div className={style.welcomeDetail}>
        <p>
          Star Wars is an epic science fiction franchise created by George Lucas. The story unfolds in a galaxy far, far
          away and focuses on the battle between good and evil, represented by the Rebel Alliance and the Galactic
          Empire, respectively. The main characters include Jedi, warriors trained in the use of the Force, a mystical
          energy that grants them special abilities.
        </p>
        <em>
          The series is renowned for its groundbreaking special effects, complex plots, and the creation of an extensive
          universe. Star Wars has had a profound impact on popular culture and has spawned a plethora of films, TV
          series, books, video games, and merchandise.
        </em>
      </div>
    </div>
  );
};
