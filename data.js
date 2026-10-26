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
          time: "21:45", end: "22:30", status: "walk",
          statusLabel: "No booking · open till 11:30",
          "cat": ["Food & drink"], title: "Quick bite · Gusta Pizza",
          where: "Via Maggio 46r",
          lat: 43.76592, lng: 11.24841,
          mapsQuery: "Gustapizza, Via Maggio 46r, Firenze",
          notes: ["Pizzas €6–14, order at the counter, the line moves fast", "Confirmed open tonight until 11:30pm"],
        },
        {
          time: "22:30", end: "23:30", status: "free",
          statusLabel: "Open till 2am",
          "cat": ["Food & drink"], title: "Drinks · Piazza Santo Spirito + Volume",
          where: "Piazza Santo Spirito 3r",
          lat: 43.76669, lng: 11.24788,
          mapsQuery: "Volume, Piazza Santo Spirito 3r, Firenze",
          notes: ["Saturday is the square's busiest night, with drinks out on the church steps", "Volume: bar in an old hat workshop, open 5pm–2am"],
        },
        {
          time: "23:30", end: "01:30", status: "walk",
          statusLabel: "Open till 2am",
          "cat": ["Food & drink"], title: "Cocktails · Mad Souls & Spirits",
          where: "Borgo San Frediano 36r",
          lat: 43.76993, lng: 11.24315,
          mapsQuery: "Mad Souls & Spirits, Borgo San Frediano 36r, Firenze",
          notes: ["Locals' favourite and one of the best cocktail bars in Florence, without the hotel-bar prices", "Confirmed open tonight 6pm–2am"],
        },
        {
          time: "01:45", status: "free",
          statusLabel: "Home",
          "cat": ["Travel"], title: "Home · Gallery Hotel Art",
          where: "Vicolo dell'Oro 5, at the north end of Ponte Vecchio",
          lat: 43.76893, lng: 11.25322,
          mapsQuery: "Gallery Hotel Art, Vicolo dell'Oro 5, Firenze",
          notes: ["Walk back along the river and over Ponte Vecchio"],
        },
      ],
      tips: [
        "Clocks go back one hour overnight, so tomorrow's 8:15 is 8:15 on the new time.",
        "Duomo bags: suitcases, backpacks and medium or large bags aren't allowed. A small crossbody is fine.",
        "Shoulders and knees must be covered at the cathedral.",
        "Hours checked on Google at 9:36pm. Osteria Santo Spirito closes at 10pm, and the La Terrazza rooftop at Hotel Continentale is temporarily closed.",
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
          "time": "11:55",
          "end": "12:10",
          "status": "walk",
          "cat": ["Travel"], "title": "Head to Santa Maria Novella station",
          "where": "About 10 min on foot",
          "notes": [
            "Pick up luggage first if it's at the hotel"
          ]
        },
        {
          "time": "12:28",
          "end": "14:05",
          "status": "booked",
          "statusLabel": "Italo · booked",
          "cat": ["Travel"], "title": "Train · Firenze SMN → Roma Termini",
          "where": "Santa Maria Novella station",
          "lat": 43.77634,
          "lng": 11.24813,
          "notes": [
            "Italo, departs 12:28, arrives Roma Termini about 14:05",
            "Ticket and QR code in the Italo app (or the Italo desk in the main hall)",
            "Stay on past Roma Tiburtina until Termini"
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
          "time": "14:05",
          "end": "14:30",
          "status": "walk",
          "cat": ["Travel"], "title": "Rome · drop bags at CC Palace, taxi to the catacombs",
          "where": "Roma Termini",
          "mapsQuery": "Roma Termini",
          "notes": [
            "Taxi to CC Palace (Via delle Quattro Fontane 37), about 5 min",
            "Then taxi to the catacombs, about 20–25 min. If the train is late, go straight from Termini with the bags",
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
      subtitle: "Monday 26 October: the Colosseum, gifts in Monti and Navona, St. Peter's, dinner in Testaccio",
      chips: ["Cover shoulders & knees", "Bring ID", "Pack tonight: 6am taxi"],
      showShopping: true,
      center: [41.8985, 12.4800],
      stops: [
        {
          time: "10:45", end: "11:00", status: "walk",
          "cat": ["Travel"], title: "Leave CC Palace",
          where: "Via delle Quattro Fontane 37",
          lat: 41.9012, lng: 12.4932,
          notes: ["Walk downhill through Monti, about 15 min", "Open the GetYourGuide ticket before you leave in case signal is bad"],
        },
        {
          time: "11:00", end: "11:40", status: "free",
          "cat": ["Food & drink"], title: "Breakfast · La Bottega del Caffè",
          where: "Piazza della Madonna dei Monti 5",
          lat: 41.8951, lng: 12.4903,
          mapsQuery: "La Bottega del Caffè, Piazza della Madonna dei Monti 5, Roma",
          notes: ["Tables on the square; cornetti, omelets, yogurt with fruit", "Try a maritozzo (cream bun) if they have them", "5 min walk to the meeting point"],
        },
        {
          time: "12:00", end: "12:30", status: "booked",
          statusLabel: "Meet at 12:00",
          "cat": ["Sights"], title: "Colosseum · check in with Italy in Love Tours",
          where: "Via del Cardello 31",
          lat: 41.8931, lng: 12.4925,
          mapsQuery: "Via del Cardello 31, Roma",
          notes: ["The operator moved the meeting time to 12:00 (not 12:15)", "Both passports or photo IDs; names must match the booking", "Ask the guide whether the underground is actually included today. If not, ask GetYourGuide for a partial refund"],
        },
        {
          time: "12:30", end: "14:00", status: "booked",
          "cat": ["Sights"], title: "Colosseum · Underground & Arena Floor tour",
          where: "Colosseum",
          lat: 41.89021, lng: 12.49223,
          notes: ["English guided tour, 1.5 hours", "Tickets are in the GetYourGuide app"],
        },
        {
          time: "14:00", end: "14:40", status: "free",
          "cat": ["Food & drink"], title: "Lunch · Mizio's Street Food",
          where: "Via degli Zingari 54a, Monti",
          lat: 41.8960, lng: 12.4930,
          mapsQuery: "Mizio's Street Food, Via degli Zingari 54a, Roma",
          notes: ["Panini with Roman fillings, open until 8pm", "Or try supplì (fried rice balls with mozzarella)"],
        },
        {
          time: "14:40", end: "14:55", status: "free",
          "cat": ["Food & drink"], title: "Gelato · Fatamorgana",
          where: "Piazza degli Zingari 5",
          lat: 41.8963, lng: 12.4924,
          mapsQuery: "Fatamorgana, Piazza degli Zingari 5, Roma",
          notes: ["Natural and gluten-free; pear & gorgonzola, baklava, black cherry & beer"],
        },
        {
          time: "14:55", end: "15:30", status: "walk",
          "who": "both", "cat": ["Clothing", "Vintage"], title: "Monti boutiques · gifts for the cousins",
          where: "Via del Boschetto",
          lat: 41.8970, lng: 12.4920,
          mapsQuery: "Kokoro, Via del Boschetto 75, Roma",
          notes: ["Kokoro (Via del Boschetto 75): one-of-a-kind women's clothes by the owners", "Nous Atelier: handmade clothes and jewellery by two sisters", "Hang Roma: original Italian bags"],
        },
        {
          time: "15:45", end: "16:05", status: "walk",
          "who": "both", "cat": ["Clothing"], title: "Made About Dreams · for your nephew",
          where: "Piazza San Salvatore in Lauro 11",
          lat: 41.9013, lng: 12.4706,
          mapsQuery: "Made About Dreams, Piazza San Salvatore in Lauro 11, Roma",
          notes: ["10 min taxi from Monti", "Hand-knitted cardigans and bloomers, handmade cotton toys, cashmere onesies"],
        },
        {
          time: "16:05", end: "16:20", status: "free",
          "cat": ["Food & drink"], title: "Gelato #2 · Gelateria del Teatro",
          where: "Via dei Coronari 65",
          lat: 41.9009, lng: 12.4714,
          mapsQuery: "Gelateria del Teatro, Via dei Coronari 65, Roma",
          notes: ["Optional. Open 11am–11pm", "Walk Via dei Coronari for antiques and prints"],
        },
        {
          time: "16:20", end: "16:40", status: "walk",
          "who": "both", "cat": ["Markets"], title: "Bartolucci + the Pantheon from outside",
          where: "Via dei Pastini 98 / Piazza della Rotonda",
          lat: 41.8995, lng: 12.4778,
          mapsQuery: "Bartolucci, Via dei Pastini 98, Roma",
          notes: ["Handmade wooden Pinocchios and toys since 1936. Buy here, not from souvenir stands", "Online Pantheon tickets were sold out today; see the portico and piazza"],
        },
        {
          time: "17:00", end: "18:00", status: "free",
          statusLabel: "Free · security line",
          "cat": ["Sights"], title: "St. Peter's Basilica",
          where: "Piazza San Pietro",
          lat: 41.9022, lng: 12.4539,
          mapsQuery: "Basilica di San Pietro, Roma",
          notes: ["10 min taxi from the Pantheon", "Shoulders and knees covered, hats off inside", "Security line 15–45 min. Be in line by about 5pm; check closing time on Google", "Michelangelo's Pietà is just inside on the right"],
        },
        {
          time: "18:10", end: "18:45", status: "walk",
          "who": "both", "cat": ["Travel"], title: "Termini · cheap suitcase, toys, wine",
          where: "Roma Termini",
          lat: 41.9010, lng: 12.5016,
          mapsQuery: "Roma Termini",
          notes: ["Taxi from St. Peter's, about 20 min", "Cheap luggage shops on the streets toward Piazza Vittorio", "Città del Sole toy shop inside the station", "Trimani wine shop, Via Goito 20"],
        },
        {
          time: "18:50", end: "19:15", status: "walk",
          "cat": ["Travel"], title: "Hotel · pack and change",
          where: "CC Palace, Via delle Quattro Fontane 37",
          lat: 41.9012, lng: 12.4932,
          notes: ["Pack the new suitcase tonight", "Ask the front desk to book a 6:00am taxi to FCO"],
        },
        {
          time: "19:30", status: "book",
          statusLabel: "Call to book",
          "cat": ["Food & drink"], title: "Dinner · Agustarello a Testaccio",
          where: "Via Giovanni Branca 98, Testaccio",
          lat: 41.8780, lng: 12.4752,
          mapsQuery: "Agustarello a Testaccio, Via Giovanni Branca 98, Roma",
          notes: ["Taxi from the hotel, about 15 min", "Open Monday 7:30–11:30pm", "Order the rigatoni con la pajata and the oxtail meatballs", "Backups: Felice a Testaccio and Flavio al Velavevodetto (see below)"],
        },
      ],
      tips: [
        "Many small Roman shops stay closed until about 3:30pm on Monday mornings, so do the shopping in the afternoon.",
        "Most state museums are closed on Mondays. Churches, shops and the Colosseum are open.",
        "Felice a Testaccio only takes phone bookings between 10am and 7pm.",
        "Skip the Vatican Museums today; they take 3 hours. St. Peter's Basilica is free.",
      ],
    },
    {
      id: "tue",
      date: "2026-10-27",
      tab: "Tue 27 · Fly home",
      title: "Fly home",
      subtitle: "Tuesday 27 October: taxi to Fiumicino, be there by 7:00",
      chips: ["Taxi booked by the front desk", "Passports"],
      showShopping: false,
      center: [41.85, 12.37],
      stops: [
        {
          time: "05:30", end: "06:00", status: "walk",
          "cat": ["Travel"], title: "Check out of CC Palace",
          where: "Via delle Quattro Fontane 37",
          lat: 41.9012, lng: 12.4932,
          notes: ["Settle the Rome city tax at the desk if it wasn't prepaid"],
        },
        {
          time: "06:00", end: "06:40", status: "book",
          statusLabel: "Pre-book taxi",
          "cat": ["Travel"], title: "Taxi to Fiumicino (FCO)",
          where: "CC Palace → FCO",
          notes: ["Fixed fare from inside the city walls, about €55–60 (check the current rate)", "About 35–40 min at that hour"],
        },
        {
          time: "06:40", end: "07:00", status: "walk",
          "cat": ["Travel"], title: "Arrive at FCO",
          where: "Fiumicino Airport",
          lat: 41.8003, lng: 12.2389,
          mapsQuery: "Aeroporto di Roma-Fiumicino",
          notes: ["Be there by 7:00"],
        },
      ],
      tips: [],
    },
  ],

  // Shopping list: add items here. Fields: name, what, day ("sat" | "sun" | "mon"), lat/lng or mapsQuery.
  shopping: [
    {"cat": ["Food & drink"], "name": "Felice a Testaccio", "what": "Via Mastro Giorgio 29 · Mon 7:30–11pm · famous cacio e pepe tossed at the table · phone bookings only, 10am–7pm: +39 06 574 6800", "day": "mon", "mapsQuery": "Felice a Testaccio, Via Mastro Giorgio 29, Roma"},
    {"cat": ["Food & drink"], "name": "Flavio al Velavevodetto", "what": "Via di Monte Testaccio 97 · Mon 7:30–11pm · classic Roman, built into Monte Testaccio · +39 06 574 4194", "day": "mon", "mapsQuery": "Flavio al Velavevodetto, Via di Monte Testaccio 97, Roma"},
    {"cat": ["Food & drink"], "name": "Trattoria Perilli", "what": "Testaccio · locals' benchmark for Roman food · hours vary by source, call first: +39 06 574 2415", "day": "mon", "mapsQuery": "Trattoria Perilli, Via Marmorata 39, Roma"},
    {"cat": ["Food & drink"], "name": "Bar La Licata", "what": "Via dei Serpenti 165 · breakfast backup · pistachio-cream cornetto · check hours", "day": "mon", "mapsQuery": "Bar La Licata, Via dei Serpenti 165, Roma"},
    {"who": "both", "cat": ["Clothing"], "name": "Rachele", "what": "Near Campo de' Fiori · handmade, playful kids' clothing", "day": "mon", "mapsQuery": "Rachele kids clothing, Roma"},
    {"cat": ["Sights"], "name": "Pantheon (inside)", "what": "Official tickets sold out today. GetYourGuide had a 5pm slot (Prime Travels, €18 pp, low rating). Bartolucci is 2 min away", "day": "mon", "mapsQuery": "Pantheon, Roma"},
    {"cat": ["Food & drink"], "name": "Locale Firenze", "what": "Via delle Seggiole 12r · open till 2am · fancier cocktails in a palace courtyard, €16–22, 12 min from the hotel", "day": "sat", "lat": 43.77108, "lng": 11.26037, "mapsQuery": "Locale Firenze, Via delle Seggiole 12r, Firenze"},
    {"cat": ["Food & drink"], "name": "YAB (dance club)", "what": "Via de' Sassetti 5r, by Piazza della Repubblica · 11:30pm–4:30am · fills up after 1am, 5 min from the hotel", "day": "sat", "mapsQuery": "YAB, Via de' Sassetti 5r, Firenze"},
    {"cat": ["Food & drink"], "name": "Il Santino (wine bar)", "what": "Via Santo Spirito 60r · open till 11pm · wine, cheese and crostini", "day": "sat", "mapsQuery": "Il Santino, Via Santo Spirito 60r, Firenze"},
    {"cat": ["Food & drink"], "name": "Mercato Centrale (food hall)", "what": "Upstairs at San Lorenzo · open till 11pm · cheap pasta, pizza and wine at communal tables", "day": "sat", "mapsQuery": "Mercato Centrale, Via dell'Ariento, Firenze"},
    {"cat": ["Food & drink"], "name": "Osteria del Cinghiale Bianco", "what": "Borgo San Jacopo 43r · closes 10:30pm · sit-down Tuscan, 4 min from the hotel. Only if you go right now.", "day": "sat", "mapsQuery": "Osteria del Cinghiale Bianco, Borgo San Jacopo 43r, Firenze"},
    {"cat": ["Food & drink"], "name": "Fusion Bar (in your hotel)", "what": "Gallery Hotel Art · hours unclear online, so ask the front desk", "day": "sat", "mapsQuery": "Gallery Hotel Art, Vicolo dell'Oro 5, Firenze"},

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
