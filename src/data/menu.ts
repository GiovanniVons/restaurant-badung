export interface MenuItem {
  name: string;
  desc: { nl: string; en: string };
  priceDineIn: string;
  priceTakeaway: string | null; // null = not available for takeaway
  spice?: 1 | 2 | 3;
  vegetarian?: boolean;
}

export interface MenuCategory {
  name: { nl: string; en: string };
  slug: string;
  items: MenuItem[];
}

export interface RijsttafelOption {
  name: string;
  priceDineIn: string;
  priceTakeaway: string | null;
  desc: { nl: string; en: string };
  vegetarian?: boolean;
  flagship?: boolean;
  takeawayNote?: { nl: string; en: string };
}

export interface MonthlySpecial {
  name: string;
  desc: { nl: string; en: string };
  priceDineIn: string;
  priceTakeaway: string | null;
  activeMonth: string; // ISO "2026-04" -- empty string to hide
}

/* ────────────────────────────────────────────
 * Rijsttafel options
 * Dine-in: per person, min 2 persons
 * Takeaway: per portion (1-2 persons)
 * ──────────────────────────────────────────── */

export const RIJSTTAFEL_OPTIONS: RijsttafelOption[] = [
  {
    name: "Rijsttafel Bogor",
    priceDineIn: "\u20AC31,00 p.p.",
    priceTakeaway: "\u20AC28,00",
    vegetarian: true,
    desc: {
      nl: "De vegetarische rijsttafel. Gado-gado, temp\u00E9, tahu en groenten in rijke sauzen. Dezelfde diepte en variatie, geheel plantaardig.",
      en: "The vegetarian rijsttafel. Gado-gado, tempeh, tofu and vegetables in rich sauces. The same depth and variety, entirely plant-based.",
    },
  },
  {
    name: "Rijsttafel Sukabumi",
    priceDineIn: "\u20AC33,00 p.p.",
    priceTakeaway: "\u20AC28,00",
    desc: {
      nl: "De klassieke Sundanese rijsttafel. Een evenwichtige selectie van vlees, vis en groenten uit de West-Javaanse keuken.",
      en: "The classic Sundanese rijsttafel. A balanced selection of meat, fish and vegetables from the West Javanese kitchen.",
    },
  },
  {
    name: "Rijsttafel Bandung",
    priceDineIn: "\u20AC35,50 p.p.",
    priceTakeaway: "\u20AC30,75",
    desc: {
      nl: "Onze naamgenoot. De smaken van West-Java op tafel, met rendang, sat\u00E9 en huisgemaakte sambal.",
      en: "Our namesake. The flavours of West Java at your table, with rendang, satay and house-made sambal.",
    },
  },
  {
    name: "Rijsttafel Pangandaran",
    priceDineIn: "\u20AC35,50 p.p.",
    priceTakeaway: "\u20AC30,75",
    desc: {
      nl: "De visrijsttafel. Pangandaran is de kustplaats van West-Java, en die invloed proef je: vis, garnalen en zeevruchten naast de klassiekers.",
      en: "The seafood rijsttafel. Pangandaran is the coastal town of West Java, and you can taste that influence: fish, prawns and seafood alongside the classics.",
    },
  },
  {
    name: "Rijsttafel Banten",
    priceDineIn: "\u20AC36,00 p.p.",
    priceTakeaway: "\u20AC71,00",
    flagship: true,
    desc: {
      nl: "Ons vlaggenschip. De meest uitgebreide rijsttafel, met extra gerechten en de beste selectie uit de keuken.",
      en: "Our flagship. The most extensive rijsttafel, with extra dishes and the finest selection from the kitchen.",
    },
    takeawayNote: {
      nl: "Afhaalportie voor 2 personen",
      en: "Takeaway portion for 2 persons",
    },
  },
];

/* ────────────────────────────────────────────
 * Monthly specials
 * Client provides content per month.
 * Set activeMonth to "" to hide section.
 * ──────────────────────────────────────────── */

export const MONTHLY_SPECIALS: MonthlySpecial[] = [
  {
    name: "Maandmenu",
    desc: {
      nl: "Elke maand stelt Yana een speciaal menu samen met seizoensgebonden gerechten. Vraag naar het maandmenu bij reservering.",
      en: "Every month Yana puts together a special menu with seasonal dishes. Ask about the monthly menu when you reserve.",
    },
    priceDineIn: "\u20AC24,50",
    priceTakeaway: "\u20AC21,00",
    activeMonth: "2026-04",
  },
];

/* ────────────────────────────────────────────
 * Full menu -- all categories
 *
 * Price notes:
 * - Dine-in and takeaway prices from the
 *   restaurant's published pricing
 * - Items with priceTakeaway: null are
 *   dine-in only
 * ──────────────────────────────────────────── */

export const MENU_CATEGORIES: MenuCategory[] = [
  /* ── Voorgerechten & Soepen ── */
  {
    name: { nl: "Voorgerechten & Soepen", en: "Starters & Soups" },
    slug: "voorgerechten",
    items: [
      {
        name: "Soto Ayam",
        desc: { nl: "Heldere kippensoep, geel van de kurkuma. Met glasnoedels, taug\u00E9, selderij en knapperige gebakken uitjes.", en: "Clear chicken soup, golden with turmeric. With glass noodles, bean sprouts, celery and crispy fried shallots." },
        priceDineIn: "\u20AC7,50",
        priceTakeaway: "\u20AC6,50",
      },
      {
        name: "Sop Tomat",
        desc: { nl: "Indonesische tomatensoep met kip, glasnoedels en een vleugje nootmuskaat. Licht en verwarmend.", en: "Indonesian tomato soup with chicken, glass noodles and a hint of nutmeg. Light and warming." },
        priceDineIn: "\u20AC7,50",
        priceTakeaway: "\u20AC6,50",
      },
      {
        name: "Sayur Asem",
        desc: { nl: "Zure groentesoep met tamarinde, ma\u00EFs, lange bonen en pompoen. Fris, licht, puur plantaardig.", en: "Sour vegetable soup with tamarind, corn, long beans and pumpkin. Fresh, light, entirely plant-based." },
        priceDineIn: "\u20AC7,50",
        priceTakeaway: "\u20AC6,50",
        vegetarian: true,
      },
      {
        name: "Lumpia",
        desc: { nl: "Knapperig gebakken loempia's gevuld met groenten en kip. Geserveerd met zoetzure saus.", en: "Crispy fried spring rolls filled with vegetables and chicken. Served with sweet and sour sauce." },
        priceDineIn: "\u20AC8,50",
        priceTakeaway: "\u20AC2,75",
      },
      {
        name: "Mini Lumpias",
        desc: { nl: "Zes kleine knapperige loempia's, perfect als gedeeld voorgerecht.", en: "Six small crispy spring rolls, perfect as a shared starter." },
        priceDineIn: "\u20AC4,50",
        priceTakeaway: "\u20AC2,75",
      },
      {
        name: "Pastel",
        desc: { nl: "Gevulde pasteitjes met kip en groenten in een krokant deegmantel.", en: "Filled pastries with chicken and vegetables in a crispy dough shell." },
        priceDineIn: "\u20AC5,50",
        priceTakeaway: "\u20AC3,50",
      },
      {
        name: "Risolles",
        desc: { nl: "Gepaneerde broodjes gevuld met ragout. Krokant van buiten, romig van binnen.", en: "Breaded rolls filled with ragout. Crispy outside, creamy inside." },
        priceDineIn: "\u20AC5,50",
        priceTakeaway: "\u20AC3,50",
      },
      {
        name: "Lemper",
        desc: { nl: "Kleefrijst gevuld met gekruide kip, gewikkeld in bananenblad. Een Javaans klassieker.", en: "Sticky rice filled with spiced chicken, wrapped in banana leaf. A Javanese classic." },
        priceDineIn: "\u20AC5,50",
        priceTakeaway: "\u20AC3,75",
      },
      {
        name: "Perkedel Jagung",
        desc: { nl: "Ma\u00EFskoekjes met kruiden, gebakken tot ze goudbruin zijn. Licht, zoet, knapperig.", en: "Corn fritters with spices, fried until golden brown. Light, sweet, crispy." },
        priceDineIn: "\u20AC7,50",
        priceTakeaway: "\u20AC3,50",
      },
      {
        name: "Tahu Isi",
        desc: { nl: "Gevulde tahublokjes met groenten, gefrituurd in een dun krokant jasje.", en: "Stuffed tofu blocks with vegetables, deep-fried in a thin crispy batter." },
        priceDineIn: "\u20AC7,50",
        priceTakeaway: "\u20AC3,50",
        vegetarian: true,
      },
      {
        name: "Sarang Kupang",
        desc: { nl: "Krokant gebakken mosselkoekje met kruiden. Een bijzondere Javaanse snack.", en: "Crispy fried mussel fritter with spices. A special Javanese snack." },
        priceDineIn: "\u20AC9,50",
        priceTakeaway: "\u20AC7,50",
      },
      {
        name: "Udang Tepung",
        desc: { nl: "Garnalen in een luchtig beslag, gebakken tot goudbruin. Geserveerd met zoete chilisaus.", en: "Prawns in a light batter, fried until golden. Served with sweet chilli sauce." },
        priceDineIn: "\u20AC9,50",
        priceTakeaway: "\u20AC7,50",
      },
    ],
  },

  /* ── Sat\u00E9 ── */
  {
    name: { nl: "Sat\u00E9", en: "Satay" },
    slug: "sate",
    items: [
      {
        name: "Sat\u00E9 Ayam",
        desc: { nl: "Kipsat\u00E9 van de houtskoolgrill, gemarineerd in kecap manis en knoflook. Met pindasaus, lontong en atjar.", en: "Chicken satay from the charcoal grill, marinated in kecap manis and garlic. With peanut sauce, lontong and pickled vegetables." },
        priceDineIn: "\u20AC9,50",
        priceTakeaway: "\u20AC6,90",
      },
      {
        name: "Sat\u00E9 Sapi",
        desc: { nl: "Rundvleessat\u00E9, gemarineerd in ketumbar en knoflook. Stevig van smaak, met pindasaus en lontong.", en: "Beef satay, marinated in coriander and garlic. Bold in flavour, with peanut sauce and lontong." },
        priceDineIn: "\u20AC12,50",
        priceTakeaway: "\u20AC9,90",
      },
      {
        name: "Sat\u00E9 Babi",
        desc: { nl: "Varkenssat\u00E9, gegrild met een zoete kecap-marinade. Met pindasaus en lontong.", en: "Pork satay, grilled with a sweet kecap marinade. With peanut sauce and lontong." },
        priceDineIn: "\u20AC9,50",
        priceTakeaway: "\u20AC7,50",
      },
      {
        name: "Sat\u00E9 Kambing",
        desc: { nl: "Geitensat\u00E9, gemarineerd in ketumbar en djintan. Steviger van smaak, geserveerd met kecapsaus.", en: "Goat satay, marinated in coriander and cumin. Bolder in flavour, served with kecap sauce." },
        priceDineIn: "\u20AC9,90",
        priceTakeaway: "\u20AC9,60",
      },
      {
        name: "Sat\u00E9 Udang",
        desc: { nl: "Garnalensaté van de grill. Licht gemarineerd in citroengras en kurkuma.", en: "Prawn satay from the grill. Lightly marinated in lemongrass and turmeric." },
        priceDineIn: "\u20AC9,50",
        priceTakeaway: "\u20AC7,50",
      },
      {
        name: "Sat\u00E9 Tahu/Temp\u00E9",
        desc: { nl: "Gegrilde tahu en temp\u00E9 met pindasaus. De vegetarische keuze van de sat\u00E9bar.", en: "Grilled tofu and tempeh with peanut sauce. The vegetarian choice from the satay bar." },
        priceDineIn: "\u20AC8,50",
        priceTakeaway: "\u20AC6,00",
        vegetarian: true,
      },
      {
        name: "Sat\u00E9 Lilit",
        desc: { nl: "Balinese sat\u00E9 van gehakt vis rond citroengras, gegrild op houtskool. Aromatisch en uniek.", en: "Balinese satay of minced fish wrapped around lemongrass, grilled on charcoal. Aromatic and unique." },
        priceDineIn: "\u20AC9,50",
        priceTakeaway: "\u20AC7,50",
      },
    ],
  },

  /* ── Vlees ── */
  {
    name: { nl: "Vleesgerechten", en: "Meat dishes" },
    slug: "vlees",
    items: [
      {
        name: "Rendang Sapi",
        desc: { nl: "Rundvlees, uren gestoofd in kokos en een pasta van rode peper, laos, kurkuma en citroengras. Droog, intens, onvergetelijk.", en: "Beef, slow-braised for hours in coconut and a paste of red chilli, galangal, turmeric and lemongrass. Dry, intense, unforgettable." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC17,00",
        spice: 2,
      },
      {
        name: "Daging Smoor",
        desc: { nl: "Rundvlees gestoofd in kecap manis, tomaat en ui. Zoet, hartig, vol en zacht.", en: "Beef braised in kecap manis, tomato and onion. Sweet, savoury, rich and tender." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC17,00",
      },
      {
        name: "Daging Gulai",
        desc: { nl: "Rundvlees in een gouden kokoscurry met kurkuma, laos en citroengras. Romig en aromatisch.", en: "Beef in a golden coconut curry with turmeric, galangal and lemongrass. Creamy and aromatic." },
        priceDineIn: "\u20AC19,50",
        priceTakeaway: "\u20AC18,00",
      },
      {
        name: "Babi Ketjap",
        desc: { nl: "Varkensvlees in kecap manis met knoflook en peper. Glanzend, zoet-hartig, boterzacht.", en: "Pork in kecap manis with garlic and pepper. Glossy, sweet-savoury, meltingly tender." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC17,00",
      },
      {
        name: "Tongseng Kambing",
        desc: { nl: "Geitenvlees gestoofd met kool en tomaat in een pittige kokossaus. Stevig, vol karakter.", en: "Goat meat braised with cabbage and tomato in a spicy coconut sauce. Hearty, full of character." },
        priceDineIn: "\u20AC22,00",
        priceTakeaway: "\u20AC20,00",
        spice: 1,
      },
      {
        name: "Gulai Kambing",
        desc: { nl: "Geitenvlees in een rijke gele kokoscurry. Zacht gekruid, langzaam gegaard.", en: "Goat meat in a rich yellow coconut curry. Gently spiced, slowly cooked." },
        priceDineIn: "\u20AC22,00",
        priceTakeaway: "\u20AC20,00",
      },
      {
        name: "Iga Bakar Sapi",
        desc: { nl: "Gegrilde rundvleesribben, gemarineerd in kecap manis en knoflook. Valt van het bot.", en: "Grilled beef ribs, marinated in kecap manis and garlic. Falls off the bone." },
        priceDineIn: "\u20AC24,50",
        priceTakeaway: "\u20AC24,00",
      },
    ],
  },

  /* ── Kip ── */
  {
    name: { nl: "Kipgerechten", en: "Chicken dishes" },
    slug: "kip",
    items: [
      {
        name: "Ayam Kecap",
        desc: { nl: "Kip gestoofd in kecap manis met sjalotten en knoflook. Zoet-hartig, zacht en glanzend.", en: "Chicken braised in kecap manis with shallots and garlic. Sweet-savoury, tender and glossy." },
        priceDineIn: "\u20AC16,50",
        priceTakeaway: "\u20AC15,50",
      },
      {
        name: "Ayam Padang",
        desc: { nl: "Kip in Padangse stijl: droog gegaard in een rijke kokos-kerriesaus met rode peper.", en: "Padang-style chicken: dry-cooked in a rich coconut curry sauce with red chilli." },
        priceDineIn: "\u20AC16,50",
        priceTakeaway: "\u20AC15,50",
        spice: 2,
      },
      {
        name: "Ayam Rujak",
        desc: { nl: "Kip in een pittig-zoete rujaksaus van tamarinde, rode peper en palmsuiker.", en: "Chicken in a spicy-sweet rujak sauce of tamarind, red chilli and palm sugar." },
        priceDineIn: "\u20AC16,50",
        priceTakeaway: "\u20AC15,50",
        spice: 1,
      },
      {
        name: "Ayam Rica Rica",
        desc: { nl: "Kip uit de Minahasa regio, in een vurige saus van rawit, tomaat en basilicum. Fris pittig.", en: "Chicken from the Minahasa region, in a fiery sauce of bird's eye chilli, tomato and basil. Fresh heat." },
        priceDineIn: "\u20AC16,50",
        priceTakeaway: "\u20AC15,50",
        spice: 3,
      },
      {
        name: "Ayam Gulai",
        desc: { nl: "Kip in een zachte gele kokoscurry met kurkuma en citroengras. Mild en romig.", en: "Chicken in a gentle yellow coconut curry with turmeric and lemongrass. Mild and creamy." },
        priceDineIn: "\u20AC16,50",
        priceTakeaway: "\u20AC15,50",
      },
      {
        name: "Ayam Tongseng",
        desc: { nl: "Kip gestoofd met kool en tomaat in een pikante kokossaus. Indonesische stoofpot.", en: "Chicken braised with cabbage and tomato in a zesty coconut sauce. Indonesian stew." },
        priceDineIn: "\u20AC16,50",
        priceTakeaway: "\u20AC15,00",
        spice: 1,
      },
    ],
  },

  /* ── Vis & Zeevruchten ── */
  {
    name: { nl: "Vis & Zeevruchten", en: "Fish & Seafood" },
    slug: "vis",
    items: [
      {
        name: "Sambal Goreng Udang",
        desc: { nl: "Garnalen in een pittige sambalgoreng van rode peper, sjalotten en laos. Intens en geurig.", en: "Prawns in a spicy sambal goreng of red chilli, shallots and galangal. Intense and fragrant." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC16,50",
        spice: 2,
      },
      {
        name: "Ikan Saos Mangut",
        desc: { nl: "Vis in een romige mangoetsaus met kurkuma en kokos. Midden-Javaans, zacht gekruid.", en: "Fish in a creamy mangut sauce with turmeric and coconut. Central Javanese, gently spiced." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC16,50",
      },
      {
        name: "Ikan Belado",
        desc: { nl: "Gebakken vis overgoten met sambal belado: rode peper, sjalotten, tomaat. Heet en helder.", en: "Fried fish drenched in sambal belado: red chilli, shallots, tomato. Hot and bright." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC16,50",
        spice: 2,
      },
      {
        name: "Ikan Acar",
        desc: { nl: "Gebakken vis met een koele, zure groentesaus van kurkuma, wortel en komkommer. Verrassend fris.", en: "Fried fish with a cool, tangy vegetable sauce of turmeric, carrot and cucumber. Surprisingly fresh." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC16,50",
      },
      {
        name: "Pepes Ikan",
        desc: { nl: "Vis gestoomd in bananenblad met een pasta van kurkuma, citroengras en sjalotten. Puur en aromatisch.", en: "Fish steamed in banana leaf with a paste of turmeric, lemongrass and shallots. Pure and aromatic." },
        priceDineIn: "\u20AC23,50",
        priceTakeaway: "\u20AC21,50",
      },
      {
        name: "Udang Rica Rica",
        desc: { nl: "Garnalen in een vurige rica-ricasaus uit de Minahasa. Fris, pittig, citroenachtig.", en: "Prawns in a fiery rica-rica sauce from Minahasa. Fresh, spicy, lemony." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC16,50",
        spice: 3,
      },
      {
        name: "Udang Kecap",
        desc: { nl: "Garnalen in kecap manis met knoflook en peper. Zoet-hartig, snel bereid.", en: "Prawns in kecap manis with garlic and pepper. Sweet-savoury, quickly prepared." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC16,50",
      },
      {
        name: "Udang Taotjo",
        desc: { nl: "Garnalen in taotjo (gefermenteerde sojabonenpasta). Diep umami, licht zoet.", en: "Prawns in taotjo (fermented soybean paste). Deep umami, slightly sweet." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC16,50",
      },
      {
        name: "Ikan Teri",
        desc: { nl: "Gebakken ansjovis met pinda's en rode peper. Knapperig, zout, onweerstaanbaar.", en: "Fried anchovies with peanuts and red chilli. Crispy, salty, irresistible." },
        priceDineIn: "\u20AC15,50",
        priceTakeaway: "\u20AC13,50",
        spice: 1,
      },
      {
        name: "Ikan Tongseng",
        desc: { nl: "Vis gestoofd met kool en tomaat in kokossaus. De tongseng-variant met vis in plaats van vlees.", en: "Fish braised with cabbage and tomato in coconut sauce. The tongseng variant with fish instead of meat." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC16,50",
        spice: 1,
      },
      {
        name: "Sambal Goreng Kupang",
        desc: { nl: "Kleine mosselen in sambal goreng. Een Javaans gerecht, pittig en vol smaak.", en: "Small mussels in sambal goreng. A Javanese dish, spicy and full of flavour." },
        priceDineIn: "\u20AC18,50",
        priceTakeaway: "\u20AC16,50",
        spice: 2,
      },
    ],
  },

  /* ── Groenten & Tahu ── */
  {
    name: { nl: "Groenten & Tahu", en: "Vegetables & Tofu" },
    slug: "groenten",
    items: [
      {
        name: "Gado-gado",
        desc: { nl: "Gestoomde groenten en tahu in een dikke, huisgemaakte pindasaus. Met kroepoek en gebakken uitjes.", en: "Steamed vegetables and tofu in a thick, house-ground peanut sauce. With prawn crackers and fried shallots." },
        priceDineIn: "\u20AC13,50",
        priceTakeaway: "\u20AC10,50",
        vegetarian: true,
      },
      {
        name: "Sayur Lodeh",
        desc: { nl: "Groenten gestoofd in een milde kokossaus met laos en kurkuma. Romig, zacht, vol smaak.", en: "Vegetables braised in a mild coconut sauce with galangal and turmeric. Creamy, gentle, full of flavour." },
        priceDineIn: "\u20AC12,50",
        priceTakeaway: "\u20AC10,50",
        vegetarian: true,
      },
      {
        name: "Urap Urap",
        desc: { nl: "Gestoomde groenten met geraspte kokos, kruiden en limoen. Fris, licht, authentiek Javaans.", en: "Steamed vegetables with grated coconut, herbs and lime. Fresh, light, authentically Javanese." },
        priceDineIn: "\u20AC12,50",
        priceTakeaway: "\u20AC10,50",
        vegetarian: true,
      },
      {
        name: "Sambal Boontjes",
        desc: { nl: "Sperziebonen geroerbakt in sambal met sjalotten en trassi. Pittig en groen.", en: "Green beans stir-fried in sambal with shallots and shrimp paste. Spicy and green." },
        priceDineIn: "\u20AC12,50",
        priceTakeaway: "\u20AC10,50",
        spice: 1,
      },
      {
        name: "Sambal Temp\u00E9",
        desc: { nl: "Gebakken temp\u00E9 in een pittige sambal van rode peper en kecap manis. Krokant, zoet, heet.", en: "Fried tempeh in a spicy sambal of red chilli and kecap manis. Crispy, sweet, hot." },
        priceDineIn: "\u20AC12,50",
        priceTakeaway: "\u20AC10,50",
        spice: 1,
        vegetarian: true,
      },
      {
        name: "Tahu Petai",
        desc: { nl: "Tahu met petaibonen in een pikante saus. De petai is een verworven smaak, intens en bijzonder.", en: "Tofu with petai beans in a zesty sauce. Petai is an acquired taste, intense and distinctive." },
        priceDineIn: "\u20AC12,50",
        priceTakeaway: "\u20AC10,50",
        vegetarian: true,
      },
      {
        name: "Ketoprak",
        desc: { nl: "Tahu, lontong en taug\u00E9 in een warme pindasaus met kecap manis. Straatvoer uit Jakarta.", en: "Tofu, lontong and bean sprouts in a warm peanut sauce with kecap manis. Street food from Jakarta." },
        priceDineIn: "\u20AC13,50",
        priceTakeaway: "\u20AC11,50",
        vegetarian: true,
      },
      {
        name: "Tahu Goreng Bandung",
        desc: { nl: "Gebakken tahu in Bandungse stijl, met pindasaus en zoete sojasaus. Krokant en zacht.", en: "Fried tofu Bandung-style, with peanut sauce and sweet soy sauce. Crispy and soft." },
        priceDineIn: "\u20AC14,00",
        priceTakeaway: "\u20AC12,00",
        vegetarian: true,
      },
      {
        name: "Terong Belado",
        desc: { nl: "Gebakken aubergine overgoten met sambal belado. Zacht, pittig, een vegetarisch pareltje.", en: "Fried eggplant drenched in sambal belado. Soft, spicy, a vegetarian gem." },
        priceDineIn: "\u20AC13,50",
        priceTakeaway: "\u20AC11,50",
        spice: 2,
        vegetarian: true,
      },
      {
        name: "Gulai Nangka",
        desc: { nl: "Jonge jackfruit in een gele kokoscurry. Mild, romig, de textuur lijkt op vlees.", en: "Young jackfruit in a yellow coconut curry. Mild, creamy, the texture resembles meat." },
        priceDineIn: "\u20AC14,00",
        priceTakeaway: "\u20AC12,50",
        vegetarian: true,
      },
      {
        name: "Lotek",
        desc: { nl: "Rauwe en lichtgekookte groenten in een pikante pindasaus. Frisser dan gado-gado, met meer pit.", en: "Raw and lightly blanched vegetables in a zesty peanut sauce. Fresher than gado-gado, with more kick." },
        priceDineIn: "\u20AC13,50",
        priceTakeaway: "\u20AC12,50",
        vegetarian: true,
        spice: 1,
      },
      {
        name: "Karedok",
        desc: { nl: "Rauwe groentesalade met pittige pindasaus. De Sundanese variant van gado-gado, volledig rauw.", en: "Raw vegetable salad with spicy peanut sauce. The Sundanese variant of gado-gado, entirely raw." },
        priceDineIn: "\u20AC13,50",
        priceTakeaway: "\u20AC12,50",
        vegetarian: true,
        spice: 1,
      },
      {
        name: "Tumis Kangkung",
        desc: { nl: "Waterspinazie, geroerbakt met knoflook, trassi en rode peper. Simpel, groen, stevig van smaak.", en: "Water spinach, stir-fried with garlic, shrimp paste and red chilli. Simple, green, bold in flavour." },
        priceDineIn: "\u20AC12,50",
        priceTakeaway: "\u20AC10,50",
        spice: 1,
        vegetarian: true,
      },
    ],
  },

  /* ── Eiergerechten ── */
  {
    name: { nl: "Eiergerechten", en: "Egg dishes" },
    slug: "eieren",
    items: [
      {
        name: "Telor Belado",
        desc: { nl: "Hardgekookt ei in pittige sambal belado. Klein maar krachtig, een klassiek bijgerecht.", en: "Hard-boiled egg in spicy sambal belado. Small but powerful, a classic side dish." },
        priceDineIn: "\u20AC5,00",
        priceTakeaway: "\u20AC3,70",
        spice: 1,
      },
      {
        name: "Sambal Goreng Telor",
        desc: { nl: "Ei in sambal goreng met aardappel, sjalotten en laos. Rijker en voller dan belado.", en: "Egg in sambal goreng with potato, shallots and galangal. Richer and fuller than belado." },
        priceDineIn: "\u20AC5,00",
        priceTakeaway: "\u20AC3,70",
        spice: 1,
      },
      {
        name: "Dadar Jawa",
        desc: { nl: "Javaanse omelet met groenten en kruiden. Licht, kruidig, een eerlijk gerecht.", en: "Javanese omelette with vegetables and herbs. Light, herby, an honest dish." },
        priceDineIn: "\u20AC12,00",
        priceTakeaway: "\u20AC10,00",
        vegetarian: true,
      },
      {
        name: "Tahu Telor",
        desc: { nl: "Gebakken tahu met ei in een warme pindasaus met kecap manis. Straatvoer, maar dan netjes.", en: "Fried tofu with egg in a warm peanut sauce with kecap manis. Street food, but refined." },
        priceDineIn: "\u20AC16,50",
        priceTakeaway: "\u20AC15,00",
        vegetarian: true,
      },
      {
        name: "Dadar Isi",
        desc: { nl: "Gevulde omelet met gehakt, groenten en kruiden. Rijker en steviger dan de Dadar Jawa.", en: "Stuffed omelette with minced meat, vegetables and herbs. Richer and heartier than the Dadar Jawa." },
        priceDineIn: "\u20AC22,00",
        priceTakeaway: "\u20AC20,00",
      },
    ],
  },

  /* ── Nasi & Bami ── */
  {
    name: { nl: "Nasi & Bami", en: "Rice & Noodles" },
    slug: "nasi-bami",
    items: [
      {
        name: "Nasi Goreng",
        desc: { nl: "Gebakken rijst met kecap manis, groenten en ei. Geserveerd met kroepoek, gebakken uitjes en atjar.", en: "Fried rice with kecap manis, vegetables and egg. Served with prawn crackers, fried shallots and pickled vegetables." },
        priceDineIn: "\u20AC12,50",
        priceTakeaway: null,
      },
      {
        name: "Bami Goreng",
        desc: { nl: "Geroerbakte eiermie met kecap manis, groenten en kip. Geserveerd met kroepoek en gebakken uitjes.", en: "Stir-fried egg noodles with kecap manis, vegetables and chicken. Served with prawn crackers and fried shallots." },
        priceDineIn: "\u20AC12,50",
        priceTakeaway: null,
      },
      {
        name: "Nasi Rames",
        desc: { nl: "Witte rijst met een selectie van drie bijgerechten uit de keuken. Elke dag anders.", en: "Steamed rice with a selection of three side dishes from the kitchen. Different every day." },
        priceDineIn: "\u20AC14,50",
        priceTakeaway: "\u20AC15,00",
      },
    ],
  },

  /* ── Bijgerechten ── */
  {
    name: { nl: "Bijgerechten", en: "Sides" },
    slug: "bijgerechten",
    items: [
      {
        name: "Kroepoek",
        desc: { nl: "Knapperige garnalencrackers. Onmisbaar bij elke maaltijd.", en: "Crispy prawn crackers. Essential with every meal." },
        priceDineIn: "\u20AC4,50",
        priceTakeaway: "\u20AC3,50",
      },
      {
        name: "Maniok",
        desc: { nl: "Gefrituurde cassave, knapperig en licht zoet.", en: "Deep-fried cassava, crispy and slightly sweet." },
        priceDineIn: "\u20AC4,50",
        priceTakeaway: "\u20AC3,50",
      },
      {
        name: "Emping",
        desc: { nl: "Knapperige melinjonotencrackers. Licht bitter, perfect bij rijke gerechten.", en: "Crispy melinjo nut crackers. Slightly bitter, perfect with rich dishes." },
        priceDineIn: "\u20AC5,50",
        priceTakeaway: "\u20AC4,50",
      },
      {
        name: "Nasi Putih",
        desc: { nl: "Gestoomde witte rijst.", en: "Steamed white rice." },
        priceDineIn: "\u20AC4,00",
        priceTakeaway: "\u20AC3,50",
      },
      {
        name: "Nasi Kuning",
        desc: { nl: "Gele rijst met kurkuma, kokosmelk en pandan. Feestelijk en geurig.", en: "Yellow rice with turmeric, coconut milk and pandan. Festive and fragrant." },
        priceDineIn: "\u20AC6,50",
        priceTakeaway: "\u20AC6,00",
      },
      {
        name: "Nasi Jawa",
        desc: { nl: "Javaanse gekruide rijst met kruiden en sjalotten.", en: "Javanese spiced rice with herbs and shallots." },
        priceDineIn: "\u20AC7,00",
        priceTakeaway: "\u20AC6,50",
      },
      {
        name: "Acar",
        desc: { nl: "Zuur-zoete groenten (wortel, komkommer, sjalot) in kurkumawater. Fris tegenwicht.", en: "Sweet-sour vegetables (carrot, cucumber, shallot) in turmeric water. Fresh counterpoint." },
        priceDineIn: "\u20AC5,00",
        priceTakeaway: "\u20AC4,50",
        vegetarian: true,
      },
      {
        name: "Serundeng",
        desc: { nl: "Geroosterde geraspte kokos met pinda's en kruiden. Knapperig strooisel.", en: "Toasted grated coconut with peanuts and spices. Crunchy garnish." },
        priceDineIn: "\u20AC4,50",
        priceTakeaway: "\u20AC3,25",
        vegetarian: true,
      },
      {
        name: "Pindasaus",
        desc: { nl: "Huisgemaakte pindasaus, vers gemalen.", en: "House-made peanut sauce, freshly ground." },
        priceDineIn: "\u20AC4,50",
        priceTakeaway: "\u20AC3,50",
        vegetarian: true,
      },
      {
        name: "Sambal Setan",
        desc: { nl: "Duivels hete huissambal. Alleen voor de dapperen.", en: "Devilishly hot house sambal. Only for the brave." },
        priceDineIn: "\u20AC1,50",
        priceTakeaway: "\u20AC0,75",
        spice: 3,
        vegetarian: true,
      },
    ],
  },

  /* ── Desserts ── */
  {
    name: { nl: "Desserts", en: "Desserts" },
    slug: "desserts",
    items: [
      {
        name: "Spekkoek",
        desc: { nl: "Indonesische laagjestaart met specerijen. Tientallen lagen, elk met de hand aangebracht.", en: "Indonesian layer cake with spices. Dozens of layers, each applied by hand." },
        priceDineIn: "\u20AC5,50",
        priceTakeaway: "\u20AC4,50",
      },
      {
        name: "Es Cendol",
        desc: { nl: "IJskoude kokosmelk met pandangelei, palmsuiker en geschaafd ijs. Verfrissend en zoet.", en: "Ice-cold coconut milk with pandan jelly, palm sugar and shaved ice. Refreshing and sweet." },
        priceDineIn: "\u20AC7,00",
        priceTakeaway: "\u20AC6,00",
      },
    ],
  },
];

export const MENU_FOOTER = {
  allergen: {
    nl: "Allergie of dieetwens? Laat het ons weten bij het reserveren of aan tafel. We denken graag mee.",
    en: "Allergy or dietary requirement? Let us know when you reserve or at your table. We're happy to help.",
  },
  rijsttafelNote: {
    nl: "De rijsttafel is alleen beschikbaar voor dine-in, minimaal 2 personen.",
    en: "The rijsttafel is only available for dine-in, minimum 2 persons.",
  },
  takeawayNote: {
    nl: "Bekijk onze afhaalkaart en bestel online.",
    en: "See our pickup menu and order online.",
  },
  legend: [
    { type: "spice" as const, level: 1, nl: "Mild", en: "Mild" },
    { type: "spice" as const, level: 2, nl: "Pittig", en: "Medium" },
    { type: "spice" as const, level: 3, nl: "Heet", en: "Hot" },
    { type: "veg" as const, level: 0, nl: "Vegetarisch", en: "Vegetarian" },
  ],
} as const;
