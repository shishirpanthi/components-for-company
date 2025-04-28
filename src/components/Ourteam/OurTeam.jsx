import React from "react";
import styles from "./OurTeam.module.css";
import teamData from "./teamData.json";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const OurTeam = () => {
  const { teamMembers } = teamData;

  return (
    <div className={styles.teamSection}>
      <h2 className={styles.title}>Our Team</h2>
      <p className={styles.subtitle}>
        The passionate individuals behind our success. Each team member brings
        unique skills and energy. Together, we turn ideas into reality.
      </p>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${styles.teamCard} ${
              index === 0 ? styles.founderCard : ""
            }`}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className={styles.memberImage}
                />
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.position}</p>
              </div>
              <div className={styles.cardBack}>
                {index === 0 ? (
                  <>
                    <p className={styles.description}>
                      &quot;{member.description}&quot;
                    </p>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.position}</p>
                  </>
                ) : (
                  <>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.position}</p>
                  </>
                )}
                <div className={styles.socialIcons}>
                  {member.socialMedia.linkedin && (
                    <a
                      href={member.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin
                        className={`${styles.icon} ${styles.linkedin}`}
                      />
                    </a>
                  )}
                  {member.socialMedia.instagram && (
                    <a
                      href={member.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram
                        className={`${styles.icon} ${styles.instagram}`}
                      />
                    </a>
                  )}
                  {member.socialMedia.facebook && (
                    <a
                      href={member.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook
                        className={`${styles.icon} ${styles.facebook}`}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
