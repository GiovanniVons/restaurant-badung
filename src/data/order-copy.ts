export const orderCopy = {
  drawer: {
    title: { nl: "Jouw bestelling", en: "Your order" },
    empty: { nl: "Je winkelwagen is leeg", en: "Your cart is empty" },
    emptyCta: { nl: "Bekijk de afhaalkaart", en: "See the takeaway menu" },
    subtotal: { nl: "Subtotaal", en: "Subtotal" },
    checkout: { nl: "Naar afrekenen", en: "To checkout" },
    remove: { nl: "Verwijderen", en: "Remove" },
  },
  checkout: {
    title: { nl: "Bestelling afronden", en: "Complete your order" },
    pickupHeading: { nl: "Afhaalgegevens", en: "Pickup details" },
    name: { nl: "Naam", en: "Name" },
    phone: { nl: "Telefoonnummer", en: "Phone number" },
    email: { nl: "E-mailadres", en: "Email address" },
    emailNote: { nl: "Voor je orderbevestiging", en: "For your order confirmation" },
    pickupTime: { nl: "Afhaaltijd", en: "Pickup time" },
    pickupTimePlaceholder: { nl: "Kies een tijdstip", en: "Choose a time" },
    notes: { nl: "Opmerkingen", en: "Special instructions" },
    notesPlaceholder: {
      nl: "Allergie\u00EBn, extra sambal, etc.",
      en: "Allergies, extra sambal, etc.",
    },
    orderSummary: { nl: "Overzicht bestelling", en: "Order summary" },
    subtotal: { nl: "Subtotaal", en: "Subtotal" },
    paymentHeading: { nl: "Betaalmethode", en: "Payment method" },
    payAtPickup: {
      nl: "Betalen bij afhalen",
      en: "Pay at pickup",
    },
    payAtPickupDesc: {
      nl: "Contant of pin in het restaurant",
      en: "Cash or card at the restaurant",
    },
    payOnline: {
      nl: "Direct betalen",
      en: "Pay now",
    },
    payOnlineDesc: {
      nl: "iDEAL",
      en: "iDEAL",
    },
    placeOrder: { nl: "Bestelling plaatsen", en: "Place order" },
    placeOrderOnline: { nl: "Betalen en bestellen", en: "Pay and order" },
    processing: { nl: "Bestelling verwerken...", en: "Processing order..." },
    paymentNote: {
      nl: "Je betaalt bij het afhalen in het restaurant.",
      en: "You will pay when picking up at the restaurant.",
    },
    paymentNoteOnline: {
      nl: "Je wordt doorgestuurd naar een beveiligde betaalpagina.",
      en: "You will be redirected to a secure payment page.",
    },
    required: { nl: "Dit veld is verplicht", en: "This field is required" },
    invalidPhone: { nl: "Vul een geldig telefoonnummer in", en: "Enter a valid phone number" },
    invalidEmail: { nl: "Vul een geldig e-mailadres in", en: "Enter a valid email address" },
    emptyCart: { nl: "Je winkelwagen is leeg", en: "Your cart is empty" },
    editCart: { nl: "Wijzig bestelling", en: "Edit order" },
  },
  confirmation: {
    title: { nl: "Bestelling geplaatst!", en: "Order placed!" },
    subtitle: {
      nl: "We bereiden je bestelling voor. Tot straks!",
      en: "We're preparing your order. See you soon!",
    },
    orderNumber: { nl: "Bestelnummer", en: "Order number" },
    pickupAt: { nl: "Ophalen om", en: "Pick up at" },
    address: { nl: "Adres", en: "Address" },
    payAtPickup: {
      nl: "Betaal bij afhalen in het restaurant.",
      en: "Pay at pickup at the restaurant.",
    },
    backToMenu: { nl: "Terug naar het menu", en: "Back to the menu" },
    backToHome: { nl: "Naar de homepage", en: "Go to homepage" },
  },
  payment: {
    title: { nl: "Betaling", en: "Payment" },
    heading: { nl: "iDEAL Betaling", en: "iDEAL Payment" },
    amount: { nl: "Bedrag", en: "Amount" },
    orderRef: { nl: "Bestelnummer", en: "Order reference" },
    comingSoon: {
      nl: "Online betalen via iDEAL wordt binnenkort beschikbaar. Klik hieronder om je bestelling te bevestigen.",
      en: "Online payment via iDEAL will be available soon. Click below to confirm your order.",
    },
    continueBtn: { nl: "Bestelling bevestigen", en: "Confirm order" },
    poweredBy: { nl: "Aangedreven door", en: "Powered by" },
  },
  pickup: {
    noSlots: {
      nl: "Er zijn momenteel geen afhaaltijden beschikbaar.",
      en: "No pickup times are currently available.",
    },
  },
  fab: {
    label: { nl: "Winkelwagen", en: "Cart" },
  },
  banner: {
    takeaway: {
      nl: "Kies je gerechten en haal af in het restaurant.",
      en: "Choose your dishes and pick up at the restaurant.",
    },
  },
  mobileBar: {
    items: { nl: "items", en: "items" },
    item: { nl: "item", en: "item" },
  },
} as const;
