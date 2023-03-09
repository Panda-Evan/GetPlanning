import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "../styles/Agenda.module.css";
import "react-color-palette/lib/css/styles.css";
import { CirclePicker } from "react-color";
import moment from "moment";

// import langue
import "moment/locale/fr"; // france
import "moment/locale/es"; // espana
import "moment/locale/de"; // deutch
import "moment/locale/pt"; // portugues
import "moment/locale/ru"; // russia
import "moment/locale/it"; // italien
import "moment/locale/ja"; // japan
import {
  messagesDe,
  messagesEs,
  messagesFr,
  messagesIt,
  messagesJa,
  messagesPt,
  messagesRu,
} from "./textAgenda";

const langue: String = "Fr";
let mes = messagesFr;
// langue calendar
moment.locale(`${langue}`);
// deifnition de la langue
if (langue === "Fr") {
  mes = messagesFr;
} else if (langue === "En") {
} else if (langue === "Es") {
  mes = messagesEs;
} else if (langue === "De") {
  mes = messagesDe;
} else if (langue === "Pt") {
  mes = messagesPt;
} else if (langue === "Ru") {
  mes = messagesRu;
} else if (langue === "It") {
  mes = messagesIt;
} else if (langue === "Ja") {
  mes = messagesJa;
} else {
  console.log(
    `Error: Language unknown.\n     ${langue} is not in the list of Agenda.`
  );
}

// initialisation des types
interface Event {
  id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
  color: string;
}

const Planning = (): JSX.Element => {
  // initialisation des données
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
    color: "#aaaaaa",
  });
  const [data, setData] = useState<Data | null>(null);

  interface Data {
    id: number;
    name: string;
  }

  // pour fermer le popUp ou en la fermant
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

  // quand un event est selectionner
  const handleSelect = ({ start, end }: { start: Date; end: Date }): void => {
    setNewEvent({ ...newEvent, start, end });
    setShowPopupEvent(true);
  };

  // quand un event est delete
  const handleEventDelete = (eventToDelete: Event): void => {
    const updatedEvents = events.filter(
      (event) => event.id !== eventToDelete.id
    );
    setEvents(updatedEvents);
    handleClosePopup();
  };

  // creation de l'event
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

  // quand event clicker
  const handleEventClick = (event: Event): void => {
    setSelectedEvent(event);
    setShowPopupEventSup(true);
  };

  // quand un event à été creer
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

  /*useEffect(() => {
    const response = axios.get("http://127.0.0.1:8000/planning/agenda/1", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(response);
  }, []);*/

  // front
  return (
    <>
      {/* <div>
        {data && data.name? (
          <h1>{data.name}</h1>
        ) : (
          <div className={styles.gooey}>
            <span className={styles.dot}></span>
            <div className={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div> */}
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
          messages={mes}
          tooltipAccessor={(event) => event.title}
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
    </>
  );
};

export default Planning;
