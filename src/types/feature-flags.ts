export interface FeatureFlag {
  enabled: boolean;
  name: string;
  description?: string;
  persistAcrossAuthSteps: boolean;
  payload: FeatureFlagPayloadConfig;
  releaseCondition: FeatureFlagReleaseConditionConfig;
}

export interface FeatureFlagPayloadConfig {
  type: "release-toggle" | "ab/n-test" | "remote-config";
  payload?: object;

  // only for type "ab/n-test"
  variants: FeatureFlagPayloadVariant[];
}

export interface FeatureFlagPayloadVariant {
  key: string;
  description?: string;
  payload?: object;
  rolloutPercentage: number;
}

export interface FeatureFlagReleaseConditionConfig {
  matchBy: "users" | "groups";
  variants: FeatureFlagReleaseConditionVariant[];
}

export interface FeatureFlagReleaseConditionSet {
  variants: FeatureFlagReleaseConditionVariant[];
  rolloutPercentage: number;
}

export interface FeatureFlagReleaseConditionVariant {
  key: string;
  operator:
    | "equals"
    | "not-equals"
    | "contains"
    | "not-contains"
    | "match-regex"
    | "not-match-regex"
    | "is-set"
    | "is-not-set";
  value: string;
}
