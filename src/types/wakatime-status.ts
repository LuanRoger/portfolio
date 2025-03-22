export interface WakatimeEditor {
  totalSeconds: number;
  name: string;
  percent: number;
  text: string;
  hours: number;
  minutes: number;
}

export interface WakatimeLanguages {
  name: string;
  totalSeconds: number;
  percent: number;
  text: string;
  hours: number;
  minutes: number;
}

export interface WakatimeStatus {
  status: string;
  humanReadableTotalIncludingOtherLanguage: string;
  editors: WakatimeEditor[];
  languages: WakatimeLanguages[];
}
