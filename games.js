// ─────────────────────────────────────────────────────────────────────────
// Games portfolio. To add a game, copy the commented template below,
// put its icon/screenshots in assets/games/<slug>/ and fill in the fields.
// status: "live" (on the App Store) or "soon" (in development).
// Empty list → a "first game coming soon" placeholder is shown.
// ─────────────────────────────────────────────────────────────────────────
window.GAMES = [
  /*
  {
    slug: "my-game",
    name: "My Game",
    status: "live",                         // "live" | "soon"
    badge: { en: "Coming Nov 19", fr: "Bientôt · 19 nov." }, // optional: replaces the default badge text
    icon: "assets/games/my-game/icon.png",  // 512×512 PNG recommended
    genre: { en: "Puzzle", fr: "Puzzle" },
    description: {
      en: "One or two sentences describing the game.",
      fr: "Une ou deux phrases décrivant le jeu."
    },
    screenshots: [
      "assets/games/my-game/shot1.png",
      "assets/games/my-game/shot2.png"
    ],
    appStoreUrl: "https://apps.apple.com/app/idXXXXXXXXXX",
    supportEmail: "mygame.support@example.com",   // dedicated support address for this game
    privacyUrl: "privacy.html"
  },
  */
  {
    slug: "joinstead",
    name: "Joinstead",
    status: "soon",
    icon: "assets/games/joinstead/icon.png",
    genre: { en: "Puzzle", fr: "Puzzle" },
    description: {
      en: "200 block puzzles, every one of them provably solvable. Coming soon on the App Store.",
      fr: "200 puzzles de blocs, tous résolubles, preuve à l'appui. Bientôt sur l'App Store."
    },
    pageUrl: "joinstead/",
    supportEmail: "joinstead@cmounierconsulting.com",
    privacyUrl: "joinstead/privacy.html"
  },
  {
    slug: "parapet",
    name: "Parapet",
    status: "soon",
    badge: { en: "Coming Nov 19, 2026", fr: "Bientôt · 19 nov. 2026" },
    icon: "assets/games/parapet/icon.png",
    genre: { en: "Tower defense", fr: "Tower defense" },
    description: {
      en: "A turn-based tower defense puzzle: hold the gate, one move at a time. Coming soon on the App Store.",
      fr: "Un tower defense au tour par tour : tenez la porte, un coup à la fois. Bientôt sur l'App Store."
    },
    pageUrl: "parapet/",
    supportEmail: "parapet@cmounierconsulting.com",
    privacyUrl: "parapet/privacy.html"
  },
  {
    slug: "whereabouts",
    name: "Whereabouts",
    status: "soon",
    icon: "assets/games/whereabouts/icon.png",
    genre: { en: "Logic puzzle", fr: "Logique" },
    description: {
      en: "A logic-grid detective puzzle: one case a day, no guessing. Coming soon on the App Store.",
      fr: "Un puzzle de logique policier : une affaire par jour, sans deviner. Bientôt sur l'App Store."
    },
    pageUrl: "whereabouts/",
    supportEmail: "whereabouts@cmounierconsulting.com",
    privacyUrl: "whereabouts/privacy.html"
  },
  {
    slug: "broadsheet",
    name: "Broadsheet",
    status: "soon",
    badge: { en: "Coming January 2027", fr: "Bientôt · janv. 2027" },
    icon: "assets/games/broadsheet/icon.png",
    genre: { en: "Word puzzles", fr: "Jeux de mots" },
    description: {
      en: "Four puzzles a day, in one small app you buy once. Coming soon on the App Store.",
      fr: "Quatre puzzles par jour, dans une petite application achetée une fois. Bientôt sur l'App Store."
    },
    pageUrl: "broadsheet/",
    supportEmail: "broadsheet@cmounierconsulting.com",
    privacyUrl: "broadsheet/privacy.html"
  },
  {
    slug: "nonogramnoir",
    name: "Nonogram Noir",
    status: "soon",
    badge: { en: "Pre-order from Nov 19 · out Dec 10, 2026", fr: "Précommande dès le 19 nov. · sortie le 10 déc. 2026" },
    icon: "assets/games/nonogramnoir/icon.png",
    genre: { en: "Picture logic", fr: "Logique en image" },
    description: {
      en: "Picture-logic puzzles in a 1940s missing-person case. Coming soon on the App Store.",
      fr: "Des grilles de logique en image dans une enquête de 1940. Bientôt sur l'App Store."
    },
    pageUrl: "nonogramnoir/",
    supportEmail: "nonogramnoir@cmounierconsulting.com",
    privacyUrl: "nonogramnoir/privacy.html"
  }
];
