/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Amount,
  Context,
  GetDataEnumKind,
  GetDataEnumKindContent,
  Option,
  PublicKey,
  Serializer,
  mapAmountSerializer,
  mapSerializer,
} from '@lorisleiva/js-core';
import {
  Collection,
  CollectionDetails,
  CollectionDetailsArgs,
  Creator,
  PrintSupply,
  PrintSupplyArgs,
  TokenStandard,
  Uses,
  UsesArgs,
  getCollectionDetailsSerializer,
  getCollectionSerializer,
  getCreatorSerializer,
  getPrintSupplySerializer,
  getTokenStandardSerializer,
  getUsesSerializer,
} from '.';

export type CreateArgs = {
  __kind: 'V1';
  updateAuthority: PublicKey;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: Amount<'%', 2>;
  creators: Option<Array<Creator>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  tokenStandard: TokenStandard;
  collection: Option<Collection>;
  uses: Option<Uses>;
  collectionDetails: Option<CollectionDetails>;
  ruleSet: Option<PublicKey>;
  decimals: Option<number>;
  printSupply: Option<PrintSupply>;
};

export type CreateArgsArgs = {
  __kind: 'V1';
  updateAuthority: PublicKey;
  name: string;
  symbol?: string;
  uri: string;
  sellerFeeBasisPoints: Amount<'%', 2>;
  creators: Option<Array<Creator>>;
  primarySaleHappened?: boolean;
  isMutable?: boolean;
  tokenStandard: TokenStandard;
  collection: Option<Collection>;
  uses: Option<UsesArgs>;
  collectionDetails: Option<CollectionDetailsArgs>;
  ruleSet: Option<PublicKey>;
  decimals: Option<number>;
  printSupply: Option<PrintSupplyArgs>;
};

export function getCreateArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<CreateArgsArgs, CreateArgs> {
  const s = context.serializer;
  return s.dataEnum<CreateArgs>(
    [
      [
        'V1',
        mapSerializer<
          GetDataEnumKindContent<CreateArgsArgs, 'V1'>,
          GetDataEnumKindContent<CreateArgs, 'V1'>,
          GetDataEnumKindContent<CreateArgs, 'V1'>
        >(
          s.struct<GetDataEnumKindContent<CreateArgs, 'V1'>>(
            [
              ['updateAuthority', s.publicKey],
              ['name', s.string()],
              ['symbol', s.string()],
              ['uri', s.string()],
              ['sellerFeeBasisPoints', mapAmountSerializer(s.u16, '%', 2)],
              ['creators', s.option(s.vec(getCreatorSerializer(context)))],
              ['primarySaleHappened', s.bool()],
              ['isMutable', s.bool()],
              ['tokenStandard', getTokenStandardSerializer(context)],
              ['collection', s.option(getCollectionSerializer(context))],
              ['uses', s.option(getUsesSerializer(context))],
              [
                'collectionDetails',
                s.option(getCollectionDetailsSerializer(context)),
              ],
              ['ruleSet', s.option(s.publicKey)],
              ['decimals', s.option(s.u8)],
              ['printSupply', s.option(getPrintSupplySerializer(context))],
            ],
            'V1'
          ),
          (value) =>
            ({
              symbol: '',
              primarySaleHappened: false,
              isMutable: true,
              ...value,
            } as GetDataEnumKindContent<CreateArgs, 'V1'>)
        ),
      ],
    ],
    undefined,
    'CreateArgs'
  ) as Serializer<CreateArgsArgs, CreateArgs>;
}

// Data Enum Helpers.
export function createArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<CreateArgsArgs, 'V1'>
): GetDataEnumKind<CreateArgsArgs, 'V1'>;
export function createArgs<K extends CreateArgsArgs['__kind']>(
  kind: K,
  data?: any
): Extract<CreateArgsArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isCreateArgs<K extends CreateArgs['__kind']>(
  kind: K,
  value: CreateArgs
): value is CreateArgs & { __kind: K } {
  return value.__kind === kind;
}
