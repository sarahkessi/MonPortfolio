import React from "react";
import styles from "./Hero.module.css"
import {getImageUrl} from "../../utils";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";


export const Hero = () => {
    return (
     <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={`${styles.title} ${styles.typewriter}`}>Coucou, moi c'est Sarah !</h1>
            <p className={styles.description}>Je suis une étudiante en informatique, j'étudie plus précisément les langages de programmation.
            Je suis présentement à la recherche d'un stage pour l'hiver 2025,
            n'hésitez pas à me contacter si vous voulez en savoir plus.
            </p>
            <a className={styles.contactBtn}
                href="mailto:sarahhkessi@gmail.com"
            >
                <EmailRoundedIcon className={styles.email}></EmailRoundedIcon>
                Me contacter
            </a>
        </div>

        <img
          src={getImageUrl("hero/moi40.png")}
          alt="Image of me"
          className={styles.heroImg}
        />

        <div className={styles.topBlur}>

        </div>
        <div className={styles.bottomBlur}>

        </div>
    </section>
    );
};