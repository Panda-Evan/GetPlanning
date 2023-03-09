import React from "react";
import styles from "../../styles/Agenda.module.css";

interface Props {
  show: boolean;
  selectedEvent: Event | null;
  handleClosePopup: () => void;
  handleEventDelete: (event: Event) => void;
}

const DeleteEvent: React.FC<Props> = ({
  show,
  selectedEvent,
  handleClosePopup,
  handleEventDelete,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.popup_container}>
      <div className={styles.popup}>
        <span className={styles.close} onClick={handleClosePopup}>
          &#x2716;
        </span>
        <h2 className={styles.popup_title}>
          Êtes-vous sûr de vouloir supprimer l'événement{" "}
          {selectedEvent && selectedEvent.title} ?
        </h2>
        <div className={styles.div_popup_button}>
          <button
            className={styles.popup_button_sup}
            onClick={() => {
              if (selectedEvent) {
                handleEventDelete(selectedEvent);
              }
              handleClosePopup();
            }}
          >
            Oui
          </button>
          <button
            className={styles.popup_button_sup}
            onClick={handleClosePopup}
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEvent;
