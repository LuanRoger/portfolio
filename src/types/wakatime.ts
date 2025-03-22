export interface WakatimeLanguageMetadata {
  id: string;
  name: string;
  color: string;
}

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
  metadata?: WakatimeLanguageMetadata;
}

export interface WakatimeStatus {
  status: string;
  humanReadableTotalIncludingOtherLanguage: string;
  totalInSeconds: number;
  editors: WakatimeEditor[];
  languages: WakatimeLanguages[];
}
