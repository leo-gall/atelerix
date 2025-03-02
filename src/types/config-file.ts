import { FeatureFlag } from "@/types/feature-flags";

export interface ConfigFile {
  apiKey: string;
  host: string;
  flags: FeatureFlag[];
}
