
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model BlockList
 * 
 */
export type BlockList = $Result.DefaultSelection<Prisma.$BlockListPayload>
/**
 * Model BlockItem
 * 
 */
export type BlockItem = $Result.DefaultSelection<Prisma.$BlockItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BlockItemType: {
  Website: 'Website',
  Keyword: 'Keyword'
};

export type BlockItemType = (typeof BlockItemType)[keyof typeof BlockItemType]

}

export type BlockItemType = $Enums.BlockItemType

export const BlockItemType: typeof $Enums.BlockItemType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockList`: Exposes CRUD operations for the **BlockList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockLists
    * const blockLists = await prisma.blockList.findMany()
    * ```
    */
  get blockList(): Prisma.BlockListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockItem`: Exposes CRUD operations for the **BlockItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockItems
    * const blockItems = await prisma.blockItem.findMany()
    * ```
    */
  get blockItem(): Prisma.BlockItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    BlockList: 'BlockList',
    BlockItem: 'BlockItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "blockList" | "blockItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      BlockList: {
        payload: Prisma.$BlockListPayload<ExtArgs>
        fields: Prisma.BlockListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          findFirst: {
            args: Prisma.BlockListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          findMany: {
            args: Prisma.BlockListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>[]
          }
          create: {
            args: Prisma.BlockListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          createMany: {
            args: Prisma.BlockListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>[]
          }
          delete: {
            args: Prisma.BlockListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          update: {
            args: Prisma.BlockListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          deleteMany: {
            args: Prisma.BlockListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>[]
          }
          upsert: {
            args: Prisma.BlockListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          aggregate: {
            args: Prisma.BlockListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockList>
          }
          groupBy: {
            args: Prisma.BlockListGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockListGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockListCountArgs<ExtArgs>
            result: $Utils.Optional<BlockListCountAggregateOutputType> | number
          }
        }
      }
      BlockItem: {
        payload: Prisma.$BlockItemPayload<ExtArgs>
        fields: Prisma.BlockItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload>
          }
          findFirst: {
            args: Prisma.BlockItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload>
          }
          findMany: {
            args: Prisma.BlockItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload>[]
          }
          create: {
            args: Prisma.BlockItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload>
          }
          createMany: {
            args: Prisma.BlockItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload>[]
          }
          delete: {
            args: Prisma.BlockItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload>
          }
          update: {
            args: Prisma.BlockItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload>
          }
          deleteMany: {
            args: Prisma.BlockItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload>[]
          }
          upsert: {
            args: Prisma.BlockItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockItemPayload>
          }
          aggregate: {
            args: Prisma.BlockItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockItem>
          }
          groupBy: {
            args: Prisma.BlockItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockItemCountArgs<ExtArgs>
            result: $Utils.Optional<BlockItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    blockList?: BlockListOmit
    blockItem?: BlockItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BlockListCountOutputType
   */

  export type BlockListCountOutputType = {
    items: number
  }

  export type BlockListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | BlockListCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * BlockListCountOutputType without action
   */
  export type BlockListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockListCountOutputType
     */
    select?: BlockListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlockListCountOutputType without action
   */
  export type BlockListCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    hash: string | null
    salt: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    hash: string | null
    salt: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hash: number
    salt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    salt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    salt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    salt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    hash: string
    salt: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash?: boolean
    salt?: boolean
    account?: boolean | User$accountArgs<ExtArgs>
    blockList?: boolean | User$blockListArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash?: boolean
    salt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash?: boolean
    salt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hash?: boolean
    salt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hash" | "salt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | User$accountArgs<ExtArgs>
    blockList?: boolean | User$blockListArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
      blockList: Prisma.$BlockListPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      hash: string
      salt: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends User$accountArgs<ExtArgs> = {}>(args?: Subset<T, User$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    blockList<T extends User$blockListArgs<ExtArgs> = {}>(args?: Subset<T, User$blockListArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly hash: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.account
   */
  export type User$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * User.blockList
   */
  export type User$blockListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    where?: BlockListWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
    isBlockingEnabled: boolean | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
    isBlockingEnabled: boolean | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    ownerId: number
    isBlockingEnabled: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    ownerId?: true
    isBlockingEnabled?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    ownerId?: true
    isBlockingEnabled?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    ownerId?: true
    isBlockingEnabled?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    ownerId: number
    isBlockingEnabled: boolean
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    isBlockingEnabled?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    isBlockingEnabled?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    isBlockingEnabled?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    ownerId?: boolean
    isBlockingEnabled?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "isBlockingEnabled", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: number
      isBlockingEnabled: boolean
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly ownerId: FieldRef<"Account", 'Int'>
    readonly isBlockingEnabled: FieldRef<"Account", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model BlockList
   */

  export type AggregateBlockList = {
    _count: BlockListCountAggregateOutputType | null
    _avg: BlockListAvgAggregateOutputType | null
    _sum: BlockListSumAggregateOutputType | null
    _min: BlockListMinAggregateOutputType | null
    _max: BlockListMaxAggregateOutputType | null
  }

  export type BlockListAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type BlockListSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type BlockListMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type BlockListMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type BlockListCountAggregateOutputType = {
    id: number
    ownerId: number
    _all: number
  }


  export type BlockListAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type BlockListSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type BlockListMinAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type BlockListMaxAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type BlockListCountAggregateInputType = {
    id?: true
    ownerId?: true
    _all?: true
  }

  export type BlockListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockList to aggregate.
     */
    where?: BlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockLists to fetch.
     */
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockLists
    **/
    _count?: true | BlockListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockListMaxAggregateInputType
  }

  export type GetBlockListAggregateType<T extends BlockListAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockList[P]>
      : GetScalarType<T[P], AggregateBlockList[P]>
  }




  export type BlockListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockListWhereInput
    orderBy?: BlockListOrderByWithAggregationInput | BlockListOrderByWithAggregationInput[]
    by: BlockListScalarFieldEnum[] | BlockListScalarFieldEnum
    having?: BlockListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockListCountAggregateInputType | true
    _avg?: BlockListAvgAggregateInputType
    _sum?: BlockListSumAggregateInputType
    _min?: BlockListMinAggregateInputType
    _max?: BlockListMaxAggregateInputType
  }

  export type BlockListGroupByOutputType = {
    id: number
    ownerId: number
    _count: BlockListCountAggregateOutputType | null
    _avg: BlockListAvgAggregateOutputType | null
    _sum: BlockListSumAggregateOutputType | null
    _min: BlockListMinAggregateOutputType | null
    _max: BlockListMaxAggregateOutputType | null
  }

  type GetBlockListGroupByPayload<T extends BlockListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockListGroupByOutputType[P]>
            : GetScalarType<T[P], BlockListGroupByOutputType[P]>
        }
      >
    >


  export type BlockListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | BlockList$itemsArgs<ExtArgs>
    _count?: boolean | BlockListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockList"]>

  export type BlockListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockList"]>

  export type BlockListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockList"]>

  export type BlockListSelectScalar = {
    id?: boolean
    ownerId?: boolean
  }

  export type BlockListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId", ExtArgs["result"]["blockList"]>
  export type BlockListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | BlockList$itemsArgs<ExtArgs>
    _count?: boolean | BlockListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlockListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlockListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlockListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockList"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$BlockItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: number
    }, ExtArgs["result"]["blockList"]>
    composites: {}
  }

  type BlockListGetPayload<S extends boolean | null | undefined | BlockListDefaultArgs> = $Result.GetResult<Prisma.$BlockListPayload, S>

  type BlockListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockListCountAggregateInputType | true
    }

  export interface BlockListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockList'], meta: { name: 'BlockList' } }
    /**
     * Find zero or one BlockList that matches the filter.
     * @param {BlockListFindUniqueArgs} args - Arguments to find a BlockList
     * @example
     * // Get one BlockList
     * const blockList = await prisma.blockList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockListFindUniqueArgs>(args: SelectSubset<T, BlockListFindUniqueArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockListFindUniqueOrThrowArgs} args - Arguments to find a BlockList
     * @example
     * // Get one BlockList
     * const blockList = await prisma.blockList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockListFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListFindFirstArgs} args - Arguments to find a BlockList
     * @example
     * // Get one BlockList
     * const blockList = await prisma.blockList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockListFindFirstArgs>(args?: SelectSubset<T, BlockListFindFirstArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListFindFirstOrThrowArgs} args - Arguments to find a BlockList
     * @example
     * // Get one BlockList
     * const blockList = await prisma.blockList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockListFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockListFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockLists
     * const blockLists = await prisma.blockList.findMany()
     * 
     * // Get first 10 BlockLists
     * const blockLists = await prisma.blockList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockListWithIdOnly = await prisma.blockList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockListFindManyArgs>(args?: SelectSubset<T, BlockListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockList.
     * @param {BlockListCreateArgs} args - Arguments to create a BlockList.
     * @example
     * // Create one BlockList
     * const BlockList = await prisma.blockList.create({
     *   data: {
     *     // ... data to create a BlockList
     *   }
     * })
     * 
     */
    create<T extends BlockListCreateArgs>(args: SelectSubset<T, BlockListCreateArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockLists.
     * @param {BlockListCreateManyArgs} args - Arguments to create many BlockLists.
     * @example
     * // Create many BlockLists
     * const blockList = await prisma.blockList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockListCreateManyArgs>(args?: SelectSubset<T, BlockListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockLists and returns the data saved in the database.
     * @param {BlockListCreateManyAndReturnArgs} args - Arguments to create many BlockLists.
     * @example
     * // Create many BlockLists
     * const blockList = await prisma.blockList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockLists and only return the `id`
     * const blockListWithIdOnly = await prisma.blockList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockListCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockList.
     * @param {BlockListDeleteArgs} args - Arguments to delete one BlockList.
     * @example
     * // Delete one BlockList
     * const BlockList = await prisma.blockList.delete({
     *   where: {
     *     // ... filter to delete one BlockList
     *   }
     * })
     * 
     */
    delete<T extends BlockListDeleteArgs>(args: SelectSubset<T, BlockListDeleteArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockList.
     * @param {BlockListUpdateArgs} args - Arguments to update one BlockList.
     * @example
     * // Update one BlockList
     * const blockList = await prisma.blockList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockListUpdateArgs>(args: SelectSubset<T, BlockListUpdateArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockLists.
     * @param {BlockListDeleteManyArgs} args - Arguments to filter BlockLists to delete.
     * @example
     * // Delete a few BlockLists
     * const { count } = await prisma.blockList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockListDeleteManyArgs>(args?: SelectSubset<T, BlockListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockLists
     * const blockList = await prisma.blockList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockListUpdateManyArgs>(args: SelectSubset<T, BlockListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockLists and returns the data updated in the database.
     * @param {BlockListUpdateManyAndReturnArgs} args - Arguments to update many BlockLists.
     * @example
     * // Update many BlockLists
     * const blockList = await prisma.blockList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockLists and only return the `id`
     * const blockListWithIdOnly = await prisma.blockList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockListUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockList.
     * @param {BlockListUpsertArgs} args - Arguments to update or create a BlockList.
     * @example
     * // Update or create a BlockList
     * const blockList = await prisma.blockList.upsert({
     *   create: {
     *     // ... data to create a BlockList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockList we want to update
     *   }
     * })
     */
    upsert<T extends BlockListUpsertArgs>(args: SelectSubset<T, BlockListUpsertArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListCountArgs} args - Arguments to filter BlockLists to count.
     * @example
     * // Count the number of BlockLists
     * const count = await prisma.blockList.count({
     *   where: {
     *     // ... the filter for the BlockLists we want to count
     *   }
     * })
    **/
    count<T extends BlockListCountArgs>(
      args?: Subset<T, BlockListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockListAggregateArgs>(args: Subset<T, BlockListAggregateArgs>): Prisma.PrismaPromise<GetBlockListAggregateType<T>>

    /**
     * Group by BlockList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockListGroupByArgs['orderBy'] }
        : { orderBy?: BlockListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockList model
   */
  readonly fields: BlockListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends BlockList$itemsArgs<ExtArgs> = {}>(args?: Subset<T, BlockList$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlockList model
   */
  interface BlockListFieldRefs {
    readonly id: FieldRef<"BlockList", 'Int'>
    readonly ownerId: FieldRef<"BlockList", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BlockList findUnique
   */
  export type BlockListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockList to fetch.
     */
    where: BlockListWhereUniqueInput
  }

  /**
   * BlockList findUniqueOrThrow
   */
  export type BlockListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockList to fetch.
     */
    where: BlockListWhereUniqueInput
  }

  /**
   * BlockList findFirst
   */
  export type BlockListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockList to fetch.
     */
    where?: BlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockLists to fetch.
     */
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockLists.
     */
    cursor?: BlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockLists.
     */
    distinct?: BlockListScalarFieldEnum | BlockListScalarFieldEnum[]
  }

  /**
   * BlockList findFirstOrThrow
   */
  export type BlockListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockList to fetch.
     */
    where?: BlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockLists to fetch.
     */
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockLists.
     */
    cursor?: BlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockLists.
     */
    distinct?: BlockListScalarFieldEnum | BlockListScalarFieldEnum[]
  }

  /**
   * BlockList findMany
   */
  export type BlockListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockLists to fetch.
     */
    where?: BlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockLists to fetch.
     */
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockLists.
     */
    cursor?: BlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockLists.
     */
    skip?: number
    distinct?: BlockListScalarFieldEnum | BlockListScalarFieldEnum[]
  }

  /**
   * BlockList create
   */
  export type BlockListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockList.
     */
    data: XOR<BlockListCreateInput, BlockListUncheckedCreateInput>
  }

  /**
   * BlockList createMany
   */
  export type BlockListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockLists.
     */
    data: BlockListCreateManyInput | BlockListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockList createManyAndReturn
   */
  export type BlockListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * The data used to create many BlockLists.
     */
    data: BlockListCreateManyInput | BlockListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockList update
   */
  export type BlockListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockList.
     */
    data: XOR<BlockListUpdateInput, BlockListUncheckedUpdateInput>
    /**
     * Choose, which BlockList to update.
     */
    where: BlockListWhereUniqueInput
  }

  /**
   * BlockList updateMany
   */
  export type BlockListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockLists.
     */
    data: XOR<BlockListUpdateManyMutationInput, BlockListUncheckedUpdateManyInput>
    /**
     * Filter which BlockLists to update
     */
    where?: BlockListWhereInput
    /**
     * Limit how many BlockLists to update.
     */
    limit?: number
  }

  /**
   * BlockList updateManyAndReturn
   */
  export type BlockListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * The data used to update BlockLists.
     */
    data: XOR<BlockListUpdateManyMutationInput, BlockListUncheckedUpdateManyInput>
    /**
     * Filter which BlockLists to update
     */
    where?: BlockListWhereInput
    /**
     * Limit how many BlockLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockList upsert
   */
  export type BlockListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockList to update in case it exists.
     */
    where: BlockListWhereUniqueInput
    /**
     * In case the BlockList found by the `where` argument doesn't exist, create a new BlockList with this data.
     */
    create: XOR<BlockListCreateInput, BlockListUncheckedCreateInput>
    /**
     * In case the BlockList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockListUpdateInput, BlockListUncheckedUpdateInput>
  }

  /**
   * BlockList delete
   */
  export type BlockListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter which BlockList to delete.
     */
    where: BlockListWhereUniqueInput
  }

  /**
   * BlockList deleteMany
   */
  export type BlockListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockLists to delete
     */
    where?: BlockListWhereInput
    /**
     * Limit how many BlockLists to delete.
     */
    limit?: number
  }

  /**
   * BlockList.items
   */
  export type BlockList$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    where?: BlockItemWhereInput
    orderBy?: BlockItemOrderByWithRelationInput | BlockItemOrderByWithRelationInput[]
    cursor?: BlockItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockItemScalarFieldEnum | BlockItemScalarFieldEnum[]
  }

  /**
   * BlockList without action
   */
  export type BlockListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
  }


  /**
   * Model BlockItem
   */

  export type AggregateBlockItem = {
    _count: BlockItemCountAggregateOutputType | null
    _avg: BlockItemAvgAggregateOutputType | null
    _sum: BlockItemSumAggregateOutputType | null
    _min: BlockItemMinAggregateOutputType | null
    _max: BlockItemMaxAggregateOutputType | null
  }

  export type BlockItemAvgAggregateOutputType = {
    id: number | null
    blockListId: number | null
  }

  export type BlockItemSumAggregateOutputType = {
    id: number | null
    blockListId: number | null
  }

  export type BlockItemMinAggregateOutputType = {
    id: number | null
    blockListId: number | null
    type: $Enums.BlockItemType | null
    data: string | null
    createdAt: Date | null
  }

  export type BlockItemMaxAggregateOutputType = {
    id: number | null
    blockListId: number | null
    type: $Enums.BlockItemType | null
    data: string | null
    createdAt: Date | null
  }

  export type BlockItemCountAggregateOutputType = {
    id: number
    blockListId: number
    type: number
    data: number
    createdAt: number
    _all: number
  }


  export type BlockItemAvgAggregateInputType = {
    id?: true
    blockListId?: true
  }

  export type BlockItemSumAggregateInputType = {
    id?: true
    blockListId?: true
  }

  export type BlockItemMinAggregateInputType = {
    id?: true
    blockListId?: true
    type?: true
    data?: true
    createdAt?: true
  }

  export type BlockItemMaxAggregateInputType = {
    id?: true
    blockListId?: true
    type?: true
    data?: true
    createdAt?: true
  }

  export type BlockItemCountAggregateInputType = {
    id?: true
    blockListId?: true
    type?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type BlockItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockItem to aggregate.
     */
    where?: BlockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockItems to fetch.
     */
    orderBy?: BlockItemOrderByWithRelationInput | BlockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockItems
    **/
    _count?: true | BlockItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockItemMaxAggregateInputType
  }

  export type GetBlockItemAggregateType<T extends BlockItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockItem[P]>
      : GetScalarType<T[P], AggregateBlockItem[P]>
  }




  export type BlockItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockItemWhereInput
    orderBy?: BlockItemOrderByWithAggregationInput | BlockItemOrderByWithAggregationInput[]
    by: BlockItemScalarFieldEnum[] | BlockItemScalarFieldEnum
    having?: BlockItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockItemCountAggregateInputType | true
    _avg?: BlockItemAvgAggregateInputType
    _sum?: BlockItemSumAggregateInputType
    _min?: BlockItemMinAggregateInputType
    _max?: BlockItemMaxAggregateInputType
  }

  export type BlockItemGroupByOutputType = {
    id: number
    blockListId: number
    type: $Enums.BlockItemType
    data: string
    createdAt: Date
    _count: BlockItemCountAggregateOutputType | null
    _avg: BlockItemAvgAggregateOutputType | null
    _sum: BlockItemSumAggregateOutputType | null
    _min: BlockItemMinAggregateOutputType | null
    _max: BlockItemMaxAggregateOutputType | null
  }

  type GetBlockItemGroupByPayload<T extends BlockItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockItemGroupByOutputType[P]>
            : GetScalarType<T[P], BlockItemGroupByOutputType[P]>
        }
      >
    >


  export type BlockItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockListId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    blockList?: boolean | BlockListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockItem"]>

  export type BlockItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockListId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    blockList?: boolean | BlockListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockItem"]>

  export type BlockItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockListId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    blockList?: boolean | BlockListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockItem"]>

  export type BlockItemSelectScalar = {
    id?: boolean
    blockListId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type BlockItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockListId" | "type" | "data" | "createdAt", ExtArgs["result"]["blockItem"]>
  export type BlockItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blockList?: boolean | BlockListDefaultArgs<ExtArgs>
  }
  export type BlockItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blockList?: boolean | BlockListDefaultArgs<ExtArgs>
  }
  export type BlockItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blockList?: boolean | BlockListDefaultArgs<ExtArgs>
  }

  export type $BlockItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockItem"
    objects: {
      blockList: Prisma.$BlockListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blockListId: number
      type: $Enums.BlockItemType
      data: string
      createdAt: Date
    }, ExtArgs["result"]["blockItem"]>
    composites: {}
  }

  type BlockItemGetPayload<S extends boolean | null | undefined | BlockItemDefaultArgs> = $Result.GetResult<Prisma.$BlockItemPayload, S>

  type BlockItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockItemCountAggregateInputType | true
    }

  export interface BlockItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockItem'], meta: { name: 'BlockItem' } }
    /**
     * Find zero or one BlockItem that matches the filter.
     * @param {BlockItemFindUniqueArgs} args - Arguments to find a BlockItem
     * @example
     * // Get one BlockItem
     * const blockItem = await prisma.blockItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockItemFindUniqueArgs>(args: SelectSubset<T, BlockItemFindUniqueArgs<ExtArgs>>): Prisma__BlockItemClient<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockItemFindUniqueOrThrowArgs} args - Arguments to find a BlockItem
     * @example
     * // Get one BlockItem
     * const blockItem = await prisma.blockItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockItemClient<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockItemFindFirstArgs} args - Arguments to find a BlockItem
     * @example
     * // Get one BlockItem
     * const blockItem = await prisma.blockItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockItemFindFirstArgs>(args?: SelectSubset<T, BlockItemFindFirstArgs<ExtArgs>>): Prisma__BlockItemClient<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockItemFindFirstOrThrowArgs} args - Arguments to find a BlockItem
     * @example
     * // Get one BlockItem
     * const blockItem = await prisma.blockItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockItemClient<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockItems
     * const blockItems = await prisma.blockItem.findMany()
     * 
     * // Get first 10 BlockItems
     * const blockItems = await prisma.blockItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockItemWithIdOnly = await prisma.blockItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockItemFindManyArgs>(args?: SelectSubset<T, BlockItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockItem.
     * @param {BlockItemCreateArgs} args - Arguments to create a BlockItem.
     * @example
     * // Create one BlockItem
     * const BlockItem = await prisma.blockItem.create({
     *   data: {
     *     // ... data to create a BlockItem
     *   }
     * })
     * 
     */
    create<T extends BlockItemCreateArgs>(args: SelectSubset<T, BlockItemCreateArgs<ExtArgs>>): Prisma__BlockItemClient<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockItems.
     * @param {BlockItemCreateManyArgs} args - Arguments to create many BlockItems.
     * @example
     * // Create many BlockItems
     * const blockItem = await prisma.blockItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockItemCreateManyArgs>(args?: SelectSubset<T, BlockItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockItems and returns the data saved in the database.
     * @param {BlockItemCreateManyAndReturnArgs} args - Arguments to create many BlockItems.
     * @example
     * // Create many BlockItems
     * const blockItem = await prisma.blockItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockItems and only return the `id`
     * const blockItemWithIdOnly = await prisma.blockItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockItem.
     * @param {BlockItemDeleteArgs} args - Arguments to delete one BlockItem.
     * @example
     * // Delete one BlockItem
     * const BlockItem = await prisma.blockItem.delete({
     *   where: {
     *     // ... filter to delete one BlockItem
     *   }
     * })
     * 
     */
    delete<T extends BlockItemDeleteArgs>(args: SelectSubset<T, BlockItemDeleteArgs<ExtArgs>>): Prisma__BlockItemClient<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockItem.
     * @param {BlockItemUpdateArgs} args - Arguments to update one BlockItem.
     * @example
     * // Update one BlockItem
     * const blockItem = await prisma.blockItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockItemUpdateArgs>(args: SelectSubset<T, BlockItemUpdateArgs<ExtArgs>>): Prisma__BlockItemClient<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockItems.
     * @param {BlockItemDeleteManyArgs} args - Arguments to filter BlockItems to delete.
     * @example
     * // Delete a few BlockItems
     * const { count } = await prisma.blockItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockItemDeleteManyArgs>(args?: SelectSubset<T, BlockItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockItems
     * const blockItem = await prisma.blockItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockItemUpdateManyArgs>(args: SelectSubset<T, BlockItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockItems and returns the data updated in the database.
     * @param {BlockItemUpdateManyAndReturnArgs} args - Arguments to update many BlockItems.
     * @example
     * // Update many BlockItems
     * const blockItem = await prisma.blockItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockItems and only return the `id`
     * const blockItemWithIdOnly = await prisma.blockItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockItem.
     * @param {BlockItemUpsertArgs} args - Arguments to update or create a BlockItem.
     * @example
     * // Update or create a BlockItem
     * const blockItem = await prisma.blockItem.upsert({
     *   create: {
     *     // ... data to create a BlockItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockItem we want to update
     *   }
     * })
     */
    upsert<T extends BlockItemUpsertArgs>(args: SelectSubset<T, BlockItemUpsertArgs<ExtArgs>>): Prisma__BlockItemClient<$Result.GetResult<Prisma.$BlockItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockItemCountArgs} args - Arguments to filter BlockItems to count.
     * @example
     * // Count the number of BlockItems
     * const count = await prisma.blockItem.count({
     *   where: {
     *     // ... the filter for the BlockItems we want to count
     *   }
     * })
    **/
    count<T extends BlockItemCountArgs>(
      args?: Subset<T, BlockItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockItemAggregateArgs>(args: Subset<T, BlockItemAggregateArgs>): Prisma.PrismaPromise<GetBlockItemAggregateType<T>>

    /**
     * Group by BlockItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockItemGroupByArgs['orderBy'] }
        : { orderBy?: BlockItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockItem model
   */
  readonly fields: BlockItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blockList<T extends BlockListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlockListDefaultArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlockItem model
   */
  interface BlockItemFieldRefs {
    readonly id: FieldRef<"BlockItem", 'Int'>
    readonly blockListId: FieldRef<"BlockItem", 'Int'>
    readonly type: FieldRef<"BlockItem", 'BlockItemType'>
    readonly data: FieldRef<"BlockItem", 'String'>
    readonly createdAt: FieldRef<"BlockItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockItem findUnique
   */
  export type BlockItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    /**
     * Filter, which BlockItem to fetch.
     */
    where: BlockItemWhereUniqueInput
  }

  /**
   * BlockItem findUniqueOrThrow
   */
  export type BlockItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    /**
     * Filter, which BlockItem to fetch.
     */
    where: BlockItemWhereUniqueInput
  }

  /**
   * BlockItem findFirst
   */
  export type BlockItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    /**
     * Filter, which BlockItem to fetch.
     */
    where?: BlockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockItems to fetch.
     */
    orderBy?: BlockItemOrderByWithRelationInput | BlockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockItems.
     */
    cursor?: BlockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockItems.
     */
    distinct?: BlockItemScalarFieldEnum | BlockItemScalarFieldEnum[]
  }

  /**
   * BlockItem findFirstOrThrow
   */
  export type BlockItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    /**
     * Filter, which BlockItem to fetch.
     */
    where?: BlockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockItems to fetch.
     */
    orderBy?: BlockItemOrderByWithRelationInput | BlockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockItems.
     */
    cursor?: BlockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockItems.
     */
    distinct?: BlockItemScalarFieldEnum | BlockItemScalarFieldEnum[]
  }

  /**
   * BlockItem findMany
   */
  export type BlockItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    /**
     * Filter, which BlockItems to fetch.
     */
    where?: BlockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockItems to fetch.
     */
    orderBy?: BlockItemOrderByWithRelationInput | BlockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockItems.
     */
    cursor?: BlockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockItems.
     */
    skip?: number
    distinct?: BlockItemScalarFieldEnum | BlockItemScalarFieldEnum[]
  }

  /**
   * BlockItem create
   */
  export type BlockItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockItem.
     */
    data: XOR<BlockItemCreateInput, BlockItemUncheckedCreateInput>
  }

  /**
   * BlockItem createMany
   */
  export type BlockItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockItems.
     */
    data: BlockItemCreateManyInput | BlockItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockItem createManyAndReturn
   */
  export type BlockItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * The data used to create many BlockItems.
     */
    data: BlockItemCreateManyInput | BlockItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockItem update
   */
  export type BlockItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockItem.
     */
    data: XOR<BlockItemUpdateInput, BlockItemUncheckedUpdateInput>
    /**
     * Choose, which BlockItem to update.
     */
    where: BlockItemWhereUniqueInput
  }

  /**
   * BlockItem updateMany
   */
  export type BlockItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockItems.
     */
    data: XOR<BlockItemUpdateManyMutationInput, BlockItemUncheckedUpdateManyInput>
    /**
     * Filter which BlockItems to update
     */
    where?: BlockItemWhereInput
    /**
     * Limit how many BlockItems to update.
     */
    limit?: number
  }

  /**
   * BlockItem updateManyAndReturn
   */
  export type BlockItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * The data used to update BlockItems.
     */
    data: XOR<BlockItemUpdateManyMutationInput, BlockItemUncheckedUpdateManyInput>
    /**
     * Filter which BlockItems to update
     */
    where?: BlockItemWhereInput
    /**
     * Limit how many BlockItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockItem upsert
   */
  export type BlockItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockItem to update in case it exists.
     */
    where: BlockItemWhereUniqueInput
    /**
     * In case the BlockItem found by the `where` argument doesn't exist, create a new BlockItem with this data.
     */
    create: XOR<BlockItemCreateInput, BlockItemUncheckedCreateInput>
    /**
     * In case the BlockItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockItemUpdateInput, BlockItemUncheckedUpdateInput>
  }

  /**
   * BlockItem delete
   */
  export type BlockItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
    /**
     * Filter which BlockItem to delete.
     */
    where: BlockItemWhereUniqueInput
  }

  /**
   * BlockItem deleteMany
   */
  export type BlockItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockItems to delete
     */
    where?: BlockItemWhereInput
    /**
     * Limit how many BlockItems to delete.
     */
    limit?: number
  }

  /**
   * BlockItem without action
   */
  export type BlockItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockItem
     */
    select?: BlockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockItem
     */
    omit?: BlockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hash: 'hash',
    salt: 'salt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    isBlockingEnabled: 'isBlockingEnabled'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const BlockListScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId'
  };

  export type BlockListScalarFieldEnum = (typeof BlockListScalarFieldEnum)[keyof typeof BlockListScalarFieldEnum]


  export const BlockItemScalarFieldEnum: {
    id: 'id',
    blockListId: 'blockListId',
    type: 'type',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type BlockItemScalarFieldEnum = (typeof BlockItemScalarFieldEnum)[keyof typeof BlockItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BlockItemType'
   */
  export type EnumBlockItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlockItemType'>
    


  /**
   * Reference to a field of type 'BlockItemType[]'
   */
  export type ListEnumBlockItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlockItemType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    hash?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    blockList?: XOR<BlockListNullableScalarRelationFilter, BlockListWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    account?: AccountOrderByWithRelationInput
    blockList?: BlockListOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hash?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    blockList?: XOR<BlockListNullableScalarRelationFilter, BlockListWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    hash?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    ownerId?: IntFilter<"Account"> | number
    isBlockingEnabled?: BoolFilter<"Account"> | boolean
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    isBlockingEnabled?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ownerId?: number
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    isBlockingEnabled?: BoolFilter<"Account"> | boolean
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "ownerId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    isBlockingEnabled?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    ownerId?: IntWithAggregatesFilter<"Account"> | number
    isBlockingEnabled?: BoolWithAggregatesFilter<"Account"> | boolean
  }

  export type BlockListWhereInput = {
    AND?: BlockListWhereInput | BlockListWhereInput[]
    OR?: BlockListWhereInput[]
    NOT?: BlockListWhereInput | BlockListWhereInput[]
    id?: IntFilter<"BlockList"> | number
    ownerId?: IntFilter<"BlockList"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: BlockItemListRelationFilter
  }

  export type BlockListOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    items?: BlockItemOrderByRelationAggregateInput
  }

  export type BlockListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ownerId?: number
    AND?: BlockListWhereInput | BlockListWhereInput[]
    OR?: BlockListWhereInput[]
    NOT?: BlockListWhereInput | BlockListWhereInput[]
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: BlockItemListRelationFilter
  }, "id" | "ownerId">

  export type BlockListOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    _count?: BlockListCountOrderByAggregateInput
    _avg?: BlockListAvgOrderByAggregateInput
    _max?: BlockListMaxOrderByAggregateInput
    _min?: BlockListMinOrderByAggregateInput
    _sum?: BlockListSumOrderByAggregateInput
  }

  export type BlockListScalarWhereWithAggregatesInput = {
    AND?: BlockListScalarWhereWithAggregatesInput | BlockListScalarWhereWithAggregatesInput[]
    OR?: BlockListScalarWhereWithAggregatesInput[]
    NOT?: BlockListScalarWhereWithAggregatesInput | BlockListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlockList"> | number
    ownerId?: IntWithAggregatesFilter<"BlockList"> | number
  }

  export type BlockItemWhereInput = {
    AND?: BlockItemWhereInput | BlockItemWhereInput[]
    OR?: BlockItemWhereInput[]
    NOT?: BlockItemWhereInput | BlockItemWhereInput[]
    id?: IntFilter<"BlockItem"> | number
    blockListId?: IntFilter<"BlockItem"> | number
    type?: EnumBlockItemTypeFilter<"BlockItem"> | $Enums.BlockItemType
    data?: StringFilter<"BlockItem"> | string
    createdAt?: DateTimeFilter<"BlockItem"> | Date | string
    blockList?: XOR<BlockListScalarRelationFilter, BlockListWhereInput>
  }

  export type BlockItemOrderByWithRelationInput = {
    id?: SortOrder
    blockListId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    blockList?: BlockListOrderByWithRelationInput
  }

  export type BlockItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlockItemWhereInput | BlockItemWhereInput[]
    OR?: BlockItemWhereInput[]
    NOT?: BlockItemWhereInput | BlockItemWhereInput[]
    blockListId?: IntFilter<"BlockItem"> | number
    type?: EnumBlockItemTypeFilter<"BlockItem"> | $Enums.BlockItemType
    data?: StringFilter<"BlockItem"> | string
    createdAt?: DateTimeFilter<"BlockItem"> | Date | string
    blockList?: XOR<BlockListScalarRelationFilter, BlockListWhereInput>
  }, "id">

  export type BlockItemOrderByWithAggregationInput = {
    id?: SortOrder
    blockListId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: BlockItemCountOrderByAggregateInput
    _avg?: BlockItemAvgOrderByAggregateInput
    _max?: BlockItemMaxOrderByAggregateInput
    _min?: BlockItemMinOrderByAggregateInput
    _sum?: BlockItemSumOrderByAggregateInput
  }

  export type BlockItemScalarWhereWithAggregatesInput = {
    AND?: BlockItemScalarWhereWithAggregatesInput | BlockItemScalarWhereWithAggregatesInput[]
    OR?: BlockItemScalarWhereWithAggregatesInput[]
    NOT?: BlockItemScalarWhereWithAggregatesInput | BlockItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlockItem"> | number
    blockListId?: IntWithAggregatesFilter<"BlockItem"> | number
    type?: EnumBlockItemTypeWithAggregatesFilter<"BlockItem"> | $Enums.BlockItemType
    data?: StringWithAggregatesFilter<"BlockItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlockItem"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    hash: string
    salt: string
    account?: AccountCreateNestedOneWithoutOwnerInput
    blockList?: BlockListCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    hash: string
    salt: string
    account?: AccountUncheckedCreateNestedOneWithoutOwnerInput
    blockList?: BlockListUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneWithoutOwnerNestedInput
    blockList?: BlockListUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    account?: AccountUncheckedUpdateOneWithoutOwnerNestedInput
    blockList?: BlockListUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    hash: string
    salt: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    isBlockingEnabled: boolean
    owner: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    ownerId: number
    isBlockingEnabled: boolean
  }

  export type AccountUpdateInput = {
    isBlockingEnabled?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    isBlockingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountCreateManyInput = {
    id?: number
    ownerId: number
    isBlockingEnabled: boolean
  }

  export type AccountUpdateManyMutationInput = {
    isBlockingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    isBlockingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockListCreateInput = {
    owner: UserCreateNestedOneWithoutBlockListInput
    items?: BlockItemCreateNestedManyWithoutBlockListInput
  }

  export type BlockListUncheckedCreateInput = {
    id?: number
    ownerId: number
    items?: BlockItemUncheckedCreateNestedManyWithoutBlockListInput
  }

  export type BlockListUpdateInput = {
    owner?: UserUpdateOneRequiredWithoutBlockListNestedInput
    items?: BlockItemUpdateManyWithoutBlockListNestedInput
  }

  export type BlockListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    items?: BlockItemUncheckedUpdateManyWithoutBlockListNestedInput
  }

  export type BlockListCreateManyInput = {
    id?: number
    ownerId: number
  }

  export type BlockListUpdateManyMutationInput = {

  }

  export type BlockListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type BlockItemCreateInput = {
    type: $Enums.BlockItemType
    data: string
    createdAt?: Date | string
    blockList: BlockListCreateNestedOneWithoutItemsInput
  }

  export type BlockItemUncheckedCreateInput = {
    id?: number
    blockListId: number
    type: $Enums.BlockItemType
    data: string
    createdAt?: Date | string
  }

  export type BlockItemUpdateInput = {
    type?: EnumBlockItemTypeFieldUpdateOperationsInput | $Enums.BlockItemType
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockList?: BlockListUpdateOneRequiredWithoutItemsNestedInput
  }

  export type BlockItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockListId?: IntFieldUpdateOperationsInput | number
    type?: EnumBlockItemTypeFieldUpdateOperationsInput | $Enums.BlockItemType
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockItemCreateManyInput = {
    id?: number
    blockListId: number
    type: $Enums.BlockItemType
    data: string
    createdAt?: Date | string
  }

  export type BlockItemUpdateManyMutationInput = {
    type?: EnumBlockItemTypeFieldUpdateOperationsInput | $Enums.BlockItemType
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockListId?: IntFieldUpdateOperationsInput | number
    type?: EnumBlockItemTypeFieldUpdateOperationsInput | $Enums.BlockItemType
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type BlockListNullableScalarRelationFilter = {
    is?: BlockListWhereInput | null
    isNot?: BlockListWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    isBlockingEnabled?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    isBlockingEnabled?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    isBlockingEnabled?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BlockItemListRelationFilter = {
    every?: BlockItemWhereInput
    some?: BlockItemWhereInput
    none?: BlockItemWhereInput
  }

  export type BlockItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockListCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type BlockListAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type BlockListMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type BlockListMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type BlockListSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumBlockItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockItemType | EnumBlockItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockItemType[] | ListEnumBlockItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockItemType[] | ListEnumBlockItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockItemTypeFilter<$PrismaModel> | $Enums.BlockItemType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BlockListScalarRelationFilter = {
    is?: BlockListWhereInput
    isNot?: BlockListWhereInput
  }

  export type BlockItemCountOrderByAggregateInput = {
    id?: SortOrder
    blockListId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockItemAvgOrderByAggregateInput = {
    id?: SortOrder
    blockListId?: SortOrder
  }

  export type BlockItemMaxOrderByAggregateInput = {
    id?: SortOrder
    blockListId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockItemMinOrderByAggregateInput = {
    id?: SortOrder
    blockListId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockItemSumOrderByAggregateInput = {
    id?: SortOrder
    blockListId?: SortOrder
  }

  export type EnumBlockItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockItemType | EnumBlockItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockItemType[] | ListEnumBlockItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockItemType[] | ListEnumBlockItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.BlockItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockItemTypeFilter<$PrismaModel>
    _max?: NestedEnumBlockItemTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccountCreateNestedOneWithoutOwnerInput = {
    create?: XOR<AccountCreateWithoutOwnerInput, AccountUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: AccountCreateOrConnectWithoutOwnerInput
    connect?: AccountWhereUniqueInput
  }

  export type BlockListCreateNestedOneWithoutOwnerInput = {
    create?: XOR<BlockListCreateWithoutOwnerInput, BlockListUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: BlockListCreateOrConnectWithoutOwnerInput
    connect?: BlockListWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<AccountCreateWithoutOwnerInput, AccountUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: AccountCreateOrConnectWithoutOwnerInput
    connect?: AccountWhereUniqueInput
  }

  export type BlockListUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<BlockListCreateWithoutOwnerInput, BlockListUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: BlockListCreateOrConnectWithoutOwnerInput
    connect?: BlockListWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AccountUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<AccountCreateWithoutOwnerInput, AccountUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: AccountCreateOrConnectWithoutOwnerInput
    upsert?: AccountUpsertWithoutOwnerInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutOwnerInput, AccountUpdateWithoutOwnerInput>, AccountUncheckedUpdateWithoutOwnerInput>
  }

  export type BlockListUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<BlockListCreateWithoutOwnerInput, BlockListUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: BlockListCreateOrConnectWithoutOwnerInput
    upsert?: BlockListUpsertWithoutOwnerInput
    disconnect?: BlockListWhereInput | boolean
    delete?: BlockListWhereInput | boolean
    connect?: BlockListWhereUniqueInput
    update?: XOR<XOR<BlockListUpdateToOneWithWhereWithoutOwnerInput, BlockListUpdateWithoutOwnerInput>, BlockListUncheckedUpdateWithoutOwnerInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<AccountCreateWithoutOwnerInput, AccountUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: AccountCreateOrConnectWithoutOwnerInput
    upsert?: AccountUpsertWithoutOwnerInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutOwnerInput, AccountUpdateWithoutOwnerInput>, AccountUncheckedUpdateWithoutOwnerInput>
  }

  export type BlockListUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<BlockListCreateWithoutOwnerInput, BlockListUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: BlockListCreateOrConnectWithoutOwnerInput
    upsert?: BlockListUpsertWithoutOwnerInput
    disconnect?: BlockListWhereInput | boolean
    delete?: BlockListWhereInput | boolean
    connect?: BlockListWhereUniqueInput
    update?: XOR<XOR<BlockListUpdateToOneWithWhereWithoutOwnerInput, BlockListUpdateWithoutOwnerInput>, BlockListUncheckedUpdateWithoutOwnerInput>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserCreateNestedOneWithoutBlockListInput = {
    create?: XOR<UserCreateWithoutBlockListInput, UserUncheckedCreateWithoutBlockListInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockListInput
    connect?: UserWhereUniqueInput
  }

  export type BlockItemCreateNestedManyWithoutBlockListInput = {
    create?: XOR<BlockItemCreateWithoutBlockListInput, BlockItemUncheckedCreateWithoutBlockListInput> | BlockItemCreateWithoutBlockListInput[] | BlockItemUncheckedCreateWithoutBlockListInput[]
    connectOrCreate?: BlockItemCreateOrConnectWithoutBlockListInput | BlockItemCreateOrConnectWithoutBlockListInput[]
    createMany?: BlockItemCreateManyBlockListInputEnvelope
    connect?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
  }

  export type BlockItemUncheckedCreateNestedManyWithoutBlockListInput = {
    create?: XOR<BlockItemCreateWithoutBlockListInput, BlockItemUncheckedCreateWithoutBlockListInput> | BlockItemCreateWithoutBlockListInput[] | BlockItemUncheckedCreateWithoutBlockListInput[]
    connectOrCreate?: BlockItemCreateOrConnectWithoutBlockListInput | BlockItemCreateOrConnectWithoutBlockListInput[]
    createMany?: BlockItemCreateManyBlockListInputEnvelope
    connect?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBlockListNestedInput = {
    create?: XOR<UserCreateWithoutBlockListInput, UserUncheckedCreateWithoutBlockListInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockListInput
    upsert?: UserUpsertWithoutBlockListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockListInput, UserUpdateWithoutBlockListInput>, UserUncheckedUpdateWithoutBlockListInput>
  }

  export type BlockItemUpdateManyWithoutBlockListNestedInput = {
    create?: XOR<BlockItemCreateWithoutBlockListInput, BlockItemUncheckedCreateWithoutBlockListInput> | BlockItemCreateWithoutBlockListInput[] | BlockItemUncheckedCreateWithoutBlockListInput[]
    connectOrCreate?: BlockItemCreateOrConnectWithoutBlockListInput | BlockItemCreateOrConnectWithoutBlockListInput[]
    upsert?: BlockItemUpsertWithWhereUniqueWithoutBlockListInput | BlockItemUpsertWithWhereUniqueWithoutBlockListInput[]
    createMany?: BlockItemCreateManyBlockListInputEnvelope
    set?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
    disconnect?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
    delete?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
    connect?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
    update?: BlockItemUpdateWithWhereUniqueWithoutBlockListInput | BlockItemUpdateWithWhereUniqueWithoutBlockListInput[]
    updateMany?: BlockItemUpdateManyWithWhereWithoutBlockListInput | BlockItemUpdateManyWithWhereWithoutBlockListInput[]
    deleteMany?: BlockItemScalarWhereInput | BlockItemScalarWhereInput[]
  }

  export type BlockItemUncheckedUpdateManyWithoutBlockListNestedInput = {
    create?: XOR<BlockItemCreateWithoutBlockListInput, BlockItemUncheckedCreateWithoutBlockListInput> | BlockItemCreateWithoutBlockListInput[] | BlockItemUncheckedCreateWithoutBlockListInput[]
    connectOrCreate?: BlockItemCreateOrConnectWithoutBlockListInput | BlockItemCreateOrConnectWithoutBlockListInput[]
    upsert?: BlockItemUpsertWithWhereUniqueWithoutBlockListInput | BlockItemUpsertWithWhereUniqueWithoutBlockListInput[]
    createMany?: BlockItemCreateManyBlockListInputEnvelope
    set?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
    disconnect?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
    delete?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
    connect?: BlockItemWhereUniqueInput | BlockItemWhereUniqueInput[]
    update?: BlockItemUpdateWithWhereUniqueWithoutBlockListInput | BlockItemUpdateWithWhereUniqueWithoutBlockListInput[]
    updateMany?: BlockItemUpdateManyWithWhereWithoutBlockListInput | BlockItemUpdateManyWithWhereWithoutBlockListInput[]
    deleteMany?: BlockItemScalarWhereInput | BlockItemScalarWhereInput[]
  }

  export type BlockListCreateNestedOneWithoutItemsInput = {
    create?: XOR<BlockListCreateWithoutItemsInput, BlockListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BlockListCreateOrConnectWithoutItemsInput
    connect?: BlockListWhereUniqueInput
  }

  export type EnumBlockItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.BlockItemType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BlockListUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<BlockListCreateWithoutItemsInput, BlockListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BlockListCreateOrConnectWithoutItemsInput
    upsert?: BlockListUpsertWithoutItemsInput
    connect?: BlockListWhereUniqueInput
    update?: XOR<XOR<BlockListUpdateToOneWithWhereWithoutItemsInput, BlockListUpdateWithoutItemsInput>, BlockListUncheckedUpdateWithoutItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBlockItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockItemType | EnumBlockItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockItemType[] | ListEnumBlockItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockItemType[] | ListEnumBlockItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockItemTypeFilter<$PrismaModel> | $Enums.BlockItemType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumBlockItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockItemType | EnumBlockItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockItemType[] | ListEnumBlockItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockItemType[] | ListEnumBlockItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.BlockItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockItemTypeFilter<$PrismaModel>
    _max?: NestedEnumBlockItemTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutOwnerInput = {
    isBlockingEnabled: boolean
  }

  export type AccountUncheckedCreateWithoutOwnerInput = {
    id?: number
    isBlockingEnabled: boolean
  }

  export type AccountCreateOrConnectWithoutOwnerInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutOwnerInput, AccountUncheckedCreateWithoutOwnerInput>
  }

  export type BlockListCreateWithoutOwnerInput = {
    items?: BlockItemCreateNestedManyWithoutBlockListInput
  }

  export type BlockListUncheckedCreateWithoutOwnerInput = {
    id?: number
    items?: BlockItemUncheckedCreateNestedManyWithoutBlockListInput
  }

  export type BlockListCreateOrConnectWithoutOwnerInput = {
    where: BlockListWhereUniqueInput
    create: XOR<BlockListCreateWithoutOwnerInput, BlockListUncheckedCreateWithoutOwnerInput>
  }

  export type AccountUpsertWithoutOwnerInput = {
    update: XOR<AccountUpdateWithoutOwnerInput, AccountUncheckedUpdateWithoutOwnerInput>
    create: XOR<AccountCreateWithoutOwnerInput, AccountUncheckedCreateWithoutOwnerInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutOwnerInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutOwnerInput, AccountUncheckedUpdateWithoutOwnerInput>
  }

  export type AccountUpdateWithoutOwnerInput = {
    isBlockingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    isBlockingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockListUpsertWithoutOwnerInput = {
    update: XOR<BlockListUpdateWithoutOwnerInput, BlockListUncheckedUpdateWithoutOwnerInput>
    create: XOR<BlockListCreateWithoutOwnerInput, BlockListUncheckedCreateWithoutOwnerInput>
    where?: BlockListWhereInput
  }

  export type BlockListUpdateToOneWithWhereWithoutOwnerInput = {
    where?: BlockListWhereInput
    data: XOR<BlockListUpdateWithoutOwnerInput, BlockListUncheckedUpdateWithoutOwnerInput>
  }

  export type BlockListUpdateWithoutOwnerInput = {
    items?: BlockItemUpdateManyWithoutBlockListNestedInput
  }

  export type BlockListUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    items?: BlockItemUncheckedUpdateManyWithoutBlockListNestedInput
  }

  export type UserCreateWithoutAccountInput = {
    email: string
    hash: string
    salt: string
    blockList?: BlockListCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: number
    email: string
    hash: string
    salt: string
    blockList?: BlockListUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    blockList?: BlockListUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    blockList?: BlockListUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type UserCreateWithoutBlockListInput = {
    email: string
    hash: string
    salt: string
    account?: AccountCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBlockListInput = {
    id?: number
    email: string
    hash: string
    salt: string
    account?: AccountUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBlockListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockListInput, UserUncheckedCreateWithoutBlockListInput>
  }

  export type BlockItemCreateWithoutBlockListInput = {
    type: $Enums.BlockItemType
    data: string
    createdAt?: Date | string
  }

  export type BlockItemUncheckedCreateWithoutBlockListInput = {
    id?: number
    type: $Enums.BlockItemType
    data: string
    createdAt?: Date | string
  }

  export type BlockItemCreateOrConnectWithoutBlockListInput = {
    where: BlockItemWhereUniqueInput
    create: XOR<BlockItemCreateWithoutBlockListInput, BlockItemUncheckedCreateWithoutBlockListInput>
  }

  export type BlockItemCreateManyBlockListInputEnvelope = {
    data: BlockItemCreateManyBlockListInput | BlockItemCreateManyBlockListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlockListInput = {
    update: XOR<UserUpdateWithoutBlockListInput, UserUncheckedUpdateWithoutBlockListInput>
    create: XOR<UserCreateWithoutBlockListInput, UserUncheckedCreateWithoutBlockListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockListInput, UserUncheckedUpdateWithoutBlockListInput>
  }

  export type UserUpdateWithoutBlockListInput = {
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockListInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    account?: AccountUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type BlockItemUpsertWithWhereUniqueWithoutBlockListInput = {
    where: BlockItemWhereUniqueInput
    update: XOR<BlockItemUpdateWithoutBlockListInput, BlockItemUncheckedUpdateWithoutBlockListInput>
    create: XOR<BlockItemCreateWithoutBlockListInput, BlockItemUncheckedCreateWithoutBlockListInput>
  }

  export type BlockItemUpdateWithWhereUniqueWithoutBlockListInput = {
    where: BlockItemWhereUniqueInput
    data: XOR<BlockItemUpdateWithoutBlockListInput, BlockItemUncheckedUpdateWithoutBlockListInput>
  }

  export type BlockItemUpdateManyWithWhereWithoutBlockListInput = {
    where: BlockItemScalarWhereInput
    data: XOR<BlockItemUpdateManyMutationInput, BlockItemUncheckedUpdateManyWithoutBlockListInput>
  }

  export type BlockItemScalarWhereInput = {
    AND?: BlockItemScalarWhereInput | BlockItemScalarWhereInput[]
    OR?: BlockItemScalarWhereInput[]
    NOT?: BlockItemScalarWhereInput | BlockItemScalarWhereInput[]
    id?: IntFilter<"BlockItem"> | number
    blockListId?: IntFilter<"BlockItem"> | number
    type?: EnumBlockItemTypeFilter<"BlockItem"> | $Enums.BlockItemType
    data?: StringFilter<"BlockItem"> | string
    createdAt?: DateTimeFilter<"BlockItem"> | Date | string
  }

  export type BlockListCreateWithoutItemsInput = {
    owner: UserCreateNestedOneWithoutBlockListInput
  }

  export type BlockListUncheckedCreateWithoutItemsInput = {
    id?: number
    ownerId: number
  }

  export type BlockListCreateOrConnectWithoutItemsInput = {
    where: BlockListWhereUniqueInput
    create: XOR<BlockListCreateWithoutItemsInput, BlockListUncheckedCreateWithoutItemsInput>
  }

  export type BlockListUpsertWithoutItemsInput = {
    update: XOR<BlockListUpdateWithoutItemsInput, BlockListUncheckedUpdateWithoutItemsInput>
    create: XOR<BlockListCreateWithoutItemsInput, BlockListUncheckedCreateWithoutItemsInput>
    where?: BlockListWhereInput
  }

  export type BlockListUpdateToOneWithWhereWithoutItemsInput = {
    where?: BlockListWhereInput
    data: XOR<BlockListUpdateWithoutItemsInput, BlockListUncheckedUpdateWithoutItemsInput>
  }

  export type BlockListUpdateWithoutItemsInput = {
    owner?: UserUpdateOneRequiredWithoutBlockListNestedInput
  }

  export type BlockListUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type BlockItemCreateManyBlockListInput = {
    id?: number
    type: $Enums.BlockItemType
    data: string
    createdAt?: Date | string
  }

  export type BlockItemUpdateWithoutBlockListInput = {
    type?: EnumBlockItemTypeFieldUpdateOperationsInput | $Enums.BlockItemType
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockItemUncheckedUpdateWithoutBlockListInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumBlockItemTypeFieldUpdateOperationsInput | $Enums.BlockItemType
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockItemUncheckedUpdateManyWithoutBlockListInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumBlockItemTypeFieldUpdateOperationsInput | $Enums.BlockItemType
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}