import { useState, useEffect } from "react";
import styles from "../styles/Principal.module.css";
import Image from "next/image";

interface ImageData {
  url: string;
  alt: string;
}

export default function Principal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items: ImageData[] = [
    { url: "/../public/homePage/test.jpg", alt: "Image 1" },
    { url: "/../public/homePage/test.jpg", alt: "Image 2" },
    { url: "/../public/homePage/test.jpg", alt: "Image 3" },
    { url: "/../public/homePage/test.jpg", alt: "Image 4" },
    { url: "/../public/homePage/test.jpg", alt: "Image 5" },
    { url: "/../public/homePage/test.jpg", alt: "Image 6" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex) => {
        const newIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, [items.length]);

  const getClassName = (index: number) => {
    if (index === activeIndex) {
      return `${styles.item} ${styles.itemActive}`;
    } else if (
      index === activeIndex - 1 ||
      (activeIndex === 0 && index === items.length - 1)
    ) {
      return `${styles.item}`;
    } else {
      return `${styles.item}`;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          maxime fugit itaque, nulla modi asperiores dignissimos necessitatibus
          ex voluptates praesentium?
        </p>
      </div>
      <div className={styles.carousel}>
        {items.map((item, index) => (
          <div key={index} className={getClassName(index)}>
            <Image src={item.url} alt={item.alt} width={300} height={300} />
          </div>
        ))}
      </div>
    </div>
  );
}
