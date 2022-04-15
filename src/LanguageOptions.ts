import { LanguageFeature } from './types/zetasql/LanguageFeature';
import {
  LanguageOptionsProto,
  LanguageOptionsProto__Output,
} from './types/zetasql/LanguageOptionsProto';
import { LanguageVersion } from './types/zetasql/LanguageVersion';
import { ZetaSQLClient } from './ZetaSQLClient';

export class LanguageOptions {
  private static maxFeatures: LanguageOptionsProto__Output | undefined;

  options: LanguageOptionsProto = {};

  static async getMaxFeatures(): Promise<LanguageOptionsProto__Output | undefined> {
    if (!LanguageOptions.maxFeatures) {
      const request = {
        maximumFeatures: true,
      };
      LanguageOptions.maxFeatures = await ZetaSQLClient.getInstance().getLanguageOptions(request);
    }
    return LanguageOptions.maxFeatures;
  }

  async setLanguageVersion(version: LanguageVersion): Promise<void> {
    this.setEnabledLanguageFeatures(await LanguageOptions.getLanguageFeaturesForVersion(version));
  }

  static async getLanguageFeaturesForVersion(
    languageVersion: LanguageVersion,
  ): Promise<Set<LanguageFeature>> {
    const features = new Set<LanguageFeature>();
    (
      await ZetaSQLClient.getInstance().getLanguageOptions({ languageVersion })
    )?.enabledLanguageFeatures.forEach(f => features.add(f));

    return features;
  }

  async enableMaximumLanguageFeatures(): Promise<LanguageOptions> {
    const features = new Set<LanguageFeature>();
    (await LanguageOptions.getMaxFeatures())?.enabledLanguageFeatures.forEach(f => features.add(f));
    this.setEnabledLanguageFeatures(features);
    return this;
  }

  enableLanguageFeature(feature: LanguageFeature): void {
    if (!this.options.enabledLanguageFeatures?.includes(feature)) {
      this.options.enabledLanguageFeatures?.push(feature);
    }
  }

  setEnabledLanguageFeatures(enabledLanguageFeatures: Set<LanguageFeature>): void {
    this.options.enabledLanguageFeatures = [];
    enabledLanguageFeatures.forEach(f => {
      this.options.enabledLanguageFeatures?.push(f);
    });
  }

  serialize(): LanguageOptionsProto {
    return this.options;
  }
}
