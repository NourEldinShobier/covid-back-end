export interface CreateLogEntryDto {
  userId: string;
  location: Location;
  temperature: string;
  symptoms: string;
}

interface Location {
  long: number;
  lat: number;
}
