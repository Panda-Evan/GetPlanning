import React from "react";
import { CirclePicker } from "react-color";
import styles from "../../styles/Agenda.module.css";

interface Props {
  handleClosePopup: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  hasTitle: boolean;
  setHasTitle: React.Dispatch<React.SetStateAction<boolean>>;
  newEvent: {
    id: number;
    title: string;
    description: string;
    start: Date;
    end: Date;
    color: string;
  };
  setNewEvent: React.Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
      description: string;
      start: Date;
      end: Date;
      color: string;
    }>
  >;
}

const AddEvent: React.FC<Props> = ({
  handleClosePopup,
  handleSubmit,
  hasTitle,
  setHasTitle,
  newEvent,
  setNewEvent,
}) => {
  return (
    <div className={styles.popup_container}>
      <div className={styles.popup}>
        <span className={styles.close} onClick={handleClosePopup}>
          &#x2716;
        </span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="NameEvent">Nom de l'évènement:</label>
          <input
            type="text"
            id="NameEvent"
            name="NameEvent"
            value={newEvent.title}
            onChange={(e) => {
              setNewEvent({ ...newEvent, title: e.target.value });
              setHasTitle(!!e.target.value);
            }}
            className={hasTitle ? "" : styles.shake}
          />
          <label htmlFor="Description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newEvent.description}
            onChange={(e) => {
              setNewEvent({ ...newEvent, description: e.target.value });
              setHasTitle(!!e.target.value);
            }}
          />
          <label htmlFor="color">Couleur:</label>
          <CirclePicker
            color={newEvent.color}
            onChangeComplete={(color) =>
              setNewEvent({ ...newEvent, color: color.hex })
            }
          />
          <button className={styles.popup_button_add}>
            Ajoutez l'évènement
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;