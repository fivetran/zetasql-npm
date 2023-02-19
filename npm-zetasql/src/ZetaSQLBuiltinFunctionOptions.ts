import { LanguageOptions } from './LanguageOptions';
import { ZetaSQLBuiltinFunctionOptionsProto } from './types/zetasql/ZetaSQLBuiltinFunctionOptionsProto';

/**
 * Controls whether builtin FunctionSignatureIds and their matching FunctionSignatures are included
 * or excluded for an implementation.
 *
 * <p>LanguageOptions are applied to determine set of candidate functions before inclusion/exclusion
 * lists are applied.
 */
export class ZetaSQLBuiltinFunctionOptions {
  languageOptions: LanguageOptions;

  constructor(languageOptions: LanguageOptions) {
    this.languageOptions = languageOptions;
  }

  serialize(): ZetaSQLBuiltinFunctionOptionsProto {
    return {
      languageOptions: this.languageOptions.serialize(),
    };
  }
}
