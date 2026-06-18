// tres perfiles "semilla" que siempre estan en el deck. no son usuarios reales
// pero se comportan como tal: si los likeas hacen match al instante y responden
// en el chat. los uid llevan prefijo bot_ para distinguirlos en firestore.

export const BOTS = [
  {
    uid: "bot_valentina",
    isBot: true,
    displayName: "Valentina",
    age: 26,
    bio: "Diseñadora de día, cinéfila de noche. Si no te gusta el café no sé si esto va a funcionar.",
    job: "Diseñadora UX",
    distanceKm: 3,
    interests: ["Café", "Cine", "Senderismo"],
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    ],
  },
  {
    uid: "bot_mateo",
    isBot: true,
    displayName: "Mateo",
    age: 29,
    bio: "Toco guitarra los fines de semana y cocino mejor de lo que parezco. Busco con quién compartir playlists.",
    job: "Ingeniero de software",
    distanceKm: 7,
    interests: ["Música", "Viajes", "Cocina"],
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    ],
  },
  {
    uid: "bot_camila",
    isBot: true,
    displayName: "Camila",
    age: 24,
    bio: "Amante de los perros y de los planes espontáneos. Cuéntame tu mejor anécdota de viaje.",
    job: "Veterinaria",
    distanceKm: 12,
    interests: ["Perros", "Playa", "Lectura"],
    photos: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    ],
  },
];

// respuestas que va soltando el bot en el chat. se eligen en orden para que
// la conversacion se sienta natural y no repetida.
export const BOT_REPLIES = {
  bot_valentina: [
    "¡Hola! Me alegró ver que hicimos match",
    "¿Eres más de café o de té? es importante saberlo jaja",
    "Cuéntame, ¿qué haces un sábado normal?",
    "Tengo que confesar que vi una peli buenísima ayer, te paso el dato",
  ],
  bot_mateo: [
    "¡Qué bueno hablar contigo!",
    "¿Escuchas algo en particular o eres de los que pone shuffle?",
    "Si te invito a comer, ¿dulce o salado?",
    "Este finde toco en un bar del centro, deberías pasarte",
  ],
  bot_camila: [
    "Holaaa, match con vista jaja",
    "Pregunta clave: ¿perros o gatos?",
    "Estoy planeando ir a la playa, ¿te apuntas algún día?",
    "Cuéntame lo más loco que hayas hecho viajando",
  ],
};

export const isBotUid = (uid) => typeof uid === "string" && uid.startsWith("bot_");
