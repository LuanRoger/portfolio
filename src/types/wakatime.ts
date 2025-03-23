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

export interface WakatimeCategory {
  name: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
  percent: number;
}

export interface WakatimeDateCategory {
  date: Date;
  dateText: string;
  coding?: WakatimeCategory;
  debugging?: WakatimeCategory;
}

export interface WakatimeAllTimeMetrics {
  totalSeconds: number;
  text: string;
}

export interface WakatimeStats {
  status: string;
  totalText: string;
  avarengeText: string;
  totalInSeconds: number;
  editors: WakatimeEditor[];
  languages: WakatimeLanguages[];
}
