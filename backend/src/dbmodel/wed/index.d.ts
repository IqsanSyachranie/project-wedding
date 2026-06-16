
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model VenueLocation
 * 
 */
export type VenueLocation = $Result.DefaultSelection<Prisma.$VenueLocationPayload>
/**
 * Model EventSchedule
 * 
 */
export type EventSchedule = $Result.DefaultSelection<Prisma.$EventSchedulePayload>
/**
 * Model RSVPSubmission
 * 
 */
export type RSVPSubmission = $Result.DefaultSelection<Prisma.$RSVPSubmissionPayload>
/**
 * Model GuestbookEntry
 * 
 */
export type GuestbookEntry = $Result.DefaultSelection<Prisma.$GuestbookEntryPayload>
/**
 * Model CashlessAccount
 * 
 */
export type CashlessAccount = $Result.DefaultSelection<Prisma.$CashlessAccountPayload>
/**
 * Model GiftAddress
 * 
 */
export type GiftAddress = $Result.DefaultSelection<Prisma.$GiftAddressPayload>
/**
 * Model StoryImage
 * 
 */
export type StoryImage = $Result.DefaultSelection<Prisma.$StoryImagePayload>
/**
 * Model InvitationConfig
 * 
 */
export type InvitationConfig = $Result.DefaultSelection<Prisma.$InvitationConfigPayload>
/**
 * Model CoupleInfo
 * 
 */
export type CoupleInfo = $Result.DefaultSelection<Prisma.$CoupleInfoPayload>
/**
 * Model StoryItem
 * 
 */
export type StoryItem = $Result.DefaultSelection<Prisma.$StoryItemPayload>
/**
 * Model GalleryImage
 * 
 */
export type GalleryImage = $Result.DefaultSelection<Prisma.$GalleryImagePayload>
/**
 * Model PhilosophyConfig
 * 
 */
export type PhilosophyConfig = $Result.DefaultSelection<Prisma.$PhilosophyConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceStatus: {
  ATTENDING: 'ATTENDING',
  NOT_ATTENDING: 'NOT_ATTENDING'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]

}

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venueLocation`: Exposes CRUD operations for the **VenueLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenueLocations
    * const venueLocations = await prisma.venueLocation.findMany()
    * ```
    */
  get venueLocation(): Prisma.VenueLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventSchedule`: Exposes CRUD operations for the **EventSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventSchedules
    * const eventSchedules = await prisma.eventSchedule.findMany()
    * ```
    */
  get eventSchedule(): Prisma.EventScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rSVPSubmission`: Exposes CRUD operations for the **RSVPSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RSVPSubmissions
    * const rSVPSubmissions = await prisma.rSVPSubmission.findMany()
    * ```
    */
  get rSVPSubmission(): Prisma.RSVPSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guestbookEntry`: Exposes CRUD operations for the **GuestbookEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuestbookEntries
    * const guestbookEntries = await prisma.guestbookEntry.findMany()
    * ```
    */
  get guestbookEntry(): Prisma.GuestbookEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashlessAccount`: Exposes CRUD operations for the **CashlessAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashlessAccounts
    * const cashlessAccounts = await prisma.cashlessAccount.findMany()
    * ```
    */
  get cashlessAccount(): Prisma.CashlessAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.giftAddress`: Exposes CRUD operations for the **GiftAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GiftAddresses
    * const giftAddresses = await prisma.giftAddress.findMany()
    * ```
    */
  get giftAddress(): Prisma.GiftAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storyImage`: Exposes CRUD operations for the **StoryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoryImages
    * const storyImages = await prisma.storyImage.findMany()
    * ```
    */
  get storyImage(): Prisma.StoryImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitationConfig`: Exposes CRUD operations for the **InvitationConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvitationConfigs
    * const invitationConfigs = await prisma.invitationConfig.findMany()
    * ```
    */
  get invitationConfig(): Prisma.InvitationConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupleInfo`: Exposes CRUD operations for the **CoupleInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoupleInfos
    * const coupleInfos = await prisma.coupleInfo.findMany()
    * ```
    */
  get coupleInfo(): Prisma.CoupleInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storyItem`: Exposes CRUD operations for the **StoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoryItems
    * const storyItems = await prisma.storyItem.findMany()
    * ```
    */
  get storyItem(): Prisma.StoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryImage`: Exposes CRUD operations for the **GalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryImages
    * const galleryImages = await prisma.galleryImage.findMany()
    * ```
    */
  get galleryImage(): Prisma.GalleryImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.philosophyConfig`: Exposes CRUD operations for the **PhilosophyConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhilosophyConfigs
    * const philosophyConfigs = await prisma.philosophyConfig.findMany()
    * ```
    */
  get philosophyConfig(): Prisma.PhilosophyConfigDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    AdminUser: 'AdminUser',
    Invitation: 'Invitation',
    VenueLocation: 'VenueLocation',
    EventSchedule: 'EventSchedule',
    RSVPSubmission: 'RSVPSubmission',
    GuestbookEntry: 'GuestbookEntry',
    CashlessAccount: 'CashlessAccount',
    GiftAddress: 'GiftAddress',
    StoryImage: 'StoryImage',
    InvitationConfig: 'InvitationConfig',
    CoupleInfo: 'CoupleInfo',
    StoryItem: 'StoryItem',
    GalleryImage: 'GalleryImage',
    PhilosophyConfig: 'PhilosophyConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "invitation" | "venueLocation" | "eventSchedule" | "rSVPSubmission" | "guestbookEntry" | "cashlessAccount" | "giftAddress" | "storyImage" | "invitationConfig" | "coupleInfo" | "storyItem" | "galleryImage" | "philosophyConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      VenueLocation: {
        payload: Prisma.$VenueLocationPayload<ExtArgs>
        fields: Prisma.VenueLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueLocationPayload>
          }
          findFirst: {
            args: Prisma.VenueLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueLocationPayload>
          }
          findMany: {
            args: Prisma.VenueLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueLocationPayload>[]
          }
          create: {
            args: Prisma.VenueLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueLocationPayload>
          }
          createMany: {
            args: Prisma.VenueLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VenueLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueLocationPayload>
          }
          update: {
            args: Prisma.VenueLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueLocationPayload>
          }
          deleteMany: {
            args: Prisma.VenueLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VenueLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueLocationPayload>
          }
          aggregate: {
            args: Prisma.VenueLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenueLocation>
          }
          groupBy: {
            args: Prisma.VenueLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueLocationCountArgs<ExtArgs>
            result: $Utils.Optional<VenueLocationCountAggregateOutputType> | number
          }
        }
      }
      EventSchedule: {
        payload: Prisma.$EventSchedulePayload<ExtArgs>
        fields: Prisma.EventScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSchedulePayload>
          }
          findFirst: {
            args: Prisma.EventScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSchedulePayload>
          }
          findMany: {
            args: Prisma.EventScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSchedulePayload>[]
          }
          create: {
            args: Prisma.EventScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSchedulePayload>
          }
          createMany: {
            args: Prisma.EventScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSchedulePayload>
          }
          update: {
            args: Prisma.EventScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSchedulePayload>
          }
          deleteMany: {
            args: Prisma.EventScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSchedulePayload>
          }
          aggregate: {
            args: Prisma.EventScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventSchedule>
          }
          groupBy: {
            args: Prisma.EventScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<EventScheduleCountAggregateOutputType> | number
          }
        }
      }
      RSVPSubmission: {
        payload: Prisma.$RSVPSubmissionPayload<ExtArgs>
        fields: Prisma.RSVPSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RSVPSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RSVPSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RSVPSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RSVPSubmissionPayload>
          }
          findFirst: {
            args: Prisma.RSVPSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RSVPSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RSVPSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RSVPSubmissionPayload>
          }
          findMany: {
            args: Prisma.RSVPSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RSVPSubmissionPayload>[]
          }
          create: {
            args: Prisma.RSVPSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RSVPSubmissionPayload>
          }
          createMany: {
            args: Prisma.RSVPSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RSVPSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RSVPSubmissionPayload>
          }
          update: {
            args: Prisma.RSVPSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RSVPSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.RSVPSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RSVPSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RSVPSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RSVPSubmissionPayload>
          }
          aggregate: {
            args: Prisma.RSVPSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRSVPSubmission>
          }
          groupBy: {
            args: Prisma.RSVPSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RSVPSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RSVPSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<RSVPSubmissionCountAggregateOutputType> | number
          }
        }
      }
      GuestbookEntry: {
        payload: Prisma.$GuestbookEntryPayload<ExtArgs>
        fields: Prisma.GuestbookEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestbookEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestbookEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          findFirst: {
            args: Prisma.GuestbookEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestbookEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          findMany: {
            args: Prisma.GuestbookEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>[]
          }
          create: {
            args: Prisma.GuestbookEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          createMany: {
            args: Prisma.GuestbookEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GuestbookEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          update: {
            args: Prisma.GuestbookEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          deleteMany: {
            args: Prisma.GuestbookEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestbookEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuestbookEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          aggregate: {
            args: Prisma.GuestbookEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuestbookEntry>
          }
          groupBy: {
            args: Prisma.GuestbookEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestbookEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestbookEntryCountArgs<ExtArgs>
            result: $Utils.Optional<GuestbookEntryCountAggregateOutputType> | number
          }
        }
      }
      CashlessAccount: {
        payload: Prisma.$CashlessAccountPayload<ExtArgs>
        fields: Prisma.CashlessAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashlessAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashlessAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashlessAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashlessAccountPayload>
          }
          findFirst: {
            args: Prisma.CashlessAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashlessAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashlessAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashlessAccountPayload>
          }
          findMany: {
            args: Prisma.CashlessAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashlessAccountPayload>[]
          }
          create: {
            args: Prisma.CashlessAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashlessAccountPayload>
          }
          createMany: {
            args: Prisma.CashlessAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CashlessAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashlessAccountPayload>
          }
          update: {
            args: Prisma.CashlessAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashlessAccountPayload>
          }
          deleteMany: {
            args: Prisma.CashlessAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashlessAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CashlessAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashlessAccountPayload>
          }
          aggregate: {
            args: Prisma.CashlessAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashlessAccount>
          }
          groupBy: {
            args: Prisma.CashlessAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashlessAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashlessAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CashlessAccountCountAggregateOutputType> | number
          }
        }
      }
      GiftAddress: {
        payload: Prisma.$GiftAddressPayload<ExtArgs>
        fields: Prisma.GiftAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiftAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiftAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftAddressPayload>
          }
          findFirst: {
            args: Prisma.GiftAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiftAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftAddressPayload>
          }
          findMany: {
            args: Prisma.GiftAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftAddressPayload>[]
          }
          create: {
            args: Prisma.GiftAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftAddressPayload>
          }
          createMany: {
            args: Prisma.GiftAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GiftAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftAddressPayload>
          }
          update: {
            args: Prisma.GiftAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftAddressPayload>
          }
          deleteMany: {
            args: Prisma.GiftAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiftAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GiftAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftAddressPayload>
          }
          aggregate: {
            args: Prisma.GiftAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGiftAddress>
          }
          groupBy: {
            args: Prisma.GiftAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiftAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiftAddressCountArgs<ExtArgs>
            result: $Utils.Optional<GiftAddressCountAggregateOutputType> | number
          }
        }
      }
      StoryImage: {
        payload: Prisma.$StoryImagePayload<ExtArgs>
        fields: Prisma.StoryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryImagePayload>
          }
          findFirst: {
            args: Prisma.StoryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryImagePayload>
          }
          findMany: {
            args: Prisma.StoryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryImagePayload>[]
          }
          create: {
            args: Prisma.StoryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryImagePayload>
          }
          createMany: {
            args: Prisma.StoryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryImagePayload>
          }
          update: {
            args: Prisma.StoryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryImagePayload>
          }
          deleteMany: {
            args: Prisma.StoryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryImagePayload>
          }
          aggregate: {
            args: Prisma.StoryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoryImage>
          }
          groupBy: {
            args: Prisma.StoryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryImageCountArgs<ExtArgs>
            result: $Utils.Optional<StoryImageCountAggregateOutputType> | number
          }
        }
      }
      InvitationConfig: {
        payload: Prisma.$InvitationConfigPayload<ExtArgs>
        fields: Prisma.InvitationConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationConfigPayload>
          }
          findFirst: {
            args: Prisma.InvitationConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationConfigPayload>
          }
          findMany: {
            args: Prisma.InvitationConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationConfigPayload>[]
          }
          create: {
            args: Prisma.InvitationConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationConfigPayload>
          }
          createMany: {
            args: Prisma.InvitationConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvitationConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationConfigPayload>
          }
          update: {
            args: Prisma.InvitationConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationConfigPayload>
          }
          deleteMany: {
            args: Prisma.InvitationConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvitationConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationConfigPayload>
          }
          aggregate: {
            args: Prisma.InvitationConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitationConfig>
          }
          groupBy: {
            args: Prisma.InvitationConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationConfigCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationConfigCountAggregateOutputType> | number
          }
        }
      }
      CoupleInfo: {
        payload: Prisma.$CoupleInfoPayload<ExtArgs>
        fields: Prisma.CoupleInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoupleInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupleInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoupleInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupleInfoPayload>
          }
          findFirst: {
            args: Prisma.CoupleInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupleInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoupleInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupleInfoPayload>
          }
          findMany: {
            args: Prisma.CoupleInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupleInfoPayload>[]
          }
          create: {
            args: Prisma.CoupleInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupleInfoPayload>
          }
          createMany: {
            args: Prisma.CoupleInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoupleInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupleInfoPayload>
          }
          update: {
            args: Prisma.CoupleInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupleInfoPayload>
          }
          deleteMany: {
            args: Prisma.CoupleInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoupleInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoupleInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupleInfoPayload>
          }
          aggregate: {
            args: Prisma.CoupleInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupleInfo>
          }
          groupBy: {
            args: Prisma.CoupleInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoupleInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoupleInfoCountArgs<ExtArgs>
            result: $Utils.Optional<CoupleInfoCountAggregateOutputType> | number
          }
        }
      }
      StoryItem: {
        payload: Prisma.$StoryItemPayload<ExtArgs>
        fields: Prisma.StoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryItemPayload>
          }
          findFirst: {
            args: Prisma.StoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryItemPayload>
          }
          findMany: {
            args: Prisma.StoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryItemPayload>[]
          }
          create: {
            args: Prisma.StoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryItemPayload>
          }
          createMany: {
            args: Prisma.StoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryItemPayload>
          }
          update: {
            args: Prisma.StoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryItemPayload>
          }
          deleteMany: {
            args: Prisma.StoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryItemPayload>
          }
          aggregate: {
            args: Prisma.StoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoryItem>
          }
          groupBy: {
            args: Prisma.StoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<StoryItemCountAggregateOutputType> | number
          }
        }
      }
      GalleryImage: {
        payload: Prisma.$GalleryImagePayload<ExtArgs>
        fields: Prisma.GalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findFirst: {
            args: Prisma.GalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findMany: {
            args: Prisma.GalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          create: {
            args: Prisma.GalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          createMany: {
            args: Prisma.GalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          update: {
            args: Prisma.GalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.GalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          aggregate: {
            args: Prisma.GalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryImage>
          }
          groupBy: {
            args: Prisma.GalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageCountAggregateOutputType> | number
          }
        }
      }
      PhilosophyConfig: {
        payload: Prisma.$PhilosophyConfigPayload<ExtArgs>
        fields: Prisma.PhilosophyConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhilosophyConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhilosophyConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhilosophyConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhilosophyConfigPayload>
          }
          findFirst: {
            args: Prisma.PhilosophyConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhilosophyConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhilosophyConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhilosophyConfigPayload>
          }
          findMany: {
            args: Prisma.PhilosophyConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhilosophyConfigPayload>[]
          }
          create: {
            args: Prisma.PhilosophyConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhilosophyConfigPayload>
          }
          createMany: {
            args: Prisma.PhilosophyConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhilosophyConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhilosophyConfigPayload>
          }
          update: {
            args: Prisma.PhilosophyConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhilosophyConfigPayload>
          }
          deleteMany: {
            args: Prisma.PhilosophyConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhilosophyConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhilosophyConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhilosophyConfigPayload>
          }
          aggregate: {
            args: Prisma.PhilosophyConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhilosophyConfig>
          }
          groupBy: {
            args: Prisma.PhilosophyConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhilosophyConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhilosophyConfigCountArgs<ExtArgs>
            result: $Utils.Optional<PhilosophyConfigCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    invitation?: InvitationOmit
    venueLocation?: VenueLocationOmit
    eventSchedule?: EventScheduleOmit
    rSVPSubmission?: RSVPSubmissionOmit
    guestbookEntry?: GuestbookEntryOmit
    cashlessAccount?: CashlessAccountOmit
    giftAddress?: GiftAddressOmit
    storyImage?: StoryImageOmit
    invitationConfig?: InvitationConfigOmit
    coupleInfo?: CoupleInfoOmit
    storyItem?: StoryItemOmit
    galleryImage?: GalleryImageOmit
    philosophyConfig?: PhilosophyConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type InvitationCountOutputType
   */

  export type InvitationCountOutputType = {
    cashlessAccounts: number
    eventSchedules: number
    guestbookEntries: number
    rsvpSubmissions: number
    venueLocations: number
    coupleInfos: number
    storyItems: number
    galleryImages: number
    giftAddresses: number
  }

  export type InvitationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashlessAccounts?: boolean | InvitationCountOutputTypeCountCashlessAccountsArgs
    eventSchedules?: boolean | InvitationCountOutputTypeCountEventSchedulesArgs
    guestbookEntries?: boolean | InvitationCountOutputTypeCountGuestbookEntriesArgs
    rsvpSubmissions?: boolean | InvitationCountOutputTypeCountRsvpSubmissionsArgs
    venueLocations?: boolean | InvitationCountOutputTypeCountVenueLocationsArgs
    coupleInfos?: boolean | InvitationCountOutputTypeCountCoupleInfosArgs
    storyItems?: boolean | InvitationCountOutputTypeCountStoryItemsArgs
    galleryImages?: boolean | InvitationCountOutputTypeCountGalleryImagesArgs
    giftAddresses?: boolean | InvitationCountOutputTypeCountGiftAddressesArgs
  }

  // Custom InputTypes
  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCountOutputType
     */
    select?: InvitationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeCountCashlessAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashlessAccountWhereInput
  }

  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeCountEventSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScheduleWhereInput
  }

  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeCountGuestbookEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestbookEntryWhereInput
  }

  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeCountRsvpSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RSVPSubmissionWhereInput
  }

  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeCountVenueLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueLocationWhereInput
  }

  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeCountCoupleInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleInfoWhereInput
  }

  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeCountStoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryItemWhereInput
  }

  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
  }

  /**
   * InvitationCountOutputType without action
   */
  export type InvitationCountOutputTypeCountGiftAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftAddressWhereInput
  }


  /**
   * Count Type StoryItemCountOutputType
   */

  export type StoryItemCountOutputType = {
    images: number
  }

  export type StoryItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | StoryItemCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * StoryItemCountOutputType without action
   */
  export type StoryItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItemCountOutputType
     */
    select?: StoryItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoryItemCountOutputType without action
   */
  export type StoryItemCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>



  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationAvgAggregateOutputType = {
    id: number | null
  }

  export type InvitationSumAggregateOutputType = {
    id: number | null
  }

  export type InvitationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitationAvgAggregateInputType = {
    id?: true
  }

  export type InvitationSumAggregateInputType = {
    id?: true
  }

  export type InvitationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _avg?: InvitationAvgAggregateInputType
    _sum?: InvitationSumAggregateInputType
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cashlessAccounts?: boolean | Invitation$cashlessAccountsArgs<ExtArgs>
    eventSchedules?: boolean | Invitation$eventSchedulesArgs<ExtArgs>
    guestbookEntries?: boolean | Invitation$guestbookEntriesArgs<ExtArgs>
    rsvpSubmissions?: boolean | Invitation$rsvpSubmissionsArgs<ExtArgs>
    venueLocations?: boolean | Invitation$venueLocationsArgs<ExtArgs>
    coupleInfos?: boolean | Invitation$coupleInfosArgs<ExtArgs>
    storyItems?: boolean | Invitation$storyItemsArgs<ExtArgs>
    galleryImages?: boolean | Invitation$galleryImagesArgs<ExtArgs>
    giftAddresses?: boolean | Invitation$giftAddressesArgs<ExtArgs>
    config?: boolean | Invitation$configArgs<ExtArgs>
    philosophyConfig?: boolean | Invitation$philosophyConfigArgs<ExtArgs>
    _count?: boolean | InvitationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>



  export type InvitationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashlessAccounts?: boolean | Invitation$cashlessAccountsArgs<ExtArgs>
    eventSchedules?: boolean | Invitation$eventSchedulesArgs<ExtArgs>
    guestbookEntries?: boolean | Invitation$guestbookEntriesArgs<ExtArgs>
    rsvpSubmissions?: boolean | Invitation$rsvpSubmissionsArgs<ExtArgs>
    venueLocations?: boolean | Invitation$venueLocationsArgs<ExtArgs>
    coupleInfos?: boolean | Invitation$coupleInfosArgs<ExtArgs>
    storyItems?: boolean | Invitation$storyItemsArgs<ExtArgs>
    galleryImages?: boolean | Invitation$galleryImagesArgs<ExtArgs>
    giftAddresses?: boolean | Invitation$giftAddressesArgs<ExtArgs>
    config?: boolean | Invitation$configArgs<ExtArgs>
    philosophyConfig?: boolean | Invitation$philosophyConfigArgs<ExtArgs>
    _count?: boolean | InvitationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      cashlessAccounts: Prisma.$CashlessAccountPayload<ExtArgs>[]
      eventSchedules: Prisma.$EventSchedulePayload<ExtArgs>[]
      guestbookEntries: Prisma.$GuestbookEntryPayload<ExtArgs>[]
      rsvpSubmissions: Prisma.$RSVPSubmissionPayload<ExtArgs>[]
      venueLocations: Prisma.$VenueLocationPayload<ExtArgs>[]
      coupleInfos: Prisma.$CoupleInfoPayload<ExtArgs>[]
      storyItems: Prisma.$StoryItemPayload<ExtArgs>[]
      galleryImages: Prisma.$GalleryImagePayload<ExtArgs>[]
      giftAddresses: Prisma.$GiftAddressPayload<ExtArgs>[]
      config: Prisma.$InvitationConfigPayload<ExtArgs> | null
      philosophyConfig: Prisma.$PhilosophyConfigPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
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
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cashlessAccounts<T extends Invitation$cashlessAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$cashlessAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventSchedules<T extends Invitation$eventSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$eventSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guestbookEntries<T extends Invitation$guestbookEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$guestbookEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rsvpSubmissions<T extends Invitation$rsvpSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$rsvpSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    venueLocations<T extends Invitation$venueLocationsArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$venueLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupleInfos<T extends Invitation$coupleInfosArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$coupleInfosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    storyItems<T extends Invitation$storyItemsArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$storyItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    galleryImages<T extends Invitation$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    giftAddresses<T extends Invitation$giftAddressesArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$giftAddressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    config<T extends Invitation$configArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$configArgs<ExtArgs>>): Prisma__InvitationConfigClient<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    philosophyConfig<T extends Invitation$philosophyConfigArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$philosophyConfigArgs<ExtArgs>>): Prisma__PhilosophyConfigClient<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'Int'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation.cashlessAccounts
   */
  export type Invitation$cashlessAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    where?: CashlessAccountWhereInput
    orderBy?: CashlessAccountOrderByWithRelationInput | CashlessAccountOrderByWithRelationInput[]
    cursor?: CashlessAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashlessAccountScalarFieldEnum | CashlessAccountScalarFieldEnum[]
  }

  /**
   * Invitation.eventSchedules
   */
  export type Invitation$eventSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    where?: EventScheduleWhereInput
    orderBy?: EventScheduleOrderByWithRelationInput | EventScheduleOrderByWithRelationInput[]
    cursor?: EventScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScheduleScalarFieldEnum | EventScheduleScalarFieldEnum[]
  }

  /**
   * Invitation.guestbookEntries
   */
  export type Invitation$guestbookEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    where?: GuestbookEntryWhereInput
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    cursor?: GuestbookEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestbookEntryScalarFieldEnum | GuestbookEntryScalarFieldEnum[]
  }

  /**
   * Invitation.rsvpSubmissions
   */
  export type Invitation$rsvpSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    where?: RSVPSubmissionWhereInput
    orderBy?: RSVPSubmissionOrderByWithRelationInput | RSVPSubmissionOrderByWithRelationInput[]
    cursor?: RSVPSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RSVPSubmissionScalarFieldEnum | RSVPSubmissionScalarFieldEnum[]
  }

  /**
   * Invitation.venueLocations
   */
  export type Invitation$venueLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    where?: VenueLocationWhereInput
    orderBy?: VenueLocationOrderByWithRelationInput | VenueLocationOrderByWithRelationInput[]
    cursor?: VenueLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueLocationScalarFieldEnum | VenueLocationScalarFieldEnum[]
  }

  /**
   * Invitation.coupleInfos
   */
  export type Invitation$coupleInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    where?: CoupleInfoWhereInput
    orderBy?: CoupleInfoOrderByWithRelationInput | CoupleInfoOrderByWithRelationInput[]
    cursor?: CoupleInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoupleInfoScalarFieldEnum | CoupleInfoScalarFieldEnum[]
  }

  /**
   * Invitation.storyItems
   */
  export type Invitation$storyItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    where?: StoryItemWhereInput
    orderBy?: StoryItemOrderByWithRelationInput | StoryItemOrderByWithRelationInput[]
    cursor?: StoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryItemScalarFieldEnum | StoryItemScalarFieldEnum[]
  }

  /**
   * Invitation.galleryImages
   */
  export type Invitation$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    cursor?: GalleryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * Invitation.giftAddresses
   */
  export type Invitation$giftAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    where?: GiftAddressWhereInput
    orderBy?: GiftAddressOrderByWithRelationInput | GiftAddressOrderByWithRelationInput[]
    cursor?: GiftAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftAddressScalarFieldEnum | GiftAddressScalarFieldEnum[]
  }

  /**
   * Invitation.config
   */
  export type Invitation$configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    where?: InvitationConfigWhereInput
  }

  /**
   * Invitation.philosophyConfig
   */
  export type Invitation$philosophyConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    where?: PhilosophyConfigWhereInput
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
  }


  /**
   * Model VenueLocation
   */

  export type AggregateVenueLocation = {
    _count: VenueLocationCountAggregateOutputType | null
    _avg: VenueLocationAvgAggregateOutputType | null
    _sum: VenueLocationSumAggregateOutputType | null
    _min: VenueLocationMinAggregateOutputType | null
    _max: VenueLocationMaxAggregateOutputType | null
  }

  export type VenueLocationAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    mapZoom: number | null
    invitationId: number | null
  }

  export type VenueLocationSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    mapZoom: number | null
    invitationId: number | null
  }

  export type VenueLocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    popupImageUrl: string | null
    eventType: string | null
    mapZoom: number | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type VenueLocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    popupImageUrl: string | null
    eventType: string | null
    mapZoom: number | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type VenueLocationCountAggregateOutputType = {
    id: number
    name: number
    address: number
    latitude: number
    longitude: number
    popupImageUrl: number
    eventType: number
    mapZoom: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type VenueLocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    mapZoom?: true
    invitationId?: true
  }

  export type VenueLocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    mapZoom?: true
    invitationId?: true
  }

  export type VenueLocationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    popupImageUrl?: true
    eventType?: true
    mapZoom?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type VenueLocationMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    popupImageUrl?: true
    eventType?: true
    mapZoom?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type VenueLocationCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    popupImageUrl?: true
    eventType?: true
    mapZoom?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    _all?: true
  }

  export type VenueLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueLocation to aggregate.
     */
    where?: VenueLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueLocations to fetch.
     */
    orderBy?: VenueLocationOrderByWithRelationInput | VenueLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VenueLocations
    **/
    _count?: true | VenueLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueLocationMaxAggregateInputType
  }

  export type GetVenueLocationAggregateType<T extends VenueLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateVenueLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenueLocation[P]>
      : GetScalarType<T[P], AggregateVenueLocation[P]>
  }




  export type VenueLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueLocationWhereInput
    orderBy?: VenueLocationOrderByWithAggregationInput | VenueLocationOrderByWithAggregationInput[]
    by: VenueLocationScalarFieldEnum[] | VenueLocationScalarFieldEnum
    having?: VenueLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueLocationCountAggregateInputType | true
    _avg?: VenueLocationAvgAggregateInputType
    _sum?: VenueLocationSumAggregateInputType
    _min?: VenueLocationMinAggregateInputType
    _max?: VenueLocationMaxAggregateInputType
  }

  export type VenueLocationGroupByOutputType = {
    id: number
    name: string
    address: string
    latitude: number
    longitude: number
    popupImageUrl: string | null
    eventType: string | null
    mapZoom: number
    createdAt: Date
    updatedAt: Date
    invitationId: number
    _count: VenueLocationCountAggregateOutputType | null
    _avg: VenueLocationAvgAggregateOutputType | null
    _sum: VenueLocationSumAggregateOutputType | null
    _min: VenueLocationMinAggregateOutputType | null
    _max: VenueLocationMaxAggregateOutputType | null
  }

  type GetVenueLocationGroupByPayload<T extends VenueLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueLocationGroupByOutputType[P]>
            : GetScalarType<T[P], VenueLocationGroupByOutputType[P]>
        }
      >
    >


  export type VenueLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    popupImageUrl?: boolean
    eventType?: boolean
    mapZoom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueLocation"]>



  export type VenueLocationSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    popupImageUrl?: boolean
    eventType?: boolean
    mapZoom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type VenueLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "latitude" | "longitude" | "popupImageUrl" | "eventType" | "mapZoom" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["venueLocation"]>
  export type VenueLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $VenueLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VenueLocation"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      latitude: number
      longitude: number
      popupImageUrl: string | null
      eventType: string | null
      mapZoom: number
      createdAt: Date
      updatedAt: Date
      invitationId: number
    }, ExtArgs["result"]["venueLocation"]>
    composites: {}
  }

  type VenueLocationGetPayload<S extends boolean | null | undefined | VenueLocationDefaultArgs> = $Result.GetResult<Prisma.$VenueLocationPayload, S>

  type VenueLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueLocationCountAggregateInputType | true
    }

  export interface VenueLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VenueLocation'], meta: { name: 'VenueLocation' } }
    /**
     * Find zero or one VenueLocation that matches the filter.
     * @param {VenueLocationFindUniqueArgs} args - Arguments to find a VenueLocation
     * @example
     * // Get one VenueLocation
     * const venueLocation = await prisma.venueLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueLocationFindUniqueArgs>(args: SelectSubset<T, VenueLocationFindUniqueArgs<ExtArgs>>): Prisma__VenueLocationClient<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VenueLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueLocationFindUniqueOrThrowArgs} args - Arguments to find a VenueLocation
     * @example
     * // Get one VenueLocation
     * const venueLocation = await prisma.venueLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueLocationClient<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueLocationFindFirstArgs} args - Arguments to find a VenueLocation
     * @example
     * // Get one VenueLocation
     * const venueLocation = await prisma.venueLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueLocationFindFirstArgs>(args?: SelectSubset<T, VenueLocationFindFirstArgs<ExtArgs>>): Prisma__VenueLocationClient<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueLocationFindFirstOrThrowArgs} args - Arguments to find a VenueLocation
     * @example
     * // Get one VenueLocation
     * const venueLocation = await prisma.venueLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueLocationClient<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VenueLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenueLocations
     * const venueLocations = await prisma.venueLocation.findMany()
     * 
     * // Get first 10 VenueLocations
     * const venueLocations = await prisma.venueLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueLocationWithIdOnly = await prisma.venueLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueLocationFindManyArgs>(args?: SelectSubset<T, VenueLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VenueLocation.
     * @param {VenueLocationCreateArgs} args - Arguments to create a VenueLocation.
     * @example
     * // Create one VenueLocation
     * const VenueLocation = await prisma.venueLocation.create({
     *   data: {
     *     // ... data to create a VenueLocation
     *   }
     * })
     * 
     */
    create<T extends VenueLocationCreateArgs>(args: SelectSubset<T, VenueLocationCreateArgs<ExtArgs>>): Prisma__VenueLocationClient<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VenueLocations.
     * @param {VenueLocationCreateManyArgs} args - Arguments to create many VenueLocations.
     * @example
     * // Create many VenueLocations
     * const venueLocation = await prisma.venueLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueLocationCreateManyArgs>(args?: SelectSubset<T, VenueLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VenueLocation.
     * @param {VenueLocationDeleteArgs} args - Arguments to delete one VenueLocation.
     * @example
     * // Delete one VenueLocation
     * const VenueLocation = await prisma.venueLocation.delete({
     *   where: {
     *     // ... filter to delete one VenueLocation
     *   }
     * })
     * 
     */
    delete<T extends VenueLocationDeleteArgs>(args: SelectSubset<T, VenueLocationDeleteArgs<ExtArgs>>): Prisma__VenueLocationClient<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VenueLocation.
     * @param {VenueLocationUpdateArgs} args - Arguments to update one VenueLocation.
     * @example
     * // Update one VenueLocation
     * const venueLocation = await prisma.venueLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueLocationUpdateArgs>(args: SelectSubset<T, VenueLocationUpdateArgs<ExtArgs>>): Prisma__VenueLocationClient<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VenueLocations.
     * @param {VenueLocationDeleteManyArgs} args - Arguments to filter VenueLocations to delete.
     * @example
     * // Delete a few VenueLocations
     * const { count } = await prisma.venueLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueLocationDeleteManyArgs>(args?: SelectSubset<T, VenueLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenueLocations
     * const venueLocation = await prisma.venueLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueLocationUpdateManyArgs>(args: SelectSubset<T, VenueLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VenueLocation.
     * @param {VenueLocationUpsertArgs} args - Arguments to update or create a VenueLocation.
     * @example
     * // Update or create a VenueLocation
     * const venueLocation = await prisma.venueLocation.upsert({
     *   create: {
     *     // ... data to create a VenueLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenueLocation we want to update
     *   }
     * })
     */
    upsert<T extends VenueLocationUpsertArgs>(args: SelectSubset<T, VenueLocationUpsertArgs<ExtArgs>>): Prisma__VenueLocationClient<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VenueLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueLocationCountArgs} args - Arguments to filter VenueLocations to count.
     * @example
     * // Count the number of VenueLocations
     * const count = await prisma.venueLocation.count({
     *   where: {
     *     // ... the filter for the VenueLocations we want to count
     *   }
     * })
    **/
    count<T extends VenueLocationCountArgs>(
      args?: Subset<T, VenueLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VenueLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueLocationAggregateArgs>(args: Subset<T, VenueLocationAggregateArgs>): Prisma.PrismaPromise<GetVenueLocationAggregateType<T>>

    /**
     * Group by VenueLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueLocationGroupByArgs} args - Group by arguments.
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
      T extends VenueLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueLocationGroupByArgs['orderBy'] }
        : { orderBy?: VenueLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VenueLocation model
   */
  readonly fields: VenueLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VenueLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VenueLocation model
   */
  interface VenueLocationFieldRefs {
    readonly id: FieldRef<"VenueLocation", 'Int'>
    readonly name: FieldRef<"VenueLocation", 'String'>
    readonly address: FieldRef<"VenueLocation", 'String'>
    readonly latitude: FieldRef<"VenueLocation", 'Float'>
    readonly longitude: FieldRef<"VenueLocation", 'Float'>
    readonly popupImageUrl: FieldRef<"VenueLocation", 'String'>
    readonly eventType: FieldRef<"VenueLocation", 'String'>
    readonly mapZoom: FieldRef<"VenueLocation", 'Int'>
    readonly createdAt: FieldRef<"VenueLocation", 'DateTime'>
    readonly updatedAt: FieldRef<"VenueLocation", 'DateTime'>
    readonly invitationId: FieldRef<"VenueLocation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VenueLocation findUnique
   */
  export type VenueLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    /**
     * Filter, which VenueLocation to fetch.
     */
    where: VenueLocationWhereUniqueInput
  }

  /**
   * VenueLocation findUniqueOrThrow
   */
  export type VenueLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    /**
     * Filter, which VenueLocation to fetch.
     */
    where: VenueLocationWhereUniqueInput
  }

  /**
   * VenueLocation findFirst
   */
  export type VenueLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    /**
     * Filter, which VenueLocation to fetch.
     */
    where?: VenueLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueLocations to fetch.
     */
    orderBy?: VenueLocationOrderByWithRelationInput | VenueLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueLocations.
     */
    cursor?: VenueLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueLocations.
     */
    distinct?: VenueLocationScalarFieldEnum | VenueLocationScalarFieldEnum[]
  }

  /**
   * VenueLocation findFirstOrThrow
   */
  export type VenueLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    /**
     * Filter, which VenueLocation to fetch.
     */
    where?: VenueLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueLocations to fetch.
     */
    orderBy?: VenueLocationOrderByWithRelationInput | VenueLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueLocations.
     */
    cursor?: VenueLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueLocations.
     */
    distinct?: VenueLocationScalarFieldEnum | VenueLocationScalarFieldEnum[]
  }

  /**
   * VenueLocation findMany
   */
  export type VenueLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    /**
     * Filter, which VenueLocations to fetch.
     */
    where?: VenueLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueLocations to fetch.
     */
    orderBy?: VenueLocationOrderByWithRelationInput | VenueLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VenueLocations.
     */
    cursor?: VenueLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueLocations.
     */
    distinct?: VenueLocationScalarFieldEnum | VenueLocationScalarFieldEnum[]
  }

  /**
   * VenueLocation create
   */
  export type VenueLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a VenueLocation.
     */
    data: XOR<VenueLocationCreateInput, VenueLocationUncheckedCreateInput>
  }

  /**
   * VenueLocation createMany
   */
  export type VenueLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenueLocations.
     */
    data: VenueLocationCreateManyInput | VenueLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenueLocation update
   */
  export type VenueLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a VenueLocation.
     */
    data: XOR<VenueLocationUpdateInput, VenueLocationUncheckedUpdateInput>
    /**
     * Choose, which VenueLocation to update.
     */
    where: VenueLocationWhereUniqueInput
  }

  /**
   * VenueLocation updateMany
   */
  export type VenueLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VenueLocations.
     */
    data: XOR<VenueLocationUpdateManyMutationInput, VenueLocationUncheckedUpdateManyInput>
    /**
     * Filter which VenueLocations to update
     */
    where?: VenueLocationWhereInput
    /**
     * Limit how many VenueLocations to update.
     */
    limit?: number
  }

  /**
   * VenueLocation upsert
   */
  export type VenueLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the VenueLocation to update in case it exists.
     */
    where: VenueLocationWhereUniqueInput
    /**
     * In case the VenueLocation found by the `where` argument doesn't exist, create a new VenueLocation with this data.
     */
    create: XOR<VenueLocationCreateInput, VenueLocationUncheckedCreateInput>
    /**
     * In case the VenueLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueLocationUpdateInput, VenueLocationUncheckedUpdateInput>
  }

  /**
   * VenueLocation delete
   */
  export type VenueLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
    /**
     * Filter which VenueLocation to delete.
     */
    where: VenueLocationWhereUniqueInput
  }

  /**
   * VenueLocation deleteMany
   */
  export type VenueLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueLocations to delete
     */
    where?: VenueLocationWhereInput
    /**
     * Limit how many VenueLocations to delete.
     */
    limit?: number
  }

  /**
   * VenueLocation without action
   */
  export type VenueLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueLocation
     */
    select?: VenueLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueLocation
     */
    omit?: VenueLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueLocationInclude<ExtArgs> | null
  }


  /**
   * Model EventSchedule
   */

  export type AggregateEventSchedule = {
    _count: EventScheduleCountAggregateOutputType | null
    _avg: EventScheduleAvgAggregateOutputType | null
    _sum: EventScheduleSumAggregateOutputType | null
    _min: EventScheduleMinAggregateOutputType | null
    _max: EventScheduleMaxAggregateOutputType | null
  }

  export type EventScheduleAvgAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type EventScheduleSumAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type EventScheduleMinAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type EventScheduleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type EventScheduleCountAggregateOutputType = {
    id: number
    title: number
    date: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type EventScheduleAvgAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type EventScheduleSumAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type EventScheduleMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type EventScheduleMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type EventScheduleCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    _all?: true
  }

  export type EventScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSchedule to aggregate.
     */
    where?: EventScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSchedules to fetch.
     */
    orderBy?: EventScheduleOrderByWithRelationInput | EventScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventSchedules
    **/
    _count?: true | EventScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventScheduleMaxAggregateInputType
  }

  export type GetEventScheduleAggregateType<T extends EventScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateEventSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventSchedule[P]>
      : GetScalarType<T[P], AggregateEventSchedule[P]>
  }




  export type EventScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScheduleWhereInput
    orderBy?: EventScheduleOrderByWithAggregationInput | EventScheduleOrderByWithAggregationInput[]
    by: EventScheduleScalarFieldEnum[] | EventScheduleScalarFieldEnum
    having?: EventScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventScheduleCountAggregateInputType | true
    _avg?: EventScheduleAvgAggregateInputType
    _sum?: EventScheduleSumAggregateInputType
    _min?: EventScheduleMinAggregateInputType
    _max?: EventScheduleMaxAggregateInputType
  }

  export type EventScheduleGroupByOutputType = {
    id: number
    title: string
    date: Date
    startTime: Date
    endTime: Date
    createdAt: Date
    updatedAt: Date
    invitationId: number
    _count: EventScheduleCountAggregateOutputType | null
    _avg: EventScheduleAvgAggregateOutputType | null
    _sum: EventScheduleSumAggregateOutputType | null
    _min: EventScheduleMinAggregateOutputType | null
    _max: EventScheduleMaxAggregateOutputType | null
  }

  type GetEventScheduleGroupByPayload<T extends EventScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], EventScheduleGroupByOutputType[P]>
        }
      >
    >


  export type EventScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSchedule"]>



  export type EventScheduleSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type EventScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "startTime" | "endTime" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["eventSchedule"]>
  export type EventScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $EventSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventSchedule"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      date: Date
      startTime: Date
      endTime: Date
      createdAt: Date
      updatedAt: Date
      invitationId: number
    }, ExtArgs["result"]["eventSchedule"]>
    composites: {}
  }

  type EventScheduleGetPayload<S extends boolean | null | undefined | EventScheduleDefaultArgs> = $Result.GetResult<Prisma.$EventSchedulePayload, S>

  type EventScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventScheduleCountAggregateInputType | true
    }

  export interface EventScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventSchedule'], meta: { name: 'EventSchedule' } }
    /**
     * Find zero or one EventSchedule that matches the filter.
     * @param {EventScheduleFindUniqueArgs} args - Arguments to find a EventSchedule
     * @example
     * // Get one EventSchedule
     * const eventSchedule = await prisma.eventSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventScheduleFindUniqueArgs>(args: SelectSubset<T, EventScheduleFindUniqueArgs<ExtArgs>>): Prisma__EventScheduleClient<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventScheduleFindUniqueOrThrowArgs} args - Arguments to find a EventSchedule
     * @example
     * // Get one EventSchedule
     * const eventSchedule = await prisma.eventSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, EventScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventScheduleClient<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleFindFirstArgs} args - Arguments to find a EventSchedule
     * @example
     * // Get one EventSchedule
     * const eventSchedule = await prisma.eventSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventScheduleFindFirstArgs>(args?: SelectSubset<T, EventScheduleFindFirstArgs<ExtArgs>>): Prisma__EventScheduleClient<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleFindFirstOrThrowArgs} args - Arguments to find a EventSchedule
     * @example
     * // Get one EventSchedule
     * const eventSchedule = await prisma.eventSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, EventScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventScheduleClient<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventSchedules
     * const eventSchedules = await prisma.eventSchedule.findMany()
     * 
     * // Get first 10 EventSchedules
     * const eventSchedules = await prisma.eventSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventScheduleWithIdOnly = await prisma.eventSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventScheduleFindManyArgs>(args?: SelectSubset<T, EventScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventSchedule.
     * @param {EventScheduleCreateArgs} args - Arguments to create a EventSchedule.
     * @example
     * // Create one EventSchedule
     * const EventSchedule = await prisma.eventSchedule.create({
     *   data: {
     *     // ... data to create a EventSchedule
     *   }
     * })
     * 
     */
    create<T extends EventScheduleCreateArgs>(args: SelectSubset<T, EventScheduleCreateArgs<ExtArgs>>): Prisma__EventScheduleClient<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventSchedules.
     * @param {EventScheduleCreateManyArgs} args - Arguments to create many EventSchedules.
     * @example
     * // Create many EventSchedules
     * const eventSchedule = await prisma.eventSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventScheduleCreateManyArgs>(args?: SelectSubset<T, EventScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventSchedule.
     * @param {EventScheduleDeleteArgs} args - Arguments to delete one EventSchedule.
     * @example
     * // Delete one EventSchedule
     * const EventSchedule = await prisma.eventSchedule.delete({
     *   where: {
     *     // ... filter to delete one EventSchedule
     *   }
     * })
     * 
     */
    delete<T extends EventScheduleDeleteArgs>(args: SelectSubset<T, EventScheduleDeleteArgs<ExtArgs>>): Prisma__EventScheduleClient<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventSchedule.
     * @param {EventScheduleUpdateArgs} args - Arguments to update one EventSchedule.
     * @example
     * // Update one EventSchedule
     * const eventSchedule = await prisma.eventSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventScheduleUpdateArgs>(args: SelectSubset<T, EventScheduleUpdateArgs<ExtArgs>>): Prisma__EventScheduleClient<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventSchedules.
     * @param {EventScheduleDeleteManyArgs} args - Arguments to filter EventSchedules to delete.
     * @example
     * // Delete a few EventSchedules
     * const { count } = await prisma.eventSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventScheduleDeleteManyArgs>(args?: SelectSubset<T, EventScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventSchedules
     * const eventSchedule = await prisma.eventSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventScheduleUpdateManyArgs>(args: SelectSubset<T, EventScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventSchedule.
     * @param {EventScheduleUpsertArgs} args - Arguments to update or create a EventSchedule.
     * @example
     * // Update or create a EventSchedule
     * const eventSchedule = await prisma.eventSchedule.upsert({
     *   create: {
     *     // ... data to create a EventSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventSchedule we want to update
     *   }
     * })
     */
    upsert<T extends EventScheduleUpsertArgs>(args: SelectSubset<T, EventScheduleUpsertArgs<ExtArgs>>): Prisma__EventScheduleClient<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleCountArgs} args - Arguments to filter EventSchedules to count.
     * @example
     * // Count the number of EventSchedules
     * const count = await prisma.eventSchedule.count({
     *   where: {
     *     // ... the filter for the EventSchedules we want to count
     *   }
     * })
    **/
    count<T extends EventScheduleCountArgs>(
      args?: Subset<T, EventScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventScheduleAggregateArgs>(args: Subset<T, EventScheduleAggregateArgs>): Prisma.PrismaPromise<GetEventScheduleAggregateType<T>>

    /**
     * Group by EventSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleGroupByArgs} args - Group by arguments.
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
      T extends EventScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventScheduleGroupByArgs['orderBy'] }
        : { orderBy?: EventScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventSchedule model
   */
  readonly fields: EventScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventSchedule model
   */
  interface EventScheduleFieldRefs {
    readonly id: FieldRef<"EventSchedule", 'Int'>
    readonly title: FieldRef<"EventSchedule", 'String'>
    readonly date: FieldRef<"EventSchedule", 'DateTime'>
    readonly startTime: FieldRef<"EventSchedule", 'DateTime'>
    readonly endTime: FieldRef<"EventSchedule", 'DateTime'>
    readonly createdAt: FieldRef<"EventSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"EventSchedule", 'DateTime'>
    readonly invitationId: FieldRef<"EventSchedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EventSchedule findUnique
   */
  export type EventScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EventSchedule to fetch.
     */
    where: EventScheduleWhereUniqueInput
  }

  /**
   * EventSchedule findUniqueOrThrow
   */
  export type EventScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EventSchedule to fetch.
     */
    where: EventScheduleWhereUniqueInput
  }

  /**
   * EventSchedule findFirst
   */
  export type EventScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EventSchedule to fetch.
     */
    where?: EventScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSchedules to fetch.
     */
    orderBy?: EventScheduleOrderByWithRelationInput | EventScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSchedules.
     */
    cursor?: EventScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSchedules.
     */
    distinct?: EventScheduleScalarFieldEnum | EventScheduleScalarFieldEnum[]
  }

  /**
   * EventSchedule findFirstOrThrow
   */
  export type EventScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EventSchedule to fetch.
     */
    where?: EventScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSchedules to fetch.
     */
    orderBy?: EventScheduleOrderByWithRelationInput | EventScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSchedules.
     */
    cursor?: EventScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSchedules.
     */
    distinct?: EventScheduleScalarFieldEnum | EventScheduleScalarFieldEnum[]
  }

  /**
   * EventSchedule findMany
   */
  export type EventScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EventSchedules to fetch.
     */
    where?: EventScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSchedules to fetch.
     */
    orderBy?: EventScheduleOrderByWithRelationInput | EventScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventSchedules.
     */
    cursor?: EventScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSchedules.
     */
    distinct?: EventScheduleScalarFieldEnum | EventScheduleScalarFieldEnum[]
  }

  /**
   * EventSchedule create
   */
  export type EventScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a EventSchedule.
     */
    data: XOR<EventScheduleCreateInput, EventScheduleUncheckedCreateInput>
  }

  /**
   * EventSchedule createMany
   */
  export type EventScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventSchedules.
     */
    data: EventScheduleCreateManyInput | EventScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventSchedule update
   */
  export type EventScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a EventSchedule.
     */
    data: XOR<EventScheduleUpdateInput, EventScheduleUncheckedUpdateInput>
    /**
     * Choose, which EventSchedule to update.
     */
    where: EventScheduleWhereUniqueInput
  }

  /**
   * EventSchedule updateMany
   */
  export type EventScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventSchedules.
     */
    data: XOR<EventScheduleUpdateManyMutationInput, EventScheduleUncheckedUpdateManyInput>
    /**
     * Filter which EventSchedules to update
     */
    where?: EventScheduleWhereInput
    /**
     * Limit how many EventSchedules to update.
     */
    limit?: number
  }

  /**
   * EventSchedule upsert
   */
  export type EventScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the EventSchedule to update in case it exists.
     */
    where: EventScheduleWhereUniqueInput
    /**
     * In case the EventSchedule found by the `where` argument doesn't exist, create a new EventSchedule with this data.
     */
    create: XOR<EventScheduleCreateInput, EventScheduleUncheckedCreateInput>
    /**
     * In case the EventSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventScheduleUpdateInput, EventScheduleUncheckedUpdateInput>
  }

  /**
   * EventSchedule delete
   */
  export type EventScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
    /**
     * Filter which EventSchedule to delete.
     */
    where: EventScheduleWhereUniqueInput
  }

  /**
   * EventSchedule deleteMany
   */
  export type EventScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSchedules to delete
     */
    where?: EventScheduleWhereInput
    /**
     * Limit how many EventSchedules to delete.
     */
    limit?: number
  }

  /**
   * EventSchedule without action
   */
  export type EventScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSchedule
     */
    select?: EventScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSchedule
     */
    omit?: EventScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleInclude<ExtArgs> | null
  }


  /**
   * Model RSVPSubmission
   */

  export type AggregateRSVPSubmission = {
    _count: RSVPSubmissionCountAggregateOutputType | null
    _avg: RSVPSubmissionAvgAggregateOutputType | null
    _sum: RSVPSubmissionSumAggregateOutputType | null
    _min: RSVPSubmissionMinAggregateOutputType | null
    _max: RSVPSubmissionMaxAggregateOutputType | null
  }

  export type RSVPSubmissionAvgAggregateOutputType = {
    id: number | null
    paxCount: number | null
    invitationId: number | null
  }

  export type RSVPSubmissionSumAggregateOutputType = {
    id: number | null
    paxCount: number | null
    invitationId: number | null
  }

  export type RSVPSubmissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    attendanceStatus: $Enums.AttendanceStatus | null
    paxCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
    idempotencyKey: string | null
  }

  export type RSVPSubmissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    attendanceStatus: $Enums.AttendanceStatus | null
    paxCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
    idempotencyKey: string | null
  }

  export type RSVPSubmissionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    attendanceStatus: number
    paxCount: number
    createdAt: number
    updatedAt: number
    invitationId: number
    idempotencyKey: number
    _all: number
  }


  export type RSVPSubmissionAvgAggregateInputType = {
    id?: true
    paxCount?: true
    invitationId?: true
  }

  export type RSVPSubmissionSumAggregateInputType = {
    id?: true
    paxCount?: true
    invitationId?: true
  }

  export type RSVPSubmissionMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    attendanceStatus?: true
    paxCount?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    idempotencyKey?: true
  }

  export type RSVPSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    attendanceStatus?: true
    paxCount?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    idempotencyKey?: true
  }

  export type RSVPSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    attendanceStatus?: true
    paxCount?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    idempotencyKey?: true
    _all?: true
  }

  export type RSVPSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RSVPSubmission to aggregate.
     */
    where?: RSVPSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RSVPSubmissions to fetch.
     */
    orderBy?: RSVPSubmissionOrderByWithRelationInput | RSVPSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RSVPSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RSVPSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RSVPSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RSVPSubmissions
    **/
    _count?: true | RSVPSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RSVPSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RSVPSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RSVPSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RSVPSubmissionMaxAggregateInputType
  }

  export type GetRSVPSubmissionAggregateType<T extends RSVPSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRSVPSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRSVPSubmission[P]>
      : GetScalarType<T[P], AggregateRSVPSubmission[P]>
  }




  export type RSVPSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RSVPSubmissionWhereInput
    orderBy?: RSVPSubmissionOrderByWithAggregationInput | RSVPSubmissionOrderByWithAggregationInput[]
    by: RSVPSubmissionScalarFieldEnum[] | RSVPSubmissionScalarFieldEnum
    having?: RSVPSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RSVPSubmissionCountAggregateInputType | true
    _avg?: RSVPSubmissionAvgAggregateInputType
    _sum?: RSVPSubmissionSumAggregateInputType
    _min?: RSVPSubmissionMinAggregateInputType
    _max?: RSVPSubmissionMaxAggregateInputType
  }

  export type RSVPSubmissionGroupByOutputType = {
    id: number
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    createdAt: Date
    updatedAt: Date
    invitationId: number
    idempotencyKey: string | null
    _count: RSVPSubmissionCountAggregateOutputType | null
    _avg: RSVPSubmissionAvgAggregateOutputType | null
    _sum: RSVPSubmissionSumAggregateOutputType | null
    _min: RSVPSubmissionMinAggregateOutputType | null
    _max: RSVPSubmissionMaxAggregateOutputType | null
  }

  type GetRSVPSubmissionGroupByPayload<T extends RSVPSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RSVPSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RSVPSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RSVPSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], RSVPSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type RSVPSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    attendanceStatus?: boolean
    paxCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    idempotencyKey?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rSVPSubmission"]>



  export type RSVPSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    attendanceStatus?: boolean
    paxCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    idempotencyKey?: boolean
  }

  export type RSVPSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "attendanceStatus" | "paxCount" | "createdAt" | "updatedAt" | "invitationId" | "idempotencyKey", ExtArgs["result"]["rSVPSubmission"]>
  export type RSVPSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $RSVPSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RSVPSubmission"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      attendanceStatus: $Enums.AttendanceStatus
      paxCount: number
      createdAt: Date
      updatedAt: Date
      invitationId: number
      idempotencyKey: string | null
    }, ExtArgs["result"]["rSVPSubmission"]>
    composites: {}
  }

  type RSVPSubmissionGetPayload<S extends boolean | null | undefined | RSVPSubmissionDefaultArgs> = $Result.GetResult<Prisma.$RSVPSubmissionPayload, S>

  type RSVPSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RSVPSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RSVPSubmissionCountAggregateInputType | true
    }

  export interface RSVPSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RSVPSubmission'], meta: { name: 'RSVPSubmission' } }
    /**
     * Find zero or one RSVPSubmission that matches the filter.
     * @param {RSVPSubmissionFindUniqueArgs} args - Arguments to find a RSVPSubmission
     * @example
     * // Get one RSVPSubmission
     * const rSVPSubmission = await prisma.rSVPSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RSVPSubmissionFindUniqueArgs>(args: SelectSubset<T, RSVPSubmissionFindUniqueArgs<ExtArgs>>): Prisma__RSVPSubmissionClient<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RSVPSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RSVPSubmissionFindUniqueOrThrowArgs} args - Arguments to find a RSVPSubmission
     * @example
     * // Get one RSVPSubmission
     * const rSVPSubmission = await prisma.rSVPSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RSVPSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RSVPSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RSVPSubmissionClient<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RSVPSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RSVPSubmissionFindFirstArgs} args - Arguments to find a RSVPSubmission
     * @example
     * // Get one RSVPSubmission
     * const rSVPSubmission = await prisma.rSVPSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RSVPSubmissionFindFirstArgs>(args?: SelectSubset<T, RSVPSubmissionFindFirstArgs<ExtArgs>>): Prisma__RSVPSubmissionClient<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RSVPSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RSVPSubmissionFindFirstOrThrowArgs} args - Arguments to find a RSVPSubmission
     * @example
     * // Get one RSVPSubmission
     * const rSVPSubmission = await prisma.rSVPSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RSVPSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RSVPSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RSVPSubmissionClient<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RSVPSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RSVPSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RSVPSubmissions
     * const rSVPSubmissions = await prisma.rSVPSubmission.findMany()
     * 
     * // Get first 10 RSVPSubmissions
     * const rSVPSubmissions = await prisma.rSVPSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rSVPSubmissionWithIdOnly = await prisma.rSVPSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RSVPSubmissionFindManyArgs>(args?: SelectSubset<T, RSVPSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RSVPSubmission.
     * @param {RSVPSubmissionCreateArgs} args - Arguments to create a RSVPSubmission.
     * @example
     * // Create one RSVPSubmission
     * const RSVPSubmission = await prisma.rSVPSubmission.create({
     *   data: {
     *     // ... data to create a RSVPSubmission
     *   }
     * })
     * 
     */
    create<T extends RSVPSubmissionCreateArgs>(args: SelectSubset<T, RSVPSubmissionCreateArgs<ExtArgs>>): Prisma__RSVPSubmissionClient<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RSVPSubmissions.
     * @param {RSVPSubmissionCreateManyArgs} args - Arguments to create many RSVPSubmissions.
     * @example
     * // Create many RSVPSubmissions
     * const rSVPSubmission = await prisma.rSVPSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RSVPSubmissionCreateManyArgs>(args?: SelectSubset<T, RSVPSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RSVPSubmission.
     * @param {RSVPSubmissionDeleteArgs} args - Arguments to delete one RSVPSubmission.
     * @example
     * // Delete one RSVPSubmission
     * const RSVPSubmission = await prisma.rSVPSubmission.delete({
     *   where: {
     *     // ... filter to delete one RSVPSubmission
     *   }
     * })
     * 
     */
    delete<T extends RSVPSubmissionDeleteArgs>(args: SelectSubset<T, RSVPSubmissionDeleteArgs<ExtArgs>>): Prisma__RSVPSubmissionClient<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RSVPSubmission.
     * @param {RSVPSubmissionUpdateArgs} args - Arguments to update one RSVPSubmission.
     * @example
     * // Update one RSVPSubmission
     * const rSVPSubmission = await prisma.rSVPSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RSVPSubmissionUpdateArgs>(args: SelectSubset<T, RSVPSubmissionUpdateArgs<ExtArgs>>): Prisma__RSVPSubmissionClient<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RSVPSubmissions.
     * @param {RSVPSubmissionDeleteManyArgs} args - Arguments to filter RSVPSubmissions to delete.
     * @example
     * // Delete a few RSVPSubmissions
     * const { count } = await prisma.rSVPSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RSVPSubmissionDeleteManyArgs>(args?: SelectSubset<T, RSVPSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RSVPSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RSVPSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RSVPSubmissions
     * const rSVPSubmission = await prisma.rSVPSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RSVPSubmissionUpdateManyArgs>(args: SelectSubset<T, RSVPSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RSVPSubmission.
     * @param {RSVPSubmissionUpsertArgs} args - Arguments to update or create a RSVPSubmission.
     * @example
     * // Update or create a RSVPSubmission
     * const rSVPSubmission = await prisma.rSVPSubmission.upsert({
     *   create: {
     *     // ... data to create a RSVPSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RSVPSubmission we want to update
     *   }
     * })
     */
    upsert<T extends RSVPSubmissionUpsertArgs>(args: SelectSubset<T, RSVPSubmissionUpsertArgs<ExtArgs>>): Prisma__RSVPSubmissionClient<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RSVPSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RSVPSubmissionCountArgs} args - Arguments to filter RSVPSubmissions to count.
     * @example
     * // Count the number of RSVPSubmissions
     * const count = await prisma.rSVPSubmission.count({
     *   where: {
     *     // ... the filter for the RSVPSubmissions we want to count
     *   }
     * })
    **/
    count<T extends RSVPSubmissionCountArgs>(
      args?: Subset<T, RSVPSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RSVPSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RSVPSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RSVPSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RSVPSubmissionAggregateArgs>(args: Subset<T, RSVPSubmissionAggregateArgs>): Prisma.PrismaPromise<GetRSVPSubmissionAggregateType<T>>

    /**
     * Group by RSVPSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RSVPSubmissionGroupByArgs} args - Group by arguments.
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
      T extends RSVPSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RSVPSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: RSVPSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RSVPSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRSVPSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RSVPSubmission model
   */
  readonly fields: RSVPSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RSVPSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RSVPSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RSVPSubmission model
   */
  interface RSVPSubmissionFieldRefs {
    readonly id: FieldRef<"RSVPSubmission", 'Int'>
    readonly name: FieldRef<"RSVPSubmission", 'String'>
    readonly email: FieldRef<"RSVPSubmission", 'String'>
    readonly attendanceStatus: FieldRef<"RSVPSubmission", 'AttendanceStatus'>
    readonly paxCount: FieldRef<"RSVPSubmission", 'Int'>
    readonly createdAt: FieldRef<"RSVPSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"RSVPSubmission", 'DateTime'>
    readonly invitationId: FieldRef<"RSVPSubmission", 'Int'>
    readonly idempotencyKey: FieldRef<"RSVPSubmission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RSVPSubmission findUnique
   */
  export type RSVPSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which RSVPSubmission to fetch.
     */
    where: RSVPSubmissionWhereUniqueInput
  }

  /**
   * RSVPSubmission findUniqueOrThrow
   */
  export type RSVPSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which RSVPSubmission to fetch.
     */
    where: RSVPSubmissionWhereUniqueInput
  }

  /**
   * RSVPSubmission findFirst
   */
  export type RSVPSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which RSVPSubmission to fetch.
     */
    where?: RSVPSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RSVPSubmissions to fetch.
     */
    orderBy?: RSVPSubmissionOrderByWithRelationInput | RSVPSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RSVPSubmissions.
     */
    cursor?: RSVPSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RSVPSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RSVPSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RSVPSubmissions.
     */
    distinct?: RSVPSubmissionScalarFieldEnum | RSVPSubmissionScalarFieldEnum[]
  }

  /**
   * RSVPSubmission findFirstOrThrow
   */
  export type RSVPSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which RSVPSubmission to fetch.
     */
    where?: RSVPSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RSVPSubmissions to fetch.
     */
    orderBy?: RSVPSubmissionOrderByWithRelationInput | RSVPSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RSVPSubmissions.
     */
    cursor?: RSVPSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RSVPSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RSVPSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RSVPSubmissions.
     */
    distinct?: RSVPSubmissionScalarFieldEnum | RSVPSubmissionScalarFieldEnum[]
  }

  /**
   * RSVPSubmission findMany
   */
  export type RSVPSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which RSVPSubmissions to fetch.
     */
    where?: RSVPSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RSVPSubmissions to fetch.
     */
    orderBy?: RSVPSubmissionOrderByWithRelationInput | RSVPSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RSVPSubmissions.
     */
    cursor?: RSVPSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RSVPSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RSVPSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RSVPSubmissions.
     */
    distinct?: RSVPSubmissionScalarFieldEnum | RSVPSubmissionScalarFieldEnum[]
  }

  /**
   * RSVPSubmission create
   */
  export type RSVPSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RSVPSubmission.
     */
    data: XOR<RSVPSubmissionCreateInput, RSVPSubmissionUncheckedCreateInput>
  }

  /**
   * RSVPSubmission createMany
   */
  export type RSVPSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RSVPSubmissions.
     */
    data: RSVPSubmissionCreateManyInput | RSVPSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RSVPSubmission update
   */
  export type RSVPSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RSVPSubmission.
     */
    data: XOR<RSVPSubmissionUpdateInput, RSVPSubmissionUncheckedUpdateInput>
    /**
     * Choose, which RSVPSubmission to update.
     */
    where: RSVPSubmissionWhereUniqueInput
  }

  /**
   * RSVPSubmission updateMany
   */
  export type RSVPSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RSVPSubmissions.
     */
    data: XOR<RSVPSubmissionUpdateManyMutationInput, RSVPSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which RSVPSubmissions to update
     */
    where?: RSVPSubmissionWhereInput
    /**
     * Limit how many RSVPSubmissions to update.
     */
    limit?: number
  }

  /**
   * RSVPSubmission upsert
   */
  export type RSVPSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RSVPSubmission to update in case it exists.
     */
    where: RSVPSubmissionWhereUniqueInput
    /**
     * In case the RSVPSubmission found by the `where` argument doesn't exist, create a new RSVPSubmission with this data.
     */
    create: XOR<RSVPSubmissionCreateInput, RSVPSubmissionUncheckedCreateInput>
    /**
     * In case the RSVPSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RSVPSubmissionUpdateInput, RSVPSubmissionUncheckedUpdateInput>
  }

  /**
   * RSVPSubmission delete
   */
  export type RSVPSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
    /**
     * Filter which RSVPSubmission to delete.
     */
    where: RSVPSubmissionWhereUniqueInput
  }

  /**
   * RSVPSubmission deleteMany
   */
  export type RSVPSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RSVPSubmissions to delete
     */
    where?: RSVPSubmissionWhereInput
    /**
     * Limit how many RSVPSubmissions to delete.
     */
    limit?: number
  }

  /**
   * RSVPSubmission without action
   */
  export type RSVPSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RSVPSubmission
     */
    select?: RSVPSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RSVPSubmission
     */
    omit?: RSVPSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RSVPSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model GuestbookEntry
   */

  export type AggregateGuestbookEntry = {
    _count: GuestbookEntryCountAggregateOutputType | null
    _avg: GuestbookEntryAvgAggregateOutputType | null
    _sum: GuestbookEntrySumAggregateOutputType | null
    _min: GuestbookEntryMinAggregateOutputType | null
    _max: GuestbookEntryMaxAggregateOutputType | null
  }

  export type GuestbookEntryAvgAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type GuestbookEntrySumAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type GuestbookEntryMinAggregateOutputType = {
    id: number | null
    name: string | null
    message: string | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
    idempotencyKey: string | null
  }

  export type GuestbookEntryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    message: string | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
    idempotencyKey: string | null
  }

  export type GuestbookEntryCountAggregateOutputType = {
    id: number
    name: number
    message: number
    isVisible: number
    createdAt: number
    updatedAt: number
    invitationId: number
    idempotencyKey: number
    _all: number
  }


  export type GuestbookEntryAvgAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type GuestbookEntrySumAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type GuestbookEntryMinAggregateInputType = {
    id?: true
    name?: true
    message?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    idempotencyKey?: true
  }

  export type GuestbookEntryMaxAggregateInputType = {
    id?: true
    name?: true
    message?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    idempotencyKey?: true
  }

  export type GuestbookEntryCountAggregateInputType = {
    id?: true
    name?: true
    message?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    idempotencyKey?: true
    _all?: true
  }

  export type GuestbookEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestbookEntry to aggregate.
     */
    where?: GuestbookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestbookEntries to fetch.
     */
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestbookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestbookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestbookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuestbookEntries
    **/
    _count?: true | GuestbookEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestbookEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestbookEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestbookEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestbookEntryMaxAggregateInputType
  }

  export type GetGuestbookEntryAggregateType<T extends GuestbookEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateGuestbookEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuestbookEntry[P]>
      : GetScalarType<T[P], AggregateGuestbookEntry[P]>
  }




  export type GuestbookEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestbookEntryWhereInput
    orderBy?: GuestbookEntryOrderByWithAggregationInput | GuestbookEntryOrderByWithAggregationInput[]
    by: GuestbookEntryScalarFieldEnum[] | GuestbookEntryScalarFieldEnum
    having?: GuestbookEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestbookEntryCountAggregateInputType | true
    _avg?: GuestbookEntryAvgAggregateInputType
    _sum?: GuestbookEntrySumAggregateInputType
    _min?: GuestbookEntryMinAggregateInputType
    _max?: GuestbookEntryMaxAggregateInputType
  }

  export type GuestbookEntryGroupByOutputType = {
    id: number
    name: string
    message: string
    isVisible: boolean
    createdAt: Date
    updatedAt: Date
    invitationId: number
    idempotencyKey: string | null
    _count: GuestbookEntryCountAggregateOutputType | null
    _avg: GuestbookEntryAvgAggregateOutputType | null
    _sum: GuestbookEntrySumAggregateOutputType | null
    _min: GuestbookEntryMinAggregateOutputType | null
    _max: GuestbookEntryMaxAggregateOutputType | null
  }

  type GetGuestbookEntryGroupByPayload<T extends GuestbookEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestbookEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestbookEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestbookEntryGroupByOutputType[P]>
            : GetScalarType<T[P], GuestbookEntryGroupByOutputType[P]>
        }
      >
    >


  export type GuestbookEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    message?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    idempotencyKey?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestbookEntry"]>



  export type GuestbookEntrySelectScalar = {
    id?: boolean
    name?: boolean
    message?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    idempotencyKey?: boolean
  }

  export type GuestbookEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "message" | "isVisible" | "createdAt" | "updatedAt" | "invitationId" | "idempotencyKey", ExtArgs["result"]["guestbookEntry"]>
  export type GuestbookEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $GuestbookEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuestbookEntry"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      message: string
      isVisible: boolean
      createdAt: Date
      updatedAt: Date
      invitationId: number
      idempotencyKey: string | null
    }, ExtArgs["result"]["guestbookEntry"]>
    composites: {}
  }

  type GuestbookEntryGetPayload<S extends boolean | null | undefined | GuestbookEntryDefaultArgs> = $Result.GetResult<Prisma.$GuestbookEntryPayload, S>

  type GuestbookEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestbookEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestbookEntryCountAggregateInputType | true
    }

  export interface GuestbookEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuestbookEntry'], meta: { name: 'GuestbookEntry' } }
    /**
     * Find zero or one GuestbookEntry that matches the filter.
     * @param {GuestbookEntryFindUniqueArgs} args - Arguments to find a GuestbookEntry
     * @example
     * // Get one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestbookEntryFindUniqueArgs>(args: SelectSubset<T, GuestbookEntryFindUniqueArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuestbookEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestbookEntryFindUniqueOrThrowArgs} args - Arguments to find a GuestbookEntry
     * @example
     * // Get one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestbookEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestbookEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestbookEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryFindFirstArgs} args - Arguments to find a GuestbookEntry
     * @example
     * // Get one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestbookEntryFindFirstArgs>(args?: SelectSubset<T, GuestbookEntryFindFirstArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestbookEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryFindFirstOrThrowArgs} args - Arguments to find a GuestbookEntry
     * @example
     * // Get one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestbookEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestbookEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuestbookEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuestbookEntries
     * const guestbookEntries = await prisma.guestbookEntry.findMany()
     * 
     * // Get first 10 GuestbookEntries
     * const guestbookEntries = await prisma.guestbookEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestbookEntryWithIdOnly = await prisma.guestbookEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestbookEntryFindManyArgs>(args?: SelectSubset<T, GuestbookEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuestbookEntry.
     * @param {GuestbookEntryCreateArgs} args - Arguments to create a GuestbookEntry.
     * @example
     * // Create one GuestbookEntry
     * const GuestbookEntry = await prisma.guestbookEntry.create({
     *   data: {
     *     // ... data to create a GuestbookEntry
     *   }
     * })
     * 
     */
    create<T extends GuestbookEntryCreateArgs>(args: SelectSubset<T, GuestbookEntryCreateArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuestbookEntries.
     * @param {GuestbookEntryCreateManyArgs} args - Arguments to create many GuestbookEntries.
     * @example
     * // Create many GuestbookEntries
     * const guestbookEntry = await prisma.guestbookEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestbookEntryCreateManyArgs>(args?: SelectSubset<T, GuestbookEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GuestbookEntry.
     * @param {GuestbookEntryDeleteArgs} args - Arguments to delete one GuestbookEntry.
     * @example
     * // Delete one GuestbookEntry
     * const GuestbookEntry = await prisma.guestbookEntry.delete({
     *   where: {
     *     // ... filter to delete one GuestbookEntry
     *   }
     * })
     * 
     */
    delete<T extends GuestbookEntryDeleteArgs>(args: SelectSubset<T, GuestbookEntryDeleteArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuestbookEntry.
     * @param {GuestbookEntryUpdateArgs} args - Arguments to update one GuestbookEntry.
     * @example
     * // Update one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestbookEntryUpdateArgs>(args: SelectSubset<T, GuestbookEntryUpdateArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuestbookEntries.
     * @param {GuestbookEntryDeleteManyArgs} args - Arguments to filter GuestbookEntries to delete.
     * @example
     * // Delete a few GuestbookEntries
     * const { count } = await prisma.guestbookEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestbookEntryDeleteManyArgs>(args?: SelectSubset<T, GuestbookEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestbookEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuestbookEntries
     * const guestbookEntry = await prisma.guestbookEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestbookEntryUpdateManyArgs>(args: SelectSubset<T, GuestbookEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GuestbookEntry.
     * @param {GuestbookEntryUpsertArgs} args - Arguments to update or create a GuestbookEntry.
     * @example
     * // Update or create a GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.upsert({
     *   create: {
     *     // ... data to create a GuestbookEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuestbookEntry we want to update
     *   }
     * })
     */
    upsert<T extends GuestbookEntryUpsertArgs>(args: SelectSubset<T, GuestbookEntryUpsertArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuestbookEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryCountArgs} args - Arguments to filter GuestbookEntries to count.
     * @example
     * // Count the number of GuestbookEntries
     * const count = await prisma.guestbookEntry.count({
     *   where: {
     *     // ... the filter for the GuestbookEntries we want to count
     *   }
     * })
    **/
    count<T extends GuestbookEntryCountArgs>(
      args?: Subset<T, GuestbookEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestbookEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuestbookEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestbookEntryAggregateArgs>(args: Subset<T, GuestbookEntryAggregateArgs>): Prisma.PrismaPromise<GetGuestbookEntryAggregateType<T>>

    /**
     * Group by GuestbookEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryGroupByArgs} args - Group by arguments.
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
      T extends GuestbookEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestbookEntryGroupByArgs['orderBy'] }
        : { orderBy?: GuestbookEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestbookEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestbookEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuestbookEntry model
   */
  readonly fields: GuestbookEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuestbookEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestbookEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GuestbookEntry model
   */
  interface GuestbookEntryFieldRefs {
    readonly id: FieldRef<"GuestbookEntry", 'Int'>
    readonly name: FieldRef<"GuestbookEntry", 'String'>
    readonly message: FieldRef<"GuestbookEntry", 'String'>
    readonly isVisible: FieldRef<"GuestbookEntry", 'Boolean'>
    readonly createdAt: FieldRef<"GuestbookEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"GuestbookEntry", 'DateTime'>
    readonly invitationId: FieldRef<"GuestbookEntry", 'Int'>
    readonly idempotencyKey: FieldRef<"GuestbookEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuestbookEntry findUnique
   */
  export type GuestbookEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntry to fetch.
     */
    where: GuestbookEntryWhereUniqueInput
  }

  /**
   * GuestbookEntry findUniqueOrThrow
   */
  export type GuestbookEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntry to fetch.
     */
    where: GuestbookEntryWhereUniqueInput
  }

  /**
   * GuestbookEntry findFirst
   */
  export type GuestbookEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntry to fetch.
     */
    where?: GuestbookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestbookEntries to fetch.
     */
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestbookEntries.
     */
    cursor?: GuestbookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestbookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestbookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestbookEntries.
     */
    distinct?: GuestbookEntryScalarFieldEnum | GuestbookEntryScalarFieldEnum[]
  }

  /**
   * GuestbookEntry findFirstOrThrow
   */
  export type GuestbookEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntry to fetch.
     */
    where?: GuestbookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestbookEntries to fetch.
     */
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestbookEntries.
     */
    cursor?: GuestbookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestbookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestbookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestbookEntries.
     */
    distinct?: GuestbookEntryScalarFieldEnum | GuestbookEntryScalarFieldEnum[]
  }

  /**
   * GuestbookEntry findMany
   */
  export type GuestbookEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntries to fetch.
     */
    where?: GuestbookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestbookEntries to fetch.
     */
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuestbookEntries.
     */
    cursor?: GuestbookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestbookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestbookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestbookEntries.
     */
    distinct?: GuestbookEntryScalarFieldEnum | GuestbookEntryScalarFieldEnum[]
  }

  /**
   * GuestbookEntry create
   */
  export type GuestbookEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a GuestbookEntry.
     */
    data: XOR<GuestbookEntryCreateInput, GuestbookEntryUncheckedCreateInput>
  }

  /**
   * GuestbookEntry createMany
   */
  export type GuestbookEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuestbookEntries.
     */
    data: GuestbookEntryCreateManyInput | GuestbookEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuestbookEntry update
   */
  export type GuestbookEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a GuestbookEntry.
     */
    data: XOR<GuestbookEntryUpdateInput, GuestbookEntryUncheckedUpdateInput>
    /**
     * Choose, which GuestbookEntry to update.
     */
    where: GuestbookEntryWhereUniqueInput
  }

  /**
   * GuestbookEntry updateMany
   */
  export type GuestbookEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuestbookEntries.
     */
    data: XOR<GuestbookEntryUpdateManyMutationInput, GuestbookEntryUncheckedUpdateManyInput>
    /**
     * Filter which GuestbookEntries to update
     */
    where?: GuestbookEntryWhereInput
    /**
     * Limit how many GuestbookEntries to update.
     */
    limit?: number
  }

  /**
   * GuestbookEntry upsert
   */
  export type GuestbookEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the GuestbookEntry to update in case it exists.
     */
    where: GuestbookEntryWhereUniqueInput
    /**
     * In case the GuestbookEntry found by the `where` argument doesn't exist, create a new GuestbookEntry with this data.
     */
    create: XOR<GuestbookEntryCreateInput, GuestbookEntryUncheckedCreateInput>
    /**
     * In case the GuestbookEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestbookEntryUpdateInput, GuestbookEntryUncheckedUpdateInput>
  }

  /**
   * GuestbookEntry delete
   */
  export type GuestbookEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter which GuestbookEntry to delete.
     */
    where: GuestbookEntryWhereUniqueInput
  }

  /**
   * GuestbookEntry deleteMany
   */
  export type GuestbookEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestbookEntries to delete
     */
    where?: GuestbookEntryWhereInput
    /**
     * Limit how many GuestbookEntries to delete.
     */
    limit?: number
  }

  /**
   * GuestbookEntry without action
   */
  export type GuestbookEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
  }


  /**
   * Model CashlessAccount
   */

  export type AggregateCashlessAccount = {
    _count: CashlessAccountCountAggregateOutputType | null
    _avg: CashlessAccountAvgAggregateOutputType | null
    _sum: CashlessAccountSumAggregateOutputType | null
    _min: CashlessAccountMinAggregateOutputType | null
    _max: CashlessAccountMaxAggregateOutputType | null
  }

  export type CashlessAccountAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    invitationId: number | null
  }

  export type CashlessAccountSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    invitationId: number | null
  }

  export type CashlessAccountMinAggregateOutputType = {
    id: number | null
    bankName: string | null
    accountNumber: string | null
    accountHolderName: string | null
    bankLogoUrl: string | null
    qrCodeUrl: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type CashlessAccountMaxAggregateOutputType = {
    id: number | null
    bankName: string | null
    accountNumber: string | null
    accountHolderName: string | null
    bankLogoUrl: string | null
    qrCodeUrl: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type CashlessAccountCountAggregateOutputType = {
    id: number
    bankName: number
    accountNumber: number
    accountHolderName: number
    bankLogoUrl: number
    qrCodeUrl: number
    sortOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type CashlessAccountAvgAggregateInputType = {
    id?: true
    sortOrder?: true
    invitationId?: true
  }

  export type CashlessAccountSumAggregateInputType = {
    id?: true
    sortOrder?: true
    invitationId?: true
  }

  export type CashlessAccountMinAggregateInputType = {
    id?: true
    bankName?: true
    accountNumber?: true
    accountHolderName?: true
    bankLogoUrl?: true
    qrCodeUrl?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type CashlessAccountMaxAggregateInputType = {
    id?: true
    bankName?: true
    accountNumber?: true
    accountHolderName?: true
    bankLogoUrl?: true
    qrCodeUrl?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type CashlessAccountCountAggregateInputType = {
    id?: true
    bankName?: true
    accountNumber?: true
    accountHolderName?: true
    bankLogoUrl?: true
    qrCodeUrl?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    _all?: true
  }

  export type CashlessAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashlessAccount to aggregate.
     */
    where?: CashlessAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashlessAccounts to fetch.
     */
    orderBy?: CashlessAccountOrderByWithRelationInput | CashlessAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashlessAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashlessAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashlessAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashlessAccounts
    **/
    _count?: true | CashlessAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashlessAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashlessAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashlessAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashlessAccountMaxAggregateInputType
  }

  export type GetCashlessAccountAggregateType<T extends CashlessAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCashlessAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashlessAccount[P]>
      : GetScalarType<T[P], AggregateCashlessAccount[P]>
  }




  export type CashlessAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashlessAccountWhereInput
    orderBy?: CashlessAccountOrderByWithAggregationInput | CashlessAccountOrderByWithAggregationInput[]
    by: CashlessAccountScalarFieldEnum[] | CashlessAccountScalarFieldEnum
    having?: CashlessAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashlessAccountCountAggregateInputType | true
    _avg?: CashlessAccountAvgAggregateInputType
    _sum?: CashlessAccountSumAggregateInputType
    _min?: CashlessAccountMinAggregateInputType
    _max?: CashlessAccountMaxAggregateInputType
  }

  export type CashlessAccountGroupByOutputType = {
    id: number
    bankName: string
    accountNumber: string
    accountHolderName: string
    bankLogoUrl: string | null
    qrCodeUrl: string | null
    sortOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    invitationId: number
    _count: CashlessAccountCountAggregateOutputType | null
    _avg: CashlessAccountAvgAggregateOutputType | null
    _sum: CashlessAccountSumAggregateOutputType | null
    _min: CashlessAccountMinAggregateOutputType | null
    _max: CashlessAccountMaxAggregateOutputType | null
  }

  type GetCashlessAccountGroupByPayload<T extends CashlessAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashlessAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashlessAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashlessAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CashlessAccountGroupByOutputType[P]>
        }
      >
    >


  export type CashlessAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolderName?: boolean
    bankLogoUrl?: boolean
    qrCodeUrl?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashlessAccount"]>



  export type CashlessAccountSelectScalar = {
    id?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountHolderName?: boolean
    bankLogoUrl?: boolean
    qrCodeUrl?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type CashlessAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bankName" | "accountNumber" | "accountHolderName" | "bankLogoUrl" | "qrCodeUrl" | "sortOrder" | "isActive" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["cashlessAccount"]>
  export type CashlessAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $CashlessAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashlessAccount"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bankName: string
      accountNumber: string
      accountHolderName: string
      bankLogoUrl: string | null
      qrCodeUrl: string | null
      sortOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      invitationId: number
    }, ExtArgs["result"]["cashlessAccount"]>
    composites: {}
  }

  type CashlessAccountGetPayload<S extends boolean | null | undefined | CashlessAccountDefaultArgs> = $Result.GetResult<Prisma.$CashlessAccountPayload, S>

  type CashlessAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashlessAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashlessAccountCountAggregateInputType | true
    }

  export interface CashlessAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashlessAccount'], meta: { name: 'CashlessAccount' } }
    /**
     * Find zero or one CashlessAccount that matches the filter.
     * @param {CashlessAccountFindUniqueArgs} args - Arguments to find a CashlessAccount
     * @example
     * // Get one CashlessAccount
     * const cashlessAccount = await prisma.cashlessAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashlessAccountFindUniqueArgs>(args: SelectSubset<T, CashlessAccountFindUniqueArgs<ExtArgs>>): Prisma__CashlessAccountClient<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashlessAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashlessAccountFindUniqueOrThrowArgs} args - Arguments to find a CashlessAccount
     * @example
     * // Get one CashlessAccount
     * const cashlessAccount = await prisma.cashlessAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashlessAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CashlessAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashlessAccountClient<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashlessAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashlessAccountFindFirstArgs} args - Arguments to find a CashlessAccount
     * @example
     * // Get one CashlessAccount
     * const cashlessAccount = await prisma.cashlessAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashlessAccountFindFirstArgs>(args?: SelectSubset<T, CashlessAccountFindFirstArgs<ExtArgs>>): Prisma__CashlessAccountClient<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashlessAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashlessAccountFindFirstOrThrowArgs} args - Arguments to find a CashlessAccount
     * @example
     * // Get one CashlessAccount
     * const cashlessAccount = await prisma.cashlessAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashlessAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CashlessAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashlessAccountClient<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashlessAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashlessAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashlessAccounts
     * const cashlessAccounts = await prisma.cashlessAccount.findMany()
     * 
     * // Get first 10 CashlessAccounts
     * const cashlessAccounts = await prisma.cashlessAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashlessAccountWithIdOnly = await prisma.cashlessAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashlessAccountFindManyArgs>(args?: SelectSubset<T, CashlessAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashlessAccount.
     * @param {CashlessAccountCreateArgs} args - Arguments to create a CashlessAccount.
     * @example
     * // Create one CashlessAccount
     * const CashlessAccount = await prisma.cashlessAccount.create({
     *   data: {
     *     // ... data to create a CashlessAccount
     *   }
     * })
     * 
     */
    create<T extends CashlessAccountCreateArgs>(args: SelectSubset<T, CashlessAccountCreateArgs<ExtArgs>>): Prisma__CashlessAccountClient<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashlessAccounts.
     * @param {CashlessAccountCreateManyArgs} args - Arguments to create many CashlessAccounts.
     * @example
     * // Create many CashlessAccounts
     * const cashlessAccount = await prisma.cashlessAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashlessAccountCreateManyArgs>(args?: SelectSubset<T, CashlessAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CashlessAccount.
     * @param {CashlessAccountDeleteArgs} args - Arguments to delete one CashlessAccount.
     * @example
     * // Delete one CashlessAccount
     * const CashlessAccount = await prisma.cashlessAccount.delete({
     *   where: {
     *     // ... filter to delete one CashlessAccount
     *   }
     * })
     * 
     */
    delete<T extends CashlessAccountDeleteArgs>(args: SelectSubset<T, CashlessAccountDeleteArgs<ExtArgs>>): Prisma__CashlessAccountClient<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashlessAccount.
     * @param {CashlessAccountUpdateArgs} args - Arguments to update one CashlessAccount.
     * @example
     * // Update one CashlessAccount
     * const cashlessAccount = await prisma.cashlessAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashlessAccountUpdateArgs>(args: SelectSubset<T, CashlessAccountUpdateArgs<ExtArgs>>): Prisma__CashlessAccountClient<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashlessAccounts.
     * @param {CashlessAccountDeleteManyArgs} args - Arguments to filter CashlessAccounts to delete.
     * @example
     * // Delete a few CashlessAccounts
     * const { count } = await prisma.cashlessAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashlessAccountDeleteManyArgs>(args?: SelectSubset<T, CashlessAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashlessAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashlessAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashlessAccounts
     * const cashlessAccount = await prisma.cashlessAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashlessAccountUpdateManyArgs>(args: SelectSubset<T, CashlessAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CashlessAccount.
     * @param {CashlessAccountUpsertArgs} args - Arguments to update or create a CashlessAccount.
     * @example
     * // Update or create a CashlessAccount
     * const cashlessAccount = await prisma.cashlessAccount.upsert({
     *   create: {
     *     // ... data to create a CashlessAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashlessAccount we want to update
     *   }
     * })
     */
    upsert<T extends CashlessAccountUpsertArgs>(args: SelectSubset<T, CashlessAccountUpsertArgs<ExtArgs>>): Prisma__CashlessAccountClient<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashlessAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashlessAccountCountArgs} args - Arguments to filter CashlessAccounts to count.
     * @example
     * // Count the number of CashlessAccounts
     * const count = await prisma.cashlessAccount.count({
     *   where: {
     *     // ... the filter for the CashlessAccounts we want to count
     *   }
     * })
    **/
    count<T extends CashlessAccountCountArgs>(
      args?: Subset<T, CashlessAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashlessAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashlessAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashlessAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CashlessAccountAggregateArgs>(args: Subset<T, CashlessAccountAggregateArgs>): Prisma.PrismaPromise<GetCashlessAccountAggregateType<T>>

    /**
     * Group by CashlessAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashlessAccountGroupByArgs} args - Group by arguments.
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
      T extends CashlessAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashlessAccountGroupByArgs['orderBy'] }
        : { orderBy?: CashlessAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CashlessAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashlessAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashlessAccount model
   */
  readonly fields: CashlessAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashlessAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashlessAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CashlessAccount model
   */
  interface CashlessAccountFieldRefs {
    readonly id: FieldRef<"CashlessAccount", 'Int'>
    readonly bankName: FieldRef<"CashlessAccount", 'String'>
    readonly accountNumber: FieldRef<"CashlessAccount", 'String'>
    readonly accountHolderName: FieldRef<"CashlessAccount", 'String'>
    readonly bankLogoUrl: FieldRef<"CashlessAccount", 'String'>
    readonly qrCodeUrl: FieldRef<"CashlessAccount", 'String'>
    readonly sortOrder: FieldRef<"CashlessAccount", 'Int'>
    readonly isActive: FieldRef<"CashlessAccount", 'Boolean'>
    readonly createdAt: FieldRef<"CashlessAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"CashlessAccount", 'DateTime'>
    readonly invitationId: FieldRef<"CashlessAccount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CashlessAccount findUnique
   */
  export type CashlessAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    /**
     * Filter, which CashlessAccount to fetch.
     */
    where: CashlessAccountWhereUniqueInput
  }

  /**
   * CashlessAccount findUniqueOrThrow
   */
  export type CashlessAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    /**
     * Filter, which CashlessAccount to fetch.
     */
    where: CashlessAccountWhereUniqueInput
  }

  /**
   * CashlessAccount findFirst
   */
  export type CashlessAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    /**
     * Filter, which CashlessAccount to fetch.
     */
    where?: CashlessAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashlessAccounts to fetch.
     */
    orderBy?: CashlessAccountOrderByWithRelationInput | CashlessAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashlessAccounts.
     */
    cursor?: CashlessAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashlessAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashlessAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashlessAccounts.
     */
    distinct?: CashlessAccountScalarFieldEnum | CashlessAccountScalarFieldEnum[]
  }

  /**
   * CashlessAccount findFirstOrThrow
   */
  export type CashlessAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    /**
     * Filter, which CashlessAccount to fetch.
     */
    where?: CashlessAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashlessAccounts to fetch.
     */
    orderBy?: CashlessAccountOrderByWithRelationInput | CashlessAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashlessAccounts.
     */
    cursor?: CashlessAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashlessAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashlessAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashlessAccounts.
     */
    distinct?: CashlessAccountScalarFieldEnum | CashlessAccountScalarFieldEnum[]
  }

  /**
   * CashlessAccount findMany
   */
  export type CashlessAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    /**
     * Filter, which CashlessAccounts to fetch.
     */
    where?: CashlessAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashlessAccounts to fetch.
     */
    orderBy?: CashlessAccountOrderByWithRelationInput | CashlessAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashlessAccounts.
     */
    cursor?: CashlessAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashlessAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashlessAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashlessAccounts.
     */
    distinct?: CashlessAccountScalarFieldEnum | CashlessAccountScalarFieldEnum[]
  }

  /**
   * CashlessAccount create
   */
  export type CashlessAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a CashlessAccount.
     */
    data: XOR<CashlessAccountCreateInput, CashlessAccountUncheckedCreateInput>
  }

  /**
   * CashlessAccount createMany
   */
  export type CashlessAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashlessAccounts.
     */
    data: CashlessAccountCreateManyInput | CashlessAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashlessAccount update
   */
  export type CashlessAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a CashlessAccount.
     */
    data: XOR<CashlessAccountUpdateInput, CashlessAccountUncheckedUpdateInput>
    /**
     * Choose, which CashlessAccount to update.
     */
    where: CashlessAccountWhereUniqueInput
  }

  /**
   * CashlessAccount updateMany
   */
  export type CashlessAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashlessAccounts.
     */
    data: XOR<CashlessAccountUpdateManyMutationInput, CashlessAccountUncheckedUpdateManyInput>
    /**
     * Filter which CashlessAccounts to update
     */
    where?: CashlessAccountWhereInput
    /**
     * Limit how many CashlessAccounts to update.
     */
    limit?: number
  }

  /**
   * CashlessAccount upsert
   */
  export type CashlessAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the CashlessAccount to update in case it exists.
     */
    where: CashlessAccountWhereUniqueInput
    /**
     * In case the CashlessAccount found by the `where` argument doesn't exist, create a new CashlessAccount with this data.
     */
    create: XOR<CashlessAccountCreateInput, CashlessAccountUncheckedCreateInput>
    /**
     * In case the CashlessAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashlessAccountUpdateInput, CashlessAccountUncheckedUpdateInput>
  }

  /**
   * CashlessAccount delete
   */
  export type CashlessAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
    /**
     * Filter which CashlessAccount to delete.
     */
    where: CashlessAccountWhereUniqueInput
  }

  /**
   * CashlessAccount deleteMany
   */
  export type CashlessAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashlessAccounts to delete
     */
    where?: CashlessAccountWhereInput
    /**
     * Limit how many CashlessAccounts to delete.
     */
    limit?: number
  }

  /**
   * CashlessAccount without action
   */
  export type CashlessAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashlessAccount
     */
    select?: CashlessAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashlessAccount
     */
    omit?: CashlessAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashlessAccountInclude<ExtArgs> | null
  }


  /**
   * Model GiftAddress
   */

  export type AggregateGiftAddress = {
    _count: GiftAddressCountAggregateOutputType | null
    _avg: GiftAddressAvgAggregateOutputType | null
    _sum: GiftAddressSumAggregateOutputType | null
    _min: GiftAddressMinAggregateOutputType | null
    _max: GiftAddressMaxAggregateOutputType | null
  }

  export type GiftAddressAvgAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type GiftAddressSumAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type GiftAddressMinAggregateOutputType = {
    id: number | null
    label: string | null
    recipientName: string | null
    phone: string | null
    address: string | null
    postalCode: string | null
    note: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type GiftAddressMaxAggregateOutputType = {
    id: number | null
    label: string | null
    recipientName: string | null
    phone: string | null
    address: string | null
    postalCode: string | null
    note: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type GiftAddressCountAggregateOutputType = {
    id: number
    label: number
    recipientName: number
    phone: number
    address: number
    postalCode: number
    note: number
    isActive: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type GiftAddressAvgAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type GiftAddressSumAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type GiftAddressMinAggregateInputType = {
    id?: true
    label?: true
    recipientName?: true
    phone?: true
    address?: true
    postalCode?: true
    note?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type GiftAddressMaxAggregateInputType = {
    id?: true
    label?: true
    recipientName?: true
    phone?: true
    address?: true
    postalCode?: true
    note?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type GiftAddressCountAggregateInputType = {
    id?: true
    label?: true
    recipientName?: true
    phone?: true
    address?: true
    postalCode?: true
    note?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    _all?: true
  }

  export type GiftAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiftAddress to aggregate.
     */
    where?: GiftAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftAddresses to fetch.
     */
    orderBy?: GiftAddressOrderByWithRelationInput | GiftAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiftAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GiftAddresses
    **/
    _count?: true | GiftAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiftAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiftAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftAddressMaxAggregateInputType
  }

  export type GetGiftAddressAggregateType<T extends GiftAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateGiftAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiftAddress[P]>
      : GetScalarType<T[P], AggregateGiftAddress[P]>
  }




  export type GiftAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftAddressWhereInput
    orderBy?: GiftAddressOrderByWithAggregationInput | GiftAddressOrderByWithAggregationInput[]
    by: GiftAddressScalarFieldEnum[] | GiftAddressScalarFieldEnum
    having?: GiftAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftAddressCountAggregateInputType | true
    _avg?: GiftAddressAvgAggregateInputType
    _sum?: GiftAddressSumAggregateInputType
    _min?: GiftAddressMinAggregateInputType
    _max?: GiftAddressMaxAggregateInputType
  }

  export type GiftAddressGroupByOutputType = {
    id: number
    label: string
    recipientName: string
    phone: string | null
    address: string
    postalCode: string | null
    note: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    invitationId: number
    _count: GiftAddressCountAggregateOutputType | null
    _avg: GiftAddressAvgAggregateOutputType | null
    _sum: GiftAddressSumAggregateOutputType | null
    _min: GiftAddressMinAggregateOutputType | null
    _max: GiftAddressMaxAggregateOutputType | null
  }

  type GetGiftAddressGroupByPayload<T extends GiftAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiftAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftAddressGroupByOutputType[P]>
            : GetScalarType<T[P], GiftAddressGroupByOutputType[P]>
        }
      >
    >


  export type GiftAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    recipientName?: boolean
    phone?: boolean
    address?: boolean
    postalCode?: boolean
    note?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giftAddress"]>



  export type GiftAddressSelectScalar = {
    id?: boolean
    label?: boolean
    recipientName?: boolean
    phone?: boolean
    address?: boolean
    postalCode?: boolean
    note?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type GiftAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "recipientName" | "phone" | "address" | "postalCode" | "note" | "isActive" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["giftAddress"]>
  export type GiftAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $GiftAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GiftAddress"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      recipientName: string
      phone: string | null
      address: string
      postalCode: string | null
      note: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      invitationId: number
    }, ExtArgs["result"]["giftAddress"]>
    composites: {}
  }

  type GiftAddressGetPayload<S extends boolean | null | undefined | GiftAddressDefaultArgs> = $Result.GetResult<Prisma.$GiftAddressPayload, S>

  type GiftAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiftAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiftAddressCountAggregateInputType | true
    }

  export interface GiftAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GiftAddress'], meta: { name: 'GiftAddress' } }
    /**
     * Find zero or one GiftAddress that matches the filter.
     * @param {GiftAddressFindUniqueArgs} args - Arguments to find a GiftAddress
     * @example
     * // Get one GiftAddress
     * const giftAddress = await prisma.giftAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiftAddressFindUniqueArgs>(args: SelectSubset<T, GiftAddressFindUniqueArgs<ExtArgs>>): Prisma__GiftAddressClient<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GiftAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiftAddressFindUniqueOrThrowArgs} args - Arguments to find a GiftAddress
     * @example
     * // Get one GiftAddress
     * const giftAddress = await prisma.giftAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiftAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, GiftAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiftAddressClient<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiftAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAddressFindFirstArgs} args - Arguments to find a GiftAddress
     * @example
     * // Get one GiftAddress
     * const giftAddress = await prisma.giftAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiftAddressFindFirstArgs>(args?: SelectSubset<T, GiftAddressFindFirstArgs<ExtArgs>>): Prisma__GiftAddressClient<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiftAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAddressFindFirstOrThrowArgs} args - Arguments to find a GiftAddress
     * @example
     * // Get one GiftAddress
     * const giftAddress = await prisma.giftAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiftAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, GiftAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiftAddressClient<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GiftAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GiftAddresses
     * const giftAddresses = await prisma.giftAddress.findMany()
     * 
     * // Get first 10 GiftAddresses
     * const giftAddresses = await prisma.giftAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const giftAddressWithIdOnly = await prisma.giftAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GiftAddressFindManyArgs>(args?: SelectSubset<T, GiftAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GiftAddress.
     * @param {GiftAddressCreateArgs} args - Arguments to create a GiftAddress.
     * @example
     * // Create one GiftAddress
     * const GiftAddress = await prisma.giftAddress.create({
     *   data: {
     *     // ... data to create a GiftAddress
     *   }
     * })
     * 
     */
    create<T extends GiftAddressCreateArgs>(args: SelectSubset<T, GiftAddressCreateArgs<ExtArgs>>): Prisma__GiftAddressClient<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GiftAddresses.
     * @param {GiftAddressCreateManyArgs} args - Arguments to create many GiftAddresses.
     * @example
     * // Create many GiftAddresses
     * const giftAddress = await prisma.giftAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiftAddressCreateManyArgs>(args?: SelectSubset<T, GiftAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GiftAddress.
     * @param {GiftAddressDeleteArgs} args - Arguments to delete one GiftAddress.
     * @example
     * // Delete one GiftAddress
     * const GiftAddress = await prisma.giftAddress.delete({
     *   where: {
     *     // ... filter to delete one GiftAddress
     *   }
     * })
     * 
     */
    delete<T extends GiftAddressDeleteArgs>(args: SelectSubset<T, GiftAddressDeleteArgs<ExtArgs>>): Prisma__GiftAddressClient<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GiftAddress.
     * @param {GiftAddressUpdateArgs} args - Arguments to update one GiftAddress.
     * @example
     * // Update one GiftAddress
     * const giftAddress = await prisma.giftAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiftAddressUpdateArgs>(args: SelectSubset<T, GiftAddressUpdateArgs<ExtArgs>>): Prisma__GiftAddressClient<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GiftAddresses.
     * @param {GiftAddressDeleteManyArgs} args - Arguments to filter GiftAddresses to delete.
     * @example
     * // Delete a few GiftAddresses
     * const { count } = await prisma.giftAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiftAddressDeleteManyArgs>(args?: SelectSubset<T, GiftAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiftAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GiftAddresses
     * const giftAddress = await prisma.giftAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiftAddressUpdateManyArgs>(args: SelectSubset<T, GiftAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GiftAddress.
     * @param {GiftAddressUpsertArgs} args - Arguments to update or create a GiftAddress.
     * @example
     * // Update or create a GiftAddress
     * const giftAddress = await prisma.giftAddress.upsert({
     *   create: {
     *     // ... data to create a GiftAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GiftAddress we want to update
     *   }
     * })
     */
    upsert<T extends GiftAddressUpsertArgs>(args: SelectSubset<T, GiftAddressUpsertArgs<ExtArgs>>): Prisma__GiftAddressClient<$Result.GetResult<Prisma.$GiftAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GiftAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAddressCountArgs} args - Arguments to filter GiftAddresses to count.
     * @example
     * // Count the number of GiftAddresses
     * const count = await prisma.giftAddress.count({
     *   where: {
     *     // ... the filter for the GiftAddresses we want to count
     *   }
     * })
    **/
    count<T extends GiftAddressCountArgs>(
      args?: Subset<T, GiftAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GiftAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GiftAddressAggregateArgs>(args: Subset<T, GiftAddressAggregateArgs>): Prisma.PrismaPromise<GetGiftAddressAggregateType<T>>

    /**
     * Group by GiftAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAddressGroupByArgs} args - Group by arguments.
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
      T extends GiftAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiftAddressGroupByArgs['orderBy'] }
        : { orderBy?: GiftAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GiftAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GiftAddress model
   */
  readonly fields: GiftAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GiftAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiftAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GiftAddress model
   */
  interface GiftAddressFieldRefs {
    readonly id: FieldRef<"GiftAddress", 'Int'>
    readonly label: FieldRef<"GiftAddress", 'String'>
    readonly recipientName: FieldRef<"GiftAddress", 'String'>
    readonly phone: FieldRef<"GiftAddress", 'String'>
    readonly address: FieldRef<"GiftAddress", 'String'>
    readonly postalCode: FieldRef<"GiftAddress", 'String'>
    readonly note: FieldRef<"GiftAddress", 'String'>
    readonly isActive: FieldRef<"GiftAddress", 'Boolean'>
    readonly createdAt: FieldRef<"GiftAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"GiftAddress", 'DateTime'>
    readonly invitationId: FieldRef<"GiftAddress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GiftAddress findUnique
   */
  export type GiftAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    /**
     * Filter, which GiftAddress to fetch.
     */
    where: GiftAddressWhereUniqueInput
  }

  /**
   * GiftAddress findUniqueOrThrow
   */
  export type GiftAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    /**
     * Filter, which GiftAddress to fetch.
     */
    where: GiftAddressWhereUniqueInput
  }

  /**
   * GiftAddress findFirst
   */
  export type GiftAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    /**
     * Filter, which GiftAddress to fetch.
     */
    where?: GiftAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftAddresses to fetch.
     */
    orderBy?: GiftAddressOrderByWithRelationInput | GiftAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftAddresses.
     */
    cursor?: GiftAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftAddresses.
     */
    distinct?: GiftAddressScalarFieldEnum | GiftAddressScalarFieldEnum[]
  }

  /**
   * GiftAddress findFirstOrThrow
   */
  export type GiftAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    /**
     * Filter, which GiftAddress to fetch.
     */
    where?: GiftAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftAddresses to fetch.
     */
    orderBy?: GiftAddressOrderByWithRelationInput | GiftAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftAddresses.
     */
    cursor?: GiftAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftAddresses.
     */
    distinct?: GiftAddressScalarFieldEnum | GiftAddressScalarFieldEnum[]
  }

  /**
   * GiftAddress findMany
   */
  export type GiftAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    /**
     * Filter, which GiftAddresses to fetch.
     */
    where?: GiftAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftAddresses to fetch.
     */
    orderBy?: GiftAddressOrderByWithRelationInput | GiftAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GiftAddresses.
     */
    cursor?: GiftAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftAddresses.
     */
    distinct?: GiftAddressScalarFieldEnum | GiftAddressScalarFieldEnum[]
  }

  /**
   * GiftAddress create
   */
  export type GiftAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a GiftAddress.
     */
    data: XOR<GiftAddressCreateInput, GiftAddressUncheckedCreateInput>
  }

  /**
   * GiftAddress createMany
   */
  export type GiftAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GiftAddresses.
     */
    data: GiftAddressCreateManyInput | GiftAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GiftAddress update
   */
  export type GiftAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a GiftAddress.
     */
    data: XOR<GiftAddressUpdateInput, GiftAddressUncheckedUpdateInput>
    /**
     * Choose, which GiftAddress to update.
     */
    where: GiftAddressWhereUniqueInput
  }

  /**
   * GiftAddress updateMany
   */
  export type GiftAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GiftAddresses.
     */
    data: XOR<GiftAddressUpdateManyMutationInput, GiftAddressUncheckedUpdateManyInput>
    /**
     * Filter which GiftAddresses to update
     */
    where?: GiftAddressWhereInput
    /**
     * Limit how many GiftAddresses to update.
     */
    limit?: number
  }

  /**
   * GiftAddress upsert
   */
  export type GiftAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the GiftAddress to update in case it exists.
     */
    where: GiftAddressWhereUniqueInput
    /**
     * In case the GiftAddress found by the `where` argument doesn't exist, create a new GiftAddress with this data.
     */
    create: XOR<GiftAddressCreateInput, GiftAddressUncheckedCreateInput>
    /**
     * In case the GiftAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiftAddressUpdateInput, GiftAddressUncheckedUpdateInput>
  }

  /**
   * GiftAddress delete
   */
  export type GiftAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
    /**
     * Filter which GiftAddress to delete.
     */
    where: GiftAddressWhereUniqueInput
  }

  /**
   * GiftAddress deleteMany
   */
  export type GiftAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiftAddresses to delete
     */
    where?: GiftAddressWhereInput
    /**
     * Limit how many GiftAddresses to delete.
     */
    limit?: number
  }

  /**
   * GiftAddress without action
   */
  export type GiftAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftAddress
     */
    select?: GiftAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftAddress
     */
    omit?: GiftAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftAddressInclude<ExtArgs> | null
  }


  /**
   * Model StoryImage
   */

  export type AggregateStoryImage = {
    _count: StoryImageCountAggregateOutputType | null
    _avg: StoryImageAvgAggregateOutputType | null
    _sum: StoryImageSumAggregateOutputType | null
    _min: StoryImageMinAggregateOutputType | null
    _max: StoryImageMaxAggregateOutputType | null
  }

  export type StoryImageAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    storyItemId: number | null
  }

  export type StoryImageSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    storyItemId: number | null
  }

  export type StoryImageMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    caption: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
    storyItemId: number | null
  }

  export type StoryImageMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    caption: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
    storyItemId: number | null
  }

  export type StoryImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    caption: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    storyItemId: number
    _all: number
  }


  export type StoryImageAvgAggregateInputType = {
    id?: true
    sortOrder?: true
    storyItemId?: true
  }

  export type StoryImageSumAggregateInputType = {
    id?: true
    sortOrder?: true
    storyItemId?: true
  }

  export type StoryImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    caption?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    storyItemId?: true
  }

  export type StoryImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    caption?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    storyItemId?: true
  }

  export type StoryImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    caption?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    storyItemId?: true
    _all?: true
  }

  export type StoryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryImage to aggregate.
     */
    where?: StoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryImages to fetch.
     */
    orderBy?: StoryImageOrderByWithRelationInput | StoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoryImages
    **/
    _count?: true | StoryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryImageMaxAggregateInputType
  }

  export type GetStoryImageAggregateType<T extends StoryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateStoryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoryImage[P]>
      : GetScalarType<T[P], AggregateStoryImage[P]>
  }




  export type StoryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryImageWhereInput
    orderBy?: StoryImageOrderByWithAggregationInput | StoryImageOrderByWithAggregationInput[]
    by: StoryImageScalarFieldEnum[] | StoryImageScalarFieldEnum
    having?: StoryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryImageCountAggregateInputType | true
    _avg?: StoryImageAvgAggregateInputType
    _sum?: StoryImageSumAggregateInputType
    _min?: StoryImageMinAggregateInputType
    _max?: StoryImageMaxAggregateInputType
  }

  export type StoryImageGroupByOutputType = {
    id: number
    imageUrl: string
    caption: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    storyItemId: number
    _count: StoryImageCountAggregateOutputType | null
    _avg: StoryImageAvgAggregateOutputType | null
    _sum: StoryImageSumAggregateOutputType | null
    _min: StoryImageMinAggregateOutputType | null
    _max: StoryImageMaxAggregateOutputType | null
  }

  type GetStoryImageGroupByPayload<T extends StoryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryImageGroupByOutputType[P]>
            : GetScalarType<T[P], StoryImageGroupByOutputType[P]>
        }
      >
    >


  export type StoryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    caption?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    storyItemId?: boolean
    storyItem?: boolean | StoryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyImage"]>



  export type StoryImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    caption?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    storyItemId?: boolean
  }

  export type StoryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "caption" | "sortOrder" | "createdAt" | "updatedAt" | "storyItemId", ExtArgs["result"]["storyImage"]>
  export type StoryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storyItem?: boolean | StoryItemDefaultArgs<ExtArgs>
  }

  export type $StoryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoryImage"
    objects: {
      storyItem: Prisma.$StoryItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      caption: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
      storyItemId: number
    }, ExtArgs["result"]["storyImage"]>
    composites: {}
  }

  type StoryImageGetPayload<S extends boolean | null | undefined | StoryImageDefaultArgs> = $Result.GetResult<Prisma.$StoryImagePayload, S>

  type StoryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryImageCountAggregateInputType | true
    }

  export interface StoryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoryImage'], meta: { name: 'StoryImage' } }
    /**
     * Find zero or one StoryImage that matches the filter.
     * @param {StoryImageFindUniqueArgs} args - Arguments to find a StoryImage
     * @example
     * // Get one StoryImage
     * const storyImage = await prisma.storyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryImageFindUniqueArgs>(args: SelectSubset<T, StoryImageFindUniqueArgs<ExtArgs>>): Prisma__StoryImageClient<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryImageFindUniqueOrThrowArgs} args - Arguments to find a StoryImage
     * @example
     * // Get one StoryImage
     * const storyImage = await prisma.storyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryImageClient<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryImageFindFirstArgs} args - Arguments to find a StoryImage
     * @example
     * // Get one StoryImage
     * const storyImage = await prisma.storyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryImageFindFirstArgs>(args?: SelectSubset<T, StoryImageFindFirstArgs<ExtArgs>>): Prisma__StoryImageClient<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryImageFindFirstOrThrowArgs} args - Arguments to find a StoryImage
     * @example
     * // Get one StoryImage
     * const storyImage = await prisma.storyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryImageClient<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoryImages
     * const storyImages = await prisma.storyImage.findMany()
     * 
     * // Get first 10 StoryImages
     * const storyImages = await prisma.storyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyImageWithIdOnly = await prisma.storyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryImageFindManyArgs>(args?: SelectSubset<T, StoryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoryImage.
     * @param {StoryImageCreateArgs} args - Arguments to create a StoryImage.
     * @example
     * // Create one StoryImage
     * const StoryImage = await prisma.storyImage.create({
     *   data: {
     *     // ... data to create a StoryImage
     *   }
     * })
     * 
     */
    create<T extends StoryImageCreateArgs>(args: SelectSubset<T, StoryImageCreateArgs<ExtArgs>>): Prisma__StoryImageClient<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoryImages.
     * @param {StoryImageCreateManyArgs} args - Arguments to create many StoryImages.
     * @example
     * // Create many StoryImages
     * const storyImage = await prisma.storyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryImageCreateManyArgs>(args?: SelectSubset<T, StoryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoryImage.
     * @param {StoryImageDeleteArgs} args - Arguments to delete one StoryImage.
     * @example
     * // Delete one StoryImage
     * const StoryImage = await prisma.storyImage.delete({
     *   where: {
     *     // ... filter to delete one StoryImage
     *   }
     * })
     * 
     */
    delete<T extends StoryImageDeleteArgs>(args: SelectSubset<T, StoryImageDeleteArgs<ExtArgs>>): Prisma__StoryImageClient<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoryImage.
     * @param {StoryImageUpdateArgs} args - Arguments to update one StoryImage.
     * @example
     * // Update one StoryImage
     * const storyImage = await prisma.storyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryImageUpdateArgs>(args: SelectSubset<T, StoryImageUpdateArgs<ExtArgs>>): Prisma__StoryImageClient<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoryImages.
     * @param {StoryImageDeleteManyArgs} args - Arguments to filter StoryImages to delete.
     * @example
     * // Delete a few StoryImages
     * const { count } = await prisma.storyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryImageDeleteManyArgs>(args?: SelectSubset<T, StoryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoryImages
     * const storyImage = await prisma.storyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryImageUpdateManyArgs>(args: SelectSubset<T, StoryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoryImage.
     * @param {StoryImageUpsertArgs} args - Arguments to update or create a StoryImage.
     * @example
     * // Update or create a StoryImage
     * const storyImage = await prisma.storyImage.upsert({
     *   create: {
     *     // ... data to create a StoryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoryImage we want to update
     *   }
     * })
     */
    upsert<T extends StoryImageUpsertArgs>(args: SelectSubset<T, StoryImageUpsertArgs<ExtArgs>>): Prisma__StoryImageClient<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryImageCountArgs} args - Arguments to filter StoryImages to count.
     * @example
     * // Count the number of StoryImages
     * const count = await prisma.storyImage.count({
     *   where: {
     *     // ... the filter for the StoryImages we want to count
     *   }
     * })
    **/
    count<T extends StoryImageCountArgs>(
      args?: Subset<T, StoryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryImageAggregateArgs>(args: Subset<T, StoryImageAggregateArgs>): Prisma.PrismaPromise<GetStoryImageAggregateType<T>>

    /**
     * Group by StoryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryImageGroupByArgs} args - Group by arguments.
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
      T extends StoryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryImageGroupByArgs['orderBy'] }
        : { orderBy?: StoryImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoryImage model
   */
  readonly fields: StoryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    storyItem<T extends StoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryItemDefaultArgs<ExtArgs>>): Prisma__StoryItemClient<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StoryImage model
   */
  interface StoryImageFieldRefs {
    readonly id: FieldRef<"StoryImage", 'Int'>
    readonly imageUrl: FieldRef<"StoryImage", 'String'>
    readonly caption: FieldRef<"StoryImage", 'String'>
    readonly sortOrder: FieldRef<"StoryImage", 'Int'>
    readonly createdAt: FieldRef<"StoryImage", 'DateTime'>
    readonly updatedAt: FieldRef<"StoryImage", 'DateTime'>
    readonly storyItemId: FieldRef<"StoryImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StoryImage findUnique
   */
  export type StoryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    /**
     * Filter, which StoryImage to fetch.
     */
    where: StoryImageWhereUniqueInput
  }

  /**
   * StoryImage findUniqueOrThrow
   */
  export type StoryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    /**
     * Filter, which StoryImage to fetch.
     */
    where: StoryImageWhereUniqueInput
  }

  /**
   * StoryImage findFirst
   */
  export type StoryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    /**
     * Filter, which StoryImage to fetch.
     */
    where?: StoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryImages to fetch.
     */
    orderBy?: StoryImageOrderByWithRelationInput | StoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryImages.
     */
    cursor?: StoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryImages.
     */
    distinct?: StoryImageScalarFieldEnum | StoryImageScalarFieldEnum[]
  }

  /**
   * StoryImage findFirstOrThrow
   */
  export type StoryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    /**
     * Filter, which StoryImage to fetch.
     */
    where?: StoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryImages to fetch.
     */
    orderBy?: StoryImageOrderByWithRelationInput | StoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryImages.
     */
    cursor?: StoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryImages.
     */
    distinct?: StoryImageScalarFieldEnum | StoryImageScalarFieldEnum[]
  }

  /**
   * StoryImage findMany
   */
  export type StoryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    /**
     * Filter, which StoryImages to fetch.
     */
    where?: StoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryImages to fetch.
     */
    orderBy?: StoryImageOrderByWithRelationInput | StoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoryImages.
     */
    cursor?: StoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryImages.
     */
    distinct?: StoryImageScalarFieldEnum | StoryImageScalarFieldEnum[]
  }

  /**
   * StoryImage create
   */
  export type StoryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a StoryImage.
     */
    data: XOR<StoryImageCreateInput, StoryImageUncheckedCreateInput>
  }

  /**
   * StoryImage createMany
   */
  export type StoryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoryImages.
     */
    data: StoryImageCreateManyInput | StoryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoryImage update
   */
  export type StoryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a StoryImage.
     */
    data: XOR<StoryImageUpdateInput, StoryImageUncheckedUpdateInput>
    /**
     * Choose, which StoryImage to update.
     */
    where: StoryImageWhereUniqueInput
  }

  /**
   * StoryImage updateMany
   */
  export type StoryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoryImages.
     */
    data: XOR<StoryImageUpdateManyMutationInput, StoryImageUncheckedUpdateManyInput>
    /**
     * Filter which StoryImages to update
     */
    where?: StoryImageWhereInput
    /**
     * Limit how many StoryImages to update.
     */
    limit?: number
  }

  /**
   * StoryImage upsert
   */
  export type StoryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the StoryImage to update in case it exists.
     */
    where: StoryImageWhereUniqueInput
    /**
     * In case the StoryImage found by the `where` argument doesn't exist, create a new StoryImage with this data.
     */
    create: XOR<StoryImageCreateInput, StoryImageUncheckedCreateInput>
    /**
     * In case the StoryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryImageUpdateInput, StoryImageUncheckedUpdateInput>
  }

  /**
   * StoryImage delete
   */
  export type StoryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    /**
     * Filter which StoryImage to delete.
     */
    where: StoryImageWhereUniqueInput
  }

  /**
   * StoryImage deleteMany
   */
  export type StoryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryImages to delete
     */
    where?: StoryImageWhereInput
    /**
     * Limit how many StoryImages to delete.
     */
    limit?: number
  }

  /**
   * StoryImage without action
   */
  export type StoryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
  }


  /**
   * Model InvitationConfig
   */

  export type AggregateInvitationConfig = {
    _count: InvitationConfigCountAggregateOutputType | null
    _avg: InvitationConfigAvgAggregateOutputType | null
    _sum: InvitationConfigSumAggregateOutputType | null
    _min: InvitationConfigMinAggregateOutputType | null
    _max: InvitationConfigMaxAggregateOutputType | null
  }

  export type InvitationConfigAvgAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type InvitationConfigSumAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type InvitationConfigMinAggregateOutputType = {
    id: number | null
    heroCoupleNames: string | null
    heroOpeningLine: string | null
    heroWeddingDateText: string | null
    heroBackgroundImage: string | null
    weddingDate: Date | null
    primaryColor: string | null
    secondaryColor: string | null
    backgroundColor: string | null
    textColor: string | null
    backgroundMusicUrl: string | null
    footerGreeting: string | null
    footerClosingText: string | null
    lockedLandingEnabled: boolean | null
    lockedLandingButtonText: string | null
    lockedLandingGreeting: string | null
    musicEnabled: boolean | null
    musicButtonPosition: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type InvitationConfigMaxAggregateOutputType = {
    id: number | null
    heroCoupleNames: string | null
    heroOpeningLine: string | null
    heroWeddingDateText: string | null
    heroBackgroundImage: string | null
    weddingDate: Date | null
    primaryColor: string | null
    secondaryColor: string | null
    backgroundColor: string | null
    textColor: string | null
    backgroundMusicUrl: string | null
    footerGreeting: string | null
    footerClosingText: string | null
    lockedLandingEnabled: boolean | null
    lockedLandingButtonText: string | null
    lockedLandingGreeting: string | null
    musicEnabled: boolean | null
    musicButtonPosition: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type InvitationConfigCountAggregateOutputType = {
    id: number
    heroCoupleNames: number
    heroOpeningLine: number
    heroWeddingDateText: number
    heroBackgroundImage: number
    weddingDate: number
    primaryColor: number
    secondaryColor: number
    backgroundColor: number
    textColor: number
    backgroundMusicUrl: number
    footerGreeting: number
    footerClosingText: number
    lockedLandingEnabled: number
    lockedLandingButtonText: number
    lockedLandingGreeting: number
    musicEnabled: number
    musicButtonPosition: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type InvitationConfigAvgAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type InvitationConfigSumAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type InvitationConfigMinAggregateInputType = {
    id?: true
    heroCoupleNames?: true
    heroOpeningLine?: true
    heroWeddingDateText?: true
    heroBackgroundImage?: true
    weddingDate?: true
    primaryColor?: true
    secondaryColor?: true
    backgroundColor?: true
    textColor?: true
    backgroundMusicUrl?: true
    footerGreeting?: true
    footerClosingText?: true
    lockedLandingEnabled?: true
    lockedLandingButtonText?: true
    lockedLandingGreeting?: true
    musicEnabled?: true
    musicButtonPosition?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type InvitationConfigMaxAggregateInputType = {
    id?: true
    heroCoupleNames?: true
    heroOpeningLine?: true
    heroWeddingDateText?: true
    heroBackgroundImage?: true
    weddingDate?: true
    primaryColor?: true
    secondaryColor?: true
    backgroundColor?: true
    textColor?: true
    backgroundMusicUrl?: true
    footerGreeting?: true
    footerClosingText?: true
    lockedLandingEnabled?: true
    lockedLandingButtonText?: true
    lockedLandingGreeting?: true
    musicEnabled?: true
    musicButtonPosition?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type InvitationConfigCountAggregateInputType = {
    id?: true
    heroCoupleNames?: true
    heroOpeningLine?: true
    heroWeddingDateText?: true
    heroBackgroundImage?: true
    weddingDate?: true
    primaryColor?: true
    secondaryColor?: true
    backgroundColor?: true
    textColor?: true
    backgroundMusicUrl?: true
    footerGreeting?: true
    footerClosingText?: true
    lockedLandingEnabled?: true
    lockedLandingButtonText?: true
    lockedLandingGreeting?: true
    musicEnabled?: true
    musicButtonPosition?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    _all?: true
  }

  export type InvitationConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvitationConfig to aggregate.
     */
    where?: InvitationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitationConfigs to fetch.
     */
    orderBy?: InvitationConfigOrderByWithRelationInput | InvitationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvitationConfigs
    **/
    _count?: true | InvitationConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitationConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitationConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationConfigMaxAggregateInputType
  }

  export type GetInvitationConfigAggregateType<T extends InvitationConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitationConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitationConfig[P]>
      : GetScalarType<T[P], AggregateInvitationConfig[P]>
  }




  export type InvitationConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationConfigWhereInput
    orderBy?: InvitationConfigOrderByWithAggregationInput | InvitationConfigOrderByWithAggregationInput[]
    by: InvitationConfigScalarFieldEnum[] | InvitationConfigScalarFieldEnum
    having?: InvitationConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationConfigCountAggregateInputType | true
    _avg?: InvitationConfigAvgAggregateInputType
    _sum?: InvitationConfigSumAggregateInputType
    _min?: InvitationConfigMinAggregateInputType
    _max?: InvitationConfigMaxAggregateInputType
  }

  export type InvitationConfigGroupByOutputType = {
    id: number
    heroCoupleNames: string
    heroOpeningLine: string
    heroWeddingDateText: string
    heroBackgroundImage: string | null
    weddingDate: Date
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
    backgroundMusicUrl: string | null
    footerGreeting: string
    footerClosingText: string
    lockedLandingEnabled: boolean
    lockedLandingButtonText: string
    lockedLandingGreeting: string | null
    musicEnabled: boolean
    musicButtonPosition: string
    createdAt: Date
    updatedAt: Date
    invitationId: number
    _count: InvitationConfigCountAggregateOutputType | null
    _avg: InvitationConfigAvgAggregateOutputType | null
    _sum: InvitationConfigSumAggregateOutputType | null
    _min: InvitationConfigMinAggregateOutputType | null
    _max: InvitationConfigMaxAggregateOutputType | null
  }

  type GetInvitationConfigGroupByPayload<T extends InvitationConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationConfigGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationConfigGroupByOutputType[P]>
        }
      >
    >


  export type InvitationConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroCoupleNames?: boolean
    heroOpeningLine?: boolean
    heroWeddingDateText?: boolean
    heroBackgroundImage?: boolean
    weddingDate?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    backgroundMusicUrl?: boolean
    footerGreeting?: boolean
    footerClosingText?: boolean
    lockedLandingEnabled?: boolean
    lockedLandingButtonText?: boolean
    lockedLandingGreeting?: boolean
    musicEnabled?: boolean
    musicButtonPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitationConfig"]>



  export type InvitationConfigSelectScalar = {
    id?: boolean
    heroCoupleNames?: boolean
    heroOpeningLine?: boolean
    heroWeddingDateText?: boolean
    heroBackgroundImage?: boolean
    weddingDate?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    backgroundMusicUrl?: boolean
    footerGreeting?: boolean
    footerClosingText?: boolean
    lockedLandingEnabled?: boolean
    lockedLandingButtonText?: boolean
    lockedLandingGreeting?: boolean
    musicEnabled?: boolean
    musicButtonPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type InvitationConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "heroCoupleNames" | "heroOpeningLine" | "heroWeddingDateText" | "heroBackgroundImage" | "weddingDate" | "primaryColor" | "secondaryColor" | "backgroundColor" | "textColor" | "backgroundMusicUrl" | "footerGreeting" | "footerClosingText" | "lockedLandingEnabled" | "lockedLandingButtonText" | "lockedLandingGreeting" | "musicEnabled" | "musicButtonPosition" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["invitationConfig"]>
  export type InvitationConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $InvitationConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvitationConfig"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      heroCoupleNames: string
      heroOpeningLine: string
      heroWeddingDateText: string
      heroBackgroundImage: string | null
      weddingDate: Date
      primaryColor: string
      secondaryColor: string
      backgroundColor: string
      textColor: string
      backgroundMusicUrl: string | null
      footerGreeting: string
      footerClosingText: string
      lockedLandingEnabled: boolean
      lockedLandingButtonText: string
      lockedLandingGreeting: string | null
      musicEnabled: boolean
      musicButtonPosition: string
      createdAt: Date
      updatedAt: Date
      invitationId: number
    }, ExtArgs["result"]["invitationConfig"]>
    composites: {}
  }

  type InvitationConfigGetPayload<S extends boolean | null | undefined | InvitationConfigDefaultArgs> = $Result.GetResult<Prisma.$InvitationConfigPayload, S>

  type InvitationConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationConfigCountAggregateInputType | true
    }

  export interface InvitationConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvitationConfig'], meta: { name: 'InvitationConfig' } }
    /**
     * Find zero or one InvitationConfig that matches the filter.
     * @param {InvitationConfigFindUniqueArgs} args - Arguments to find a InvitationConfig
     * @example
     * // Get one InvitationConfig
     * const invitationConfig = await prisma.invitationConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationConfigFindUniqueArgs>(args: SelectSubset<T, InvitationConfigFindUniqueArgs<ExtArgs>>): Prisma__InvitationConfigClient<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvitationConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationConfigFindUniqueOrThrowArgs} args - Arguments to find a InvitationConfig
     * @example
     * // Get one InvitationConfig
     * const invitationConfig = await prisma.invitationConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationConfigClient<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvitationConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationConfigFindFirstArgs} args - Arguments to find a InvitationConfig
     * @example
     * // Get one InvitationConfig
     * const invitationConfig = await prisma.invitationConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationConfigFindFirstArgs>(args?: SelectSubset<T, InvitationConfigFindFirstArgs<ExtArgs>>): Prisma__InvitationConfigClient<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvitationConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationConfigFindFirstOrThrowArgs} args - Arguments to find a InvitationConfig
     * @example
     * // Get one InvitationConfig
     * const invitationConfig = await prisma.invitationConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationConfigClient<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvitationConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvitationConfigs
     * const invitationConfigs = await prisma.invitationConfig.findMany()
     * 
     * // Get first 10 InvitationConfigs
     * const invitationConfigs = await prisma.invitationConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationConfigWithIdOnly = await prisma.invitationConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationConfigFindManyArgs>(args?: SelectSubset<T, InvitationConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvitationConfig.
     * @param {InvitationConfigCreateArgs} args - Arguments to create a InvitationConfig.
     * @example
     * // Create one InvitationConfig
     * const InvitationConfig = await prisma.invitationConfig.create({
     *   data: {
     *     // ... data to create a InvitationConfig
     *   }
     * })
     * 
     */
    create<T extends InvitationConfigCreateArgs>(args: SelectSubset<T, InvitationConfigCreateArgs<ExtArgs>>): Prisma__InvitationConfigClient<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvitationConfigs.
     * @param {InvitationConfigCreateManyArgs} args - Arguments to create many InvitationConfigs.
     * @example
     * // Create many InvitationConfigs
     * const invitationConfig = await prisma.invitationConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationConfigCreateManyArgs>(args?: SelectSubset<T, InvitationConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InvitationConfig.
     * @param {InvitationConfigDeleteArgs} args - Arguments to delete one InvitationConfig.
     * @example
     * // Delete one InvitationConfig
     * const InvitationConfig = await prisma.invitationConfig.delete({
     *   where: {
     *     // ... filter to delete one InvitationConfig
     *   }
     * })
     * 
     */
    delete<T extends InvitationConfigDeleteArgs>(args: SelectSubset<T, InvitationConfigDeleteArgs<ExtArgs>>): Prisma__InvitationConfigClient<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvitationConfig.
     * @param {InvitationConfigUpdateArgs} args - Arguments to update one InvitationConfig.
     * @example
     * // Update one InvitationConfig
     * const invitationConfig = await prisma.invitationConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationConfigUpdateArgs>(args: SelectSubset<T, InvitationConfigUpdateArgs<ExtArgs>>): Prisma__InvitationConfigClient<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvitationConfigs.
     * @param {InvitationConfigDeleteManyArgs} args - Arguments to filter InvitationConfigs to delete.
     * @example
     * // Delete a few InvitationConfigs
     * const { count } = await prisma.invitationConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationConfigDeleteManyArgs>(args?: SelectSubset<T, InvitationConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvitationConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvitationConfigs
     * const invitationConfig = await prisma.invitationConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationConfigUpdateManyArgs>(args: SelectSubset<T, InvitationConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InvitationConfig.
     * @param {InvitationConfigUpsertArgs} args - Arguments to update or create a InvitationConfig.
     * @example
     * // Update or create a InvitationConfig
     * const invitationConfig = await prisma.invitationConfig.upsert({
     *   create: {
     *     // ... data to create a InvitationConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvitationConfig we want to update
     *   }
     * })
     */
    upsert<T extends InvitationConfigUpsertArgs>(args: SelectSubset<T, InvitationConfigUpsertArgs<ExtArgs>>): Prisma__InvitationConfigClient<$Result.GetResult<Prisma.$InvitationConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvitationConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationConfigCountArgs} args - Arguments to filter InvitationConfigs to count.
     * @example
     * // Count the number of InvitationConfigs
     * const count = await prisma.invitationConfig.count({
     *   where: {
     *     // ... the filter for the InvitationConfigs we want to count
     *   }
     * })
    **/
    count<T extends InvitationConfigCountArgs>(
      args?: Subset<T, InvitationConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvitationConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationConfigAggregateArgs>(args: Subset<T, InvitationConfigAggregateArgs>): Prisma.PrismaPromise<GetInvitationConfigAggregateType<T>>

    /**
     * Group by InvitationConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationConfigGroupByArgs} args - Group by arguments.
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
      T extends InvitationConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationConfigGroupByArgs['orderBy'] }
        : { orderBy?: InvitationConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvitationConfig model
   */
  readonly fields: InvitationConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvitationConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvitationConfig model
   */
  interface InvitationConfigFieldRefs {
    readonly id: FieldRef<"InvitationConfig", 'Int'>
    readonly heroCoupleNames: FieldRef<"InvitationConfig", 'String'>
    readonly heroOpeningLine: FieldRef<"InvitationConfig", 'String'>
    readonly heroWeddingDateText: FieldRef<"InvitationConfig", 'String'>
    readonly heroBackgroundImage: FieldRef<"InvitationConfig", 'String'>
    readonly weddingDate: FieldRef<"InvitationConfig", 'DateTime'>
    readonly primaryColor: FieldRef<"InvitationConfig", 'String'>
    readonly secondaryColor: FieldRef<"InvitationConfig", 'String'>
    readonly backgroundColor: FieldRef<"InvitationConfig", 'String'>
    readonly textColor: FieldRef<"InvitationConfig", 'String'>
    readonly backgroundMusicUrl: FieldRef<"InvitationConfig", 'String'>
    readonly footerGreeting: FieldRef<"InvitationConfig", 'String'>
    readonly footerClosingText: FieldRef<"InvitationConfig", 'String'>
    readonly lockedLandingEnabled: FieldRef<"InvitationConfig", 'Boolean'>
    readonly lockedLandingButtonText: FieldRef<"InvitationConfig", 'String'>
    readonly lockedLandingGreeting: FieldRef<"InvitationConfig", 'String'>
    readonly musicEnabled: FieldRef<"InvitationConfig", 'Boolean'>
    readonly musicButtonPosition: FieldRef<"InvitationConfig", 'String'>
    readonly createdAt: FieldRef<"InvitationConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"InvitationConfig", 'DateTime'>
    readonly invitationId: FieldRef<"InvitationConfig", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InvitationConfig findUnique
   */
  export type InvitationConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    /**
     * Filter, which InvitationConfig to fetch.
     */
    where: InvitationConfigWhereUniqueInput
  }

  /**
   * InvitationConfig findUniqueOrThrow
   */
  export type InvitationConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    /**
     * Filter, which InvitationConfig to fetch.
     */
    where: InvitationConfigWhereUniqueInput
  }

  /**
   * InvitationConfig findFirst
   */
  export type InvitationConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    /**
     * Filter, which InvitationConfig to fetch.
     */
    where?: InvitationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitationConfigs to fetch.
     */
    orderBy?: InvitationConfigOrderByWithRelationInput | InvitationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvitationConfigs.
     */
    cursor?: InvitationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvitationConfigs.
     */
    distinct?: InvitationConfigScalarFieldEnum | InvitationConfigScalarFieldEnum[]
  }

  /**
   * InvitationConfig findFirstOrThrow
   */
  export type InvitationConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    /**
     * Filter, which InvitationConfig to fetch.
     */
    where?: InvitationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitationConfigs to fetch.
     */
    orderBy?: InvitationConfigOrderByWithRelationInput | InvitationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvitationConfigs.
     */
    cursor?: InvitationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvitationConfigs.
     */
    distinct?: InvitationConfigScalarFieldEnum | InvitationConfigScalarFieldEnum[]
  }

  /**
   * InvitationConfig findMany
   */
  export type InvitationConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    /**
     * Filter, which InvitationConfigs to fetch.
     */
    where?: InvitationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitationConfigs to fetch.
     */
    orderBy?: InvitationConfigOrderByWithRelationInput | InvitationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvitationConfigs.
     */
    cursor?: InvitationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvitationConfigs.
     */
    distinct?: InvitationConfigScalarFieldEnum | InvitationConfigScalarFieldEnum[]
  }

  /**
   * InvitationConfig create
   */
  export type InvitationConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a InvitationConfig.
     */
    data: XOR<InvitationConfigCreateInput, InvitationConfigUncheckedCreateInput>
  }

  /**
   * InvitationConfig createMany
   */
  export type InvitationConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvitationConfigs.
     */
    data: InvitationConfigCreateManyInput | InvitationConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvitationConfig update
   */
  export type InvitationConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a InvitationConfig.
     */
    data: XOR<InvitationConfigUpdateInput, InvitationConfigUncheckedUpdateInput>
    /**
     * Choose, which InvitationConfig to update.
     */
    where: InvitationConfigWhereUniqueInput
  }

  /**
   * InvitationConfig updateMany
   */
  export type InvitationConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvitationConfigs.
     */
    data: XOR<InvitationConfigUpdateManyMutationInput, InvitationConfigUncheckedUpdateManyInput>
    /**
     * Filter which InvitationConfigs to update
     */
    where?: InvitationConfigWhereInput
    /**
     * Limit how many InvitationConfigs to update.
     */
    limit?: number
  }

  /**
   * InvitationConfig upsert
   */
  export type InvitationConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the InvitationConfig to update in case it exists.
     */
    where: InvitationConfigWhereUniqueInput
    /**
     * In case the InvitationConfig found by the `where` argument doesn't exist, create a new InvitationConfig with this data.
     */
    create: XOR<InvitationConfigCreateInput, InvitationConfigUncheckedCreateInput>
    /**
     * In case the InvitationConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationConfigUpdateInput, InvitationConfigUncheckedUpdateInput>
  }

  /**
   * InvitationConfig delete
   */
  export type InvitationConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
    /**
     * Filter which InvitationConfig to delete.
     */
    where: InvitationConfigWhereUniqueInput
  }

  /**
   * InvitationConfig deleteMany
   */
  export type InvitationConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvitationConfigs to delete
     */
    where?: InvitationConfigWhereInput
    /**
     * Limit how many InvitationConfigs to delete.
     */
    limit?: number
  }

  /**
   * InvitationConfig without action
   */
  export type InvitationConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationConfig
     */
    select?: InvitationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationConfig
     */
    omit?: InvitationConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationConfigInclude<ExtArgs> | null
  }


  /**
   * Model CoupleInfo
   */

  export type AggregateCoupleInfo = {
    _count: CoupleInfoCountAggregateOutputType | null
    _avg: CoupleInfoAvgAggregateOutputType | null
    _sum: CoupleInfoSumAggregateOutputType | null
    _min: CoupleInfoMinAggregateOutputType | null
    _max: CoupleInfoMaxAggregateOutputType | null
  }

  export type CoupleInfoAvgAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type CoupleInfoSumAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type CoupleInfoMinAggregateOutputType = {
    id: number | null
    groomName: string | null
    brideName: string | null
    groomParents: string | null
    brideParents: string | null
    greetingText: string | null
    couplePhotoUrl: string | null
    groomPhotoUrl: string | null
    bridePhotoUrl: string | null
    groomSocialLink: string | null
    brideSocialLink: string | null
    bibleVerse: string | null
    bibleReference: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type CoupleInfoMaxAggregateOutputType = {
    id: number | null
    groomName: string | null
    brideName: string | null
    groomParents: string | null
    brideParents: string | null
    greetingText: string | null
    couplePhotoUrl: string | null
    groomPhotoUrl: string | null
    bridePhotoUrl: string | null
    groomSocialLink: string | null
    brideSocialLink: string | null
    bibleVerse: string | null
    bibleReference: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type CoupleInfoCountAggregateOutputType = {
    id: number
    groomName: number
    brideName: number
    groomParents: number
    brideParents: number
    greetingText: number
    couplePhotoUrl: number
    groomPhotoUrl: number
    bridePhotoUrl: number
    groomSocialLink: number
    brideSocialLink: number
    bibleVerse: number
    bibleReference: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type CoupleInfoAvgAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type CoupleInfoSumAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type CoupleInfoMinAggregateInputType = {
    id?: true
    groomName?: true
    brideName?: true
    groomParents?: true
    brideParents?: true
    greetingText?: true
    couplePhotoUrl?: true
    groomPhotoUrl?: true
    bridePhotoUrl?: true
    groomSocialLink?: true
    brideSocialLink?: true
    bibleVerse?: true
    bibleReference?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type CoupleInfoMaxAggregateInputType = {
    id?: true
    groomName?: true
    brideName?: true
    groomParents?: true
    brideParents?: true
    greetingText?: true
    couplePhotoUrl?: true
    groomPhotoUrl?: true
    bridePhotoUrl?: true
    groomSocialLink?: true
    brideSocialLink?: true
    bibleVerse?: true
    bibleReference?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type CoupleInfoCountAggregateInputType = {
    id?: true
    groomName?: true
    brideName?: true
    groomParents?: true
    brideParents?: true
    greetingText?: true
    couplePhotoUrl?: true
    groomPhotoUrl?: true
    bridePhotoUrl?: true
    groomSocialLink?: true
    brideSocialLink?: true
    bibleVerse?: true
    bibleReference?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    _all?: true
  }

  export type CoupleInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoupleInfo to aggregate.
     */
    where?: CoupleInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoupleInfos to fetch.
     */
    orderBy?: CoupleInfoOrderByWithRelationInput | CoupleInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoupleInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoupleInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoupleInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoupleInfos
    **/
    _count?: true | CoupleInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoupleInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoupleInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoupleInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoupleInfoMaxAggregateInputType
  }

  export type GetCoupleInfoAggregateType<T extends CoupleInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupleInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupleInfo[P]>
      : GetScalarType<T[P], AggregateCoupleInfo[P]>
  }




  export type CoupleInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleInfoWhereInput
    orderBy?: CoupleInfoOrderByWithAggregationInput | CoupleInfoOrderByWithAggregationInput[]
    by: CoupleInfoScalarFieldEnum[] | CoupleInfoScalarFieldEnum
    having?: CoupleInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoupleInfoCountAggregateInputType | true
    _avg?: CoupleInfoAvgAggregateInputType
    _sum?: CoupleInfoSumAggregateInputType
    _min?: CoupleInfoMinAggregateInputType
    _max?: CoupleInfoMaxAggregateInputType
  }

  export type CoupleInfoGroupByOutputType = {
    id: number
    groomName: string
    brideName: string
    groomParents: string
    brideParents: string
    greetingText: string
    couplePhotoUrl: string | null
    groomPhotoUrl: string | null
    bridePhotoUrl: string | null
    groomSocialLink: string | null
    brideSocialLink: string | null
    bibleVerse: string | null
    bibleReference: string | null
    createdAt: Date
    updatedAt: Date
    invitationId: number
    _count: CoupleInfoCountAggregateOutputType | null
    _avg: CoupleInfoAvgAggregateOutputType | null
    _sum: CoupleInfoSumAggregateOutputType | null
    _min: CoupleInfoMinAggregateOutputType | null
    _max: CoupleInfoMaxAggregateOutputType | null
  }

  type GetCoupleInfoGroupByPayload<T extends CoupleInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoupleInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoupleInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoupleInfoGroupByOutputType[P]>
            : GetScalarType<T[P], CoupleInfoGroupByOutputType[P]>
        }
      >
    >


  export type CoupleInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groomName?: boolean
    brideName?: boolean
    groomParents?: boolean
    brideParents?: boolean
    greetingText?: boolean
    couplePhotoUrl?: boolean
    groomPhotoUrl?: boolean
    bridePhotoUrl?: boolean
    groomSocialLink?: boolean
    brideSocialLink?: boolean
    bibleVerse?: boolean
    bibleReference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupleInfo"]>



  export type CoupleInfoSelectScalar = {
    id?: boolean
    groomName?: boolean
    brideName?: boolean
    groomParents?: boolean
    brideParents?: boolean
    greetingText?: boolean
    couplePhotoUrl?: boolean
    groomPhotoUrl?: boolean
    bridePhotoUrl?: boolean
    groomSocialLink?: boolean
    brideSocialLink?: boolean
    bibleVerse?: boolean
    bibleReference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type CoupleInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groomName" | "brideName" | "groomParents" | "brideParents" | "greetingText" | "couplePhotoUrl" | "groomPhotoUrl" | "bridePhotoUrl" | "groomSocialLink" | "brideSocialLink" | "bibleVerse" | "bibleReference" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["coupleInfo"]>
  export type CoupleInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $CoupleInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoupleInfo"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groomName: string
      brideName: string
      groomParents: string
      brideParents: string
      greetingText: string
      couplePhotoUrl: string | null
      groomPhotoUrl: string | null
      bridePhotoUrl: string | null
      groomSocialLink: string | null
      brideSocialLink: string | null
      bibleVerse: string | null
      bibleReference: string | null
      createdAt: Date
      updatedAt: Date
      invitationId: number
    }, ExtArgs["result"]["coupleInfo"]>
    composites: {}
  }

  type CoupleInfoGetPayload<S extends boolean | null | undefined | CoupleInfoDefaultArgs> = $Result.GetResult<Prisma.$CoupleInfoPayload, S>

  type CoupleInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoupleInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoupleInfoCountAggregateInputType | true
    }

  export interface CoupleInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoupleInfo'], meta: { name: 'CoupleInfo' } }
    /**
     * Find zero or one CoupleInfo that matches the filter.
     * @param {CoupleInfoFindUniqueArgs} args - Arguments to find a CoupleInfo
     * @example
     * // Get one CoupleInfo
     * const coupleInfo = await prisma.coupleInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoupleInfoFindUniqueArgs>(args: SelectSubset<T, CoupleInfoFindUniqueArgs<ExtArgs>>): Prisma__CoupleInfoClient<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoupleInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoupleInfoFindUniqueOrThrowArgs} args - Arguments to find a CoupleInfo
     * @example
     * // Get one CoupleInfo
     * const coupleInfo = await prisma.coupleInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoupleInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, CoupleInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoupleInfoClient<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoupleInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleInfoFindFirstArgs} args - Arguments to find a CoupleInfo
     * @example
     * // Get one CoupleInfo
     * const coupleInfo = await prisma.coupleInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoupleInfoFindFirstArgs>(args?: SelectSubset<T, CoupleInfoFindFirstArgs<ExtArgs>>): Prisma__CoupleInfoClient<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoupleInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleInfoFindFirstOrThrowArgs} args - Arguments to find a CoupleInfo
     * @example
     * // Get one CoupleInfo
     * const coupleInfo = await prisma.coupleInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoupleInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, CoupleInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoupleInfoClient<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoupleInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoupleInfos
     * const coupleInfos = await prisma.coupleInfo.findMany()
     * 
     * // Get first 10 CoupleInfos
     * const coupleInfos = await prisma.coupleInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coupleInfoWithIdOnly = await prisma.coupleInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoupleInfoFindManyArgs>(args?: SelectSubset<T, CoupleInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoupleInfo.
     * @param {CoupleInfoCreateArgs} args - Arguments to create a CoupleInfo.
     * @example
     * // Create one CoupleInfo
     * const CoupleInfo = await prisma.coupleInfo.create({
     *   data: {
     *     // ... data to create a CoupleInfo
     *   }
     * })
     * 
     */
    create<T extends CoupleInfoCreateArgs>(args: SelectSubset<T, CoupleInfoCreateArgs<ExtArgs>>): Prisma__CoupleInfoClient<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoupleInfos.
     * @param {CoupleInfoCreateManyArgs} args - Arguments to create many CoupleInfos.
     * @example
     * // Create many CoupleInfos
     * const coupleInfo = await prisma.coupleInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoupleInfoCreateManyArgs>(args?: SelectSubset<T, CoupleInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CoupleInfo.
     * @param {CoupleInfoDeleteArgs} args - Arguments to delete one CoupleInfo.
     * @example
     * // Delete one CoupleInfo
     * const CoupleInfo = await prisma.coupleInfo.delete({
     *   where: {
     *     // ... filter to delete one CoupleInfo
     *   }
     * })
     * 
     */
    delete<T extends CoupleInfoDeleteArgs>(args: SelectSubset<T, CoupleInfoDeleteArgs<ExtArgs>>): Prisma__CoupleInfoClient<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoupleInfo.
     * @param {CoupleInfoUpdateArgs} args - Arguments to update one CoupleInfo.
     * @example
     * // Update one CoupleInfo
     * const coupleInfo = await prisma.coupleInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoupleInfoUpdateArgs>(args: SelectSubset<T, CoupleInfoUpdateArgs<ExtArgs>>): Prisma__CoupleInfoClient<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoupleInfos.
     * @param {CoupleInfoDeleteManyArgs} args - Arguments to filter CoupleInfos to delete.
     * @example
     * // Delete a few CoupleInfos
     * const { count } = await prisma.coupleInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoupleInfoDeleteManyArgs>(args?: SelectSubset<T, CoupleInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoupleInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoupleInfos
     * const coupleInfo = await prisma.coupleInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoupleInfoUpdateManyArgs>(args: SelectSubset<T, CoupleInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoupleInfo.
     * @param {CoupleInfoUpsertArgs} args - Arguments to update or create a CoupleInfo.
     * @example
     * // Update or create a CoupleInfo
     * const coupleInfo = await prisma.coupleInfo.upsert({
     *   create: {
     *     // ... data to create a CoupleInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoupleInfo we want to update
     *   }
     * })
     */
    upsert<T extends CoupleInfoUpsertArgs>(args: SelectSubset<T, CoupleInfoUpsertArgs<ExtArgs>>): Prisma__CoupleInfoClient<$Result.GetResult<Prisma.$CoupleInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoupleInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleInfoCountArgs} args - Arguments to filter CoupleInfos to count.
     * @example
     * // Count the number of CoupleInfos
     * const count = await prisma.coupleInfo.count({
     *   where: {
     *     // ... the filter for the CoupleInfos we want to count
     *   }
     * })
    **/
    count<T extends CoupleInfoCountArgs>(
      args?: Subset<T, CoupleInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoupleInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoupleInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoupleInfoAggregateArgs>(args: Subset<T, CoupleInfoAggregateArgs>): Prisma.PrismaPromise<GetCoupleInfoAggregateType<T>>

    /**
     * Group by CoupleInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleInfoGroupByArgs} args - Group by arguments.
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
      T extends CoupleInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoupleInfoGroupByArgs['orderBy'] }
        : { orderBy?: CoupleInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoupleInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoupleInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoupleInfo model
   */
  readonly fields: CoupleInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoupleInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoupleInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CoupleInfo model
   */
  interface CoupleInfoFieldRefs {
    readonly id: FieldRef<"CoupleInfo", 'Int'>
    readonly groomName: FieldRef<"CoupleInfo", 'String'>
    readonly brideName: FieldRef<"CoupleInfo", 'String'>
    readonly groomParents: FieldRef<"CoupleInfo", 'String'>
    readonly brideParents: FieldRef<"CoupleInfo", 'String'>
    readonly greetingText: FieldRef<"CoupleInfo", 'String'>
    readonly couplePhotoUrl: FieldRef<"CoupleInfo", 'String'>
    readonly groomPhotoUrl: FieldRef<"CoupleInfo", 'String'>
    readonly bridePhotoUrl: FieldRef<"CoupleInfo", 'String'>
    readonly groomSocialLink: FieldRef<"CoupleInfo", 'String'>
    readonly brideSocialLink: FieldRef<"CoupleInfo", 'String'>
    readonly bibleVerse: FieldRef<"CoupleInfo", 'String'>
    readonly bibleReference: FieldRef<"CoupleInfo", 'String'>
    readonly createdAt: FieldRef<"CoupleInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"CoupleInfo", 'DateTime'>
    readonly invitationId: FieldRef<"CoupleInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CoupleInfo findUnique
   */
  export type CoupleInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    /**
     * Filter, which CoupleInfo to fetch.
     */
    where: CoupleInfoWhereUniqueInput
  }

  /**
   * CoupleInfo findUniqueOrThrow
   */
  export type CoupleInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    /**
     * Filter, which CoupleInfo to fetch.
     */
    where: CoupleInfoWhereUniqueInput
  }

  /**
   * CoupleInfo findFirst
   */
  export type CoupleInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    /**
     * Filter, which CoupleInfo to fetch.
     */
    where?: CoupleInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoupleInfos to fetch.
     */
    orderBy?: CoupleInfoOrderByWithRelationInput | CoupleInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoupleInfos.
     */
    cursor?: CoupleInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoupleInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoupleInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoupleInfos.
     */
    distinct?: CoupleInfoScalarFieldEnum | CoupleInfoScalarFieldEnum[]
  }

  /**
   * CoupleInfo findFirstOrThrow
   */
  export type CoupleInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    /**
     * Filter, which CoupleInfo to fetch.
     */
    where?: CoupleInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoupleInfos to fetch.
     */
    orderBy?: CoupleInfoOrderByWithRelationInput | CoupleInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoupleInfos.
     */
    cursor?: CoupleInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoupleInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoupleInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoupleInfos.
     */
    distinct?: CoupleInfoScalarFieldEnum | CoupleInfoScalarFieldEnum[]
  }

  /**
   * CoupleInfo findMany
   */
  export type CoupleInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    /**
     * Filter, which CoupleInfos to fetch.
     */
    where?: CoupleInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoupleInfos to fetch.
     */
    orderBy?: CoupleInfoOrderByWithRelationInput | CoupleInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoupleInfos.
     */
    cursor?: CoupleInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoupleInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoupleInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoupleInfos.
     */
    distinct?: CoupleInfoScalarFieldEnum | CoupleInfoScalarFieldEnum[]
  }

  /**
   * CoupleInfo create
   */
  export type CoupleInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a CoupleInfo.
     */
    data: XOR<CoupleInfoCreateInput, CoupleInfoUncheckedCreateInput>
  }

  /**
   * CoupleInfo createMany
   */
  export type CoupleInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoupleInfos.
     */
    data: CoupleInfoCreateManyInput | CoupleInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoupleInfo update
   */
  export type CoupleInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a CoupleInfo.
     */
    data: XOR<CoupleInfoUpdateInput, CoupleInfoUncheckedUpdateInput>
    /**
     * Choose, which CoupleInfo to update.
     */
    where: CoupleInfoWhereUniqueInput
  }

  /**
   * CoupleInfo updateMany
   */
  export type CoupleInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoupleInfos.
     */
    data: XOR<CoupleInfoUpdateManyMutationInput, CoupleInfoUncheckedUpdateManyInput>
    /**
     * Filter which CoupleInfos to update
     */
    where?: CoupleInfoWhereInput
    /**
     * Limit how many CoupleInfos to update.
     */
    limit?: number
  }

  /**
   * CoupleInfo upsert
   */
  export type CoupleInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the CoupleInfo to update in case it exists.
     */
    where: CoupleInfoWhereUniqueInput
    /**
     * In case the CoupleInfo found by the `where` argument doesn't exist, create a new CoupleInfo with this data.
     */
    create: XOR<CoupleInfoCreateInput, CoupleInfoUncheckedCreateInput>
    /**
     * In case the CoupleInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoupleInfoUpdateInput, CoupleInfoUncheckedUpdateInput>
  }

  /**
   * CoupleInfo delete
   */
  export type CoupleInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
    /**
     * Filter which CoupleInfo to delete.
     */
    where: CoupleInfoWhereUniqueInput
  }

  /**
   * CoupleInfo deleteMany
   */
  export type CoupleInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoupleInfos to delete
     */
    where?: CoupleInfoWhereInput
    /**
     * Limit how many CoupleInfos to delete.
     */
    limit?: number
  }

  /**
   * CoupleInfo without action
   */
  export type CoupleInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleInfo
     */
    select?: CoupleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoupleInfo
     */
    omit?: CoupleInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInfoInclude<ExtArgs> | null
  }


  /**
   * Model StoryItem
   */

  export type AggregateStoryItem = {
    _count: StoryItemCountAggregateOutputType | null
    _avg: StoryItemAvgAggregateOutputType | null
    _sum: StoryItemSumAggregateOutputType | null
    _min: StoryItemMinAggregateOutputType | null
    _max: StoryItemMaxAggregateOutputType | null
  }

  export type StoryItemAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    invitationId: number | null
  }

  export type StoryItemSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    invitationId: number | null
  }

  export type StoryItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    imageUrl: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type StoryItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    imageUrl: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type StoryItemCountAggregateOutputType = {
    id: number
    title: number
    body: number
    imageUrl: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type StoryItemAvgAggregateInputType = {
    id?: true
    sortOrder?: true
    invitationId?: true
  }

  export type StoryItemSumAggregateInputType = {
    id?: true
    sortOrder?: true
    invitationId?: true
  }

  export type StoryItemMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    imageUrl?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type StoryItemMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    imageUrl?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type StoryItemCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    imageUrl?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    _all?: true
  }

  export type StoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryItem to aggregate.
     */
    where?: StoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryItems to fetch.
     */
    orderBy?: StoryItemOrderByWithRelationInput | StoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoryItems
    **/
    _count?: true | StoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryItemMaxAggregateInputType
  }

  export type GetStoryItemAggregateType<T extends StoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateStoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoryItem[P]>
      : GetScalarType<T[P], AggregateStoryItem[P]>
  }




  export type StoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryItemWhereInput
    orderBy?: StoryItemOrderByWithAggregationInput | StoryItemOrderByWithAggregationInput[]
    by: StoryItemScalarFieldEnum[] | StoryItemScalarFieldEnum
    having?: StoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryItemCountAggregateInputType | true
    _avg?: StoryItemAvgAggregateInputType
    _sum?: StoryItemSumAggregateInputType
    _min?: StoryItemMinAggregateInputType
    _max?: StoryItemMaxAggregateInputType
  }

  export type StoryItemGroupByOutputType = {
    id: number
    title: string
    body: string
    imageUrl: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    invitationId: number
    _count: StoryItemCountAggregateOutputType | null
    _avg: StoryItemAvgAggregateOutputType | null
    _sum: StoryItemSumAggregateOutputType | null
    _min: StoryItemMinAggregateOutputType | null
    _max: StoryItemMaxAggregateOutputType | null
  }

  type GetStoryItemGroupByPayload<T extends StoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], StoryItemGroupByOutputType[P]>
        }
      >
    >


  export type StoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
    images?: boolean | StoryItem$imagesArgs<ExtArgs>
    _count?: boolean | StoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyItem"]>



  export type StoryItemSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type StoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "imageUrl" | "sortOrder" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["storyItem"]>
  export type StoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
    images?: boolean | StoryItem$imagesArgs<ExtArgs>
    _count?: boolean | StoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoryItem"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
      images: Prisma.$StoryImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      body: string
      imageUrl: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
      invitationId: number
    }, ExtArgs["result"]["storyItem"]>
    composites: {}
  }

  type StoryItemGetPayload<S extends boolean | null | undefined | StoryItemDefaultArgs> = $Result.GetResult<Prisma.$StoryItemPayload, S>

  type StoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryItemCountAggregateInputType | true
    }

  export interface StoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoryItem'], meta: { name: 'StoryItem' } }
    /**
     * Find zero or one StoryItem that matches the filter.
     * @param {StoryItemFindUniqueArgs} args - Arguments to find a StoryItem
     * @example
     * // Get one StoryItem
     * const storyItem = await prisma.storyItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryItemFindUniqueArgs>(args: SelectSubset<T, StoryItemFindUniqueArgs<ExtArgs>>): Prisma__StoryItemClient<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryItemFindUniqueOrThrowArgs} args - Arguments to find a StoryItem
     * @example
     * // Get one StoryItem
     * const storyItem = await prisma.storyItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryItemClient<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryItemFindFirstArgs} args - Arguments to find a StoryItem
     * @example
     * // Get one StoryItem
     * const storyItem = await prisma.storyItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryItemFindFirstArgs>(args?: SelectSubset<T, StoryItemFindFirstArgs<ExtArgs>>): Prisma__StoryItemClient<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryItemFindFirstOrThrowArgs} args - Arguments to find a StoryItem
     * @example
     * // Get one StoryItem
     * const storyItem = await prisma.storyItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryItemClient<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoryItems
     * const storyItems = await prisma.storyItem.findMany()
     * 
     * // Get first 10 StoryItems
     * const storyItems = await prisma.storyItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyItemWithIdOnly = await prisma.storyItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryItemFindManyArgs>(args?: SelectSubset<T, StoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoryItem.
     * @param {StoryItemCreateArgs} args - Arguments to create a StoryItem.
     * @example
     * // Create one StoryItem
     * const StoryItem = await prisma.storyItem.create({
     *   data: {
     *     // ... data to create a StoryItem
     *   }
     * })
     * 
     */
    create<T extends StoryItemCreateArgs>(args: SelectSubset<T, StoryItemCreateArgs<ExtArgs>>): Prisma__StoryItemClient<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoryItems.
     * @param {StoryItemCreateManyArgs} args - Arguments to create many StoryItems.
     * @example
     * // Create many StoryItems
     * const storyItem = await prisma.storyItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryItemCreateManyArgs>(args?: SelectSubset<T, StoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoryItem.
     * @param {StoryItemDeleteArgs} args - Arguments to delete one StoryItem.
     * @example
     * // Delete one StoryItem
     * const StoryItem = await prisma.storyItem.delete({
     *   where: {
     *     // ... filter to delete one StoryItem
     *   }
     * })
     * 
     */
    delete<T extends StoryItemDeleteArgs>(args: SelectSubset<T, StoryItemDeleteArgs<ExtArgs>>): Prisma__StoryItemClient<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoryItem.
     * @param {StoryItemUpdateArgs} args - Arguments to update one StoryItem.
     * @example
     * // Update one StoryItem
     * const storyItem = await prisma.storyItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryItemUpdateArgs>(args: SelectSubset<T, StoryItemUpdateArgs<ExtArgs>>): Prisma__StoryItemClient<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoryItems.
     * @param {StoryItemDeleteManyArgs} args - Arguments to filter StoryItems to delete.
     * @example
     * // Delete a few StoryItems
     * const { count } = await prisma.storyItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryItemDeleteManyArgs>(args?: SelectSubset<T, StoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoryItems
     * const storyItem = await prisma.storyItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryItemUpdateManyArgs>(args: SelectSubset<T, StoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoryItem.
     * @param {StoryItemUpsertArgs} args - Arguments to update or create a StoryItem.
     * @example
     * // Update or create a StoryItem
     * const storyItem = await prisma.storyItem.upsert({
     *   create: {
     *     // ... data to create a StoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoryItem we want to update
     *   }
     * })
     */
    upsert<T extends StoryItemUpsertArgs>(args: SelectSubset<T, StoryItemUpsertArgs<ExtArgs>>): Prisma__StoryItemClient<$Result.GetResult<Prisma.$StoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryItemCountArgs} args - Arguments to filter StoryItems to count.
     * @example
     * // Count the number of StoryItems
     * const count = await prisma.storyItem.count({
     *   where: {
     *     // ... the filter for the StoryItems we want to count
     *   }
     * })
    **/
    count<T extends StoryItemCountArgs>(
      args?: Subset<T, StoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryItemAggregateArgs>(args: Subset<T, StoryItemAggregateArgs>): Prisma.PrismaPromise<GetStoryItemAggregateType<T>>

    /**
     * Group by StoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryItemGroupByArgs} args - Group by arguments.
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
      T extends StoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryItemGroupByArgs['orderBy'] }
        : { orderBy?: StoryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoryItem model
   */
  readonly fields: StoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends StoryItem$imagesArgs<ExtArgs> = {}>(args?: Subset<T, StoryItem$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StoryItem model
   */
  interface StoryItemFieldRefs {
    readonly id: FieldRef<"StoryItem", 'Int'>
    readonly title: FieldRef<"StoryItem", 'String'>
    readonly body: FieldRef<"StoryItem", 'String'>
    readonly imageUrl: FieldRef<"StoryItem", 'String'>
    readonly sortOrder: FieldRef<"StoryItem", 'Int'>
    readonly createdAt: FieldRef<"StoryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"StoryItem", 'DateTime'>
    readonly invitationId: FieldRef<"StoryItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StoryItem findUnique
   */
  export type StoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    /**
     * Filter, which StoryItem to fetch.
     */
    where: StoryItemWhereUniqueInput
  }

  /**
   * StoryItem findUniqueOrThrow
   */
  export type StoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    /**
     * Filter, which StoryItem to fetch.
     */
    where: StoryItemWhereUniqueInput
  }

  /**
   * StoryItem findFirst
   */
  export type StoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    /**
     * Filter, which StoryItem to fetch.
     */
    where?: StoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryItems to fetch.
     */
    orderBy?: StoryItemOrderByWithRelationInput | StoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryItems.
     */
    cursor?: StoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryItems.
     */
    distinct?: StoryItemScalarFieldEnum | StoryItemScalarFieldEnum[]
  }

  /**
   * StoryItem findFirstOrThrow
   */
  export type StoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    /**
     * Filter, which StoryItem to fetch.
     */
    where?: StoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryItems to fetch.
     */
    orderBy?: StoryItemOrderByWithRelationInput | StoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryItems.
     */
    cursor?: StoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryItems.
     */
    distinct?: StoryItemScalarFieldEnum | StoryItemScalarFieldEnum[]
  }

  /**
   * StoryItem findMany
   */
  export type StoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    /**
     * Filter, which StoryItems to fetch.
     */
    where?: StoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryItems to fetch.
     */
    orderBy?: StoryItemOrderByWithRelationInput | StoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoryItems.
     */
    cursor?: StoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryItems.
     */
    distinct?: StoryItemScalarFieldEnum | StoryItemScalarFieldEnum[]
  }

  /**
   * StoryItem create
   */
  export type StoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a StoryItem.
     */
    data: XOR<StoryItemCreateInput, StoryItemUncheckedCreateInput>
  }

  /**
   * StoryItem createMany
   */
  export type StoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoryItems.
     */
    data: StoryItemCreateManyInput | StoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoryItem update
   */
  export type StoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a StoryItem.
     */
    data: XOR<StoryItemUpdateInput, StoryItemUncheckedUpdateInput>
    /**
     * Choose, which StoryItem to update.
     */
    where: StoryItemWhereUniqueInput
  }

  /**
   * StoryItem updateMany
   */
  export type StoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoryItems.
     */
    data: XOR<StoryItemUpdateManyMutationInput, StoryItemUncheckedUpdateManyInput>
    /**
     * Filter which StoryItems to update
     */
    where?: StoryItemWhereInput
    /**
     * Limit how many StoryItems to update.
     */
    limit?: number
  }

  /**
   * StoryItem upsert
   */
  export type StoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the StoryItem to update in case it exists.
     */
    where: StoryItemWhereUniqueInput
    /**
     * In case the StoryItem found by the `where` argument doesn't exist, create a new StoryItem with this data.
     */
    create: XOR<StoryItemCreateInput, StoryItemUncheckedCreateInput>
    /**
     * In case the StoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryItemUpdateInput, StoryItemUncheckedUpdateInput>
  }

  /**
   * StoryItem delete
   */
  export type StoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
    /**
     * Filter which StoryItem to delete.
     */
    where: StoryItemWhereUniqueInput
  }

  /**
   * StoryItem deleteMany
   */
  export type StoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryItems to delete
     */
    where?: StoryItemWhereInput
    /**
     * Limit how many StoryItems to delete.
     */
    limit?: number
  }

  /**
   * StoryItem.images
   */
  export type StoryItem$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryImage
     */
    select?: StoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryImage
     */
    omit?: StoryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryImageInclude<ExtArgs> | null
    where?: StoryImageWhereInput
    orderBy?: StoryImageOrderByWithRelationInput | StoryImageOrderByWithRelationInput[]
    cursor?: StoryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryImageScalarFieldEnum | StoryImageScalarFieldEnum[]
  }

  /**
   * StoryItem without action
   */
  export type StoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryItem
     */
    select?: StoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryItem
     */
    omit?: StoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryItemInclude<ExtArgs> | null
  }


  /**
   * Model GalleryImage
   */

  export type AggregateGalleryImage = {
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  export type GalleryImageAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    invitationId: number | null
  }

  export type GalleryImageSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    invitationId: number | null
  }

  export type GalleryImageMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    caption: string | null
    sortOrder: number | null
    aspectRatio: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type GalleryImageMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    caption: string | null
    sortOrder: number | null
    aspectRatio: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type GalleryImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    caption: number
    sortOrder: number
    aspectRatio: number
    isFeatured: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type GalleryImageAvgAggregateInputType = {
    id?: true
    sortOrder?: true
    invitationId?: true
  }

  export type GalleryImageSumAggregateInputType = {
    id?: true
    sortOrder?: true
    invitationId?: true
  }

  export type GalleryImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    caption?: true
    sortOrder?: true
    aspectRatio?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type GalleryImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    caption?: true
    sortOrder?: true
    aspectRatio?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type GalleryImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    caption?: true
    sortOrder?: true
    aspectRatio?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    _all?: true
  }

  export type GalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImage to aggregate.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryImages
    **/
    _count?: true | GalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GetGalleryImageAggregateType<T extends GalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryImage[P]>
      : GetScalarType<T[P], AggregateGalleryImage[P]>
  }




  export type GalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithAggregationInput | GalleryImageOrderByWithAggregationInput[]
    by: GalleryImageScalarFieldEnum[] | GalleryImageScalarFieldEnum
    having?: GalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryImageCountAggregateInputType | true
    _avg?: GalleryImageAvgAggregateInputType
    _sum?: GalleryImageSumAggregateInputType
    _min?: GalleryImageMinAggregateInputType
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GalleryImageGroupByOutputType = {
    id: number
    imageUrl: string
    caption: string | null
    sortOrder: number
    aspectRatio: string | null
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    invitationId: number
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  type GetGalleryImageGroupByPayload<T extends GalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type GalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    caption?: boolean
    sortOrder?: boolean
    aspectRatio?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryImage"]>



  export type GalleryImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    caption?: boolean
    sortOrder?: boolean
    aspectRatio?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type GalleryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "caption" | "sortOrder" | "aspectRatio" | "isFeatured" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["galleryImage"]>
  export type GalleryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $GalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryImage"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      caption: string | null
      sortOrder: number
      aspectRatio: string | null
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
      invitationId: number
    }, ExtArgs["result"]["galleryImage"]>
    composites: {}
  }

  type GalleryImageGetPayload<S extends boolean | null | undefined | GalleryImageDefaultArgs> = $Result.GetResult<Prisma.$GalleryImagePayload, S>

  type GalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryImageCountAggregateInputType | true
    }

  export interface GalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryImage'], meta: { name: 'GalleryImage' } }
    /**
     * Find zero or one GalleryImage that matches the filter.
     * @param {GalleryImageFindUniqueArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryImageFindUniqueArgs>(args: SelectSubset<T, GalleryImageFindUniqueArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryImageFindUniqueOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryImageFindFirstArgs>(args?: SelectSubset<T, GalleryImageFindFirstArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany()
     * 
     * // Get first 10 GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryImageFindManyArgs>(args?: SelectSubset<T, GalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryImage.
     * @param {GalleryImageCreateArgs} args - Arguments to create a GalleryImage.
     * @example
     * // Create one GalleryImage
     * const GalleryImage = await prisma.galleryImage.create({
     *   data: {
     *     // ... data to create a GalleryImage
     *   }
     * })
     * 
     */
    create<T extends GalleryImageCreateArgs>(args: SelectSubset<T, GalleryImageCreateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryImages.
     * @param {GalleryImageCreateManyArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryImageCreateManyArgs>(args?: SelectSubset<T, GalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GalleryImage.
     * @param {GalleryImageDeleteArgs} args - Arguments to delete one GalleryImage.
     * @example
     * // Delete one GalleryImage
     * const GalleryImage = await prisma.galleryImage.delete({
     *   where: {
     *     // ... filter to delete one GalleryImage
     *   }
     * })
     * 
     */
    delete<T extends GalleryImageDeleteArgs>(args: SelectSubset<T, GalleryImageDeleteArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryImage.
     * @param {GalleryImageUpdateArgs} args - Arguments to update one GalleryImage.
     * @example
     * // Update one GalleryImage
     * const galleryImage = await prisma.galleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryImageUpdateArgs>(args: SelectSubset<T, GalleryImageUpdateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryImages.
     * @param {GalleryImageDeleteManyArgs} args - Arguments to filter GalleryImages to delete.
     * @example
     * // Delete a few GalleryImages
     * const { count } = await prisma.galleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryImageDeleteManyArgs>(args?: SelectSubset<T, GalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryImageUpdateManyArgs>(args: SelectSubset<T, GalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GalleryImage.
     * @param {GalleryImageUpsertArgs} args - Arguments to update or create a GalleryImage.
     * @example
     * // Update or create a GalleryImage
     * const galleryImage = await prisma.galleryImage.upsert({
     *   create: {
     *     // ... data to create a GalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends GalleryImageUpsertArgs>(args: SelectSubset<T, GalleryImageUpsertArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageCountArgs} args - Arguments to filter GalleryImages to count.
     * @example
     * // Count the number of GalleryImages
     * const count = await prisma.galleryImage.count({
     *   where: {
     *     // ... the filter for the GalleryImages we want to count
     *   }
     * })
    **/
    count<T extends GalleryImageCountArgs>(
      args?: Subset<T, GalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryImageAggregateArgs>(args: Subset<T, GalleryImageAggregateArgs>): Prisma.PrismaPromise<GetGalleryImageAggregateType<T>>

    /**
     * Group by GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageGroupByArgs} args - Group by arguments.
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
      T extends GalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: GalleryImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryImage model
   */
  readonly fields: GalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GalleryImage model
   */
  interface GalleryImageFieldRefs {
    readonly id: FieldRef<"GalleryImage", 'Int'>
    readonly imageUrl: FieldRef<"GalleryImage", 'String'>
    readonly caption: FieldRef<"GalleryImage", 'String'>
    readonly sortOrder: FieldRef<"GalleryImage", 'Int'>
    readonly aspectRatio: FieldRef<"GalleryImage", 'String'>
    readonly isFeatured: FieldRef<"GalleryImage", 'Boolean'>
    readonly createdAt: FieldRef<"GalleryImage", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleryImage", 'DateTime'>
    readonly invitationId: FieldRef<"GalleryImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GalleryImage findUnique
   */
  export type GalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findUniqueOrThrow
   */
  export type GalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findFirst
   */
  export type GalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findFirstOrThrow
   */
  export type GalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findMany
   */
  export type GalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImages to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage create
   */
  export type GalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryImage.
     */
    data: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
  }

  /**
   * GalleryImage createMany
   */
  export type GalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryImage update
   */
  export type GalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryImage.
     */
    data: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
    /**
     * Choose, which GalleryImage to update.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage updateMany
   */
  export type GalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to update.
     */
    limit?: number
  }

  /**
   * GalleryImage upsert
   */
  export type GalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryImage to update in case it exists.
     */
    where: GalleryImageWhereUniqueInput
    /**
     * In case the GalleryImage found by the `where` argument doesn't exist, create a new GalleryImage with this data.
     */
    create: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
    /**
     * In case the GalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
  }

  /**
   * GalleryImage delete
   */
  export type GalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter which GalleryImage to delete.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage deleteMany
   */
  export type GalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImages to delete
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to delete.
     */
    limit?: number
  }

  /**
   * GalleryImage without action
   */
  export type GalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
  }


  /**
   * Model PhilosophyConfig
   */

  export type AggregatePhilosophyConfig = {
    _count: PhilosophyConfigCountAggregateOutputType | null
    _avg: PhilosophyConfigAvgAggregateOutputType | null
    _sum: PhilosophyConfigSumAggregateOutputType | null
    _min: PhilosophyConfigMinAggregateOutputType | null
    _max: PhilosophyConfigMaxAggregateOutputType | null
  }

  export type PhilosophyConfigAvgAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type PhilosophyConfigSumAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type PhilosophyConfigMinAggregateOutputType = {
    id: number | null
    quoteText: string | null
    quoteMeaning: string | null
    prayerText: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type PhilosophyConfigMaxAggregateOutputType = {
    id: number | null
    quoteText: string | null
    quoteMeaning: string | null
    prayerText: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type PhilosophyConfigCountAggregateOutputType = {
    id: number
    quoteText: number
    quoteMeaning: number
    prayerText: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type PhilosophyConfigAvgAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type PhilosophyConfigSumAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type PhilosophyConfigMinAggregateInputType = {
    id?: true
    quoteText?: true
    quoteMeaning?: true
    prayerText?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type PhilosophyConfigMaxAggregateInputType = {
    id?: true
    quoteText?: true
    quoteMeaning?: true
    prayerText?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type PhilosophyConfigCountAggregateInputType = {
    id?: true
    quoteText?: true
    quoteMeaning?: true
    prayerText?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
    _all?: true
  }

  export type PhilosophyConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhilosophyConfig to aggregate.
     */
    where?: PhilosophyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhilosophyConfigs to fetch.
     */
    orderBy?: PhilosophyConfigOrderByWithRelationInput | PhilosophyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhilosophyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhilosophyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhilosophyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhilosophyConfigs
    **/
    _count?: true | PhilosophyConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhilosophyConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhilosophyConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhilosophyConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhilosophyConfigMaxAggregateInputType
  }

  export type GetPhilosophyConfigAggregateType<T extends PhilosophyConfigAggregateArgs> = {
        [P in keyof T & keyof AggregatePhilosophyConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhilosophyConfig[P]>
      : GetScalarType<T[P], AggregatePhilosophyConfig[P]>
  }




  export type PhilosophyConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhilosophyConfigWhereInput
    orderBy?: PhilosophyConfigOrderByWithAggregationInput | PhilosophyConfigOrderByWithAggregationInput[]
    by: PhilosophyConfigScalarFieldEnum[] | PhilosophyConfigScalarFieldEnum
    having?: PhilosophyConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhilosophyConfigCountAggregateInputType | true
    _avg?: PhilosophyConfigAvgAggregateInputType
    _sum?: PhilosophyConfigSumAggregateInputType
    _min?: PhilosophyConfigMinAggregateInputType
    _max?: PhilosophyConfigMaxAggregateInputType
  }

  export type PhilosophyConfigGroupByOutputType = {
    id: number
    quoteText: string
    quoteMeaning: string | null
    prayerText: string
    createdAt: Date
    updatedAt: Date
    invitationId: number
    _count: PhilosophyConfigCountAggregateOutputType | null
    _avg: PhilosophyConfigAvgAggregateOutputType | null
    _sum: PhilosophyConfigSumAggregateOutputType | null
    _min: PhilosophyConfigMinAggregateOutputType | null
    _max: PhilosophyConfigMaxAggregateOutputType | null
  }

  type GetPhilosophyConfigGroupByPayload<T extends PhilosophyConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhilosophyConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhilosophyConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhilosophyConfigGroupByOutputType[P]>
            : GetScalarType<T[P], PhilosophyConfigGroupByOutputType[P]>
        }
      >
    >


  export type PhilosophyConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quoteText?: boolean
    quoteMeaning?: boolean
    prayerText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["philosophyConfig"]>



  export type PhilosophyConfigSelectScalar = {
    id?: boolean
    quoteText?: boolean
    quoteMeaning?: boolean
    prayerText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type PhilosophyConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quoteText" | "quoteMeaning" | "prayerText" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["philosophyConfig"]>
  export type PhilosophyConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }

  export type $PhilosophyConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhilosophyConfig"
    objects: {
      invitation: Prisma.$InvitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quoteText: string
      quoteMeaning: string | null
      prayerText: string
      createdAt: Date
      updatedAt: Date
      invitationId: number
    }, ExtArgs["result"]["philosophyConfig"]>
    composites: {}
  }

  type PhilosophyConfigGetPayload<S extends boolean | null | undefined | PhilosophyConfigDefaultArgs> = $Result.GetResult<Prisma.$PhilosophyConfigPayload, S>

  type PhilosophyConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhilosophyConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhilosophyConfigCountAggregateInputType | true
    }

  export interface PhilosophyConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhilosophyConfig'], meta: { name: 'PhilosophyConfig' } }
    /**
     * Find zero or one PhilosophyConfig that matches the filter.
     * @param {PhilosophyConfigFindUniqueArgs} args - Arguments to find a PhilosophyConfig
     * @example
     * // Get one PhilosophyConfig
     * const philosophyConfig = await prisma.philosophyConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhilosophyConfigFindUniqueArgs>(args: SelectSubset<T, PhilosophyConfigFindUniqueArgs<ExtArgs>>): Prisma__PhilosophyConfigClient<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhilosophyConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhilosophyConfigFindUniqueOrThrowArgs} args - Arguments to find a PhilosophyConfig
     * @example
     * // Get one PhilosophyConfig
     * const philosophyConfig = await prisma.philosophyConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhilosophyConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, PhilosophyConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhilosophyConfigClient<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhilosophyConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhilosophyConfigFindFirstArgs} args - Arguments to find a PhilosophyConfig
     * @example
     * // Get one PhilosophyConfig
     * const philosophyConfig = await prisma.philosophyConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhilosophyConfigFindFirstArgs>(args?: SelectSubset<T, PhilosophyConfigFindFirstArgs<ExtArgs>>): Prisma__PhilosophyConfigClient<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhilosophyConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhilosophyConfigFindFirstOrThrowArgs} args - Arguments to find a PhilosophyConfig
     * @example
     * // Get one PhilosophyConfig
     * const philosophyConfig = await prisma.philosophyConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhilosophyConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, PhilosophyConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhilosophyConfigClient<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhilosophyConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhilosophyConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhilosophyConfigs
     * const philosophyConfigs = await prisma.philosophyConfig.findMany()
     * 
     * // Get first 10 PhilosophyConfigs
     * const philosophyConfigs = await prisma.philosophyConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const philosophyConfigWithIdOnly = await prisma.philosophyConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhilosophyConfigFindManyArgs>(args?: SelectSubset<T, PhilosophyConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhilosophyConfig.
     * @param {PhilosophyConfigCreateArgs} args - Arguments to create a PhilosophyConfig.
     * @example
     * // Create one PhilosophyConfig
     * const PhilosophyConfig = await prisma.philosophyConfig.create({
     *   data: {
     *     // ... data to create a PhilosophyConfig
     *   }
     * })
     * 
     */
    create<T extends PhilosophyConfigCreateArgs>(args: SelectSubset<T, PhilosophyConfigCreateArgs<ExtArgs>>): Prisma__PhilosophyConfigClient<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhilosophyConfigs.
     * @param {PhilosophyConfigCreateManyArgs} args - Arguments to create many PhilosophyConfigs.
     * @example
     * // Create many PhilosophyConfigs
     * const philosophyConfig = await prisma.philosophyConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhilosophyConfigCreateManyArgs>(args?: SelectSubset<T, PhilosophyConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PhilosophyConfig.
     * @param {PhilosophyConfigDeleteArgs} args - Arguments to delete one PhilosophyConfig.
     * @example
     * // Delete one PhilosophyConfig
     * const PhilosophyConfig = await prisma.philosophyConfig.delete({
     *   where: {
     *     // ... filter to delete one PhilosophyConfig
     *   }
     * })
     * 
     */
    delete<T extends PhilosophyConfigDeleteArgs>(args: SelectSubset<T, PhilosophyConfigDeleteArgs<ExtArgs>>): Prisma__PhilosophyConfigClient<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhilosophyConfig.
     * @param {PhilosophyConfigUpdateArgs} args - Arguments to update one PhilosophyConfig.
     * @example
     * // Update one PhilosophyConfig
     * const philosophyConfig = await prisma.philosophyConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhilosophyConfigUpdateArgs>(args: SelectSubset<T, PhilosophyConfigUpdateArgs<ExtArgs>>): Prisma__PhilosophyConfigClient<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhilosophyConfigs.
     * @param {PhilosophyConfigDeleteManyArgs} args - Arguments to filter PhilosophyConfigs to delete.
     * @example
     * // Delete a few PhilosophyConfigs
     * const { count } = await prisma.philosophyConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhilosophyConfigDeleteManyArgs>(args?: SelectSubset<T, PhilosophyConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhilosophyConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhilosophyConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhilosophyConfigs
     * const philosophyConfig = await prisma.philosophyConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhilosophyConfigUpdateManyArgs>(args: SelectSubset<T, PhilosophyConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhilosophyConfig.
     * @param {PhilosophyConfigUpsertArgs} args - Arguments to update or create a PhilosophyConfig.
     * @example
     * // Update or create a PhilosophyConfig
     * const philosophyConfig = await prisma.philosophyConfig.upsert({
     *   create: {
     *     // ... data to create a PhilosophyConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhilosophyConfig we want to update
     *   }
     * })
     */
    upsert<T extends PhilosophyConfigUpsertArgs>(args: SelectSubset<T, PhilosophyConfigUpsertArgs<ExtArgs>>): Prisma__PhilosophyConfigClient<$Result.GetResult<Prisma.$PhilosophyConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhilosophyConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhilosophyConfigCountArgs} args - Arguments to filter PhilosophyConfigs to count.
     * @example
     * // Count the number of PhilosophyConfigs
     * const count = await prisma.philosophyConfig.count({
     *   where: {
     *     // ... the filter for the PhilosophyConfigs we want to count
     *   }
     * })
    **/
    count<T extends PhilosophyConfigCountArgs>(
      args?: Subset<T, PhilosophyConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhilosophyConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhilosophyConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhilosophyConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhilosophyConfigAggregateArgs>(args: Subset<T, PhilosophyConfigAggregateArgs>): Prisma.PrismaPromise<GetPhilosophyConfigAggregateType<T>>

    /**
     * Group by PhilosophyConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhilosophyConfigGroupByArgs} args - Group by arguments.
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
      T extends PhilosophyConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhilosophyConfigGroupByArgs['orderBy'] }
        : { orderBy?: PhilosophyConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhilosophyConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhilosophyConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhilosophyConfig model
   */
  readonly fields: PhilosophyConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhilosophyConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhilosophyConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitation<T extends InvitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvitationDefaultArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PhilosophyConfig model
   */
  interface PhilosophyConfigFieldRefs {
    readonly id: FieldRef<"PhilosophyConfig", 'Int'>
    readonly quoteText: FieldRef<"PhilosophyConfig", 'String'>
    readonly quoteMeaning: FieldRef<"PhilosophyConfig", 'String'>
    readonly prayerText: FieldRef<"PhilosophyConfig", 'String'>
    readonly createdAt: FieldRef<"PhilosophyConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"PhilosophyConfig", 'DateTime'>
    readonly invitationId: FieldRef<"PhilosophyConfig", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PhilosophyConfig findUnique
   */
  export type PhilosophyConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    /**
     * Filter, which PhilosophyConfig to fetch.
     */
    where: PhilosophyConfigWhereUniqueInput
  }

  /**
   * PhilosophyConfig findUniqueOrThrow
   */
  export type PhilosophyConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    /**
     * Filter, which PhilosophyConfig to fetch.
     */
    where: PhilosophyConfigWhereUniqueInput
  }

  /**
   * PhilosophyConfig findFirst
   */
  export type PhilosophyConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    /**
     * Filter, which PhilosophyConfig to fetch.
     */
    where?: PhilosophyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhilosophyConfigs to fetch.
     */
    orderBy?: PhilosophyConfigOrderByWithRelationInput | PhilosophyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhilosophyConfigs.
     */
    cursor?: PhilosophyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhilosophyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhilosophyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhilosophyConfigs.
     */
    distinct?: PhilosophyConfigScalarFieldEnum | PhilosophyConfigScalarFieldEnum[]
  }

  /**
   * PhilosophyConfig findFirstOrThrow
   */
  export type PhilosophyConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    /**
     * Filter, which PhilosophyConfig to fetch.
     */
    where?: PhilosophyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhilosophyConfigs to fetch.
     */
    orderBy?: PhilosophyConfigOrderByWithRelationInput | PhilosophyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhilosophyConfigs.
     */
    cursor?: PhilosophyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhilosophyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhilosophyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhilosophyConfigs.
     */
    distinct?: PhilosophyConfigScalarFieldEnum | PhilosophyConfigScalarFieldEnum[]
  }

  /**
   * PhilosophyConfig findMany
   */
  export type PhilosophyConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    /**
     * Filter, which PhilosophyConfigs to fetch.
     */
    where?: PhilosophyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhilosophyConfigs to fetch.
     */
    orderBy?: PhilosophyConfigOrderByWithRelationInput | PhilosophyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhilosophyConfigs.
     */
    cursor?: PhilosophyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhilosophyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhilosophyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhilosophyConfigs.
     */
    distinct?: PhilosophyConfigScalarFieldEnum | PhilosophyConfigScalarFieldEnum[]
  }

  /**
   * PhilosophyConfig create
   */
  export type PhilosophyConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a PhilosophyConfig.
     */
    data: XOR<PhilosophyConfigCreateInput, PhilosophyConfigUncheckedCreateInput>
  }

  /**
   * PhilosophyConfig createMany
   */
  export type PhilosophyConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhilosophyConfigs.
     */
    data: PhilosophyConfigCreateManyInput | PhilosophyConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhilosophyConfig update
   */
  export type PhilosophyConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a PhilosophyConfig.
     */
    data: XOR<PhilosophyConfigUpdateInput, PhilosophyConfigUncheckedUpdateInput>
    /**
     * Choose, which PhilosophyConfig to update.
     */
    where: PhilosophyConfigWhereUniqueInput
  }

  /**
   * PhilosophyConfig updateMany
   */
  export type PhilosophyConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhilosophyConfigs.
     */
    data: XOR<PhilosophyConfigUpdateManyMutationInput, PhilosophyConfigUncheckedUpdateManyInput>
    /**
     * Filter which PhilosophyConfigs to update
     */
    where?: PhilosophyConfigWhereInput
    /**
     * Limit how many PhilosophyConfigs to update.
     */
    limit?: number
  }

  /**
   * PhilosophyConfig upsert
   */
  export type PhilosophyConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the PhilosophyConfig to update in case it exists.
     */
    where: PhilosophyConfigWhereUniqueInput
    /**
     * In case the PhilosophyConfig found by the `where` argument doesn't exist, create a new PhilosophyConfig with this data.
     */
    create: XOR<PhilosophyConfigCreateInput, PhilosophyConfigUncheckedCreateInput>
    /**
     * In case the PhilosophyConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhilosophyConfigUpdateInput, PhilosophyConfigUncheckedUpdateInput>
  }

  /**
   * PhilosophyConfig delete
   */
  export type PhilosophyConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
    /**
     * Filter which PhilosophyConfig to delete.
     */
    where: PhilosophyConfigWhereUniqueInput
  }

  /**
   * PhilosophyConfig deleteMany
   */
  export type PhilosophyConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhilosophyConfigs to delete
     */
    where?: PhilosophyConfigWhereInput
    /**
     * Limit how many PhilosophyConfigs to delete.
     */
    limit?: number
  }

  /**
   * PhilosophyConfig without action
   */
  export type PhilosophyConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhilosophyConfig
     */
    select?: PhilosophyConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhilosophyConfig
     */
    omit?: PhilosophyConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhilosophyConfigInclude<ExtArgs> | null
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


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const VenueLocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    popupImageUrl: 'popupImageUrl',
    eventType: 'eventType',
    mapZoom: 'mapZoom',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type VenueLocationScalarFieldEnum = (typeof VenueLocationScalarFieldEnum)[keyof typeof VenueLocationScalarFieldEnum]


  export const EventScheduleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type EventScheduleScalarFieldEnum = (typeof EventScheduleScalarFieldEnum)[keyof typeof EventScheduleScalarFieldEnum]


  export const RSVPSubmissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    attendanceStatus: 'attendanceStatus',
    paxCount: 'paxCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId',
    idempotencyKey: 'idempotencyKey'
  };

  export type RSVPSubmissionScalarFieldEnum = (typeof RSVPSubmissionScalarFieldEnum)[keyof typeof RSVPSubmissionScalarFieldEnum]


  export const GuestbookEntryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    message: 'message',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId',
    idempotencyKey: 'idempotencyKey'
  };

  export type GuestbookEntryScalarFieldEnum = (typeof GuestbookEntryScalarFieldEnum)[keyof typeof GuestbookEntryScalarFieldEnum]


  export const CashlessAccountScalarFieldEnum: {
    id: 'id',
    bankName: 'bankName',
    accountNumber: 'accountNumber',
    accountHolderName: 'accountHolderName',
    bankLogoUrl: 'bankLogoUrl',
    qrCodeUrl: 'qrCodeUrl',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type CashlessAccountScalarFieldEnum = (typeof CashlessAccountScalarFieldEnum)[keyof typeof CashlessAccountScalarFieldEnum]


  export const GiftAddressScalarFieldEnum: {
    id: 'id',
    label: 'label',
    recipientName: 'recipientName',
    phone: 'phone',
    address: 'address',
    postalCode: 'postalCode',
    note: 'note',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type GiftAddressScalarFieldEnum = (typeof GiftAddressScalarFieldEnum)[keyof typeof GiftAddressScalarFieldEnum]


  export const StoryImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    caption: 'caption',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    storyItemId: 'storyItemId'
  };

  export type StoryImageScalarFieldEnum = (typeof StoryImageScalarFieldEnum)[keyof typeof StoryImageScalarFieldEnum]


  export const InvitationConfigScalarFieldEnum: {
    id: 'id',
    heroCoupleNames: 'heroCoupleNames',
    heroOpeningLine: 'heroOpeningLine',
    heroWeddingDateText: 'heroWeddingDateText',
    heroBackgroundImage: 'heroBackgroundImage',
    weddingDate: 'weddingDate',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    backgroundColor: 'backgroundColor',
    textColor: 'textColor',
    backgroundMusicUrl: 'backgroundMusicUrl',
    footerGreeting: 'footerGreeting',
    footerClosingText: 'footerClosingText',
    lockedLandingEnabled: 'lockedLandingEnabled',
    lockedLandingButtonText: 'lockedLandingButtonText',
    lockedLandingGreeting: 'lockedLandingGreeting',
    musicEnabled: 'musicEnabled',
    musicButtonPosition: 'musicButtonPosition',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type InvitationConfigScalarFieldEnum = (typeof InvitationConfigScalarFieldEnum)[keyof typeof InvitationConfigScalarFieldEnum]


  export const CoupleInfoScalarFieldEnum: {
    id: 'id',
    groomName: 'groomName',
    brideName: 'brideName',
    groomParents: 'groomParents',
    brideParents: 'brideParents',
    greetingText: 'greetingText',
    couplePhotoUrl: 'couplePhotoUrl',
    groomPhotoUrl: 'groomPhotoUrl',
    bridePhotoUrl: 'bridePhotoUrl',
    groomSocialLink: 'groomSocialLink',
    brideSocialLink: 'brideSocialLink',
    bibleVerse: 'bibleVerse',
    bibleReference: 'bibleReference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type CoupleInfoScalarFieldEnum = (typeof CoupleInfoScalarFieldEnum)[keyof typeof CoupleInfoScalarFieldEnum]


  export const StoryItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    imageUrl: 'imageUrl',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type StoryItemScalarFieldEnum = (typeof StoryItemScalarFieldEnum)[keyof typeof StoryItemScalarFieldEnum]


  export const GalleryImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    caption: 'caption',
    sortOrder: 'sortOrder',
    aspectRatio: 'aspectRatio',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type GalleryImageScalarFieldEnum = (typeof GalleryImageScalarFieldEnum)[keyof typeof GalleryImageScalarFieldEnum]


  export const PhilosophyConfigScalarFieldEnum: {
    id: 'id',
    quoteText: 'quoteText',
    quoteMeaning: 'quoteMeaning',
    prayerText: 'prayerText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type PhilosophyConfigScalarFieldEnum = (typeof PhilosophyConfigScalarFieldEnum)[keyof typeof PhilosophyConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminUserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type AdminUserOrderByRelevanceFieldEnum = (typeof AdminUserOrderByRelevanceFieldEnum)[keyof typeof AdminUserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const VenueLocationOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address',
    popupImageUrl: 'popupImageUrl',
    eventType: 'eventType'
  };

  export type VenueLocationOrderByRelevanceFieldEnum = (typeof VenueLocationOrderByRelevanceFieldEnum)[keyof typeof VenueLocationOrderByRelevanceFieldEnum]


  export const EventScheduleOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type EventScheduleOrderByRelevanceFieldEnum = (typeof EventScheduleOrderByRelevanceFieldEnum)[keyof typeof EventScheduleOrderByRelevanceFieldEnum]


  export const RSVPSubmissionOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    idempotencyKey: 'idempotencyKey'
  };

  export type RSVPSubmissionOrderByRelevanceFieldEnum = (typeof RSVPSubmissionOrderByRelevanceFieldEnum)[keyof typeof RSVPSubmissionOrderByRelevanceFieldEnum]


  export const GuestbookEntryOrderByRelevanceFieldEnum: {
    name: 'name',
    message: 'message',
    idempotencyKey: 'idempotencyKey'
  };

  export type GuestbookEntryOrderByRelevanceFieldEnum = (typeof GuestbookEntryOrderByRelevanceFieldEnum)[keyof typeof GuestbookEntryOrderByRelevanceFieldEnum]


  export const CashlessAccountOrderByRelevanceFieldEnum: {
    bankName: 'bankName',
    accountNumber: 'accountNumber',
    accountHolderName: 'accountHolderName',
    bankLogoUrl: 'bankLogoUrl',
    qrCodeUrl: 'qrCodeUrl'
  };

  export type CashlessAccountOrderByRelevanceFieldEnum = (typeof CashlessAccountOrderByRelevanceFieldEnum)[keyof typeof CashlessAccountOrderByRelevanceFieldEnum]


  export const GiftAddressOrderByRelevanceFieldEnum: {
    label: 'label',
    recipientName: 'recipientName',
    phone: 'phone',
    address: 'address',
    postalCode: 'postalCode',
    note: 'note'
  };

  export type GiftAddressOrderByRelevanceFieldEnum = (typeof GiftAddressOrderByRelevanceFieldEnum)[keyof typeof GiftAddressOrderByRelevanceFieldEnum]


  export const StoryImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl',
    caption: 'caption'
  };

  export type StoryImageOrderByRelevanceFieldEnum = (typeof StoryImageOrderByRelevanceFieldEnum)[keyof typeof StoryImageOrderByRelevanceFieldEnum]


  export const InvitationConfigOrderByRelevanceFieldEnum: {
    heroCoupleNames: 'heroCoupleNames',
    heroOpeningLine: 'heroOpeningLine',
    heroWeddingDateText: 'heroWeddingDateText',
    heroBackgroundImage: 'heroBackgroundImage',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    backgroundColor: 'backgroundColor',
    textColor: 'textColor',
    backgroundMusicUrl: 'backgroundMusicUrl',
    footerGreeting: 'footerGreeting',
    footerClosingText: 'footerClosingText',
    lockedLandingButtonText: 'lockedLandingButtonText',
    lockedLandingGreeting: 'lockedLandingGreeting',
    musicButtonPosition: 'musicButtonPosition'
  };

  export type InvitationConfigOrderByRelevanceFieldEnum = (typeof InvitationConfigOrderByRelevanceFieldEnum)[keyof typeof InvitationConfigOrderByRelevanceFieldEnum]


  export const CoupleInfoOrderByRelevanceFieldEnum: {
    groomName: 'groomName',
    brideName: 'brideName',
    groomParents: 'groomParents',
    brideParents: 'brideParents',
    greetingText: 'greetingText',
    couplePhotoUrl: 'couplePhotoUrl',
    groomPhotoUrl: 'groomPhotoUrl',
    bridePhotoUrl: 'bridePhotoUrl',
    groomSocialLink: 'groomSocialLink',
    brideSocialLink: 'brideSocialLink',
    bibleVerse: 'bibleVerse',
    bibleReference: 'bibleReference'
  };

  export type CoupleInfoOrderByRelevanceFieldEnum = (typeof CoupleInfoOrderByRelevanceFieldEnum)[keyof typeof CoupleInfoOrderByRelevanceFieldEnum]


  export const StoryItemOrderByRelevanceFieldEnum: {
    title: 'title',
    body: 'body',
    imageUrl: 'imageUrl'
  };

  export type StoryItemOrderByRelevanceFieldEnum = (typeof StoryItemOrderByRelevanceFieldEnum)[keyof typeof StoryItemOrderByRelevanceFieldEnum]


  export const GalleryImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl',
    caption: 'caption',
    aspectRatio: 'aspectRatio'
  };

  export type GalleryImageOrderByRelevanceFieldEnum = (typeof GalleryImageOrderByRelevanceFieldEnum)[keyof typeof GalleryImageOrderByRelevanceFieldEnum]


  export const PhilosophyConfigOrderByRelevanceFieldEnum: {
    quoteText: 'quoteText',
    quoteMeaning: 'quoteMeaning',
    prayerText: 'prayerText'
  };

  export type PhilosophyConfigOrderByRelevanceFieldEnum = (typeof PhilosophyConfigOrderByRelevanceFieldEnum)[keyof typeof PhilosophyConfigOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    username?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminUserOrderByRelevanceInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "username">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: IntFilter<"Invitation"> | number
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    cashlessAccounts?: CashlessAccountListRelationFilter
    eventSchedules?: EventScheduleListRelationFilter
    guestbookEntries?: GuestbookEntryListRelationFilter
    rsvpSubmissions?: RSVPSubmissionListRelationFilter
    venueLocations?: VenueLocationListRelationFilter
    coupleInfos?: CoupleInfoListRelationFilter
    storyItems?: StoryItemListRelationFilter
    galleryImages?: GalleryImageListRelationFilter
    giftAddresses?: GiftAddressListRelationFilter
    config?: XOR<InvitationConfigNullableScalarRelationFilter, InvitationConfigWhereInput> | null
    philosophyConfig?: XOR<PhilosophyConfigNullableScalarRelationFilter, PhilosophyConfigWhereInput> | null
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cashlessAccounts?: CashlessAccountOrderByRelationAggregateInput
    eventSchedules?: EventScheduleOrderByRelationAggregateInput
    guestbookEntries?: GuestbookEntryOrderByRelationAggregateInput
    rsvpSubmissions?: RSVPSubmissionOrderByRelationAggregateInput
    venueLocations?: VenueLocationOrderByRelationAggregateInput
    coupleInfos?: CoupleInfoOrderByRelationAggregateInput
    storyItems?: StoryItemOrderByRelationAggregateInput
    galleryImages?: GalleryImageOrderByRelationAggregateInput
    giftAddresses?: GiftAddressOrderByRelationAggregateInput
    config?: InvitationConfigOrderByWithRelationInput
    philosophyConfig?: PhilosophyConfigOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    cashlessAccounts?: CashlessAccountListRelationFilter
    eventSchedules?: EventScheduleListRelationFilter
    guestbookEntries?: GuestbookEntryListRelationFilter
    rsvpSubmissions?: RSVPSubmissionListRelationFilter
    venueLocations?: VenueLocationListRelationFilter
    coupleInfos?: CoupleInfoListRelationFilter
    storyItems?: StoryItemListRelationFilter
    galleryImages?: GalleryImageListRelationFilter
    giftAddresses?: GiftAddressListRelationFilter
    config?: XOR<InvitationConfigNullableScalarRelationFilter, InvitationConfigWhereInput> | null
    philosophyConfig?: XOR<PhilosophyConfigNullableScalarRelationFilter, PhilosophyConfigWhereInput> | null
  }, "id">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _avg?: InvitationAvgOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
    _sum?: InvitationSumOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invitation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type VenueLocationWhereInput = {
    AND?: VenueLocationWhereInput | VenueLocationWhereInput[]
    OR?: VenueLocationWhereInput[]
    NOT?: VenueLocationWhereInput | VenueLocationWhereInput[]
    id?: IntFilter<"VenueLocation"> | number
    name?: StringFilter<"VenueLocation"> | string
    address?: StringFilter<"VenueLocation"> | string
    latitude?: FloatFilter<"VenueLocation"> | number
    longitude?: FloatFilter<"VenueLocation"> | number
    popupImageUrl?: StringNullableFilter<"VenueLocation"> | string | null
    eventType?: StringNullableFilter<"VenueLocation"> | string | null
    mapZoom?: IntFilter<"VenueLocation"> | number
    createdAt?: DateTimeFilter<"VenueLocation"> | Date | string
    updatedAt?: DateTimeFilter<"VenueLocation"> | Date | string
    invitationId?: IntFilter<"VenueLocation"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type VenueLocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    popupImageUrl?: SortOrderInput | SortOrder
    eventType?: SortOrderInput | SortOrder
    mapZoom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: VenueLocationOrderByRelevanceInput
  }

  export type VenueLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VenueLocationWhereInput | VenueLocationWhereInput[]
    OR?: VenueLocationWhereInput[]
    NOT?: VenueLocationWhereInput | VenueLocationWhereInput[]
    name?: StringFilter<"VenueLocation"> | string
    address?: StringFilter<"VenueLocation"> | string
    latitude?: FloatFilter<"VenueLocation"> | number
    longitude?: FloatFilter<"VenueLocation"> | number
    popupImageUrl?: StringNullableFilter<"VenueLocation"> | string | null
    eventType?: StringNullableFilter<"VenueLocation"> | string | null
    mapZoom?: IntFilter<"VenueLocation"> | number
    createdAt?: DateTimeFilter<"VenueLocation"> | Date | string
    updatedAt?: DateTimeFilter<"VenueLocation"> | Date | string
    invitationId?: IntFilter<"VenueLocation"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id">

  export type VenueLocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    popupImageUrl?: SortOrderInput | SortOrder
    eventType?: SortOrderInput | SortOrder
    mapZoom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    _count?: VenueLocationCountOrderByAggregateInput
    _avg?: VenueLocationAvgOrderByAggregateInput
    _max?: VenueLocationMaxOrderByAggregateInput
    _min?: VenueLocationMinOrderByAggregateInput
    _sum?: VenueLocationSumOrderByAggregateInput
  }

  export type VenueLocationScalarWhereWithAggregatesInput = {
    AND?: VenueLocationScalarWhereWithAggregatesInput | VenueLocationScalarWhereWithAggregatesInput[]
    OR?: VenueLocationScalarWhereWithAggregatesInput[]
    NOT?: VenueLocationScalarWhereWithAggregatesInput | VenueLocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VenueLocation"> | number
    name?: StringWithAggregatesFilter<"VenueLocation"> | string
    address?: StringWithAggregatesFilter<"VenueLocation"> | string
    latitude?: FloatWithAggregatesFilter<"VenueLocation"> | number
    longitude?: FloatWithAggregatesFilter<"VenueLocation"> | number
    popupImageUrl?: StringNullableWithAggregatesFilter<"VenueLocation"> | string | null
    eventType?: StringNullableWithAggregatesFilter<"VenueLocation"> | string | null
    mapZoom?: IntWithAggregatesFilter<"VenueLocation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VenueLocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VenueLocation"> | Date | string
    invitationId?: IntWithAggregatesFilter<"VenueLocation"> | number
  }

  export type EventScheduleWhereInput = {
    AND?: EventScheduleWhereInput | EventScheduleWhereInput[]
    OR?: EventScheduleWhereInput[]
    NOT?: EventScheduleWhereInput | EventScheduleWhereInput[]
    id?: IntFilter<"EventSchedule"> | number
    title?: StringFilter<"EventSchedule"> | string
    date?: DateTimeFilter<"EventSchedule"> | Date | string
    startTime?: DateTimeFilter<"EventSchedule"> | Date | string
    endTime?: DateTimeFilter<"EventSchedule"> | Date | string
    createdAt?: DateTimeFilter<"EventSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"EventSchedule"> | Date | string
    invitationId?: IntFilter<"EventSchedule"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type EventScheduleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: EventScheduleOrderByRelevanceInput
  }

  export type EventScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventScheduleWhereInput | EventScheduleWhereInput[]
    OR?: EventScheduleWhereInput[]
    NOT?: EventScheduleWhereInput | EventScheduleWhereInput[]
    title?: StringFilter<"EventSchedule"> | string
    date?: DateTimeFilter<"EventSchedule"> | Date | string
    startTime?: DateTimeFilter<"EventSchedule"> | Date | string
    endTime?: DateTimeFilter<"EventSchedule"> | Date | string
    createdAt?: DateTimeFilter<"EventSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"EventSchedule"> | Date | string
    invitationId?: IntFilter<"EventSchedule"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id">

  export type EventScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    _count?: EventScheduleCountOrderByAggregateInput
    _avg?: EventScheduleAvgOrderByAggregateInput
    _max?: EventScheduleMaxOrderByAggregateInput
    _min?: EventScheduleMinOrderByAggregateInput
    _sum?: EventScheduleSumOrderByAggregateInput
  }

  export type EventScheduleScalarWhereWithAggregatesInput = {
    AND?: EventScheduleScalarWhereWithAggregatesInput | EventScheduleScalarWhereWithAggregatesInput[]
    OR?: EventScheduleScalarWhereWithAggregatesInput[]
    NOT?: EventScheduleScalarWhereWithAggregatesInput | EventScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventSchedule"> | number
    title?: StringWithAggregatesFilter<"EventSchedule"> | string
    date?: DateTimeWithAggregatesFilter<"EventSchedule"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"EventSchedule"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"EventSchedule"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EventSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventSchedule"> | Date | string
    invitationId?: IntWithAggregatesFilter<"EventSchedule"> | number
  }

  export type RSVPSubmissionWhereInput = {
    AND?: RSVPSubmissionWhereInput | RSVPSubmissionWhereInput[]
    OR?: RSVPSubmissionWhereInput[]
    NOT?: RSVPSubmissionWhereInput | RSVPSubmissionWhereInput[]
    id?: IntFilter<"RSVPSubmission"> | number
    name?: StringFilter<"RSVPSubmission"> | string
    email?: StringFilter<"RSVPSubmission"> | string
    attendanceStatus?: EnumAttendanceStatusFilter<"RSVPSubmission"> | $Enums.AttendanceStatus
    paxCount?: IntFilter<"RSVPSubmission"> | number
    createdAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    invitationId?: IntFilter<"RSVPSubmission"> | number
    idempotencyKey?: StringNullableFilter<"RSVPSubmission"> | string | null
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type RSVPSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    attendanceStatus?: SortOrder
    paxCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: RSVPSubmissionOrderByRelevanceInput
  }

  export type RSVPSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idempotencyKey?: string
    AND?: RSVPSubmissionWhereInput | RSVPSubmissionWhereInput[]
    OR?: RSVPSubmissionWhereInput[]
    NOT?: RSVPSubmissionWhereInput | RSVPSubmissionWhereInput[]
    name?: StringFilter<"RSVPSubmission"> | string
    email?: StringFilter<"RSVPSubmission"> | string
    attendanceStatus?: EnumAttendanceStatusFilter<"RSVPSubmission"> | $Enums.AttendanceStatus
    paxCount?: IntFilter<"RSVPSubmission"> | number
    createdAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    invitationId?: IntFilter<"RSVPSubmission"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id" | "idempotencyKey">

  export type RSVPSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    attendanceStatus?: SortOrder
    paxCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    _count?: RSVPSubmissionCountOrderByAggregateInput
    _avg?: RSVPSubmissionAvgOrderByAggregateInput
    _max?: RSVPSubmissionMaxOrderByAggregateInput
    _min?: RSVPSubmissionMinOrderByAggregateInput
    _sum?: RSVPSubmissionSumOrderByAggregateInput
  }

  export type RSVPSubmissionScalarWhereWithAggregatesInput = {
    AND?: RSVPSubmissionScalarWhereWithAggregatesInput | RSVPSubmissionScalarWhereWithAggregatesInput[]
    OR?: RSVPSubmissionScalarWhereWithAggregatesInput[]
    NOT?: RSVPSubmissionScalarWhereWithAggregatesInput | RSVPSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RSVPSubmission"> | number
    name?: StringWithAggregatesFilter<"RSVPSubmission"> | string
    email?: StringWithAggregatesFilter<"RSVPSubmission"> | string
    attendanceStatus?: EnumAttendanceStatusWithAggregatesFilter<"RSVPSubmission"> | $Enums.AttendanceStatus
    paxCount?: IntWithAggregatesFilter<"RSVPSubmission"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RSVPSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RSVPSubmission"> | Date | string
    invitationId?: IntWithAggregatesFilter<"RSVPSubmission"> | number
    idempotencyKey?: StringNullableWithAggregatesFilter<"RSVPSubmission"> | string | null
  }

  export type GuestbookEntryWhereInput = {
    AND?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    OR?: GuestbookEntryWhereInput[]
    NOT?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    id?: IntFilter<"GuestbookEntry"> | number
    name?: StringFilter<"GuestbookEntry"> | string
    message?: StringFilter<"GuestbookEntry"> | string
    isVisible?: BoolFilter<"GuestbookEntry"> | boolean
    createdAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    invitationId?: IntFilter<"GuestbookEntry"> | number
    idempotencyKey?: StringNullableFilter<"GuestbookEntry"> | string | null
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type GuestbookEntryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: GuestbookEntryOrderByRelevanceInput
  }

  export type GuestbookEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idempotencyKey?: string
    AND?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    OR?: GuestbookEntryWhereInput[]
    NOT?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    name?: StringFilter<"GuestbookEntry"> | string
    message?: StringFilter<"GuestbookEntry"> | string
    isVisible?: BoolFilter<"GuestbookEntry"> | boolean
    createdAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    invitationId?: IntFilter<"GuestbookEntry"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id" | "idempotencyKey">

  export type GuestbookEntryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    _count?: GuestbookEntryCountOrderByAggregateInput
    _avg?: GuestbookEntryAvgOrderByAggregateInput
    _max?: GuestbookEntryMaxOrderByAggregateInput
    _min?: GuestbookEntryMinOrderByAggregateInput
    _sum?: GuestbookEntrySumOrderByAggregateInput
  }

  export type GuestbookEntryScalarWhereWithAggregatesInput = {
    AND?: GuestbookEntryScalarWhereWithAggregatesInput | GuestbookEntryScalarWhereWithAggregatesInput[]
    OR?: GuestbookEntryScalarWhereWithAggregatesInput[]
    NOT?: GuestbookEntryScalarWhereWithAggregatesInput | GuestbookEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GuestbookEntry"> | number
    name?: StringWithAggregatesFilter<"GuestbookEntry"> | string
    message?: StringWithAggregatesFilter<"GuestbookEntry"> | string
    isVisible?: BoolWithAggregatesFilter<"GuestbookEntry"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuestbookEntry"> | Date | string
    invitationId?: IntWithAggregatesFilter<"GuestbookEntry"> | number
    idempotencyKey?: StringNullableWithAggregatesFilter<"GuestbookEntry"> | string | null
  }

  export type CashlessAccountWhereInput = {
    AND?: CashlessAccountWhereInput | CashlessAccountWhereInput[]
    OR?: CashlessAccountWhereInput[]
    NOT?: CashlessAccountWhereInput | CashlessAccountWhereInput[]
    id?: IntFilter<"CashlessAccount"> | number
    bankName?: StringFilter<"CashlessAccount"> | string
    accountNumber?: StringFilter<"CashlessAccount"> | string
    accountHolderName?: StringFilter<"CashlessAccount"> | string
    bankLogoUrl?: StringNullableFilter<"CashlessAccount"> | string | null
    qrCodeUrl?: StringNullableFilter<"CashlessAccount"> | string | null
    sortOrder?: IntFilter<"CashlessAccount"> | number
    isActive?: BoolFilter<"CashlessAccount"> | boolean
    createdAt?: DateTimeFilter<"CashlessAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CashlessAccount"> | Date | string
    invitationId?: IntFilter<"CashlessAccount"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type CashlessAccountOrderByWithRelationInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    bankLogoUrl?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: CashlessAccountOrderByRelevanceInput
  }

  export type CashlessAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CashlessAccountWhereInput | CashlessAccountWhereInput[]
    OR?: CashlessAccountWhereInput[]
    NOT?: CashlessAccountWhereInput | CashlessAccountWhereInput[]
    bankName?: StringFilter<"CashlessAccount"> | string
    accountNumber?: StringFilter<"CashlessAccount"> | string
    accountHolderName?: StringFilter<"CashlessAccount"> | string
    bankLogoUrl?: StringNullableFilter<"CashlessAccount"> | string | null
    qrCodeUrl?: StringNullableFilter<"CashlessAccount"> | string | null
    sortOrder?: IntFilter<"CashlessAccount"> | number
    isActive?: BoolFilter<"CashlessAccount"> | boolean
    createdAt?: DateTimeFilter<"CashlessAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CashlessAccount"> | Date | string
    invitationId?: IntFilter<"CashlessAccount"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id">

  export type CashlessAccountOrderByWithAggregationInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    bankLogoUrl?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    _count?: CashlessAccountCountOrderByAggregateInput
    _avg?: CashlessAccountAvgOrderByAggregateInput
    _max?: CashlessAccountMaxOrderByAggregateInput
    _min?: CashlessAccountMinOrderByAggregateInput
    _sum?: CashlessAccountSumOrderByAggregateInput
  }

  export type CashlessAccountScalarWhereWithAggregatesInput = {
    AND?: CashlessAccountScalarWhereWithAggregatesInput | CashlessAccountScalarWhereWithAggregatesInput[]
    OR?: CashlessAccountScalarWhereWithAggregatesInput[]
    NOT?: CashlessAccountScalarWhereWithAggregatesInput | CashlessAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CashlessAccount"> | number
    bankName?: StringWithAggregatesFilter<"CashlessAccount"> | string
    accountNumber?: StringWithAggregatesFilter<"CashlessAccount"> | string
    accountHolderName?: StringWithAggregatesFilter<"CashlessAccount"> | string
    bankLogoUrl?: StringNullableWithAggregatesFilter<"CashlessAccount"> | string | null
    qrCodeUrl?: StringNullableWithAggregatesFilter<"CashlessAccount"> | string | null
    sortOrder?: IntWithAggregatesFilter<"CashlessAccount"> | number
    isActive?: BoolWithAggregatesFilter<"CashlessAccount"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CashlessAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CashlessAccount"> | Date | string
    invitationId?: IntWithAggregatesFilter<"CashlessAccount"> | number
  }

  export type GiftAddressWhereInput = {
    AND?: GiftAddressWhereInput | GiftAddressWhereInput[]
    OR?: GiftAddressWhereInput[]
    NOT?: GiftAddressWhereInput | GiftAddressWhereInput[]
    id?: IntFilter<"GiftAddress"> | number
    label?: StringFilter<"GiftAddress"> | string
    recipientName?: StringFilter<"GiftAddress"> | string
    phone?: StringNullableFilter<"GiftAddress"> | string | null
    address?: StringFilter<"GiftAddress"> | string
    postalCode?: StringNullableFilter<"GiftAddress"> | string | null
    note?: StringNullableFilter<"GiftAddress"> | string | null
    isActive?: BoolFilter<"GiftAddress"> | boolean
    createdAt?: DateTimeFilter<"GiftAddress"> | Date | string
    updatedAt?: DateTimeFilter<"GiftAddress"> | Date | string
    invitationId?: IntFilter<"GiftAddress"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type GiftAddressOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: GiftAddressOrderByRelevanceInput
  }

  export type GiftAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GiftAddressWhereInput | GiftAddressWhereInput[]
    OR?: GiftAddressWhereInput[]
    NOT?: GiftAddressWhereInput | GiftAddressWhereInput[]
    label?: StringFilter<"GiftAddress"> | string
    recipientName?: StringFilter<"GiftAddress"> | string
    phone?: StringNullableFilter<"GiftAddress"> | string | null
    address?: StringFilter<"GiftAddress"> | string
    postalCode?: StringNullableFilter<"GiftAddress"> | string | null
    note?: StringNullableFilter<"GiftAddress"> | string | null
    isActive?: BoolFilter<"GiftAddress"> | boolean
    createdAt?: DateTimeFilter<"GiftAddress"> | Date | string
    updatedAt?: DateTimeFilter<"GiftAddress"> | Date | string
    invitationId?: IntFilter<"GiftAddress"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id">

  export type GiftAddressOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    _count?: GiftAddressCountOrderByAggregateInput
    _avg?: GiftAddressAvgOrderByAggregateInput
    _max?: GiftAddressMaxOrderByAggregateInput
    _min?: GiftAddressMinOrderByAggregateInput
    _sum?: GiftAddressSumOrderByAggregateInput
  }

  export type GiftAddressScalarWhereWithAggregatesInput = {
    AND?: GiftAddressScalarWhereWithAggregatesInput | GiftAddressScalarWhereWithAggregatesInput[]
    OR?: GiftAddressScalarWhereWithAggregatesInput[]
    NOT?: GiftAddressScalarWhereWithAggregatesInput | GiftAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GiftAddress"> | number
    label?: StringWithAggregatesFilter<"GiftAddress"> | string
    recipientName?: StringWithAggregatesFilter<"GiftAddress"> | string
    phone?: StringNullableWithAggregatesFilter<"GiftAddress"> | string | null
    address?: StringWithAggregatesFilter<"GiftAddress"> | string
    postalCode?: StringNullableWithAggregatesFilter<"GiftAddress"> | string | null
    note?: StringNullableWithAggregatesFilter<"GiftAddress"> | string | null
    isActive?: BoolWithAggregatesFilter<"GiftAddress"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GiftAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GiftAddress"> | Date | string
    invitationId?: IntWithAggregatesFilter<"GiftAddress"> | number
  }

  export type StoryImageWhereInput = {
    AND?: StoryImageWhereInput | StoryImageWhereInput[]
    OR?: StoryImageWhereInput[]
    NOT?: StoryImageWhereInput | StoryImageWhereInput[]
    id?: IntFilter<"StoryImage"> | number
    imageUrl?: StringFilter<"StoryImage"> | string
    caption?: StringNullableFilter<"StoryImage"> | string | null
    sortOrder?: IntFilter<"StoryImage"> | number
    createdAt?: DateTimeFilter<"StoryImage"> | Date | string
    updatedAt?: DateTimeFilter<"StoryImage"> | Date | string
    storyItemId?: IntFilter<"StoryImage"> | number
    storyItem?: XOR<StoryItemScalarRelationFilter, StoryItemWhereInput>
  }

  export type StoryImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storyItemId?: SortOrder
    storyItem?: StoryItemOrderByWithRelationInput
    _relevance?: StoryImageOrderByRelevanceInput
  }

  export type StoryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoryImageWhereInput | StoryImageWhereInput[]
    OR?: StoryImageWhereInput[]
    NOT?: StoryImageWhereInput | StoryImageWhereInput[]
    imageUrl?: StringFilter<"StoryImage"> | string
    caption?: StringNullableFilter<"StoryImage"> | string | null
    sortOrder?: IntFilter<"StoryImage"> | number
    createdAt?: DateTimeFilter<"StoryImage"> | Date | string
    updatedAt?: DateTimeFilter<"StoryImage"> | Date | string
    storyItemId?: IntFilter<"StoryImage"> | number
    storyItem?: XOR<StoryItemScalarRelationFilter, StoryItemWhereInput>
  }, "id">

  export type StoryImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storyItemId?: SortOrder
    _count?: StoryImageCountOrderByAggregateInput
    _avg?: StoryImageAvgOrderByAggregateInput
    _max?: StoryImageMaxOrderByAggregateInput
    _min?: StoryImageMinOrderByAggregateInput
    _sum?: StoryImageSumOrderByAggregateInput
  }

  export type StoryImageScalarWhereWithAggregatesInput = {
    AND?: StoryImageScalarWhereWithAggregatesInput | StoryImageScalarWhereWithAggregatesInput[]
    OR?: StoryImageScalarWhereWithAggregatesInput[]
    NOT?: StoryImageScalarWhereWithAggregatesInput | StoryImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoryImage"> | number
    imageUrl?: StringWithAggregatesFilter<"StoryImage"> | string
    caption?: StringNullableWithAggregatesFilter<"StoryImage"> | string | null
    sortOrder?: IntWithAggregatesFilter<"StoryImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StoryImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoryImage"> | Date | string
    storyItemId?: IntWithAggregatesFilter<"StoryImage"> | number
  }

  export type InvitationConfigWhereInput = {
    AND?: InvitationConfigWhereInput | InvitationConfigWhereInput[]
    OR?: InvitationConfigWhereInput[]
    NOT?: InvitationConfigWhereInput | InvitationConfigWhereInput[]
    id?: IntFilter<"InvitationConfig"> | number
    heroCoupleNames?: StringFilter<"InvitationConfig"> | string
    heroOpeningLine?: StringFilter<"InvitationConfig"> | string
    heroWeddingDateText?: StringFilter<"InvitationConfig"> | string
    heroBackgroundImage?: StringNullableFilter<"InvitationConfig"> | string | null
    weddingDate?: DateTimeFilter<"InvitationConfig"> | Date | string
    primaryColor?: StringFilter<"InvitationConfig"> | string
    secondaryColor?: StringFilter<"InvitationConfig"> | string
    backgroundColor?: StringFilter<"InvitationConfig"> | string
    textColor?: StringFilter<"InvitationConfig"> | string
    backgroundMusicUrl?: StringNullableFilter<"InvitationConfig"> | string | null
    footerGreeting?: StringFilter<"InvitationConfig"> | string
    footerClosingText?: StringFilter<"InvitationConfig"> | string
    lockedLandingEnabled?: BoolFilter<"InvitationConfig"> | boolean
    lockedLandingButtonText?: StringFilter<"InvitationConfig"> | string
    lockedLandingGreeting?: StringNullableFilter<"InvitationConfig"> | string | null
    musicEnabled?: BoolFilter<"InvitationConfig"> | boolean
    musicButtonPosition?: StringFilter<"InvitationConfig"> | string
    createdAt?: DateTimeFilter<"InvitationConfig"> | Date | string
    updatedAt?: DateTimeFilter<"InvitationConfig"> | Date | string
    invitationId?: IntFilter<"InvitationConfig"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type InvitationConfigOrderByWithRelationInput = {
    id?: SortOrder
    heroCoupleNames?: SortOrder
    heroOpeningLine?: SortOrder
    heroWeddingDateText?: SortOrder
    heroBackgroundImage?: SortOrderInput | SortOrder
    weddingDate?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    backgroundMusicUrl?: SortOrderInput | SortOrder
    footerGreeting?: SortOrder
    footerClosingText?: SortOrder
    lockedLandingEnabled?: SortOrder
    lockedLandingButtonText?: SortOrder
    lockedLandingGreeting?: SortOrderInput | SortOrder
    musicEnabled?: SortOrder
    musicButtonPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: InvitationConfigOrderByRelevanceInput
  }

  export type InvitationConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invitationId?: number
    AND?: InvitationConfigWhereInput | InvitationConfigWhereInput[]
    OR?: InvitationConfigWhereInput[]
    NOT?: InvitationConfigWhereInput | InvitationConfigWhereInput[]
    heroCoupleNames?: StringFilter<"InvitationConfig"> | string
    heroOpeningLine?: StringFilter<"InvitationConfig"> | string
    heroWeddingDateText?: StringFilter<"InvitationConfig"> | string
    heroBackgroundImage?: StringNullableFilter<"InvitationConfig"> | string | null
    weddingDate?: DateTimeFilter<"InvitationConfig"> | Date | string
    primaryColor?: StringFilter<"InvitationConfig"> | string
    secondaryColor?: StringFilter<"InvitationConfig"> | string
    backgroundColor?: StringFilter<"InvitationConfig"> | string
    textColor?: StringFilter<"InvitationConfig"> | string
    backgroundMusicUrl?: StringNullableFilter<"InvitationConfig"> | string | null
    footerGreeting?: StringFilter<"InvitationConfig"> | string
    footerClosingText?: StringFilter<"InvitationConfig"> | string
    lockedLandingEnabled?: BoolFilter<"InvitationConfig"> | boolean
    lockedLandingButtonText?: StringFilter<"InvitationConfig"> | string
    lockedLandingGreeting?: StringNullableFilter<"InvitationConfig"> | string | null
    musicEnabled?: BoolFilter<"InvitationConfig"> | boolean
    musicButtonPosition?: StringFilter<"InvitationConfig"> | string
    createdAt?: DateTimeFilter<"InvitationConfig"> | Date | string
    updatedAt?: DateTimeFilter<"InvitationConfig"> | Date | string
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id" | "invitationId">

  export type InvitationConfigOrderByWithAggregationInput = {
    id?: SortOrder
    heroCoupleNames?: SortOrder
    heroOpeningLine?: SortOrder
    heroWeddingDateText?: SortOrder
    heroBackgroundImage?: SortOrderInput | SortOrder
    weddingDate?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    backgroundMusicUrl?: SortOrderInput | SortOrder
    footerGreeting?: SortOrder
    footerClosingText?: SortOrder
    lockedLandingEnabled?: SortOrder
    lockedLandingButtonText?: SortOrder
    lockedLandingGreeting?: SortOrderInput | SortOrder
    musicEnabled?: SortOrder
    musicButtonPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    _count?: InvitationConfigCountOrderByAggregateInput
    _avg?: InvitationConfigAvgOrderByAggregateInput
    _max?: InvitationConfigMaxOrderByAggregateInput
    _min?: InvitationConfigMinOrderByAggregateInput
    _sum?: InvitationConfigSumOrderByAggregateInput
  }

  export type InvitationConfigScalarWhereWithAggregatesInput = {
    AND?: InvitationConfigScalarWhereWithAggregatesInput | InvitationConfigScalarWhereWithAggregatesInput[]
    OR?: InvitationConfigScalarWhereWithAggregatesInput[]
    NOT?: InvitationConfigScalarWhereWithAggregatesInput | InvitationConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InvitationConfig"> | number
    heroCoupleNames?: StringWithAggregatesFilter<"InvitationConfig"> | string
    heroOpeningLine?: StringWithAggregatesFilter<"InvitationConfig"> | string
    heroWeddingDateText?: StringWithAggregatesFilter<"InvitationConfig"> | string
    heroBackgroundImage?: StringNullableWithAggregatesFilter<"InvitationConfig"> | string | null
    weddingDate?: DateTimeWithAggregatesFilter<"InvitationConfig"> | Date | string
    primaryColor?: StringWithAggregatesFilter<"InvitationConfig"> | string
    secondaryColor?: StringWithAggregatesFilter<"InvitationConfig"> | string
    backgroundColor?: StringWithAggregatesFilter<"InvitationConfig"> | string
    textColor?: StringWithAggregatesFilter<"InvitationConfig"> | string
    backgroundMusicUrl?: StringNullableWithAggregatesFilter<"InvitationConfig"> | string | null
    footerGreeting?: StringWithAggregatesFilter<"InvitationConfig"> | string
    footerClosingText?: StringWithAggregatesFilter<"InvitationConfig"> | string
    lockedLandingEnabled?: BoolWithAggregatesFilter<"InvitationConfig"> | boolean
    lockedLandingButtonText?: StringWithAggregatesFilter<"InvitationConfig"> | string
    lockedLandingGreeting?: StringNullableWithAggregatesFilter<"InvitationConfig"> | string | null
    musicEnabled?: BoolWithAggregatesFilter<"InvitationConfig"> | boolean
    musicButtonPosition?: StringWithAggregatesFilter<"InvitationConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InvitationConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InvitationConfig"> | Date | string
    invitationId?: IntWithAggregatesFilter<"InvitationConfig"> | number
  }

  export type CoupleInfoWhereInput = {
    AND?: CoupleInfoWhereInput | CoupleInfoWhereInput[]
    OR?: CoupleInfoWhereInput[]
    NOT?: CoupleInfoWhereInput | CoupleInfoWhereInput[]
    id?: IntFilter<"CoupleInfo"> | number
    groomName?: StringFilter<"CoupleInfo"> | string
    brideName?: StringFilter<"CoupleInfo"> | string
    groomParents?: StringFilter<"CoupleInfo"> | string
    brideParents?: StringFilter<"CoupleInfo"> | string
    greetingText?: StringFilter<"CoupleInfo"> | string
    couplePhotoUrl?: StringNullableFilter<"CoupleInfo"> | string | null
    groomPhotoUrl?: StringNullableFilter<"CoupleInfo"> | string | null
    bridePhotoUrl?: StringNullableFilter<"CoupleInfo"> | string | null
    groomSocialLink?: StringNullableFilter<"CoupleInfo"> | string | null
    brideSocialLink?: StringNullableFilter<"CoupleInfo"> | string | null
    bibleVerse?: StringNullableFilter<"CoupleInfo"> | string | null
    bibleReference?: StringNullableFilter<"CoupleInfo"> | string | null
    createdAt?: DateTimeFilter<"CoupleInfo"> | Date | string
    updatedAt?: DateTimeFilter<"CoupleInfo"> | Date | string
    invitationId?: IntFilter<"CoupleInfo"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type CoupleInfoOrderByWithRelationInput = {
    id?: SortOrder
    groomName?: SortOrder
    brideName?: SortOrder
    groomParents?: SortOrder
    brideParents?: SortOrder
    greetingText?: SortOrder
    couplePhotoUrl?: SortOrderInput | SortOrder
    groomPhotoUrl?: SortOrderInput | SortOrder
    bridePhotoUrl?: SortOrderInput | SortOrder
    groomSocialLink?: SortOrderInput | SortOrder
    brideSocialLink?: SortOrderInput | SortOrder
    bibleVerse?: SortOrderInput | SortOrder
    bibleReference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: CoupleInfoOrderByRelevanceInput
  }

  export type CoupleInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoupleInfoWhereInput | CoupleInfoWhereInput[]
    OR?: CoupleInfoWhereInput[]
    NOT?: CoupleInfoWhereInput | CoupleInfoWhereInput[]
    groomName?: StringFilter<"CoupleInfo"> | string
    brideName?: StringFilter<"CoupleInfo"> | string
    groomParents?: StringFilter<"CoupleInfo"> | string
    brideParents?: StringFilter<"CoupleInfo"> | string
    greetingText?: StringFilter<"CoupleInfo"> | string
    couplePhotoUrl?: StringNullableFilter<"CoupleInfo"> | string | null
    groomPhotoUrl?: StringNullableFilter<"CoupleInfo"> | string | null
    bridePhotoUrl?: StringNullableFilter<"CoupleInfo"> | string | null
    groomSocialLink?: StringNullableFilter<"CoupleInfo"> | string | null
    brideSocialLink?: StringNullableFilter<"CoupleInfo"> | string | null
    bibleVerse?: StringNullableFilter<"CoupleInfo"> | string | null
    bibleReference?: StringNullableFilter<"CoupleInfo"> | string | null
    createdAt?: DateTimeFilter<"CoupleInfo"> | Date | string
    updatedAt?: DateTimeFilter<"CoupleInfo"> | Date | string
    invitationId?: IntFilter<"CoupleInfo"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id">

  export type CoupleInfoOrderByWithAggregationInput = {
    id?: SortOrder
    groomName?: SortOrder
    brideName?: SortOrder
    groomParents?: SortOrder
    brideParents?: SortOrder
    greetingText?: SortOrder
    couplePhotoUrl?: SortOrderInput | SortOrder
    groomPhotoUrl?: SortOrderInput | SortOrder
    bridePhotoUrl?: SortOrderInput | SortOrder
    groomSocialLink?: SortOrderInput | SortOrder
    brideSocialLink?: SortOrderInput | SortOrder
    bibleVerse?: SortOrderInput | SortOrder
    bibleReference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    _count?: CoupleInfoCountOrderByAggregateInput
    _avg?: CoupleInfoAvgOrderByAggregateInput
    _max?: CoupleInfoMaxOrderByAggregateInput
    _min?: CoupleInfoMinOrderByAggregateInput
    _sum?: CoupleInfoSumOrderByAggregateInput
  }

  export type CoupleInfoScalarWhereWithAggregatesInput = {
    AND?: CoupleInfoScalarWhereWithAggregatesInput | CoupleInfoScalarWhereWithAggregatesInput[]
    OR?: CoupleInfoScalarWhereWithAggregatesInput[]
    NOT?: CoupleInfoScalarWhereWithAggregatesInput | CoupleInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoupleInfo"> | number
    groomName?: StringWithAggregatesFilter<"CoupleInfo"> | string
    brideName?: StringWithAggregatesFilter<"CoupleInfo"> | string
    groomParents?: StringWithAggregatesFilter<"CoupleInfo"> | string
    brideParents?: StringWithAggregatesFilter<"CoupleInfo"> | string
    greetingText?: StringWithAggregatesFilter<"CoupleInfo"> | string
    couplePhotoUrl?: StringNullableWithAggregatesFilter<"CoupleInfo"> | string | null
    groomPhotoUrl?: StringNullableWithAggregatesFilter<"CoupleInfo"> | string | null
    bridePhotoUrl?: StringNullableWithAggregatesFilter<"CoupleInfo"> | string | null
    groomSocialLink?: StringNullableWithAggregatesFilter<"CoupleInfo"> | string | null
    brideSocialLink?: StringNullableWithAggregatesFilter<"CoupleInfo"> | string | null
    bibleVerse?: StringNullableWithAggregatesFilter<"CoupleInfo"> | string | null
    bibleReference?: StringNullableWithAggregatesFilter<"CoupleInfo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CoupleInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoupleInfo"> | Date | string
    invitationId?: IntWithAggregatesFilter<"CoupleInfo"> | number
  }

  export type StoryItemWhereInput = {
    AND?: StoryItemWhereInput | StoryItemWhereInput[]
    OR?: StoryItemWhereInput[]
    NOT?: StoryItemWhereInput | StoryItemWhereInput[]
    id?: IntFilter<"StoryItem"> | number
    title?: StringFilter<"StoryItem"> | string
    body?: StringFilter<"StoryItem"> | string
    imageUrl?: StringNullableFilter<"StoryItem"> | string | null
    sortOrder?: IntFilter<"StoryItem"> | number
    createdAt?: DateTimeFilter<"StoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"StoryItem"> | Date | string
    invitationId?: IntFilter<"StoryItem"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
    images?: StoryImageListRelationFilter
  }

  export type StoryItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    invitation?: InvitationOrderByWithRelationInput
    images?: StoryImageOrderByRelationAggregateInput
    _relevance?: StoryItemOrderByRelevanceInput
  }

  export type StoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoryItemWhereInput | StoryItemWhereInput[]
    OR?: StoryItemWhereInput[]
    NOT?: StoryItemWhereInput | StoryItemWhereInput[]
    title?: StringFilter<"StoryItem"> | string
    body?: StringFilter<"StoryItem"> | string
    imageUrl?: StringNullableFilter<"StoryItem"> | string | null
    sortOrder?: IntFilter<"StoryItem"> | number
    createdAt?: DateTimeFilter<"StoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"StoryItem"> | Date | string
    invitationId?: IntFilter<"StoryItem"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
    images?: StoryImageListRelationFilter
  }, "id">

  export type StoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    _count?: StoryItemCountOrderByAggregateInput
    _avg?: StoryItemAvgOrderByAggregateInput
    _max?: StoryItemMaxOrderByAggregateInput
    _min?: StoryItemMinOrderByAggregateInput
    _sum?: StoryItemSumOrderByAggregateInput
  }

  export type StoryItemScalarWhereWithAggregatesInput = {
    AND?: StoryItemScalarWhereWithAggregatesInput | StoryItemScalarWhereWithAggregatesInput[]
    OR?: StoryItemScalarWhereWithAggregatesInput[]
    NOT?: StoryItemScalarWhereWithAggregatesInput | StoryItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoryItem"> | number
    title?: StringWithAggregatesFilter<"StoryItem"> | string
    body?: StringWithAggregatesFilter<"StoryItem"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"StoryItem"> | string | null
    sortOrder?: IntWithAggregatesFilter<"StoryItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StoryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoryItem"> | Date | string
    invitationId?: IntWithAggregatesFilter<"StoryItem"> | number
  }

  export type GalleryImageWhereInput = {
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    id?: IntFilter<"GalleryImage"> | number
    imageUrl?: StringFilter<"GalleryImage"> | string
    caption?: StringNullableFilter<"GalleryImage"> | string | null
    sortOrder?: IntFilter<"GalleryImage"> | number
    aspectRatio?: StringNullableFilter<"GalleryImage"> | string | null
    isFeatured?: BoolFilter<"GalleryImage"> | boolean
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryImage"> | Date | string
    invitationId?: IntFilter<"GalleryImage"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type GalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    aspectRatio?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: GalleryImageOrderByRelevanceInput
  }

  export type GalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    imageUrl?: StringFilter<"GalleryImage"> | string
    caption?: StringNullableFilter<"GalleryImage"> | string | null
    sortOrder?: IntFilter<"GalleryImage"> | number
    aspectRatio?: StringNullableFilter<"GalleryImage"> | string | null
    isFeatured?: BoolFilter<"GalleryImage"> | boolean
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryImage"> | Date | string
    invitationId?: IntFilter<"GalleryImage"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id">

  export type GalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    aspectRatio?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    _count?: GalleryImageCountOrderByAggregateInput
    _avg?: GalleryImageAvgOrderByAggregateInput
    _max?: GalleryImageMaxOrderByAggregateInput
    _min?: GalleryImageMinOrderByAggregateInput
    _sum?: GalleryImageSumOrderByAggregateInput
  }

  export type GalleryImageScalarWhereWithAggregatesInput = {
    AND?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    OR?: GalleryImageScalarWhereWithAggregatesInput[]
    NOT?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GalleryImage"> | number
    imageUrl?: StringWithAggregatesFilter<"GalleryImage"> | string
    caption?: StringNullableWithAggregatesFilter<"GalleryImage"> | string | null
    sortOrder?: IntWithAggregatesFilter<"GalleryImage"> | number
    aspectRatio?: StringNullableWithAggregatesFilter<"GalleryImage"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"GalleryImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
    invitationId?: IntWithAggregatesFilter<"GalleryImage"> | number
  }

  export type PhilosophyConfigWhereInput = {
    AND?: PhilosophyConfigWhereInput | PhilosophyConfigWhereInput[]
    OR?: PhilosophyConfigWhereInput[]
    NOT?: PhilosophyConfigWhereInput | PhilosophyConfigWhereInput[]
    id?: IntFilter<"PhilosophyConfig"> | number
    quoteText?: StringFilter<"PhilosophyConfig"> | string
    quoteMeaning?: StringNullableFilter<"PhilosophyConfig"> | string | null
    prayerText?: StringFilter<"PhilosophyConfig"> | string
    createdAt?: DateTimeFilter<"PhilosophyConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PhilosophyConfig"> | Date | string
    invitationId?: IntFilter<"PhilosophyConfig"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type PhilosophyConfigOrderByWithRelationInput = {
    id?: SortOrder
    quoteText?: SortOrder
    quoteMeaning?: SortOrderInput | SortOrder
    prayerText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    invitation?: InvitationOrderByWithRelationInput
    _relevance?: PhilosophyConfigOrderByRelevanceInput
  }

  export type PhilosophyConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invitationId?: number
    AND?: PhilosophyConfigWhereInput | PhilosophyConfigWhereInput[]
    OR?: PhilosophyConfigWhereInput[]
    NOT?: PhilosophyConfigWhereInput | PhilosophyConfigWhereInput[]
    quoteText?: StringFilter<"PhilosophyConfig"> | string
    quoteMeaning?: StringNullableFilter<"PhilosophyConfig"> | string | null
    prayerText?: StringFilter<"PhilosophyConfig"> | string
    createdAt?: DateTimeFilter<"PhilosophyConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PhilosophyConfig"> | Date | string
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }, "id" | "invitationId">

  export type PhilosophyConfigOrderByWithAggregationInput = {
    id?: SortOrder
    quoteText?: SortOrder
    quoteMeaning?: SortOrderInput | SortOrder
    prayerText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    _count?: PhilosophyConfigCountOrderByAggregateInput
    _avg?: PhilosophyConfigAvgOrderByAggregateInput
    _max?: PhilosophyConfigMaxOrderByAggregateInput
    _min?: PhilosophyConfigMinOrderByAggregateInput
    _sum?: PhilosophyConfigSumOrderByAggregateInput
  }

  export type PhilosophyConfigScalarWhereWithAggregatesInput = {
    AND?: PhilosophyConfigScalarWhereWithAggregatesInput | PhilosophyConfigScalarWhereWithAggregatesInput[]
    OR?: PhilosophyConfigScalarWhereWithAggregatesInput[]
    NOT?: PhilosophyConfigScalarWhereWithAggregatesInput | PhilosophyConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhilosophyConfig"> | number
    quoteText?: StringWithAggregatesFilter<"PhilosophyConfig"> | string
    quoteMeaning?: StringNullableWithAggregatesFilter<"PhilosophyConfig"> | string | null
    prayerText?: StringWithAggregatesFilter<"PhilosophyConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhilosophyConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhilosophyConfig"> | Date | string
    invitationId?: IntWithAggregatesFilter<"PhilosophyConfig"> | number
  }

  export type AdminUserCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueLocationCreateInput = {
    name: string
    address: string
    latitude: number
    longitude: number
    popupImageUrl?: string | null
    eventType?: string | null
    mapZoom?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutVenueLocationsInput
  }

  export type VenueLocationUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    latitude: number
    longitude: number
    popupImageUrl?: string | null
    eventType?: string | null
    mapZoom?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type VenueLocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    popupImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    mapZoom?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutVenueLocationsNestedInput
  }

  export type VenueLocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    popupImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    mapZoom?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type VenueLocationCreateManyInput = {
    id?: number
    name: string
    address: string
    latitude: number
    longitude: number
    popupImageUrl?: string | null
    eventType?: string | null
    mapZoom?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type VenueLocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    popupImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    mapZoom?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    popupImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    mapZoom?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type EventScheduleCreateInput = {
    title: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutEventSchedulesInput
  }

  export type EventScheduleUncheckedCreateInput = {
    id?: number
    title: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type EventScheduleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutEventSchedulesNestedInput
  }

  export type EventScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type EventScheduleCreateManyInput = {
    id?: number
    title: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type EventScheduleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type RSVPSubmissionCreateInput = {
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    invitation: InvitationCreateNestedOneWithoutRsvpSubmissionsInput
  }

  export type RSVPSubmissionUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
    idempotencyKey?: string | null
  }

  export type RSVPSubmissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    invitation?: InvitationUpdateOneRequiredWithoutRsvpSubmissionsNestedInput
  }

  export type RSVPSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RSVPSubmissionCreateManyInput = {
    id?: number
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
    idempotencyKey?: string | null
  }

  export type RSVPSubmissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RSVPSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestbookEntryCreateInput = {
    name: string
    message: string
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    invitation: InvitationCreateNestedOneWithoutGuestbookEntriesInput
  }

  export type GuestbookEntryUncheckedCreateInput = {
    id?: number
    name: string
    message: string
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
    idempotencyKey?: string | null
  }

  export type GuestbookEntryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    invitation?: InvitationUpdateOneRequiredWithoutGuestbookEntriesNestedInput
  }

  export type GuestbookEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestbookEntryCreateManyInput = {
    id?: number
    name: string
    message: string
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
    idempotencyKey?: string | null
  }

  export type GuestbookEntryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestbookEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CashlessAccountCreateInput = {
    bankName: string
    accountNumber: string
    accountHolderName: string
    bankLogoUrl?: string | null
    qrCodeUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutCashlessAccountsInput
  }

  export type CashlessAccountUncheckedCreateInput = {
    id?: number
    bankName: string
    accountNumber: string
    accountHolderName: string
    bankLogoUrl?: string | null
    qrCodeUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type CashlessAccountUpdateInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    bankLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutCashlessAccountsNestedInput
  }

  export type CashlessAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    bankLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type CashlessAccountCreateManyInput = {
    id?: number
    bankName: string
    accountNumber: string
    accountHolderName: string
    bankLogoUrl?: string | null
    qrCodeUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type CashlessAccountUpdateManyMutationInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    bankLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashlessAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    bankLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type GiftAddressCreateInput = {
    label: string
    recipientName: string
    phone?: string | null
    address: string
    postalCode?: string | null
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutGiftAddressesInput
  }

  export type GiftAddressUncheckedCreateInput = {
    id?: number
    label: string
    recipientName: string
    phone?: string | null
    address: string
    postalCode?: string | null
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type GiftAddressUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutGiftAddressesNestedInput
  }

  export type GiftAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type GiftAddressCreateManyInput = {
    id?: number
    label: string
    recipientName: string
    phone?: string | null
    address: string
    postalCode?: string | null
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type GiftAddressUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type StoryImageCreateInput = {
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    storyItem: StoryItemCreateNestedOneWithoutImagesInput
  }

  export type StoryImageUncheckedCreateInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    storyItemId: number
  }

  export type StoryImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storyItem?: StoryItemUpdateOneRequiredWithoutImagesNestedInput
  }

  export type StoryImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storyItemId?: IntFieldUpdateOperationsInput | number
  }

  export type StoryImageCreateManyInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    storyItemId: number
  }

  export type StoryImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storyItemId?: IntFieldUpdateOperationsInput | number
  }

  export type InvitationConfigCreateInput = {
    heroCoupleNames: string
    heroOpeningLine: string
    heroWeddingDateText: string
    heroBackgroundImage?: string | null
    weddingDate: Date | string
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
    backgroundMusicUrl?: string | null
    footerGreeting: string
    footerClosingText: string
    lockedLandingEnabled?: boolean
    lockedLandingButtonText?: string
    lockedLandingGreeting?: string | null
    musicEnabled?: boolean
    musicButtonPosition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutConfigInput
  }

  export type InvitationConfigUncheckedCreateInput = {
    id?: number
    heroCoupleNames: string
    heroOpeningLine: string
    heroWeddingDateText: string
    heroBackgroundImage?: string | null
    weddingDate: Date | string
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
    backgroundMusicUrl?: string | null
    footerGreeting: string
    footerClosingText: string
    lockedLandingEnabled?: boolean
    lockedLandingButtonText?: string
    lockedLandingGreeting?: string | null
    musicEnabled?: boolean
    musicButtonPosition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type InvitationConfigUpdateInput = {
    heroCoupleNames?: StringFieldUpdateOperationsInput | string
    heroOpeningLine?: StringFieldUpdateOperationsInput | string
    heroWeddingDateText?: StringFieldUpdateOperationsInput | string
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundMusicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerGreeting?: StringFieldUpdateOperationsInput | string
    footerClosingText?: StringFieldUpdateOperationsInput | string
    lockedLandingEnabled?: BoolFieldUpdateOperationsInput | boolean
    lockedLandingButtonText?: StringFieldUpdateOperationsInput | string
    lockedLandingGreeting?: NullableStringFieldUpdateOperationsInput | string | null
    musicEnabled?: BoolFieldUpdateOperationsInput | boolean
    musicButtonPosition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutConfigNestedInput
  }

  export type InvitationConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroCoupleNames?: StringFieldUpdateOperationsInput | string
    heroOpeningLine?: StringFieldUpdateOperationsInput | string
    heroWeddingDateText?: StringFieldUpdateOperationsInput | string
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundMusicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerGreeting?: StringFieldUpdateOperationsInput | string
    footerClosingText?: StringFieldUpdateOperationsInput | string
    lockedLandingEnabled?: BoolFieldUpdateOperationsInput | boolean
    lockedLandingButtonText?: StringFieldUpdateOperationsInput | string
    lockedLandingGreeting?: NullableStringFieldUpdateOperationsInput | string | null
    musicEnabled?: BoolFieldUpdateOperationsInput | boolean
    musicButtonPosition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type InvitationConfigCreateManyInput = {
    id?: number
    heroCoupleNames: string
    heroOpeningLine: string
    heroWeddingDateText: string
    heroBackgroundImage?: string | null
    weddingDate: Date | string
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
    backgroundMusicUrl?: string | null
    footerGreeting: string
    footerClosingText: string
    lockedLandingEnabled?: boolean
    lockedLandingButtonText?: string
    lockedLandingGreeting?: string | null
    musicEnabled?: boolean
    musicButtonPosition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type InvitationConfigUpdateManyMutationInput = {
    heroCoupleNames?: StringFieldUpdateOperationsInput | string
    heroOpeningLine?: StringFieldUpdateOperationsInput | string
    heroWeddingDateText?: StringFieldUpdateOperationsInput | string
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundMusicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerGreeting?: StringFieldUpdateOperationsInput | string
    footerClosingText?: StringFieldUpdateOperationsInput | string
    lockedLandingEnabled?: BoolFieldUpdateOperationsInput | boolean
    lockedLandingButtonText?: StringFieldUpdateOperationsInput | string
    lockedLandingGreeting?: NullableStringFieldUpdateOperationsInput | string | null
    musicEnabled?: BoolFieldUpdateOperationsInput | boolean
    musicButtonPosition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroCoupleNames?: StringFieldUpdateOperationsInput | string
    heroOpeningLine?: StringFieldUpdateOperationsInput | string
    heroWeddingDateText?: StringFieldUpdateOperationsInput | string
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundMusicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerGreeting?: StringFieldUpdateOperationsInput | string
    footerClosingText?: StringFieldUpdateOperationsInput | string
    lockedLandingEnabled?: BoolFieldUpdateOperationsInput | boolean
    lockedLandingButtonText?: StringFieldUpdateOperationsInput | string
    lockedLandingGreeting?: NullableStringFieldUpdateOperationsInput | string | null
    musicEnabled?: BoolFieldUpdateOperationsInput | boolean
    musicButtonPosition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type CoupleInfoCreateInput = {
    groomName: string
    brideName: string
    groomParents: string
    brideParents: string
    greetingText: string
    couplePhotoUrl?: string | null
    groomPhotoUrl?: string | null
    bridePhotoUrl?: string | null
    groomSocialLink?: string | null
    brideSocialLink?: string | null
    bibleVerse?: string | null
    bibleReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutCoupleInfosInput
  }

  export type CoupleInfoUncheckedCreateInput = {
    id?: number
    groomName: string
    brideName: string
    groomParents: string
    brideParents: string
    greetingText: string
    couplePhotoUrl?: string | null
    groomPhotoUrl?: string | null
    bridePhotoUrl?: string | null
    groomSocialLink?: string | null
    brideSocialLink?: string | null
    bibleVerse?: string | null
    bibleReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type CoupleInfoUpdateInput = {
    groomName?: StringFieldUpdateOperationsInput | string
    brideName?: StringFieldUpdateOperationsInput | string
    groomParents?: StringFieldUpdateOperationsInput | string
    brideParents?: StringFieldUpdateOperationsInput | string
    greetingText?: StringFieldUpdateOperationsInput | string
    couplePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bridePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    brideSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    bibleVerse?: NullableStringFieldUpdateOperationsInput | string | null
    bibleReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutCoupleInfosNestedInput
  }

  export type CoupleInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groomName?: StringFieldUpdateOperationsInput | string
    brideName?: StringFieldUpdateOperationsInput | string
    groomParents?: StringFieldUpdateOperationsInput | string
    brideParents?: StringFieldUpdateOperationsInput | string
    greetingText?: StringFieldUpdateOperationsInput | string
    couplePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bridePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    brideSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    bibleVerse?: NullableStringFieldUpdateOperationsInput | string | null
    bibleReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type CoupleInfoCreateManyInput = {
    id?: number
    groomName: string
    brideName: string
    groomParents: string
    brideParents: string
    greetingText: string
    couplePhotoUrl?: string | null
    groomPhotoUrl?: string | null
    bridePhotoUrl?: string | null
    groomSocialLink?: string | null
    brideSocialLink?: string | null
    bibleVerse?: string | null
    bibleReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type CoupleInfoUpdateManyMutationInput = {
    groomName?: StringFieldUpdateOperationsInput | string
    brideName?: StringFieldUpdateOperationsInput | string
    groomParents?: StringFieldUpdateOperationsInput | string
    brideParents?: StringFieldUpdateOperationsInput | string
    greetingText?: StringFieldUpdateOperationsInput | string
    couplePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bridePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    brideSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    bibleVerse?: NullableStringFieldUpdateOperationsInput | string | null
    bibleReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groomName?: StringFieldUpdateOperationsInput | string
    brideName?: StringFieldUpdateOperationsInput | string
    groomParents?: StringFieldUpdateOperationsInput | string
    brideParents?: StringFieldUpdateOperationsInput | string
    greetingText?: StringFieldUpdateOperationsInput | string
    couplePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bridePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    brideSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    bibleVerse?: NullableStringFieldUpdateOperationsInput | string | null
    bibleReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type StoryItemCreateInput = {
    title: string
    body: string
    imageUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutStoryItemsInput
    images?: StoryImageCreateNestedManyWithoutStoryItemInput
  }

  export type StoryItemUncheckedCreateInput = {
    id?: number
    title: string
    body: string
    imageUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
    images?: StoryImageUncheckedCreateNestedManyWithoutStoryItemInput
  }

  export type StoryItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutStoryItemsNestedInput
    images?: StoryImageUpdateManyWithoutStoryItemNestedInput
  }

  export type StoryItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
    images?: StoryImageUncheckedUpdateManyWithoutStoryItemNestedInput
  }

  export type StoryItemCreateManyInput = {
    id?: number
    title: string
    body: string
    imageUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type StoryItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type GalleryImageCreateInput = {
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    aspectRatio?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutGalleryImagesInput
  }

  export type GalleryImageUncheckedCreateInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    aspectRatio?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type GalleryImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutGalleryImagesNestedInput
  }

  export type GalleryImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type GalleryImageCreateManyInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    aspectRatio?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type GalleryImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type PhilosophyConfigCreateInput = {
    quoteText: string
    quoteMeaning?: string | null
    prayerText: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutPhilosophyConfigInput
  }

  export type PhilosophyConfigUncheckedCreateInput = {
    id?: number
    quoteText: string
    quoteMeaning?: string | null
    prayerText: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type PhilosophyConfigUpdateInput = {
    quoteText?: StringFieldUpdateOperationsInput | string
    quoteMeaning?: NullableStringFieldUpdateOperationsInput | string | null
    prayerText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutPhilosophyConfigNestedInput
  }

  export type PhilosophyConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteText?: StringFieldUpdateOperationsInput | string
    quoteMeaning?: NullableStringFieldUpdateOperationsInput | string | null
    prayerText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type PhilosophyConfigCreateManyInput = {
    id?: number
    quoteText: string
    quoteMeaning?: string | null
    prayerText: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type PhilosophyConfigUpdateManyMutationInput = {
    quoteText?: StringFieldUpdateOperationsInput | string
    quoteMeaning?: NullableStringFieldUpdateOperationsInput | string | null
    prayerText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhilosophyConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteText?: StringFieldUpdateOperationsInput | string
    quoteMeaning?: NullableStringFieldUpdateOperationsInput | string | null
    prayerText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserOrderByRelevanceInput = {
    fields: AdminUserOrderByRelevanceFieldEnum | AdminUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CashlessAccountListRelationFilter = {
    every?: CashlessAccountWhereInput
    some?: CashlessAccountWhereInput
    none?: CashlessAccountWhereInput
  }

  export type EventScheduleListRelationFilter = {
    every?: EventScheduleWhereInput
    some?: EventScheduleWhereInput
    none?: EventScheduleWhereInput
  }

  export type GuestbookEntryListRelationFilter = {
    every?: GuestbookEntryWhereInput
    some?: GuestbookEntryWhereInput
    none?: GuestbookEntryWhereInput
  }

  export type RSVPSubmissionListRelationFilter = {
    every?: RSVPSubmissionWhereInput
    some?: RSVPSubmissionWhereInput
    none?: RSVPSubmissionWhereInput
  }

  export type VenueLocationListRelationFilter = {
    every?: VenueLocationWhereInput
    some?: VenueLocationWhereInput
    none?: VenueLocationWhereInput
  }

  export type CoupleInfoListRelationFilter = {
    every?: CoupleInfoWhereInput
    some?: CoupleInfoWhereInput
    none?: CoupleInfoWhereInput
  }

  export type StoryItemListRelationFilter = {
    every?: StoryItemWhereInput
    some?: StoryItemWhereInput
    none?: StoryItemWhereInput
  }

  export type GalleryImageListRelationFilter = {
    every?: GalleryImageWhereInput
    some?: GalleryImageWhereInput
    none?: GalleryImageWhereInput
  }

  export type GiftAddressListRelationFilter = {
    every?: GiftAddressWhereInput
    some?: GiftAddressWhereInput
    none?: GiftAddressWhereInput
  }

  export type InvitationConfigNullableScalarRelationFilter = {
    is?: InvitationConfigWhereInput | null
    isNot?: InvitationConfigWhereInput | null
  }

  export type PhilosophyConfigNullableScalarRelationFilter = {
    is?: PhilosophyConfigWhereInput | null
    isNot?: PhilosophyConfigWhereInput | null
  }

  export type CashlessAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestbookEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RSVPSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoupleInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GalleryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GiftAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InvitationScalarRelationFilter = {
    is?: InvitationWhereInput
    isNot?: InvitationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VenueLocationOrderByRelevanceInput = {
    fields: VenueLocationOrderByRelevanceFieldEnum | VenueLocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VenueLocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    popupImageUrl?: SortOrder
    eventType?: SortOrder
    mapZoom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type VenueLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mapZoom?: SortOrder
    invitationId?: SortOrder
  }

  export type VenueLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    popupImageUrl?: SortOrder
    eventType?: SortOrder
    mapZoom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type VenueLocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    popupImageUrl?: SortOrder
    eventType?: SortOrder
    mapZoom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type VenueLocationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mapZoom?: SortOrder
    invitationId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EventScheduleOrderByRelevanceInput = {
    fields: EventScheduleOrderByRelevanceFieldEnum | EventScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type EventScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type EventScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type EventScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type EventScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type RSVPSubmissionOrderByRelevanceInput = {
    fields: RSVPSubmissionOrderByRelevanceFieldEnum | RSVPSubmissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RSVPSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    attendanceStatus?: SortOrder
    paxCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type RSVPSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    paxCount?: SortOrder
    invitationId?: SortOrder
  }

  export type RSVPSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    attendanceStatus?: SortOrder
    paxCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type RSVPSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    attendanceStatus?: SortOrder
    paxCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type RSVPSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    paxCount?: SortOrder
    invitationId?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GuestbookEntryOrderByRelevanceInput = {
    fields: GuestbookEntryOrderByRelevanceFieldEnum | GuestbookEntryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GuestbookEntryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type GuestbookEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type GuestbookEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type GuestbookEntryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type GuestbookEntrySumOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CashlessAccountOrderByRelevanceInput = {
    fields: CashlessAccountOrderByRelevanceFieldEnum | CashlessAccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CashlessAccountCountOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    bankLogoUrl?: SortOrder
    qrCodeUrl?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type CashlessAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    invitationId?: SortOrder
  }

  export type CashlessAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    bankLogoUrl?: SortOrder
    qrCodeUrl?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type CashlessAccountMinOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    bankLogoUrl?: SortOrder
    qrCodeUrl?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type CashlessAccountSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    invitationId?: SortOrder
  }

  export type GiftAddressOrderByRelevanceInput = {
    fields: GiftAddressOrderByRelevanceFieldEnum | GiftAddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GiftAddressCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    note?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type GiftAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type GiftAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    note?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type GiftAddressMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    note?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type GiftAddressSumOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type StoryItemScalarRelationFilter = {
    is?: StoryItemWhereInput
    isNot?: StoryItemWhereInput
  }

  export type StoryImageOrderByRelevanceInput = {
    fields: StoryImageOrderByRelevanceFieldEnum | StoryImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoryImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storyItemId?: SortOrder
  }

  export type StoryImageAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    storyItemId?: SortOrder
  }

  export type StoryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storyItemId?: SortOrder
  }

  export type StoryImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storyItemId?: SortOrder
  }

  export type StoryImageSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    storyItemId?: SortOrder
  }

  export type InvitationConfigOrderByRelevanceInput = {
    fields: InvitationConfigOrderByRelevanceFieldEnum | InvitationConfigOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InvitationConfigCountOrderByAggregateInput = {
    id?: SortOrder
    heroCoupleNames?: SortOrder
    heroOpeningLine?: SortOrder
    heroWeddingDateText?: SortOrder
    heroBackgroundImage?: SortOrder
    weddingDate?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    backgroundMusicUrl?: SortOrder
    footerGreeting?: SortOrder
    footerClosingText?: SortOrder
    lockedLandingEnabled?: SortOrder
    lockedLandingButtonText?: SortOrder
    lockedLandingGreeting?: SortOrder
    musicEnabled?: SortOrder
    musicButtonPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type InvitationConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type InvitationConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    heroCoupleNames?: SortOrder
    heroOpeningLine?: SortOrder
    heroWeddingDateText?: SortOrder
    heroBackgroundImage?: SortOrder
    weddingDate?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    backgroundMusicUrl?: SortOrder
    footerGreeting?: SortOrder
    footerClosingText?: SortOrder
    lockedLandingEnabled?: SortOrder
    lockedLandingButtonText?: SortOrder
    lockedLandingGreeting?: SortOrder
    musicEnabled?: SortOrder
    musicButtonPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type InvitationConfigMinOrderByAggregateInput = {
    id?: SortOrder
    heroCoupleNames?: SortOrder
    heroOpeningLine?: SortOrder
    heroWeddingDateText?: SortOrder
    heroBackgroundImage?: SortOrder
    weddingDate?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    backgroundMusicUrl?: SortOrder
    footerGreeting?: SortOrder
    footerClosingText?: SortOrder
    lockedLandingEnabled?: SortOrder
    lockedLandingButtonText?: SortOrder
    lockedLandingGreeting?: SortOrder
    musicEnabled?: SortOrder
    musicButtonPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type InvitationConfigSumOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type CoupleInfoOrderByRelevanceInput = {
    fields: CoupleInfoOrderByRelevanceFieldEnum | CoupleInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CoupleInfoCountOrderByAggregateInput = {
    id?: SortOrder
    groomName?: SortOrder
    brideName?: SortOrder
    groomParents?: SortOrder
    brideParents?: SortOrder
    greetingText?: SortOrder
    couplePhotoUrl?: SortOrder
    groomPhotoUrl?: SortOrder
    bridePhotoUrl?: SortOrder
    groomSocialLink?: SortOrder
    brideSocialLink?: SortOrder
    bibleVerse?: SortOrder
    bibleReference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type CoupleInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type CoupleInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    groomName?: SortOrder
    brideName?: SortOrder
    groomParents?: SortOrder
    brideParents?: SortOrder
    greetingText?: SortOrder
    couplePhotoUrl?: SortOrder
    groomPhotoUrl?: SortOrder
    bridePhotoUrl?: SortOrder
    groomSocialLink?: SortOrder
    brideSocialLink?: SortOrder
    bibleVerse?: SortOrder
    bibleReference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type CoupleInfoMinOrderByAggregateInput = {
    id?: SortOrder
    groomName?: SortOrder
    brideName?: SortOrder
    groomParents?: SortOrder
    brideParents?: SortOrder
    greetingText?: SortOrder
    couplePhotoUrl?: SortOrder
    groomPhotoUrl?: SortOrder
    bridePhotoUrl?: SortOrder
    groomSocialLink?: SortOrder
    brideSocialLink?: SortOrder
    bibleVerse?: SortOrder
    bibleReference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type CoupleInfoSumOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type StoryImageListRelationFilter = {
    every?: StoryImageWhereInput
    some?: StoryImageWhereInput
    none?: StoryImageWhereInput
  }

  export type StoryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryItemOrderByRelevanceInput = {
    fields: StoryItemOrderByRelevanceFieldEnum | StoryItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type StoryItemAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    invitationId?: SortOrder
  }

  export type StoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type StoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type StoryItemSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    invitationId?: SortOrder
  }

  export type GalleryImageOrderByRelevanceInput = {
    fields: GalleryImageOrderByRelevanceFieldEnum | GalleryImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    sortOrder?: SortOrder
    aspectRatio?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type GalleryImageAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    invitationId?: SortOrder
  }

  export type GalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    sortOrder?: SortOrder
    aspectRatio?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type GalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    sortOrder?: SortOrder
    aspectRatio?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type GalleryImageSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    invitationId?: SortOrder
  }

  export type PhilosophyConfigOrderByRelevanceInput = {
    fields: PhilosophyConfigOrderByRelevanceFieldEnum | PhilosophyConfigOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhilosophyConfigCountOrderByAggregateInput = {
    id?: SortOrder
    quoteText?: SortOrder
    quoteMeaning?: SortOrder
    prayerText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type PhilosophyConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type PhilosophyConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    quoteText?: SortOrder
    quoteMeaning?: SortOrder
    prayerText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type PhilosophyConfigMinOrderByAggregateInput = {
    id?: SortOrder
    quoteText?: SortOrder
    quoteMeaning?: SortOrder
    prayerText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type PhilosophyConfigSumOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CashlessAccountCreateNestedManyWithoutInvitationInput = {
    create?: XOR<CashlessAccountCreateWithoutInvitationInput, CashlessAccountUncheckedCreateWithoutInvitationInput> | CashlessAccountCreateWithoutInvitationInput[] | CashlessAccountUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CashlessAccountCreateOrConnectWithoutInvitationInput | CashlessAccountCreateOrConnectWithoutInvitationInput[]
    createMany?: CashlessAccountCreateManyInvitationInputEnvelope
    connect?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
  }

  export type EventScheduleCreateNestedManyWithoutInvitationInput = {
    create?: XOR<EventScheduleCreateWithoutInvitationInput, EventScheduleUncheckedCreateWithoutInvitationInput> | EventScheduleCreateWithoutInvitationInput[] | EventScheduleUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: EventScheduleCreateOrConnectWithoutInvitationInput | EventScheduleCreateOrConnectWithoutInvitationInput[]
    createMany?: EventScheduleCreateManyInvitationInputEnvelope
    connect?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
  }

  export type GuestbookEntryCreateNestedManyWithoutInvitationInput = {
    create?: XOR<GuestbookEntryCreateWithoutInvitationInput, GuestbookEntryUncheckedCreateWithoutInvitationInput> | GuestbookEntryCreateWithoutInvitationInput[] | GuestbookEntryUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutInvitationInput | GuestbookEntryCreateOrConnectWithoutInvitationInput[]
    createMany?: GuestbookEntryCreateManyInvitationInputEnvelope
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
  }

  export type RSVPSubmissionCreateNestedManyWithoutInvitationInput = {
    create?: XOR<RSVPSubmissionCreateWithoutInvitationInput, RSVPSubmissionUncheckedCreateWithoutInvitationInput> | RSVPSubmissionCreateWithoutInvitationInput[] | RSVPSubmissionUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: RSVPSubmissionCreateOrConnectWithoutInvitationInput | RSVPSubmissionCreateOrConnectWithoutInvitationInput[]
    createMany?: RSVPSubmissionCreateManyInvitationInputEnvelope
    connect?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
  }

  export type VenueLocationCreateNestedManyWithoutInvitationInput = {
    create?: XOR<VenueLocationCreateWithoutInvitationInput, VenueLocationUncheckedCreateWithoutInvitationInput> | VenueLocationCreateWithoutInvitationInput[] | VenueLocationUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: VenueLocationCreateOrConnectWithoutInvitationInput | VenueLocationCreateOrConnectWithoutInvitationInput[]
    createMany?: VenueLocationCreateManyInvitationInputEnvelope
    connect?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
  }

  export type CoupleInfoCreateNestedManyWithoutInvitationInput = {
    create?: XOR<CoupleInfoCreateWithoutInvitationInput, CoupleInfoUncheckedCreateWithoutInvitationInput> | CoupleInfoCreateWithoutInvitationInput[] | CoupleInfoUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CoupleInfoCreateOrConnectWithoutInvitationInput | CoupleInfoCreateOrConnectWithoutInvitationInput[]
    createMany?: CoupleInfoCreateManyInvitationInputEnvelope
    connect?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
  }

  export type StoryItemCreateNestedManyWithoutInvitationInput = {
    create?: XOR<StoryItemCreateWithoutInvitationInput, StoryItemUncheckedCreateWithoutInvitationInput> | StoryItemCreateWithoutInvitationInput[] | StoryItemUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: StoryItemCreateOrConnectWithoutInvitationInput | StoryItemCreateOrConnectWithoutInvitationInput[]
    createMany?: StoryItemCreateManyInvitationInputEnvelope
    connect?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
  }

  export type GalleryImageCreateNestedManyWithoutInvitationInput = {
    create?: XOR<GalleryImageCreateWithoutInvitationInput, GalleryImageUncheckedCreateWithoutInvitationInput> | GalleryImageCreateWithoutInvitationInput[] | GalleryImageUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutInvitationInput | GalleryImageCreateOrConnectWithoutInvitationInput[]
    createMany?: GalleryImageCreateManyInvitationInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type GiftAddressCreateNestedManyWithoutInvitationInput = {
    create?: XOR<GiftAddressCreateWithoutInvitationInput, GiftAddressUncheckedCreateWithoutInvitationInput> | GiftAddressCreateWithoutInvitationInput[] | GiftAddressUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GiftAddressCreateOrConnectWithoutInvitationInput | GiftAddressCreateOrConnectWithoutInvitationInput[]
    createMany?: GiftAddressCreateManyInvitationInputEnvelope
    connect?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
  }

  export type InvitationConfigCreateNestedOneWithoutInvitationInput = {
    create?: XOR<InvitationConfigCreateWithoutInvitationInput, InvitationConfigUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: InvitationConfigCreateOrConnectWithoutInvitationInput
    connect?: InvitationConfigWhereUniqueInput
  }

  export type PhilosophyConfigCreateNestedOneWithoutInvitationInput = {
    create?: XOR<PhilosophyConfigCreateWithoutInvitationInput, PhilosophyConfigUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: PhilosophyConfigCreateOrConnectWithoutInvitationInput
    connect?: PhilosophyConfigWhereUniqueInput
  }

  export type CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<CashlessAccountCreateWithoutInvitationInput, CashlessAccountUncheckedCreateWithoutInvitationInput> | CashlessAccountCreateWithoutInvitationInput[] | CashlessAccountUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CashlessAccountCreateOrConnectWithoutInvitationInput | CashlessAccountCreateOrConnectWithoutInvitationInput[]
    createMany?: CashlessAccountCreateManyInvitationInputEnvelope
    connect?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
  }

  export type EventScheduleUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<EventScheduleCreateWithoutInvitationInput, EventScheduleUncheckedCreateWithoutInvitationInput> | EventScheduleCreateWithoutInvitationInput[] | EventScheduleUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: EventScheduleCreateOrConnectWithoutInvitationInput | EventScheduleCreateOrConnectWithoutInvitationInput[]
    createMany?: EventScheduleCreateManyInvitationInputEnvelope
    connect?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
  }

  export type GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<GuestbookEntryCreateWithoutInvitationInput, GuestbookEntryUncheckedCreateWithoutInvitationInput> | GuestbookEntryCreateWithoutInvitationInput[] | GuestbookEntryUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutInvitationInput | GuestbookEntryCreateOrConnectWithoutInvitationInput[]
    createMany?: GuestbookEntryCreateManyInvitationInputEnvelope
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
  }

  export type RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<RSVPSubmissionCreateWithoutInvitationInput, RSVPSubmissionUncheckedCreateWithoutInvitationInput> | RSVPSubmissionCreateWithoutInvitationInput[] | RSVPSubmissionUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: RSVPSubmissionCreateOrConnectWithoutInvitationInput | RSVPSubmissionCreateOrConnectWithoutInvitationInput[]
    createMany?: RSVPSubmissionCreateManyInvitationInputEnvelope
    connect?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
  }

  export type VenueLocationUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<VenueLocationCreateWithoutInvitationInput, VenueLocationUncheckedCreateWithoutInvitationInput> | VenueLocationCreateWithoutInvitationInput[] | VenueLocationUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: VenueLocationCreateOrConnectWithoutInvitationInput | VenueLocationCreateOrConnectWithoutInvitationInput[]
    createMany?: VenueLocationCreateManyInvitationInputEnvelope
    connect?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
  }

  export type CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<CoupleInfoCreateWithoutInvitationInput, CoupleInfoUncheckedCreateWithoutInvitationInput> | CoupleInfoCreateWithoutInvitationInput[] | CoupleInfoUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CoupleInfoCreateOrConnectWithoutInvitationInput | CoupleInfoCreateOrConnectWithoutInvitationInput[]
    createMany?: CoupleInfoCreateManyInvitationInputEnvelope
    connect?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
  }

  export type StoryItemUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<StoryItemCreateWithoutInvitationInput, StoryItemUncheckedCreateWithoutInvitationInput> | StoryItemCreateWithoutInvitationInput[] | StoryItemUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: StoryItemCreateOrConnectWithoutInvitationInput | StoryItemCreateOrConnectWithoutInvitationInput[]
    createMany?: StoryItemCreateManyInvitationInputEnvelope
    connect?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
  }

  export type GalleryImageUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<GalleryImageCreateWithoutInvitationInput, GalleryImageUncheckedCreateWithoutInvitationInput> | GalleryImageCreateWithoutInvitationInput[] | GalleryImageUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutInvitationInput | GalleryImageCreateOrConnectWithoutInvitationInput[]
    createMany?: GalleryImageCreateManyInvitationInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type GiftAddressUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<GiftAddressCreateWithoutInvitationInput, GiftAddressUncheckedCreateWithoutInvitationInput> | GiftAddressCreateWithoutInvitationInput[] | GiftAddressUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GiftAddressCreateOrConnectWithoutInvitationInput | GiftAddressCreateOrConnectWithoutInvitationInput[]
    createMany?: GiftAddressCreateManyInvitationInputEnvelope
    connect?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
  }

  export type InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput = {
    create?: XOR<InvitationConfigCreateWithoutInvitationInput, InvitationConfigUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: InvitationConfigCreateOrConnectWithoutInvitationInput
    connect?: InvitationConfigWhereUniqueInput
  }

  export type PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput = {
    create?: XOR<PhilosophyConfigCreateWithoutInvitationInput, PhilosophyConfigUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: PhilosophyConfigCreateOrConnectWithoutInvitationInput
    connect?: PhilosophyConfigWhereUniqueInput
  }

  export type CashlessAccountUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<CashlessAccountCreateWithoutInvitationInput, CashlessAccountUncheckedCreateWithoutInvitationInput> | CashlessAccountCreateWithoutInvitationInput[] | CashlessAccountUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CashlessAccountCreateOrConnectWithoutInvitationInput | CashlessAccountCreateOrConnectWithoutInvitationInput[]
    upsert?: CashlessAccountUpsertWithWhereUniqueWithoutInvitationInput | CashlessAccountUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: CashlessAccountCreateManyInvitationInputEnvelope
    set?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
    disconnect?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
    delete?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
    connect?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
    update?: CashlessAccountUpdateWithWhereUniqueWithoutInvitationInput | CashlessAccountUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: CashlessAccountUpdateManyWithWhereWithoutInvitationInput | CashlessAccountUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: CashlessAccountScalarWhereInput | CashlessAccountScalarWhereInput[]
  }

  export type EventScheduleUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<EventScheduleCreateWithoutInvitationInput, EventScheduleUncheckedCreateWithoutInvitationInput> | EventScheduleCreateWithoutInvitationInput[] | EventScheduleUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: EventScheduleCreateOrConnectWithoutInvitationInput | EventScheduleCreateOrConnectWithoutInvitationInput[]
    upsert?: EventScheduleUpsertWithWhereUniqueWithoutInvitationInput | EventScheduleUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: EventScheduleCreateManyInvitationInputEnvelope
    set?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
    disconnect?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
    delete?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
    connect?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
    update?: EventScheduleUpdateWithWhereUniqueWithoutInvitationInput | EventScheduleUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: EventScheduleUpdateManyWithWhereWithoutInvitationInput | EventScheduleUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: EventScheduleScalarWhereInput | EventScheduleScalarWhereInput[]
  }

  export type GuestbookEntryUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<GuestbookEntryCreateWithoutInvitationInput, GuestbookEntryUncheckedCreateWithoutInvitationInput> | GuestbookEntryCreateWithoutInvitationInput[] | GuestbookEntryUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutInvitationInput | GuestbookEntryCreateOrConnectWithoutInvitationInput[]
    upsert?: GuestbookEntryUpsertWithWhereUniqueWithoutInvitationInput | GuestbookEntryUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: GuestbookEntryCreateManyInvitationInputEnvelope
    set?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    disconnect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    delete?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    update?: GuestbookEntryUpdateWithWhereUniqueWithoutInvitationInput | GuestbookEntryUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: GuestbookEntryUpdateManyWithWhereWithoutInvitationInput | GuestbookEntryUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: GuestbookEntryScalarWhereInput | GuestbookEntryScalarWhereInput[]
  }

  export type RSVPSubmissionUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<RSVPSubmissionCreateWithoutInvitationInput, RSVPSubmissionUncheckedCreateWithoutInvitationInput> | RSVPSubmissionCreateWithoutInvitationInput[] | RSVPSubmissionUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: RSVPSubmissionCreateOrConnectWithoutInvitationInput | RSVPSubmissionCreateOrConnectWithoutInvitationInput[]
    upsert?: RSVPSubmissionUpsertWithWhereUniqueWithoutInvitationInput | RSVPSubmissionUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: RSVPSubmissionCreateManyInvitationInputEnvelope
    set?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
    disconnect?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
    delete?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
    connect?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
    update?: RSVPSubmissionUpdateWithWhereUniqueWithoutInvitationInput | RSVPSubmissionUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: RSVPSubmissionUpdateManyWithWhereWithoutInvitationInput | RSVPSubmissionUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: RSVPSubmissionScalarWhereInput | RSVPSubmissionScalarWhereInput[]
  }

  export type VenueLocationUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<VenueLocationCreateWithoutInvitationInput, VenueLocationUncheckedCreateWithoutInvitationInput> | VenueLocationCreateWithoutInvitationInput[] | VenueLocationUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: VenueLocationCreateOrConnectWithoutInvitationInput | VenueLocationCreateOrConnectWithoutInvitationInput[]
    upsert?: VenueLocationUpsertWithWhereUniqueWithoutInvitationInput | VenueLocationUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: VenueLocationCreateManyInvitationInputEnvelope
    set?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
    disconnect?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
    delete?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
    connect?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
    update?: VenueLocationUpdateWithWhereUniqueWithoutInvitationInput | VenueLocationUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: VenueLocationUpdateManyWithWhereWithoutInvitationInput | VenueLocationUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: VenueLocationScalarWhereInput | VenueLocationScalarWhereInput[]
  }

  export type CoupleInfoUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<CoupleInfoCreateWithoutInvitationInput, CoupleInfoUncheckedCreateWithoutInvitationInput> | CoupleInfoCreateWithoutInvitationInput[] | CoupleInfoUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CoupleInfoCreateOrConnectWithoutInvitationInput | CoupleInfoCreateOrConnectWithoutInvitationInput[]
    upsert?: CoupleInfoUpsertWithWhereUniqueWithoutInvitationInput | CoupleInfoUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: CoupleInfoCreateManyInvitationInputEnvelope
    set?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
    disconnect?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
    delete?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
    connect?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
    update?: CoupleInfoUpdateWithWhereUniqueWithoutInvitationInput | CoupleInfoUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: CoupleInfoUpdateManyWithWhereWithoutInvitationInput | CoupleInfoUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: CoupleInfoScalarWhereInput | CoupleInfoScalarWhereInput[]
  }

  export type StoryItemUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<StoryItemCreateWithoutInvitationInput, StoryItemUncheckedCreateWithoutInvitationInput> | StoryItemCreateWithoutInvitationInput[] | StoryItemUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: StoryItemCreateOrConnectWithoutInvitationInput | StoryItemCreateOrConnectWithoutInvitationInput[]
    upsert?: StoryItemUpsertWithWhereUniqueWithoutInvitationInput | StoryItemUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: StoryItemCreateManyInvitationInputEnvelope
    set?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
    disconnect?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
    delete?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
    connect?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
    update?: StoryItemUpdateWithWhereUniqueWithoutInvitationInput | StoryItemUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: StoryItemUpdateManyWithWhereWithoutInvitationInput | StoryItemUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: StoryItemScalarWhereInput | StoryItemScalarWhereInput[]
  }

  export type GalleryImageUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<GalleryImageCreateWithoutInvitationInput, GalleryImageUncheckedCreateWithoutInvitationInput> | GalleryImageCreateWithoutInvitationInput[] | GalleryImageUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutInvitationInput | GalleryImageCreateOrConnectWithoutInvitationInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutInvitationInput | GalleryImageUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: GalleryImageCreateManyInvitationInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutInvitationInput | GalleryImageUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutInvitationInput | GalleryImageUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type GiftAddressUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<GiftAddressCreateWithoutInvitationInput, GiftAddressUncheckedCreateWithoutInvitationInput> | GiftAddressCreateWithoutInvitationInput[] | GiftAddressUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GiftAddressCreateOrConnectWithoutInvitationInput | GiftAddressCreateOrConnectWithoutInvitationInput[]
    upsert?: GiftAddressUpsertWithWhereUniqueWithoutInvitationInput | GiftAddressUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: GiftAddressCreateManyInvitationInputEnvelope
    set?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
    disconnect?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
    delete?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
    connect?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
    update?: GiftAddressUpdateWithWhereUniqueWithoutInvitationInput | GiftAddressUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: GiftAddressUpdateManyWithWhereWithoutInvitationInput | GiftAddressUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: GiftAddressScalarWhereInput | GiftAddressScalarWhereInput[]
  }

  export type InvitationConfigUpdateOneWithoutInvitationNestedInput = {
    create?: XOR<InvitationConfigCreateWithoutInvitationInput, InvitationConfigUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: InvitationConfigCreateOrConnectWithoutInvitationInput
    upsert?: InvitationConfigUpsertWithoutInvitationInput
    disconnect?: InvitationConfigWhereInput | boolean
    delete?: InvitationConfigWhereInput | boolean
    connect?: InvitationConfigWhereUniqueInput
    update?: XOR<XOR<InvitationConfigUpdateToOneWithWhereWithoutInvitationInput, InvitationConfigUpdateWithoutInvitationInput>, InvitationConfigUncheckedUpdateWithoutInvitationInput>
  }

  export type PhilosophyConfigUpdateOneWithoutInvitationNestedInput = {
    create?: XOR<PhilosophyConfigCreateWithoutInvitationInput, PhilosophyConfigUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: PhilosophyConfigCreateOrConnectWithoutInvitationInput
    upsert?: PhilosophyConfigUpsertWithoutInvitationInput
    disconnect?: PhilosophyConfigWhereInput | boolean
    delete?: PhilosophyConfigWhereInput | boolean
    connect?: PhilosophyConfigWhereUniqueInput
    update?: XOR<XOR<PhilosophyConfigUpdateToOneWithWhereWithoutInvitationInput, PhilosophyConfigUpdateWithoutInvitationInput>, PhilosophyConfigUncheckedUpdateWithoutInvitationInput>
  }

  export type CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<CashlessAccountCreateWithoutInvitationInput, CashlessAccountUncheckedCreateWithoutInvitationInput> | CashlessAccountCreateWithoutInvitationInput[] | CashlessAccountUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CashlessAccountCreateOrConnectWithoutInvitationInput | CashlessAccountCreateOrConnectWithoutInvitationInput[]
    upsert?: CashlessAccountUpsertWithWhereUniqueWithoutInvitationInput | CashlessAccountUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: CashlessAccountCreateManyInvitationInputEnvelope
    set?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
    disconnect?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
    delete?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
    connect?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
    update?: CashlessAccountUpdateWithWhereUniqueWithoutInvitationInput | CashlessAccountUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: CashlessAccountUpdateManyWithWhereWithoutInvitationInput | CashlessAccountUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: CashlessAccountScalarWhereInput | CashlessAccountScalarWhereInput[]
  }

  export type EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<EventScheduleCreateWithoutInvitationInput, EventScheduleUncheckedCreateWithoutInvitationInput> | EventScheduleCreateWithoutInvitationInput[] | EventScheduleUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: EventScheduleCreateOrConnectWithoutInvitationInput | EventScheduleCreateOrConnectWithoutInvitationInput[]
    upsert?: EventScheduleUpsertWithWhereUniqueWithoutInvitationInput | EventScheduleUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: EventScheduleCreateManyInvitationInputEnvelope
    set?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
    disconnect?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
    delete?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
    connect?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
    update?: EventScheduleUpdateWithWhereUniqueWithoutInvitationInput | EventScheduleUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: EventScheduleUpdateManyWithWhereWithoutInvitationInput | EventScheduleUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: EventScheduleScalarWhereInput | EventScheduleScalarWhereInput[]
  }

  export type GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<GuestbookEntryCreateWithoutInvitationInput, GuestbookEntryUncheckedCreateWithoutInvitationInput> | GuestbookEntryCreateWithoutInvitationInput[] | GuestbookEntryUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutInvitationInput | GuestbookEntryCreateOrConnectWithoutInvitationInput[]
    upsert?: GuestbookEntryUpsertWithWhereUniqueWithoutInvitationInput | GuestbookEntryUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: GuestbookEntryCreateManyInvitationInputEnvelope
    set?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    disconnect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    delete?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    update?: GuestbookEntryUpdateWithWhereUniqueWithoutInvitationInput | GuestbookEntryUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: GuestbookEntryUpdateManyWithWhereWithoutInvitationInput | GuestbookEntryUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: GuestbookEntryScalarWhereInput | GuestbookEntryScalarWhereInput[]
  }

  export type RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<RSVPSubmissionCreateWithoutInvitationInput, RSVPSubmissionUncheckedCreateWithoutInvitationInput> | RSVPSubmissionCreateWithoutInvitationInput[] | RSVPSubmissionUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: RSVPSubmissionCreateOrConnectWithoutInvitationInput | RSVPSubmissionCreateOrConnectWithoutInvitationInput[]
    upsert?: RSVPSubmissionUpsertWithWhereUniqueWithoutInvitationInput | RSVPSubmissionUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: RSVPSubmissionCreateManyInvitationInputEnvelope
    set?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
    disconnect?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
    delete?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
    connect?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
    update?: RSVPSubmissionUpdateWithWhereUniqueWithoutInvitationInput | RSVPSubmissionUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: RSVPSubmissionUpdateManyWithWhereWithoutInvitationInput | RSVPSubmissionUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: RSVPSubmissionScalarWhereInput | RSVPSubmissionScalarWhereInput[]
  }

  export type VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<VenueLocationCreateWithoutInvitationInput, VenueLocationUncheckedCreateWithoutInvitationInput> | VenueLocationCreateWithoutInvitationInput[] | VenueLocationUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: VenueLocationCreateOrConnectWithoutInvitationInput | VenueLocationCreateOrConnectWithoutInvitationInput[]
    upsert?: VenueLocationUpsertWithWhereUniqueWithoutInvitationInput | VenueLocationUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: VenueLocationCreateManyInvitationInputEnvelope
    set?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
    disconnect?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
    delete?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
    connect?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
    update?: VenueLocationUpdateWithWhereUniqueWithoutInvitationInput | VenueLocationUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: VenueLocationUpdateManyWithWhereWithoutInvitationInput | VenueLocationUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: VenueLocationScalarWhereInput | VenueLocationScalarWhereInput[]
  }

  export type CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<CoupleInfoCreateWithoutInvitationInput, CoupleInfoUncheckedCreateWithoutInvitationInput> | CoupleInfoCreateWithoutInvitationInput[] | CoupleInfoUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CoupleInfoCreateOrConnectWithoutInvitationInput | CoupleInfoCreateOrConnectWithoutInvitationInput[]
    upsert?: CoupleInfoUpsertWithWhereUniqueWithoutInvitationInput | CoupleInfoUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: CoupleInfoCreateManyInvitationInputEnvelope
    set?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
    disconnect?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
    delete?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
    connect?: CoupleInfoWhereUniqueInput | CoupleInfoWhereUniqueInput[]
    update?: CoupleInfoUpdateWithWhereUniqueWithoutInvitationInput | CoupleInfoUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: CoupleInfoUpdateManyWithWhereWithoutInvitationInput | CoupleInfoUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: CoupleInfoScalarWhereInput | CoupleInfoScalarWhereInput[]
  }

  export type StoryItemUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<StoryItemCreateWithoutInvitationInput, StoryItemUncheckedCreateWithoutInvitationInput> | StoryItemCreateWithoutInvitationInput[] | StoryItemUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: StoryItemCreateOrConnectWithoutInvitationInput | StoryItemCreateOrConnectWithoutInvitationInput[]
    upsert?: StoryItemUpsertWithWhereUniqueWithoutInvitationInput | StoryItemUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: StoryItemCreateManyInvitationInputEnvelope
    set?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
    disconnect?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
    delete?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
    connect?: StoryItemWhereUniqueInput | StoryItemWhereUniqueInput[]
    update?: StoryItemUpdateWithWhereUniqueWithoutInvitationInput | StoryItemUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: StoryItemUpdateManyWithWhereWithoutInvitationInput | StoryItemUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: StoryItemScalarWhereInput | StoryItemScalarWhereInput[]
  }

  export type GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<GalleryImageCreateWithoutInvitationInput, GalleryImageUncheckedCreateWithoutInvitationInput> | GalleryImageCreateWithoutInvitationInput[] | GalleryImageUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutInvitationInput | GalleryImageCreateOrConnectWithoutInvitationInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutInvitationInput | GalleryImageUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: GalleryImageCreateManyInvitationInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutInvitationInput | GalleryImageUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutInvitationInput | GalleryImageUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<GiftAddressCreateWithoutInvitationInput, GiftAddressUncheckedCreateWithoutInvitationInput> | GiftAddressCreateWithoutInvitationInput[] | GiftAddressUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GiftAddressCreateOrConnectWithoutInvitationInput | GiftAddressCreateOrConnectWithoutInvitationInput[]
    upsert?: GiftAddressUpsertWithWhereUniqueWithoutInvitationInput | GiftAddressUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: GiftAddressCreateManyInvitationInputEnvelope
    set?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
    disconnect?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
    delete?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
    connect?: GiftAddressWhereUniqueInput | GiftAddressWhereUniqueInput[]
    update?: GiftAddressUpdateWithWhereUniqueWithoutInvitationInput | GiftAddressUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: GiftAddressUpdateManyWithWhereWithoutInvitationInput | GiftAddressUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: GiftAddressScalarWhereInput | GiftAddressScalarWhereInput[]
  }

  export type InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput = {
    create?: XOR<InvitationConfigCreateWithoutInvitationInput, InvitationConfigUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: InvitationConfigCreateOrConnectWithoutInvitationInput
    upsert?: InvitationConfigUpsertWithoutInvitationInput
    disconnect?: InvitationConfigWhereInput | boolean
    delete?: InvitationConfigWhereInput | boolean
    connect?: InvitationConfigWhereUniqueInput
    update?: XOR<XOR<InvitationConfigUpdateToOneWithWhereWithoutInvitationInput, InvitationConfigUpdateWithoutInvitationInput>, InvitationConfigUncheckedUpdateWithoutInvitationInput>
  }

  export type PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput = {
    create?: XOR<PhilosophyConfigCreateWithoutInvitationInput, PhilosophyConfigUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: PhilosophyConfigCreateOrConnectWithoutInvitationInput
    upsert?: PhilosophyConfigUpsertWithoutInvitationInput
    disconnect?: PhilosophyConfigWhereInput | boolean
    delete?: PhilosophyConfigWhereInput | boolean
    connect?: PhilosophyConfigWhereUniqueInput
    update?: XOR<XOR<PhilosophyConfigUpdateToOneWithWhereWithoutInvitationInput, PhilosophyConfigUpdateWithoutInvitationInput>, PhilosophyConfigUncheckedUpdateWithoutInvitationInput>
  }

  export type InvitationCreateNestedOneWithoutVenueLocationsInput = {
    create?: XOR<InvitationCreateWithoutVenueLocationsInput, InvitationUncheckedCreateWithoutVenueLocationsInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutVenueLocationsInput
    connect?: InvitationWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InvitationUpdateOneRequiredWithoutVenueLocationsNestedInput = {
    create?: XOR<InvitationCreateWithoutVenueLocationsInput, InvitationUncheckedCreateWithoutVenueLocationsInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutVenueLocationsInput
    upsert?: InvitationUpsertWithoutVenueLocationsInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutVenueLocationsInput, InvitationUpdateWithoutVenueLocationsInput>, InvitationUncheckedUpdateWithoutVenueLocationsInput>
  }

  export type InvitationCreateNestedOneWithoutEventSchedulesInput = {
    create?: XOR<InvitationCreateWithoutEventSchedulesInput, InvitationUncheckedCreateWithoutEventSchedulesInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutEventSchedulesInput
    connect?: InvitationWhereUniqueInput
  }

  export type InvitationUpdateOneRequiredWithoutEventSchedulesNestedInput = {
    create?: XOR<InvitationCreateWithoutEventSchedulesInput, InvitationUncheckedCreateWithoutEventSchedulesInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutEventSchedulesInput
    upsert?: InvitationUpsertWithoutEventSchedulesInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutEventSchedulesInput, InvitationUpdateWithoutEventSchedulesInput>, InvitationUncheckedUpdateWithoutEventSchedulesInput>
  }

  export type InvitationCreateNestedOneWithoutRsvpSubmissionsInput = {
    create?: XOR<InvitationCreateWithoutRsvpSubmissionsInput, InvitationUncheckedCreateWithoutRsvpSubmissionsInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutRsvpSubmissionsInput
    connect?: InvitationWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type InvitationUpdateOneRequiredWithoutRsvpSubmissionsNestedInput = {
    create?: XOR<InvitationCreateWithoutRsvpSubmissionsInput, InvitationUncheckedCreateWithoutRsvpSubmissionsInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutRsvpSubmissionsInput
    upsert?: InvitationUpsertWithoutRsvpSubmissionsInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutRsvpSubmissionsInput, InvitationUpdateWithoutRsvpSubmissionsInput>, InvitationUncheckedUpdateWithoutRsvpSubmissionsInput>
  }

  export type InvitationCreateNestedOneWithoutGuestbookEntriesInput = {
    create?: XOR<InvitationCreateWithoutGuestbookEntriesInput, InvitationUncheckedCreateWithoutGuestbookEntriesInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutGuestbookEntriesInput
    connect?: InvitationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type InvitationUpdateOneRequiredWithoutGuestbookEntriesNestedInput = {
    create?: XOR<InvitationCreateWithoutGuestbookEntriesInput, InvitationUncheckedCreateWithoutGuestbookEntriesInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutGuestbookEntriesInput
    upsert?: InvitationUpsertWithoutGuestbookEntriesInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutGuestbookEntriesInput, InvitationUpdateWithoutGuestbookEntriesInput>, InvitationUncheckedUpdateWithoutGuestbookEntriesInput>
  }

  export type InvitationCreateNestedOneWithoutCashlessAccountsInput = {
    create?: XOR<InvitationCreateWithoutCashlessAccountsInput, InvitationUncheckedCreateWithoutCashlessAccountsInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutCashlessAccountsInput
    connect?: InvitationWhereUniqueInput
  }

  export type InvitationUpdateOneRequiredWithoutCashlessAccountsNestedInput = {
    create?: XOR<InvitationCreateWithoutCashlessAccountsInput, InvitationUncheckedCreateWithoutCashlessAccountsInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutCashlessAccountsInput
    upsert?: InvitationUpsertWithoutCashlessAccountsInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutCashlessAccountsInput, InvitationUpdateWithoutCashlessAccountsInput>, InvitationUncheckedUpdateWithoutCashlessAccountsInput>
  }

  export type InvitationCreateNestedOneWithoutGiftAddressesInput = {
    create?: XOR<InvitationCreateWithoutGiftAddressesInput, InvitationUncheckedCreateWithoutGiftAddressesInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutGiftAddressesInput
    connect?: InvitationWhereUniqueInput
  }

  export type InvitationUpdateOneRequiredWithoutGiftAddressesNestedInput = {
    create?: XOR<InvitationCreateWithoutGiftAddressesInput, InvitationUncheckedCreateWithoutGiftAddressesInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutGiftAddressesInput
    upsert?: InvitationUpsertWithoutGiftAddressesInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutGiftAddressesInput, InvitationUpdateWithoutGiftAddressesInput>, InvitationUncheckedUpdateWithoutGiftAddressesInput>
  }

  export type StoryItemCreateNestedOneWithoutImagesInput = {
    create?: XOR<StoryItemCreateWithoutImagesInput, StoryItemUncheckedCreateWithoutImagesInput>
    connectOrCreate?: StoryItemCreateOrConnectWithoutImagesInput
    connect?: StoryItemWhereUniqueInput
  }

  export type StoryItemUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<StoryItemCreateWithoutImagesInput, StoryItemUncheckedCreateWithoutImagesInput>
    connectOrCreate?: StoryItemCreateOrConnectWithoutImagesInput
    upsert?: StoryItemUpsertWithoutImagesInput
    connect?: StoryItemWhereUniqueInput
    update?: XOR<XOR<StoryItemUpdateToOneWithWhereWithoutImagesInput, StoryItemUpdateWithoutImagesInput>, StoryItemUncheckedUpdateWithoutImagesInput>
  }

  export type InvitationCreateNestedOneWithoutConfigInput = {
    create?: XOR<InvitationCreateWithoutConfigInput, InvitationUncheckedCreateWithoutConfigInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutConfigInput
    connect?: InvitationWhereUniqueInput
  }

  export type InvitationUpdateOneRequiredWithoutConfigNestedInput = {
    create?: XOR<InvitationCreateWithoutConfigInput, InvitationUncheckedCreateWithoutConfigInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutConfigInput
    upsert?: InvitationUpsertWithoutConfigInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutConfigInput, InvitationUpdateWithoutConfigInput>, InvitationUncheckedUpdateWithoutConfigInput>
  }

  export type InvitationCreateNestedOneWithoutCoupleInfosInput = {
    create?: XOR<InvitationCreateWithoutCoupleInfosInput, InvitationUncheckedCreateWithoutCoupleInfosInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutCoupleInfosInput
    connect?: InvitationWhereUniqueInput
  }

  export type InvitationUpdateOneRequiredWithoutCoupleInfosNestedInput = {
    create?: XOR<InvitationCreateWithoutCoupleInfosInput, InvitationUncheckedCreateWithoutCoupleInfosInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutCoupleInfosInput
    upsert?: InvitationUpsertWithoutCoupleInfosInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutCoupleInfosInput, InvitationUpdateWithoutCoupleInfosInput>, InvitationUncheckedUpdateWithoutCoupleInfosInput>
  }

  export type InvitationCreateNestedOneWithoutStoryItemsInput = {
    create?: XOR<InvitationCreateWithoutStoryItemsInput, InvitationUncheckedCreateWithoutStoryItemsInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutStoryItemsInput
    connect?: InvitationWhereUniqueInput
  }

  export type StoryImageCreateNestedManyWithoutStoryItemInput = {
    create?: XOR<StoryImageCreateWithoutStoryItemInput, StoryImageUncheckedCreateWithoutStoryItemInput> | StoryImageCreateWithoutStoryItemInput[] | StoryImageUncheckedCreateWithoutStoryItemInput[]
    connectOrCreate?: StoryImageCreateOrConnectWithoutStoryItemInput | StoryImageCreateOrConnectWithoutStoryItemInput[]
    createMany?: StoryImageCreateManyStoryItemInputEnvelope
    connect?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
  }

  export type StoryImageUncheckedCreateNestedManyWithoutStoryItemInput = {
    create?: XOR<StoryImageCreateWithoutStoryItemInput, StoryImageUncheckedCreateWithoutStoryItemInput> | StoryImageCreateWithoutStoryItemInput[] | StoryImageUncheckedCreateWithoutStoryItemInput[]
    connectOrCreate?: StoryImageCreateOrConnectWithoutStoryItemInput | StoryImageCreateOrConnectWithoutStoryItemInput[]
    createMany?: StoryImageCreateManyStoryItemInputEnvelope
    connect?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
  }

  export type InvitationUpdateOneRequiredWithoutStoryItemsNestedInput = {
    create?: XOR<InvitationCreateWithoutStoryItemsInput, InvitationUncheckedCreateWithoutStoryItemsInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutStoryItemsInput
    upsert?: InvitationUpsertWithoutStoryItemsInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutStoryItemsInput, InvitationUpdateWithoutStoryItemsInput>, InvitationUncheckedUpdateWithoutStoryItemsInput>
  }

  export type StoryImageUpdateManyWithoutStoryItemNestedInput = {
    create?: XOR<StoryImageCreateWithoutStoryItemInput, StoryImageUncheckedCreateWithoutStoryItemInput> | StoryImageCreateWithoutStoryItemInput[] | StoryImageUncheckedCreateWithoutStoryItemInput[]
    connectOrCreate?: StoryImageCreateOrConnectWithoutStoryItemInput | StoryImageCreateOrConnectWithoutStoryItemInput[]
    upsert?: StoryImageUpsertWithWhereUniqueWithoutStoryItemInput | StoryImageUpsertWithWhereUniqueWithoutStoryItemInput[]
    createMany?: StoryImageCreateManyStoryItemInputEnvelope
    set?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
    disconnect?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
    delete?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
    connect?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
    update?: StoryImageUpdateWithWhereUniqueWithoutStoryItemInput | StoryImageUpdateWithWhereUniqueWithoutStoryItemInput[]
    updateMany?: StoryImageUpdateManyWithWhereWithoutStoryItemInput | StoryImageUpdateManyWithWhereWithoutStoryItemInput[]
    deleteMany?: StoryImageScalarWhereInput | StoryImageScalarWhereInput[]
  }

  export type StoryImageUncheckedUpdateManyWithoutStoryItemNestedInput = {
    create?: XOR<StoryImageCreateWithoutStoryItemInput, StoryImageUncheckedCreateWithoutStoryItemInput> | StoryImageCreateWithoutStoryItemInput[] | StoryImageUncheckedCreateWithoutStoryItemInput[]
    connectOrCreate?: StoryImageCreateOrConnectWithoutStoryItemInput | StoryImageCreateOrConnectWithoutStoryItemInput[]
    upsert?: StoryImageUpsertWithWhereUniqueWithoutStoryItemInput | StoryImageUpsertWithWhereUniqueWithoutStoryItemInput[]
    createMany?: StoryImageCreateManyStoryItemInputEnvelope
    set?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
    disconnect?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
    delete?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
    connect?: StoryImageWhereUniqueInput | StoryImageWhereUniqueInput[]
    update?: StoryImageUpdateWithWhereUniqueWithoutStoryItemInput | StoryImageUpdateWithWhereUniqueWithoutStoryItemInput[]
    updateMany?: StoryImageUpdateManyWithWhereWithoutStoryItemInput | StoryImageUpdateManyWithWhereWithoutStoryItemInput[]
    deleteMany?: StoryImageScalarWhereInput | StoryImageScalarWhereInput[]
  }

  export type InvitationCreateNestedOneWithoutGalleryImagesInput = {
    create?: XOR<InvitationCreateWithoutGalleryImagesInput, InvitationUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutGalleryImagesInput
    connect?: InvitationWhereUniqueInput
  }

  export type InvitationUpdateOneRequiredWithoutGalleryImagesNestedInput = {
    create?: XOR<InvitationCreateWithoutGalleryImagesInput, InvitationUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutGalleryImagesInput
    upsert?: InvitationUpsertWithoutGalleryImagesInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutGalleryImagesInput, InvitationUpdateWithoutGalleryImagesInput>, InvitationUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type InvitationCreateNestedOneWithoutPhilosophyConfigInput = {
    create?: XOR<InvitationCreateWithoutPhilosophyConfigInput, InvitationUncheckedCreateWithoutPhilosophyConfigInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutPhilosophyConfigInput
    connect?: InvitationWhereUniqueInput
  }

  export type InvitationUpdateOneRequiredWithoutPhilosophyConfigNestedInput = {
    create?: XOR<InvitationCreateWithoutPhilosophyConfigInput, InvitationUncheckedCreateWithoutPhilosophyConfigInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutPhilosophyConfigInput
    upsert?: InvitationUpsertWithoutPhilosophyConfigInput
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutPhilosophyConfigInput, InvitationUpdateWithoutPhilosophyConfigInput>, InvitationUncheckedUpdateWithoutPhilosophyConfigInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
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

  export type CashlessAccountCreateWithoutInvitationInput = {
    bankName: string
    accountNumber: string
    accountHolderName: string
    bankLogoUrl?: string | null
    qrCodeUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashlessAccountUncheckedCreateWithoutInvitationInput = {
    id?: number
    bankName: string
    accountNumber: string
    accountHolderName: string
    bankLogoUrl?: string | null
    qrCodeUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashlessAccountCreateOrConnectWithoutInvitationInput = {
    where: CashlessAccountWhereUniqueInput
    create: XOR<CashlessAccountCreateWithoutInvitationInput, CashlessAccountUncheckedCreateWithoutInvitationInput>
  }

  export type CashlessAccountCreateManyInvitationInputEnvelope = {
    data: CashlessAccountCreateManyInvitationInput | CashlessAccountCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type EventScheduleCreateWithoutInvitationInput = {
    title: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventScheduleUncheckedCreateWithoutInvitationInput = {
    id?: number
    title: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventScheduleCreateOrConnectWithoutInvitationInput = {
    where: EventScheduleWhereUniqueInput
    create: XOR<EventScheduleCreateWithoutInvitationInput, EventScheduleUncheckedCreateWithoutInvitationInput>
  }

  export type EventScheduleCreateManyInvitationInputEnvelope = {
    data: EventScheduleCreateManyInvitationInput | EventScheduleCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type GuestbookEntryCreateWithoutInvitationInput = {
    name: string
    message: string
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
  }

  export type GuestbookEntryUncheckedCreateWithoutInvitationInput = {
    id?: number
    name: string
    message: string
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
  }

  export type GuestbookEntryCreateOrConnectWithoutInvitationInput = {
    where: GuestbookEntryWhereUniqueInput
    create: XOR<GuestbookEntryCreateWithoutInvitationInput, GuestbookEntryUncheckedCreateWithoutInvitationInput>
  }

  export type GuestbookEntryCreateManyInvitationInputEnvelope = {
    data: GuestbookEntryCreateManyInvitationInput | GuestbookEntryCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type RSVPSubmissionCreateWithoutInvitationInput = {
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
  }

  export type RSVPSubmissionUncheckedCreateWithoutInvitationInput = {
    id?: number
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
  }

  export type RSVPSubmissionCreateOrConnectWithoutInvitationInput = {
    where: RSVPSubmissionWhereUniqueInput
    create: XOR<RSVPSubmissionCreateWithoutInvitationInput, RSVPSubmissionUncheckedCreateWithoutInvitationInput>
  }

  export type RSVPSubmissionCreateManyInvitationInputEnvelope = {
    data: RSVPSubmissionCreateManyInvitationInput | RSVPSubmissionCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type VenueLocationCreateWithoutInvitationInput = {
    name: string
    address: string
    latitude: number
    longitude: number
    popupImageUrl?: string | null
    eventType?: string | null
    mapZoom?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueLocationUncheckedCreateWithoutInvitationInput = {
    id?: number
    name: string
    address: string
    latitude: number
    longitude: number
    popupImageUrl?: string | null
    eventType?: string | null
    mapZoom?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueLocationCreateOrConnectWithoutInvitationInput = {
    where: VenueLocationWhereUniqueInput
    create: XOR<VenueLocationCreateWithoutInvitationInput, VenueLocationUncheckedCreateWithoutInvitationInput>
  }

  export type VenueLocationCreateManyInvitationInputEnvelope = {
    data: VenueLocationCreateManyInvitationInput | VenueLocationCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type CoupleInfoCreateWithoutInvitationInput = {
    groomName: string
    brideName: string
    groomParents: string
    brideParents: string
    greetingText: string
    couplePhotoUrl?: string | null
    groomPhotoUrl?: string | null
    bridePhotoUrl?: string | null
    groomSocialLink?: string | null
    brideSocialLink?: string | null
    bibleVerse?: string | null
    bibleReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoupleInfoUncheckedCreateWithoutInvitationInput = {
    id?: number
    groomName: string
    brideName: string
    groomParents: string
    brideParents: string
    greetingText: string
    couplePhotoUrl?: string | null
    groomPhotoUrl?: string | null
    bridePhotoUrl?: string | null
    groomSocialLink?: string | null
    brideSocialLink?: string | null
    bibleVerse?: string | null
    bibleReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoupleInfoCreateOrConnectWithoutInvitationInput = {
    where: CoupleInfoWhereUniqueInput
    create: XOR<CoupleInfoCreateWithoutInvitationInput, CoupleInfoUncheckedCreateWithoutInvitationInput>
  }

  export type CoupleInfoCreateManyInvitationInputEnvelope = {
    data: CoupleInfoCreateManyInvitationInput | CoupleInfoCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type StoryItemCreateWithoutInvitationInput = {
    title: string
    body: string
    imageUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: StoryImageCreateNestedManyWithoutStoryItemInput
  }

  export type StoryItemUncheckedCreateWithoutInvitationInput = {
    id?: number
    title: string
    body: string
    imageUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: StoryImageUncheckedCreateNestedManyWithoutStoryItemInput
  }

  export type StoryItemCreateOrConnectWithoutInvitationInput = {
    where: StoryItemWhereUniqueInput
    create: XOR<StoryItemCreateWithoutInvitationInput, StoryItemUncheckedCreateWithoutInvitationInput>
  }

  export type StoryItemCreateManyInvitationInputEnvelope = {
    data: StoryItemCreateManyInvitationInput | StoryItemCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type GalleryImageCreateWithoutInvitationInput = {
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    aspectRatio?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageUncheckedCreateWithoutInvitationInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    aspectRatio?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageCreateOrConnectWithoutInvitationInput = {
    where: GalleryImageWhereUniqueInput
    create: XOR<GalleryImageCreateWithoutInvitationInput, GalleryImageUncheckedCreateWithoutInvitationInput>
  }

  export type GalleryImageCreateManyInvitationInputEnvelope = {
    data: GalleryImageCreateManyInvitationInput | GalleryImageCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type GiftAddressCreateWithoutInvitationInput = {
    label: string
    recipientName: string
    phone?: string | null
    address: string
    postalCode?: string | null
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GiftAddressUncheckedCreateWithoutInvitationInput = {
    id?: number
    label: string
    recipientName: string
    phone?: string | null
    address: string
    postalCode?: string | null
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GiftAddressCreateOrConnectWithoutInvitationInput = {
    where: GiftAddressWhereUniqueInput
    create: XOR<GiftAddressCreateWithoutInvitationInput, GiftAddressUncheckedCreateWithoutInvitationInput>
  }

  export type GiftAddressCreateManyInvitationInputEnvelope = {
    data: GiftAddressCreateManyInvitationInput | GiftAddressCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type InvitationConfigCreateWithoutInvitationInput = {
    heroCoupleNames: string
    heroOpeningLine: string
    heroWeddingDateText: string
    heroBackgroundImage?: string | null
    weddingDate: Date | string
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
    backgroundMusicUrl?: string | null
    footerGreeting: string
    footerClosingText: string
    lockedLandingEnabled?: boolean
    lockedLandingButtonText?: string
    lockedLandingGreeting?: string | null
    musicEnabled?: boolean
    musicButtonPosition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationConfigUncheckedCreateWithoutInvitationInput = {
    id?: number
    heroCoupleNames: string
    heroOpeningLine: string
    heroWeddingDateText: string
    heroBackgroundImage?: string | null
    weddingDate: Date | string
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
    backgroundMusicUrl?: string | null
    footerGreeting: string
    footerClosingText: string
    lockedLandingEnabled?: boolean
    lockedLandingButtonText?: string
    lockedLandingGreeting?: string | null
    musicEnabled?: boolean
    musicButtonPosition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationConfigCreateOrConnectWithoutInvitationInput = {
    where: InvitationConfigWhereUniqueInput
    create: XOR<InvitationConfigCreateWithoutInvitationInput, InvitationConfigUncheckedCreateWithoutInvitationInput>
  }

  export type PhilosophyConfigCreateWithoutInvitationInput = {
    quoteText: string
    quoteMeaning?: string | null
    prayerText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhilosophyConfigUncheckedCreateWithoutInvitationInput = {
    id?: number
    quoteText: string
    quoteMeaning?: string | null
    prayerText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhilosophyConfigCreateOrConnectWithoutInvitationInput = {
    where: PhilosophyConfigWhereUniqueInput
    create: XOR<PhilosophyConfigCreateWithoutInvitationInput, PhilosophyConfigUncheckedCreateWithoutInvitationInput>
  }

  export type CashlessAccountUpsertWithWhereUniqueWithoutInvitationInput = {
    where: CashlessAccountWhereUniqueInput
    update: XOR<CashlessAccountUpdateWithoutInvitationInput, CashlessAccountUncheckedUpdateWithoutInvitationInput>
    create: XOR<CashlessAccountCreateWithoutInvitationInput, CashlessAccountUncheckedCreateWithoutInvitationInput>
  }

  export type CashlessAccountUpdateWithWhereUniqueWithoutInvitationInput = {
    where: CashlessAccountWhereUniqueInput
    data: XOR<CashlessAccountUpdateWithoutInvitationInput, CashlessAccountUncheckedUpdateWithoutInvitationInput>
  }

  export type CashlessAccountUpdateManyWithWhereWithoutInvitationInput = {
    where: CashlessAccountScalarWhereInput
    data: XOR<CashlessAccountUpdateManyMutationInput, CashlessAccountUncheckedUpdateManyWithoutInvitationInput>
  }

  export type CashlessAccountScalarWhereInput = {
    AND?: CashlessAccountScalarWhereInput | CashlessAccountScalarWhereInput[]
    OR?: CashlessAccountScalarWhereInput[]
    NOT?: CashlessAccountScalarWhereInput | CashlessAccountScalarWhereInput[]
    id?: IntFilter<"CashlessAccount"> | number
    bankName?: StringFilter<"CashlessAccount"> | string
    accountNumber?: StringFilter<"CashlessAccount"> | string
    accountHolderName?: StringFilter<"CashlessAccount"> | string
    bankLogoUrl?: StringNullableFilter<"CashlessAccount"> | string | null
    qrCodeUrl?: StringNullableFilter<"CashlessAccount"> | string | null
    sortOrder?: IntFilter<"CashlessAccount"> | number
    isActive?: BoolFilter<"CashlessAccount"> | boolean
    createdAt?: DateTimeFilter<"CashlessAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CashlessAccount"> | Date | string
    invitationId?: IntFilter<"CashlessAccount"> | number
  }

  export type EventScheduleUpsertWithWhereUniqueWithoutInvitationInput = {
    where: EventScheduleWhereUniqueInput
    update: XOR<EventScheduleUpdateWithoutInvitationInput, EventScheduleUncheckedUpdateWithoutInvitationInput>
    create: XOR<EventScheduleCreateWithoutInvitationInput, EventScheduleUncheckedCreateWithoutInvitationInput>
  }

  export type EventScheduleUpdateWithWhereUniqueWithoutInvitationInput = {
    where: EventScheduleWhereUniqueInput
    data: XOR<EventScheduleUpdateWithoutInvitationInput, EventScheduleUncheckedUpdateWithoutInvitationInput>
  }

  export type EventScheduleUpdateManyWithWhereWithoutInvitationInput = {
    where: EventScheduleScalarWhereInput
    data: XOR<EventScheduleUpdateManyMutationInput, EventScheduleUncheckedUpdateManyWithoutInvitationInput>
  }

  export type EventScheduleScalarWhereInput = {
    AND?: EventScheduleScalarWhereInput | EventScheduleScalarWhereInput[]
    OR?: EventScheduleScalarWhereInput[]
    NOT?: EventScheduleScalarWhereInput | EventScheduleScalarWhereInput[]
    id?: IntFilter<"EventSchedule"> | number
    title?: StringFilter<"EventSchedule"> | string
    date?: DateTimeFilter<"EventSchedule"> | Date | string
    startTime?: DateTimeFilter<"EventSchedule"> | Date | string
    endTime?: DateTimeFilter<"EventSchedule"> | Date | string
    createdAt?: DateTimeFilter<"EventSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"EventSchedule"> | Date | string
    invitationId?: IntFilter<"EventSchedule"> | number
  }

  export type GuestbookEntryUpsertWithWhereUniqueWithoutInvitationInput = {
    where: GuestbookEntryWhereUniqueInput
    update: XOR<GuestbookEntryUpdateWithoutInvitationInput, GuestbookEntryUncheckedUpdateWithoutInvitationInput>
    create: XOR<GuestbookEntryCreateWithoutInvitationInput, GuestbookEntryUncheckedCreateWithoutInvitationInput>
  }

  export type GuestbookEntryUpdateWithWhereUniqueWithoutInvitationInput = {
    where: GuestbookEntryWhereUniqueInput
    data: XOR<GuestbookEntryUpdateWithoutInvitationInput, GuestbookEntryUncheckedUpdateWithoutInvitationInput>
  }

  export type GuestbookEntryUpdateManyWithWhereWithoutInvitationInput = {
    where: GuestbookEntryScalarWhereInput
    data: XOR<GuestbookEntryUpdateManyMutationInput, GuestbookEntryUncheckedUpdateManyWithoutInvitationInput>
  }

  export type GuestbookEntryScalarWhereInput = {
    AND?: GuestbookEntryScalarWhereInput | GuestbookEntryScalarWhereInput[]
    OR?: GuestbookEntryScalarWhereInput[]
    NOT?: GuestbookEntryScalarWhereInput | GuestbookEntryScalarWhereInput[]
    id?: IntFilter<"GuestbookEntry"> | number
    name?: StringFilter<"GuestbookEntry"> | string
    message?: StringFilter<"GuestbookEntry"> | string
    isVisible?: BoolFilter<"GuestbookEntry"> | boolean
    createdAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    invitationId?: IntFilter<"GuestbookEntry"> | number
    idempotencyKey?: StringNullableFilter<"GuestbookEntry"> | string | null
  }

  export type RSVPSubmissionUpsertWithWhereUniqueWithoutInvitationInput = {
    where: RSVPSubmissionWhereUniqueInput
    update: XOR<RSVPSubmissionUpdateWithoutInvitationInput, RSVPSubmissionUncheckedUpdateWithoutInvitationInput>
    create: XOR<RSVPSubmissionCreateWithoutInvitationInput, RSVPSubmissionUncheckedCreateWithoutInvitationInput>
  }

  export type RSVPSubmissionUpdateWithWhereUniqueWithoutInvitationInput = {
    where: RSVPSubmissionWhereUniqueInput
    data: XOR<RSVPSubmissionUpdateWithoutInvitationInput, RSVPSubmissionUncheckedUpdateWithoutInvitationInput>
  }

  export type RSVPSubmissionUpdateManyWithWhereWithoutInvitationInput = {
    where: RSVPSubmissionScalarWhereInput
    data: XOR<RSVPSubmissionUpdateManyMutationInput, RSVPSubmissionUncheckedUpdateManyWithoutInvitationInput>
  }

  export type RSVPSubmissionScalarWhereInput = {
    AND?: RSVPSubmissionScalarWhereInput | RSVPSubmissionScalarWhereInput[]
    OR?: RSVPSubmissionScalarWhereInput[]
    NOT?: RSVPSubmissionScalarWhereInput | RSVPSubmissionScalarWhereInput[]
    id?: IntFilter<"RSVPSubmission"> | number
    name?: StringFilter<"RSVPSubmission"> | string
    email?: StringFilter<"RSVPSubmission"> | string
    attendanceStatus?: EnumAttendanceStatusFilter<"RSVPSubmission"> | $Enums.AttendanceStatus
    paxCount?: IntFilter<"RSVPSubmission"> | number
    createdAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    invitationId?: IntFilter<"RSVPSubmission"> | number
    idempotencyKey?: StringNullableFilter<"RSVPSubmission"> | string | null
  }

  export type VenueLocationUpsertWithWhereUniqueWithoutInvitationInput = {
    where: VenueLocationWhereUniqueInput
    update: XOR<VenueLocationUpdateWithoutInvitationInput, VenueLocationUncheckedUpdateWithoutInvitationInput>
    create: XOR<VenueLocationCreateWithoutInvitationInput, VenueLocationUncheckedCreateWithoutInvitationInput>
  }

  export type VenueLocationUpdateWithWhereUniqueWithoutInvitationInput = {
    where: VenueLocationWhereUniqueInput
    data: XOR<VenueLocationUpdateWithoutInvitationInput, VenueLocationUncheckedUpdateWithoutInvitationInput>
  }

  export type VenueLocationUpdateManyWithWhereWithoutInvitationInput = {
    where: VenueLocationScalarWhereInput
    data: XOR<VenueLocationUpdateManyMutationInput, VenueLocationUncheckedUpdateManyWithoutInvitationInput>
  }

  export type VenueLocationScalarWhereInput = {
    AND?: VenueLocationScalarWhereInput | VenueLocationScalarWhereInput[]
    OR?: VenueLocationScalarWhereInput[]
    NOT?: VenueLocationScalarWhereInput | VenueLocationScalarWhereInput[]
    id?: IntFilter<"VenueLocation"> | number
    name?: StringFilter<"VenueLocation"> | string
    address?: StringFilter<"VenueLocation"> | string
    latitude?: FloatFilter<"VenueLocation"> | number
    longitude?: FloatFilter<"VenueLocation"> | number
    popupImageUrl?: StringNullableFilter<"VenueLocation"> | string | null
    eventType?: StringNullableFilter<"VenueLocation"> | string | null
    mapZoom?: IntFilter<"VenueLocation"> | number
    createdAt?: DateTimeFilter<"VenueLocation"> | Date | string
    updatedAt?: DateTimeFilter<"VenueLocation"> | Date | string
    invitationId?: IntFilter<"VenueLocation"> | number
  }

  export type CoupleInfoUpsertWithWhereUniqueWithoutInvitationInput = {
    where: CoupleInfoWhereUniqueInput
    update: XOR<CoupleInfoUpdateWithoutInvitationInput, CoupleInfoUncheckedUpdateWithoutInvitationInput>
    create: XOR<CoupleInfoCreateWithoutInvitationInput, CoupleInfoUncheckedCreateWithoutInvitationInput>
  }

  export type CoupleInfoUpdateWithWhereUniqueWithoutInvitationInput = {
    where: CoupleInfoWhereUniqueInput
    data: XOR<CoupleInfoUpdateWithoutInvitationInput, CoupleInfoUncheckedUpdateWithoutInvitationInput>
  }

  export type CoupleInfoUpdateManyWithWhereWithoutInvitationInput = {
    where: CoupleInfoScalarWhereInput
    data: XOR<CoupleInfoUpdateManyMutationInput, CoupleInfoUncheckedUpdateManyWithoutInvitationInput>
  }

  export type CoupleInfoScalarWhereInput = {
    AND?: CoupleInfoScalarWhereInput | CoupleInfoScalarWhereInput[]
    OR?: CoupleInfoScalarWhereInput[]
    NOT?: CoupleInfoScalarWhereInput | CoupleInfoScalarWhereInput[]
    id?: IntFilter<"CoupleInfo"> | number
    groomName?: StringFilter<"CoupleInfo"> | string
    brideName?: StringFilter<"CoupleInfo"> | string
    groomParents?: StringFilter<"CoupleInfo"> | string
    brideParents?: StringFilter<"CoupleInfo"> | string
    greetingText?: StringFilter<"CoupleInfo"> | string
    couplePhotoUrl?: StringNullableFilter<"CoupleInfo"> | string | null
    groomPhotoUrl?: StringNullableFilter<"CoupleInfo"> | string | null
    bridePhotoUrl?: StringNullableFilter<"CoupleInfo"> | string | null
    groomSocialLink?: StringNullableFilter<"CoupleInfo"> | string | null
    brideSocialLink?: StringNullableFilter<"CoupleInfo"> | string | null
    bibleVerse?: StringNullableFilter<"CoupleInfo"> | string | null
    bibleReference?: StringNullableFilter<"CoupleInfo"> | string | null
    createdAt?: DateTimeFilter<"CoupleInfo"> | Date | string
    updatedAt?: DateTimeFilter<"CoupleInfo"> | Date | string
    invitationId?: IntFilter<"CoupleInfo"> | number
  }

  export type StoryItemUpsertWithWhereUniqueWithoutInvitationInput = {
    where: StoryItemWhereUniqueInput
    update: XOR<StoryItemUpdateWithoutInvitationInput, StoryItemUncheckedUpdateWithoutInvitationInput>
    create: XOR<StoryItemCreateWithoutInvitationInput, StoryItemUncheckedCreateWithoutInvitationInput>
  }

  export type StoryItemUpdateWithWhereUniqueWithoutInvitationInput = {
    where: StoryItemWhereUniqueInput
    data: XOR<StoryItemUpdateWithoutInvitationInput, StoryItemUncheckedUpdateWithoutInvitationInput>
  }

  export type StoryItemUpdateManyWithWhereWithoutInvitationInput = {
    where: StoryItemScalarWhereInput
    data: XOR<StoryItemUpdateManyMutationInput, StoryItemUncheckedUpdateManyWithoutInvitationInput>
  }

  export type StoryItemScalarWhereInput = {
    AND?: StoryItemScalarWhereInput | StoryItemScalarWhereInput[]
    OR?: StoryItemScalarWhereInput[]
    NOT?: StoryItemScalarWhereInput | StoryItemScalarWhereInput[]
    id?: IntFilter<"StoryItem"> | number
    title?: StringFilter<"StoryItem"> | string
    body?: StringFilter<"StoryItem"> | string
    imageUrl?: StringNullableFilter<"StoryItem"> | string | null
    sortOrder?: IntFilter<"StoryItem"> | number
    createdAt?: DateTimeFilter<"StoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"StoryItem"> | Date | string
    invitationId?: IntFilter<"StoryItem"> | number
  }

  export type GalleryImageUpsertWithWhereUniqueWithoutInvitationInput = {
    where: GalleryImageWhereUniqueInput
    update: XOR<GalleryImageUpdateWithoutInvitationInput, GalleryImageUncheckedUpdateWithoutInvitationInput>
    create: XOR<GalleryImageCreateWithoutInvitationInput, GalleryImageUncheckedCreateWithoutInvitationInput>
  }

  export type GalleryImageUpdateWithWhereUniqueWithoutInvitationInput = {
    where: GalleryImageWhereUniqueInput
    data: XOR<GalleryImageUpdateWithoutInvitationInput, GalleryImageUncheckedUpdateWithoutInvitationInput>
  }

  export type GalleryImageUpdateManyWithWhereWithoutInvitationInput = {
    where: GalleryImageScalarWhereInput
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyWithoutInvitationInput>
  }

  export type GalleryImageScalarWhereInput = {
    AND?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    OR?: GalleryImageScalarWhereInput[]
    NOT?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    id?: IntFilter<"GalleryImage"> | number
    imageUrl?: StringFilter<"GalleryImage"> | string
    caption?: StringNullableFilter<"GalleryImage"> | string | null
    sortOrder?: IntFilter<"GalleryImage"> | number
    aspectRatio?: StringNullableFilter<"GalleryImage"> | string | null
    isFeatured?: BoolFilter<"GalleryImage"> | boolean
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryImage"> | Date | string
    invitationId?: IntFilter<"GalleryImage"> | number
  }

  export type GiftAddressUpsertWithWhereUniqueWithoutInvitationInput = {
    where: GiftAddressWhereUniqueInput
    update: XOR<GiftAddressUpdateWithoutInvitationInput, GiftAddressUncheckedUpdateWithoutInvitationInput>
    create: XOR<GiftAddressCreateWithoutInvitationInput, GiftAddressUncheckedCreateWithoutInvitationInput>
  }

  export type GiftAddressUpdateWithWhereUniqueWithoutInvitationInput = {
    where: GiftAddressWhereUniqueInput
    data: XOR<GiftAddressUpdateWithoutInvitationInput, GiftAddressUncheckedUpdateWithoutInvitationInput>
  }

  export type GiftAddressUpdateManyWithWhereWithoutInvitationInput = {
    where: GiftAddressScalarWhereInput
    data: XOR<GiftAddressUpdateManyMutationInput, GiftAddressUncheckedUpdateManyWithoutInvitationInput>
  }

  export type GiftAddressScalarWhereInput = {
    AND?: GiftAddressScalarWhereInput | GiftAddressScalarWhereInput[]
    OR?: GiftAddressScalarWhereInput[]
    NOT?: GiftAddressScalarWhereInput | GiftAddressScalarWhereInput[]
    id?: IntFilter<"GiftAddress"> | number
    label?: StringFilter<"GiftAddress"> | string
    recipientName?: StringFilter<"GiftAddress"> | string
    phone?: StringNullableFilter<"GiftAddress"> | string | null
    address?: StringFilter<"GiftAddress"> | string
    postalCode?: StringNullableFilter<"GiftAddress"> | string | null
    note?: StringNullableFilter<"GiftAddress"> | string | null
    isActive?: BoolFilter<"GiftAddress"> | boolean
    createdAt?: DateTimeFilter<"GiftAddress"> | Date | string
    updatedAt?: DateTimeFilter<"GiftAddress"> | Date | string
    invitationId?: IntFilter<"GiftAddress"> | number
  }

  export type InvitationConfigUpsertWithoutInvitationInput = {
    update: XOR<InvitationConfigUpdateWithoutInvitationInput, InvitationConfigUncheckedUpdateWithoutInvitationInput>
    create: XOR<InvitationConfigCreateWithoutInvitationInput, InvitationConfigUncheckedCreateWithoutInvitationInput>
    where?: InvitationConfigWhereInput
  }

  export type InvitationConfigUpdateToOneWithWhereWithoutInvitationInput = {
    where?: InvitationConfigWhereInput
    data: XOR<InvitationConfigUpdateWithoutInvitationInput, InvitationConfigUncheckedUpdateWithoutInvitationInput>
  }

  export type InvitationConfigUpdateWithoutInvitationInput = {
    heroCoupleNames?: StringFieldUpdateOperationsInput | string
    heroOpeningLine?: StringFieldUpdateOperationsInput | string
    heroWeddingDateText?: StringFieldUpdateOperationsInput | string
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundMusicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerGreeting?: StringFieldUpdateOperationsInput | string
    footerClosingText?: StringFieldUpdateOperationsInput | string
    lockedLandingEnabled?: BoolFieldUpdateOperationsInput | boolean
    lockedLandingButtonText?: StringFieldUpdateOperationsInput | string
    lockedLandingGreeting?: NullableStringFieldUpdateOperationsInput | string | null
    musicEnabled?: BoolFieldUpdateOperationsInput | boolean
    musicButtonPosition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationConfigUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroCoupleNames?: StringFieldUpdateOperationsInput | string
    heroOpeningLine?: StringFieldUpdateOperationsInput | string
    heroWeddingDateText?: StringFieldUpdateOperationsInput | string
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundMusicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerGreeting?: StringFieldUpdateOperationsInput | string
    footerClosingText?: StringFieldUpdateOperationsInput | string
    lockedLandingEnabled?: BoolFieldUpdateOperationsInput | boolean
    lockedLandingButtonText?: StringFieldUpdateOperationsInput | string
    lockedLandingGreeting?: NullableStringFieldUpdateOperationsInput | string | null
    musicEnabled?: BoolFieldUpdateOperationsInput | boolean
    musicButtonPosition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhilosophyConfigUpsertWithoutInvitationInput = {
    update: XOR<PhilosophyConfigUpdateWithoutInvitationInput, PhilosophyConfigUncheckedUpdateWithoutInvitationInput>
    create: XOR<PhilosophyConfigCreateWithoutInvitationInput, PhilosophyConfigUncheckedCreateWithoutInvitationInput>
    where?: PhilosophyConfigWhereInput
  }

  export type PhilosophyConfigUpdateToOneWithWhereWithoutInvitationInput = {
    where?: PhilosophyConfigWhereInput
    data: XOR<PhilosophyConfigUpdateWithoutInvitationInput, PhilosophyConfigUncheckedUpdateWithoutInvitationInput>
  }

  export type PhilosophyConfigUpdateWithoutInvitationInput = {
    quoteText?: StringFieldUpdateOperationsInput | string
    quoteMeaning?: NullableStringFieldUpdateOperationsInput | string | null
    prayerText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhilosophyConfigUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteText?: StringFieldUpdateOperationsInput | string
    quoteMeaning?: NullableStringFieldUpdateOperationsInput | string | null
    prayerText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateWithoutVenueLocationsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutVenueLocationsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutVenueLocationsInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutVenueLocationsInput, InvitationUncheckedCreateWithoutVenueLocationsInput>
  }

  export type InvitationUpsertWithoutVenueLocationsInput = {
    update: XOR<InvitationUpdateWithoutVenueLocationsInput, InvitationUncheckedUpdateWithoutVenueLocationsInput>
    create: XOR<InvitationCreateWithoutVenueLocationsInput, InvitationUncheckedCreateWithoutVenueLocationsInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutVenueLocationsInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutVenueLocationsInput, InvitationUncheckedUpdateWithoutVenueLocationsInput>
  }

  export type InvitationUpdateWithoutVenueLocationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutVenueLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutEventSchedulesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutEventSchedulesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutEventSchedulesInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutEventSchedulesInput, InvitationUncheckedCreateWithoutEventSchedulesInput>
  }

  export type InvitationUpsertWithoutEventSchedulesInput = {
    update: XOR<InvitationUpdateWithoutEventSchedulesInput, InvitationUncheckedUpdateWithoutEventSchedulesInput>
    create: XOR<InvitationCreateWithoutEventSchedulesInput, InvitationUncheckedCreateWithoutEventSchedulesInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutEventSchedulesInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutEventSchedulesInput, InvitationUncheckedUpdateWithoutEventSchedulesInput>
  }

  export type InvitationUpdateWithoutEventSchedulesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutEventSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutRsvpSubmissionsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutRsvpSubmissionsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutRsvpSubmissionsInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutRsvpSubmissionsInput, InvitationUncheckedCreateWithoutRsvpSubmissionsInput>
  }

  export type InvitationUpsertWithoutRsvpSubmissionsInput = {
    update: XOR<InvitationUpdateWithoutRsvpSubmissionsInput, InvitationUncheckedUpdateWithoutRsvpSubmissionsInput>
    create: XOR<InvitationCreateWithoutRsvpSubmissionsInput, InvitationUncheckedCreateWithoutRsvpSubmissionsInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutRsvpSubmissionsInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutRsvpSubmissionsInput, InvitationUncheckedUpdateWithoutRsvpSubmissionsInput>
  }

  export type InvitationUpdateWithoutRsvpSubmissionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutRsvpSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutGuestbookEntriesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutGuestbookEntriesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutGuestbookEntriesInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutGuestbookEntriesInput, InvitationUncheckedCreateWithoutGuestbookEntriesInput>
  }

  export type InvitationUpsertWithoutGuestbookEntriesInput = {
    update: XOR<InvitationUpdateWithoutGuestbookEntriesInput, InvitationUncheckedUpdateWithoutGuestbookEntriesInput>
    create: XOR<InvitationCreateWithoutGuestbookEntriesInput, InvitationUncheckedCreateWithoutGuestbookEntriesInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutGuestbookEntriesInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutGuestbookEntriesInput, InvitationUncheckedUpdateWithoutGuestbookEntriesInput>
  }

  export type InvitationUpdateWithoutGuestbookEntriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutGuestbookEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutCashlessAccountsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutCashlessAccountsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutCashlessAccountsInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutCashlessAccountsInput, InvitationUncheckedCreateWithoutCashlessAccountsInput>
  }

  export type InvitationUpsertWithoutCashlessAccountsInput = {
    update: XOR<InvitationUpdateWithoutCashlessAccountsInput, InvitationUncheckedUpdateWithoutCashlessAccountsInput>
    create: XOR<InvitationCreateWithoutCashlessAccountsInput, InvitationUncheckedCreateWithoutCashlessAccountsInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutCashlessAccountsInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutCashlessAccountsInput, InvitationUncheckedUpdateWithoutCashlessAccountsInput>
  }

  export type InvitationUpdateWithoutCashlessAccountsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutCashlessAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutGiftAddressesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutGiftAddressesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutGiftAddressesInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutGiftAddressesInput, InvitationUncheckedCreateWithoutGiftAddressesInput>
  }

  export type InvitationUpsertWithoutGiftAddressesInput = {
    update: XOR<InvitationUpdateWithoutGiftAddressesInput, InvitationUncheckedUpdateWithoutGiftAddressesInput>
    create: XOR<InvitationCreateWithoutGiftAddressesInput, InvitationUncheckedCreateWithoutGiftAddressesInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutGiftAddressesInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutGiftAddressesInput, InvitationUncheckedUpdateWithoutGiftAddressesInput>
  }

  export type InvitationUpdateWithoutGiftAddressesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutGiftAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type StoryItemCreateWithoutImagesInput = {
    title: string
    body: string
    imageUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutStoryItemsInput
  }

  export type StoryItemUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    body: string
    imageUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type StoryItemCreateOrConnectWithoutImagesInput = {
    where: StoryItemWhereUniqueInput
    create: XOR<StoryItemCreateWithoutImagesInput, StoryItemUncheckedCreateWithoutImagesInput>
  }

  export type StoryItemUpsertWithoutImagesInput = {
    update: XOR<StoryItemUpdateWithoutImagesInput, StoryItemUncheckedUpdateWithoutImagesInput>
    create: XOR<StoryItemCreateWithoutImagesInput, StoryItemUncheckedCreateWithoutImagesInput>
    where?: StoryItemWhereInput
  }

  export type StoryItemUpdateToOneWithWhereWithoutImagesInput = {
    where?: StoryItemWhereInput
    data: XOR<StoryItemUpdateWithoutImagesInput, StoryItemUncheckedUpdateWithoutImagesInput>
  }

  export type StoryItemUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutStoryItemsNestedInput
  }

  export type StoryItemUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type InvitationCreateWithoutConfigInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutConfigInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutConfigInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutConfigInput, InvitationUncheckedCreateWithoutConfigInput>
  }

  export type InvitationUpsertWithoutConfigInput = {
    update: XOR<InvitationUpdateWithoutConfigInput, InvitationUncheckedUpdateWithoutConfigInput>
    create: XOR<InvitationCreateWithoutConfigInput, InvitationUncheckedCreateWithoutConfigInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutConfigInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutConfigInput, InvitationUncheckedUpdateWithoutConfigInput>
  }

  export type InvitationUpdateWithoutConfigInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutConfigInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutCoupleInfosInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutCoupleInfosInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutCoupleInfosInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutCoupleInfosInput, InvitationUncheckedCreateWithoutCoupleInfosInput>
  }

  export type InvitationUpsertWithoutCoupleInfosInput = {
    update: XOR<InvitationUpdateWithoutCoupleInfosInput, InvitationUncheckedUpdateWithoutCoupleInfosInput>
    create: XOR<InvitationCreateWithoutCoupleInfosInput, InvitationUncheckedCreateWithoutCoupleInfosInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutCoupleInfosInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutCoupleInfosInput, InvitationUncheckedUpdateWithoutCoupleInfosInput>
  }

  export type InvitationUpdateWithoutCoupleInfosInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutCoupleInfosInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutStoryItemsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutStoryItemsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutStoryItemsInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutStoryItemsInput, InvitationUncheckedCreateWithoutStoryItemsInput>
  }

  export type StoryImageCreateWithoutStoryItemInput = {
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoryImageUncheckedCreateWithoutStoryItemInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoryImageCreateOrConnectWithoutStoryItemInput = {
    where: StoryImageWhereUniqueInput
    create: XOR<StoryImageCreateWithoutStoryItemInput, StoryImageUncheckedCreateWithoutStoryItemInput>
  }

  export type StoryImageCreateManyStoryItemInputEnvelope = {
    data: StoryImageCreateManyStoryItemInput | StoryImageCreateManyStoryItemInput[]
    skipDuplicates?: boolean
  }

  export type InvitationUpsertWithoutStoryItemsInput = {
    update: XOR<InvitationUpdateWithoutStoryItemsInput, InvitationUncheckedUpdateWithoutStoryItemsInput>
    create: XOR<InvitationCreateWithoutStoryItemsInput, InvitationUncheckedCreateWithoutStoryItemsInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutStoryItemsInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutStoryItemsInput, InvitationUncheckedUpdateWithoutStoryItemsInput>
  }

  export type InvitationUpdateWithoutStoryItemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutStoryItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type StoryImageUpsertWithWhereUniqueWithoutStoryItemInput = {
    where: StoryImageWhereUniqueInput
    update: XOR<StoryImageUpdateWithoutStoryItemInput, StoryImageUncheckedUpdateWithoutStoryItemInput>
    create: XOR<StoryImageCreateWithoutStoryItemInput, StoryImageUncheckedCreateWithoutStoryItemInput>
  }

  export type StoryImageUpdateWithWhereUniqueWithoutStoryItemInput = {
    where: StoryImageWhereUniqueInput
    data: XOR<StoryImageUpdateWithoutStoryItemInput, StoryImageUncheckedUpdateWithoutStoryItemInput>
  }

  export type StoryImageUpdateManyWithWhereWithoutStoryItemInput = {
    where: StoryImageScalarWhereInput
    data: XOR<StoryImageUpdateManyMutationInput, StoryImageUncheckedUpdateManyWithoutStoryItemInput>
  }

  export type StoryImageScalarWhereInput = {
    AND?: StoryImageScalarWhereInput | StoryImageScalarWhereInput[]
    OR?: StoryImageScalarWhereInput[]
    NOT?: StoryImageScalarWhereInput | StoryImageScalarWhereInput[]
    id?: IntFilter<"StoryImage"> | number
    imageUrl?: StringFilter<"StoryImage"> | string
    caption?: StringNullableFilter<"StoryImage"> | string | null
    sortOrder?: IntFilter<"StoryImage"> | number
    createdAt?: DateTimeFilter<"StoryImage"> | Date | string
    updatedAt?: DateTimeFilter<"StoryImage"> | Date | string
    storyItemId?: IntFilter<"StoryImage"> | number
  }

  export type InvitationCreateWithoutGalleryImagesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutGalleryImagesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
    philosophyConfig?: PhilosophyConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutGalleryImagesInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutGalleryImagesInput, InvitationUncheckedCreateWithoutGalleryImagesInput>
  }

  export type InvitationUpsertWithoutGalleryImagesInput = {
    update: XOR<InvitationUpdateWithoutGalleryImagesInput, InvitationUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<InvitationCreateWithoutGalleryImagesInput, InvitationUncheckedCreateWithoutGalleryImagesInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutGalleryImagesInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutGalleryImagesInput, InvitationUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type InvitationUpdateWithoutGalleryImagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutGalleryImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
    philosophyConfig?: PhilosophyConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutPhilosophyConfigInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutPhilosophyConfigInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    coupleInfos?: CoupleInfoUncheckedCreateNestedManyWithoutInvitationInput
    storyItems?: StoryItemUncheckedCreateNestedManyWithoutInvitationInput
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutInvitationInput
    giftAddresses?: GiftAddressUncheckedCreateNestedManyWithoutInvitationInput
    config?: InvitationConfigUncheckedCreateNestedOneWithoutInvitationInput
  }

  export type InvitationCreateOrConnectWithoutPhilosophyConfigInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutPhilosophyConfigInput, InvitationUncheckedCreateWithoutPhilosophyConfigInput>
  }

  export type InvitationUpsertWithoutPhilosophyConfigInput = {
    update: XOR<InvitationUpdateWithoutPhilosophyConfigInput, InvitationUncheckedUpdateWithoutPhilosophyConfigInput>
    create: XOR<InvitationCreateWithoutPhilosophyConfigInput, InvitationUncheckedCreateWithoutPhilosophyConfigInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutPhilosophyConfigInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutPhilosophyConfigInput, InvitationUncheckedUpdateWithoutPhilosophyConfigInput>
  }

  export type InvitationUpdateWithoutPhilosophyConfigInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUpdateOneWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutPhilosophyConfigInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    coupleInfos?: CoupleInfoUncheckedUpdateManyWithoutInvitationNestedInput
    storyItems?: StoryItemUncheckedUpdateManyWithoutInvitationNestedInput
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutInvitationNestedInput
    giftAddresses?: GiftAddressUncheckedUpdateManyWithoutInvitationNestedInput
    config?: InvitationConfigUncheckedUpdateOneWithoutInvitationNestedInput
  }

  export type CashlessAccountCreateManyInvitationInput = {
    id?: number
    bankName: string
    accountNumber: string
    accountHolderName: string
    bankLogoUrl?: string | null
    qrCodeUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventScheduleCreateManyInvitationInput = {
    id?: number
    title: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestbookEntryCreateManyInvitationInput = {
    id?: number
    name: string
    message: string
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
  }

  export type RSVPSubmissionCreateManyInvitationInput = {
    id?: number
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
  }

  export type VenueLocationCreateManyInvitationInput = {
    id?: number
    name: string
    address: string
    latitude: number
    longitude: number
    popupImageUrl?: string | null
    eventType?: string | null
    mapZoom?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoupleInfoCreateManyInvitationInput = {
    id?: number
    groomName: string
    brideName: string
    groomParents: string
    brideParents: string
    greetingText: string
    couplePhotoUrl?: string | null
    groomPhotoUrl?: string | null
    bridePhotoUrl?: string | null
    groomSocialLink?: string | null
    brideSocialLink?: string | null
    bibleVerse?: string | null
    bibleReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoryItemCreateManyInvitationInput = {
    id?: number
    title: string
    body: string
    imageUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageCreateManyInvitationInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    aspectRatio?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GiftAddressCreateManyInvitationInput = {
    id?: number
    label: string
    recipientName: string
    phone?: string | null
    address: string
    postalCode?: string | null
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashlessAccountUpdateWithoutInvitationInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    bankLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashlessAccountUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    bankLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashlessAccountUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    bankLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleUpdateWithoutInvitationInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryUpdateWithoutInvitationInput = {
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestbookEntryUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestbookEntryUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RSVPSubmissionUpdateWithoutInvitationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RSVPSubmissionUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RSVPSubmissionUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VenueLocationUpdateWithoutInvitationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    popupImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    mapZoom?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueLocationUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    popupImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    mapZoom?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueLocationUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    popupImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    mapZoom?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleInfoUpdateWithoutInvitationInput = {
    groomName?: StringFieldUpdateOperationsInput | string
    brideName?: StringFieldUpdateOperationsInput | string
    groomParents?: StringFieldUpdateOperationsInput | string
    brideParents?: StringFieldUpdateOperationsInput | string
    greetingText?: StringFieldUpdateOperationsInput | string
    couplePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bridePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    brideSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    bibleVerse?: NullableStringFieldUpdateOperationsInput | string | null
    bibleReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleInfoUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    groomName?: StringFieldUpdateOperationsInput | string
    brideName?: StringFieldUpdateOperationsInput | string
    groomParents?: StringFieldUpdateOperationsInput | string
    brideParents?: StringFieldUpdateOperationsInput | string
    greetingText?: StringFieldUpdateOperationsInput | string
    couplePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bridePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    brideSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    bibleVerse?: NullableStringFieldUpdateOperationsInput | string | null
    bibleReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleInfoUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    groomName?: StringFieldUpdateOperationsInput | string
    brideName?: StringFieldUpdateOperationsInput | string
    groomParents?: StringFieldUpdateOperationsInput | string
    brideParents?: StringFieldUpdateOperationsInput | string
    greetingText?: StringFieldUpdateOperationsInput | string
    couplePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bridePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    groomSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    brideSocialLink?: NullableStringFieldUpdateOperationsInput | string | null
    bibleVerse?: NullableStringFieldUpdateOperationsInput | string | null
    bibleReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryItemUpdateWithoutInvitationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: StoryImageUpdateManyWithoutStoryItemNestedInput
  }

  export type StoryItemUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: StoryImageUncheckedUpdateManyWithoutStoryItemNestedInput
  }

  export type StoryItemUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUpdateWithoutInvitationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftAddressUpdateWithoutInvitationInput = {
    label?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftAddressUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftAddressUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryImageCreateManyStoryItemInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoryImageUpdateWithoutStoryItemInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryImageUncheckedUpdateWithoutStoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryImageUncheckedUpdateManyWithoutStoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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