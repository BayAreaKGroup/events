export type TicketAnalyticsParams = {
  ticket_type: "early_bird" | "regular";
  button_location: "ticket_section";
  language: "en" | "ko";
  button_text: string;
  destination_url: string;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: "ticket_impression" | "ticket_click",
      params: TicketAnalyticsParams,
    ) => void;
  }
}

export function trackTicketEvent(
  eventName: "ticket_impression" | "ticket_click",
  params: TicketAnalyticsParams,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}
