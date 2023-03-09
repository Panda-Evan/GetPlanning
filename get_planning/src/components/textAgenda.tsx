import styles from "@/styles/AgendaText.module.css";

const messagesFr = {
  allDay: "Toute la journée",
  previous: <i className={styles.prev}></i>,
  next: <i className={styles.next}></i>,
  today: <i className={styles.today}></i>,
  month: "Mois",
  week: "Semaine",
  day: "Jour",
  agenda: "Agenda",
  date: "Date",
  time: "Heure",
  event: "Événement",
  noEventsInRange: "Pas d'événements à afficher.",
  showMore: function (total: number) {
    return "+" + total + " événement(s) supplémentaire(s)";
  },
};

const messagesEs = {
  allDay: "Todo el día",
  previous: <i className={styles.prev}></i>,
  next: <i className={styles.next}></i>,
  today: <i className={styles.today}></i>,
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "No hay eventos para mostrar.",
  showMore: function (total: number) {
    return "+" + total + " evento(s) adicional(es)";
  },
};

const messagesDe = {
  allDay: "Ganztägig",
  previous: <i className={styles.prev}></i>,
  next: <i className={styles.next}></i>,
  today: <i className={styles.today}></i>,
  month: "Monat",
  week: "Woche",
  day: "Tag",
  agenda: "Agenda",
  date: "Datum",
  time: "Uhrzeit",
  event: "Veranstaltung",
  noEventsInRange: "Keine Ereignisse anzuzeigen.",
  showMore: function (total: number) {
    return "+" + total + " weitere Veranstaltung(en)";
  },
};

const messagesPt = {
  allDay: "Dia inteiro",
  previous: <i className={styles.prev}></i>,
  next: <i className={styles.next}></i>,
  today: <i className={styles.today}></i>,
  month: "Mês",
  week: "Semana",
  day: "Dia",
  agenda: "Agenda",
  date: "Data",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "Nenhum evento para mostrar.",
  showMore: function (total: number) {
    return "+" + total + " evento(s) adicional(is)";
  },
};

const messagesRu = {
  allDay: "Весь день",
  previous: <i className={styles.prev}></i>,
  next: <i className={styles.next}></i>,
  today: <i className={styles.today}></i>,
  month: "Месяц",
  week: "Неделя",
  day: "День",
  agenda: "Планировщик",
  date: "Дата",
  time: "Время",
  event: "Событие",
  noEventsInRange: "Нет событий для отображения.",
  showMore: function (total: number) {
    return "+" + total + " дополнительное(ых) событие(й)";
  },
};

const messagesIt = {
  allDay: "Tutto il giorno",
  previous: <i className={styles.prev}></i>,
  next: <i className={styles.next}></i>,
  today: <i className={styles.today}></i>,
  month: "Mese",
  week: "Settimana",
  day: "Giorno",
  agenda: "Agenda",
  date: "Data",
  time: "Ora",
  event: "Evento",
  noEventsInRange: "Nessun evento da mostrare.",
  showMore: function (total: number) {
    return "+" + total + " evento(i) aggiuntivo(i)";
  },
};

const messagesJa = {
  allDay: "終日",
  previous: <i className={styles.prev}></i>,
  next: <i className={styles.next}></i>,
  today: <i className={styles.today}></i>,
  month: "月",
  week: "週",
  day: "日",
  agenda: "予定表",
  date: "日付",
  time: "時間",
  event: "イベント",
  noEventsInRange: "表示するイベントがありません。",
  showMore: function (total: number) {
    return "+" + total + "件の追加イベント";
  },
};

export {
  messagesFr,
  messagesEs,
  messagesDe,
  messagesPt,
  messagesRu,
  messagesIt,
  messagesJa,
};
