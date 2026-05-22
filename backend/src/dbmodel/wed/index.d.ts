
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
    CashlessAccount: 'CashlessAccount'
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
      modelProps: "adminUser" | "invitation" | "venueLocation" | "eventSchedule" | "rSVPSubmission" | "guestbookEntry" | "cashlessAccount"
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
    venueLocations: number
    eventSchedules: number
    rsvpSubmissions: number
    guestbookEntries: number
    cashlessAccounts: number
  }

  export type InvitationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venueLocations?: boolean | InvitationCountOutputTypeCountVenueLocationsArgs
    eventSchedules?: boolean | InvitationCountOutputTypeCountEventSchedulesArgs
    rsvpSubmissions?: boolean | InvitationCountOutputTypeCountRsvpSubmissionsArgs
    guestbookEntries?: boolean | InvitationCountOutputTypeCountGuestbookEntriesArgs
    cashlessAccounts?: boolean | InvitationCountOutputTypeCountCashlessAccountsArgs
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
  export type InvitationCountOutputTypeCountVenueLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueLocationWhereInput
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
  export type InvitationCountOutputTypeCountRsvpSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RSVPSubmissionWhereInput
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
  export type InvitationCountOutputTypeCountCashlessAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashlessAccountWhereInput
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
    venueLocations?: boolean | Invitation$venueLocationsArgs<ExtArgs>
    eventSchedules?: boolean | Invitation$eventSchedulesArgs<ExtArgs>
    rsvpSubmissions?: boolean | Invitation$rsvpSubmissionsArgs<ExtArgs>
    guestbookEntries?: boolean | Invitation$guestbookEntriesArgs<ExtArgs>
    cashlessAccounts?: boolean | Invitation$cashlessAccountsArgs<ExtArgs>
    _count?: boolean | InvitationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>



  export type InvitationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venueLocations?: boolean | Invitation$venueLocationsArgs<ExtArgs>
    eventSchedules?: boolean | Invitation$eventSchedulesArgs<ExtArgs>
    rsvpSubmissions?: boolean | Invitation$rsvpSubmissionsArgs<ExtArgs>
    guestbookEntries?: boolean | Invitation$guestbookEntriesArgs<ExtArgs>
    cashlessAccounts?: boolean | Invitation$cashlessAccountsArgs<ExtArgs>
    _count?: boolean | InvitationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      venueLocations: Prisma.$VenueLocationPayload<ExtArgs>[]
      eventSchedules: Prisma.$EventSchedulePayload<ExtArgs>[]
      rsvpSubmissions: Prisma.$RSVPSubmissionPayload<ExtArgs>[]
      guestbookEntries: Prisma.$GuestbookEntryPayload<ExtArgs>[]
      cashlessAccounts: Prisma.$CashlessAccountPayload<ExtArgs>[]
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
    venueLocations<T extends Invitation$venueLocationsArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$venueLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventSchedules<T extends Invitation$eventSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$eventSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rsvpSubmissions<T extends Invitation$rsvpSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$rsvpSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RSVPSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guestbookEntries<T extends Invitation$guestbookEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$guestbookEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cashlessAccounts<T extends Invitation$cashlessAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$cashlessAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashlessAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    invitationId: number | null
  }

  export type VenueLocationSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    invitationId: number | null
  }

  export type VenueLocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
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
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type VenueLocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    invitationId?: true
  }

  export type VenueLocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    invitationId?: true
  }

  export type VenueLocationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
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
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type VenueLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "latitude" | "longitude" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["venueLocation"]>
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
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type RSVPSubmissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    attendanceStatus: $Enums.AttendanceStatus | null
    paxCount: number | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type RSVPSubmissionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    attendanceStatus: number
    paxCount: number
    idempotencyKey: number
    createdAt: number
    updatedAt: number
    invitationId: number
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
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type RSVPSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    attendanceStatus?: true
    paxCount?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type RSVPSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    attendanceStatus?: true
    paxCount?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
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
    idempotencyKey: string | null
    createdAt: Date
    updatedAt: Date
    invitationId: number
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
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rSVPSubmission"]>



  export type RSVPSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    attendanceStatus?: boolean
    paxCount?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type RSVPSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "attendanceStatus" | "paxCount" | "idempotencyKey" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["rSVPSubmission"]>
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
      idempotencyKey: string | null
      createdAt: Date
      updatedAt: Date
      invitationId: number
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
    readonly idempotencyKey: FieldRef<"RSVPSubmission", 'String'>
    readonly createdAt: FieldRef<"RSVPSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"RSVPSubmission", 'DateTime'>
    readonly invitationId: FieldRef<"RSVPSubmission", 'Int'>
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
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type GuestbookEntryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    message: string | null
    isVisible: boolean | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type GuestbookEntryCountAggregateOutputType = {
    id: number
    name: number
    message: number
    isVisible: number
    idempotencyKey: number
    createdAt: number
    updatedAt: number
    invitationId: number
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
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type GuestbookEntryMaxAggregateInputType = {
    id?: true
    name?: true
    message?: true
    isVisible?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type GuestbookEntryCountAggregateInputType = {
    id?: true
    name?: true
    message?: true
    isVisible?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
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
    idempotencyKey: string | null
    createdAt: Date
    updatedAt: Date
    invitationId: number
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
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
    invitation?: boolean | InvitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestbookEntry"]>



  export type GuestbookEntrySelectScalar = {
    id?: boolean
    name?: boolean
    message?: boolean
    isVisible?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type GuestbookEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "message" | "isVisible" | "idempotencyKey" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["guestbookEntry"]>
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
      idempotencyKey: string | null
      createdAt: Date
      updatedAt: Date
      invitationId: number
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
    readonly idempotencyKey: FieldRef<"GuestbookEntry", 'String'>
    readonly createdAt: FieldRef<"GuestbookEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"GuestbookEntry", 'DateTime'>
    readonly invitationId: FieldRef<"GuestbookEntry", 'Int'>
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
    invitationId: number | null
  }

  export type CashlessAccountSumAggregateOutputType = {
    id: number | null
    invitationId: number | null
  }

  export type CashlessAccountMinAggregateOutputType = {
    id: number | null
    bankName: string | null
    accountNumber: string | null
    accountHolderName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type CashlessAccountMaxAggregateOutputType = {
    id: number | null
    bankName: string | null
    accountNumber: string | null
    accountHolderName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    invitationId: number | null
  }

  export type CashlessAccountCountAggregateOutputType = {
    id: number
    bankName: number
    accountNumber: number
    accountHolderName: number
    createdAt: number
    updatedAt: number
    invitationId: number
    _all: number
  }


  export type CashlessAccountAvgAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type CashlessAccountSumAggregateInputType = {
    id?: true
    invitationId?: true
  }

  export type CashlessAccountMinAggregateInputType = {
    id?: true
    bankName?: true
    accountNumber?: true
    accountHolderName?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type CashlessAccountMaxAggregateInputType = {
    id?: true
    bankName?: true
    accountNumber?: true
    accountHolderName?: true
    createdAt?: true
    updatedAt?: true
    invitationId?: true
  }

  export type CashlessAccountCountAggregateInputType = {
    id?: true
    bankName?: true
    accountNumber?: true
    accountHolderName?: true
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
    createdAt?: boolean
    updatedAt?: boolean
    invitationId?: boolean
  }

  export type CashlessAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bankName" | "accountNumber" | "accountHolderName" | "createdAt" | "updatedAt" | "invitationId", ExtArgs["result"]["cashlessAccount"]>
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
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type RSVPSubmissionScalarFieldEnum = (typeof RSVPSubmissionScalarFieldEnum)[keyof typeof RSVPSubmissionScalarFieldEnum]


  export const GuestbookEntryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    message: 'message',
    isVisible: 'isVisible',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type GuestbookEntryScalarFieldEnum = (typeof GuestbookEntryScalarFieldEnum)[keyof typeof GuestbookEntryScalarFieldEnum]


  export const CashlessAccountScalarFieldEnum: {
    id: 'id',
    bankName: 'bankName',
    accountNumber: 'accountNumber',
    accountHolderName: 'accountHolderName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    invitationId: 'invitationId'
  };

  export type CashlessAccountScalarFieldEnum = (typeof CashlessAccountScalarFieldEnum)[keyof typeof CashlessAccountScalarFieldEnum]


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


  export const VenueLocationOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address'
  };

  export type VenueLocationOrderByRelevanceFieldEnum = (typeof VenueLocationOrderByRelevanceFieldEnum)[keyof typeof VenueLocationOrderByRelevanceFieldEnum]


  export const EventScheduleOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type EventScheduleOrderByRelevanceFieldEnum = (typeof EventScheduleOrderByRelevanceFieldEnum)[keyof typeof EventScheduleOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
    accountHolderName: 'accountHolderName'
  };

  export type CashlessAccountOrderByRelevanceFieldEnum = (typeof CashlessAccountOrderByRelevanceFieldEnum)[keyof typeof CashlessAccountOrderByRelevanceFieldEnum]


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
    venueLocations?: VenueLocationListRelationFilter
    eventSchedules?: EventScheduleListRelationFilter
    rsvpSubmissions?: RSVPSubmissionListRelationFilter
    guestbookEntries?: GuestbookEntryListRelationFilter
    cashlessAccounts?: CashlessAccountListRelationFilter
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    venueLocations?: VenueLocationOrderByRelationAggregateInput
    eventSchedules?: EventScheduleOrderByRelationAggregateInput
    rsvpSubmissions?: RSVPSubmissionOrderByRelationAggregateInput
    guestbookEntries?: GuestbookEntryOrderByRelationAggregateInput
    cashlessAccounts?: CashlessAccountOrderByRelationAggregateInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    venueLocations?: VenueLocationListRelationFilter
    eventSchedules?: EventScheduleListRelationFilter
    rsvpSubmissions?: RSVPSubmissionListRelationFilter
    guestbookEntries?: GuestbookEntryListRelationFilter
    cashlessAccounts?: CashlessAccountListRelationFilter
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
    idempotencyKey?: StringNullableFilter<"RSVPSubmission"> | string | null
    createdAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    invitationId?: IntFilter<"RSVPSubmission"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type RSVPSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    attendanceStatus?: SortOrder
    paxCount?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
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
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
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
    idempotencyKey?: StringNullableWithAggregatesFilter<"RSVPSubmission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RSVPSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RSVPSubmission"> | Date | string
    invitationId?: IntWithAggregatesFilter<"RSVPSubmission"> | number
  }

  export type GuestbookEntryWhereInput = {
    AND?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    OR?: GuestbookEntryWhereInput[]
    NOT?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    id?: IntFilter<"GuestbookEntry"> | number
    name?: StringFilter<"GuestbookEntry"> | string
    message?: StringFilter<"GuestbookEntry"> | string
    isVisible?: BoolFilter<"GuestbookEntry"> | boolean
    idempotencyKey?: StringNullableFilter<"GuestbookEntry"> | string | null
    createdAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    invitationId?: IntFilter<"GuestbookEntry"> | number
    invitation?: XOR<InvitationScalarRelationFilter, InvitationWhereInput>
  }

  export type GuestbookEntryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isVisible?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
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
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
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
    idempotencyKey?: StringNullableWithAggregatesFilter<"GuestbookEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuestbookEntry"> | Date | string
    invitationId?: IntWithAggregatesFilter<"GuestbookEntry"> | number
  }

  export type CashlessAccountWhereInput = {
    AND?: CashlessAccountWhereInput | CashlessAccountWhereInput[]
    OR?: CashlessAccountWhereInput[]
    NOT?: CashlessAccountWhereInput | CashlessAccountWhereInput[]
    id?: IntFilter<"CashlessAccount"> | number
    bankName?: StringFilter<"CashlessAccount"> | string
    accountNumber?: StringFilter<"CashlessAccount"> | string
    accountHolderName?: StringFilter<"CashlessAccount"> | string
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
    createdAt?: DateTimeWithAggregatesFilter<"CashlessAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CashlessAccount"> | Date | string
    invitationId?: IntWithAggregatesFilter<"CashlessAccount"> | number
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
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
  }

  export type InvitationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type VenueLocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
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
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type VenueLocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
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
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutRsvpSubmissionsInput
  }

  export type RSVPSubmissionUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type RSVPSubmissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutRsvpSubmissionsNestedInput
  }

  export type RSVPSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type RSVPSubmissionCreateManyInput = {
    id?: number
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type RSVPSubmissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RSVPSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type GuestbookEntryCreateInput = {
    name: string
    message: string
    isVisible?: boolean
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutGuestbookEntriesInput
  }

  export type GuestbookEntryUncheckedCreateInput = {
    id?: number
    name: string
    message: string
    isVisible?: boolean
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type GuestbookEntryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutGuestbookEntriesNestedInput
  }

  export type GuestbookEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type GuestbookEntryCreateManyInput = {
    id?: number
    name: string
    message: string
    isVisible?: boolean
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type GuestbookEntryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type CashlessAccountCreateInput = {
    bankName: string
    accountNumber: string
    accountHolderName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation: InvitationCreateNestedOneWithoutCashlessAccountsInput
  }

  export type CashlessAccountUncheckedCreateInput = {
    id?: number
    bankName: string
    accountNumber: string
    accountHolderName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type CashlessAccountUpdateInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUpdateOneRequiredWithoutCashlessAccountsNestedInput
  }

  export type CashlessAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitationId?: IntFieldUpdateOperationsInput | number
  }

  export type CashlessAccountCreateManyInput = {
    id?: number
    bankName: string
    accountNumber: string
    accountHolderName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitationId: number
  }

  export type CashlessAccountUpdateManyMutationInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashlessAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
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

  export type VenueLocationListRelationFilter = {
    every?: VenueLocationWhereInput
    some?: VenueLocationWhereInput
    none?: VenueLocationWhereInput
  }

  export type EventScheduleListRelationFilter = {
    every?: EventScheduleWhereInput
    some?: EventScheduleWhereInput
    none?: EventScheduleWhereInput
  }

  export type RSVPSubmissionListRelationFilter = {
    every?: RSVPSubmissionWhereInput
    some?: RSVPSubmissionWhereInput
    none?: RSVPSubmissionWhereInput
  }

  export type GuestbookEntryListRelationFilter = {
    every?: GuestbookEntryWhereInput
    some?: GuestbookEntryWhereInput
    none?: GuestbookEntryWhereInput
  }

  export type CashlessAccountListRelationFilter = {
    every?: CashlessAccountWhereInput
    some?: CashlessAccountWhereInput
    none?: CashlessAccountWhereInput
  }

  export type VenueLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RSVPSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestbookEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CashlessAccountOrderByRelationAggregateInput = {
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

  export type InvitationScalarRelationFilter = {
    is?: InvitationWhereInput
    isNot?: InvitationWhereInput
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type VenueLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    invitationId?: SortOrder
  }

  export type VenueLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type VenueLocationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
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
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type RSVPSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    attendanceStatus?: SortOrder
    paxCount?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
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
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
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
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type GuestbookEntryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    message?: SortOrder
    isVisible?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type CashlessAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    invitationId?: SortOrder
  }

  export type CashlessAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type CashlessAccountMinOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountHolderName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitationId?: SortOrder
  }

  export type CashlessAccountSumOrderByAggregateInput = {
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

  export type VenueLocationCreateNestedManyWithoutInvitationInput = {
    create?: XOR<VenueLocationCreateWithoutInvitationInput, VenueLocationUncheckedCreateWithoutInvitationInput> | VenueLocationCreateWithoutInvitationInput[] | VenueLocationUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: VenueLocationCreateOrConnectWithoutInvitationInput | VenueLocationCreateOrConnectWithoutInvitationInput[]
    createMany?: VenueLocationCreateManyInvitationInputEnvelope
    connect?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
  }

  export type EventScheduleCreateNestedManyWithoutInvitationInput = {
    create?: XOR<EventScheduleCreateWithoutInvitationInput, EventScheduleUncheckedCreateWithoutInvitationInput> | EventScheduleCreateWithoutInvitationInput[] | EventScheduleUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: EventScheduleCreateOrConnectWithoutInvitationInput | EventScheduleCreateOrConnectWithoutInvitationInput[]
    createMany?: EventScheduleCreateManyInvitationInputEnvelope
    connect?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
  }

  export type RSVPSubmissionCreateNestedManyWithoutInvitationInput = {
    create?: XOR<RSVPSubmissionCreateWithoutInvitationInput, RSVPSubmissionUncheckedCreateWithoutInvitationInput> | RSVPSubmissionCreateWithoutInvitationInput[] | RSVPSubmissionUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: RSVPSubmissionCreateOrConnectWithoutInvitationInput | RSVPSubmissionCreateOrConnectWithoutInvitationInput[]
    createMany?: RSVPSubmissionCreateManyInvitationInputEnvelope
    connect?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
  }

  export type GuestbookEntryCreateNestedManyWithoutInvitationInput = {
    create?: XOR<GuestbookEntryCreateWithoutInvitationInput, GuestbookEntryUncheckedCreateWithoutInvitationInput> | GuestbookEntryCreateWithoutInvitationInput[] | GuestbookEntryUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutInvitationInput | GuestbookEntryCreateOrConnectWithoutInvitationInput[]
    createMany?: GuestbookEntryCreateManyInvitationInputEnvelope
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
  }

  export type CashlessAccountCreateNestedManyWithoutInvitationInput = {
    create?: XOR<CashlessAccountCreateWithoutInvitationInput, CashlessAccountUncheckedCreateWithoutInvitationInput> | CashlessAccountCreateWithoutInvitationInput[] | CashlessAccountUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CashlessAccountCreateOrConnectWithoutInvitationInput | CashlessAccountCreateOrConnectWithoutInvitationInput[]
    createMany?: CashlessAccountCreateManyInvitationInputEnvelope
    connect?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
  }

  export type VenueLocationUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<VenueLocationCreateWithoutInvitationInput, VenueLocationUncheckedCreateWithoutInvitationInput> | VenueLocationCreateWithoutInvitationInput[] | VenueLocationUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: VenueLocationCreateOrConnectWithoutInvitationInput | VenueLocationCreateOrConnectWithoutInvitationInput[]
    createMany?: VenueLocationCreateManyInvitationInputEnvelope
    connect?: VenueLocationWhereUniqueInput | VenueLocationWhereUniqueInput[]
  }

  export type EventScheduleUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<EventScheduleCreateWithoutInvitationInput, EventScheduleUncheckedCreateWithoutInvitationInput> | EventScheduleCreateWithoutInvitationInput[] | EventScheduleUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: EventScheduleCreateOrConnectWithoutInvitationInput | EventScheduleCreateOrConnectWithoutInvitationInput[]
    createMany?: EventScheduleCreateManyInvitationInputEnvelope
    connect?: EventScheduleWhereUniqueInput | EventScheduleWhereUniqueInput[]
  }

  export type RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<RSVPSubmissionCreateWithoutInvitationInput, RSVPSubmissionUncheckedCreateWithoutInvitationInput> | RSVPSubmissionCreateWithoutInvitationInput[] | RSVPSubmissionUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: RSVPSubmissionCreateOrConnectWithoutInvitationInput | RSVPSubmissionCreateOrConnectWithoutInvitationInput[]
    createMany?: RSVPSubmissionCreateManyInvitationInputEnvelope
    connect?: RSVPSubmissionWhereUniqueInput | RSVPSubmissionWhereUniqueInput[]
  }

  export type GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<GuestbookEntryCreateWithoutInvitationInput, GuestbookEntryUncheckedCreateWithoutInvitationInput> | GuestbookEntryCreateWithoutInvitationInput[] | GuestbookEntryUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutInvitationInput | GuestbookEntryCreateOrConnectWithoutInvitationInput[]
    createMany?: GuestbookEntryCreateManyInvitationInputEnvelope
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
  }

  export type CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<CashlessAccountCreateWithoutInvitationInput, CashlessAccountUncheckedCreateWithoutInvitationInput> | CashlessAccountCreateWithoutInvitationInput[] | CashlessAccountUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: CashlessAccountCreateOrConnectWithoutInvitationInput | CashlessAccountCreateOrConnectWithoutInvitationInput[]
    createMany?: CashlessAccountCreateManyInvitationInputEnvelope
    connect?: CashlessAccountWhereUniqueInput | CashlessAccountWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
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

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
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

  export type VenueLocationCreateWithoutInvitationInput = {
    name: string
    address: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueLocationUncheckedCreateWithoutInvitationInput = {
    id?: number
    name: string
    address: string
    latitude: number
    longitude: number
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

  export type RSVPSubmissionCreateWithoutInvitationInput = {
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RSVPSubmissionUncheckedCreateWithoutInvitationInput = {
    id?: number
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RSVPSubmissionCreateOrConnectWithoutInvitationInput = {
    where: RSVPSubmissionWhereUniqueInput
    create: XOR<RSVPSubmissionCreateWithoutInvitationInput, RSVPSubmissionUncheckedCreateWithoutInvitationInput>
  }

  export type RSVPSubmissionCreateManyInvitationInputEnvelope = {
    data: RSVPSubmissionCreateManyInvitationInput | RSVPSubmissionCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type GuestbookEntryCreateWithoutInvitationInput = {
    name: string
    message: string
    isVisible?: boolean
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestbookEntryUncheckedCreateWithoutInvitationInput = {
    id?: number
    name: string
    message: string
    isVisible?: boolean
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestbookEntryCreateOrConnectWithoutInvitationInput = {
    where: GuestbookEntryWhereUniqueInput
    create: XOR<GuestbookEntryCreateWithoutInvitationInput, GuestbookEntryUncheckedCreateWithoutInvitationInput>
  }

  export type GuestbookEntryCreateManyInvitationInputEnvelope = {
    data: GuestbookEntryCreateManyInvitationInput | GuestbookEntryCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type CashlessAccountCreateWithoutInvitationInput = {
    bankName: string
    accountNumber: string
    accountHolderName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashlessAccountUncheckedCreateWithoutInvitationInput = {
    id?: number
    bankName: string
    accountNumber: string
    accountHolderName: string
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
    createdAt?: DateTimeFilter<"VenueLocation"> | Date | string
    updatedAt?: DateTimeFilter<"VenueLocation"> | Date | string
    invitationId?: IntFilter<"VenueLocation"> | number
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
    idempotencyKey?: StringNullableFilter<"RSVPSubmission"> | string | null
    createdAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"RSVPSubmission"> | Date | string
    invitationId?: IntFilter<"RSVPSubmission"> | number
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
    idempotencyKey?: StringNullableFilter<"GuestbookEntry"> | string | null
    createdAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    invitationId?: IntFilter<"GuestbookEntry"> | number
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
    createdAt?: DateTimeFilter<"CashlessAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CashlessAccount"> | Date | string
    invitationId?: IntFilter<"CashlessAccount"> | number
  }

  export type InvitationCreateWithoutVenueLocationsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutVenueLocationsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
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
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutVenueLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutEventSchedulesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutEventSchedulesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
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
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutEventSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutRsvpSubmissionsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutRsvpSubmissionsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
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
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutRsvpSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutGuestbookEntriesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountCreateNestedManyWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutGuestbookEntriesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    cashlessAccounts?: CashlessAccountUncheckedCreateNestedManyWithoutInvitationInput
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
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutGuestbookEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    cashlessAccounts?: CashlessAccountUncheckedUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationCreateWithoutCashlessAccountsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    venueLocations?: VenueLocationCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryCreateNestedManyWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutCashlessAccountsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    venueLocations?: VenueLocationUncheckedCreateNestedManyWithoutInvitationInput
    eventSchedules?: EventScheduleUncheckedCreateNestedManyWithoutInvitationInput
    rsvpSubmissions?: RSVPSubmissionUncheckedCreateNestedManyWithoutInvitationInput
    guestbookEntries?: GuestbookEntryUncheckedCreateNestedManyWithoutInvitationInput
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
    venueLocations?: VenueLocationUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUpdateManyWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutCashlessAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venueLocations?: VenueLocationUncheckedUpdateManyWithoutInvitationNestedInput
    eventSchedules?: EventScheduleUncheckedUpdateManyWithoutInvitationNestedInput
    rsvpSubmissions?: RSVPSubmissionUncheckedUpdateManyWithoutInvitationNestedInput
    guestbookEntries?: GuestbookEntryUncheckedUpdateManyWithoutInvitationNestedInput
  }

  export type VenueLocationCreateManyInvitationInput = {
    id?: number
    name: string
    address: string
    latitude: number
    longitude: number
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

  export type RSVPSubmissionCreateManyInvitationInput = {
    id?: number
    name: string
    email: string
    attendanceStatus: $Enums.AttendanceStatus
    paxCount: number
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestbookEntryCreateManyInvitationInput = {
    id?: number
    name: string
    message: string
    isVisible?: boolean
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashlessAccountCreateManyInvitationInput = {
    id?: number
    bankName: string
    accountNumber: string
    accountHolderName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueLocationUpdateWithoutInvitationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueLocationUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueLocationUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
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

  export type RSVPSubmissionUpdateWithoutInvitationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RSVPSubmissionUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RSVPSubmissionUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    paxCount?: IntFieldUpdateOperationsInput | number
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryUpdateWithoutInvitationInput = {
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashlessAccountUpdateWithoutInvitationInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashlessAccountUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashlessAccountUncheckedUpdateManyWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountHolderName?: StringFieldUpdateOperationsInput | string
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