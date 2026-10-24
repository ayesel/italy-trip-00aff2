// Edit this file to update the itinerary. Times are local (Europe/Rome), 24h "HH:MM".
// status: booked | book | walk | free
window.TRIP = {
  days: [
    {
      id: "sat",
      date: "2026-10-24",
      tab: "Sat 24 · Florence",
      title: "Florence",
      subtitle: "Saturday 24 October: Medici palace, Duomo, then the Oltrarno",
      chips: ["Cover shoulders & knees", "Bring ID", "Small bag only"],
      showShopping: true,
      center: [43.7696, 11.2558],
      stops: [
        {
          time: "11:15", end: "12:45", status: "walk",
          "cat": ["Sights"], title: "Palazzo Vecchio",
          where: "Piazza della Signoria",
          lat: 43.76934, lng: 11.25625,
          notes: [
            "Hall of the Five Hundred, the Medici apartments",
            "Tickets at the door (open until 7pm)",
          ],
        },
        {
          time: "13:00", end: "14:15", status: "booked",
          "cat": ["Food & drink"], title: "Lunch · Vini e Vecchi Sapori",
          where: "Via dei Magazzini 3r",
          lat: 43.77009, lng: 11.25598,
          mapsQuery: "Vini e Vecchi Sapori, Via dei Magazzini 3r, Firenze",
        },
        {
          time: "14:15", end: "15:00", status: "free",
          "cat": ["Sights"], title: "Cathedral interior",
          where: "Santa Maria del Fiore",
          lat: 43.77311, lng: 11.25596,
          notes: [
            "Free entry, closes 3:45pm (closed to visitors Sunday)",
            "See the dome from below before you climb it",
          ],
        },
        {
          time: "15:15", end: "15:45", status: "book",
          statusLabel: "Ticket · arrive early",
          "cat": ["Sights"], title: "Dome meeting point + security",
          where: "Check your GetYourGuide voucher for the meeting point",
          notes: [
            "Exchange voucher, 15–30 min security queue",
            "Big bags go to official storage at Piazza del Duomo 38/r",
            "Download the POP GUIDE app beforehand",
          ],
        },
        {
          time: "15:45", end: "16:45", status: "book",
          statusLabel: "Ticket · 3:45 slot",
          "cat": ["Sights"], title: "Brunelleschi's Dome climb",
          where: "Porta della Mandorla (north side)",
          lat: 43.77365, lng: 11.25694,
          notes: ["463 steps, no lift", "Names on ticket must match ID", "Pass also covers Baptistery + Duomo Museum for 3 days"],
        },
        {
          "time": "17:00",
          "end": "17:20",
          "status": "walk",
          "who": "him", "cat": ["Shoes", "Leather"], "title": "Mannina (workshop)",
          "where": "Via de' Barbadori 19r",
          "lat": 43.76742,
          "lng": 11.25211,
          "mapsQuery": "Mannina (workshop), Via de' Barbadori 19r, Firenze",
          "notes": [
            "Handmade loafers from the workshop itself, the top shoe pick",
            "Closes 7:30pm"
          ]
        },
        {
          "time": "17:20",
          "end": "17:35",
          "status": "walk",
          "who": "both", "cat": ["Leather"], "title": "Madova",
          "where": "Via de' Guicciardini 1r",
          "lat": 43.7673,
          "lng": 11.25264,
          "mapsQuery": "Madova, Via de' Guicciardini 1r, Firenze",
          "notes": [
            "Leather gloves, family-run since 1919. Keep it to about 15 min",
            "Closes 7:00pm"
          ]
        },
        {
          "time": "17:35",
          "end": "17:55",
          "status": "book",
          "who": "her", "cat": ["Jewellery"], "title": "Officine Nora",
          "where": "Via dei Preti 4",
          "lat": 43.76554,
          "lng": 11.24712,
          "mapsQuery": "Officine Nora, Via dei Preti 4, Firenze",
          "notes": [
            "Artisan jewellery studio, ring the bell",
            "Closes 6:00pm, so don't miss it",
            "055 975 8930"
          ],
          "statusLabel": "Closes 6pm"
        },
        {
          "time": "17:55",
          "end": "18:10",
          "status": "walk",
          "who": "him", "cat": ["Clothing"], "title": "Bjørk",
          "where": "Via dello Sprone 25",
          "lat": 43.76768,
          "lng": 11.25014,
          "mapsQuery": "Bjørk, Via dello Sprone 25, Firenze",
          "notes": [
            "Independent menswear",
            "Closes 7:00pm",
            "First to cut if running late"
          ]
        },
        {
          "time": "18:10",
          "end": "18:25",
          "status": "walk",
          "who": "her", "cat": ["Leather"], "title": "Jennifer Tattanelli",
          "where": "Piazza de' Pitti 31r",
          "lat": 43.76554,
          "lng": 11.24984,
          "mapsQuery": "Jennifer Tattanelli, Piazza de' Pitti 31r, Firenze",
          "notes": [
            "Bags from her own atelier",
            "Closes 7:00pm"
          ]
        },
        {
          "time": "18:25",
          "end": "18:35",
          "status": "walk",
          "who": "her", "cat": ["Clothing", "Shoes"], "title": "Heart to Heart",
          "where": "Via Santo Spirito 54r",
          "lat": 43.76891,
          "lng": 11.24723,
          "mapsQuery": "Heart to Heart, Via Santo Spirito 54r, Firenze",
          "notes": [
            "Florence-made clothes, velvet slippers",
            "Closes 7:00pm"
          ]
        },
        {
          "time": "18:35",
          "end": "18:45",
          "status": "walk",
          "who": "her", "cat": ["Jewellery"], "title": "Angela Caputi",
          "where": "Via Santo Spirito 58r",
          "lat": 43.76895,
          "lng": 11.24709,
          "mapsQuery": "Angela Caputi, Via Santo Spirito 58r, Firenze",
          "notes": [
            "Statement jewellery, designer since 1975",
            "Closes 7:30pm"
          ]
        },
        {
          "time": "18:45",
          "end": "18:55",
          "status": "book",
          "who": "her", "cat": ["Vintage"], "title": "Recollection by Albrici",
          "where": "Via dei Serragli 22r",
          "lat": 43.76787,
          "lng": 11.24581,
          "mapsQuery": "Recollection by Albrici, Via dei Serragli 22r, Firenze",
          "notes": [
            "Designer vintage; scarves and jewellery are in budget",
            "Closes 7:00pm, so get there before then"
          ],
          "statusLabel": "Closes 7pm"
        },
        {
          "time": "18:55",
          "end": "19:05",
          "status": "walk",
          "who": "both", "cat": ["Vintage"], "title": "Momo Vintage",
          "where": "Via dei Serragli 24r",
          "lat": 43.76769,
          "lng": 11.24571,
          "mapsQuery": "Momo Vintage, Via dei Serragli 24r, Firenze",
          "notes": [
            "Designer vintage, menswear room",
            "Closes 7:30pm"
          ]
        },
        {
          "time": "19:05",
          "end": "19:20",
          "status": "walk",
          "who": "him", "cat": ["Clothing"], "title": "Maglificio GRP",
          "where": "Via Sant'Agostino 30",
          "lat": 43.76742,
          "lng": 11.24607,
          "mapsQuery": "Maglificio GRP, Via Sant'Agostino 30, Firenze",
          "notes": [
            "Florentine knitwear",
            "Closes 7:30pm"
          ]
        },
        {
          "time": "19:20",
          "end": "19:30",
          "status": "walk",
          "who": "her", "cat": ["Clothing"], "title": "Hello Wonderful",
          "where": "Via Santa Monaca 2",
          "lat": 43.76787,
          "lng": 11.24556,
          "mapsQuery": "Hello Wonderful, Via Santa Monaca 2, Firenze",
          "notes": [
            "Independent clothing",
            "Closes 7:30pm",
            "Second to cut if running late"
          ]
        },
        {
          time: "19:30", end: "20:00", status: "walk",
          "cat": ["Food & drink"], title: "Aperitivo · Il Santino",
          where: "Via Santo Spirito 60r",
          lat: 43.76899, lng: 11.24701,
          mapsQuery: "Il Santino, Via Santo Spirito 60r, Firenze",
          notes: ["Tiny wine bar right by the last shops, open until 11pm", "Next door to dinner"],
        },
        {
          time: "20:00", end: "22:00", status: "book",
          statusLabel: "Book now",
          "cat": ["Food & drink"], title: "Dinner · Il Santo Bevitore",
          where: "Via Santo Spirito 64r · 7:30–11:30pm",
          lat: 43.76908, lng: 11.24683,
          mapsQuery: "Il Santo Bevitore, Via Santo Spirito 64r, Firenze",
          notes: [
            "Modern Tuscan and romantic, right on the shopping route",
            "Order the riccioli all'nduja e pecorino",
            "No steak tonight. Alternatives are in the card below.",
          ],
        },
        {
          time: "22:15", status: "book",
          statusLabel: "Call to book",
          "cat": ["Food & drink"], title: "Cocktails · Locale Firenze",
          where: "Via delle Seggiole 12r · 6pm–2am",
          lat: 43.77108, lng: 11.26037,
          mapsQuery: "Locale Firenze, Via delle Seggiole 12r",
          notes: ["Cocktails in a Renaissance palace courtyard", "About 20 min walk or a short taxi from Santo Spirito", "+39 055 906 7188 (from a third-party listing)"],
          links: [{ label: "Call", url: "tel:+390559067188" }],
        },
        {
          time: "23:30", status: "walk",
          statusLabel: "⚠ Check before going",
          "cat": ["Food & drink"], title: "Jazz Club Firenze (unconfirmed)",
          where: "Now listed at Drinking Blues, Piazza del Tiratoio",
          mapsQuery: "Drinking Blues, Piazza del Tiratoio, Firenze",
          notes: ["Google Maps marks it TEMPORARILY CLOSED", "Only go if you confirm it's open tonight"],
        },
      ],
      tips: [
        "Clocks go back one hour overnight, so tomorrow's 8:15 is 8:15 on the new time.",
        "Duomo bags: suitcases, backpacks and medium or large bags aren't allowed. A small crossbody is fine.",
        "Shoulders and knees must be covered at the cathedral.",
        "Dinner skips: Da Ruggero and Cambi (both bistecca), Sabatino and Dalla Lola (closed tonight), Gurdulù (permanently closed).",
        "Shopping cut order if late: Bjørk, then Hello Wonderful. Don't miss Officine Nora before 6pm or Recollection before 7pm.",
        "Avoid: anyone offering to walk you to a \"leather factory\" or \"leather school\"",
        "Avoid: San Lorenzo market stalls (mostly imported) and TikTok discount shops like Misuri and Infinity Leather",
        "Ask every leather shop: where is it made, and which tannery is the leather from?",

      ],
    },
    {
      id: "sun",
      date: "2026-10-25",
      tab: "Sun 25 · Florence → Rome",
      title: "Florence → Rome",
      subtitle: "Sunday 25 October: markets and leather, a midday train to Rome, then the catacombs",
      chips: ["Clocks went back 1h", "Cathedral closed to visitors"],
      showShopping: true,
      center: [43.7735, 11.256],
      stops: [
        {
          "time": "08:15",
          "end": "08:50",
          "status": "walk",
          "statusLabel": "Optional",
          "cat": ["Sights"], "title": "Medici Chapels (if you're up early)",
          "where": "Piazza di Madonna degli Aldobrandini",
          "lat": 43.77517,
          "lng": 11.25347,
          "notes": [
            "Michelangelo's New Sacristy, about 35 min",
            "Then 15 min walk to the market"
          ]
        },
        {
          "time": "09:00",
          "end": "10:00",
          "status": "free",
          "who": "both", "cat": ["Markets", "Vintage"], "title": "Mercato delle Pulci + Piazza dei Ciompi vintage market",
          "where": "Largo Annigoni / Piazza dei Ciompi",
          "lat": 43.77048,
          "lng": 11.26548,
          "mapsQuery": "Mercato delle Pulci + Piazza dei Ciompi vintage market, Largo Annigoni / Piazza dei Ciompi, Firenze",
          "notes": [
            "Antiques, jewellery, vintage clothing, candlesticks, prints"
          ],
          "statusLabel": "Open market"
        },
        {
          "time": "10:00",
          "end": "10:30",
          "status": "walk",
          "who": "both", "cat": ["Leather"], "title": "Scuola del Cuoio",
          "where": "Via San Giuseppe 5r (Santa Croce cloister)",
          "lat": 43.76884,
          "lng": 11.26296,
          "mapsQuery": "Scuola del Cuoio, Via San Giuseppe 5r (Santa Croce cloister), Firenze",
          "notes": [
            "Purses (her), belts and wallets (him)",
            "Opens 10:00. Call first: 055 244 533"
          ]
        },
        {
          "time": "10:40",
          "end": "10:55",
          "status": "walk",
          "who": "him", "cat": ["Shoes", "Leather"], "title": "Mannina (shop)",
          "where": "Via de' Guicciardini 16r",
          "lat": 43.76696,
          "lng": 11.25168,
          "mapsQuery": "Mannina (shop), Via de' Guicciardini 16r, Firenze",
          "notes": [
            "Loafers, only if you didn't buy them Saturday",
            "Opens 10:00"
          ]
        },
        {
          "time": "10:55",
          "end": "11:15",
          "status": "free",
          "who": "both", "cat": ["Markets"], "title": "Santo Spirito in Fiera",
          "where": "Piazza Santo Spirito",
          "lat": 43.76674,
          "lng": 11.24772,
          "mapsQuery": "Santo Spirito in Fiera, Piazza Santo Spirito, Firenze",
          "notes": [
            "4th-Sunday fair: craft, leather and jewellery stalls"
          ],
          "statusLabel": "Open market"
        },
        {
          "time": "11:15",
          "end": "11:30",
          "status": "walk",
          "who": "her", "cat": ["Vintage"], "title": "Celeste Vintage",
          "where": "Piazza San Felice 1r",
          "lat": 43.76508,
          "lng": 11.24815,
          "mapsQuery": "Celeste Vintage, Piazza San Felice 1r, Firenze",
          "notes": [
            "Designer vintage bags, scarves",
            "Opens 11:00"
          ]
        },
        {
          "time": "11:30",
          "end": "11:45",
          "status": "walk",
          "who": "both", "cat": ["Leather"], "title": "Davide Cerasi Leather Boutique",
          "where": "Lungarno Acciaiuoli 30r",
          "lat": 43.76862,
          "lng": 11.25218,
          "mapsQuery": "Davide Cerasi Leather Boutique, Lungarno Acciaiuoli 30r, Firenze",
          "notes": [
            "Leather jackets and bags, Florentine, 30 years",
            "Opens 11:00"
          ]
        },
        {
          "time": "11:30",
          "end": "11:45",
          "status": "walk",
          "cat": ["Travel"], "title": "Head to Santa Maria Novella station",
          "where": "About 10 min on foot",
          "notes": [
            "Pick up luggage first if it's at the hotel"
          ]
        },
        {
          "time": "11:59",
          "end": "13:35",
          "status": "book",
          "statusLabel": "Buy in app",
          "cat": ["Travel"], "title": "Train · Firenze SMN → Roma Termini",
          "where": "Santa Maria Novella station",
          "lat": 43.77634,
          "lng": 11.24813,
          "notes": [
            "Frecciarossa 9311, arrives Roma Termini 13:35",
            "Backup: the 11:48 (FR 9411) arrives at the same time. Avoid the 12:48, which arrives after 2pm",
            "Buy in the app; prices rise close to departure"
          ],
          "links": [
            {
              "label": "Trenitalia",
              "url": "https://www.trenitalia.com/en.html"
            },
            {
              "label": "Italo",
              "url": "https://www.italotreno.com/en"
            }
          ]
        },
        {
          "time": "13:35",
          "end": "14:10",
          "status": "walk",
          "cat": ["Travel"], "title": "Rome · drop bags, taxi to the Appian Way",
          "where": "Roma Termini",
          "mapsQuery": "Roma Termini",
          "notes": [
            "Taxi from the official rank, about 20–25 min and €20–25",
            "Or Metro A to Arco di Travertino, then bus 218 (45–60 min)"
          ]
        },
        {
          "time": "14:30",
          "end": "16:00",
          "status": "walk",
          "statusLabel": "Guided entry",
          "cat": ["Sights"], "title": "Catacombs of San Callisto",
          "where": "Via Appia Antica 110/126",
          "mapsQuery": "Catacombe di San Callisto, Via Appia Antica 110, Roma",
          "notes": [
            "Guided tours only, about 35 min underground. Join the next English group",
            "Reopens about 2pm after lunch, last entry around 4:30. Check hours before you go",
            "San Sebastiano is a 10 min walk down the road if there's time"
          ]
        },
        {
          "time": "20:00",
          "status": "book",
          "statusLabel": "Not confirmed",
          "cat": ["Food & drink"], "title": "Dinner · Hosteria Grappolo d'Oro",
          "where": "Piazza della Cancelleria 80",
          "mapsQuery": "Hosteria Grappolo d'Oro, Piazza della Cancelleria 80, Roma",
          "notes": [
            "Requested by email, but there's no confirmation. Book online or call"
          ]
        },
      ],
      tips: [
        "Clocks went back an hour overnight, so check your phone has updated.",
        "The cathedral is closed to tourists on Sundays. The museum and Baptistery should be open, but check.",
        "Avoid: anyone offering to walk you to a \"leather factory\" or \"leather school\"",
        "Avoid: San Lorenzo market stalls (mostly imported) and TikTok discount shops like Misuri and Infinity Leather",
        "Ask every leather shop: where is it made, and which tannery is the leather from?",

      ],
    },
    {
      id: "mon",
      date: "2026-10-26",
      tab: "Mon 26 · Rome",
      title: "Rome",
      subtitle: "Monday 26 October: the Colosseum",
      chips: ["Booked via GetYourGuide"],
      showShopping: false,
      center: [41.8902, 12.4922],
      stops: [
        {
          time: "12:30", end: "14:00", status: "booked",
          statusLabel: "Booked · offer pending",
          "cat": ["Sights"], title: "Colosseum tour",
          where: "Italy in Love Tours · check voucher for meeting point",
          lat: 41.89021, lng: 12.49223,
          notes: [
            "The underground is unavailable to every operator on 26 Oct",
            "Operator offered an arena-floor tour instead; ask for a partial refund or cancel via GetYourGuide",
            "Bring ID",
          ],
        },
        {
          time: "15:30", status: "walk",
          "who": "both", "cat": ["Vintage", "Clothing"], title: "Monti · vintage",
          where: "Via del Boschetto & around",
          lat: 41.89585, lng: 12.49236,
          mapsQuery: "Via del Boschetto, Roma",
          notes: ["Vintage shops and independent designers, 10 min walk from the Colosseum"],
        },
      ],
      tips: [],
    },
  ],

  // Shopping list: add items here. Fields: name, what, day ("sat" | "sun"), lat/lng or mapsQuery.
  shopping: [
    {"cat": ["Food & drink"], "name": "Osteria del Cinghiale Bianco", "what": "Borgo San Jacopo 43r · 6:00–10:30pm · traditional Tuscan since the late 1800s, by Ponte Vecchio and the easiest walk to Locale. Order the wild boar pasta, peposo or truffle dishes.", "day": "sat", "mapsQuery": "Osteria del Cinghiale Bianco, Borgo San Jacopo 43r, Firenze"},
    {"cat": ["Food & drink"], "name": "Burro & Acciughe", "what": "Via dell'Orto 35r, San Frediano · 7:00–10:30pm · seafood, a break from meat", "day": "sat", "mapsQuery": "Burro e Acciughe, Via dell'Orto 35r, Firenze"},
    {"cat": ["Food & drink"], "name": "Pandemonio di Casa Brogi", "what": "Via del Leone 50r · 7:30–10:30pm", "day": "sat", "mapsQuery": "Pandemonio di Casa Brogi, Via del Leone 50r, Firenze"},
    {"cat": ["Food & drink"], "name": "Alla Vecchia Bettola", "what": "Viale Vasco Pratolini 3/5/7 · 7:30–10:30pm · known for steak, so order pasta", "day": "sat", "mapsQuery": "Alla Vecchia Bettola, Viale Vasco Pratolini, Firenze"},

    {
      "who": "her", "cat": ["Vintage", "Clothing"], "name": "Boutique Nadine",
      "what": "Lungarno Acciaiuoli 22r · Opens 10:30 · silk & designer vintage",
      "day": "sun",
      "mapsQuery": "Boutique Nadine, Lungarno Acciaiuoli 22r, Firenze"
    },
    {
      "who": "him", "cat": ["Shoes"], "name": "Calzoleria Toscana",
      "what": "Via della Vigna Nuova 24r · Opens 10:30 · men's loafers",
      "day": "sun",
      "mapsQuery": "Calzoleria Toscana, Via della Vigna Nuova 24r, Firenze"
    },
    {
      "who": "him", "cat": ["Shoes"], "name": "Goccia Shoes",
      "what": "Via Pellicceria 12r · Opens 11:00 · men's loafers",
      "day": "sun",
      "mapsQuery": "Goccia Shoes, Via Pellicceria 12r, Firenze"
    },
    {
      "who": "both", "cat": ["Leather"], "name": "La Pelle Firenze",
      "what": "Via de' Guicciardini 11r · Opens 10:30 · leather",
      "day": "sun",
      "mapsQuery": "La Pelle Firenze, Via de' Guicciardini 11r, Firenze"
    },
    {
      "who": "her", "cat": ["Vintage"], "name": "C'est Chic Vintage",
      "what": "Via Maggio 17r · Opens 10:30 · vintage accessories",
      "day": "sun",
      "mapsQuery": "C'est Chic Vintage, Via Maggio 17r, Firenze"
    },
    {
      "who": "her", "cat": ["Leather"], "name": "Il Bisonte",
      "what": "Via del Parione 31r · Opens 10:30 · purses",
      "day": "sun",
      "mapsQuery": "Il Bisonte, Via del Parione 31r, Firenze"
    }
  ],
};
