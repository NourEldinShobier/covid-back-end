export interface LogEntrySummary {
  location: Location;
  temperature: string;
  symptoms: string;
  date: Date;
}

interface Location {
  long: number;
  lat: number;
}
