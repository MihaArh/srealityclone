import React from "react";
import { IEstate } from "../../types";
import styles from "./Card.module.css";

interface CardProps extends IEstate {}

function Card({ id, title, image_url }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img alt={`${title}_image`} src={image_url} />
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Card;
