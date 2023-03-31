const itemsList = {
  MI_LIBRERIA: [
    {
      type: "title",
      children: "Mi Librería",
    },
    {
      type: "link",
      to: "recientes",
      children: "Recientes",
    },
    {
      type: "link",
      to: "artistas",
      children: "Artistas",
    },
    {
      type: "link",
      to: "albums",
      children: "Albums",
    },
    {
      type: "link",
      to: "canciones",
      children: "Canciones",
    },
    {
      type: "link",
      to: "estaciones",
      children: "Estaciones",
    },
  ],
  MI_PLAYLIST: [
    {
      type: "title",
      children: "Mi Playlist",
    },
    {
      type: "link",
      to: "search?category=metal",
      children: "Metal",
    },
    {
      type: "link",
      to: "search?category=para-bailar",
      children: "Para bailar",
    },

    {
      type: "link",
      to: "search?category=rock90s",
      children: "Rock 90s",
    },
    {
      type: "link",
      to: "search?category=baladas",
      children: "Baladas",
    },
  ],
};

export default itemsList;
