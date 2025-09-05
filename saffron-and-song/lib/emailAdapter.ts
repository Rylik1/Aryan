export type ReservationPayload = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  notes?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendReservation(payload: ReservationPayload) {
  // Stub for email provider; replace with SendGrid/Mailchimp, etc.
  if (process.env.NODE_ENV !== "production") {
    console.log("Reservation submitted", payload);
  }
  return { ok: true } as const;
}

export async function sendContact(payload: ContactPayload) {
  if (process.env.NODE_ENV !== "production") {
    console.log("Contact submitted", payload);
  }
  return { ok: true } as const;
}


