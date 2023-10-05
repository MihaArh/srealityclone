import { useState } from "react";
import { IEstate } from "../../types";
import styles from "./Card.module.css";
import imageNotAvailable from "../../assets/image_not_available.png";
interface CardProps extends IEstate {}

function Card({ title, image_url }: CardProps) {
  const [url, setUrl] = useState(image_url);
  const handleOnImageError = () => {
    setUrl(imageNotAvailable);
  };
  return (
    <div className={styles.card}>
      <a href={url} target="_blank">
        <div className={styles.image}>
          <img alt={`${title}_image`} src={url} onError={handleOnImageError} />
        </div>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
      </a>
    </div>
  );
}

export default Card;
