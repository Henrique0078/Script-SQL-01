
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model parametros
 * 
 */
export type parametros = $Result.DefaultSelection<Prisma.$parametrosPayload>
/**
 * Model atividades
 * 
 */
export type atividades = $Result.DefaultSelection<Prisma.$atividadesPayload>
/**
 * Model empresas
 * 
 */
export type empresas = $Result.DefaultSelection<Prisma.$empresasPayload>
/**
 * Model modulos
 * 
 */
export type modulos = $Result.DefaultSelection<Prisma.$modulosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model usuarios_x_empresas
 * 
 */
export type usuarios_x_empresas = $Result.DefaultSelection<Prisma.$usuarios_x_empresasPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Parametros
 * const parametros = await prisma.parametros.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Parametros
   * const parametros = await prisma.parametros.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.parametros`: Exposes CRUD operations for the **parametros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parametros
    * const parametros = await prisma.parametros.findMany()
    * ```
    */
  get parametros(): Prisma.parametrosDelegate<ExtArgs>;

  /**
   * `prisma.atividades`: Exposes CRUD operations for the **atividades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atividades
    * const atividades = await prisma.atividades.findMany()
    * ```
    */
  get atividades(): Prisma.atividadesDelegate<ExtArgs>;

  /**
   * `prisma.empresas`: Exposes CRUD operations for the **empresas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresas.findMany()
    * ```
    */
  get empresas(): Prisma.empresasDelegate<ExtArgs>;

  /**
   * `prisma.modulos`: Exposes CRUD operations for the **modulos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modulos
    * const modulos = await prisma.modulos.findMany()
    * ```
    */
  get modulos(): Prisma.modulosDelegate<ExtArgs>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs>;

  /**
   * `prisma.usuarios_x_empresas`: Exposes CRUD operations for the **usuarios_x_empresas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios_x_empresas
    * const usuarios_x_empresas = await prisma.usuarios_x_empresas.findMany()
    * ```
    */
  get usuarios_x_empresas(): Prisma.usuarios_x_empresasDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    parametros: 'parametros',
    atividades: 'atividades',
    empresas: 'empresas',
    modulos: 'modulos',
    usuarios: 'usuarios',
    usuarios_x_empresas: 'usuarios_x_empresas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db2?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'parametros' | 'atividades' | 'empresas' | 'modulos' | 'usuarios' | 'usuarios_x_empresas'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      parametros: {
        payload: Prisma.$parametrosPayload<ExtArgs>
        fields: Prisma.parametrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.parametrosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parametrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.parametrosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parametrosPayload>
          }
          findFirst: {
            args: Prisma.parametrosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parametrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.parametrosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parametrosPayload>
          }
          findMany: {
            args: Prisma.parametrosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parametrosPayload>[]
          }
          create: {
            args: Prisma.parametrosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parametrosPayload>
          }
          createMany: {
            args: Prisma.parametrosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.parametrosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parametrosPayload>
          }
          update: {
            args: Prisma.parametrosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parametrosPayload>
          }
          deleteMany: {
            args: Prisma.parametrosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.parametrosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.parametrosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$parametrosPayload>
          }
          aggregate: {
            args: Prisma.ParametrosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParametros>
          }
          groupBy: {
            args: Prisma.parametrosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParametrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.parametrosCountArgs<ExtArgs>,
            result: $Utils.Optional<ParametrosCountAggregateOutputType> | number
          }
        }
      }
      atividades: {
        payload: Prisma.$atividadesPayload<ExtArgs>
        fields: Prisma.atividadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.atividadesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$atividadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.atividadesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$atividadesPayload>
          }
          findFirst: {
            args: Prisma.atividadesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$atividadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.atividadesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$atividadesPayload>
          }
          findMany: {
            args: Prisma.atividadesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$atividadesPayload>[]
          }
          create: {
            args: Prisma.atividadesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$atividadesPayload>
          }
          createMany: {
            args: Prisma.atividadesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.atividadesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$atividadesPayload>
          }
          update: {
            args: Prisma.atividadesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$atividadesPayload>
          }
          deleteMany: {
            args: Prisma.atividadesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.atividadesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.atividadesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$atividadesPayload>
          }
          aggregate: {
            args: Prisma.AtividadesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAtividades>
          }
          groupBy: {
            args: Prisma.atividadesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AtividadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.atividadesCountArgs<ExtArgs>,
            result: $Utils.Optional<AtividadesCountAggregateOutputType> | number
          }
        }
      }
      empresas: {
        payload: Prisma.$empresasPayload<ExtArgs>
        fields: Prisma.empresasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.empresasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$empresasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.empresasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          findFirst: {
            args: Prisma.empresasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$empresasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.empresasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          findMany: {
            args: Prisma.empresasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>[]
          }
          create: {
            args: Prisma.empresasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          createMany: {
            args: Prisma.empresasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.empresasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          update: {
            args: Prisma.empresasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          deleteMany: {
            args: Prisma.empresasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.empresasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.empresasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          aggregate: {
            args: Prisma.EmpresasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmpresas>
          }
          groupBy: {
            args: Prisma.empresasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmpresasGroupByOutputType>[]
          }
          count: {
            args: Prisma.empresasCountArgs<ExtArgs>,
            result: $Utils.Optional<EmpresasCountAggregateOutputType> | number
          }
        }
      }
      modulos: {
        payload: Prisma.$modulosPayload<ExtArgs>
        fields: Prisma.modulosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modulosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modulosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          findFirst: {
            args: Prisma.modulosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modulosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          findMany: {
            args: Prisma.modulosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>[]
          }
          create: {
            args: Prisma.modulosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          createMany: {
            args: Prisma.modulosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.modulosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          update: {
            args: Prisma.modulosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          deleteMany: {
            args: Prisma.modulosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.modulosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.modulosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          aggregate: {
            args: Prisma.ModulosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModulos>
          }
          groupBy: {
            args: Prisma.modulosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModulosGroupByOutputType>[]
          }
          count: {
            args: Prisma.modulosCountArgs<ExtArgs>,
            result: $Utils.Optional<ModulosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      usuarios_x_empresas: {
        payload: Prisma.$usuarios_x_empresasPayload<ExtArgs>
        fields: Prisma.usuarios_x_empresasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarios_x_empresasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarios_x_empresasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarios_x_empresasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarios_x_empresasPayload>
          }
          findFirst: {
            args: Prisma.usuarios_x_empresasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarios_x_empresasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarios_x_empresasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarios_x_empresasPayload>
          }
          findMany: {
            args: Prisma.usuarios_x_empresasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarios_x_empresasPayload>[]
          }
          create: {
            args: Prisma.usuarios_x_empresasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarios_x_empresasPayload>
          }
          createMany: {
            args: Prisma.usuarios_x_empresasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usuarios_x_empresasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarios_x_empresasPayload>
          }
          update: {
            args: Prisma.usuarios_x_empresasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarios_x_empresasPayload>
          }
          deleteMany: {
            args: Prisma.usuarios_x_empresasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usuarios_x_empresasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usuarios_x_empresasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarios_x_empresasPayload>
          }
          aggregate: {
            args: Prisma.Usuarios_x_empresasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuarios_x_empresas>
          }
          groupBy: {
            args: Prisma.usuarios_x_empresasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Usuarios_x_empresasGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarios_x_empresasCountArgs<ExtArgs>,
            result: $Utils.Optional<Usuarios_x_empresasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type EmpresasCountOutputType
   */

  export type EmpresasCountOutputType = {
    usuarios_x_empresas: number
  }

  export type EmpresasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_x_empresas?: boolean | EmpresasCountOutputTypeCountUsuarios_x_empresasArgs
  }

  // Custom InputTypes

  /**
   * EmpresasCountOutputType without action
   */
  export type EmpresasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresasCountOutputType
     */
    select?: EmpresasCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EmpresasCountOutputType without action
   */
  export type EmpresasCountOutputTypeCountUsuarios_x_empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarios_x_empresasWhereInput
  }



  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    usuarios_x_empresas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_x_empresas?: boolean | UsuariosCountOutputTypeCountUsuarios_x_empresasArgs
  }

  // Custom InputTypes

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUsuarios_x_empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarios_x_empresasWhereInput
  }



  /**
   * Models
   */

  /**
   * Model parametros
   */

  export type AggregateParametros = {
    _count: ParametrosCountAggregateOutputType | null
    _avg: ParametrosAvgAggregateOutputType | null
    _sum: ParametrosSumAggregateOutputType | null
    _min: ParametrosMinAggregateOutputType | null
    _max: ParametrosMaxAggregateOutputType | null
  }

  export type ParametrosAvgAggregateOutputType = {
    id: number | null
    valorParametro: number | null
  }

  export type ParametrosSumAggregateOutputType = {
    id: number | null
    valorParametro: number | null
  }

  export type ParametrosMinAggregateOutputType = {
    id: number | null
    parametro: string | null
    valorParametro: number | null
    descricao: string | null
  }

  export type ParametrosMaxAggregateOutputType = {
    id: number | null
    parametro: string | null
    valorParametro: number | null
    descricao: string | null
  }

  export type ParametrosCountAggregateOutputType = {
    id: number
    parametro: number
    valorParametro: number
    descricao: number
    _all: number
  }


  export type ParametrosAvgAggregateInputType = {
    id?: true
    valorParametro?: true
  }

  export type ParametrosSumAggregateInputType = {
    id?: true
    valorParametro?: true
  }

  export type ParametrosMinAggregateInputType = {
    id?: true
    parametro?: true
    valorParametro?: true
    descricao?: true
  }

  export type ParametrosMaxAggregateInputType = {
    id?: true
    parametro?: true
    valorParametro?: true
    descricao?: true
  }

  export type ParametrosCountAggregateInputType = {
    id?: true
    parametro?: true
    valorParametro?: true
    descricao?: true
    _all?: true
  }

  export type ParametrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parametros to aggregate.
     */
    where?: parametrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parametros to fetch.
     */
    orderBy?: parametrosOrderByWithRelationInput | parametrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: parametrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parametros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parametros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parametros
    **/
    _count?: true | ParametrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParametrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParametrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParametrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParametrosMaxAggregateInputType
  }

  export type GetParametrosAggregateType<T extends ParametrosAggregateArgs> = {
        [P in keyof T & keyof AggregateParametros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParametros[P]>
      : GetScalarType<T[P], AggregateParametros[P]>
  }




  export type parametrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parametrosWhereInput
    orderBy?: parametrosOrderByWithAggregationInput | parametrosOrderByWithAggregationInput[]
    by: ParametrosScalarFieldEnum[] | ParametrosScalarFieldEnum
    having?: parametrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParametrosCountAggregateInputType | true
    _avg?: ParametrosAvgAggregateInputType
    _sum?: ParametrosSumAggregateInputType
    _min?: ParametrosMinAggregateInputType
    _max?: ParametrosMaxAggregateInputType
  }

  export type ParametrosGroupByOutputType = {
    id: number
    parametro: string
    valorParametro: number
    descricao: string
    _count: ParametrosCountAggregateOutputType | null
    _avg: ParametrosAvgAggregateOutputType | null
    _sum: ParametrosSumAggregateOutputType | null
    _min: ParametrosMinAggregateOutputType | null
    _max: ParametrosMaxAggregateOutputType | null
  }

  type GetParametrosGroupByPayload<T extends parametrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParametrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParametrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParametrosGroupByOutputType[P]>
            : GetScalarType<T[P], ParametrosGroupByOutputType[P]>
        }
      >
    >


  export type parametrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parametro?: boolean
    valorParametro?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["parametros"]>

  export type parametrosSelectScalar = {
    id?: boolean
    parametro?: boolean
    valorParametro?: boolean
    descricao?: boolean
  }


  export type $parametrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "parametros"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parametro: string
      valorParametro: number
      descricao: string
    }, ExtArgs["result"]["parametros"]>
    composites: {}
  }


  type parametrosGetPayload<S extends boolean | null | undefined | parametrosDefaultArgs> = $Result.GetResult<Prisma.$parametrosPayload, S>

  type parametrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<parametrosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ParametrosCountAggregateInputType | true
    }

  export interface parametrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['parametros'], meta: { name: 'parametros' } }
    /**
     * Find zero or one Parametros that matches the filter.
     * @param {parametrosFindUniqueArgs} args - Arguments to find a Parametros
     * @example
     * // Get one Parametros
     * const parametros = await prisma.parametros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends parametrosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, parametrosFindUniqueArgs<ExtArgs>>
    ): Prisma__parametrosClient<$Result.GetResult<Prisma.$parametrosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Parametros that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {parametrosFindUniqueOrThrowArgs} args - Arguments to find a Parametros
     * @example
     * // Get one Parametros
     * const parametros = await prisma.parametros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends parametrosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, parametrosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__parametrosClient<$Result.GetResult<Prisma.$parametrosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Parametros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosFindFirstArgs} args - Arguments to find a Parametros
     * @example
     * // Get one Parametros
     * const parametros = await prisma.parametros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends parametrosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, parametrosFindFirstArgs<ExtArgs>>
    ): Prisma__parametrosClient<$Result.GetResult<Prisma.$parametrosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Parametros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosFindFirstOrThrowArgs} args - Arguments to find a Parametros
     * @example
     * // Get one Parametros
     * const parametros = await prisma.parametros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends parametrosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, parametrosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__parametrosClient<$Result.GetResult<Prisma.$parametrosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Parametros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parametros
     * const parametros = await prisma.parametros.findMany()
     * 
     * // Get first 10 Parametros
     * const parametros = await prisma.parametros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parametrosWithIdOnly = await prisma.parametros.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends parametrosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, parametrosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parametrosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Parametros.
     * @param {parametrosCreateArgs} args - Arguments to create a Parametros.
     * @example
     * // Create one Parametros
     * const Parametros = await prisma.parametros.create({
     *   data: {
     *     // ... data to create a Parametros
     *   }
     * })
     * 
    **/
    create<T extends parametrosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, parametrosCreateArgs<ExtArgs>>
    ): Prisma__parametrosClient<$Result.GetResult<Prisma.$parametrosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Parametros.
     *     @param {parametrosCreateManyArgs} args - Arguments to create many Parametros.
     *     @example
     *     // Create many Parametros
     *     const parametros = await prisma.parametros.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends parametrosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, parametrosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parametros.
     * @param {parametrosDeleteArgs} args - Arguments to delete one Parametros.
     * @example
     * // Delete one Parametros
     * const Parametros = await prisma.parametros.delete({
     *   where: {
     *     // ... filter to delete one Parametros
     *   }
     * })
     * 
    **/
    delete<T extends parametrosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, parametrosDeleteArgs<ExtArgs>>
    ): Prisma__parametrosClient<$Result.GetResult<Prisma.$parametrosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Parametros.
     * @param {parametrosUpdateArgs} args - Arguments to update one Parametros.
     * @example
     * // Update one Parametros
     * const parametros = await prisma.parametros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends parametrosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, parametrosUpdateArgs<ExtArgs>>
    ): Prisma__parametrosClient<$Result.GetResult<Prisma.$parametrosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Parametros.
     * @param {parametrosDeleteManyArgs} args - Arguments to filter Parametros to delete.
     * @example
     * // Delete a few Parametros
     * const { count } = await prisma.parametros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends parametrosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, parametrosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parametros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parametros
     * const parametros = await prisma.parametros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends parametrosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, parametrosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parametros.
     * @param {parametrosUpsertArgs} args - Arguments to update or create a Parametros.
     * @example
     * // Update or create a Parametros
     * const parametros = await prisma.parametros.upsert({
     *   create: {
     *     // ... data to create a Parametros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parametros we want to update
     *   }
     * })
    **/
    upsert<T extends parametrosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, parametrosUpsertArgs<ExtArgs>>
    ): Prisma__parametrosClient<$Result.GetResult<Prisma.$parametrosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Parametros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosCountArgs} args - Arguments to filter Parametros to count.
     * @example
     * // Count the number of Parametros
     * const count = await prisma.parametros.count({
     *   where: {
     *     // ... the filter for the Parametros we want to count
     *   }
     * })
    **/
    count<T extends parametrosCountArgs>(
      args?: Subset<T, parametrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParametrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parametros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParametrosAggregateArgs>(args: Subset<T, ParametrosAggregateArgs>): Prisma.PrismaPromise<GetParametrosAggregateType<T>>

    /**
     * Group by Parametros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosGroupByArgs} args - Group by arguments.
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
      T extends parametrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: parametrosGroupByArgs['orderBy'] }
        : { orderBy?: parametrosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, parametrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParametrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the parametros model
   */
  readonly fields: parametrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for parametros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__parametrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the parametros model
   */ 
  interface parametrosFieldRefs {
    readonly id: FieldRef<"parametros", 'Int'>
    readonly parametro: FieldRef<"parametros", 'String'>
    readonly valorParametro: FieldRef<"parametros", 'Int'>
    readonly descricao: FieldRef<"parametros", 'String'>
  }
    

  // Custom InputTypes

  /**
   * parametros findUnique
   */
  export type parametrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
    /**
     * Filter, which parametros to fetch.
     */
    where: parametrosWhereUniqueInput
  }


  /**
   * parametros findUniqueOrThrow
   */
  export type parametrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
    /**
     * Filter, which parametros to fetch.
     */
    where: parametrosWhereUniqueInput
  }


  /**
   * parametros findFirst
   */
  export type parametrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
    /**
     * Filter, which parametros to fetch.
     */
    where?: parametrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parametros to fetch.
     */
    orderBy?: parametrosOrderByWithRelationInput | parametrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parametros.
     */
    cursor?: parametrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parametros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parametros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parametros.
     */
    distinct?: ParametrosScalarFieldEnum | ParametrosScalarFieldEnum[]
  }


  /**
   * parametros findFirstOrThrow
   */
  export type parametrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
    /**
     * Filter, which parametros to fetch.
     */
    where?: parametrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parametros to fetch.
     */
    orderBy?: parametrosOrderByWithRelationInput | parametrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parametros.
     */
    cursor?: parametrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parametros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parametros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parametros.
     */
    distinct?: ParametrosScalarFieldEnum | ParametrosScalarFieldEnum[]
  }


  /**
   * parametros findMany
   */
  export type parametrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
    /**
     * Filter, which parametros to fetch.
     */
    where?: parametrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parametros to fetch.
     */
    orderBy?: parametrosOrderByWithRelationInput | parametrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parametros.
     */
    cursor?: parametrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parametros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parametros.
     */
    skip?: number
    distinct?: ParametrosScalarFieldEnum | ParametrosScalarFieldEnum[]
  }


  /**
   * parametros create
   */
  export type parametrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
    /**
     * The data needed to create a parametros.
     */
    data: XOR<parametrosCreateInput, parametrosUncheckedCreateInput>
  }


  /**
   * parametros createMany
   */
  export type parametrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many parametros.
     */
    data: parametrosCreateManyInput | parametrosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * parametros update
   */
  export type parametrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
    /**
     * The data needed to update a parametros.
     */
    data: XOR<parametrosUpdateInput, parametrosUncheckedUpdateInput>
    /**
     * Choose, which parametros to update.
     */
    where: parametrosWhereUniqueInput
  }


  /**
   * parametros updateMany
   */
  export type parametrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update parametros.
     */
    data: XOR<parametrosUpdateManyMutationInput, parametrosUncheckedUpdateManyInput>
    /**
     * Filter which parametros to update
     */
    where?: parametrosWhereInput
  }


  /**
   * parametros upsert
   */
  export type parametrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
    /**
     * The filter to search for the parametros to update in case it exists.
     */
    where: parametrosWhereUniqueInput
    /**
     * In case the parametros found by the `where` argument doesn't exist, create a new parametros with this data.
     */
    create: XOR<parametrosCreateInput, parametrosUncheckedCreateInput>
    /**
     * In case the parametros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<parametrosUpdateInput, parametrosUncheckedUpdateInput>
  }


  /**
   * parametros delete
   */
  export type parametrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
    /**
     * Filter which parametros to delete.
     */
    where: parametrosWhereUniqueInput
  }


  /**
   * parametros deleteMany
   */
  export type parametrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parametros to delete
     */
    where?: parametrosWhereInput
  }


  /**
   * parametros without action
   */
  export type parametrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametros
     */
    select?: parametrosSelect<ExtArgs> | null
  }



  /**
   * Model atividades
   */

  export type AggregateAtividades = {
    _count: AtividadesCountAggregateOutputType | null
    _avg: AtividadesAvgAggregateOutputType | null
    _sum: AtividadesSumAggregateOutputType | null
    _min: AtividadesMinAggregateOutputType | null
    _max: AtividadesMaxAggregateOutputType | null
  }

  export type AtividadesAvgAggregateOutputType = {
    id_atividade: number | null
    valor: number | null
  }

  export type AtividadesSumAggregateOutputType = {
    id_atividade: number | null
    valor: number | null
  }

  export type AtividadesMinAggregateOutputType = {
    id_atividade: number | null
    atividade: string | null
    valor: number | null
    descricao: string | null
  }

  export type AtividadesMaxAggregateOutputType = {
    id_atividade: number | null
    atividade: string | null
    valor: number | null
    descricao: string | null
  }

  export type AtividadesCountAggregateOutputType = {
    id_atividade: number
    atividade: number
    valor: number
    descricao: number
    _all: number
  }


  export type AtividadesAvgAggregateInputType = {
    id_atividade?: true
    valor?: true
  }

  export type AtividadesSumAggregateInputType = {
    id_atividade?: true
    valor?: true
  }

  export type AtividadesMinAggregateInputType = {
    id_atividade?: true
    atividade?: true
    valor?: true
    descricao?: true
  }

  export type AtividadesMaxAggregateInputType = {
    id_atividade?: true
    atividade?: true
    valor?: true
    descricao?: true
  }

  export type AtividadesCountAggregateInputType = {
    id_atividade?: true
    atividade?: true
    valor?: true
    descricao?: true
    _all?: true
  }

  export type AtividadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atividades to aggregate.
     */
    where?: atividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividades to fetch.
     */
    orderBy?: atividadesOrderByWithRelationInput | atividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: atividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned atividades
    **/
    _count?: true | AtividadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtividadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtividadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadesMaxAggregateInputType
  }

  export type GetAtividadesAggregateType<T extends AtividadesAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividades[P]>
      : GetScalarType<T[P], AggregateAtividades[P]>
  }




  export type atividadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atividadesWhereInput
    orderBy?: atividadesOrderByWithAggregationInput | atividadesOrderByWithAggregationInput[]
    by: AtividadesScalarFieldEnum[] | AtividadesScalarFieldEnum
    having?: atividadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadesCountAggregateInputType | true
    _avg?: AtividadesAvgAggregateInputType
    _sum?: AtividadesSumAggregateInputType
    _min?: AtividadesMinAggregateInputType
    _max?: AtividadesMaxAggregateInputType
  }

  export type AtividadesGroupByOutputType = {
    id_atividade: number
    atividade: string | null
    valor: number | null
    descricao: string | null
    _count: AtividadesCountAggregateOutputType | null
    _avg: AtividadesAvgAggregateOutputType | null
    _sum: AtividadesSumAggregateOutputType | null
    _min: AtividadesMinAggregateOutputType | null
    _max: AtividadesMaxAggregateOutputType | null
  }

  type GetAtividadesGroupByPayload<T extends atividadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadesGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadesGroupByOutputType[P]>
        }
      >
    >


  export type atividadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_atividade?: boolean
    atividade?: boolean
    valor?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["atividades"]>

  export type atividadesSelectScalar = {
    id_atividade?: boolean
    atividade?: boolean
    valor?: boolean
    descricao?: boolean
  }


  export type $atividadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "atividades"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_atividade: number
      atividade: string | null
      valor: number | null
      descricao: string | null
    }, ExtArgs["result"]["atividades"]>
    composites: {}
  }


  type atividadesGetPayload<S extends boolean | null | undefined | atividadesDefaultArgs> = $Result.GetResult<Prisma.$atividadesPayload, S>

  type atividadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<atividadesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AtividadesCountAggregateInputType | true
    }

  export interface atividadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['atividades'], meta: { name: 'atividades' } }
    /**
     * Find zero or one Atividades that matches the filter.
     * @param {atividadesFindUniqueArgs} args - Arguments to find a Atividades
     * @example
     * // Get one Atividades
     * const atividades = await prisma.atividades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends atividadesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, atividadesFindUniqueArgs<ExtArgs>>
    ): Prisma__atividadesClient<$Result.GetResult<Prisma.$atividadesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Atividades that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {atividadesFindUniqueOrThrowArgs} args - Arguments to find a Atividades
     * @example
     * // Get one Atividades
     * const atividades = await prisma.atividades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends atividadesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, atividadesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__atividadesClient<$Result.GetResult<Prisma.$atividadesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Atividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesFindFirstArgs} args - Arguments to find a Atividades
     * @example
     * // Get one Atividades
     * const atividades = await prisma.atividades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends atividadesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, atividadesFindFirstArgs<ExtArgs>>
    ): Prisma__atividadesClient<$Result.GetResult<Prisma.$atividadesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Atividades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesFindFirstOrThrowArgs} args - Arguments to find a Atividades
     * @example
     * // Get one Atividades
     * const atividades = await prisma.atividades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends atividadesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, atividadesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__atividadesClient<$Result.GetResult<Prisma.$atividadesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Atividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atividades
     * const atividades = await prisma.atividades.findMany()
     * 
     * // Get first 10 Atividades
     * const atividades = await prisma.atividades.findMany({ take: 10 })
     * 
     * // Only select the `id_atividade`
     * const atividadesWithId_atividadeOnly = await prisma.atividades.findMany({ select: { id_atividade: true } })
     * 
    **/
    findMany<T extends atividadesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atividadesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atividadesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Atividades.
     * @param {atividadesCreateArgs} args - Arguments to create a Atividades.
     * @example
     * // Create one Atividades
     * const Atividades = await prisma.atividades.create({
     *   data: {
     *     // ... data to create a Atividades
     *   }
     * })
     * 
    **/
    create<T extends atividadesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, atividadesCreateArgs<ExtArgs>>
    ): Prisma__atividadesClient<$Result.GetResult<Prisma.$atividadesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Atividades.
     *     @param {atividadesCreateManyArgs} args - Arguments to create many Atividades.
     *     @example
     *     // Create many Atividades
     *     const atividades = await prisma.atividades.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends atividadesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atividadesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Atividades.
     * @param {atividadesDeleteArgs} args - Arguments to delete one Atividades.
     * @example
     * // Delete one Atividades
     * const Atividades = await prisma.atividades.delete({
     *   where: {
     *     // ... filter to delete one Atividades
     *   }
     * })
     * 
    **/
    delete<T extends atividadesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, atividadesDeleteArgs<ExtArgs>>
    ): Prisma__atividadesClient<$Result.GetResult<Prisma.$atividadesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Atividades.
     * @param {atividadesUpdateArgs} args - Arguments to update one Atividades.
     * @example
     * // Update one Atividades
     * const atividades = await prisma.atividades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends atividadesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, atividadesUpdateArgs<ExtArgs>>
    ): Prisma__atividadesClient<$Result.GetResult<Prisma.$atividadesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Atividades.
     * @param {atividadesDeleteManyArgs} args - Arguments to filter Atividades to delete.
     * @example
     * // Delete a few Atividades
     * const { count } = await prisma.atividades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends atividadesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, atividadesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atividades
     * const atividades = await prisma.atividades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends atividadesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, atividadesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Atividades.
     * @param {atividadesUpsertArgs} args - Arguments to update or create a Atividades.
     * @example
     * // Update or create a Atividades
     * const atividades = await prisma.atividades.upsert({
     *   create: {
     *     // ... data to create a Atividades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atividades we want to update
     *   }
     * })
    **/
    upsert<T extends atividadesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, atividadesUpsertArgs<ExtArgs>>
    ): Prisma__atividadesClient<$Result.GetResult<Prisma.$atividadesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesCountArgs} args - Arguments to filter Atividades to count.
     * @example
     * // Count the number of Atividades
     * const count = await prisma.atividades.count({
     *   where: {
     *     // ... the filter for the Atividades we want to count
     *   }
     * })
    **/
    count<T extends atividadesCountArgs>(
      args?: Subset<T, atividadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadesAggregateArgs>(args: Subset<T, AtividadesAggregateArgs>): Prisma.PrismaPromise<GetAtividadesAggregateType<T>>

    /**
     * Group by Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesGroupByArgs} args - Group by arguments.
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
      T extends atividadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: atividadesGroupByArgs['orderBy'] }
        : { orderBy?: atividadesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, atividadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the atividades model
   */
  readonly fields: atividadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for atividades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__atividadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the atividades model
   */ 
  interface atividadesFieldRefs {
    readonly id_atividade: FieldRef<"atividades", 'Int'>
    readonly atividade: FieldRef<"atividades", 'String'>
    readonly valor: FieldRef<"atividades", 'Int'>
    readonly descricao: FieldRef<"atividades", 'String'>
  }
    

  // Custom InputTypes

  /**
   * atividades findUnique
   */
  export type atividadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
    /**
     * Filter, which atividades to fetch.
     */
    where: atividadesWhereUniqueInput
  }


  /**
   * atividades findUniqueOrThrow
   */
  export type atividadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
    /**
     * Filter, which atividades to fetch.
     */
    where: atividadesWhereUniqueInput
  }


  /**
   * atividades findFirst
   */
  export type atividadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
    /**
     * Filter, which atividades to fetch.
     */
    where?: atividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividades to fetch.
     */
    orderBy?: atividadesOrderByWithRelationInput | atividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atividades.
     */
    cursor?: atividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividades.
     */
    distinct?: AtividadesScalarFieldEnum | AtividadesScalarFieldEnum[]
  }


  /**
   * atividades findFirstOrThrow
   */
  export type atividadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
    /**
     * Filter, which atividades to fetch.
     */
    where?: atividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividades to fetch.
     */
    orderBy?: atividadesOrderByWithRelationInput | atividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atividades.
     */
    cursor?: atividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividades.
     */
    distinct?: AtividadesScalarFieldEnum | AtividadesScalarFieldEnum[]
  }


  /**
   * atividades findMany
   */
  export type atividadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
    /**
     * Filter, which atividades to fetch.
     */
    where?: atividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividades to fetch.
     */
    orderBy?: atividadesOrderByWithRelationInput | atividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing atividades.
     */
    cursor?: atividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividades.
     */
    skip?: number
    distinct?: AtividadesScalarFieldEnum | AtividadesScalarFieldEnum[]
  }


  /**
   * atividades create
   */
  export type atividadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
    /**
     * The data needed to create a atividades.
     */
    data?: XOR<atividadesCreateInput, atividadesUncheckedCreateInput>
  }


  /**
   * atividades createMany
   */
  export type atividadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many atividades.
     */
    data: atividadesCreateManyInput | atividadesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * atividades update
   */
  export type atividadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
    /**
     * The data needed to update a atividades.
     */
    data: XOR<atividadesUpdateInput, atividadesUncheckedUpdateInput>
    /**
     * Choose, which atividades to update.
     */
    where: atividadesWhereUniqueInput
  }


  /**
   * atividades updateMany
   */
  export type atividadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update atividades.
     */
    data: XOR<atividadesUpdateManyMutationInput, atividadesUncheckedUpdateManyInput>
    /**
     * Filter which atividades to update
     */
    where?: atividadesWhereInput
  }


  /**
   * atividades upsert
   */
  export type atividadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
    /**
     * The filter to search for the atividades to update in case it exists.
     */
    where: atividadesWhereUniqueInput
    /**
     * In case the atividades found by the `where` argument doesn't exist, create a new atividades with this data.
     */
    create: XOR<atividadesCreateInput, atividadesUncheckedCreateInput>
    /**
     * In case the atividades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<atividadesUpdateInput, atividadesUncheckedUpdateInput>
  }


  /**
   * atividades delete
   */
  export type atividadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
    /**
     * Filter which atividades to delete.
     */
    where: atividadesWhereUniqueInput
  }


  /**
   * atividades deleteMany
   */
  export type atividadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atividades to delete
     */
    where?: atividadesWhereInput
  }


  /**
   * atividades without action
   */
  export type atividadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividades
     */
    select?: atividadesSelect<ExtArgs> | null
  }



  /**
   * Model empresas
   */

  export type AggregateEmpresas = {
    _count: EmpresasCountAggregateOutputType | null
    _avg: EmpresasAvgAggregateOutputType | null
    _sum: EmpresasSumAggregateOutputType | null
    _min: EmpresasMinAggregateOutputType | null
    _max: EmpresasMaxAggregateOutputType | null
  }

  export type EmpresasAvgAggregateOutputType = {
    id: number | null
    idAtualizacaoBanco: number | null
  }

  export type EmpresasSumAggregateOutputType = {
    id: number | null
    idAtualizacaoBanco: number | null
  }

  export type EmpresasMinAggregateOutputType = {
    id: number | null
    cnpj: string | null
    xRazaoSocial: string | null
    xFant: string | null
    xLgr: string | null
    nro: string | null
    xCpl: string | null
    xBairro: string | null
    cMun: string | null
    xMun: string | null
    uf: string | null
    cep: string | null
    fone: string | null
    ie: string | null
    crt: string | null
    token: string | null
    banco: string | null
    status: string | null
    email: string | null
    idAtualizacaoBanco: number | null
  }

  export type EmpresasMaxAggregateOutputType = {
    id: number | null
    cnpj: string | null
    xRazaoSocial: string | null
    xFant: string | null
    xLgr: string | null
    nro: string | null
    xCpl: string | null
    xBairro: string | null
    cMun: string | null
    xMun: string | null
    uf: string | null
    cep: string | null
    fone: string | null
    ie: string | null
    crt: string | null
    token: string | null
    banco: string | null
    status: string | null
    email: string | null
    idAtualizacaoBanco: number | null
  }

  export type EmpresasCountAggregateOutputType = {
    id: number
    cnpj: number
    xRazaoSocial: number
    xFant: number
    xLgr: number
    nro: number
    xCpl: number
    xBairro: number
    cMun: number
    xMun: number
    uf: number
    cep: number
    fone: number
    ie: number
    crt: number
    token: number
    banco: number
    status: number
    email: number
    idAtualizacaoBanco: number
    _all: number
  }


  export type EmpresasAvgAggregateInputType = {
    id?: true
    idAtualizacaoBanco?: true
  }

  export type EmpresasSumAggregateInputType = {
    id?: true
    idAtualizacaoBanco?: true
  }

  export type EmpresasMinAggregateInputType = {
    id?: true
    cnpj?: true
    xRazaoSocial?: true
    xFant?: true
    xLgr?: true
    nro?: true
    xCpl?: true
    xBairro?: true
    cMun?: true
    xMun?: true
    uf?: true
    cep?: true
    fone?: true
    ie?: true
    crt?: true
    token?: true
    banco?: true
    status?: true
    email?: true
    idAtualizacaoBanco?: true
  }

  export type EmpresasMaxAggregateInputType = {
    id?: true
    cnpj?: true
    xRazaoSocial?: true
    xFant?: true
    xLgr?: true
    nro?: true
    xCpl?: true
    xBairro?: true
    cMun?: true
    xMun?: true
    uf?: true
    cep?: true
    fone?: true
    ie?: true
    crt?: true
    token?: true
    banco?: true
    status?: true
    email?: true
    idAtualizacaoBanco?: true
  }

  export type EmpresasCountAggregateInputType = {
    id?: true
    cnpj?: true
    xRazaoSocial?: true
    xFant?: true
    xLgr?: true
    nro?: true
    xCpl?: true
    xBairro?: true
    cMun?: true
    xMun?: true
    uf?: true
    cep?: true
    fone?: true
    ie?: true
    crt?: true
    token?: true
    banco?: true
    status?: true
    email?: true
    idAtualizacaoBanco?: true
    _all?: true
  }

  export type EmpresasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empresas to aggregate.
     */
    where?: empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresasOrderByWithRelationInput | empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned empresas
    **/
    _count?: true | EmpresasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresasMaxAggregateInputType
  }

  export type GetEmpresasAggregateType<T extends EmpresasAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresas[P]>
      : GetScalarType<T[P], AggregateEmpresas[P]>
  }




  export type empresasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empresasWhereInput
    orderBy?: empresasOrderByWithAggregationInput | empresasOrderByWithAggregationInput[]
    by: EmpresasScalarFieldEnum[] | EmpresasScalarFieldEnum
    having?: empresasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresasCountAggregateInputType | true
    _avg?: EmpresasAvgAggregateInputType
    _sum?: EmpresasSumAggregateInputType
    _min?: EmpresasMinAggregateInputType
    _max?: EmpresasMaxAggregateInputType
  }

  export type EmpresasGroupByOutputType = {
    id: number
    cnpj: string
    xRazaoSocial: string
    xFant: string
    xLgr: string
    nro: string
    xCpl: string
    xBairro: string
    cMun: string
    xMun: string
    uf: string
    cep: string
    fone: string
    ie: string
    crt: string
    token: string
    banco: string
    status: string
    email: string | null
    idAtualizacaoBanco: number | null
    _count: EmpresasCountAggregateOutputType | null
    _avg: EmpresasAvgAggregateOutputType | null
    _sum: EmpresasSumAggregateOutputType | null
    _min: EmpresasMinAggregateOutputType | null
    _max: EmpresasMaxAggregateOutputType | null
  }

  type GetEmpresasGroupByPayload<T extends empresasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresasGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresasGroupByOutputType[P]>
        }
      >
    >


  export type empresasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    xRazaoSocial?: boolean
    xFant?: boolean
    xLgr?: boolean
    nro?: boolean
    xCpl?: boolean
    xBairro?: boolean
    cMun?: boolean
    xMun?: boolean
    uf?: boolean
    cep?: boolean
    fone?: boolean
    ie?: boolean
    crt?: boolean
    token?: boolean
    banco?: boolean
    status?: boolean
    email?: boolean
    idAtualizacaoBanco?: boolean
    usuarios_x_empresas?: boolean | empresas$usuarios_x_empresasArgs<ExtArgs>
    _count?: boolean | EmpresasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresas"]>

  export type empresasSelectScalar = {
    id?: boolean
    cnpj?: boolean
    xRazaoSocial?: boolean
    xFant?: boolean
    xLgr?: boolean
    nro?: boolean
    xCpl?: boolean
    xBairro?: boolean
    cMun?: boolean
    xMun?: boolean
    uf?: boolean
    cep?: boolean
    fone?: boolean
    ie?: boolean
    crt?: boolean
    token?: boolean
    banco?: boolean
    status?: boolean
    email?: boolean
    idAtualizacaoBanco?: boolean
  }

  export type empresasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_x_empresas?: boolean | empresas$usuarios_x_empresasArgs<ExtArgs>
    _count?: boolean | EmpresasCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $empresasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "empresas"
    objects: {
      usuarios_x_empresas: Prisma.$usuarios_x_empresasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cnpj: string
      xRazaoSocial: string
      xFant: string
      xLgr: string
      nro: string
      xCpl: string
      xBairro: string
      cMun: string
      xMun: string
      uf: string
      cep: string
      fone: string
      ie: string
      crt: string
      token: string
      banco: string
      status: string
      email: string | null
      idAtualizacaoBanco: number | null
    }, ExtArgs["result"]["empresas"]>
    composites: {}
  }


  type empresasGetPayload<S extends boolean | null | undefined | empresasDefaultArgs> = $Result.GetResult<Prisma.$empresasPayload, S>

  type empresasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<empresasFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EmpresasCountAggregateInputType | true
    }

  export interface empresasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['empresas'], meta: { name: 'empresas' } }
    /**
     * Find zero or one Empresas that matches the filter.
     * @param {empresasFindUniqueArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends empresasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, empresasFindUniqueArgs<ExtArgs>>
    ): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Empresas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {empresasFindUniqueOrThrowArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends empresasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, empresasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasFindFirstArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends empresasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, empresasFindFirstArgs<ExtArgs>>
    ): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Empresas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasFindFirstOrThrowArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends empresasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, empresasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresas.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresasWithIdOnly = await prisma.empresas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends empresasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, empresasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Empresas.
     * @param {empresasCreateArgs} args - Arguments to create a Empresas.
     * @example
     * // Create one Empresas
     * const Empresas = await prisma.empresas.create({
     *   data: {
     *     // ... data to create a Empresas
     *   }
     * })
     * 
    **/
    create<T extends empresasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, empresasCreateArgs<ExtArgs>>
    ): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Empresas.
     *     @param {empresasCreateManyArgs} args - Arguments to create many Empresas.
     *     @example
     *     // Create many Empresas
     *     const empresas = await prisma.empresas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends empresasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, empresasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empresas.
     * @param {empresasDeleteArgs} args - Arguments to delete one Empresas.
     * @example
     * // Delete one Empresas
     * const Empresas = await prisma.empresas.delete({
     *   where: {
     *     // ... filter to delete one Empresas
     *   }
     * })
     * 
    **/
    delete<T extends empresasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, empresasDeleteArgs<ExtArgs>>
    ): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Empresas.
     * @param {empresasUpdateArgs} args - Arguments to update one Empresas.
     * @example
     * // Update one Empresas
     * const empresas = await prisma.empresas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends empresasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, empresasUpdateArgs<ExtArgs>>
    ): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Empresas.
     * @param {empresasDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends empresasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, empresasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresas = await prisma.empresas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends empresasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, empresasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresas.
     * @param {empresasUpsertArgs} args - Arguments to update or create a Empresas.
     * @example
     * // Update or create a Empresas
     * const empresas = await prisma.empresas.upsert({
     *   create: {
     *     // ... data to create a Empresas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresas we want to update
     *   }
     * })
    **/
    upsert<T extends empresasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, empresasUpsertArgs<ExtArgs>>
    ): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresas.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends empresasCountArgs>(
      args?: Subset<T, empresasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresasAggregateArgs>(args: Subset<T, EmpresasAggregateArgs>): Prisma.PrismaPromise<GetEmpresasAggregateType<T>>

    /**
     * Group by Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasGroupByArgs} args - Group by arguments.
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
      T extends empresasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: empresasGroupByArgs['orderBy'] }
        : { orderBy?: empresasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, empresasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the empresas model
   */
  readonly fields: empresasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for empresas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__empresasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuarios_x_empresas<T extends empresas$usuarios_x_empresasArgs<ExtArgs> = {}>(args?: Subset<T, empresas$usuarios_x_empresasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the empresas model
   */ 
  interface empresasFieldRefs {
    readonly id: FieldRef<"empresas", 'Int'>
    readonly cnpj: FieldRef<"empresas", 'String'>
    readonly xRazaoSocial: FieldRef<"empresas", 'String'>
    readonly xFant: FieldRef<"empresas", 'String'>
    readonly xLgr: FieldRef<"empresas", 'String'>
    readonly nro: FieldRef<"empresas", 'String'>
    readonly xCpl: FieldRef<"empresas", 'String'>
    readonly xBairro: FieldRef<"empresas", 'String'>
    readonly cMun: FieldRef<"empresas", 'String'>
    readonly xMun: FieldRef<"empresas", 'String'>
    readonly uf: FieldRef<"empresas", 'String'>
    readonly cep: FieldRef<"empresas", 'String'>
    readonly fone: FieldRef<"empresas", 'String'>
    readonly ie: FieldRef<"empresas", 'String'>
    readonly crt: FieldRef<"empresas", 'String'>
    readonly token: FieldRef<"empresas", 'String'>
    readonly banco: FieldRef<"empresas", 'String'>
    readonly status: FieldRef<"empresas", 'String'>
    readonly email: FieldRef<"empresas", 'String'>
    readonly idAtualizacaoBanco: FieldRef<"empresas", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * empresas findUnique
   */
  export type empresasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where: empresasWhereUniqueInput
  }


  /**
   * empresas findUniqueOrThrow
   */
  export type empresasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where: empresasWhereUniqueInput
  }


  /**
   * empresas findFirst
   */
  export type empresasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where?: empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresasOrderByWithRelationInput | empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empresas.
     */
    cursor?: empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empresas.
     */
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }


  /**
   * empresas findFirstOrThrow
   */
  export type empresasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where?: empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresasOrderByWithRelationInput | empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empresas.
     */
    cursor?: empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empresas.
     */
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }


  /**
   * empresas findMany
   */
  export type empresasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where?: empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresasOrderByWithRelationInput | empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing empresas.
     */
    cursor?: empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }


  /**
   * empresas create
   */
  export type empresasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * The data needed to create a empresas.
     */
    data: XOR<empresasCreateInput, empresasUncheckedCreateInput>
  }


  /**
   * empresas createMany
   */
  export type empresasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many empresas.
     */
    data: empresasCreateManyInput | empresasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * empresas update
   */
  export type empresasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * The data needed to update a empresas.
     */
    data: XOR<empresasUpdateInput, empresasUncheckedUpdateInput>
    /**
     * Choose, which empresas to update.
     */
    where: empresasWhereUniqueInput
  }


  /**
   * empresas updateMany
   */
  export type empresasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update empresas.
     */
    data: XOR<empresasUpdateManyMutationInput, empresasUncheckedUpdateManyInput>
    /**
     * Filter which empresas to update
     */
    where?: empresasWhereInput
  }


  /**
   * empresas upsert
   */
  export type empresasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * The filter to search for the empresas to update in case it exists.
     */
    where: empresasWhereUniqueInput
    /**
     * In case the empresas found by the `where` argument doesn't exist, create a new empresas with this data.
     */
    create: XOR<empresasCreateInput, empresasUncheckedCreateInput>
    /**
     * In case the empresas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<empresasUpdateInput, empresasUncheckedUpdateInput>
  }


  /**
   * empresas delete
   */
  export type empresasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter which empresas to delete.
     */
    where: empresasWhereUniqueInput
  }


  /**
   * empresas deleteMany
   */
  export type empresasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empresas to delete
     */
    where?: empresasWhereInput
  }


  /**
   * empresas.usuarios_x_empresas
   */
  export type empresas$usuarios_x_empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    where?: usuarios_x_empresasWhereInput
    orderBy?: usuarios_x_empresasOrderByWithRelationInput | usuarios_x_empresasOrderByWithRelationInput[]
    cursor?: usuarios_x_empresasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuarios_x_empresasScalarFieldEnum | Usuarios_x_empresasScalarFieldEnum[]
  }


  /**
   * empresas without action
   */
  export type empresasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: empresasInclude<ExtArgs> | null
  }



  /**
   * Model modulos
   */

  export type AggregateModulos = {
    _count: ModulosCountAggregateOutputType | null
    _avg: ModulosAvgAggregateOutputType | null
    _sum: ModulosSumAggregateOutputType | null
    _min: ModulosMinAggregateOutputType | null
    _max: ModulosMaxAggregateOutputType | null
  }

  export type ModulosAvgAggregateOutputType = {
    id_modulo: number | null
  }

  export type ModulosSumAggregateOutputType = {
    id_modulo: number | null
  }

  export type ModulosMinAggregateOutputType = {
    id_modulo: number | null
    modulo: string | null
  }

  export type ModulosMaxAggregateOutputType = {
    id_modulo: number | null
    modulo: string | null
  }

  export type ModulosCountAggregateOutputType = {
    id_modulo: number
    modulo: number
    _all: number
  }


  export type ModulosAvgAggregateInputType = {
    id_modulo?: true
  }

  export type ModulosSumAggregateInputType = {
    id_modulo?: true
  }

  export type ModulosMinAggregateInputType = {
    id_modulo?: true
    modulo?: true
  }

  export type ModulosMaxAggregateInputType = {
    id_modulo?: true
    modulo?: true
  }

  export type ModulosCountAggregateInputType = {
    id_modulo?: true
    modulo?: true
    _all?: true
  }

  export type ModulosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modulos to aggregate.
     */
    where?: modulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: modulosOrderByWithRelationInput | modulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modulos
    **/
    _count?: true | ModulosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModulosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModulosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModulosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModulosMaxAggregateInputType
  }

  export type GetModulosAggregateType<T extends ModulosAggregateArgs> = {
        [P in keyof T & keyof AggregateModulos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulos[P]>
      : GetScalarType<T[P], AggregateModulos[P]>
  }




  export type modulosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modulosWhereInput
    orderBy?: modulosOrderByWithAggregationInput | modulosOrderByWithAggregationInput[]
    by: ModulosScalarFieldEnum[] | ModulosScalarFieldEnum
    having?: modulosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModulosCountAggregateInputType | true
    _avg?: ModulosAvgAggregateInputType
    _sum?: ModulosSumAggregateInputType
    _min?: ModulosMinAggregateInputType
    _max?: ModulosMaxAggregateInputType
  }

  export type ModulosGroupByOutputType = {
    id_modulo: number
    modulo: string | null
    _count: ModulosCountAggregateOutputType | null
    _avg: ModulosAvgAggregateOutputType | null
    _sum: ModulosSumAggregateOutputType | null
    _min: ModulosMinAggregateOutputType | null
    _max: ModulosMaxAggregateOutputType | null
  }

  type GetModulosGroupByPayload<T extends modulosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModulosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModulosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModulosGroupByOutputType[P]>
            : GetScalarType<T[P], ModulosGroupByOutputType[P]>
        }
      >
    >


  export type modulosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_modulo?: boolean
    modulo?: boolean
  }, ExtArgs["result"]["modulos"]>

  export type modulosSelectScalar = {
    id_modulo?: boolean
    modulo?: boolean
  }


  export type $modulosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modulos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_modulo: number
      modulo: string | null
    }, ExtArgs["result"]["modulos"]>
    composites: {}
  }


  type modulosGetPayload<S extends boolean | null | undefined | modulosDefaultArgs> = $Result.GetResult<Prisma.$modulosPayload, S>

  type modulosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<modulosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ModulosCountAggregateInputType | true
    }

  export interface modulosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['modulos'], meta: { name: 'modulos' } }
    /**
     * Find zero or one Modulos that matches the filter.
     * @param {modulosFindUniqueArgs} args - Arguments to find a Modulos
     * @example
     * // Get one Modulos
     * const modulos = await prisma.modulos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends modulosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, modulosFindUniqueArgs<ExtArgs>>
    ): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Modulos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {modulosFindUniqueOrThrowArgs} args - Arguments to find a Modulos
     * @example
     * // Get one Modulos
     * const modulos = await prisma.modulos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends modulosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, modulosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosFindFirstArgs} args - Arguments to find a Modulos
     * @example
     * // Get one Modulos
     * const modulos = await prisma.modulos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends modulosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, modulosFindFirstArgs<ExtArgs>>
    ): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Modulos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosFindFirstOrThrowArgs} args - Arguments to find a Modulos
     * @example
     * // Get one Modulos
     * const modulos = await prisma.modulos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends modulosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, modulosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modulos
     * const modulos = await prisma.modulos.findMany()
     * 
     * // Get first 10 Modulos
     * const modulos = await prisma.modulos.findMany({ take: 10 })
     * 
     * // Only select the `id_modulo`
     * const modulosWithId_moduloOnly = await prisma.modulos.findMany({ select: { id_modulo: true } })
     * 
    **/
    findMany<T extends modulosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, modulosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Modulos.
     * @param {modulosCreateArgs} args - Arguments to create a Modulos.
     * @example
     * // Create one Modulos
     * const Modulos = await prisma.modulos.create({
     *   data: {
     *     // ... data to create a Modulos
     *   }
     * })
     * 
    **/
    create<T extends modulosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, modulosCreateArgs<ExtArgs>>
    ): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Modulos.
     *     @param {modulosCreateManyArgs} args - Arguments to create many Modulos.
     *     @example
     *     // Create many Modulos
     *     const modulos = await prisma.modulos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends modulosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, modulosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Modulos.
     * @param {modulosDeleteArgs} args - Arguments to delete one Modulos.
     * @example
     * // Delete one Modulos
     * const Modulos = await prisma.modulos.delete({
     *   where: {
     *     // ... filter to delete one Modulos
     *   }
     * })
     * 
    **/
    delete<T extends modulosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, modulosDeleteArgs<ExtArgs>>
    ): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Modulos.
     * @param {modulosUpdateArgs} args - Arguments to update one Modulos.
     * @example
     * // Update one Modulos
     * const modulos = await prisma.modulos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends modulosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, modulosUpdateArgs<ExtArgs>>
    ): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Modulos.
     * @param {modulosDeleteManyArgs} args - Arguments to filter Modulos to delete.
     * @example
     * // Delete a few Modulos
     * const { count } = await prisma.modulos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends modulosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, modulosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modulos
     * const modulos = await prisma.modulos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends modulosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, modulosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modulos.
     * @param {modulosUpsertArgs} args - Arguments to update or create a Modulos.
     * @example
     * // Update or create a Modulos
     * const modulos = await prisma.modulos.upsert({
     *   create: {
     *     // ... data to create a Modulos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modulos we want to update
     *   }
     * })
    **/
    upsert<T extends modulosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, modulosUpsertArgs<ExtArgs>>
    ): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosCountArgs} args - Arguments to filter Modulos to count.
     * @example
     * // Count the number of Modulos
     * const count = await prisma.modulos.count({
     *   where: {
     *     // ... the filter for the Modulos we want to count
     *   }
     * })
    **/
    count<T extends modulosCountArgs>(
      args?: Subset<T, modulosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModulosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModulosAggregateArgs>(args: Subset<T, ModulosAggregateArgs>): Prisma.PrismaPromise<GetModulosAggregateType<T>>

    /**
     * Group by Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosGroupByArgs} args - Group by arguments.
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
      T extends modulosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modulosGroupByArgs['orderBy'] }
        : { orderBy?: modulosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, modulosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModulosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the modulos model
   */
  readonly fields: modulosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for modulos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modulosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the modulos model
   */ 
  interface modulosFieldRefs {
    readonly id_modulo: FieldRef<"modulos", 'Int'>
    readonly modulo: FieldRef<"modulos", 'String'>
  }
    

  // Custom InputTypes

  /**
   * modulos findUnique
   */
  export type modulosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where: modulosWhereUniqueInput
  }


  /**
   * modulos findUniqueOrThrow
   */
  export type modulosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where: modulosWhereUniqueInput
  }


  /**
   * modulos findFirst
   */
  export type modulosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where?: modulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: modulosOrderByWithRelationInput | modulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modulos.
     */
    cursor?: modulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modulos.
     */
    distinct?: ModulosScalarFieldEnum | ModulosScalarFieldEnum[]
  }


  /**
   * modulos findFirstOrThrow
   */
  export type modulosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where?: modulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: modulosOrderByWithRelationInput | modulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modulos.
     */
    cursor?: modulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modulos.
     */
    distinct?: ModulosScalarFieldEnum | ModulosScalarFieldEnum[]
  }


  /**
   * modulos findMany
   */
  export type modulosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where?: modulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: modulosOrderByWithRelationInput | modulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modulos.
     */
    cursor?: modulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    distinct?: ModulosScalarFieldEnum | ModulosScalarFieldEnum[]
  }


  /**
   * modulos create
   */
  export type modulosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * The data needed to create a modulos.
     */
    data?: XOR<modulosCreateInput, modulosUncheckedCreateInput>
  }


  /**
   * modulos createMany
   */
  export type modulosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modulos.
     */
    data: modulosCreateManyInput | modulosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * modulos update
   */
  export type modulosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * The data needed to update a modulos.
     */
    data: XOR<modulosUpdateInput, modulosUncheckedUpdateInput>
    /**
     * Choose, which modulos to update.
     */
    where: modulosWhereUniqueInput
  }


  /**
   * modulos updateMany
   */
  export type modulosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modulos.
     */
    data: XOR<modulosUpdateManyMutationInput, modulosUncheckedUpdateManyInput>
    /**
     * Filter which modulos to update
     */
    where?: modulosWhereInput
  }


  /**
   * modulos upsert
   */
  export type modulosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * The filter to search for the modulos to update in case it exists.
     */
    where: modulosWhereUniqueInput
    /**
     * In case the modulos found by the `where` argument doesn't exist, create a new modulos with this data.
     */
    create: XOR<modulosCreateInput, modulosUncheckedCreateInput>
    /**
     * In case the modulos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modulosUpdateInput, modulosUncheckedUpdateInput>
  }


  /**
   * modulos delete
   */
  export type modulosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Filter which modulos to delete.
     */
    where: modulosWhereUniqueInput
  }


  /**
   * modulos deleteMany
   */
  export type modulosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modulos to delete
     */
    where?: modulosWhereInput
  }


  /**
   * modulos without action
   */
  export type modulosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
  }



  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    ultimo_nome: string | null
    email: string | null
    senha: string | null
    celular: string | null
    status: string | null
    user_token: string | null
    exclusivo: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    ultimo_nome: string | null
    email: string | null
    senha: string | null
    celular: string | null
    status: string | null
    user_token: string | null
    exclusivo: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    ultimo_nome: number
    email: number
    senha: number
    celular: number
    status: number
    user_token: number
    exclusivo: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    ultimo_nome?: true
    email?: true
    senha?: true
    celular?: true
    status?: true
    user_token?: true
    exclusivo?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    ultimo_nome?: true
    email?: true
    senha?: true
    celular?: true
    status?: true
    user_token?: true
    exclusivo?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    ultimo_nome?: true
    email?: true
    senha?: true
    celular?: true
    status?: true
    user_token?: true
    exclusivo?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nome: string | null
    ultimo_nome: string | null
    email: string | null
    senha: string | null
    celular: string | null
    status: string | null
    user_token: string
    exclusivo: string | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ultimo_nome?: boolean
    email?: boolean
    senha?: boolean
    celular?: boolean
    status?: boolean
    user_token?: boolean
    exclusivo?: boolean
    usuarios_x_empresas?: boolean | usuarios$usuarios_x_empresasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    ultimo_nome?: boolean
    email?: boolean
    senha?: boolean
    celular?: boolean
    status?: boolean
    user_token?: boolean
    exclusivo?: boolean
  }

  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_x_empresas?: boolean | usuarios$usuarios_x_empresasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      usuarios_x_empresas: Prisma.$usuarios_x_empresasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string | null
      ultimo_nome: string | null
      email: string | null
      senha: string | null
      celular: string | null
      status: string | null
      user_token: string
      exclusivo: string | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }


  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usuariosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuarios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usuariosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usuariosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
    **/
    create<T extends usuariosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuarios = await prisma.usuarios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usuariosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
    **/
    delete<T extends usuariosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usuariosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usuariosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usuariosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
    **/
    upsert<T extends usuariosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuarios_x_empresas<T extends usuarios$usuarios_x_empresasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$usuarios_x_empresasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the usuarios model
   */ 
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly ultimo_nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly celular: FieldRef<"usuarios", 'String'>
    readonly status: FieldRef<"usuarios", 'String'>
    readonly user_token: FieldRef<"usuarios", 'String'>
    readonly exclusivo: FieldRef<"usuarios", 'String'>
  }
    

  // Custom InputTypes

  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }


  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }


  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }


  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }


  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
  }


  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }


  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }


  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
  }


  /**
   * usuarios.usuarios_x_empresas
   */
  export type usuarios$usuarios_x_empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    where?: usuarios_x_empresasWhereInput
    orderBy?: usuarios_x_empresasOrderByWithRelationInput | usuarios_x_empresasOrderByWithRelationInput[]
    cursor?: usuarios_x_empresasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuarios_x_empresasScalarFieldEnum | Usuarios_x_empresasScalarFieldEnum[]
  }


  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuariosInclude<ExtArgs> | null
  }



  /**
   * Model usuarios_x_empresas
   */

  export type AggregateUsuarios_x_empresas = {
    _count: Usuarios_x_empresasCountAggregateOutputType | null
    _avg: Usuarios_x_empresasAvgAggregateOutputType | null
    _sum: Usuarios_x_empresasSumAggregateOutputType | null
    _min: Usuarios_x_empresasMinAggregateOutputType | null
    _max: Usuarios_x_empresasMaxAggregateOutputType | null
  }

  export type Usuarios_x_empresasAvgAggregateOutputType = {
    id: number | null
    id_empresa: number | null
    id_usuario: number | null
  }

  export type Usuarios_x_empresasSumAggregateOutputType = {
    id: number | null
    id_empresa: number | null
    id_usuario: number | null
  }

  export type Usuarios_x_empresasMinAggregateOutputType = {
    id: number | null
    id_empresa: number | null
    id_usuario: number | null
  }

  export type Usuarios_x_empresasMaxAggregateOutputType = {
    id: number | null
    id_empresa: number | null
    id_usuario: number | null
  }

  export type Usuarios_x_empresasCountAggregateOutputType = {
    id: number
    id_empresa: number
    id_usuario: number
    _all: number
  }


  export type Usuarios_x_empresasAvgAggregateInputType = {
    id?: true
    id_empresa?: true
    id_usuario?: true
  }

  export type Usuarios_x_empresasSumAggregateInputType = {
    id?: true
    id_empresa?: true
    id_usuario?: true
  }

  export type Usuarios_x_empresasMinAggregateInputType = {
    id?: true
    id_empresa?: true
    id_usuario?: true
  }

  export type Usuarios_x_empresasMaxAggregateInputType = {
    id?: true
    id_empresa?: true
    id_usuario?: true
  }

  export type Usuarios_x_empresasCountAggregateInputType = {
    id?: true
    id_empresa?: true
    id_usuario?: true
    _all?: true
  }

  export type Usuarios_x_empresasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios_x_empresas to aggregate.
     */
    where?: usuarios_x_empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_x_empresas to fetch.
     */
    orderBy?: usuarios_x_empresasOrderByWithRelationInput | usuarios_x_empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarios_x_empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_x_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_x_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios_x_empresas
    **/
    _count?: true | Usuarios_x_empresasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuarios_x_empresasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuarios_x_empresasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuarios_x_empresasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuarios_x_empresasMaxAggregateInputType
  }

  export type GetUsuarios_x_empresasAggregateType<T extends Usuarios_x_empresasAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios_x_empresas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios_x_empresas[P]>
      : GetScalarType<T[P], AggregateUsuarios_x_empresas[P]>
  }




  export type usuarios_x_empresasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarios_x_empresasWhereInput
    orderBy?: usuarios_x_empresasOrderByWithAggregationInput | usuarios_x_empresasOrderByWithAggregationInput[]
    by: Usuarios_x_empresasScalarFieldEnum[] | Usuarios_x_empresasScalarFieldEnum
    having?: usuarios_x_empresasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuarios_x_empresasCountAggregateInputType | true
    _avg?: Usuarios_x_empresasAvgAggregateInputType
    _sum?: Usuarios_x_empresasSumAggregateInputType
    _min?: Usuarios_x_empresasMinAggregateInputType
    _max?: Usuarios_x_empresasMaxAggregateInputType
  }

  export type Usuarios_x_empresasGroupByOutputType = {
    id: number
    id_empresa: number
    id_usuario: number
    _count: Usuarios_x_empresasCountAggregateOutputType | null
    _avg: Usuarios_x_empresasAvgAggregateOutputType | null
    _sum: Usuarios_x_empresasSumAggregateOutputType | null
    _min: Usuarios_x_empresasMinAggregateOutputType | null
    _max: Usuarios_x_empresasMaxAggregateOutputType | null
  }

  type GetUsuarios_x_empresasGroupByPayload<T extends usuarios_x_empresasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuarios_x_empresasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuarios_x_empresasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuarios_x_empresasGroupByOutputType[P]>
            : GetScalarType<T[P], Usuarios_x_empresasGroupByOutputType[P]>
        }
      >
    >


  export type usuarios_x_empresasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_empresa?: boolean
    id_usuario?: boolean
    empresas?: boolean | empresasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios_x_empresas"]>

  export type usuarios_x_empresasSelectScalar = {
    id?: boolean
    id_empresa?: boolean
    id_usuario?: boolean
  }

  export type usuarios_x_empresasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | empresasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }


  export type $usuarios_x_empresasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios_x_empresas"
    objects: {
      empresas: Prisma.$empresasPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_empresa: number
      id_usuario: number
    }, ExtArgs["result"]["usuarios_x_empresas"]>
    composites: {}
  }


  type usuarios_x_empresasGetPayload<S extends boolean | null | undefined | usuarios_x_empresasDefaultArgs> = $Result.GetResult<Prisma.$usuarios_x_empresasPayload, S>

  type usuarios_x_empresasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuarios_x_empresasFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Usuarios_x_empresasCountAggregateInputType | true
    }

  export interface usuarios_x_empresasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios_x_empresas'], meta: { name: 'usuarios_x_empresas' } }
    /**
     * Find zero or one Usuarios_x_empresas that matches the filter.
     * @param {usuarios_x_empresasFindUniqueArgs} args - Arguments to find a Usuarios_x_empresas
     * @example
     * // Get one Usuarios_x_empresas
     * const usuarios_x_empresas = await prisma.usuarios_x_empresas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usuarios_x_empresasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usuarios_x_empresasFindUniqueArgs<ExtArgs>>
    ): Prisma__usuarios_x_empresasClient<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuarios_x_empresas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usuarios_x_empresasFindUniqueOrThrowArgs} args - Arguments to find a Usuarios_x_empresas
     * @example
     * // Get one Usuarios_x_empresas
     * const usuarios_x_empresas = await prisma.usuarios_x_empresas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usuarios_x_empresasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarios_x_empresasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usuarios_x_empresasClient<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuarios_x_empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_x_empresasFindFirstArgs} args - Arguments to find a Usuarios_x_empresas
     * @example
     * // Get one Usuarios_x_empresas
     * const usuarios_x_empresas = await prisma.usuarios_x_empresas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usuarios_x_empresasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarios_x_empresasFindFirstArgs<ExtArgs>>
    ): Prisma__usuarios_x_empresasClient<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuarios_x_empresas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_x_empresasFindFirstOrThrowArgs} args - Arguments to find a Usuarios_x_empresas
     * @example
     * // Get one Usuarios_x_empresas
     * const usuarios_x_empresas = await prisma.usuarios_x_empresas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usuarios_x_empresasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarios_x_empresasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usuarios_x_empresasClient<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios_x_empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_x_empresasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios_x_empresas
     * const usuarios_x_empresas = await prisma.usuarios_x_empresas.findMany()
     * 
     * // Get first 10 Usuarios_x_empresas
     * const usuarios_x_empresas = await prisma.usuarios_x_empresas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarios_x_empresasWithIdOnly = await prisma.usuarios_x_empresas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usuarios_x_empresasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarios_x_empresasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuarios_x_empresas.
     * @param {usuarios_x_empresasCreateArgs} args - Arguments to create a Usuarios_x_empresas.
     * @example
     * // Create one Usuarios_x_empresas
     * const Usuarios_x_empresas = await prisma.usuarios_x_empresas.create({
     *   data: {
     *     // ... data to create a Usuarios_x_empresas
     *   }
     * })
     * 
    **/
    create<T extends usuarios_x_empresasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usuarios_x_empresasCreateArgs<ExtArgs>>
    ): Prisma__usuarios_x_empresasClient<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios_x_empresas.
     *     @param {usuarios_x_empresasCreateManyArgs} args - Arguments to create many Usuarios_x_empresas.
     *     @example
     *     // Create many Usuarios_x_empresas
     *     const usuarios_x_empresas = await prisma.usuarios_x_empresas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usuarios_x_empresasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarios_x_empresasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios_x_empresas.
     * @param {usuarios_x_empresasDeleteArgs} args - Arguments to delete one Usuarios_x_empresas.
     * @example
     * // Delete one Usuarios_x_empresas
     * const Usuarios_x_empresas = await prisma.usuarios_x_empresas.delete({
     *   where: {
     *     // ... filter to delete one Usuarios_x_empresas
     *   }
     * })
     * 
    **/
    delete<T extends usuarios_x_empresasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usuarios_x_empresasDeleteArgs<ExtArgs>>
    ): Prisma__usuarios_x_empresasClient<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuarios_x_empresas.
     * @param {usuarios_x_empresasUpdateArgs} args - Arguments to update one Usuarios_x_empresas.
     * @example
     * // Update one Usuarios_x_empresas
     * const usuarios_x_empresas = await prisma.usuarios_x_empresas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usuarios_x_empresasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usuarios_x_empresasUpdateArgs<ExtArgs>>
    ): Prisma__usuarios_x_empresasClient<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios_x_empresas.
     * @param {usuarios_x_empresasDeleteManyArgs} args - Arguments to filter Usuarios_x_empresas to delete.
     * @example
     * // Delete a few Usuarios_x_empresas
     * const { count } = await prisma.usuarios_x_empresas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usuarios_x_empresasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarios_x_empresasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios_x_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_x_empresasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios_x_empresas
     * const usuarios_x_empresas = await prisma.usuarios_x_empresas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usuarios_x_empresasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usuarios_x_empresasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios_x_empresas.
     * @param {usuarios_x_empresasUpsertArgs} args - Arguments to update or create a Usuarios_x_empresas.
     * @example
     * // Update or create a Usuarios_x_empresas
     * const usuarios_x_empresas = await prisma.usuarios_x_empresas.upsert({
     *   create: {
     *     // ... data to create a Usuarios_x_empresas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios_x_empresas we want to update
     *   }
     * })
    **/
    upsert<T extends usuarios_x_empresasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usuarios_x_empresasUpsertArgs<ExtArgs>>
    ): Prisma__usuarios_x_empresasClient<$Result.GetResult<Prisma.$usuarios_x_empresasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios_x_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_x_empresasCountArgs} args - Arguments to filter Usuarios_x_empresas to count.
     * @example
     * // Count the number of Usuarios_x_empresas
     * const count = await prisma.usuarios_x_empresas.count({
     *   where: {
     *     // ... the filter for the Usuarios_x_empresas we want to count
     *   }
     * })
    **/
    count<T extends usuarios_x_empresasCountArgs>(
      args?: Subset<T, usuarios_x_empresasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuarios_x_empresasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios_x_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuarios_x_empresasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuarios_x_empresasAggregateArgs>(args: Subset<T, Usuarios_x_empresasAggregateArgs>): Prisma.PrismaPromise<GetUsuarios_x_empresasAggregateType<T>>

    /**
     * Group by Usuarios_x_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_x_empresasGroupByArgs} args - Group by arguments.
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
      T extends usuarios_x_empresasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarios_x_empresasGroupByArgs['orderBy'] }
        : { orderBy?: usuarios_x_empresasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarios_x_empresasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarios_x_empresasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios_x_empresas model
   */
  readonly fields: usuarios_x_empresasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios_x_empresas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarios_x_empresasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    empresas<T extends empresasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empresasDefaultArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the usuarios_x_empresas model
   */ 
  interface usuarios_x_empresasFieldRefs {
    readonly id: FieldRef<"usuarios_x_empresas", 'Int'>
    readonly id_empresa: FieldRef<"usuarios_x_empresas", 'Int'>
    readonly id_usuario: FieldRef<"usuarios_x_empresas", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * usuarios_x_empresas findUnique
   */
  export type usuarios_x_empresasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_x_empresas to fetch.
     */
    where: usuarios_x_empresasWhereUniqueInput
  }


  /**
   * usuarios_x_empresas findUniqueOrThrow
   */
  export type usuarios_x_empresasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_x_empresas to fetch.
     */
    where: usuarios_x_empresasWhereUniqueInput
  }


  /**
   * usuarios_x_empresas findFirst
   */
  export type usuarios_x_empresasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_x_empresas to fetch.
     */
    where?: usuarios_x_empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_x_empresas to fetch.
     */
    orderBy?: usuarios_x_empresasOrderByWithRelationInput | usuarios_x_empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios_x_empresas.
     */
    cursor?: usuarios_x_empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_x_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_x_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios_x_empresas.
     */
    distinct?: Usuarios_x_empresasScalarFieldEnum | Usuarios_x_empresasScalarFieldEnum[]
  }


  /**
   * usuarios_x_empresas findFirstOrThrow
   */
  export type usuarios_x_empresasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_x_empresas to fetch.
     */
    where?: usuarios_x_empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_x_empresas to fetch.
     */
    orderBy?: usuarios_x_empresasOrderByWithRelationInput | usuarios_x_empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios_x_empresas.
     */
    cursor?: usuarios_x_empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_x_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_x_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios_x_empresas.
     */
    distinct?: Usuarios_x_empresasScalarFieldEnum | Usuarios_x_empresasScalarFieldEnum[]
  }


  /**
   * usuarios_x_empresas findMany
   */
  export type usuarios_x_empresasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_x_empresas to fetch.
     */
    where?: usuarios_x_empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_x_empresas to fetch.
     */
    orderBy?: usuarios_x_empresasOrderByWithRelationInput | usuarios_x_empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios_x_empresas.
     */
    cursor?: usuarios_x_empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_x_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_x_empresas.
     */
    skip?: number
    distinct?: Usuarios_x_empresasScalarFieldEnum | Usuarios_x_empresasScalarFieldEnum[]
  }


  /**
   * usuarios_x_empresas create
   */
  export type usuarios_x_empresasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios_x_empresas.
     */
    data: XOR<usuarios_x_empresasCreateInput, usuarios_x_empresasUncheckedCreateInput>
  }


  /**
   * usuarios_x_empresas createMany
   */
  export type usuarios_x_empresasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios_x_empresas.
     */
    data: usuarios_x_empresasCreateManyInput | usuarios_x_empresasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * usuarios_x_empresas update
   */
  export type usuarios_x_empresasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios_x_empresas.
     */
    data: XOR<usuarios_x_empresasUpdateInput, usuarios_x_empresasUncheckedUpdateInput>
    /**
     * Choose, which usuarios_x_empresas to update.
     */
    where: usuarios_x_empresasWhereUniqueInput
  }


  /**
   * usuarios_x_empresas updateMany
   */
  export type usuarios_x_empresasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios_x_empresas.
     */
    data: XOR<usuarios_x_empresasUpdateManyMutationInput, usuarios_x_empresasUncheckedUpdateManyInput>
    /**
     * Filter which usuarios_x_empresas to update
     */
    where?: usuarios_x_empresasWhereInput
  }


  /**
   * usuarios_x_empresas upsert
   */
  export type usuarios_x_empresasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios_x_empresas to update in case it exists.
     */
    where: usuarios_x_empresasWhereUniqueInput
    /**
     * In case the usuarios_x_empresas found by the `where` argument doesn't exist, create a new usuarios_x_empresas with this data.
     */
    create: XOR<usuarios_x_empresasCreateInput, usuarios_x_empresasUncheckedCreateInput>
    /**
     * In case the usuarios_x_empresas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarios_x_empresasUpdateInput, usuarios_x_empresasUncheckedUpdateInput>
  }


  /**
   * usuarios_x_empresas delete
   */
  export type usuarios_x_empresasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
    /**
     * Filter which usuarios_x_empresas to delete.
     */
    where: usuarios_x_empresasWhereUniqueInput
  }


  /**
   * usuarios_x_empresas deleteMany
   */
  export type usuarios_x_empresasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios_x_empresas to delete
     */
    where?: usuarios_x_empresasWhereInput
  }


  /**
   * usuarios_x_empresas without action
   */
  export type usuarios_x_empresasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_x_empresas
     */
    select?: usuarios_x_empresasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarios_x_empresasInclude<ExtArgs> | null
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


  export const ParametrosScalarFieldEnum: {
    id: 'id',
    parametro: 'parametro',
    valorParametro: 'valorParametro',
    descricao: 'descricao'
  };

  export type ParametrosScalarFieldEnum = (typeof ParametrosScalarFieldEnum)[keyof typeof ParametrosScalarFieldEnum]


  export const AtividadesScalarFieldEnum: {
    id_atividade: 'id_atividade',
    atividade: 'atividade',
    valor: 'valor',
    descricao: 'descricao'
  };

  export type AtividadesScalarFieldEnum = (typeof AtividadesScalarFieldEnum)[keyof typeof AtividadesScalarFieldEnum]


  export const EmpresasScalarFieldEnum: {
    id: 'id',
    cnpj: 'cnpj',
    xRazaoSocial: 'xRazaoSocial',
    xFant: 'xFant',
    xLgr: 'xLgr',
    nro: 'nro',
    xCpl: 'xCpl',
    xBairro: 'xBairro',
    cMun: 'cMun',
    xMun: 'xMun',
    uf: 'uf',
    cep: 'cep',
    fone: 'fone',
    ie: 'ie',
    crt: 'crt',
    token: 'token',
    banco: 'banco',
    status: 'status',
    email: 'email',
    idAtualizacaoBanco: 'idAtualizacaoBanco'
  };

  export type EmpresasScalarFieldEnum = (typeof EmpresasScalarFieldEnum)[keyof typeof EmpresasScalarFieldEnum]


  export const ModulosScalarFieldEnum: {
    id_modulo: 'id_modulo',
    modulo: 'modulo'
  };

  export type ModulosScalarFieldEnum = (typeof ModulosScalarFieldEnum)[keyof typeof ModulosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    ultimo_nome: 'ultimo_nome',
    email: 'email',
    senha: 'senha',
    celular: 'celular',
    status: 'status',
    user_token: 'user_token',
    exclusivo: 'exclusivo'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const Usuarios_x_empresasScalarFieldEnum: {
    id: 'id',
    id_empresa: 'id_empresa',
    id_usuario: 'id_usuario'
  };

  export type Usuarios_x_empresasScalarFieldEnum = (typeof Usuarios_x_empresasScalarFieldEnum)[keyof typeof Usuarios_x_empresasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type parametrosWhereInput = {
    AND?: parametrosWhereInput | parametrosWhereInput[]
    OR?: parametrosWhereInput[]
    NOT?: parametrosWhereInput | parametrosWhereInput[]
    id?: IntFilter<"parametros"> | number
    parametro?: StringFilter<"parametros"> | string
    valorParametro?: IntFilter<"parametros"> | number
    descricao?: StringFilter<"parametros"> | string
  }

  export type parametrosOrderByWithRelationInput = {
    id?: SortOrder
    parametro?: SortOrder
    valorParametro?: SortOrder
    descricao?: SortOrder
  }

  export type parametrosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    parametro?: string
    AND?: parametrosWhereInput | parametrosWhereInput[]
    OR?: parametrosWhereInput[]
    NOT?: parametrosWhereInput | parametrosWhereInput[]
    valorParametro?: IntFilter<"parametros"> | number
    descricao?: StringFilter<"parametros"> | string
  }, "id" | "id" | "parametro">

  export type parametrosOrderByWithAggregationInput = {
    id?: SortOrder
    parametro?: SortOrder
    valorParametro?: SortOrder
    descricao?: SortOrder
    _count?: parametrosCountOrderByAggregateInput
    _avg?: parametrosAvgOrderByAggregateInput
    _max?: parametrosMaxOrderByAggregateInput
    _min?: parametrosMinOrderByAggregateInput
    _sum?: parametrosSumOrderByAggregateInput
  }

  export type parametrosScalarWhereWithAggregatesInput = {
    AND?: parametrosScalarWhereWithAggregatesInput | parametrosScalarWhereWithAggregatesInput[]
    OR?: parametrosScalarWhereWithAggregatesInput[]
    NOT?: parametrosScalarWhereWithAggregatesInput | parametrosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"parametros"> | number
    parametro?: StringWithAggregatesFilter<"parametros"> | string
    valorParametro?: IntWithAggregatesFilter<"parametros"> | number
    descricao?: StringWithAggregatesFilter<"parametros"> | string
  }

  export type atividadesWhereInput = {
    AND?: atividadesWhereInput | atividadesWhereInput[]
    OR?: atividadesWhereInput[]
    NOT?: atividadesWhereInput | atividadesWhereInput[]
    id_atividade?: IntFilter<"atividades"> | number
    atividade?: StringNullableFilter<"atividades"> | string | null
    valor?: IntNullableFilter<"atividades"> | number | null
    descricao?: StringNullableFilter<"atividades"> | string | null
  }

  export type atividadesOrderByWithRelationInput = {
    id_atividade?: SortOrder
    atividade?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
  }

  export type atividadesWhereUniqueInput = Prisma.AtLeast<{
    id_atividade?: number
    atividade?: string
    AND?: atividadesWhereInput | atividadesWhereInput[]
    OR?: atividadesWhereInput[]
    NOT?: atividadesWhereInput | atividadesWhereInput[]
    valor?: IntNullableFilter<"atividades"> | number | null
    descricao?: StringNullableFilter<"atividades"> | string | null
  }, "id_atividade" | "atividade">

  export type atividadesOrderByWithAggregationInput = {
    id_atividade?: SortOrder
    atividade?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: atividadesCountOrderByAggregateInput
    _avg?: atividadesAvgOrderByAggregateInput
    _max?: atividadesMaxOrderByAggregateInput
    _min?: atividadesMinOrderByAggregateInput
    _sum?: atividadesSumOrderByAggregateInput
  }

  export type atividadesScalarWhereWithAggregatesInput = {
    AND?: atividadesScalarWhereWithAggregatesInput | atividadesScalarWhereWithAggregatesInput[]
    OR?: atividadesScalarWhereWithAggregatesInput[]
    NOT?: atividadesScalarWhereWithAggregatesInput | atividadesScalarWhereWithAggregatesInput[]
    id_atividade?: IntWithAggregatesFilter<"atividades"> | number
    atividade?: StringNullableWithAggregatesFilter<"atividades"> | string | null
    valor?: IntNullableWithAggregatesFilter<"atividades"> | number | null
    descricao?: StringNullableWithAggregatesFilter<"atividades"> | string | null
  }

  export type empresasWhereInput = {
    AND?: empresasWhereInput | empresasWhereInput[]
    OR?: empresasWhereInput[]
    NOT?: empresasWhereInput | empresasWhereInput[]
    id?: IntFilter<"empresas"> | number
    cnpj?: StringFilter<"empresas"> | string
    xRazaoSocial?: StringFilter<"empresas"> | string
    xFant?: StringFilter<"empresas"> | string
    xLgr?: StringFilter<"empresas"> | string
    nro?: StringFilter<"empresas"> | string
    xCpl?: StringFilter<"empresas"> | string
    xBairro?: StringFilter<"empresas"> | string
    cMun?: StringFilter<"empresas"> | string
    xMun?: StringFilter<"empresas"> | string
    uf?: StringFilter<"empresas"> | string
    cep?: StringFilter<"empresas"> | string
    fone?: StringFilter<"empresas"> | string
    ie?: StringFilter<"empresas"> | string
    crt?: StringFilter<"empresas"> | string
    token?: StringFilter<"empresas"> | string
    banco?: StringFilter<"empresas"> | string
    status?: StringFilter<"empresas"> | string
    email?: StringNullableFilter<"empresas"> | string | null
    idAtualizacaoBanco?: IntNullableFilter<"empresas"> | number | null
    usuarios_x_empresas?: Usuarios_x_empresasListRelationFilter
  }

  export type empresasOrderByWithRelationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    xRazaoSocial?: SortOrder
    xFant?: SortOrder
    xLgr?: SortOrder
    nro?: SortOrder
    xCpl?: SortOrder
    xBairro?: SortOrder
    cMun?: SortOrder
    xMun?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    fone?: SortOrder
    ie?: SortOrder
    crt?: SortOrder
    token?: SortOrder
    banco?: SortOrder
    status?: SortOrder
    email?: SortOrderInput | SortOrder
    idAtualizacaoBanco?: SortOrderInput | SortOrder
    usuarios_x_empresas?: usuarios_x_empresasOrderByRelationAggregateInput
  }

  export type empresasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: empresasWhereInput | empresasWhereInput[]
    OR?: empresasWhereInput[]
    NOT?: empresasWhereInput | empresasWhereInput[]
    cnpj?: StringFilter<"empresas"> | string
    xRazaoSocial?: StringFilter<"empresas"> | string
    xFant?: StringFilter<"empresas"> | string
    xLgr?: StringFilter<"empresas"> | string
    nro?: StringFilter<"empresas"> | string
    xCpl?: StringFilter<"empresas"> | string
    xBairro?: StringFilter<"empresas"> | string
    cMun?: StringFilter<"empresas"> | string
    xMun?: StringFilter<"empresas"> | string
    uf?: StringFilter<"empresas"> | string
    cep?: StringFilter<"empresas"> | string
    fone?: StringFilter<"empresas"> | string
    ie?: StringFilter<"empresas"> | string
    crt?: StringFilter<"empresas"> | string
    banco?: StringFilter<"empresas"> | string
    status?: StringFilter<"empresas"> | string
    email?: StringNullableFilter<"empresas"> | string | null
    idAtualizacaoBanco?: IntNullableFilter<"empresas"> | number | null
    usuarios_x_empresas?: Usuarios_x_empresasListRelationFilter
  }, "id" | "id" | "token">

  export type empresasOrderByWithAggregationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    xRazaoSocial?: SortOrder
    xFant?: SortOrder
    xLgr?: SortOrder
    nro?: SortOrder
    xCpl?: SortOrder
    xBairro?: SortOrder
    cMun?: SortOrder
    xMun?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    fone?: SortOrder
    ie?: SortOrder
    crt?: SortOrder
    token?: SortOrder
    banco?: SortOrder
    status?: SortOrder
    email?: SortOrderInput | SortOrder
    idAtualizacaoBanco?: SortOrderInput | SortOrder
    _count?: empresasCountOrderByAggregateInput
    _avg?: empresasAvgOrderByAggregateInput
    _max?: empresasMaxOrderByAggregateInput
    _min?: empresasMinOrderByAggregateInput
    _sum?: empresasSumOrderByAggregateInput
  }

  export type empresasScalarWhereWithAggregatesInput = {
    AND?: empresasScalarWhereWithAggregatesInput | empresasScalarWhereWithAggregatesInput[]
    OR?: empresasScalarWhereWithAggregatesInput[]
    NOT?: empresasScalarWhereWithAggregatesInput | empresasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"empresas"> | number
    cnpj?: StringWithAggregatesFilter<"empresas"> | string
    xRazaoSocial?: StringWithAggregatesFilter<"empresas"> | string
    xFant?: StringWithAggregatesFilter<"empresas"> | string
    xLgr?: StringWithAggregatesFilter<"empresas"> | string
    nro?: StringWithAggregatesFilter<"empresas"> | string
    xCpl?: StringWithAggregatesFilter<"empresas"> | string
    xBairro?: StringWithAggregatesFilter<"empresas"> | string
    cMun?: StringWithAggregatesFilter<"empresas"> | string
    xMun?: StringWithAggregatesFilter<"empresas"> | string
    uf?: StringWithAggregatesFilter<"empresas"> | string
    cep?: StringWithAggregatesFilter<"empresas"> | string
    fone?: StringWithAggregatesFilter<"empresas"> | string
    ie?: StringWithAggregatesFilter<"empresas"> | string
    crt?: StringWithAggregatesFilter<"empresas"> | string
    token?: StringWithAggregatesFilter<"empresas"> | string
    banco?: StringWithAggregatesFilter<"empresas"> | string
    status?: StringWithAggregatesFilter<"empresas"> | string
    email?: StringNullableWithAggregatesFilter<"empresas"> | string | null
    idAtualizacaoBanco?: IntNullableWithAggregatesFilter<"empresas"> | number | null
  }

  export type modulosWhereInput = {
    AND?: modulosWhereInput | modulosWhereInput[]
    OR?: modulosWhereInput[]
    NOT?: modulosWhereInput | modulosWhereInput[]
    id_modulo?: IntFilter<"modulos"> | number
    modulo?: StringNullableFilter<"modulos"> | string | null
  }

  export type modulosOrderByWithRelationInput = {
    id_modulo?: SortOrder
    modulo?: SortOrderInput | SortOrder
  }

  export type modulosWhereUniqueInput = Prisma.AtLeast<{
    id_modulo?: number
    modulo?: string
    AND?: modulosWhereInput | modulosWhereInput[]
    OR?: modulosWhereInput[]
    NOT?: modulosWhereInput | modulosWhereInput[]
  }, "id_modulo" | "modulo">

  export type modulosOrderByWithAggregationInput = {
    id_modulo?: SortOrder
    modulo?: SortOrderInput | SortOrder
    _count?: modulosCountOrderByAggregateInput
    _avg?: modulosAvgOrderByAggregateInput
    _max?: modulosMaxOrderByAggregateInput
    _min?: modulosMinOrderByAggregateInput
    _sum?: modulosSumOrderByAggregateInput
  }

  export type modulosScalarWhereWithAggregatesInput = {
    AND?: modulosScalarWhereWithAggregatesInput | modulosScalarWhereWithAggregatesInput[]
    OR?: modulosScalarWhereWithAggregatesInput[]
    NOT?: modulosScalarWhereWithAggregatesInput | modulosScalarWhereWithAggregatesInput[]
    id_modulo?: IntWithAggregatesFilter<"modulos"> | number
    modulo?: StringNullableWithAggregatesFilter<"modulos"> | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringNullableFilter<"usuarios"> | string | null
    ultimo_nome?: StringNullableFilter<"usuarios"> | string | null
    email?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringNullableFilter<"usuarios"> | string | null
    celular?: StringNullableFilter<"usuarios"> | string | null
    status?: StringNullableFilter<"usuarios"> | string | null
    user_token?: StringFilter<"usuarios"> | string
    exclusivo?: StringNullableFilter<"usuarios"> | string | null
    usuarios_x_empresas?: Usuarios_x_empresasListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    ultimo_nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    user_token?: SortOrder
    exclusivo?: SortOrderInput | SortOrder
    usuarios_x_empresas?: usuarios_x_empresasOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_token?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringNullableFilter<"usuarios"> | string | null
    ultimo_nome?: StringNullableFilter<"usuarios"> | string | null
    email?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringNullableFilter<"usuarios"> | string | null
    celular?: StringNullableFilter<"usuarios"> | string | null
    status?: StringNullableFilter<"usuarios"> | string | null
    exclusivo?: StringNullableFilter<"usuarios"> | string | null
    usuarios_x_empresas?: Usuarios_x_empresasListRelationFilter
  }, "id" | "id" | "user_token">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    ultimo_nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    user_token?: SortOrder
    exclusivo?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    ultimo_nome?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    email?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    senha?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    celular?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    status?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    user_token?: StringWithAggregatesFilter<"usuarios"> | string
    exclusivo?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
  }

  export type usuarios_x_empresasWhereInput = {
    AND?: usuarios_x_empresasWhereInput | usuarios_x_empresasWhereInput[]
    OR?: usuarios_x_empresasWhereInput[]
    NOT?: usuarios_x_empresasWhereInput | usuarios_x_empresasWhereInput[]
    id?: IntFilter<"usuarios_x_empresas"> | number
    id_empresa?: IntFilter<"usuarios_x_empresas"> | number
    id_usuario?: IntFilter<"usuarios_x_empresas"> | number
    empresas?: XOR<EmpresasRelationFilter, empresasWhereInput>
    usuarios?: XOR<UsuariosRelationFilter, usuariosWhereInput>
  }

  export type usuarios_x_empresasOrderByWithRelationInput = {
    id?: SortOrder
    id_empresa?: SortOrder
    id_usuario?: SortOrder
    empresas?: empresasOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type usuarios_x_empresasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuarios_x_empresasWhereInput | usuarios_x_empresasWhereInput[]
    OR?: usuarios_x_empresasWhereInput[]
    NOT?: usuarios_x_empresasWhereInput | usuarios_x_empresasWhereInput[]
    id_empresa?: IntFilter<"usuarios_x_empresas"> | number
    id_usuario?: IntFilter<"usuarios_x_empresas"> | number
    empresas?: XOR<EmpresasRelationFilter, empresasWhereInput>
    usuarios?: XOR<UsuariosRelationFilter, usuariosWhereInput>
  }, "id" | "id">

  export type usuarios_x_empresasOrderByWithAggregationInput = {
    id?: SortOrder
    id_empresa?: SortOrder
    id_usuario?: SortOrder
    _count?: usuarios_x_empresasCountOrderByAggregateInput
    _avg?: usuarios_x_empresasAvgOrderByAggregateInput
    _max?: usuarios_x_empresasMaxOrderByAggregateInput
    _min?: usuarios_x_empresasMinOrderByAggregateInput
    _sum?: usuarios_x_empresasSumOrderByAggregateInput
  }

  export type usuarios_x_empresasScalarWhereWithAggregatesInput = {
    AND?: usuarios_x_empresasScalarWhereWithAggregatesInput | usuarios_x_empresasScalarWhereWithAggregatesInput[]
    OR?: usuarios_x_empresasScalarWhereWithAggregatesInput[]
    NOT?: usuarios_x_empresasScalarWhereWithAggregatesInput | usuarios_x_empresasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios_x_empresas"> | number
    id_empresa?: IntWithAggregatesFilter<"usuarios_x_empresas"> | number
    id_usuario?: IntWithAggregatesFilter<"usuarios_x_empresas"> | number
  }

  export type parametrosCreateInput = {
    parametro: string
    valorParametro: number
    descricao: string
  }

  export type parametrosUncheckedCreateInput = {
    id?: number
    parametro: string
    valorParametro: number
    descricao: string
  }

  export type parametrosUpdateInput = {
    parametro?: StringFieldUpdateOperationsInput | string
    valorParametro?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type parametrosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parametro?: StringFieldUpdateOperationsInput | string
    valorParametro?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type parametrosCreateManyInput = {
    id?: number
    parametro: string
    valorParametro: number
    descricao: string
  }

  export type parametrosUpdateManyMutationInput = {
    parametro?: StringFieldUpdateOperationsInput | string
    valorParametro?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type parametrosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parametro?: StringFieldUpdateOperationsInput | string
    valorParametro?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type atividadesCreateInput = {
    atividade?: string | null
    valor?: number | null
    descricao?: string | null
  }

  export type atividadesUncheckedCreateInput = {
    id_atividade?: number
    atividade?: string | null
    valor?: number | null
    descricao?: string | null
  }

  export type atividadesUpdateInput = {
    atividade?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atividadesUncheckedUpdateInput = {
    id_atividade?: IntFieldUpdateOperationsInput | number
    atividade?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atividadesCreateManyInput = {
    id_atividade?: number
    atividade?: string | null
    valor?: number | null
    descricao?: string | null
  }

  export type atividadesUpdateManyMutationInput = {
    atividade?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atividadesUncheckedUpdateManyInput = {
    id_atividade?: IntFieldUpdateOperationsInput | number
    atividade?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type empresasCreateInput = {
    cnpj: string
    xRazaoSocial: string
    xFant: string
    xLgr: string
    nro: string
    xCpl: string
    xBairro: string
    cMun: string
    xMun: string
    uf: string
    cep: string
    fone: string
    ie: string
    crt: string
    token: string
    banco: string
    status: string
    email?: string | null
    idAtualizacaoBanco?: number | null
    usuarios_x_empresas?: usuarios_x_empresasCreateNestedManyWithoutEmpresasInput
  }

  export type empresasUncheckedCreateInput = {
    id?: number
    cnpj: string
    xRazaoSocial: string
    xFant: string
    xLgr: string
    nro: string
    xCpl: string
    xBairro: string
    cMun: string
    xMun: string
    uf: string
    cep: string
    fone: string
    ie: string
    crt: string
    token: string
    banco: string
    status: string
    email?: string | null
    idAtualizacaoBanco?: number | null
    usuarios_x_empresas?: usuarios_x_empresasUncheckedCreateNestedManyWithoutEmpresasInput
  }

  export type empresasUpdateInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    xRazaoSocial?: StringFieldUpdateOperationsInput | string
    xFant?: StringFieldUpdateOperationsInput | string
    xLgr?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    xCpl?: StringFieldUpdateOperationsInput | string
    xBairro?: StringFieldUpdateOperationsInput | string
    cMun?: StringFieldUpdateOperationsInput | string
    xMun?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    fone?: StringFieldUpdateOperationsInput | string
    ie?: StringFieldUpdateOperationsInput | string
    crt?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    banco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idAtualizacaoBanco?: NullableIntFieldUpdateOperationsInput | number | null
    usuarios_x_empresas?: usuarios_x_empresasUpdateManyWithoutEmpresasNestedInput
  }

  export type empresasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    xRazaoSocial?: StringFieldUpdateOperationsInput | string
    xFant?: StringFieldUpdateOperationsInput | string
    xLgr?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    xCpl?: StringFieldUpdateOperationsInput | string
    xBairro?: StringFieldUpdateOperationsInput | string
    cMun?: StringFieldUpdateOperationsInput | string
    xMun?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    fone?: StringFieldUpdateOperationsInput | string
    ie?: StringFieldUpdateOperationsInput | string
    crt?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    banco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idAtualizacaoBanco?: NullableIntFieldUpdateOperationsInput | number | null
    usuarios_x_empresas?: usuarios_x_empresasUncheckedUpdateManyWithoutEmpresasNestedInput
  }

  export type empresasCreateManyInput = {
    id?: number
    cnpj: string
    xRazaoSocial: string
    xFant: string
    xLgr: string
    nro: string
    xCpl: string
    xBairro: string
    cMun: string
    xMun: string
    uf: string
    cep: string
    fone: string
    ie: string
    crt: string
    token: string
    banco: string
    status: string
    email?: string | null
    idAtualizacaoBanco?: number | null
  }

  export type empresasUpdateManyMutationInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    xRazaoSocial?: StringFieldUpdateOperationsInput | string
    xFant?: StringFieldUpdateOperationsInput | string
    xLgr?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    xCpl?: StringFieldUpdateOperationsInput | string
    xBairro?: StringFieldUpdateOperationsInput | string
    cMun?: StringFieldUpdateOperationsInput | string
    xMun?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    fone?: StringFieldUpdateOperationsInput | string
    ie?: StringFieldUpdateOperationsInput | string
    crt?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    banco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idAtualizacaoBanco?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type empresasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    xRazaoSocial?: StringFieldUpdateOperationsInput | string
    xFant?: StringFieldUpdateOperationsInput | string
    xLgr?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    xCpl?: StringFieldUpdateOperationsInput | string
    xBairro?: StringFieldUpdateOperationsInput | string
    cMun?: StringFieldUpdateOperationsInput | string
    xMun?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    fone?: StringFieldUpdateOperationsInput | string
    ie?: StringFieldUpdateOperationsInput | string
    crt?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    banco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idAtualizacaoBanco?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type modulosCreateInput = {
    modulo?: string | null
  }

  export type modulosUncheckedCreateInput = {
    id_modulo?: number
    modulo?: string | null
  }

  export type modulosUpdateInput = {
    modulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modulosUncheckedUpdateInput = {
    id_modulo?: IntFieldUpdateOperationsInput | number
    modulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modulosCreateManyInput = {
    id_modulo?: number
    modulo?: string | null
  }

  export type modulosUpdateManyMutationInput = {
    modulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modulosUncheckedUpdateManyInput = {
    id_modulo?: IntFieldUpdateOperationsInput | number
    modulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateInput = {
    nome?: string | null
    ultimo_nome?: string | null
    email?: string | null
    senha?: string | null
    celular?: string | null
    status?: string | null
    user_token: string
    exclusivo?: string | null
    usuarios_x_empresas?: usuarios_x_empresasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nome?: string | null
    ultimo_nome?: string | null
    email?: string | null
    senha?: string | null
    celular?: string | null
    status?: string | null
    user_token: string
    exclusivo?: string | null
    usuarios_x_empresas?: usuarios_x_empresasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: StringFieldUpdateOperationsInput | string
    exclusivo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios_x_empresas?: usuarios_x_empresasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: StringFieldUpdateOperationsInput | string
    exclusivo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios_x_empresas?: usuarios_x_empresasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nome?: string | null
    ultimo_nome?: string | null
    email?: string | null
    senha?: string | null
    celular?: string | null
    status?: string | null
    user_token: string
    exclusivo?: string | null
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: StringFieldUpdateOperationsInput | string
    exclusivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: StringFieldUpdateOperationsInput | string
    exclusivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarios_x_empresasCreateInput = {
    empresas: empresasCreateNestedOneWithoutUsuarios_x_empresasInput
    usuarios: usuariosCreateNestedOneWithoutUsuarios_x_empresasInput
  }

  export type usuarios_x_empresasUncheckedCreateInput = {
    id?: number
    id_empresa: number
    id_usuario: number
  }

  export type usuarios_x_empresasUpdateInput = {
    empresas?: empresasUpdateOneRequiredWithoutUsuarios_x_empresasNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutUsuarios_x_empresasNestedInput
  }

  export type usuarios_x_empresasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_empresa?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type usuarios_x_empresasCreateManyInput = {
    id?: number
    id_empresa: number
    id_usuario: number
  }

  export type usuarios_x_empresasUpdateManyMutationInput = {

  }

  export type usuarios_x_empresasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_empresa?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type parametrosCountOrderByAggregateInput = {
    id?: SortOrder
    parametro?: SortOrder
    valorParametro?: SortOrder
    descricao?: SortOrder
  }

  export type parametrosAvgOrderByAggregateInput = {
    id?: SortOrder
    valorParametro?: SortOrder
  }

  export type parametrosMaxOrderByAggregateInput = {
    id?: SortOrder
    parametro?: SortOrder
    valorParametro?: SortOrder
    descricao?: SortOrder
  }

  export type parametrosMinOrderByAggregateInput = {
    id?: SortOrder
    parametro?: SortOrder
    valorParametro?: SortOrder
    descricao?: SortOrder
  }

  export type parametrosSumOrderByAggregateInput = {
    id?: SortOrder
    valorParametro?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type atividadesCountOrderByAggregateInput = {
    id_atividade?: SortOrder
    atividade?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
  }

  export type atividadesAvgOrderByAggregateInput = {
    id_atividade?: SortOrder
    valor?: SortOrder
  }

  export type atividadesMaxOrderByAggregateInput = {
    id_atividade?: SortOrder
    atividade?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
  }

  export type atividadesMinOrderByAggregateInput = {
    id_atividade?: SortOrder
    atividade?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
  }

  export type atividadesSumOrderByAggregateInput = {
    id_atividade?: SortOrder
    valor?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Usuarios_x_empresasListRelationFilter = {
    every?: usuarios_x_empresasWhereInput
    some?: usuarios_x_empresasWhereInput
    none?: usuarios_x_empresasWhereInput
  }

  export type usuarios_x_empresasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type empresasCountOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    xRazaoSocial?: SortOrder
    xFant?: SortOrder
    xLgr?: SortOrder
    nro?: SortOrder
    xCpl?: SortOrder
    xBairro?: SortOrder
    cMun?: SortOrder
    xMun?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    fone?: SortOrder
    ie?: SortOrder
    crt?: SortOrder
    token?: SortOrder
    banco?: SortOrder
    status?: SortOrder
    email?: SortOrder
    idAtualizacaoBanco?: SortOrder
  }

  export type empresasAvgOrderByAggregateInput = {
    id?: SortOrder
    idAtualizacaoBanco?: SortOrder
  }

  export type empresasMaxOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    xRazaoSocial?: SortOrder
    xFant?: SortOrder
    xLgr?: SortOrder
    nro?: SortOrder
    xCpl?: SortOrder
    xBairro?: SortOrder
    cMun?: SortOrder
    xMun?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    fone?: SortOrder
    ie?: SortOrder
    crt?: SortOrder
    token?: SortOrder
    banco?: SortOrder
    status?: SortOrder
    email?: SortOrder
    idAtualizacaoBanco?: SortOrder
  }

  export type empresasMinOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    xRazaoSocial?: SortOrder
    xFant?: SortOrder
    xLgr?: SortOrder
    nro?: SortOrder
    xCpl?: SortOrder
    xBairro?: SortOrder
    cMun?: SortOrder
    xMun?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    fone?: SortOrder
    ie?: SortOrder
    crt?: SortOrder
    token?: SortOrder
    banco?: SortOrder
    status?: SortOrder
    email?: SortOrder
    idAtualizacaoBanco?: SortOrder
  }

  export type empresasSumOrderByAggregateInput = {
    id?: SortOrder
    idAtualizacaoBanco?: SortOrder
  }

  export type modulosCountOrderByAggregateInput = {
    id_modulo?: SortOrder
    modulo?: SortOrder
  }

  export type modulosAvgOrderByAggregateInput = {
    id_modulo?: SortOrder
  }

  export type modulosMaxOrderByAggregateInput = {
    id_modulo?: SortOrder
    modulo?: SortOrder
  }

  export type modulosMinOrderByAggregateInput = {
    id_modulo?: SortOrder
    modulo?: SortOrder
  }

  export type modulosSumOrderByAggregateInput = {
    id_modulo?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ultimo_nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    celular?: SortOrder
    status?: SortOrder
    user_token?: SortOrder
    exclusivo?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ultimo_nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    celular?: SortOrder
    status?: SortOrder
    user_token?: SortOrder
    exclusivo?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ultimo_nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    celular?: SortOrder
    status?: SortOrder
    user_token?: SortOrder
    exclusivo?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpresasRelationFilter = {
    is?: empresasWhereInput
    isNot?: empresasWhereInput
  }

  export type UsuariosRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type usuarios_x_empresasCountOrderByAggregateInput = {
    id?: SortOrder
    id_empresa?: SortOrder
    id_usuario?: SortOrder
  }

  export type usuarios_x_empresasAvgOrderByAggregateInput = {
    id?: SortOrder
    id_empresa?: SortOrder
    id_usuario?: SortOrder
  }

  export type usuarios_x_empresasMaxOrderByAggregateInput = {
    id?: SortOrder
    id_empresa?: SortOrder
    id_usuario?: SortOrder
  }

  export type usuarios_x_empresasMinOrderByAggregateInput = {
    id?: SortOrder
    id_empresa?: SortOrder
    id_usuario?: SortOrder
  }

  export type usuarios_x_empresasSumOrderByAggregateInput = {
    id?: SortOrder
    id_empresa?: SortOrder
    id_usuario?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuarios_x_empresasCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<usuarios_x_empresasCreateWithoutEmpresasInput, usuarios_x_empresasUncheckedCreateWithoutEmpresasInput> | usuarios_x_empresasCreateWithoutEmpresasInput[] | usuarios_x_empresasUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: usuarios_x_empresasCreateOrConnectWithoutEmpresasInput | usuarios_x_empresasCreateOrConnectWithoutEmpresasInput[]
    createMany?: usuarios_x_empresasCreateManyEmpresasInputEnvelope
    connect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
  }

  export type usuarios_x_empresasUncheckedCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<usuarios_x_empresasCreateWithoutEmpresasInput, usuarios_x_empresasUncheckedCreateWithoutEmpresasInput> | usuarios_x_empresasCreateWithoutEmpresasInput[] | usuarios_x_empresasUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: usuarios_x_empresasCreateOrConnectWithoutEmpresasInput | usuarios_x_empresasCreateOrConnectWithoutEmpresasInput[]
    createMany?: usuarios_x_empresasCreateManyEmpresasInputEnvelope
    connect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
  }

  export type usuarios_x_empresasUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<usuarios_x_empresasCreateWithoutEmpresasInput, usuarios_x_empresasUncheckedCreateWithoutEmpresasInput> | usuarios_x_empresasCreateWithoutEmpresasInput[] | usuarios_x_empresasUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: usuarios_x_empresasCreateOrConnectWithoutEmpresasInput | usuarios_x_empresasCreateOrConnectWithoutEmpresasInput[]
    upsert?: usuarios_x_empresasUpsertWithWhereUniqueWithoutEmpresasInput | usuarios_x_empresasUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: usuarios_x_empresasCreateManyEmpresasInputEnvelope
    set?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    disconnect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    delete?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    connect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    update?: usuarios_x_empresasUpdateWithWhereUniqueWithoutEmpresasInput | usuarios_x_empresasUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: usuarios_x_empresasUpdateManyWithWhereWithoutEmpresasInput | usuarios_x_empresasUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: usuarios_x_empresasScalarWhereInput | usuarios_x_empresasScalarWhereInput[]
  }

  export type usuarios_x_empresasUncheckedUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<usuarios_x_empresasCreateWithoutEmpresasInput, usuarios_x_empresasUncheckedCreateWithoutEmpresasInput> | usuarios_x_empresasCreateWithoutEmpresasInput[] | usuarios_x_empresasUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: usuarios_x_empresasCreateOrConnectWithoutEmpresasInput | usuarios_x_empresasCreateOrConnectWithoutEmpresasInput[]
    upsert?: usuarios_x_empresasUpsertWithWhereUniqueWithoutEmpresasInput | usuarios_x_empresasUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: usuarios_x_empresasCreateManyEmpresasInputEnvelope
    set?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    disconnect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    delete?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    connect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    update?: usuarios_x_empresasUpdateWithWhereUniqueWithoutEmpresasInput | usuarios_x_empresasUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: usuarios_x_empresasUpdateManyWithWhereWithoutEmpresasInput | usuarios_x_empresasUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: usuarios_x_empresasScalarWhereInput | usuarios_x_empresasScalarWhereInput[]
  }

  export type usuarios_x_empresasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<usuarios_x_empresasCreateWithoutUsuariosInput, usuarios_x_empresasUncheckedCreateWithoutUsuariosInput> | usuarios_x_empresasCreateWithoutUsuariosInput[] | usuarios_x_empresasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: usuarios_x_empresasCreateOrConnectWithoutUsuariosInput | usuarios_x_empresasCreateOrConnectWithoutUsuariosInput[]
    createMany?: usuarios_x_empresasCreateManyUsuariosInputEnvelope
    connect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
  }

  export type usuarios_x_empresasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<usuarios_x_empresasCreateWithoutUsuariosInput, usuarios_x_empresasUncheckedCreateWithoutUsuariosInput> | usuarios_x_empresasCreateWithoutUsuariosInput[] | usuarios_x_empresasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: usuarios_x_empresasCreateOrConnectWithoutUsuariosInput | usuarios_x_empresasCreateOrConnectWithoutUsuariosInput[]
    createMany?: usuarios_x_empresasCreateManyUsuariosInputEnvelope
    connect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
  }

  export type usuarios_x_empresasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<usuarios_x_empresasCreateWithoutUsuariosInput, usuarios_x_empresasUncheckedCreateWithoutUsuariosInput> | usuarios_x_empresasCreateWithoutUsuariosInput[] | usuarios_x_empresasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: usuarios_x_empresasCreateOrConnectWithoutUsuariosInput | usuarios_x_empresasCreateOrConnectWithoutUsuariosInput[]
    upsert?: usuarios_x_empresasUpsertWithWhereUniqueWithoutUsuariosInput | usuarios_x_empresasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: usuarios_x_empresasCreateManyUsuariosInputEnvelope
    set?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    disconnect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    delete?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    connect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    update?: usuarios_x_empresasUpdateWithWhereUniqueWithoutUsuariosInput | usuarios_x_empresasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: usuarios_x_empresasUpdateManyWithWhereWithoutUsuariosInput | usuarios_x_empresasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: usuarios_x_empresasScalarWhereInput | usuarios_x_empresasScalarWhereInput[]
  }

  export type usuarios_x_empresasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<usuarios_x_empresasCreateWithoutUsuariosInput, usuarios_x_empresasUncheckedCreateWithoutUsuariosInput> | usuarios_x_empresasCreateWithoutUsuariosInput[] | usuarios_x_empresasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: usuarios_x_empresasCreateOrConnectWithoutUsuariosInput | usuarios_x_empresasCreateOrConnectWithoutUsuariosInput[]
    upsert?: usuarios_x_empresasUpsertWithWhereUniqueWithoutUsuariosInput | usuarios_x_empresasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: usuarios_x_empresasCreateManyUsuariosInputEnvelope
    set?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    disconnect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    delete?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    connect?: usuarios_x_empresasWhereUniqueInput | usuarios_x_empresasWhereUniqueInput[]
    update?: usuarios_x_empresasUpdateWithWhereUniqueWithoutUsuariosInput | usuarios_x_empresasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: usuarios_x_empresasUpdateManyWithWhereWithoutUsuariosInput | usuarios_x_empresasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: usuarios_x_empresasScalarWhereInput | usuarios_x_empresasScalarWhereInput[]
  }

  export type empresasCreateNestedOneWithoutUsuarios_x_empresasInput = {
    create?: XOR<empresasCreateWithoutUsuarios_x_empresasInput, empresasUncheckedCreateWithoutUsuarios_x_empresasInput>
    connectOrCreate?: empresasCreateOrConnectWithoutUsuarios_x_empresasInput
    connect?: empresasWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutUsuarios_x_empresasInput = {
    create?: XOR<usuariosCreateWithoutUsuarios_x_empresasInput, usuariosUncheckedCreateWithoutUsuarios_x_empresasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutUsuarios_x_empresasInput
    connect?: usuariosWhereUniqueInput
  }

  export type empresasUpdateOneRequiredWithoutUsuarios_x_empresasNestedInput = {
    create?: XOR<empresasCreateWithoutUsuarios_x_empresasInput, empresasUncheckedCreateWithoutUsuarios_x_empresasInput>
    connectOrCreate?: empresasCreateOrConnectWithoutUsuarios_x_empresasInput
    upsert?: empresasUpsertWithoutUsuarios_x_empresasInput
    connect?: empresasWhereUniqueInput
    update?: XOR<XOR<empresasUpdateToOneWithWhereWithoutUsuarios_x_empresasInput, empresasUpdateWithoutUsuarios_x_empresasInput>, empresasUncheckedUpdateWithoutUsuarios_x_empresasInput>
  }

  export type usuariosUpdateOneRequiredWithoutUsuarios_x_empresasNestedInput = {
    create?: XOR<usuariosCreateWithoutUsuarios_x_empresasInput, usuariosUncheckedCreateWithoutUsuarios_x_empresasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutUsuarios_x_empresasInput
    upsert?: usuariosUpsertWithoutUsuarios_x_empresasInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutUsuarios_x_empresasInput, usuariosUpdateWithoutUsuarios_x_empresasInput>, usuariosUncheckedUpdateWithoutUsuarios_x_empresasInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usuarios_x_empresasCreateWithoutEmpresasInput = {
    usuarios: usuariosCreateNestedOneWithoutUsuarios_x_empresasInput
  }

  export type usuarios_x_empresasUncheckedCreateWithoutEmpresasInput = {
    id?: number
    id_usuario: number
  }

  export type usuarios_x_empresasCreateOrConnectWithoutEmpresasInput = {
    where: usuarios_x_empresasWhereUniqueInput
    create: XOR<usuarios_x_empresasCreateWithoutEmpresasInput, usuarios_x_empresasUncheckedCreateWithoutEmpresasInput>
  }

  export type usuarios_x_empresasCreateManyEmpresasInputEnvelope = {
    data: usuarios_x_empresasCreateManyEmpresasInput | usuarios_x_empresasCreateManyEmpresasInput[]
    skipDuplicates?: boolean
  }

  export type usuarios_x_empresasUpsertWithWhereUniqueWithoutEmpresasInput = {
    where: usuarios_x_empresasWhereUniqueInput
    update: XOR<usuarios_x_empresasUpdateWithoutEmpresasInput, usuarios_x_empresasUncheckedUpdateWithoutEmpresasInput>
    create: XOR<usuarios_x_empresasCreateWithoutEmpresasInput, usuarios_x_empresasUncheckedCreateWithoutEmpresasInput>
  }

  export type usuarios_x_empresasUpdateWithWhereUniqueWithoutEmpresasInput = {
    where: usuarios_x_empresasWhereUniqueInput
    data: XOR<usuarios_x_empresasUpdateWithoutEmpresasInput, usuarios_x_empresasUncheckedUpdateWithoutEmpresasInput>
  }

  export type usuarios_x_empresasUpdateManyWithWhereWithoutEmpresasInput = {
    where: usuarios_x_empresasScalarWhereInput
    data: XOR<usuarios_x_empresasUpdateManyMutationInput, usuarios_x_empresasUncheckedUpdateManyWithoutEmpresasInput>
  }

  export type usuarios_x_empresasScalarWhereInput = {
    AND?: usuarios_x_empresasScalarWhereInput | usuarios_x_empresasScalarWhereInput[]
    OR?: usuarios_x_empresasScalarWhereInput[]
    NOT?: usuarios_x_empresasScalarWhereInput | usuarios_x_empresasScalarWhereInput[]
    id?: IntFilter<"usuarios_x_empresas"> | number
    id_empresa?: IntFilter<"usuarios_x_empresas"> | number
    id_usuario?: IntFilter<"usuarios_x_empresas"> | number
  }

  export type usuarios_x_empresasCreateWithoutUsuariosInput = {
    empresas: empresasCreateNestedOneWithoutUsuarios_x_empresasInput
  }

  export type usuarios_x_empresasUncheckedCreateWithoutUsuariosInput = {
    id?: number
    id_empresa: number
  }

  export type usuarios_x_empresasCreateOrConnectWithoutUsuariosInput = {
    where: usuarios_x_empresasWhereUniqueInput
    create: XOR<usuarios_x_empresasCreateWithoutUsuariosInput, usuarios_x_empresasUncheckedCreateWithoutUsuariosInput>
  }

  export type usuarios_x_empresasCreateManyUsuariosInputEnvelope = {
    data: usuarios_x_empresasCreateManyUsuariosInput | usuarios_x_empresasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type usuarios_x_empresasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: usuarios_x_empresasWhereUniqueInput
    update: XOR<usuarios_x_empresasUpdateWithoutUsuariosInput, usuarios_x_empresasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<usuarios_x_empresasCreateWithoutUsuariosInput, usuarios_x_empresasUncheckedCreateWithoutUsuariosInput>
  }

  export type usuarios_x_empresasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: usuarios_x_empresasWhereUniqueInput
    data: XOR<usuarios_x_empresasUpdateWithoutUsuariosInput, usuarios_x_empresasUncheckedUpdateWithoutUsuariosInput>
  }

  export type usuarios_x_empresasUpdateManyWithWhereWithoutUsuariosInput = {
    where: usuarios_x_empresasScalarWhereInput
    data: XOR<usuarios_x_empresasUpdateManyMutationInput, usuarios_x_empresasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type empresasCreateWithoutUsuarios_x_empresasInput = {
    cnpj: string
    xRazaoSocial: string
    xFant: string
    xLgr: string
    nro: string
    xCpl: string
    xBairro: string
    cMun: string
    xMun: string
    uf: string
    cep: string
    fone: string
    ie: string
    crt: string
    token: string
    banco: string
    status: string
    email?: string | null
    idAtualizacaoBanco?: number | null
  }

  export type empresasUncheckedCreateWithoutUsuarios_x_empresasInput = {
    id?: number
    cnpj: string
    xRazaoSocial: string
    xFant: string
    xLgr: string
    nro: string
    xCpl: string
    xBairro: string
    cMun: string
    xMun: string
    uf: string
    cep: string
    fone: string
    ie: string
    crt: string
    token: string
    banco: string
    status: string
    email?: string | null
    idAtualizacaoBanco?: number | null
  }

  export type empresasCreateOrConnectWithoutUsuarios_x_empresasInput = {
    where: empresasWhereUniqueInput
    create: XOR<empresasCreateWithoutUsuarios_x_empresasInput, empresasUncheckedCreateWithoutUsuarios_x_empresasInput>
  }

  export type usuariosCreateWithoutUsuarios_x_empresasInput = {
    nome?: string | null
    ultimo_nome?: string | null
    email?: string | null
    senha?: string | null
    celular?: string | null
    status?: string | null
    user_token: string
    exclusivo?: string | null
  }

  export type usuariosUncheckedCreateWithoutUsuarios_x_empresasInput = {
    id?: number
    nome?: string | null
    ultimo_nome?: string | null
    email?: string | null
    senha?: string | null
    celular?: string | null
    status?: string | null
    user_token: string
    exclusivo?: string | null
  }

  export type usuariosCreateOrConnectWithoutUsuarios_x_empresasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutUsuarios_x_empresasInput, usuariosUncheckedCreateWithoutUsuarios_x_empresasInput>
  }

  export type empresasUpsertWithoutUsuarios_x_empresasInput = {
    update: XOR<empresasUpdateWithoutUsuarios_x_empresasInput, empresasUncheckedUpdateWithoutUsuarios_x_empresasInput>
    create: XOR<empresasCreateWithoutUsuarios_x_empresasInput, empresasUncheckedCreateWithoutUsuarios_x_empresasInput>
    where?: empresasWhereInput
  }

  export type empresasUpdateToOneWithWhereWithoutUsuarios_x_empresasInput = {
    where?: empresasWhereInput
    data: XOR<empresasUpdateWithoutUsuarios_x_empresasInput, empresasUncheckedUpdateWithoutUsuarios_x_empresasInput>
  }

  export type empresasUpdateWithoutUsuarios_x_empresasInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    xRazaoSocial?: StringFieldUpdateOperationsInput | string
    xFant?: StringFieldUpdateOperationsInput | string
    xLgr?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    xCpl?: StringFieldUpdateOperationsInput | string
    xBairro?: StringFieldUpdateOperationsInput | string
    cMun?: StringFieldUpdateOperationsInput | string
    xMun?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    fone?: StringFieldUpdateOperationsInput | string
    ie?: StringFieldUpdateOperationsInput | string
    crt?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    banco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idAtualizacaoBanco?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type empresasUncheckedUpdateWithoutUsuarios_x_empresasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    xRazaoSocial?: StringFieldUpdateOperationsInput | string
    xFant?: StringFieldUpdateOperationsInput | string
    xLgr?: StringFieldUpdateOperationsInput | string
    nro?: StringFieldUpdateOperationsInput | string
    xCpl?: StringFieldUpdateOperationsInput | string
    xBairro?: StringFieldUpdateOperationsInput | string
    cMun?: StringFieldUpdateOperationsInput | string
    xMun?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    fone?: StringFieldUpdateOperationsInput | string
    ie?: StringFieldUpdateOperationsInput | string
    crt?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    banco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idAtualizacaoBanco?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuariosUpsertWithoutUsuarios_x_empresasInput = {
    update: XOR<usuariosUpdateWithoutUsuarios_x_empresasInput, usuariosUncheckedUpdateWithoutUsuarios_x_empresasInput>
    create: XOR<usuariosCreateWithoutUsuarios_x_empresasInput, usuariosUncheckedCreateWithoutUsuarios_x_empresasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutUsuarios_x_empresasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutUsuarios_x_empresasInput, usuariosUncheckedUpdateWithoutUsuarios_x_empresasInput>
  }

  export type usuariosUpdateWithoutUsuarios_x_empresasInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: StringFieldUpdateOperationsInput | string
    exclusivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosUncheckedUpdateWithoutUsuarios_x_empresasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: StringFieldUpdateOperationsInput | string
    exclusivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarios_x_empresasCreateManyEmpresasInput = {
    id?: number
    id_usuario: number
  }

  export type usuarios_x_empresasUpdateWithoutEmpresasInput = {
    usuarios?: usuariosUpdateOneRequiredWithoutUsuarios_x_empresasNestedInput
  }

  export type usuarios_x_empresasUncheckedUpdateWithoutEmpresasInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type usuarios_x_empresasUncheckedUpdateManyWithoutEmpresasInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type usuarios_x_empresasCreateManyUsuariosInput = {
    id?: number
    id_empresa: number
  }

  export type usuarios_x_empresasUpdateWithoutUsuariosInput = {
    empresas?: empresasUpdateOneRequiredWithoutUsuarios_x_empresasNestedInput
  }

  export type usuarios_x_empresasUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_empresa?: IntFieldUpdateOperationsInput | number
  }

  export type usuarios_x_empresasUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_empresa?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EmpresasCountOutputTypeDefaultArgs instead
     */
    export type EmpresasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpresasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuariosCountOutputTypeDefaultArgs instead
     */
    export type UsuariosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuariosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use parametrosDefaultArgs instead
     */
    export type parametrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = parametrosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use atividadesDefaultArgs instead
     */
    export type atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = atividadesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use empresasDefaultArgs instead
     */
    export type empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = empresasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use modulosDefaultArgs instead
     */
    export type modulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = modulosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuariosDefaultArgs instead
     */
    export type usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuariosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuarios_x_empresasDefaultArgs instead
     */
    export type usuarios_x_empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuarios_x_empresasDefaultArgs<ExtArgs>

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