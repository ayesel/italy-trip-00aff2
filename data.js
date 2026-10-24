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
      showShopping: false,
      center: [43.7696, 11.2558],
      stops: [
        {
          time: "11:15", end: "12:45", status: "walk",
          title: "Palazzo Vecchio",
          where: "Piazza della Signoria",
          lat: 43.76934, lng: 11.25625,
          notes: [
            "Hall of the Five Hundred, the Medici apartments",
            "Tickets at the door (open until 7pm)",
          ],
        },
        {
          time: "13:00", end: "14:15", status: "booked",
          title: "Lunch · Vini e Vecchi Sapori",
          where: "Via dei Magazzini 3r",
          lat: 43.77009, lng: 11.25598,
          mapsQuery: "Vini e Vecchi Sapori, Via dei Magazzini 3r, Firenze",
        },
        {
          time: "14:15", end: "15:00", status: "free",
          title: "Cathedral interior",
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
          title: "Dome meeting point + security",
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
          title: "Brunelleschi's Dome climb",
          where: "Porta della Mandorla (north side)",
          lat: 43.77365, lng: 11.25694,
          notes: ["463 steps, no lift", "Names on ticket must match ID", "Pass also covers Baptistery + Duomo Museum for 3 days"],
        },
        {
          "time": "17:00",
          "end": "17:20",
          "status": "walk",
          "title": "Mannina (workshop)",
          "where": "Via de' Barbadori 19r · for him",
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
          "title": "Madova",
          "where": "Via de' Guicciardini 1r · for both",
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
          "title": "Officine Nora",
          "where": "Via dei Preti 4 · for her",
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
          "title": "Bjørk",
          "where": "Via dello Sprone 25 · for him",
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
          "title": "Jennifer Tattanelli",
          "where": "Piazza de' Pitti 31r · for her",
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
          "title": "Heart to Heart",
          "where": "Via Santo Spirito 54r · for her",
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
          "title": "Angela Caputi",
          "where": "Via Santo Spirito 58r · for her",
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
          "title": "Recollection by Albrici",
          "where": "Via dei Serragli 22r · for her",
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
          "title": "Momo Vintage",
          "where": "Via dei Serragli 24r · for both",
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
          "title": "Maglificio GRP",
          "where": "Via Sant'Agostino 30 · for him",
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
          "title": "Hello Wonderful",
          "where": "Via Santa Monaca 2 · for her",
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
          time: "20:00", status: "book",
          statusLabel: "Call to book",
          title: "Dinner · Antico Ristoro di Cambi",
          where: "Via Sant'Onofrio 1r, San Frediano",
          lat: 43.76892, lng: 11.24302,
          mapsQuery: "Antico Ristoro di Cambi, Firenze",
        },
        {
          time: "22:00", status: "book",
          statusLabel: "Call to book",
          title: "Drinks · Locale Firenze",
          where: "Via delle Seggiole 12r",
          lat: 43.77108, lng: 11.26037,
          mapsQuery: "Locale Firenze, Via delle Seggiole 12r",
          notes: ["+39 055 906 7188 (from a third-party listing)", "Renaissance palace courtyard, open until 2am"],
          links: [{ label: "Call", url: "tel:+390559067188" }],
        },
      ],
      tips: [
        "Clocks go back one hour overnight, so tomorrow's 8:15 is 8:15 on the new time.",
        "Duomo bags: suitcases, backpacks and medium or large bags aren't allowed. A small crossbody is fine.",
        "Shoulders and knees must be covered at the cathedral.",
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
      subtitle: "Sunday 25 October: markets and leather, then a midday train to Rome",
      chips: ["Clocks went back 1h", "Cathedral closed to visitors"],
      showShopping: true,
      center: [43.7735, 11.256],
      stops: [
        {
          "time": "08:15",
          "end": "08:50",
          "status": "walk",
          "statusLabel": "Optional",
          "title": "Medici Chapels (if you're up early)",
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
          "title": "Mercato delle Pulci + Piazza dei Ciompi vintage market",
          "where": "Largo Annigoni / Piazza dei Ciompi · for both",
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
          "title": "Scuola del Cuoio",
          "where": "Via San Giuseppe 5r (Santa Croce cloister) · for both",
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
          "title": "Mannina (shop)",
          "where": "Via de' Guicciardini 16r · for him",
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
          "title": "Santo Spirito in Fiera",
          "where": "Piazza Santo Spirito · for both",
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
          "title": "Celeste Vintage",
          "where": "Piazza San Felice 1r · for her",
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
          "title": "Davide Cerasi Leather Boutique",
          "where": "Lungarno Acciaiuoli 30r · for both",
          "lat": 43.76862,
          "lng": 11.25218,
          "mapsQuery": "Davide Cerasi Leather Boutique, Lungarno Acciaiuoli 30r, Firenze",
          "notes": [
            "Leather jackets and bags, Florentine, 30 years",
            "Opens 11:00"
          ]
        },
        {
          "time": "11:45",
          "end": "12:00",
          "status": "walk",
          "title": "Head to Santa Maria Novella station",
          "where": "About 10 min on foot",
          "notes": [
            "Pick up luggage first if it's at the hotel"
          ]
        },
        {
          "time": "12:15",
          "status": "book",
          "statusLabel": "Buy in app",
          "title": "Train · Firenze SMN → Roma Termini",
          "where": "Santa Maria Novella station",
          "lat": 43.77634,
          "lng": 11.24813,
          "notes": [
            "Frecciarossa (Trenitalia) or Italo, about 1h35, every 15–30 min",
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
          title: "Colosseum tour",
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
          title: "Monti · vintage",
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
    {
      "name": "Boutique Nadine",
      "what": "Lungarno Acciaiuoli 22r · Opens 10:30 · silk & designer vintage",
      "day": "sun",
      "mapsQuery": "Boutique Nadine, Lungarno Acciaiuoli 22r, Firenze"
    },
    {
      "name": "Calzoleria Toscana",
      "what": "Via della Vigna Nuova 24r · Opens 10:30 · men's loafers",
      "day": "sun",
      "mapsQuery": "Calzoleria Toscana, Via della Vigna Nuova 24r, Firenze"
    },
    {
      "name": "Goccia Shoes",
      "what": "Via Pellicceria 12r · Opens 11:00 · men's loafers",
      "day": "sun",
      "mapsQuery": "Goccia Shoes, Via Pellicceria 12r, Firenze"
    },
    {
      "name": "La Pelle Firenze",
      "what": "Via de' Guicciardini 11r · Opens 10:30 · leather",
      "day": "sun",
      "mapsQuery": "La Pelle Firenze, Via de' Guicciardini 11r, Firenze"
    },
    {
      "name": "C'est Chic Vintage",
      "what": "Via Maggio 17r · Opens 10:30 · vintage accessories",
      "day": "sun",
      "mapsQuery": "C'est Chic Vintage, Via Maggio 17r, Firenze"
    },
    {
      "name": "Il Bisonte",
      "what": "Via del Parione 31r · Opens 10:30 · purses",
      "day": "sun",
      "mapsQuery": "Il Bisonte, Via del Parione 31r, Firenze"
    }
  ],
};
