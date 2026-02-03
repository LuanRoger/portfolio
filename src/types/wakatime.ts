export type WakatimeLanguageMetadata = {
  id: string;
  name: string;
  color: string;
};

export type WakatimeEditor = {
  totalSeconds: number;
  name: string;
  percent: number;
  text: string;
  hours: number;
  minutes: number;
};

export type WakatimeLanguages = {
  name: string;
  totalSeconds: number;
  percent: number;
  text: string;
  hours: number;
  minutes: number;
  metadata?: WakatimeLanguageMetadata;
};

export type WakatimeCategory = {
  name: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
  percent: number;
};

export type WakatimeDateCategory = {
  date: Date;
  dateText: string;
  coding?: WakatimeCategory;
  debugging?: WakatimeCategory;
};

export type WakatimeAllTimeMetrics = {
  totalSeconds: number;
  text: string;
};

export type WakatimeStats = {
  status: string;
  totalText: string;
  avarengeText: string;
  totalInSeconds: number;
  editors: WakatimeEditor[];
  languages: WakatimeLanguages[];
};
