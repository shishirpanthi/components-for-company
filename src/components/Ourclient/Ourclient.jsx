import React from "react";
import styles from "./Ourclient.module.css";
import clientsData from "./clients.json";

const Ourclient = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Client</h2>
      <p className={styles.description}>
        Somarjun Tech Company serves a wide range of clients, primarily focusing
        on business leveraging digital transformation through modern design,
        technology, and software solutions.
      </p>
      <div className={styles.clientGrid}>
        {clientsData.clients.map((client) => (
          <div key={client.id} className={styles.clientCard}>
            <img
              src={`/images/${client.imgSrc}`}
              alt={client.name}
              className={styles.clientLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourclient;
