import React from "react";
import { IEstate } from "../../types";
import styles from "./Card.module.css";

interface CardProps extends IEstate {}

function Card({ id, title, image_url }: CardProps) {
  return (
    <div key={id} className={styles.card}>
      {title}
    </div>
  );
}

export default Card;
