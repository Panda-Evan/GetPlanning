import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Moment } from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "../styles/Agenda.module.css";
import "react-color-palette/lib/css/styles.css";
import { CirclePicker } from "react-color";
import moment from "moment";

interface Event {
  id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
  color: string;
}

const Planning = (): JSX.Element => {
  const [showPopupEventSup, setShowPopupEventSup] = useState<boolean>(false);
  const [showPopupEvent, setShowPopupEvent] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [hasTitle, setHasTitle] = useState<boolean>(true);

  const [newEvent, setNewEvent] = useState<Event>({
    id: events.length,
    title: "",
    description: "",
    start: new Date(),
    end: new Date(),
    color: "#121212",
  });

  const handleClosePopup = (): void => {
    setShowPopupEvent(false);
    setShowPopupEventSup(false);
    setNewEvent({
      id: events.length + 1,
      title: "",
      description: "",
      start: new Date(),
      end: new Date(),
      color: "#121212",
    });
  };

  const handleSelect = ({ start, end }: { start: Date; end: Date }): void => {
    setNewEvent({ ...newEvent, start, end });
    setShowPopupEvent(true);
  };

  const handleEventDelete = (eventToDelete: Event): void => {
    const updatedEvents = events.filter(
      (event) => event.id !== eventToDelete.id
    );
    setEvents(updatedEvents);
    handleClosePopup();
  };

  const eventStyleGetter = (
    event: Event,
    start: Date,
    end: Date,
    isSelected: boolean
  ): { style: { backgroundColor: string; cursor: string } } => {
    const momentStart = moment(start);
    const momentEnd = moment(end);

    return {
      style: {
        backgroundColor: event.color,
        cursor: "pointer",
      },
    };
  };

  const handleEventClick = (event: Event): void => {
    setSelectedEvent(event);
    setShowPopupEventSup(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { id, title, start, end, color, description } = newEvent;
    if (title) {
      setEvents([...events, { id, title, description, start, end, color }]);
      handleClosePopup(); // appel à handleClosePopup pour fermer la popup
    } else {
      setHasTitle(false);
      setTimeout(() => {
        setHasTitle(true);
      }, 1000);
    }
  };

  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={momentLocalizer(moment)}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={handleEventClick}
        tooltipAccessor={(event) => event.description} // Ajout de la propriété tooltipAccessor
      />
      {showPopupEvent && (
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
      )}
      {showPopupEventSup && (
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
                  setShowPopupEventSup(false);
                }}
              >
                Oui
              </button>
              <button
                className={styles.popup_button_sup}
                onClick={() => setShowPopupEventSup(false)}
              >
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planning;
