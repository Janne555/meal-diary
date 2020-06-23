export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};



export type FoodName = {
  __typename?: 'FoodName';
  en?: Maybe<Scalars['String']>;
  fi?: Maybe<Scalars['String']>;
};

export type Food = {
  __typename?: 'Food';
  id: Scalars['ID'];
  name: FoodName;
  enerc?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  choavl?: Maybe<Scalars['Float']>;
  prot?: Maybe<Scalars['Float']>;
  alc?: Maybe<Scalars['Float']>;
  oa?: Maybe<Scalars['Float']>;
  sugoh?: Maybe<Scalars['Float']>;
  sugar?: Maybe<Scalars['Float']>;
  frus?: Maybe<Scalars['Float']>;
  gals?: Maybe<Scalars['Float']>;
  glus?: Maybe<Scalars['Float']>;
  lacs?: Maybe<Scalars['Float']>;
  mals?: Maybe<Scalars['Float']>;
  sucs?: Maybe<Scalars['Float']>;
  starch?: Maybe<Scalars['Float']>;
  fibc?: Maybe<Scalars['Float']>;
  fibins?: Maybe<Scalars['Float']>;
  psacncs?: Maybe<Scalars['Float']>;
  fol?: Maybe<Scalars['Float']>;
  niaeq?: Maybe<Scalars['Float']>;
  nia?: Maybe<Scalars['Float']>;
  vitpyrid?: Maybe<Scalars['Float']>;
  ribf?: Maybe<Scalars['Float']>;
  thia?: Maybe<Scalars['Float']>;
  vita?: Maybe<Scalars['Float']>;
  carotens?: Maybe<Scalars['Float']>;
  vitb12?: Maybe<Scalars['Float']>;
  vitc?: Maybe<Scalars['Float']>;
  vitd?: Maybe<Scalars['Float']>;
  vite?: Maybe<Scalars['Float']>;
  vitk?: Maybe<Scalars['Float']>;
  ca?: Maybe<Scalars['Float']>;
  fe?: Maybe<Scalars['Float']>;
  iod?: Maybe<Scalars['Float']>;
  k?: Maybe<Scalars['Float']>;
  mg?: Maybe<Scalars['Float']>;
  na?: Maybe<Scalars['Float']>;
  nacl?: Maybe<Scalars['Float']>;
  p?: Maybe<Scalars['Float']>;
  se?: Maybe<Scalars['Float']>;
  zn?: Maybe<Scalars['Float']>;
  fafre?: Maybe<Scalars['Float']>;
  fapu?: Maybe<Scalars['Float']>;
  famcis?: Maybe<Scalars['Float']>;
  fasat?: Maybe<Scalars['Float']>;
  fatrn?: Maybe<Scalars['Float']>;
  fapun3?: Maybe<Scalars['Float']>;
  fapun6?: Maybe<Scalars['Float']>;
  f18d2cn6?: Maybe<Scalars['Float']>;
  f18d3n3?: Maybe<Scalars['Float']>;
  f20d5n3?: Maybe<Scalars['Float']>;
  f22d6n3?: Maybe<Scalars['Float']>;
  chole?: Maybe<Scalars['Float']>;
  stert?: Maybe<Scalars['Float']>;
  trp?: Maybe<Scalars['Float']>;
  foodid?: Maybe<Scalars['String']>;
};

export type FoodInput = {
  name: FoodNameInput;
  enerc?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  choavl?: Maybe<Scalars['Float']>;
  prot?: Maybe<Scalars['Float']>;
  alc?: Maybe<Scalars['Float']>;
  oa?: Maybe<Scalars['Float']>;
  sugoh?: Maybe<Scalars['Float']>;
  sugar?: Maybe<Scalars['Float']>;
  frus?: Maybe<Scalars['Float']>;
  gals?: Maybe<Scalars['Float']>;
  glus?: Maybe<Scalars['Float']>;
  lacs?: Maybe<Scalars['Float']>;
  mals?: Maybe<Scalars['Float']>;
  sucs?: Maybe<Scalars['Float']>;
  starch?: Maybe<Scalars['Float']>;
  fibc?: Maybe<Scalars['Float']>;
  fibins?: Maybe<Scalars['Float']>;
  psacncs?: Maybe<Scalars['Float']>;
  fol?: Maybe<Scalars['Float']>;
  niaeq?: Maybe<Scalars['Float']>;
  nia?: Maybe<Scalars['Float']>;
  vitpyrid?: Maybe<Scalars['Float']>;
  ribf?: Maybe<Scalars['Float']>;
  thia?: Maybe<Scalars['Float']>;
  vita?: Maybe<Scalars['Float']>;
  carotens?: Maybe<Scalars['Float']>;
  vitb12?: Maybe<Scalars['Float']>;
  vitc?: Maybe<Scalars['Float']>;
  vitd?: Maybe<Scalars['Float']>;
  vite?: Maybe<Scalars['Float']>;
  vitk?: Maybe<Scalars['Float']>;
  ca?: Maybe<Scalars['Float']>;
  fe?: Maybe<Scalars['Float']>;
  iod?: Maybe<Scalars['Float']>;
  k?: Maybe<Scalars['Float']>;
  mg?: Maybe<Scalars['Float']>;
  na?: Maybe<Scalars['Float']>;
  nacl?: Maybe<Scalars['Float']>;
  p?: Maybe<Scalars['Float']>;
  se?: Maybe<Scalars['Float']>;
  zn?: Maybe<Scalars['Float']>;
  fafre?: Maybe<Scalars['Float']>;
  fapu?: Maybe<Scalars['Float']>;
  famcis?: Maybe<Scalars['Float']>;
  fasat?: Maybe<Scalars['Float']>;
  fatrn?: Maybe<Scalars['Float']>;
  fapun3?: Maybe<Scalars['Float']>;
  fapun6?: Maybe<Scalars['Float']>;
  f18d2cn6?: Maybe<Scalars['Float']>;
  f18d3n3?: Maybe<Scalars['Float']>;
  f20d5n3?: Maybe<Scalars['Float']>;
  f22d6n3?: Maybe<Scalars['Float']>;
  chole?: Maybe<Scalars['Float']>;
  stert?: Maybe<Scalars['Float']>;
  trp?: Maybe<Scalars['Float']>;
};

export type FoodNameInput = {
  en?: Maybe<Scalars['String']>;
  fi?: Maybe<Scalars['String']>;
};

export type FoodSearchInput = {
  name?: Maybe<FoodNameSearchInput>;
  enerc?: Maybe<Array<SearchFloatInput>>;
  fat?: Maybe<Array<SearchFloatInput>>;
  choavl?: Maybe<Array<SearchFloatInput>>;
  prot?: Maybe<Array<SearchFloatInput>>;
  alc?: Maybe<Array<SearchFloatInput>>;
  oa?: Maybe<Array<SearchFloatInput>>;
  sugoh?: Maybe<Array<SearchFloatInput>>;
  sugar?: Maybe<Array<SearchFloatInput>>;
  frus?: Maybe<Array<SearchFloatInput>>;
  gals?: Maybe<Array<SearchFloatInput>>;
  glus?: Maybe<Array<SearchFloatInput>>;
  lacs?: Maybe<Array<SearchFloatInput>>;
  mals?: Maybe<Array<SearchFloatInput>>;
  sucs?: Maybe<Array<SearchFloatInput>>;
  starch?: Maybe<Array<SearchFloatInput>>;
  fibc?: Maybe<Array<SearchFloatInput>>;
  fibins?: Maybe<Array<SearchFloatInput>>;
  psacncs?: Maybe<Array<SearchFloatInput>>;
  fol?: Maybe<Array<SearchFloatInput>>;
  niaeq?: Maybe<Array<SearchFloatInput>>;
  nia?: Maybe<Array<SearchFloatInput>>;
  vitpyrid?: Maybe<Array<SearchFloatInput>>;
  ribf?: Maybe<Array<SearchFloatInput>>;
  thia?: Maybe<Array<SearchFloatInput>>;
  vita?: Maybe<Array<SearchFloatInput>>;
  carotens?: Maybe<Array<SearchFloatInput>>;
  vitb12?: Maybe<Array<SearchFloatInput>>;
  vitc?: Maybe<Array<SearchFloatInput>>;
  vitd?: Maybe<Array<SearchFloatInput>>;
  vite?: Maybe<Array<SearchFloatInput>>;
  vitk?: Maybe<Array<SearchFloatInput>>;
  ca?: Maybe<Array<SearchFloatInput>>;
  fe?: Maybe<Array<SearchFloatInput>>;
  iod?: Maybe<Array<SearchFloatInput>>;
  k?: Maybe<Array<SearchFloatInput>>;
  mg?: Maybe<Array<SearchFloatInput>>;
  na?: Maybe<Array<SearchFloatInput>>;
  nacl?: Maybe<Array<SearchFloatInput>>;
  p?: Maybe<Array<SearchFloatInput>>;
  se?: Maybe<Array<SearchFloatInput>>;
  zn?: Maybe<Array<SearchFloatInput>>;
  fafre?: Maybe<Array<SearchFloatInput>>;
  fapu?: Maybe<Array<SearchFloatInput>>;
  famcis?: Maybe<Array<SearchFloatInput>>;
  fasat?: Maybe<Array<SearchFloatInput>>;
  fatrn?: Maybe<Array<SearchFloatInput>>;
  fapun3?: Maybe<Array<SearchFloatInput>>;
  fapun6?: Maybe<Array<SearchFloatInput>>;
  f18d2cn6?: Maybe<Array<SearchFloatInput>>;
  f18d3n3?: Maybe<Array<SearchFloatInput>>;
  f20d5n3?: Maybe<Array<SearchFloatInput>>;
  f22d6n3?: Maybe<Array<SearchFloatInput>>;
  chole?: Maybe<Array<SearchFloatInput>>;
  stert?: Maybe<Array<SearchFloatInput>>;
  trp?: Maybe<Array<SearchFloatInput>>;
};

export type FoodNameSearchInput = {
  en?: Maybe<SearchStringInput>;
  fi?: Maybe<SearchStringInput>;
};


export type Config = {
  __typename?: 'Config';
  lastFineliUpdate?: Maybe<Scalars['Date']>;
};

export type SearchFloatInput = {
  value: Scalars['Float'];
  comparisonOperator?: Maybe<ComparisonOperator>;
};

export enum ComparisonOperator {
  Lt = 'LT',
  Gt = 'GT'
}

export type SearchStringInput = {
  value: Scalars['String'];
  regex?: Maybe<Scalars['Boolean']>;
  flags?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  roles?: Maybe<Array<Role>>;
  permissions?: Maybe<Array<Permission>>;
};

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Permission>>;
};

export type Permission = {
  __typename?: 'Permission';
  resourceServerIdentifier?: Maybe<Scalars['String']>;
  permissionName?: Maybe<Scalars['String']>;
  resourceServerName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  config?: Maybe<Config>;
};

export type FoodMutationResponse = MutationResponse & {
  __typename?: 'FoodMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  food?: Maybe<Food>;
};

export type UpdateConfigInput = {
  lastFineliUpdate?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<User>>;
  foods: Array<Food>;
  food?: Maybe<Food>;
  config: Config;
};


export type QueryFoodsArgs = {
  params?: Maybe<FoodSearchInput>;
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

export type GetFoodNamesQueryVariables = {};


export type GetFoodNamesQuery = (
  { __typename?: 'Query' }
  & { foods: Array<(
    { __typename?: 'Food' }
    & Pick<Food, 'id'>
    & { name: (
      { __typename?: 'FoodName' }
      & Pick<FoodName, 'fi' | 'en'>
    ) }
  )> }
);

export type GetFoodQueryVariables = {
  id: Scalars['ID'];
};


export type GetFoodQuery = (
  { __typename?: 'Query' }
  & { food?: Maybe<(
    { __typename?: 'Food' }
    & Pick<Food, 'id' | 'enerc' | 'fat' | 'prot' | 'sugar' | 'fibc' | 'nacl'>
    & { name: (
      { __typename?: 'FoodName' }
      & Pick<FoodName, 'fi' | 'en'>
    ) }
  )> }
);
