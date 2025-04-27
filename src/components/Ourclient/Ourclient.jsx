import React, { useEffect, useState } from "react";
import styles from "./Ourclient.module.css";
import clientsData from "./clients.json";

const Ourclient = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(clientsData.clients);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Client</h2>
      <p className={styles.description}>
        Somarjun Tech Company serves a wide range of clients, primarily focusing
        on business leveraging digital transformation through modern design,
        technology, and software solutions.
      </p>
      <div className={styles.clientGrid}>
        {clients.map((client, index) => (
          <div key={index} className={styles.clientCard}>
            <img
              src={client.imgSrc}
              alt={client.name}
              className={styles.clientLogo}
            />
            <h3 className={styles.clientName}>{client.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourclient;
