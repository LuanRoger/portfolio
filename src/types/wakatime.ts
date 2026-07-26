export interface WakatimeLanguageMetadata {
  color: string;
  id: string;
  name: string;
}

export interface WakatimeEditor {
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  totalSeconds: number;
}

export interface WakatimeLanguages {
  hours: number;
  metadata?: WakatimeLanguageMetadata;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  totalSeconds: number;
}

export interface WakatimeCategory {
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  seconds: number;
  text: string;
}

export interface WakatimeDateCategory {
  coding?: WakatimeCategory;
  date: Date;
  dateText: string;
  debugging?: WakatimeCategory;
}

export interface WakatimeAllTimeMetrics {
  text: string;
  totalSeconds: number;
}

export interface WakatimeStats {
  avarengeText: string;
  editors: WakatimeEditor[];
  languages: WakatimeLanguages[];
  status: string;
  totalInSeconds: number;
  totalText: string;
}
