
export interface AudienceInsight {
  topics: string[];
  sentimentScore: number;
  languageMarkers: string[];
  conversionTriggers: string[];
  demographicsPreview: string;
}

export interface ChartData {
  name: string;
  value: number;
}
