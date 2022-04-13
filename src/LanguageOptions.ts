import { LanguageFeature } from './types/zetasql/LanguageFeature';
import { LanguageOptionsProto } from './types/zetasql/LanguageOptionsProto';
import { LanguageVersion } from './types/zetasql/LanguageVersion';
import { ZetaSQLClient } from './ZetaSQLClient';

export class LanguageOptions {
  static maxFeatures: LanguageOptionsProto = null;

  options: LanguageOptionsProto = {};

  static async getMaxFeatures(): Promise<LanguageOptionsProto> {
    if (LanguageOptions.maxFeatures == null) {
      const request = {
        maximumFeatures: true,
        languageVersion: LanguageVersion.VERSION_CURRENT,
      };
      LanguageOptions.maxFeatures = await ZetaSQLClient.getInstance().getLanguageOptions(request);
    }
    return LanguageOptions.maxFeatures;
  }

  async enableMaximumLanguageFeatures(): Promise<LanguageOptions> {
    const features = new Set<LanguageFeature>();
    (await LanguageOptions.getMaxFeatures()).enabledLanguageFeatures?.forEach(
      (f: LanguageFeature) => {
        features.add(f);
      },
    );
    this.setEnabledLanguageFeatures(features);
    return this;
  }

  setEnabledLanguageFeatures(enabledLanguageFeatures: Set<LanguageFeature>) {
    this.options.enabledLanguageFeatures = [];
    enabledLanguageFeatures.forEach(f => {
      this.options.enabledLanguageFeatures.push(f);
    });
  }

  serialize(): LanguageOptionsProto {
    return this.options;
  }
}
