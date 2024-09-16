import React from "react";
import skills from "../../data/skills.json";
import styles from "./Langages.module.css";
import { getImageUrl } from "../../utils";

export const Languages = () => {
    return (
      <section className={styles.container} id="languages">
        <h2 className={styles.title}>Langages</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
};