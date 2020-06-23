import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './index';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};











export type FoodName = {
   __typename?: 'FoodName';
  en: Maybe<Scalars['String']>;
  fi: Maybe<Scalars['String']>;
};

export type Food = {
   __typename?: 'Food';
  id: Scalars['ID'];
  name: FoodName;
  enerc: Maybe<Scalars['Float']>;
  fat: Maybe<Scalars['Float']>;
  choavl: Maybe<Scalars['Float']>;
  prot: Maybe<Scalars['Float']>;
  alc: Maybe<Scalars['Float']>;
  oa: Maybe<Scalars['Float']>;
  sugoh: Maybe<Scalars['Float']>;
  sugar: Maybe<Scalars['Float']>;
  frus: Maybe<Scalars['Float']>;
  gals: Maybe<Scalars['Float']>;
  glus: Maybe<Scalars['Float']>;
  lacs: Maybe<Scalars['Float']>;
  mals: Maybe<Scalars['Float']>;
  sucs: Maybe<Scalars['Float']>;
  starch: Maybe<Scalars['Float']>;
  fibc: Maybe<Scalars['Float']>;
  fibins: Maybe<Scalars['Float']>;
  psacncs: Maybe<Scalars['Float']>;
  fol: Maybe<Scalars['Float']>;
  niaeq: Maybe<Scalars['Float']>;
  nia: Maybe<Scalars['Float']>;
  vitpyrid: Maybe<Scalars['Float']>;
  ribf: Maybe<Scalars['Float']>;
  thia: Maybe<Scalars['Float']>;
  vita: Maybe<Scalars['Float']>;
  carotens: Maybe<Scalars['Float']>;
  vitb12: Maybe<Scalars['Float']>;
  vitc: Maybe<Scalars['Float']>;
  vitd: Maybe<Scalars['Float']>;
  vite: Maybe<Scalars['Float']>;
  vitk: Maybe<Scalars['Float']>;
  ca: Maybe<Scalars['Float']>;
  fe: Maybe<Scalars['Float']>;
  iod: Maybe<Scalars['Float']>;
  k: Maybe<Scalars['Float']>;
  mg: Maybe<Scalars['Float']>;
  na: Maybe<Scalars['Float']>;
  nacl: Maybe<Scalars['Float']>;
  p: Maybe<Scalars['Float']>;
  se: Maybe<Scalars['Float']>;
  zn: Maybe<Scalars['Float']>;
  fafre: Maybe<Scalars['Float']>;
  fapu: Maybe<Scalars['Float']>;
  famcis: Maybe<Scalars['Float']>;
  fasat: Maybe<Scalars['Float']>;
  fatrn: Maybe<Scalars['Float']>;
  fapun3: Maybe<Scalars['Float']>;
  fapun6: Maybe<Scalars['Float']>;
  f18d2cn6: Maybe<Scalars['Float']>;
  f18d3n3: Maybe<Scalars['Float']>;
  f20d5n3: Maybe<Scalars['Float']>;
  f22d6n3: Maybe<Scalars['Float']>;
  chole: Maybe<Scalars['Float']>;
  stert: Maybe<Scalars['Float']>;
  trp: Maybe<Scalars['Float']>;
  foodid: Maybe<Scalars['String']>;
};

export type FoodInput = {
  name: FoodNameInput;
  enerc: Maybe<Scalars['Float']>;
  fat: Maybe<Scalars['Float']>;
  choavl: Maybe<Scalars['Float']>;
  prot: Maybe<Scalars['Float']>;
  alc: Maybe<Scalars['Float']>;
  oa: Maybe<Scalars['Float']>;
  sugoh: Maybe<Scalars['Float']>;
  sugar: Maybe<Scalars['Float']>;
  frus: Maybe<Scalars['Float']>;
  gals: Maybe<Scalars['Float']>;
  glus: Maybe<Scalars['Float']>;
  lacs: Maybe<Scalars['Float']>;
  mals: Maybe<Scalars['Float']>;
  sucs: Maybe<Scalars['Float']>;
  starch: Maybe<Scalars['Float']>;
  fibc: Maybe<Scalars['Float']>;
  fibins: Maybe<Scalars['Float']>;
  psacncs: Maybe<Scalars['Float']>;
  fol: Maybe<Scalars['Float']>;
  niaeq: Maybe<Scalars['Float']>;
  nia: Maybe<Scalars['Float']>;
  vitpyrid: Maybe<Scalars['Float']>;
  ribf: Maybe<Scalars['Float']>;
  thia: Maybe<Scalars['Float']>;
  vita: Maybe<Scalars['Float']>;
  carotens: Maybe<Scalars['Float']>;
  vitb12: Maybe<Scalars['Float']>;
  vitc: Maybe<Scalars['Float']>;
  vitd: Maybe<Scalars['Float']>;
  vite: Maybe<Scalars['Float']>;
  vitk: Maybe<Scalars['Float']>;
  ca: Maybe<Scalars['Float']>;
  fe: Maybe<Scalars['Float']>;
  iod: Maybe<Scalars['Float']>;
  k: Maybe<Scalars['Float']>;
  mg: Maybe<Scalars['Float']>;
  na: Maybe<Scalars['Float']>;
  nacl: Maybe<Scalars['Float']>;
  p: Maybe<Scalars['Float']>;
  se: Maybe<Scalars['Float']>;
  zn: Maybe<Scalars['Float']>;
  fafre: Maybe<Scalars['Float']>;
  fapu: Maybe<Scalars['Float']>;
  famcis: Maybe<Scalars['Float']>;
  fasat: Maybe<Scalars['Float']>;
  fatrn: Maybe<Scalars['Float']>;
  fapun3: Maybe<Scalars['Float']>;
  fapun6: Maybe<Scalars['Float']>;
  f18d2cn6: Maybe<Scalars['Float']>;
  f18d3n3: Maybe<Scalars['Float']>;
  f20d5n3: Maybe<Scalars['Float']>;
  f22d6n3: Maybe<Scalars['Float']>;
  chole: Maybe<Scalars['Float']>;
  stert: Maybe<Scalars['Float']>;
  trp: Maybe<Scalars['Float']>;
};

export type FoodNameInput = {
  en: Maybe<Scalars['String']>;
  fi: Maybe<Scalars['String']>;
};

export type FoodSearchInput = {
  name: Maybe<FoodNameSearchInput>;
  enerc: Maybe<Array<SearchFloatInput>>;
  fat: Maybe<Array<SearchFloatInput>>;
  choavl: Maybe<Array<SearchFloatInput>>;
  prot: Maybe<Array<SearchFloatInput>>;
  alc: Maybe<Array<SearchFloatInput>>;
  oa: Maybe<Array<SearchFloatInput>>;
  sugoh: Maybe<Array<SearchFloatInput>>;
  sugar: Maybe<Array<SearchFloatInput>>;
  frus: Maybe<Array<SearchFloatInput>>;
  gals: Maybe<Array<SearchFloatInput>>;
  glus: Maybe<Array<SearchFloatInput>>;
  lacs: Maybe<Array<SearchFloatInput>>;
  mals: Maybe<Array<SearchFloatInput>>;
  sucs: Maybe<Array<SearchFloatInput>>;
  starch: Maybe<Array<SearchFloatInput>>;
  fibc: Maybe<Array<SearchFloatInput>>;
  fibins: Maybe<Array<SearchFloatInput>>;
  psacncs: Maybe<Array<SearchFloatInput>>;
  fol: Maybe<Array<SearchFloatInput>>;
  niaeq: Maybe<Array<SearchFloatInput>>;
  nia: Maybe<Array<SearchFloatInput>>;
  vitpyrid: Maybe<Array<SearchFloatInput>>;
  ribf: Maybe<Array<SearchFloatInput>>;
  thia: Maybe<Array<SearchFloatInput>>;
  vita: Maybe<Array<SearchFloatInput>>;
  carotens: Maybe<Array<SearchFloatInput>>;
  vitb12: Maybe<Array<SearchFloatInput>>;
  vitc: Maybe<Array<SearchFloatInput>>;
  vitd: Maybe<Array<SearchFloatInput>>;
  vite: Maybe<Array<SearchFloatInput>>;
  vitk: Maybe<Array<SearchFloatInput>>;
  ca: Maybe<Array<SearchFloatInput>>;
  fe: Maybe<Array<SearchFloatInput>>;
  iod: Maybe<Array<SearchFloatInput>>;
  k: Maybe<Array<SearchFloatInput>>;
  mg: Maybe<Array<SearchFloatInput>>;
  na: Maybe<Array<SearchFloatInput>>;
  nacl: Maybe<Array<SearchFloatInput>>;
  p: Maybe<Array<SearchFloatInput>>;
  se: Maybe<Array<SearchFloatInput>>;
  zn: Maybe<Array<SearchFloatInput>>;
  fafre: Maybe<Array<SearchFloatInput>>;
  fapu: Maybe<Array<SearchFloatInput>>;
  famcis: Maybe<Array<SearchFloatInput>>;
  fasat: Maybe<Array<SearchFloatInput>>;
  fatrn: Maybe<Array<SearchFloatInput>>;
  fapun3: Maybe<Array<SearchFloatInput>>;
  fapun6: Maybe<Array<SearchFloatInput>>;
  f18d2cn6: Maybe<Array<SearchFloatInput>>;
  f18d3n3: Maybe<Array<SearchFloatInput>>;
  f20d5n3: Maybe<Array<SearchFloatInput>>;
  f22d6n3: Maybe<Array<SearchFloatInput>>;
  chole: Maybe<Array<SearchFloatInput>>;
  stert: Maybe<Array<SearchFloatInput>>;
  trp: Maybe<Array<SearchFloatInput>>;
};

export type FoodNameSearchInput = {
  en: Maybe<SearchStringInput>;
  fi: Maybe<SearchStringInput>;
};


export type Config = {
   __typename?: 'Config';
  lastFineliUpdate: Maybe<Scalars['Date']>;
};

export type SearchFloatInput = {
  value: Scalars['Float'];
  comparisonOperator: Maybe<ComparisonOperator>;
};

export enum ComparisonOperator {
  Lt = 'LT',
  Gt = 'GT'
}

export type SearchStringInput = {
  value: Scalars['String'];
  regex: Maybe<Scalars['Boolean']>;
  flags: Maybe<Scalars['String']>;
};

export type User = {
   __typename?: 'User';
  name: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  roles: Maybe<Array<Role>>;
  permissions: Maybe<Array<Permission>>;
};

export type Role = {
   __typename?: 'Role';
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  permissions: Maybe<Array<Permission>>;
};

export type Permission = {
   __typename?: 'Permission';
  resourceServerIdentifier: Maybe<Scalars['String']>;
  permissionName: Maybe<Scalars['String']>;
  resourceServerName: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
};

export type MutationResponse = {
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type ConfigMutationResponse = MutationResponse & {
   __typename?: 'ConfigMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  config: Maybe<Config>;
};

export type FoodMutationResponse = MutationResponse & {
   __typename?: 'FoodMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  food: Maybe<Food>;
};

export type UpdateConfigInput = {
  lastFineliUpdate: Maybe<Scalars['Date']>;
};

export type Query = {
   __typename?: 'Query';
  users: Maybe<Array<User>>;
  foods: Array<Food>;
  food: Maybe<Food>;
  config: Config;
};


export type QueryFoodsArgs = {
  params: Maybe<FoodSearchInput>;
};


export type QueryFoodArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
   __typename?: 'Mutation';
  assignRoleToUser: User;
  updateConfig: ConfigMutationResponse;
  addFood: FoodMutationResponse;
};


export type MutationAssignRoleToUserArgs = {
  userId: Scalars['String'];
  roleIds: Array<Scalars['String']>;
};


export type MutationUpdateConfigArgs = {
  config: UpdateConfigInput;
};


export type MutationAddFoodArgs = {
  food: FoodInput;
};

export type AdditionalEntityFields = {
  path: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  FoodName: ResolverTypeWrapper<FoodName>,
  Food: ResolverTypeWrapper<Food>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  FoodInput: FoodInput,
  FoodNameInput: FoodNameInput,
  FoodSearchInput: FoodSearchInput,
  FoodNameSearchInput: FoodNameSearchInput,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Config: ResolverTypeWrapper<Config>,
  SearchFloatInput: SearchFloatInput,
  ComparisonOperator: ComparisonOperator,
  SearchStringInput: SearchStringInput,
  User: ResolverTypeWrapper<User>,
  Role: ResolverTypeWrapper<Role>,
  Permission: ResolverTypeWrapper<Permission>,
  MutationResponse: ResolversTypes['ConfigMutationResponse'] | ResolversTypes['FoodMutationResponse'],
  ConfigMutationResponse: ResolverTypeWrapper<ConfigMutationResponse>,
  FoodMutationResponse: ResolverTypeWrapper<FoodMutationResponse>,
  UpdateConfigInput: UpdateConfigInput,
  Query: ResolverTypeWrapper<{}>,
  Mutation: ResolverTypeWrapper<{}>,
  AdditionalEntityFields: AdditionalEntityFields,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  FoodName: FoodName,
  Food: Food,
  ID: Scalars['ID'],
  Float: Scalars['Float'],
  FoodInput: FoodInput,
  FoodNameInput: FoodNameInput,
  FoodSearchInput: FoodSearchInput,
  FoodNameSearchInput: FoodNameSearchInput,
  Date: Scalars['Date'],
  Config: Config,
  SearchFloatInput: SearchFloatInput,
  ComparisonOperator: ComparisonOperator,
  SearchStringInput: SearchStringInput,
  User: User,
  Role: Role,
  Permission: Permission,
  MutationResponse: ResolversParentTypes['ConfigMutationResponse'] | ResolversParentTypes['FoodMutationResponse'],
  ConfigMutationResponse: ConfigMutationResponse,
  FoodMutationResponse: FoodMutationResponse,
  UpdateConfigInput: UpdateConfigInput,
  Query: {},
  Mutation: {},
  AdditionalEntityFields: AdditionalEntityFields,
}>;

export type AuthDirectiveArgs = {   requires: Array<Scalars['String']>; };

export type AuthDirectiveResolver<Result, Parent, ContextType = Context, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type I8nDirectiveArgs = {  };

export type I8nDirectiveResolver<Result, Parent, ContextType = Context, Args = I8nDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UnionDirectiveArgs = {   discriminatorField: Maybe<Scalars['String']>;
  additionalFields: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type UnionDirectiveResolver<Result, Parent, ContextType = Context, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {   discriminatorField: Scalars['String'];
  additionalFields: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = Context, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {   embedded: Maybe<Scalars['Boolean']>;
  additionalFields: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type EntityDirectiveResolver<Result, Parent, ContextType = Context, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {   overrideType: Maybe<Scalars['String']>; };

export type ColumnDirectiveResolver<Result, Parent, ContextType = Context, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {  };

export type IdDirectiveResolver<Result, Parent, ContextType = Context, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {   overrideType: Maybe<Scalars['String']>; };

export type LinkDirectiveResolver<Result, Parent, ContextType = Context, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {  };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = Context, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {   path: Scalars['String']; };

export type MapDirectiveResolver<Result, Parent, ContextType = Context, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FoodNameResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FoodName'] = ResolversParentTypes['FoodName']> = ResolversObject<{
  en: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  fi: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type FoodResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Food'] = ResolversParentTypes['Food']> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['FoodName'], ParentType, ContextType>,
  enerc: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  choavl: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  prot: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  alc: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  oa: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  sugoh: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  sugar: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  frus: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  gals: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  glus: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lacs: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mals: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  sucs: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  starch: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fibc: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fibins: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  psacncs: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fol: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  niaeq: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  nia: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vitpyrid: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  ribf: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  thia: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vita: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  carotens: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vitb12: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vitc: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vitd: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vite: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vitk: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  ca: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fe: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  iod: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  k: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mg: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  na: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  nacl: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  p: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  se: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  zn: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fafre: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fapu: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  famcis: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fasat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fatrn: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fapun3: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  fapun6: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  f18d2cn6: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  f18d3n3: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  f20d5n3: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  f22d6n3: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  chole: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  stert: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  trp: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  foodid: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type ConfigResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Config'] = ResolversParentTypes['Config']> = ResolversObject<{
  lastFineliUpdate: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userId: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  roles: Resolver<Maybe<Array<ResolversTypes['Role']>>, ParentType, ContextType>,
  permissions: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type RoleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = ResolversObject<{
  id: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  permissions: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type PermissionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Permission'] = ResolversParentTypes['Permission']> = ResolversObject<{
  resourceServerIdentifier: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  permissionName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceServerName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type MutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ConfigMutationResponse' | 'FoodMutationResponse', ParentType, ContextType>,
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type ConfigMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConfigMutationResponse'] = ResolversParentTypes['ConfigMutationResponse']> = ResolversObject<{
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  config: Resolver<Maybe<ResolversTypes['Config']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type FoodMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FoodMutationResponse'] = ResolversParentTypes['FoodMutationResponse']> = ResolversObject<{
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  food: Resolver<Maybe<ResolversTypes['Food']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  users: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>,
  foods: Resolver<Array<ResolversTypes['Food']>, ParentType, ContextType, RequireFields<QueryFoodsArgs, never>>,
  food: Resolver<Maybe<ResolversTypes['Food']>, ParentType, ContextType, RequireFields<QueryFoodArgs, 'id'>>,
  config: Resolver<ResolversTypes['Config'], ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  assignRoleToUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAssignRoleToUserArgs, 'userId' | 'roleIds'>>,
  updateConfig: Resolver<ResolversTypes['ConfigMutationResponse'], ParentType, ContextType, RequireFields<MutationUpdateConfigArgs, 'config'>>,
  addFood: Resolver<ResolversTypes['FoodMutationResponse'], ParentType, ContextType, RequireFields<MutationAddFoodArgs, 'food'>>,
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  FoodName: FoodNameResolvers<ContextType>,
  Food: FoodResolvers<ContextType>,
  Date: GraphQLScalarType,
  Config: ConfigResolvers<ContextType>,
  User: UserResolvers<ContextType>,
  Role: RoleResolvers<ContextType>,
  Permission: PermissionResolvers<ContextType>,
  MutationResponse: MutationResponseResolvers,
  ConfigMutationResponse: ConfigMutationResponseResolvers<ContextType>,
  FoodMutationResponse: FoodMutationResponseResolvers<ContextType>,
  Query: QueryResolvers<ContextType>,
  Mutation: MutationResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = Context> = ResolversObject<{
  auth: AuthDirectiveResolver<any, any, ContextType>,
  i8n: I8nDirectiveResolver<any, any, ContextType>,
  union: UnionDirectiveResolver<any, any, ContextType>,
  abstractEntity: AbstractEntityDirectiveResolver<any, any, ContextType>,
  entity: EntityDirectiveResolver<any, any, ContextType>,
  column: ColumnDirectiveResolver<any, any, ContextType>,
  id: IdDirectiveResolver<any, any, ContextType>,
  link: LinkDirectiveResolver<any, any, ContextType>,
  embedded: EmbeddedDirectiveResolver<any, any, ContextType>,
  map: MapDirectiveResolver<any, any, ContextType>,
}>;


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = Context> = DirectiveResolvers<ContextType>;
import { ObjectID } from 'mongodb';
export type FoodNameDbObject = {
  en: Maybe<string>,
  fi: Maybe<string>,
};

export type FoodDbObject = {
  _id: ObjectID,
  name: FoodNameDbObject,
  enerc: Maybe<number>,
  fat: Maybe<number>,
  choavl: Maybe<number>,
  prot: Maybe<number>,
  alc: Maybe<number>,
  oa: Maybe<number>,
  sugoh: Maybe<number>,
  sugar: Maybe<number>,
  frus: Maybe<number>,
  gals: Maybe<number>,
  glus: Maybe<number>,
  lacs: Maybe<number>,
  mals: Maybe<number>,
  sucs: Maybe<number>,
  starch: Maybe<number>,
  fibc: Maybe<number>,
  fibins: Maybe<number>,
  psacncs: Maybe<number>,
  fol: Maybe<number>,
  niaeq: Maybe<number>,
  nia: Maybe<number>,
  vitpyrid: Maybe<number>,
  ribf: Maybe<number>,
  thia: Maybe<number>,
  vita: Maybe<number>,
  carotens: Maybe<number>,
  vitb12: Maybe<number>,
  vitc: Maybe<number>,
  vitd: Maybe<number>,
  vite: Maybe<number>,
  vitk: Maybe<number>,
  ca: Maybe<number>,
  fe: Maybe<number>,
  iod: Maybe<number>,
  k: Maybe<number>,
  mg: Maybe<number>,
  na: Maybe<number>,
  nacl: Maybe<number>,
  p: Maybe<number>,
  se: Maybe<number>,
  zn: Maybe<number>,
  fafre: Maybe<number>,
  fapu: Maybe<number>,
  famcis: Maybe<number>,
  fasat: Maybe<number>,
  fatrn: Maybe<number>,
  fapun3: Maybe<number>,
  fapun6: Maybe<number>,
  f18d2cn6: Maybe<number>,
  f18d3n3: Maybe<number>,
  f20d5n3: Maybe<number>,
  f22d6n3: Maybe<number>,
  chole: Maybe<number>,
  stert: Maybe<number>,
  trp: Maybe<number>,
  foodid: Maybe<string>,
};

export type ConfigDbObject = {
  lastFineliUpdate: Maybe<Date>,
};

