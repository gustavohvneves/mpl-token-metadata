/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
} from '@lorisleiva/js-core';

export type CreateOrUpdateRuleSetArgs = {
  __kind: 'V1';
  serializedRuleSet: Uint8Array;
};

export function getCreateOrUpdateRuleSetArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<CreateOrUpdateRuleSetArgs> {
  const s = context.serializer;
  return s.dataEnum<CreateOrUpdateRuleSetArgs>(
    [
      [
        'V1',
        s.struct<GetDataEnumKindContent<CreateOrUpdateRuleSetArgs, 'V1'>>(
          [['serializedRuleSet', s.bytes]],
          'V1'
        ),
      ],
    ],
    undefined,
    'CreateOrUpdateRuleSetArgs'
  );
}

// Data Enum Helpers.
export function createOrUpdateRuleSetArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<CreateOrUpdateRuleSetArgs, 'V1'>
): GetDataEnumKind<CreateOrUpdateRuleSetArgs, 'V1'>;
export function createOrUpdateRuleSetArgs<
  K extends CreateOrUpdateRuleSetArgs['__kind']
>(kind: K, data?: any): Extract<CreateOrUpdateRuleSetArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isCreateOrUpdateRuleSetArgs<
  K extends CreateOrUpdateRuleSetArgs['__kind']
>(
  kind: K,
  value: CreateOrUpdateRuleSetArgs
): value is CreateOrUpdateRuleSetArgs & { __kind: K } {
  return value.__kind === kind;
}
