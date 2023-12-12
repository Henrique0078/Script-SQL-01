
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
 * Model modulo_empresa
 * 
 */
export type modulo_empresa = $Result.DefaultSelection<Prisma.$modulo_empresaPayload>
/**
 * Model modulos
 * 
 */
export type modulos = $Result.DefaultSelection<Prisma.$modulosPayload>
/**
 * Model usuario_empresa
 * 
 */
export type usuario_empresa = $Result.DefaultSelection<Prisma.$usuario_empresaPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

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
   * `prisma.modulo_empresa`: Exposes CRUD operations for the **modulo_empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modulo_empresas
    * const modulo_empresas = await prisma.modulo_empresa.findMany()
    * ```
    */
  get modulo_empresa(): Prisma.modulo_empresaDelegate<ExtArgs>;

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
   * `prisma.usuario_empresa`: Exposes CRUD operations for the **usuario_empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_empresas
    * const usuario_empresas = await prisma.usuario_empresa.findMany()
    * ```
    */
  get usuario_empresa(): Prisma.usuario_empresaDelegate<ExtArgs>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs>;
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
    modulo_empresa: 'modulo_empresa',
    modulos: 'modulos',
    usuario_empresa: 'usuario_empresa',
    usuarios: 'usuarios'
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
      modelProps: 'parametros' | 'atividades' | 'empresas' | 'modulo_empresa' | 'modulos' | 'usuario_empresa' | 'usuarios'
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
      modulo_empresa: {
        payload: Prisma.$modulo_empresaPayload<ExtArgs>
        fields: Prisma.modulo_empresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modulo_empresaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulo_empresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modulo_empresaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulo_empresaPayload>
          }
          findFirst: {
            args: Prisma.modulo_empresaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulo_empresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modulo_empresaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulo_empresaPayload>
          }
          findMany: {
            args: Prisma.modulo_empresaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulo_empresaPayload>[]
          }
          create: {
            args: Prisma.modulo_empresaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulo_empresaPayload>
          }
          createMany: {
            args: Prisma.modulo_empresaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.modulo_empresaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulo_empresaPayload>
          }
          update: {
            args: Prisma.modulo_empresaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulo_empresaPayload>
          }
          deleteMany: {
            args: Prisma.modulo_empresaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.modulo_empresaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.modulo_empresaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulo_empresaPayload>
          }
          aggregate: {
            args: Prisma.Modulo_empresaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModulo_empresa>
          }
          groupBy: {
            args: Prisma.modulo_empresaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Modulo_empresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.modulo_empresaCountArgs<ExtArgs>,
            result: $Utils.Optional<Modulo_empresaCountAggregateOutputType> | number
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
      usuario_empresa: {
        payload: Prisma.$usuario_empresaPayload<ExtArgs>
        fields: Prisma.usuario_empresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuario_empresaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuario_empresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuario_empresaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuario_empresaPayload>
          }
          findFirst: {
            args: Prisma.usuario_empresaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuario_empresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuario_empresaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuario_empresaPayload>
          }
          findMany: {
            args: Prisma.usuario_empresaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuario_empresaPayload>[]
          }
          create: {
            args: Prisma.usuario_empresaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuario_empresaPayload>
          }
          createMany: {
            args: Prisma.usuario_empresaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usuario_empresaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuario_empresaPayload>
          }
          update: {
            args: Prisma.usuario_empresaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuario_empresaPayload>
          }
          deleteMany: {
            args: Prisma.usuario_empresaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usuario_empresaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usuario_empresaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuario_empresaPayload>
          }
          aggregate: {
            args: Prisma.Usuario_empresaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario_empresa>
          }
          groupBy: {
            args: Prisma.usuario_empresaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Usuario_empresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuario_empresaCountArgs<ExtArgs>,
            result: $Utils.Optional<Usuario_empresaCountAggregateOutputType> | number
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
    modulo_empresa: number
    usuario_empresa: number
  }

  export type EmpresasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo_empresa?: boolean | EmpresasCountOutputTypeCountModulo_empresaArgs
    usuario_empresa?: boolean | EmpresasCountOutputTypeCountUsuario_empresaArgs
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
  export type EmpresasCountOutputTypeCountModulo_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modulo_empresaWhereInput
  }


  /**
   * EmpresasCountOutputType without action
   */
  export type EmpresasCountOutputTypeCountUsuario_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_empresaWhereInput
  }



  /**
   * Count Type ModulosCountOutputType
   */

  export type ModulosCountOutputType = {
    modulo_empresa: number
  }

  export type ModulosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo_empresa?: boolean | ModulosCountOutputTypeCountModulo_empresaArgs
  }

  // Custom InputTypes

  /**
   * ModulosCountOutputType without action
   */
  export type ModulosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulosCountOutputType
     */
    select?: ModulosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModulosCountOutputType without action
   */
  export type ModulosCountOutputTypeCountModulo_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modulo_empresaWhereInput
  }



  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    usuario_empresa: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_empresa?: boolean | UsuariosCountOutputTypeCountUsuario_empresaArgs
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
  export type UsuariosCountOutputTypeCountUsuario_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_empresaWhereInput
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
    id_parametro: number | null
    valor_parametro: number | null
  }

  export type ParametrosSumAggregateOutputType = {
    id_parametro: number | null
    valor_parametro: number | null
  }

  export type ParametrosMinAggregateOutputType = {
    id_parametro: number | null
    nm_parametro: string | null
    valor_parametro: number | null
    descricao_parametro: string | null
  }

  export type ParametrosMaxAggregateOutputType = {
    id_parametro: number | null
    nm_parametro: string | null
    valor_parametro: number | null
    descricao_parametro: string | null
  }

  export type ParametrosCountAggregateOutputType = {
    id_parametro: number
    nm_parametro: number
    valor_parametro: number
    descricao_parametro: number
    _all: number
  }


  export type ParametrosAvgAggregateInputType = {
    id_parametro?: true
    valor_parametro?: true
  }

  export type ParametrosSumAggregateInputType = {
    id_parametro?: true
    valor_parametro?: true
  }

  export type ParametrosMinAggregateInputType = {
    id_parametro?: true
    nm_parametro?: true
    valor_parametro?: true
    descricao_parametro?: true
  }

  export type ParametrosMaxAggregateInputType = {
    id_parametro?: true
    nm_parametro?: true
    valor_parametro?: true
    descricao_parametro?: true
  }

  export type ParametrosCountAggregateInputType = {
    id_parametro?: true
    nm_parametro?: true
    valor_parametro?: true
    descricao_parametro?: true
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
    id_parametro: number
    nm_parametro: string
    valor_parametro: number
    descricao_parametro: string
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
    id_parametro?: boolean
    nm_parametro?: boolean
    valor_parametro?: boolean
    descricao_parametro?: boolean
  }, ExtArgs["result"]["parametros"]>

  export type parametrosSelectScalar = {
    id_parametro?: boolean
    nm_parametro?: boolean
    valor_parametro?: boolean
    descricao_parametro?: boolean
  }


  export type $parametrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "parametros"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_parametro: number
      nm_parametro: string
      valor_parametro: number
      descricao_parametro: string
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
     * // Only select the `id_parametro`
     * const parametrosWithId_parametroOnly = await prisma.parametros.findMany({ select: { id_parametro: true } })
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
    readonly id_parametro: FieldRef<"parametros", 'Int'>
    readonly nm_parametro: FieldRef<"parametros", 'String'>
    readonly valor_parametro: FieldRef<"parametros", 'Int'>
    readonly descricao_parametro: FieldRef<"parametros", 'String'>
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
    valor_atividade: number | null
  }

  export type AtividadesSumAggregateOutputType = {
    id_atividade: number | null
    valor_atividade: number | null
  }

  export type AtividadesMinAggregateOutputType = {
    id_atividade: number | null
    nm_atividade: string | null
    valor_atividade: number | null
    descricao_atividade: string | null
  }

  export type AtividadesMaxAggregateOutputType = {
    id_atividade: number | null
    nm_atividade: string | null
    valor_atividade: number | null
    descricao_atividade: string | null
  }

  export type AtividadesCountAggregateOutputType = {
    id_atividade: number
    nm_atividade: number
    valor_atividade: number
    descricao_atividade: number
    _all: number
  }


  export type AtividadesAvgAggregateInputType = {
    id_atividade?: true
    valor_atividade?: true
  }

  export type AtividadesSumAggregateInputType = {
    id_atividade?: true
    valor_atividade?: true
  }

  export type AtividadesMinAggregateInputType = {
    id_atividade?: true
    nm_atividade?: true
    valor_atividade?: true
    descricao_atividade?: true
  }

  export type AtividadesMaxAggregateInputType = {
    id_atividade?: true
    nm_atividade?: true
    valor_atividade?: true
    descricao_atividade?: true
  }

  export type AtividadesCountAggregateInputType = {
    id_atividade?: true
    nm_atividade?: true
    valor_atividade?: true
    descricao_atividade?: true
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
    nm_atividade: string | null
    valor_atividade: number | null
    descricao_atividade: string | null
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
    nm_atividade?: boolean
    valor_atividade?: boolean
    descricao_atividade?: boolean
  }, ExtArgs["result"]["atividades"]>

  export type atividadesSelectScalar = {
    id_atividade?: boolean
    nm_atividade?: boolean
    valor_atividade?: boolean
    descricao_atividade?: boolean
  }


  export type $atividadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "atividades"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_atividade: number
      nm_atividade: string | null
      valor_atividade: number | null
      descricao_atividade: string | null
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
    readonly nm_atividade: FieldRef<"atividades", 'String'>
    readonly valor_atividade: FieldRef<"atividades", 'Int'>
    readonly descricao_atividade: FieldRef<"atividades", 'String'>
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
    id_empresa: number | null
    versao_banco_empresa: number | null
  }

  export type EmpresasSumAggregateOutputType = {
    id_empresa: number | null
    versao_banco_empresa: number | null
  }

  export type EmpresasMinAggregateOutputType = {
    id_empresa: number | null
    cnpj_empresa: string | null
    razao_social_empresa: string | null
    nome_fantasia_empresa: string | null
    logradouro_empresa: string | null
    numero_empresa: string | null
    complemento_empresa: string | null
    bairro_empresa: string | null
    codigo_municipal_empresa: string | null
    municipio_empresa: string | null
    uf_empresa: string | null
    cep_empresa: string | null
    telefone_empresa: string | null
    inscricao_estadual_empresa: string | null
    certificado_empresa: string | null
    banco_empresa: string | null
    status_empresa: string | null
    email_empresa: string | null
    versao_banco_empresa: number | null
  }

  export type EmpresasMaxAggregateOutputType = {
    id_empresa: number | null
    cnpj_empresa: string | null
    razao_social_empresa: string | null
    nome_fantasia_empresa: string | null
    logradouro_empresa: string | null
    numero_empresa: string | null
    complemento_empresa: string | null
    bairro_empresa: string | null
    codigo_municipal_empresa: string | null
    municipio_empresa: string | null
    uf_empresa: string | null
    cep_empresa: string | null
    telefone_empresa: string | null
    inscricao_estadual_empresa: string | null
    certificado_empresa: string | null
    banco_empresa: string | null
    status_empresa: string | null
    email_empresa: string | null
    versao_banco_empresa: number | null
  }

  export type EmpresasCountAggregateOutputType = {
    id_empresa: number
    cnpj_empresa: number
    razao_social_empresa: number
    nome_fantasia_empresa: number
    logradouro_empresa: number
    numero_empresa: number
    complemento_empresa: number
    bairro_empresa: number
    codigo_municipal_empresa: number
    municipio_empresa: number
    uf_empresa: number
    cep_empresa: number
    telefone_empresa: number
    inscricao_estadual_empresa: number
    certificado_empresa: number
    banco_empresa: number
    status_empresa: number
    email_empresa: number
    versao_banco_empresa: number
    _all: number
  }


  export type EmpresasAvgAggregateInputType = {
    id_empresa?: true
    versao_banco_empresa?: true
  }

  export type EmpresasSumAggregateInputType = {
    id_empresa?: true
    versao_banco_empresa?: true
  }

  export type EmpresasMinAggregateInputType = {
    id_empresa?: true
    cnpj_empresa?: true
    razao_social_empresa?: true
    nome_fantasia_empresa?: true
    logradouro_empresa?: true
    numero_empresa?: true
    complemento_empresa?: true
    bairro_empresa?: true
    codigo_municipal_empresa?: true
    municipio_empresa?: true
    uf_empresa?: true
    cep_empresa?: true
    telefone_empresa?: true
    inscricao_estadual_empresa?: true
    certificado_empresa?: true
    banco_empresa?: true
    status_empresa?: true
    email_empresa?: true
    versao_banco_empresa?: true
  }

  export type EmpresasMaxAggregateInputType = {
    id_empresa?: true
    cnpj_empresa?: true
    razao_social_empresa?: true
    nome_fantasia_empresa?: true
    logradouro_empresa?: true
    numero_empresa?: true
    complemento_empresa?: true
    bairro_empresa?: true
    codigo_municipal_empresa?: true
    municipio_empresa?: true
    uf_empresa?: true
    cep_empresa?: true
    telefone_empresa?: true
    inscricao_estadual_empresa?: true
    certificado_empresa?: true
    banco_empresa?: true
    status_empresa?: true
    email_empresa?: true
    versao_banco_empresa?: true
  }

  export type EmpresasCountAggregateInputType = {
    id_empresa?: true
    cnpj_empresa?: true
    razao_social_empresa?: true
    nome_fantasia_empresa?: true
    logradouro_empresa?: true
    numero_empresa?: true
    complemento_empresa?: true
    bairro_empresa?: true
    codigo_municipal_empresa?: true
    municipio_empresa?: true
    uf_empresa?: true
    cep_empresa?: true
    telefone_empresa?: true
    inscricao_estadual_empresa?: true
    certificado_empresa?: true
    banco_empresa?: true
    status_empresa?: true
    email_empresa?: true
    versao_banco_empresa?: true
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
    id_empresa: number
    cnpj_empresa: string
    razao_social_empresa: string
    nome_fantasia_empresa: string
    logradouro_empresa: string
    numero_empresa: string
    complemento_empresa: string
    bairro_empresa: string
    codigo_municipal_empresa: string
    municipio_empresa: string
    uf_empresa: string
    cep_empresa: string
    telefone_empresa: string
    inscricao_estadual_empresa: string
    certificado_empresa: string
    banco_empresa: string
    status_empresa: string
    email_empresa: string | null
    versao_banco_empresa: number | null
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
    id_empresa?: boolean
    cnpj_empresa?: boolean
    razao_social_empresa?: boolean
    nome_fantasia_empresa?: boolean
    logradouro_empresa?: boolean
    numero_empresa?: boolean
    complemento_empresa?: boolean
    bairro_empresa?: boolean
    codigo_municipal_empresa?: boolean
    municipio_empresa?: boolean
    uf_empresa?: boolean
    cep_empresa?: boolean
    telefone_empresa?: boolean
    inscricao_estadual_empresa?: boolean
    certificado_empresa?: boolean
    banco_empresa?: boolean
    status_empresa?: boolean
    email_empresa?: boolean
    versao_banco_empresa?: boolean
    modulo_empresa?: boolean | empresas$modulo_empresaArgs<ExtArgs>
    usuario_empresa?: boolean | empresas$usuario_empresaArgs<ExtArgs>
    _count?: boolean | EmpresasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresas"]>

  export type empresasSelectScalar = {
    id_empresa?: boolean
    cnpj_empresa?: boolean
    razao_social_empresa?: boolean
    nome_fantasia_empresa?: boolean
    logradouro_empresa?: boolean
    numero_empresa?: boolean
    complemento_empresa?: boolean
    bairro_empresa?: boolean
    codigo_municipal_empresa?: boolean
    municipio_empresa?: boolean
    uf_empresa?: boolean
    cep_empresa?: boolean
    telefone_empresa?: boolean
    inscricao_estadual_empresa?: boolean
    certificado_empresa?: boolean
    banco_empresa?: boolean
    status_empresa?: boolean
    email_empresa?: boolean
    versao_banco_empresa?: boolean
  }

  export type empresasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo_empresa?: boolean | empresas$modulo_empresaArgs<ExtArgs>
    usuario_empresa?: boolean | empresas$usuario_empresaArgs<ExtArgs>
    _count?: boolean | EmpresasCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $empresasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "empresas"
    objects: {
      modulo_empresa: Prisma.$modulo_empresaPayload<ExtArgs>[]
      usuario_empresa: Prisma.$usuario_empresaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_empresa: number
      cnpj_empresa: string
      razao_social_empresa: string
      nome_fantasia_empresa: string
      logradouro_empresa: string
      numero_empresa: string
      complemento_empresa: string
      bairro_empresa: string
      codigo_municipal_empresa: string
      municipio_empresa: string
      uf_empresa: string
      cep_empresa: string
      telefone_empresa: string
      inscricao_estadual_empresa: string
      certificado_empresa: string
      banco_empresa: string
      status_empresa: string
      email_empresa: string | null
      versao_banco_empresa: number | null
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
     * // Only select the `id_empresa`
     * const empresasWithId_empresaOnly = await prisma.empresas.findMany({ select: { id_empresa: true } })
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

    modulo_empresa<T extends empresas$modulo_empresaArgs<ExtArgs> = {}>(args?: Subset<T, empresas$modulo_empresaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuario_empresa<T extends empresas$usuario_empresaArgs<ExtArgs> = {}>(args?: Subset<T, empresas$usuario_empresaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly id_empresa: FieldRef<"empresas", 'Int'>
    readonly cnpj_empresa: FieldRef<"empresas", 'String'>
    readonly razao_social_empresa: FieldRef<"empresas", 'String'>
    readonly nome_fantasia_empresa: FieldRef<"empresas", 'String'>
    readonly logradouro_empresa: FieldRef<"empresas", 'String'>
    readonly numero_empresa: FieldRef<"empresas", 'String'>
    readonly complemento_empresa: FieldRef<"empresas", 'String'>
    readonly bairro_empresa: FieldRef<"empresas", 'String'>
    readonly codigo_municipal_empresa: FieldRef<"empresas", 'String'>
    readonly municipio_empresa: FieldRef<"empresas", 'String'>
    readonly uf_empresa: FieldRef<"empresas", 'String'>
    readonly cep_empresa: FieldRef<"empresas", 'String'>
    readonly telefone_empresa: FieldRef<"empresas", 'String'>
    readonly inscricao_estadual_empresa: FieldRef<"empresas", 'String'>
    readonly certificado_empresa: FieldRef<"empresas", 'String'>
    readonly banco_empresa: FieldRef<"empresas", 'String'>
    readonly status_empresa: FieldRef<"empresas", 'String'>
    readonly email_empresa: FieldRef<"empresas", 'String'>
    readonly versao_banco_empresa: FieldRef<"empresas", 'Int'>
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
   * empresas.modulo_empresa
   */
  export type empresas$modulo_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    where?: modulo_empresaWhereInput
    orderBy?: modulo_empresaOrderByWithRelationInput | modulo_empresaOrderByWithRelationInput[]
    cursor?: modulo_empresaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Modulo_empresaScalarFieldEnum | Modulo_empresaScalarFieldEnum[]
  }


  /**
   * empresas.usuario_empresa
   */
  export type empresas$usuario_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    where?: usuario_empresaWhereInput
    orderBy?: usuario_empresaOrderByWithRelationInput | usuario_empresaOrderByWithRelationInput[]
    cursor?: usuario_empresaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_empresaScalarFieldEnum | Usuario_empresaScalarFieldEnum[]
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
   * Model modulo_empresa
   */

  export type AggregateModulo_empresa = {
    _count: Modulo_empresaCountAggregateOutputType | null
    _avg: Modulo_empresaAvgAggregateOutputType | null
    _sum: Modulo_empresaSumAggregateOutputType | null
    _min: Modulo_empresaMinAggregateOutputType | null
    _max: Modulo_empresaMaxAggregateOutputType | null
  }

  export type Modulo_empresaAvgAggregateOutputType = {
    id_modulo_me: number | null
    id_empresa_me: number | null
  }

  export type Modulo_empresaSumAggregateOutputType = {
    id_modulo_me: number | null
    id_empresa_me: number | null
  }

  export type Modulo_empresaMinAggregateOutputType = {
    id_modulo_me: number | null
    id_empresa_me: number | null
  }

  export type Modulo_empresaMaxAggregateOutputType = {
    id_modulo_me: number | null
    id_empresa_me: number | null
  }

  export type Modulo_empresaCountAggregateOutputType = {
    id_modulo_me: number
    id_empresa_me: number
    _all: number
  }


  export type Modulo_empresaAvgAggregateInputType = {
    id_modulo_me?: true
    id_empresa_me?: true
  }

  export type Modulo_empresaSumAggregateInputType = {
    id_modulo_me?: true
    id_empresa_me?: true
  }

  export type Modulo_empresaMinAggregateInputType = {
    id_modulo_me?: true
    id_empresa_me?: true
  }

  export type Modulo_empresaMaxAggregateInputType = {
    id_modulo_me?: true
    id_empresa_me?: true
  }

  export type Modulo_empresaCountAggregateInputType = {
    id_modulo_me?: true
    id_empresa_me?: true
    _all?: true
  }

  export type Modulo_empresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modulo_empresa to aggregate.
     */
    where?: modulo_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulo_empresas to fetch.
     */
    orderBy?: modulo_empresaOrderByWithRelationInput | modulo_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modulo_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulo_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulo_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modulo_empresas
    **/
    _count?: true | Modulo_empresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Modulo_empresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Modulo_empresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Modulo_empresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Modulo_empresaMaxAggregateInputType
  }

  export type GetModulo_empresaAggregateType<T extends Modulo_empresaAggregateArgs> = {
        [P in keyof T & keyof AggregateModulo_empresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulo_empresa[P]>
      : GetScalarType<T[P], AggregateModulo_empresa[P]>
  }




  export type modulo_empresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modulo_empresaWhereInput
    orderBy?: modulo_empresaOrderByWithAggregationInput | modulo_empresaOrderByWithAggregationInput[]
    by: Modulo_empresaScalarFieldEnum[] | Modulo_empresaScalarFieldEnum
    having?: modulo_empresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Modulo_empresaCountAggregateInputType | true
    _avg?: Modulo_empresaAvgAggregateInputType
    _sum?: Modulo_empresaSumAggregateInputType
    _min?: Modulo_empresaMinAggregateInputType
    _max?: Modulo_empresaMaxAggregateInputType
  }

  export type Modulo_empresaGroupByOutputType = {
    id_modulo_me: number
    id_empresa_me: number
    _count: Modulo_empresaCountAggregateOutputType | null
    _avg: Modulo_empresaAvgAggregateOutputType | null
    _sum: Modulo_empresaSumAggregateOutputType | null
    _min: Modulo_empresaMinAggregateOutputType | null
    _max: Modulo_empresaMaxAggregateOutputType | null
  }

  type GetModulo_empresaGroupByPayload<T extends modulo_empresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Modulo_empresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Modulo_empresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Modulo_empresaGroupByOutputType[P]>
            : GetScalarType<T[P], Modulo_empresaGroupByOutputType[P]>
        }
      >
    >


  export type modulo_empresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_modulo_me?: boolean
    id_empresa_me?: boolean
    empresas?: boolean | empresasDefaultArgs<ExtArgs>
    modulos?: boolean | modulosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo_empresa"]>

  export type modulo_empresaSelectScalar = {
    id_modulo_me?: boolean
    id_empresa_me?: boolean
  }

  export type modulo_empresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | empresasDefaultArgs<ExtArgs>
    modulos?: boolean | modulosDefaultArgs<ExtArgs>
  }


  export type $modulo_empresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modulo_empresa"
    objects: {
      empresas: Prisma.$empresasPayload<ExtArgs>
      modulos: Prisma.$modulosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_modulo_me: number
      id_empresa_me: number
    }, ExtArgs["result"]["modulo_empresa"]>
    composites: {}
  }


  type modulo_empresaGetPayload<S extends boolean | null | undefined | modulo_empresaDefaultArgs> = $Result.GetResult<Prisma.$modulo_empresaPayload, S>

  type modulo_empresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<modulo_empresaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Modulo_empresaCountAggregateInputType | true
    }

  export interface modulo_empresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['modulo_empresa'], meta: { name: 'modulo_empresa' } }
    /**
     * Find zero or one Modulo_empresa that matches the filter.
     * @param {modulo_empresaFindUniqueArgs} args - Arguments to find a Modulo_empresa
     * @example
     * // Get one Modulo_empresa
     * const modulo_empresa = await prisma.modulo_empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends modulo_empresaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, modulo_empresaFindUniqueArgs<ExtArgs>>
    ): Prisma__modulo_empresaClient<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Modulo_empresa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {modulo_empresaFindUniqueOrThrowArgs} args - Arguments to find a Modulo_empresa
     * @example
     * // Get one Modulo_empresa
     * const modulo_empresa = await prisma.modulo_empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends modulo_empresaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, modulo_empresaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__modulo_empresaClient<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Modulo_empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulo_empresaFindFirstArgs} args - Arguments to find a Modulo_empresa
     * @example
     * // Get one Modulo_empresa
     * const modulo_empresa = await prisma.modulo_empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends modulo_empresaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, modulo_empresaFindFirstArgs<ExtArgs>>
    ): Prisma__modulo_empresaClient<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Modulo_empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulo_empresaFindFirstOrThrowArgs} args - Arguments to find a Modulo_empresa
     * @example
     * // Get one Modulo_empresa
     * const modulo_empresa = await prisma.modulo_empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends modulo_empresaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, modulo_empresaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__modulo_empresaClient<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Modulo_empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulo_empresaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modulo_empresas
     * const modulo_empresas = await prisma.modulo_empresa.findMany()
     * 
     * // Get first 10 Modulo_empresas
     * const modulo_empresas = await prisma.modulo_empresa.findMany({ take: 10 })
     * 
     * // Only select the `id_modulo_me`
     * const modulo_empresaWithId_modulo_meOnly = await prisma.modulo_empresa.findMany({ select: { id_modulo_me: true } })
     * 
    **/
    findMany<T extends modulo_empresaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, modulo_empresaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Modulo_empresa.
     * @param {modulo_empresaCreateArgs} args - Arguments to create a Modulo_empresa.
     * @example
     * // Create one Modulo_empresa
     * const Modulo_empresa = await prisma.modulo_empresa.create({
     *   data: {
     *     // ... data to create a Modulo_empresa
     *   }
     * })
     * 
    **/
    create<T extends modulo_empresaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, modulo_empresaCreateArgs<ExtArgs>>
    ): Prisma__modulo_empresaClient<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Modulo_empresas.
     *     @param {modulo_empresaCreateManyArgs} args - Arguments to create many Modulo_empresas.
     *     @example
     *     // Create many Modulo_empresas
     *     const modulo_empresa = await prisma.modulo_empresa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends modulo_empresaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, modulo_empresaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Modulo_empresa.
     * @param {modulo_empresaDeleteArgs} args - Arguments to delete one Modulo_empresa.
     * @example
     * // Delete one Modulo_empresa
     * const Modulo_empresa = await prisma.modulo_empresa.delete({
     *   where: {
     *     // ... filter to delete one Modulo_empresa
     *   }
     * })
     * 
    **/
    delete<T extends modulo_empresaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, modulo_empresaDeleteArgs<ExtArgs>>
    ): Prisma__modulo_empresaClient<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Modulo_empresa.
     * @param {modulo_empresaUpdateArgs} args - Arguments to update one Modulo_empresa.
     * @example
     * // Update one Modulo_empresa
     * const modulo_empresa = await prisma.modulo_empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends modulo_empresaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, modulo_empresaUpdateArgs<ExtArgs>>
    ): Prisma__modulo_empresaClient<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Modulo_empresas.
     * @param {modulo_empresaDeleteManyArgs} args - Arguments to filter Modulo_empresas to delete.
     * @example
     * // Delete a few Modulo_empresas
     * const { count } = await prisma.modulo_empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends modulo_empresaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, modulo_empresaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulo_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulo_empresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modulo_empresas
     * const modulo_empresa = await prisma.modulo_empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends modulo_empresaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, modulo_empresaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modulo_empresa.
     * @param {modulo_empresaUpsertArgs} args - Arguments to update or create a Modulo_empresa.
     * @example
     * // Update or create a Modulo_empresa
     * const modulo_empresa = await prisma.modulo_empresa.upsert({
     *   create: {
     *     // ... data to create a Modulo_empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modulo_empresa we want to update
     *   }
     * })
    **/
    upsert<T extends modulo_empresaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, modulo_empresaUpsertArgs<ExtArgs>>
    ): Prisma__modulo_empresaClient<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Modulo_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulo_empresaCountArgs} args - Arguments to filter Modulo_empresas to count.
     * @example
     * // Count the number of Modulo_empresas
     * const count = await prisma.modulo_empresa.count({
     *   where: {
     *     // ... the filter for the Modulo_empresas we want to count
     *   }
     * })
    **/
    count<T extends modulo_empresaCountArgs>(
      args?: Subset<T, modulo_empresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Modulo_empresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modulo_empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Modulo_empresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Modulo_empresaAggregateArgs>(args: Subset<T, Modulo_empresaAggregateArgs>): Prisma.PrismaPromise<GetModulo_empresaAggregateType<T>>

    /**
     * Group by Modulo_empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulo_empresaGroupByArgs} args - Group by arguments.
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
      T extends modulo_empresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modulo_empresaGroupByArgs['orderBy'] }
        : { orderBy?: modulo_empresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, modulo_empresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModulo_empresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the modulo_empresa model
   */
  readonly fields: modulo_empresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for modulo_empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modulo_empresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    empresas<T extends empresasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empresasDefaultArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    modulos<T extends modulosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, modulosDefaultArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the modulo_empresa model
   */ 
  interface modulo_empresaFieldRefs {
    readonly id_modulo_me: FieldRef<"modulo_empresa", 'Int'>
    readonly id_empresa_me: FieldRef<"modulo_empresa", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * modulo_empresa findUnique
   */
  export type modulo_empresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    /**
     * Filter, which modulo_empresa to fetch.
     */
    where: modulo_empresaWhereUniqueInput
  }


  /**
   * modulo_empresa findUniqueOrThrow
   */
  export type modulo_empresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    /**
     * Filter, which modulo_empresa to fetch.
     */
    where: modulo_empresaWhereUniqueInput
  }


  /**
   * modulo_empresa findFirst
   */
  export type modulo_empresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    /**
     * Filter, which modulo_empresa to fetch.
     */
    where?: modulo_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulo_empresas to fetch.
     */
    orderBy?: modulo_empresaOrderByWithRelationInput | modulo_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modulo_empresas.
     */
    cursor?: modulo_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulo_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulo_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modulo_empresas.
     */
    distinct?: Modulo_empresaScalarFieldEnum | Modulo_empresaScalarFieldEnum[]
  }


  /**
   * modulo_empresa findFirstOrThrow
   */
  export type modulo_empresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    /**
     * Filter, which modulo_empresa to fetch.
     */
    where?: modulo_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulo_empresas to fetch.
     */
    orderBy?: modulo_empresaOrderByWithRelationInput | modulo_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modulo_empresas.
     */
    cursor?: modulo_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulo_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulo_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modulo_empresas.
     */
    distinct?: Modulo_empresaScalarFieldEnum | Modulo_empresaScalarFieldEnum[]
  }


  /**
   * modulo_empresa findMany
   */
  export type modulo_empresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    /**
     * Filter, which modulo_empresas to fetch.
     */
    where?: modulo_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulo_empresas to fetch.
     */
    orderBy?: modulo_empresaOrderByWithRelationInput | modulo_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modulo_empresas.
     */
    cursor?: modulo_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulo_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulo_empresas.
     */
    skip?: number
    distinct?: Modulo_empresaScalarFieldEnum | Modulo_empresaScalarFieldEnum[]
  }


  /**
   * modulo_empresa create
   */
  export type modulo_empresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    /**
     * The data needed to create a modulo_empresa.
     */
    data: XOR<modulo_empresaCreateInput, modulo_empresaUncheckedCreateInput>
  }


  /**
   * modulo_empresa createMany
   */
  export type modulo_empresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modulo_empresas.
     */
    data: modulo_empresaCreateManyInput | modulo_empresaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * modulo_empresa update
   */
  export type modulo_empresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    /**
     * The data needed to update a modulo_empresa.
     */
    data: XOR<modulo_empresaUpdateInput, modulo_empresaUncheckedUpdateInput>
    /**
     * Choose, which modulo_empresa to update.
     */
    where: modulo_empresaWhereUniqueInput
  }


  /**
   * modulo_empresa updateMany
   */
  export type modulo_empresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modulo_empresas.
     */
    data: XOR<modulo_empresaUpdateManyMutationInput, modulo_empresaUncheckedUpdateManyInput>
    /**
     * Filter which modulo_empresas to update
     */
    where?: modulo_empresaWhereInput
  }


  /**
   * modulo_empresa upsert
   */
  export type modulo_empresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    /**
     * The filter to search for the modulo_empresa to update in case it exists.
     */
    where: modulo_empresaWhereUniqueInput
    /**
     * In case the modulo_empresa found by the `where` argument doesn't exist, create a new modulo_empresa with this data.
     */
    create: XOR<modulo_empresaCreateInput, modulo_empresaUncheckedCreateInput>
    /**
     * In case the modulo_empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modulo_empresaUpdateInput, modulo_empresaUncheckedUpdateInput>
  }


  /**
   * modulo_empresa delete
   */
  export type modulo_empresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    /**
     * Filter which modulo_empresa to delete.
     */
    where: modulo_empresaWhereUniqueInput
  }


  /**
   * modulo_empresa deleteMany
   */
  export type modulo_empresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modulo_empresas to delete
     */
    where?: modulo_empresaWhereInput
  }


  /**
   * modulo_empresa without action
   */
  export type modulo_empresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
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
    nm_modulo: string | null
  }

  export type ModulosMaxAggregateOutputType = {
    id_modulo: number | null
    nm_modulo: string | null
  }

  export type ModulosCountAggregateOutputType = {
    id_modulo: number
    nm_modulo: number
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
    nm_modulo?: true
  }

  export type ModulosMaxAggregateInputType = {
    id_modulo?: true
    nm_modulo?: true
  }

  export type ModulosCountAggregateInputType = {
    id_modulo?: true
    nm_modulo?: true
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
    nm_modulo: string | null
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
    nm_modulo?: boolean
    modulo_empresa?: boolean | modulos$modulo_empresaArgs<ExtArgs>
    _count?: boolean | ModulosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulos"]>

  export type modulosSelectScalar = {
    id_modulo?: boolean
    nm_modulo?: boolean
  }

  export type modulosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo_empresa?: boolean | modulos$modulo_empresaArgs<ExtArgs>
    _count?: boolean | ModulosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $modulosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modulos"
    objects: {
      modulo_empresa: Prisma.$modulo_empresaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_modulo: number
      nm_modulo: string | null
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

    modulo_empresa<T extends modulos$modulo_empresaArgs<ExtArgs> = {}>(args?: Subset<T, modulos$modulo_empresaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulo_empresaPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly nm_modulo: FieldRef<"modulos", 'String'>
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
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
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
   * modulos.modulo_empresa
   */
  export type modulos$modulo_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo_empresa
     */
    select?: modulo_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulo_empresaInclude<ExtArgs> | null
    where?: modulo_empresaWhereInput
    orderBy?: modulo_empresaOrderByWithRelationInput | modulo_empresaOrderByWithRelationInput[]
    cursor?: modulo_empresaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Modulo_empresaScalarFieldEnum | Modulo_empresaScalarFieldEnum[]
  }


  /**
   * modulos without action
   */
  export type modulosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: modulosInclude<ExtArgs> | null
  }



  /**
   * Model usuario_empresa
   */

  export type AggregateUsuario_empresa = {
    _count: Usuario_empresaCountAggregateOutputType | null
    _avg: Usuario_empresaAvgAggregateOutputType | null
    _sum: Usuario_empresaSumAggregateOutputType | null
    _min: Usuario_empresaMinAggregateOutputType | null
    _max: Usuario_empresaMaxAggregateOutputType | null
  }

  export type Usuario_empresaAvgAggregateOutputType = {
    id_ue: number | null
    id_usuario_ue: number | null
    id_empresa_ue: number | null
  }

  export type Usuario_empresaSumAggregateOutputType = {
    id_ue: number | null
    id_usuario_ue: number | null
    id_empresa_ue: number | null
  }

  export type Usuario_empresaMinAggregateOutputType = {
    id_ue: number | null
    id_usuario_ue: number | null
    id_empresa_ue: number | null
  }

  export type Usuario_empresaMaxAggregateOutputType = {
    id_ue: number | null
    id_usuario_ue: number | null
    id_empresa_ue: number | null
  }

  export type Usuario_empresaCountAggregateOutputType = {
    id_ue: number
    id_usuario_ue: number
    id_empresa_ue: number
    _all: number
  }


  export type Usuario_empresaAvgAggregateInputType = {
    id_ue?: true
    id_usuario_ue?: true
    id_empresa_ue?: true
  }

  export type Usuario_empresaSumAggregateInputType = {
    id_ue?: true
    id_usuario_ue?: true
    id_empresa_ue?: true
  }

  export type Usuario_empresaMinAggregateInputType = {
    id_ue?: true
    id_usuario_ue?: true
    id_empresa_ue?: true
  }

  export type Usuario_empresaMaxAggregateInputType = {
    id_ue?: true
    id_usuario_ue?: true
    id_empresa_ue?: true
  }

  export type Usuario_empresaCountAggregateInputType = {
    id_ue?: true
    id_usuario_ue?: true
    id_empresa_ue?: true
    _all?: true
  }

  export type Usuario_empresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_empresa to aggregate.
     */
    where?: usuario_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_empresas to fetch.
     */
    orderBy?: usuario_empresaOrderByWithRelationInput | usuario_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuario_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuario_empresas
    **/
    _count?: true | Usuario_empresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_empresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_empresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_empresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_empresaMaxAggregateInputType
  }

  export type GetUsuario_empresaAggregateType<T extends Usuario_empresaAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_empresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_empresa[P]>
      : GetScalarType<T[P], AggregateUsuario_empresa[P]>
  }




  export type usuario_empresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_empresaWhereInput
    orderBy?: usuario_empresaOrderByWithAggregationInput | usuario_empresaOrderByWithAggregationInput[]
    by: Usuario_empresaScalarFieldEnum[] | Usuario_empresaScalarFieldEnum
    having?: usuario_empresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_empresaCountAggregateInputType | true
    _avg?: Usuario_empresaAvgAggregateInputType
    _sum?: Usuario_empresaSumAggregateInputType
    _min?: Usuario_empresaMinAggregateInputType
    _max?: Usuario_empresaMaxAggregateInputType
  }

  export type Usuario_empresaGroupByOutputType = {
    id_ue: number
    id_usuario_ue: number
    id_empresa_ue: number
    _count: Usuario_empresaCountAggregateOutputType | null
    _avg: Usuario_empresaAvgAggregateOutputType | null
    _sum: Usuario_empresaSumAggregateOutputType | null
    _min: Usuario_empresaMinAggregateOutputType | null
    _max: Usuario_empresaMaxAggregateOutputType | null
  }

  type GetUsuario_empresaGroupByPayload<T extends usuario_empresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_empresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_empresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_empresaGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_empresaGroupByOutputType[P]>
        }
      >
    >


  export type usuario_empresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ue?: boolean
    id_usuario_ue?: boolean
    id_empresa_ue?: boolean
    empresas?: boolean | empresasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_empresa"]>

  export type usuario_empresaSelectScalar = {
    id_ue?: boolean
    id_usuario_ue?: boolean
    id_empresa_ue?: boolean
  }

  export type usuario_empresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | empresasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }


  export type $usuario_empresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario_empresa"
    objects: {
      empresas: Prisma.$empresasPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ue: number
      id_usuario_ue: number
      id_empresa_ue: number
    }, ExtArgs["result"]["usuario_empresa"]>
    composites: {}
  }


  type usuario_empresaGetPayload<S extends boolean | null | undefined | usuario_empresaDefaultArgs> = $Result.GetResult<Prisma.$usuario_empresaPayload, S>

  type usuario_empresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuario_empresaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Usuario_empresaCountAggregateInputType | true
    }

  export interface usuario_empresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario_empresa'], meta: { name: 'usuario_empresa' } }
    /**
     * Find zero or one Usuario_empresa that matches the filter.
     * @param {usuario_empresaFindUniqueArgs} args - Arguments to find a Usuario_empresa
     * @example
     * // Get one Usuario_empresa
     * const usuario_empresa = await prisma.usuario_empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usuario_empresaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usuario_empresaFindUniqueArgs<ExtArgs>>
    ): Prisma__usuario_empresaClient<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario_empresa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usuario_empresaFindUniqueOrThrowArgs} args - Arguments to find a Usuario_empresa
     * @example
     * // Get one Usuario_empresa
     * const usuario_empresa = await prisma.usuario_empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usuario_empresaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuario_empresaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usuario_empresaClient<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario_empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_empresaFindFirstArgs} args - Arguments to find a Usuario_empresa
     * @example
     * // Get one Usuario_empresa
     * const usuario_empresa = await prisma.usuario_empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usuario_empresaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usuario_empresaFindFirstArgs<ExtArgs>>
    ): Prisma__usuario_empresaClient<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario_empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_empresaFindFirstOrThrowArgs} args - Arguments to find a Usuario_empresa
     * @example
     * // Get one Usuario_empresa
     * const usuario_empresa = await prisma.usuario_empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usuario_empresaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuario_empresaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usuario_empresaClient<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuario_empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_empresaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_empresas
     * const usuario_empresas = await prisma.usuario_empresa.findMany()
     * 
     * // Get first 10 Usuario_empresas
     * const usuario_empresas = await prisma.usuario_empresa.findMany({ take: 10 })
     * 
     * // Only select the `id_ue`
     * const usuario_empresaWithId_ueOnly = await prisma.usuario_empresa.findMany({ select: { id_ue: true } })
     * 
    **/
    findMany<T extends usuario_empresaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuario_empresaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario_empresa.
     * @param {usuario_empresaCreateArgs} args - Arguments to create a Usuario_empresa.
     * @example
     * // Create one Usuario_empresa
     * const Usuario_empresa = await prisma.usuario_empresa.create({
     *   data: {
     *     // ... data to create a Usuario_empresa
     *   }
     * })
     * 
    **/
    create<T extends usuario_empresaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usuario_empresaCreateArgs<ExtArgs>>
    ): Prisma__usuario_empresaClient<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuario_empresas.
     *     @param {usuario_empresaCreateManyArgs} args - Arguments to create many Usuario_empresas.
     *     @example
     *     // Create many Usuario_empresas
     *     const usuario_empresa = await prisma.usuario_empresa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usuario_empresaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuario_empresaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario_empresa.
     * @param {usuario_empresaDeleteArgs} args - Arguments to delete one Usuario_empresa.
     * @example
     * // Delete one Usuario_empresa
     * const Usuario_empresa = await prisma.usuario_empresa.delete({
     *   where: {
     *     // ... filter to delete one Usuario_empresa
     *   }
     * })
     * 
    **/
    delete<T extends usuario_empresaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usuario_empresaDeleteArgs<ExtArgs>>
    ): Prisma__usuario_empresaClient<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario_empresa.
     * @param {usuario_empresaUpdateArgs} args - Arguments to update one Usuario_empresa.
     * @example
     * // Update one Usuario_empresa
     * const usuario_empresa = await prisma.usuario_empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usuario_empresaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usuario_empresaUpdateArgs<ExtArgs>>
    ): Prisma__usuario_empresaClient<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuario_empresas.
     * @param {usuario_empresaDeleteManyArgs} args - Arguments to filter Usuario_empresas to delete.
     * @example
     * // Delete a few Usuario_empresas
     * const { count } = await prisma.usuario_empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usuario_empresaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuario_empresaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_empresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_empresas
     * const usuario_empresa = await prisma.usuario_empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usuario_empresaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usuario_empresaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario_empresa.
     * @param {usuario_empresaUpsertArgs} args - Arguments to update or create a Usuario_empresa.
     * @example
     * // Update or create a Usuario_empresa
     * const usuario_empresa = await prisma.usuario_empresa.upsert({
     *   create: {
     *     // ... data to create a Usuario_empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_empresa we want to update
     *   }
     * })
    **/
    upsert<T extends usuario_empresaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usuario_empresaUpsertArgs<ExtArgs>>
    ): Prisma__usuario_empresaClient<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuario_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_empresaCountArgs} args - Arguments to filter Usuario_empresas to count.
     * @example
     * // Count the number of Usuario_empresas
     * const count = await prisma.usuario_empresa.count({
     *   where: {
     *     // ... the filter for the Usuario_empresas we want to count
     *   }
     * })
    **/
    count<T extends usuario_empresaCountArgs>(
      args?: Subset<T, usuario_empresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_empresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_empresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuario_empresaAggregateArgs>(args: Subset<T, Usuario_empresaAggregateArgs>): Prisma.PrismaPromise<GetUsuario_empresaAggregateType<T>>

    /**
     * Group by Usuario_empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_empresaGroupByArgs} args - Group by arguments.
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
      T extends usuario_empresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuario_empresaGroupByArgs['orderBy'] }
        : { orderBy?: usuario_empresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuario_empresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_empresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario_empresa model
   */
  readonly fields: usuario_empresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario_empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuario_empresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the usuario_empresa model
   */ 
  interface usuario_empresaFieldRefs {
    readonly id_ue: FieldRef<"usuario_empresa", 'Int'>
    readonly id_usuario_ue: FieldRef<"usuario_empresa", 'Int'>
    readonly id_empresa_ue: FieldRef<"usuario_empresa", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * usuario_empresa findUnique
   */
  export type usuario_empresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    /**
     * Filter, which usuario_empresa to fetch.
     */
    where: usuario_empresaWhereUniqueInput
  }


  /**
   * usuario_empresa findUniqueOrThrow
   */
  export type usuario_empresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    /**
     * Filter, which usuario_empresa to fetch.
     */
    where: usuario_empresaWhereUniqueInput
  }


  /**
   * usuario_empresa findFirst
   */
  export type usuario_empresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    /**
     * Filter, which usuario_empresa to fetch.
     */
    where?: usuario_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_empresas to fetch.
     */
    orderBy?: usuario_empresaOrderByWithRelationInput | usuario_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_empresas.
     */
    cursor?: usuario_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_empresas.
     */
    distinct?: Usuario_empresaScalarFieldEnum | Usuario_empresaScalarFieldEnum[]
  }


  /**
   * usuario_empresa findFirstOrThrow
   */
  export type usuario_empresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    /**
     * Filter, which usuario_empresa to fetch.
     */
    where?: usuario_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_empresas to fetch.
     */
    orderBy?: usuario_empresaOrderByWithRelationInput | usuario_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_empresas.
     */
    cursor?: usuario_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_empresas.
     */
    distinct?: Usuario_empresaScalarFieldEnum | Usuario_empresaScalarFieldEnum[]
  }


  /**
   * usuario_empresa findMany
   */
  export type usuario_empresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    /**
     * Filter, which usuario_empresas to fetch.
     */
    where?: usuario_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_empresas to fetch.
     */
    orderBy?: usuario_empresaOrderByWithRelationInput | usuario_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuario_empresas.
     */
    cursor?: usuario_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_empresas.
     */
    skip?: number
    distinct?: Usuario_empresaScalarFieldEnum | Usuario_empresaScalarFieldEnum[]
  }


  /**
   * usuario_empresa create
   */
  export type usuario_empresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario_empresa.
     */
    data: XOR<usuario_empresaCreateInput, usuario_empresaUncheckedCreateInput>
  }


  /**
   * usuario_empresa createMany
   */
  export type usuario_empresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuario_empresas.
     */
    data: usuario_empresaCreateManyInput | usuario_empresaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * usuario_empresa update
   */
  export type usuario_empresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario_empresa.
     */
    data: XOR<usuario_empresaUpdateInput, usuario_empresaUncheckedUpdateInput>
    /**
     * Choose, which usuario_empresa to update.
     */
    where: usuario_empresaWhereUniqueInput
  }


  /**
   * usuario_empresa updateMany
   */
  export type usuario_empresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuario_empresas.
     */
    data: XOR<usuario_empresaUpdateManyMutationInput, usuario_empresaUncheckedUpdateManyInput>
    /**
     * Filter which usuario_empresas to update
     */
    where?: usuario_empresaWhereInput
  }


  /**
   * usuario_empresa upsert
   */
  export type usuario_empresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario_empresa to update in case it exists.
     */
    where: usuario_empresaWhereUniqueInput
    /**
     * In case the usuario_empresa found by the `where` argument doesn't exist, create a new usuario_empresa with this data.
     */
    create: XOR<usuario_empresaCreateInput, usuario_empresaUncheckedCreateInput>
    /**
     * In case the usuario_empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuario_empresaUpdateInput, usuario_empresaUncheckedUpdateInput>
  }


  /**
   * usuario_empresa delete
   */
  export type usuario_empresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    /**
     * Filter which usuario_empresa to delete.
     */
    where: usuario_empresaWhereUniqueInput
  }


  /**
   * usuario_empresa deleteMany
   */
  export type usuario_empresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_empresas to delete
     */
    where?: usuario_empresaWhereInput
  }


  /**
   * usuario_empresa without action
   */
  export type usuario_empresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
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
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    nm_usuario: string | null
    ultimo_nome_usuario: string | null
    email_usuario: string | null
    senha_usuario: string | null
    celular_usuario: string | null
    status_usuario: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    nm_usuario: string | null
    ultimo_nome_usuario: string | null
    email_usuario: string | null
    senha_usuario: string | null
    celular_usuario: string | null
    status_usuario: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    nm_usuario: number
    ultimo_nome_usuario: number
    email_usuario: number
    senha_usuario: number
    celular_usuario: number
    status_usuario: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    nm_usuario?: true
    ultimo_nome_usuario?: true
    email_usuario?: true
    senha_usuario?: true
    celular_usuario?: true
    status_usuario?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    nm_usuario?: true
    ultimo_nome_usuario?: true
    email_usuario?: true
    senha_usuario?: true
    celular_usuario?: true
    status_usuario?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    nm_usuario?: true
    ultimo_nome_usuario?: true
    email_usuario?: true
    senha_usuario?: true
    celular_usuario?: true
    status_usuario?: true
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
    id_usuario: number
    nm_usuario: string | null
    ultimo_nome_usuario: string | null
    email_usuario: string | null
    senha_usuario: string | null
    celular_usuario: string | null
    status_usuario: string | null
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
    id_usuario?: boolean
    nm_usuario?: boolean
    ultimo_nome_usuario?: boolean
    email_usuario?: boolean
    senha_usuario?: boolean
    celular_usuario?: boolean
    status_usuario?: boolean
    usuario_empresa?: boolean | usuarios$usuario_empresaArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    nm_usuario?: boolean
    ultimo_nome_usuario?: boolean
    email_usuario?: boolean
    senha_usuario?: boolean
    celular_usuario?: boolean
    status_usuario?: boolean
  }

  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_empresa?: boolean | usuarios$usuario_empresaArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      usuario_empresa: Prisma.$usuario_empresaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nm_usuario: string | null
      ultimo_nome_usuario: string | null
      email_usuario: string | null
      senha_usuario: string | null
      celular_usuario: string | null
      status_usuario: string | null
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
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
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

    usuario_empresa<T extends usuarios$usuario_empresaArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$usuario_empresaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_empresaPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly nm_usuario: FieldRef<"usuarios", 'String'>
    readonly ultimo_nome_usuario: FieldRef<"usuarios", 'String'>
    readonly email_usuario: FieldRef<"usuarios", 'String'>
    readonly senha_usuario: FieldRef<"usuarios", 'String'>
    readonly celular_usuario: FieldRef<"usuarios", 'String'>
    readonly status_usuario: FieldRef<"usuarios", 'String'>
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
    data?: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
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
   * usuarios.usuario_empresa
   */
  export type usuarios$usuario_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_empresa
     */
    select?: usuario_empresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuario_empresaInclude<ExtArgs> | null
    where?: usuario_empresaWhereInput
    orderBy?: usuario_empresaOrderByWithRelationInput | usuario_empresaOrderByWithRelationInput[]
    cursor?: usuario_empresaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_empresaScalarFieldEnum | Usuario_empresaScalarFieldEnum[]
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
    id_parametro: 'id_parametro',
    nm_parametro: 'nm_parametro',
    valor_parametro: 'valor_parametro',
    descricao_parametro: 'descricao_parametro'
  };

  export type ParametrosScalarFieldEnum = (typeof ParametrosScalarFieldEnum)[keyof typeof ParametrosScalarFieldEnum]


  export const AtividadesScalarFieldEnum: {
    id_atividade: 'id_atividade',
    nm_atividade: 'nm_atividade',
    valor_atividade: 'valor_atividade',
    descricao_atividade: 'descricao_atividade'
  };

  export type AtividadesScalarFieldEnum = (typeof AtividadesScalarFieldEnum)[keyof typeof AtividadesScalarFieldEnum]


  export const EmpresasScalarFieldEnum: {
    id_empresa: 'id_empresa',
    cnpj_empresa: 'cnpj_empresa',
    razao_social_empresa: 'razao_social_empresa',
    nome_fantasia_empresa: 'nome_fantasia_empresa',
    logradouro_empresa: 'logradouro_empresa',
    numero_empresa: 'numero_empresa',
    complemento_empresa: 'complemento_empresa',
    bairro_empresa: 'bairro_empresa',
    codigo_municipal_empresa: 'codigo_municipal_empresa',
    municipio_empresa: 'municipio_empresa',
    uf_empresa: 'uf_empresa',
    cep_empresa: 'cep_empresa',
    telefone_empresa: 'telefone_empresa',
    inscricao_estadual_empresa: 'inscricao_estadual_empresa',
    certificado_empresa: 'certificado_empresa',
    banco_empresa: 'banco_empresa',
    status_empresa: 'status_empresa',
    email_empresa: 'email_empresa',
    versao_banco_empresa: 'versao_banco_empresa'
  };

  export type EmpresasScalarFieldEnum = (typeof EmpresasScalarFieldEnum)[keyof typeof EmpresasScalarFieldEnum]


  export const Modulo_empresaScalarFieldEnum: {
    id_modulo_me: 'id_modulo_me',
    id_empresa_me: 'id_empresa_me'
  };

  export type Modulo_empresaScalarFieldEnum = (typeof Modulo_empresaScalarFieldEnum)[keyof typeof Modulo_empresaScalarFieldEnum]


  export const ModulosScalarFieldEnum: {
    id_modulo: 'id_modulo',
    nm_modulo: 'nm_modulo'
  };

  export type ModulosScalarFieldEnum = (typeof ModulosScalarFieldEnum)[keyof typeof ModulosScalarFieldEnum]


  export const Usuario_empresaScalarFieldEnum: {
    id_ue: 'id_ue',
    id_usuario_ue: 'id_usuario_ue',
    id_empresa_ue: 'id_empresa_ue'
  };

  export type Usuario_empresaScalarFieldEnum = (typeof Usuario_empresaScalarFieldEnum)[keyof typeof Usuario_empresaScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nm_usuario: 'nm_usuario',
    ultimo_nome_usuario: 'ultimo_nome_usuario',
    email_usuario: 'email_usuario',
    senha_usuario: 'senha_usuario',
    celular_usuario: 'celular_usuario',
    status_usuario: 'status_usuario'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


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
    id_parametro?: IntFilter<"parametros"> | number
    nm_parametro?: StringFilter<"parametros"> | string
    valor_parametro?: IntFilter<"parametros"> | number
    descricao_parametro?: StringFilter<"parametros"> | string
  }

  export type parametrosOrderByWithRelationInput = {
    id_parametro?: SortOrder
    nm_parametro?: SortOrder
    valor_parametro?: SortOrder
    descricao_parametro?: SortOrder
  }

  export type parametrosWhereUniqueInput = Prisma.AtLeast<{
    id_parametro?: number
    nm_parametro?: string
    AND?: parametrosWhereInput | parametrosWhereInput[]
    OR?: parametrosWhereInput[]
    NOT?: parametrosWhereInput | parametrosWhereInput[]
    valor_parametro?: IntFilter<"parametros"> | number
    descricao_parametro?: StringFilter<"parametros"> | string
  }, "id_parametro" | "nm_parametro">

  export type parametrosOrderByWithAggregationInput = {
    id_parametro?: SortOrder
    nm_parametro?: SortOrder
    valor_parametro?: SortOrder
    descricao_parametro?: SortOrder
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
    id_parametro?: IntWithAggregatesFilter<"parametros"> | number
    nm_parametro?: StringWithAggregatesFilter<"parametros"> | string
    valor_parametro?: IntWithAggregatesFilter<"parametros"> | number
    descricao_parametro?: StringWithAggregatesFilter<"parametros"> | string
  }

  export type atividadesWhereInput = {
    AND?: atividadesWhereInput | atividadesWhereInput[]
    OR?: atividadesWhereInput[]
    NOT?: atividadesWhereInput | atividadesWhereInput[]
    id_atividade?: IntFilter<"atividades"> | number
    nm_atividade?: StringNullableFilter<"atividades"> | string | null
    valor_atividade?: IntNullableFilter<"atividades"> | number | null
    descricao_atividade?: StringNullableFilter<"atividades"> | string | null
  }

  export type atividadesOrderByWithRelationInput = {
    id_atividade?: SortOrder
    nm_atividade?: SortOrderInput | SortOrder
    valor_atividade?: SortOrderInput | SortOrder
    descricao_atividade?: SortOrderInput | SortOrder
  }

  export type atividadesWhereUniqueInput = Prisma.AtLeast<{
    id_atividade?: number
    nm_atividade?: string
    AND?: atividadesWhereInput | atividadesWhereInput[]
    OR?: atividadesWhereInput[]
    NOT?: atividadesWhereInput | atividadesWhereInput[]
    valor_atividade?: IntNullableFilter<"atividades"> | number | null
    descricao_atividade?: StringNullableFilter<"atividades"> | string | null
  }, "id_atividade" | "nm_atividade">

  export type atividadesOrderByWithAggregationInput = {
    id_atividade?: SortOrder
    nm_atividade?: SortOrderInput | SortOrder
    valor_atividade?: SortOrderInput | SortOrder
    descricao_atividade?: SortOrderInput | SortOrder
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
    nm_atividade?: StringNullableWithAggregatesFilter<"atividades"> | string | null
    valor_atividade?: IntNullableWithAggregatesFilter<"atividades"> | number | null
    descricao_atividade?: StringNullableWithAggregatesFilter<"atividades"> | string | null
  }

  export type empresasWhereInput = {
    AND?: empresasWhereInput | empresasWhereInput[]
    OR?: empresasWhereInput[]
    NOT?: empresasWhereInput | empresasWhereInput[]
    id_empresa?: IntFilter<"empresas"> | number
    cnpj_empresa?: StringFilter<"empresas"> | string
    razao_social_empresa?: StringFilter<"empresas"> | string
    nome_fantasia_empresa?: StringFilter<"empresas"> | string
    logradouro_empresa?: StringFilter<"empresas"> | string
    numero_empresa?: StringFilter<"empresas"> | string
    complemento_empresa?: StringFilter<"empresas"> | string
    bairro_empresa?: StringFilter<"empresas"> | string
    codigo_municipal_empresa?: StringFilter<"empresas"> | string
    municipio_empresa?: StringFilter<"empresas"> | string
    uf_empresa?: StringFilter<"empresas"> | string
    cep_empresa?: StringFilter<"empresas"> | string
    telefone_empresa?: StringFilter<"empresas"> | string
    inscricao_estadual_empresa?: StringFilter<"empresas"> | string
    certificado_empresa?: StringFilter<"empresas"> | string
    banco_empresa?: StringFilter<"empresas"> | string
    status_empresa?: StringFilter<"empresas"> | string
    email_empresa?: StringNullableFilter<"empresas"> | string | null
    versao_banco_empresa?: IntNullableFilter<"empresas"> | number | null
    modulo_empresa?: Modulo_empresaListRelationFilter
    usuario_empresa?: Usuario_empresaListRelationFilter
  }

  export type empresasOrderByWithRelationInput = {
    id_empresa?: SortOrder
    cnpj_empresa?: SortOrder
    razao_social_empresa?: SortOrder
    nome_fantasia_empresa?: SortOrder
    logradouro_empresa?: SortOrder
    numero_empresa?: SortOrder
    complemento_empresa?: SortOrder
    bairro_empresa?: SortOrder
    codigo_municipal_empresa?: SortOrder
    municipio_empresa?: SortOrder
    uf_empresa?: SortOrder
    cep_empresa?: SortOrder
    telefone_empresa?: SortOrder
    inscricao_estadual_empresa?: SortOrder
    certificado_empresa?: SortOrder
    banco_empresa?: SortOrder
    status_empresa?: SortOrder
    email_empresa?: SortOrderInput | SortOrder
    versao_banco_empresa?: SortOrderInput | SortOrder
    modulo_empresa?: modulo_empresaOrderByRelationAggregateInput
    usuario_empresa?: usuario_empresaOrderByRelationAggregateInput
  }

  export type empresasWhereUniqueInput = Prisma.AtLeast<{
    id_empresa?: number
    cnpj_empresa?: string
    AND?: empresasWhereInput | empresasWhereInput[]
    OR?: empresasWhereInput[]
    NOT?: empresasWhereInput | empresasWhereInput[]
    razao_social_empresa?: StringFilter<"empresas"> | string
    nome_fantasia_empresa?: StringFilter<"empresas"> | string
    logradouro_empresa?: StringFilter<"empresas"> | string
    numero_empresa?: StringFilter<"empresas"> | string
    complemento_empresa?: StringFilter<"empresas"> | string
    bairro_empresa?: StringFilter<"empresas"> | string
    codigo_municipal_empresa?: StringFilter<"empresas"> | string
    municipio_empresa?: StringFilter<"empresas"> | string
    uf_empresa?: StringFilter<"empresas"> | string
    cep_empresa?: StringFilter<"empresas"> | string
    telefone_empresa?: StringFilter<"empresas"> | string
    inscricao_estadual_empresa?: StringFilter<"empresas"> | string
    certificado_empresa?: StringFilter<"empresas"> | string
    banco_empresa?: StringFilter<"empresas"> | string
    status_empresa?: StringFilter<"empresas"> | string
    email_empresa?: StringNullableFilter<"empresas"> | string | null
    versao_banco_empresa?: IntNullableFilter<"empresas"> | number | null
    modulo_empresa?: Modulo_empresaListRelationFilter
    usuario_empresa?: Usuario_empresaListRelationFilter
  }, "id_empresa" | "cnpj_empresa">

  export type empresasOrderByWithAggregationInput = {
    id_empresa?: SortOrder
    cnpj_empresa?: SortOrder
    razao_social_empresa?: SortOrder
    nome_fantasia_empresa?: SortOrder
    logradouro_empresa?: SortOrder
    numero_empresa?: SortOrder
    complemento_empresa?: SortOrder
    bairro_empresa?: SortOrder
    codigo_municipal_empresa?: SortOrder
    municipio_empresa?: SortOrder
    uf_empresa?: SortOrder
    cep_empresa?: SortOrder
    telefone_empresa?: SortOrder
    inscricao_estadual_empresa?: SortOrder
    certificado_empresa?: SortOrder
    banco_empresa?: SortOrder
    status_empresa?: SortOrder
    email_empresa?: SortOrderInput | SortOrder
    versao_banco_empresa?: SortOrderInput | SortOrder
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
    id_empresa?: IntWithAggregatesFilter<"empresas"> | number
    cnpj_empresa?: StringWithAggregatesFilter<"empresas"> | string
    razao_social_empresa?: StringWithAggregatesFilter<"empresas"> | string
    nome_fantasia_empresa?: StringWithAggregatesFilter<"empresas"> | string
    logradouro_empresa?: StringWithAggregatesFilter<"empresas"> | string
    numero_empresa?: StringWithAggregatesFilter<"empresas"> | string
    complemento_empresa?: StringWithAggregatesFilter<"empresas"> | string
    bairro_empresa?: StringWithAggregatesFilter<"empresas"> | string
    codigo_municipal_empresa?: StringWithAggregatesFilter<"empresas"> | string
    municipio_empresa?: StringWithAggregatesFilter<"empresas"> | string
    uf_empresa?: StringWithAggregatesFilter<"empresas"> | string
    cep_empresa?: StringWithAggregatesFilter<"empresas"> | string
    telefone_empresa?: StringWithAggregatesFilter<"empresas"> | string
    inscricao_estadual_empresa?: StringWithAggregatesFilter<"empresas"> | string
    certificado_empresa?: StringWithAggregatesFilter<"empresas"> | string
    banco_empresa?: StringWithAggregatesFilter<"empresas"> | string
    status_empresa?: StringWithAggregatesFilter<"empresas"> | string
    email_empresa?: StringNullableWithAggregatesFilter<"empresas"> | string | null
    versao_banco_empresa?: IntNullableWithAggregatesFilter<"empresas"> | number | null
  }

  export type modulo_empresaWhereInput = {
    AND?: modulo_empresaWhereInput | modulo_empresaWhereInput[]
    OR?: modulo_empresaWhereInput[]
    NOT?: modulo_empresaWhereInput | modulo_empresaWhereInput[]
    id_modulo_me?: IntFilter<"modulo_empresa"> | number
    id_empresa_me?: IntFilter<"modulo_empresa"> | number
    empresas?: XOR<EmpresasRelationFilter, empresasWhereInput>
    modulos?: XOR<ModulosRelationFilter, modulosWhereInput>
  }

  export type modulo_empresaOrderByWithRelationInput = {
    id_modulo_me?: SortOrder
    id_empresa_me?: SortOrder
    empresas?: empresasOrderByWithRelationInput
    modulos?: modulosOrderByWithRelationInput
  }

  export type modulo_empresaWhereUniqueInput = Prisma.AtLeast<{
    id_modulo_me_id_empresa_me?: modulo_empresaId_modulo_meId_empresa_meCompoundUniqueInput
    AND?: modulo_empresaWhereInput | modulo_empresaWhereInput[]
    OR?: modulo_empresaWhereInput[]
    NOT?: modulo_empresaWhereInput | modulo_empresaWhereInput[]
    id_modulo_me?: IntFilter<"modulo_empresa"> | number
    id_empresa_me?: IntFilter<"modulo_empresa"> | number
    empresas?: XOR<EmpresasRelationFilter, empresasWhereInput>
    modulos?: XOR<ModulosRelationFilter, modulosWhereInput>
  }, "id_modulo_me_id_empresa_me">

  export type modulo_empresaOrderByWithAggregationInput = {
    id_modulo_me?: SortOrder
    id_empresa_me?: SortOrder
    _count?: modulo_empresaCountOrderByAggregateInput
    _avg?: modulo_empresaAvgOrderByAggregateInput
    _max?: modulo_empresaMaxOrderByAggregateInput
    _min?: modulo_empresaMinOrderByAggregateInput
    _sum?: modulo_empresaSumOrderByAggregateInput
  }

  export type modulo_empresaScalarWhereWithAggregatesInput = {
    AND?: modulo_empresaScalarWhereWithAggregatesInput | modulo_empresaScalarWhereWithAggregatesInput[]
    OR?: modulo_empresaScalarWhereWithAggregatesInput[]
    NOT?: modulo_empresaScalarWhereWithAggregatesInput | modulo_empresaScalarWhereWithAggregatesInput[]
    id_modulo_me?: IntWithAggregatesFilter<"modulo_empresa"> | number
    id_empresa_me?: IntWithAggregatesFilter<"modulo_empresa"> | number
  }

  export type modulosWhereInput = {
    AND?: modulosWhereInput | modulosWhereInput[]
    OR?: modulosWhereInput[]
    NOT?: modulosWhereInput | modulosWhereInput[]
    id_modulo?: IntFilter<"modulos"> | number
    nm_modulo?: StringNullableFilter<"modulos"> | string | null
    modulo_empresa?: Modulo_empresaListRelationFilter
  }

  export type modulosOrderByWithRelationInput = {
    id_modulo?: SortOrder
    nm_modulo?: SortOrderInput | SortOrder
    modulo_empresa?: modulo_empresaOrderByRelationAggregateInput
  }

  export type modulosWhereUniqueInput = Prisma.AtLeast<{
    id_modulo?: number
    nm_modulo?: string
    AND?: modulosWhereInput | modulosWhereInput[]
    OR?: modulosWhereInput[]
    NOT?: modulosWhereInput | modulosWhereInput[]
    modulo_empresa?: Modulo_empresaListRelationFilter
  }, "id_modulo" | "nm_modulo">

  export type modulosOrderByWithAggregationInput = {
    id_modulo?: SortOrder
    nm_modulo?: SortOrderInput | SortOrder
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
    nm_modulo?: StringNullableWithAggregatesFilter<"modulos"> | string | null
  }

  export type usuario_empresaWhereInput = {
    AND?: usuario_empresaWhereInput | usuario_empresaWhereInput[]
    OR?: usuario_empresaWhereInput[]
    NOT?: usuario_empresaWhereInput | usuario_empresaWhereInput[]
    id_ue?: IntFilter<"usuario_empresa"> | number
    id_usuario_ue?: IntFilter<"usuario_empresa"> | number
    id_empresa_ue?: IntFilter<"usuario_empresa"> | number
    empresas?: XOR<EmpresasRelationFilter, empresasWhereInput>
    usuarios?: XOR<UsuariosRelationFilter, usuariosWhereInput>
  }

  export type usuario_empresaOrderByWithRelationInput = {
    id_ue?: SortOrder
    id_usuario_ue?: SortOrder
    id_empresa_ue?: SortOrder
    empresas?: empresasOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type usuario_empresaWhereUniqueInput = Prisma.AtLeast<{
    id_ue?: number
    AND?: usuario_empresaWhereInput | usuario_empresaWhereInput[]
    OR?: usuario_empresaWhereInput[]
    NOT?: usuario_empresaWhereInput | usuario_empresaWhereInput[]
    id_usuario_ue?: IntFilter<"usuario_empresa"> | number
    id_empresa_ue?: IntFilter<"usuario_empresa"> | number
    empresas?: XOR<EmpresasRelationFilter, empresasWhereInput>
    usuarios?: XOR<UsuariosRelationFilter, usuariosWhereInput>
  }, "id_ue">

  export type usuario_empresaOrderByWithAggregationInput = {
    id_ue?: SortOrder
    id_usuario_ue?: SortOrder
    id_empresa_ue?: SortOrder
    _count?: usuario_empresaCountOrderByAggregateInput
    _avg?: usuario_empresaAvgOrderByAggregateInput
    _max?: usuario_empresaMaxOrderByAggregateInput
    _min?: usuario_empresaMinOrderByAggregateInput
    _sum?: usuario_empresaSumOrderByAggregateInput
  }

  export type usuario_empresaScalarWhereWithAggregatesInput = {
    AND?: usuario_empresaScalarWhereWithAggregatesInput | usuario_empresaScalarWhereWithAggregatesInput[]
    OR?: usuario_empresaScalarWhereWithAggregatesInput[]
    NOT?: usuario_empresaScalarWhereWithAggregatesInput | usuario_empresaScalarWhereWithAggregatesInput[]
    id_ue?: IntWithAggregatesFilter<"usuario_empresa"> | number
    id_usuario_ue?: IntWithAggregatesFilter<"usuario_empresa"> | number
    id_empresa_ue?: IntWithAggregatesFilter<"usuario_empresa"> | number
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    nm_usuario?: StringNullableFilter<"usuarios"> | string | null
    ultimo_nome_usuario?: StringNullableFilter<"usuarios"> | string | null
    email_usuario?: StringNullableFilter<"usuarios"> | string | null
    senha_usuario?: StringNullableFilter<"usuarios"> | string | null
    celular_usuario?: StringNullableFilter<"usuarios"> | string | null
    status_usuario?: StringNullableFilter<"usuarios"> | string | null
    usuario_empresa?: Usuario_empresaListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nm_usuario?: SortOrderInput | SortOrder
    ultimo_nome_usuario?: SortOrderInput | SortOrder
    email_usuario?: SortOrderInput | SortOrder
    senha_usuario?: SortOrderInput | SortOrder
    celular_usuario?: SortOrderInput | SortOrder
    status_usuario?: SortOrderInput | SortOrder
    usuario_empresa?: usuario_empresaOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email_usuario?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nm_usuario?: StringNullableFilter<"usuarios"> | string | null
    ultimo_nome_usuario?: StringNullableFilter<"usuarios"> | string | null
    senha_usuario?: StringNullableFilter<"usuarios"> | string | null
    celular_usuario?: StringNullableFilter<"usuarios"> | string | null
    status_usuario?: StringNullableFilter<"usuarios"> | string | null
    usuario_empresa?: Usuario_empresaListRelationFilter
  }, "id_usuario" | "email_usuario">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nm_usuario?: SortOrderInput | SortOrder
    ultimo_nome_usuario?: SortOrderInput | SortOrder
    email_usuario?: SortOrderInput | SortOrder
    senha_usuario?: SortOrderInput | SortOrder
    celular_usuario?: SortOrderInput | SortOrder
    status_usuario?: SortOrderInput | SortOrder
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
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    nm_usuario?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    ultimo_nome_usuario?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    email_usuario?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    senha_usuario?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    celular_usuario?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    status_usuario?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
  }

  export type parametrosCreateInput = {
    nm_parametro: string
    valor_parametro: number
    descricao_parametro: string
  }

  export type parametrosUncheckedCreateInput = {
    id_parametro?: number
    nm_parametro: string
    valor_parametro: number
    descricao_parametro: string
  }

  export type parametrosUpdateInput = {
    nm_parametro?: StringFieldUpdateOperationsInput | string
    valor_parametro?: IntFieldUpdateOperationsInput | number
    descricao_parametro?: StringFieldUpdateOperationsInput | string
  }

  export type parametrosUncheckedUpdateInput = {
    id_parametro?: IntFieldUpdateOperationsInput | number
    nm_parametro?: StringFieldUpdateOperationsInput | string
    valor_parametro?: IntFieldUpdateOperationsInput | number
    descricao_parametro?: StringFieldUpdateOperationsInput | string
  }

  export type parametrosCreateManyInput = {
    id_parametro?: number
    nm_parametro: string
    valor_parametro: number
    descricao_parametro: string
  }

  export type parametrosUpdateManyMutationInput = {
    nm_parametro?: StringFieldUpdateOperationsInput | string
    valor_parametro?: IntFieldUpdateOperationsInput | number
    descricao_parametro?: StringFieldUpdateOperationsInput | string
  }

  export type parametrosUncheckedUpdateManyInput = {
    id_parametro?: IntFieldUpdateOperationsInput | number
    nm_parametro?: StringFieldUpdateOperationsInput | string
    valor_parametro?: IntFieldUpdateOperationsInput | number
    descricao_parametro?: StringFieldUpdateOperationsInput | string
  }

  export type atividadesCreateInput = {
    nm_atividade?: string | null
    valor_atividade?: number | null
    descricao_atividade?: string | null
  }

  export type atividadesUncheckedCreateInput = {
    id_atividade?: number
    nm_atividade?: string | null
    valor_atividade?: number | null
    descricao_atividade?: string | null
  }

  export type atividadesUpdateInput = {
    nm_atividade?: NullableStringFieldUpdateOperationsInput | string | null
    valor_atividade?: NullableIntFieldUpdateOperationsInput | number | null
    descricao_atividade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atividadesUncheckedUpdateInput = {
    id_atividade?: IntFieldUpdateOperationsInput | number
    nm_atividade?: NullableStringFieldUpdateOperationsInput | string | null
    valor_atividade?: NullableIntFieldUpdateOperationsInput | number | null
    descricao_atividade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atividadesCreateManyInput = {
    id_atividade?: number
    nm_atividade?: string | null
    valor_atividade?: number | null
    descricao_atividade?: string | null
  }

  export type atividadesUpdateManyMutationInput = {
    nm_atividade?: NullableStringFieldUpdateOperationsInput | string | null
    valor_atividade?: NullableIntFieldUpdateOperationsInput | number | null
    descricao_atividade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atividadesUncheckedUpdateManyInput = {
    id_atividade?: IntFieldUpdateOperationsInput | number
    nm_atividade?: NullableStringFieldUpdateOperationsInput | string | null
    valor_atividade?: NullableIntFieldUpdateOperationsInput | number | null
    descricao_atividade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type empresasCreateInput = {
    cnpj_empresa: string
    razao_social_empresa: string
    nome_fantasia_empresa: string
    logradouro_empresa: string
    numero_empresa: string
    complemento_empresa: string
    bairro_empresa: string
    codigo_municipal_empresa: string
    municipio_empresa: string
    uf_empresa: string
    cep_empresa: string
    telefone_empresa: string
    inscricao_estadual_empresa: string
    certificado_empresa: string
    banco_empresa: string
    status_empresa: string
    email_empresa?: string | null
    versao_banco_empresa?: number | null
    modulo_empresa?: modulo_empresaCreateNestedManyWithoutEmpresasInput
    usuario_empresa?: usuario_empresaCreateNestedManyWithoutEmpresasInput
  }

  export type empresasUncheckedCreateInput = {
    id_empresa?: number
    cnpj_empresa: string
    razao_social_empresa: string
    nome_fantasia_empresa: string
    logradouro_empresa: string
    numero_empresa: string
    complemento_empresa: string
    bairro_empresa: string
    codigo_municipal_empresa: string
    municipio_empresa: string
    uf_empresa: string
    cep_empresa: string
    telefone_empresa: string
    inscricao_estadual_empresa: string
    certificado_empresa: string
    banco_empresa: string
    status_empresa: string
    email_empresa?: string | null
    versao_banco_empresa?: number | null
    modulo_empresa?: modulo_empresaUncheckedCreateNestedManyWithoutEmpresasInput
    usuario_empresa?: usuario_empresaUncheckedCreateNestedManyWithoutEmpresasInput
  }

  export type empresasUpdateInput = {
    cnpj_empresa?: StringFieldUpdateOperationsInput | string
    razao_social_empresa?: StringFieldUpdateOperationsInput | string
    nome_fantasia_empresa?: StringFieldUpdateOperationsInput | string
    logradouro_empresa?: StringFieldUpdateOperationsInput | string
    numero_empresa?: StringFieldUpdateOperationsInput | string
    complemento_empresa?: StringFieldUpdateOperationsInput | string
    bairro_empresa?: StringFieldUpdateOperationsInput | string
    codigo_municipal_empresa?: StringFieldUpdateOperationsInput | string
    municipio_empresa?: StringFieldUpdateOperationsInput | string
    uf_empresa?: StringFieldUpdateOperationsInput | string
    cep_empresa?: StringFieldUpdateOperationsInput | string
    telefone_empresa?: StringFieldUpdateOperationsInput | string
    inscricao_estadual_empresa?: StringFieldUpdateOperationsInput | string
    certificado_empresa?: StringFieldUpdateOperationsInput | string
    banco_empresa?: StringFieldUpdateOperationsInput | string
    status_empresa?: StringFieldUpdateOperationsInput | string
    email_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    versao_banco_empresa?: NullableIntFieldUpdateOperationsInput | number | null
    modulo_empresa?: modulo_empresaUpdateManyWithoutEmpresasNestedInput
    usuario_empresa?: usuario_empresaUpdateManyWithoutEmpresasNestedInput
  }

  export type empresasUncheckedUpdateInput = {
    id_empresa?: IntFieldUpdateOperationsInput | number
    cnpj_empresa?: StringFieldUpdateOperationsInput | string
    razao_social_empresa?: StringFieldUpdateOperationsInput | string
    nome_fantasia_empresa?: StringFieldUpdateOperationsInput | string
    logradouro_empresa?: StringFieldUpdateOperationsInput | string
    numero_empresa?: StringFieldUpdateOperationsInput | string
    complemento_empresa?: StringFieldUpdateOperationsInput | string
    bairro_empresa?: StringFieldUpdateOperationsInput | string
    codigo_municipal_empresa?: StringFieldUpdateOperationsInput | string
    municipio_empresa?: StringFieldUpdateOperationsInput | string
    uf_empresa?: StringFieldUpdateOperationsInput | string
    cep_empresa?: StringFieldUpdateOperationsInput | string
    telefone_empresa?: StringFieldUpdateOperationsInput | string
    inscricao_estadual_empresa?: StringFieldUpdateOperationsInput | string
    certificado_empresa?: StringFieldUpdateOperationsInput | string
    banco_empresa?: StringFieldUpdateOperationsInput | string
    status_empresa?: StringFieldUpdateOperationsInput | string
    email_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    versao_banco_empresa?: NullableIntFieldUpdateOperationsInput | number | null
    modulo_empresa?: modulo_empresaUncheckedUpdateManyWithoutEmpresasNestedInput
    usuario_empresa?: usuario_empresaUncheckedUpdateManyWithoutEmpresasNestedInput
  }

  export type empresasCreateManyInput = {
    id_empresa?: number
    cnpj_empresa: string
    razao_social_empresa: string
    nome_fantasia_empresa: string
    logradouro_empresa: string
    numero_empresa: string
    complemento_empresa: string
    bairro_empresa: string
    codigo_municipal_empresa: string
    municipio_empresa: string
    uf_empresa: string
    cep_empresa: string
    telefone_empresa: string
    inscricao_estadual_empresa: string
    certificado_empresa: string
    banco_empresa: string
    status_empresa: string
    email_empresa?: string | null
    versao_banco_empresa?: number | null
  }

  export type empresasUpdateManyMutationInput = {
    cnpj_empresa?: StringFieldUpdateOperationsInput | string
    razao_social_empresa?: StringFieldUpdateOperationsInput | string
    nome_fantasia_empresa?: StringFieldUpdateOperationsInput | string
    logradouro_empresa?: StringFieldUpdateOperationsInput | string
    numero_empresa?: StringFieldUpdateOperationsInput | string
    complemento_empresa?: StringFieldUpdateOperationsInput | string
    bairro_empresa?: StringFieldUpdateOperationsInput | string
    codigo_municipal_empresa?: StringFieldUpdateOperationsInput | string
    municipio_empresa?: StringFieldUpdateOperationsInput | string
    uf_empresa?: StringFieldUpdateOperationsInput | string
    cep_empresa?: StringFieldUpdateOperationsInput | string
    telefone_empresa?: StringFieldUpdateOperationsInput | string
    inscricao_estadual_empresa?: StringFieldUpdateOperationsInput | string
    certificado_empresa?: StringFieldUpdateOperationsInput | string
    banco_empresa?: StringFieldUpdateOperationsInput | string
    status_empresa?: StringFieldUpdateOperationsInput | string
    email_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    versao_banco_empresa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type empresasUncheckedUpdateManyInput = {
    id_empresa?: IntFieldUpdateOperationsInput | number
    cnpj_empresa?: StringFieldUpdateOperationsInput | string
    razao_social_empresa?: StringFieldUpdateOperationsInput | string
    nome_fantasia_empresa?: StringFieldUpdateOperationsInput | string
    logradouro_empresa?: StringFieldUpdateOperationsInput | string
    numero_empresa?: StringFieldUpdateOperationsInput | string
    complemento_empresa?: StringFieldUpdateOperationsInput | string
    bairro_empresa?: StringFieldUpdateOperationsInput | string
    codigo_municipal_empresa?: StringFieldUpdateOperationsInput | string
    municipio_empresa?: StringFieldUpdateOperationsInput | string
    uf_empresa?: StringFieldUpdateOperationsInput | string
    cep_empresa?: StringFieldUpdateOperationsInput | string
    telefone_empresa?: StringFieldUpdateOperationsInput | string
    inscricao_estadual_empresa?: StringFieldUpdateOperationsInput | string
    certificado_empresa?: StringFieldUpdateOperationsInput | string
    banco_empresa?: StringFieldUpdateOperationsInput | string
    status_empresa?: StringFieldUpdateOperationsInput | string
    email_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    versao_banco_empresa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type modulo_empresaCreateInput = {
    id_modulo_me: number
    empresas: empresasCreateNestedOneWithoutModulo_empresaInput
    modulos: modulosCreateNestedOneWithoutModulo_empresaInput
  }

  export type modulo_empresaUncheckedCreateInput = {
    id_modulo_me: number
    id_empresa_me: number
  }

  export type modulo_empresaUpdateInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
    empresas?: empresasUpdateOneRequiredWithoutModulo_empresaNestedInput
    modulos?: modulosUpdateOneRequiredWithoutModulo_empresaNestedInput
  }

  export type modulo_empresaUncheckedUpdateInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
    id_empresa_me?: IntFieldUpdateOperationsInput | number
  }

  export type modulo_empresaCreateManyInput = {
    id_modulo_me: number
    id_empresa_me: number
  }

  export type modulo_empresaUpdateManyMutationInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
  }

  export type modulo_empresaUncheckedUpdateManyInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
    id_empresa_me?: IntFieldUpdateOperationsInput | number
  }

  export type modulosCreateInput = {
    nm_modulo?: string | null
    modulo_empresa?: modulo_empresaCreateNestedManyWithoutModulosInput
  }

  export type modulosUncheckedCreateInput = {
    id_modulo?: number
    nm_modulo?: string | null
    modulo_empresa?: modulo_empresaUncheckedCreateNestedManyWithoutModulosInput
  }

  export type modulosUpdateInput = {
    nm_modulo?: NullableStringFieldUpdateOperationsInput | string | null
    modulo_empresa?: modulo_empresaUpdateManyWithoutModulosNestedInput
  }

  export type modulosUncheckedUpdateInput = {
    id_modulo?: IntFieldUpdateOperationsInput | number
    nm_modulo?: NullableStringFieldUpdateOperationsInput | string | null
    modulo_empresa?: modulo_empresaUncheckedUpdateManyWithoutModulosNestedInput
  }

  export type modulosCreateManyInput = {
    id_modulo?: number
    nm_modulo?: string | null
  }

  export type modulosUpdateManyMutationInput = {
    nm_modulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modulosUncheckedUpdateManyInput = {
    id_modulo?: IntFieldUpdateOperationsInput | number
    nm_modulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuario_empresaCreateInput = {
    empresas: empresasCreateNestedOneWithoutUsuario_empresaInput
    usuarios: usuariosCreateNestedOneWithoutUsuario_empresaInput
  }

  export type usuario_empresaUncheckedCreateInput = {
    id_ue?: number
    id_usuario_ue: number
    id_empresa_ue: number
  }

  export type usuario_empresaUpdateInput = {
    empresas?: empresasUpdateOneRequiredWithoutUsuario_empresaNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutUsuario_empresaNestedInput
  }

  export type usuario_empresaUncheckedUpdateInput = {
    id_ue?: IntFieldUpdateOperationsInput | number
    id_usuario_ue?: IntFieldUpdateOperationsInput | number
    id_empresa_ue?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_empresaCreateManyInput = {
    id_ue?: number
    id_usuario_ue: number
    id_empresa_ue: number
  }

  export type usuario_empresaUpdateManyMutationInput = {

  }

  export type usuario_empresaUncheckedUpdateManyInput = {
    id_ue?: IntFieldUpdateOperationsInput | number
    id_usuario_ue?: IntFieldUpdateOperationsInput | number
    id_empresa_ue?: IntFieldUpdateOperationsInput | number
  }

  export type usuariosCreateInput = {
    nm_usuario?: string | null
    ultimo_nome_usuario?: string | null
    email_usuario?: string | null
    senha_usuario?: string | null
    celular_usuario?: string | null
    status_usuario?: string | null
    usuario_empresa?: usuario_empresaCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    nm_usuario?: string | null
    ultimo_nome_usuario?: string | null
    email_usuario?: string | null
    senha_usuario?: string | null
    celular_usuario?: string | null
    status_usuario?: string | null
    usuario_empresa?: usuario_empresaUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nm_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    senha_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    celular_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    status_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_empresa?: usuario_empresaUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nm_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    senha_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    celular_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    status_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_empresa?: usuario_empresaUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    nm_usuario?: string | null
    ultimo_nome_usuario?: string | null
    email_usuario?: string | null
    senha_usuario?: string | null
    celular_usuario?: string | null
    status_usuario?: string | null
  }

  export type usuariosUpdateManyMutationInput = {
    nm_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    senha_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    celular_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    status_usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nm_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    senha_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    celular_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    status_usuario?: NullableStringFieldUpdateOperationsInput | string | null
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
    id_parametro?: SortOrder
    nm_parametro?: SortOrder
    valor_parametro?: SortOrder
    descricao_parametro?: SortOrder
  }

  export type parametrosAvgOrderByAggregateInput = {
    id_parametro?: SortOrder
    valor_parametro?: SortOrder
  }

  export type parametrosMaxOrderByAggregateInput = {
    id_parametro?: SortOrder
    nm_parametro?: SortOrder
    valor_parametro?: SortOrder
    descricao_parametro?: SortOrder
  }

  export type parametrosMinOrderByAggregateInput = {
    id_parametro?: SortOrder
    nm_parametro?: SortOrder
    valor_parametro?: SortOrder
    descricao_parametro?: SortOrder
  }

  export type parametrosSumOrderByAggregateInput = {
    id_parametro?: SortOrder
    valor_parametro?: SortOrder
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
    nm_atividade?: SortOrder
    valor_atividade?: SortOrder
    descricao_atividade?: SortOrder
  }

  export type atividadesAvgOrderByAggregateInput = {
    id_atividade?: SortOrder
    valor_atividade?: SortOrder
  }

  export type atividadesMaxOrderByAggregateInput = {
    id_atividade?: SortOrder
    nm_atividade?: SortOrder
    valor_atividade?: SortOrder
    descricao_atividade?: SortOrder
  }

  export type atividadesMinOrderByAggregateInput = {
    id_atividade?: SortOrder
    nm_atividade?: SortOrder
    valor_atividade?: SortOrder
    descricao_atividade?: SortOrder
  }

  export type atividadesSumOrderByAggregateInput = {
    id_atividade?: SortOrder
    valor_atividade?: SortOrder
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

  export type Modulo_empresaListRelationFilter = {
    every?: modulo_empresaWhereInput
    some?: modulo_empresaWhereInput
    none?: modulo_empresaWhereInput
  }

  export type Usuario_empresaListRelationFilter = {
    every?: usuario_empresaWhereInput
    some?: usuario_empresaWhereInput
    none?: usuario_empresaWhereInput
  }

  export type modulo_empresaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuario_empresaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type empresasCountOrderByAggregateInput = {
    id_empresa?: SortOrder
    cnpj_empresa?: SortOrder
    razao_social_empresa?: SortOrder
    nome_fantasia_empresa?: SortOrder
    logradouro_empresa?: SortOrder
    numero_empresa?: SortOrder
    complemento_empresa?: SortOrder
    bairro_empresa?: SortOrder
    codigo_municipal_empresa?: SortOrder
    municipio_empresa?: SortOrder
    uf_empresa?: SortOrder
    cep_empresa?: SortOrder
    telefone_empresa?: SortOrder
    inscricao_estadual_empresa?: SortOrder
    certificado_empresa?: SortOrder
    banco_empresa?: SortOrder
    status_empresa?: SortOrder
    email_empresa?: SortOrder
    versao_banco_empresa?: SortOrder
  }

  export type empresasAvgOrderByAggregateInput = {
    id_empresa?: SortOrder
    versao_banco_empresa?: SortOrder
  }

  export type empresasMaxOrderByAggregateInput = {
    id_empresa?: SortOrder
    cnpj_empresa?: SortOrder
    razao_social_empresa?: SortOrder
    nome_fantasia_empresa?: SortOrder
    logradouro_empresa?: SortOrder
    numero_empresa?: SortOrder
    complemento_empresa?: SortOrder
    bairro_empresa?: SortOrder
    codigo_municipal_empresa?: SortOrder
    municipio_empresa?: SortOrder
    uf_empresa?: SortOrder
    cep_empresa?: SortOrder
    telefone_empresa?: SortOrder
    inscricao_estadual_empresa?: SortOrder
    certificado_empresa?: SortOrder
    banco_empresa?: SortOrder
    status_empresa?: SortOrder
    email_empresa?: SortOrder
    versao_banco_empresa?: SortOrder
  }

  export type empresasMinOrderByAggregateInput = {
    id_empresa?: SortOrder
    cnpj_empresa?: SortOrder
    razao_social_empresa?: SortOrder
    nome_fantasia_empresa?: SortOrder
    logradouro_empresa?: SortOrder
    numero_empresa?: SortOrder
    complemento_empresa?: SortOrder
    bairro_empresa?: SortOrder
    codigo_municipal_empresa?: SortOrder
    municipio_empresa?: SortOrder
    uf_empresa?: SortOrder
    cep_empresa?: SortOrder
    telefone_empresa?: SortOrder
    inscricao_estadual_empresa?: SortOrder
    certificado_empresa?: SortOrder
    banco_empresa?: SortOrder
    status_empresa?: SortOrder
    email_empresa?: SortOrder
    versao_banco_empresa?: SortOrder
  }

  export type empresasSumOrderByAggregateInput = {
    id_empresa?: SortOrder
    versao_banco_empresa?: SortOrder
  }

  export type EmpresasRelationFilter = {
    is?: empresasWhereInput
    isNot?: empresasWhereInput
  }

  export type ModulosRelationFilter = {
    is?: modulosWhereInput
    isNot?: modulosWhereInput
  }

  export type modulo_empresaId_modulo_meId_empresa_meCompoundUniqueInput = {
    id_modulo_me: number
    id_empresa_me: number
  }

  export type modulo_empresaCountOrderByAggregateInput = {
    id_modulo_me?: SortOrder
    id_empresa_me?: SortOrder
  }

  export type modulo_empresaAvgOrderByAggregateInput = {
    id_modulo_me?: SortOrder
    id_empresa_me?: SortOrder
  }

  export type modulo_empresaMaxOrderByAggregateInput = {
    id_modulo_me?: SortOrder
    id_empresa_me?: SortOrder
  }

  export type modulo_empresaMinOrderByAggregateInput = {
    id_modulo_me?: SortOrder
    id_empresa_me?: SortOrder
  }

  export type modulo_empresaSumOrderByAggregateInput = {
    id_modulo_me?: SortOrder
    id_empresa_me?: SortOrder
  }

  export type modulosCountOrderByAggregateInput = {
    id_modulo?: SortOrder
    nm_modulo?: SortOrder
  }

  export type modulosAvgOrderByAggregateInput = {
    id_modulo?: SortOrder
  }

  export type modulosMaxOrderByAggregateInput = {
    id_modulo?: SortOrder
    nm_modulo?: SortOrder
  }

  export type modulosMinOrderByAggregateInput = {
    id_modulo?: SortOrder
    nm_modulo?: SortOrder
  }

  export type modulosSumOrderByAggregateInput = {
    id_modulo?: SortOrder
  }

  export type UsuariosRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type usuario_empresaCountOrderByAggregateInput = {
    id_ue?: SortOrder
    id_usuario_ue?: SortOrder
    id_empresa_ue?: SortOrder
  }

  export type usuario_empresaAvgOrderByAggregateInput = {
    id_ue?: SortOrder
    id_usuario_ue?: SortOrder
    id_empresa_ue?: SortOrder
  }

  export type usuario_empresaMaxOrderByAggregateInput = {
    id_ue?: SortOrder
    id_usuario_ue?: SortOrder
    id_empresa_ue?: SortOrder
  }

  export type usuario_empresaMinOrderByAggregateInput = {
    id_ue?: SortOrder
    id_usuario_ue?: SortOrder
    id_empresa_ue?: SortOrder
  }

  export type usuario_empresaSumOrderByAggregateInput = {
    id_ue?: SortOrder
    id_usuario_ue?: SortOrder
    id_empresa_ue?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nm_usuario?: SortOrder
    ultimo_nome_usuario?: SortOrder
    email_usuario?: SortOrder
    senha_usuario?: SortOrder
    celular_usuario?: SortOrder
    status_usuario?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nm_usuario?: SortOrder
    ultimo_nome_usuario?: SortOrder
    email_usuario?: SortOrder
    senha_usuario?: SortOrder
    celular_usuario?: SortOrder
    status_usuario?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nm_usuario?: SortOrder
    ultimo_nome_usuario?: SortOrder
    email_usuario?: SortOrder
    senha_usuario?: SortOrder
    celular_usuario?: SortOrder
    status_usuario?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
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

  export type modulo_empresaCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<modulo_empresaCreateWithoutEmpresasInput, modulo_empresaUncheckedCreateWithoutEmpresasInput> | modulo_empresaCreateWithoutEmpresasInput[] | modulo_empresaUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: modulo_empresaCreateOrConnectWithoutEmpresasInput | modulo_empresaCreateOrConnectWithoutEmpresasInput[]
    createMany?: modulo_empresaCreateManyEmpresasInputEnvelope
    connect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
  }

  export type usuario_empresaCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<usuario_empresaCreateWithoutEmpresasInput, usuario_empresaUncheckedCreateWithoutEmpresasInput> | usuario_empresaCreateWithoutEmpresasInput[] | usuario_empresaUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: usuario_empresaCreateOrConnectWithoutEmpresasInput | usuario_empresaCreateOrConnectWithoutEmpresasInput[]
    createMany?: usuario_empresaCreateManyEmpresasInputEnvelope
    connect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
  }

  export type modulo_empresaUncheckedCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<modulo_empresaCreateWithoutEmpresasInput, modulo_empresaUncheckedCreateWithoutEmpresasInput> | modulo_empresaCreateWithoutEmpresasInput[] | modulo_empresaUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: modulo_empresaCreateOrConnectWithoutEmpresasInput | modulo_empresaCreateOrConnectWithoutEmpresasInput[]
    createMany?: modulo_empresaCreateManyEmpresasInputEnvelope
    connect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
  }

  export type usuario_empresaUncheckedCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<usuario_empresaCreateWithoutEmpresasInput, usuario_empresaUncheckedCreateWithoutEmpresasInput> | usuario_empresaCreateWithoutEmpresasInput[] | usuario_empresaUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: usuario_empresaCreateOrConnectWithoutEmpresasInput | usuario_empresaCreateOrConnectWithoutEmpresasInput[]
    createMany?: usuario_empresaCreateManyEmpresasInputEnvelope
    connect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
  }

  export type modulo_empresaUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<modulo_empresaCreateWithoutEmpresasInput, modulo_empresaUncheckedCreateWithoutEmpresasInput> | modulo_empresaCreateWithoutEmpresasInput[] | modulo_empresaUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: modulo_empresaCreateOrConnectWithoutEmpresasInput | modulo_empresaCreateOrConnectWithoutEmpresasInput[]
    upsert?: modulo_empresaUpsertWithWhereUniqueWithoutEmpresasInput | modulo_empresaUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: modulo_empresaCreateManyEmpresasInputEnvelope
    set?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    disconnect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    delete?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    connect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    update?: modulo_empresaUpdateWithWhereUniqueWithoutEmpresasInput | modulo_empresaUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: modulo_empresaUpdateManyWithWhereWithoutEmpresasInput | modulo_empresaUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: modulo_empresaScalarWhereInput | modulo_empresaScalarWhereInput[]
  }

  export type usuario_empresaUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<usuario_empresaCreateWithoutEmpresasInput, usuario_empresaUncheckedCreateWithoutEmpresasInput> | usuario_empresaCreateWithoutEmpresasInput[] | usuario_empresaUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: usuario_empresaCreateOrConnectWithoutEmpresasInput | usuario_empresaCreateOrConnectWithoutEmpresasInput[]
    upsert?: usuario_empresaUpsertWithWhereUniqueWithoutEmpresasInput | usuario_empresaUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: usuario_empresaCreateManyEmpresasInputEnvelope
    set?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    disconnect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    delete?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    connect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    update?: usuario_empresaUpdateWithWhereUniqueWithoutEmpresasInput | usuario_empresaUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: usuario_empresaUpdateManyWithWhereWithoutEmpresasInput | usuario_empresaUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: usuario_empresaScalarWhereInput | usuario_empresaScalarWhereInput[]
  }

  export type modulo_empresaUncheckedUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<modulo_empresaCreateWithoutEmpresasInput, modulo_empresaUncheckedCreateWithoutEmpresasInput> | modulo_empresaCreateWithoutEmpresasInput[] | modulo_empresaUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: modulo_empresaCreateOrConnectWithoutEmpresasInput | modulo_empresaCreateOrConnectWithoutEmpresasInput[]
    upsert?: modulo_empresaUpsertWithWhereUniqueWithoutEmpresasInput | modulo_empresaUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: modulo_empresaCreateManyEmpresasInputEnvelope
    set?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    disconnect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    delete?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    connect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    update?: modulo_empresaUpdateWithWhereUniqueWithoutEmpresasInput | modulo_empresaUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: modulo_empresaUpdateManyWithWhereWithoutEmpresasInput | modulo_empresaUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: modulo_empresaScalarWhereInput | modulo_empresaScalarWhereInput[]
  }

  export type usuario_empresaUncheckedUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<usuario_empresaCreateWithoutEmpresasInput, usuario_empresaUncheckedCreateWithoutEmpresasInput> | usuario_empresaCreateWithoutEmpresasInput[] | usuario_empresaUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: usuario_empresaCreateOrConnectWithoutEmpresasInput | usuario_empresaCreateOrConnectWithoutEmpresasInput[]
    upsert?: usuario_empresaUpsertWithWhereUniqueWithoutEmpresasInput | usuario_empresaUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: usuario_empresaCreateManyEmpresasInputEnvelope
    set?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    disconnect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    delete?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    connect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    update?: usuario_empresaUpdateWithWhereUniqueWithoutEmpresasInput | usuario_empresaUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: usuario_empresaUpdateManyWithWhereWithoutEmpresasInput | usuario_empresaUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: usuario_empresaScalarWhereInput | usuario_empresaScalarWhereInput[]
  }

  export type empresasCreateNestedOneWithoutModulo_empresaInput = {
    create?: XOR<empresasCreateWithoutModulo_empresaInput, empresasUncheckedCreateWithoutModulo_empresaInput>
    connectOrCreate?: empresasCreateOrConnectWithoutModulo_empresaInput
    connect?: empresasWhereUniqueInput
  }

  export type modulosCreateNestedOneWithoutModulo_empresaInput = {
    create?: XOR<modulosCreateWithoutModulo_empresaInput, modulosUncheckedCreateWithoutModulo_empresaInput>
    connectOrCreate?: modulosCreateOrConnectWithoutModulo_empresaInput
    connect?: modulosWhereUniqueInput
  }

  export type empresasUpdateOneRequiredWithoutModulo_empresaNestedInput = {
    create?: XOR<empresasCreateWithoutModulo_empresaInput, empresasUncheckedCreateWithoutModulo_empresaInput>
    connectOrCreate?: empresasCreateOrConnectWithoutModulo_empresaInput
    upsert?: empresasUpsertWithoutModulo_empresaInput
    connect?: empresasWhereUniqueInput
    update?: XOR<XOR<empresasUpdateToOneWithWhereWithoutModulo_empresaInput, empresasUpdateWithoutModulo_empresaInput>, empresasUncheckedUpdateWithoutModulo_empresaInput>
  }

  export type modulosUpdateOneRequiredWithoutModulo_empresaNestedInput = {
    create?: XOR<modulosCreateWithoutModulo_empresaInput, modulosUncheckedCreateWithoutModulo_empresaInput>
    connectOrCreate?: modulosCreateOrConnectWithoutModulo_empresaInput
    upsert?: modulosUpsertWithoutModulo_empresaInput
    connect?: modulosWhereUniqueInput
    update?: XOR<XOR<modulosUpdateToOneWithWhereWithoutModulo_empresaInput, modulosUpdateWithoutModulo_empresaInput>, modulosUncheckedUpdateWithoutModulo_empresaInput>
  }

  export type modulo_empresaCreateNestedManyWithoutModulosInput = {
    create?: XOR<modulo_empresaCreateWithoutModulosInput, modulo_empresaUncheckedCreateWithoutModulosInput> | modulo_empresaCreateWithoutModulosInput[] | modulo_empresaUncheckedCreateWithoutModulosInput[]
    connectOrCreate?: modulo_empresaCreateOrConnectWithoutModulosInput | modulo_empresaCreateOrConnectWithoutModulosInput[]
    createMany?: modulo_empresaCreateManyModulosInputEnvelope
    connect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
  }

  export type modulo_empresaUncheckedCreateNestedManyWithoutModulosInput = {
    create?: XOR<modulo_empresaCreateWithoutModulosInput, modulo_empresaUncheckedCreateWithoutModulosInput> | modulo_empresaCreateWithoutModulosInput[] | modulo_empresaUncheckedCreateWithoutModulosInput[]
    connectOrCreate?: modulo_empresaCreateOrConnectWithoutModulosInput | modulo_empresaCreateOrConnectWithoutModulosInput[]
    createMany?: modulo_empresaCreateManyModulosInputEnvelope
    connect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
  }

  export type modulo_empresaUpdateManyWithoutModulosNestedInput = {
    create?: XOR<modulo_empresaCreateWithoutModulosInput, modulo_empresaUncheckedCreateWithoutModulosInput> | modulo_empresaCreateWithoutModulosInput[] | modulo_empresaUncheckedCreateWithoutModulosInput[]
    connectOrCreate?: modulo_empresaCreateOrConnectWithoutModulosInput | modulo_empresaCreateOrConnectWithoutModulosInput[]
    upsert?: modulo_empresaUpsertWithWhereUniqueWithoutModulosInput | modulo_empresaUpsertWithWhereUniqueWithoutModulosInput[]
    createMany?: modulo_empresaCreateManyModulosInputEnvelope
    set?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    disconnect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    delete?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    connect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    update?: modulo_empresaUpdateWithWhereUniqueWithoutModulosInput | modulo_empresaUpdateWithWhereUniqueWithoutModulosInput[]
    updateMany?: modulo_empresaUpdateManyWithWhereWithoutModulosInput | modulo_empresaUpdateManyWithWhereWithoutModulosInput[]
    deleteMany?: modulo_empresaScalarWhereInput | modulo_empresaScalarWhereInput[]
  }

  export type modulo_empresaUncheckedUpdateManyWithoutModulosNestedInput = {
    create?: XOR<modulo_empresaCreateWithoutModulosInput, modulo_empresaUncheckedCreateWithoutModulosInput> | modulo_empresaCreateWithoutModulosInput[] | modulo_empresaUncheckedCreateWithoutModulosInput[]
    connectOrCreate?: modulo_empresaCreateOrConnectWithoutModulosInput | modulo_empresaCreateOrConnectWithoutModulosInput[]
    upsert?: modulo_empresaUpsertWithWhereUniqueWithoutModulosInput | modulo_empresaUpsertWithWhereUniqueWithoutModulosInput[]
    createMany?: modulo_empresaCreateManyModulosInputEnvelope
    set?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    disconnect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    delete?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    connect?: modulo_empresaWhereUniqueInput | modulo_empresaWhereUniqueInput[]
    update?: modulo_empresaUpdateWithWhereUniqueWithoutModulosInput | modulo_empresaUpdateWithWhereUniqueWithoutModulosInput[]
    updateMany?: modulo_empresaUpdateManyWithWhereWithoutModulosInput | modulo_empresaUpdateManyWithWhereWithoutModulosInput[]
    deleteMany?: modulo_empresaScalarWhereInput | modulo_empresaScalarWhereInput[]
  }

  export type empresasCreateNestedOneWithoutUsuario_empresaInput = {
    create?: XOR<empresasCreateWithoutUsuario_empresaInput, empresasUncheckedCreateWithoutUsuario_empresaInput>
    connectOrCreate?: empresasCreateOrConnectWithoutUsuario_empresaInput
    connect?: empresasWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutUsuario_empresaInput = {
    create?: XOR<usuariosCreateWithoutUsuario_empresaInput, usuariosUncheckedCreateWithoutUsuario_empresaInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutUsuario_empresaInput
    connect?: usuariosWhereUniqueInput
  }

  export type empresasUpdateOneRequiredWithoutUsuario_empresaNestedInput = {
    create?: XOR<empresasCreateWithoutUsuario_empresaInput, empresasUncheckedCreateWithoutUsuario_empresaInput>
    connectOrCreate?: empresasCreateOrConnectWithoutUsuario_empresaInput
    upsert?: empresasUpsertWithoutUsuario_empresaInput
    connect?: empresasWhereUniqueInput
    update?: XOR<XOR<empresasUpdateToOneWithWhereWithoutUsuario_empresaInput, empresasUpdateWithoutUsuario_empresaInput>, empresasUncheckedUpdateWithoutUsuario_empresaInput>
  }

  export type usuariosUpdateOneRequiredWithoutUsuario_empresaNestedInput = {
    create?: XOR<usuariosCreateWithoutUsuario_empresaInput, usuariosUncheckedCreateWithoutUsuario_empresaInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutUsuario_empresaInput
    upsert?: usuariosUpsertWithoutUsuario_empresaInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutUsuario_empresaInput, usuariosUpdateWithoutUsuario_empresaInput>, usuariosUncheckedUpdateWithoutUsuario_empresaInput>
  }

  export type usuario_empresaCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<usuario_empresaCreateWithoutUsuariosInput, usuario_empresaUncheckedCreateWithoutUsuariosInput> | usuario_empresaCreateWithoutUsuariosInput[] | usuario_empresaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: usuario_empresaCreateOrConnectWithoutUsuariosInput | usuario_empresaCreateOrConnectWithoutUsuariosInput[]
    createMany?: usuario_empresaCreateManyUsuariosInputEnvelope
    connect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
  }

  export type usuario_empresaUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<usuario_empresaCreateWithoutUsuariosInput, usuario_empresaUncheckedCreateWithoutUsuariosInput> | usuario_empresaCreateWithoutUsuariosInput[] | usuario_empresaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: usuario_empresaCreateOrConnectWithoutUsuariosInput | usuario_empresaCreateOrConnectWithoutUsuariosInput[]
    createMany?: usuario_empresaCreateManyUsuariosInputEnvelope
    connect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
  }

  export type usuario_empresaUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<usuario_empresaCreateWithoutUsuariosInput, usuario_empresaUncheckedCreateWithoutUsuariosInput> | usuario_empresaCreateWithoutUsuariosInput[] | usuario_empresaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: usuario_empresaCreateOrConnectWithoutUsuariosInput | usuario_empresaCreateOrConnectWithoutUsuariosInput[]
    upsert?: usuario_empresaUpsertWithWhereUniqueWithoutUsuariosInput | usuario_empresaUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: usuario_empresaCreateManyUsuariosInputEnvelope
    set?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    disconnect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    delete?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    connect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    update?: usuario_empresaUpdateWithWhereUniqueWithoutUsuariosInput | usuario_empresaUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: usuario_empresaUpdateManyWithWhereWithoutUsuariosInput | usuario_empresaUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: usuario_empresaScalarWhereInput | usuario_empresaScalarWhereInput[]
  }

  export type usuario_empresaUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<usuario_empresaCreateWithoutUsuariosInput, usuario_empresaUncheckedCreateWithoutUsuariosInput> | usuario_empresaCreateWithoutUsuariosInput[] | usuario_empresaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: usuario_empresaCreateOrConnectWithoutUsuariosInput | usuario_empresaCreateOrConnectWithoutUsuariosInput[]
    upsert?: usuario_empresaUpsertWithWhereUniqueWithoutUsuariosInput | usuario_empresaUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: usuario_empresaCreateManyUsuariosInputEnvelope
    set?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    disconnect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    delete?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    connect?: usuario_empresaWhereUniqueInput | usuario_empresaWhereUniqueInput[]
    update?: usuario_empresaUpdateWithWhereUniqueWithoutUsuariosInput | usuario_empresaUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: usuario_empresaUpdateManyWithWhereWithoutUsuariosInput | usuario_empresaUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: usuario_empresaScalarWhereInput | usuario_empresaScalarWhereInput[]
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

  export type modulo_empresaCreateWithoutEmpresasInput = {
    id_modulo_me: number
    modulos: modulosCreateNestedOneWithoutModulo_empresaInput
  }

  export type modulo_empresaUncheckedCreateWithoutEmpresasInput = {
    id_modulo_me: number
  }

  export type modulo_empresaCreateOrConnectWithoutEmpresasInput = {
    where: modulo_empresaWhereUniqueInput
    create: XOR<modulo_empresaCreateWithoutEmpresasInput, modulo_empresaUncheckedCreateWithoutEmpresasInput>
  }

  export type modulo_empresaCreateManyEmpresasInputEnvelope = {
    data: modulo_empresaCreateManyEmpresasInput | modulo_empresaCreateManyEmpresasInput[]
    skipDuplicates?: boolean
  }

  export type usuario_empresaCreateWithoutEmpresasInput = {
    usuarios: usuariosCreateNestedOneWithoutUsuario_empresaInput
  }

  export type usuario_empresaUncheckedCreateWithoutEmpresasInput = {
    id_ue?: number
    id_usuario_ue: number
  }

  export type usuario_empresaCreateOrConnectWithoutEmpresasInput = {
    where: usuario_empresaWhereUniqueInput
    create: XOR<usuario_empresaCreateWithoutEmpresasInput, usuario_empresaUncheckedCreateWithoutEmpresasInput>
  }

  export type usuario_empresaCreateManyEmpresasInputEnvelope = {
    data: usuario_empresaCreateManyEmpresasInput | usuario_empresaCreateManyEmpresasInput[]
    skipDuplicates?: boolean
  }

  export type modulo_empresaUpsertWithWhereUniqueWithoutEmpresasInput = {
    where: modulo_empresaWhereUniqueInput
    update: XOR<modulo_empresaUpdateWithoutEmpresasInput, modulo_empresaUncheckedUpdateWithoutEmpresasInput>
    create: XOR<modulo_empresaCreateWithoutEmpresasInput, modulo_empresaUncheckedCreateWithoutEmpresasInput>
  }

  export type modulo_empresaUpdateWithWhereUniqueWithoutEmpresasInput = {
    where: modulo_empresaWhereUniqueInput
    data: XOR<modulo_empresaUpdateWithoutEmpresasInput, modulo_empresaUncheckedUpdateWithoutEmpresasInput>
  }

  export type modulo_empresaUpdateManyWithWhereWithoutEmpresasInput = {
    where: modulo_empresaScalarWhereInput
    data: XOR<modulo_empresaUpdateManyMutationInput, modulo_empresaUncheckedUpdateManyWithoutEmpresasInput>
  }

  export type modulo_empresaScalarWhereInput = {
    AND?: modulo_empresaScalarWhereInput | modulo_empresaScalarWhereInput[]
    OR?: modulo_empresaScalarWhereInput[]
    NOT?: modulo_empresaScalarWhereInput | modulo_empresaScalarWhereInput[]
    id_modulo_me?: IntFilter<"modulo_empresa"> | number
    id_empresa_me?: IntFilter<"modulo_empresa"> | number
  }

  export type usuario_empresaUpsertWithWhereUniqueWithoutEmpresasInput = {
    where: usuario_empresaWhereUniqueInput
    update: XOR<usuario_empresaUpdateWithoutEmpresasInput, usuario_empresaUncheckedUpdateWithoutEmpresasInput>
    create: XOR<usuario_empresaCreateWithoutEmpresasInput, usuario_empresaUncheckedCreateWithoutEmpresasInput>
  }

  export type usuario_empresaUpdateWithWhereUniqueWithoutEmpresasInput = {
    where: usuario_empresaWhereUniqueInput
    data: XOR<usuario_empresaUpdateWithoutEmpresasInput, usuario_empresaUncheckedUpdateWithoutEmpresasInput>
  }

  export type usuario_empresaUpdateManyWithWhereWithoutEmpresasInput = {
    where: usuario_empresaScalarWhereInput
    data: XOR<usuario_empresaUpdateManyMutationInput, usuario_empresaUncheckedUpdateManyWithoutEmpresasInput>
  }

  export type usuario_empresaScalarWhereInput = {
    AND?: usuario_empresaScalarWhereInput | usuario_empresaScalarWhereInput[]
    OR?: usuario_empresaScalarWhereInput[]
    NOT?: usuario_empresaScalarWhereInput | usuario_empresaScalarWhereInput[]
    id_ue?: IntFilter<"usuario_empresa"> | number
    id_usuario_ue?: IntFilter<"usuario_empresa"> | number
    id_empresa_ue?: IntFilter<"usuario_empresa"> | number
  }

  export type empresasCreateWithoutModulo_empresaInput = {
    cnpj_empresa: string
    razao_social_empresa: string
    nome_fantasia_empresa: string
    logradouro_empresa: string
    numero_empresa: string
    complemento_empresa: string
    bairro_empresa: string
    codigo_municipal_empresa: string
    municipio_empresa: string
    uf_empresa: string
    cep_empresa: string
    telefone_empresa: string
    inscricao_estadual_empresa: string
    certificado_empresa: string
    banco_empresa: string
    status_empresa: string
    email_empresa?: string | null
    versao_banco_empresa?: number | null
    usuario_empresa?: usuario_empresaCreateNestedManyWithoutEmpresasInput
  }

  export type empresasUncheckedCreateWithoutModulo_empresaInput = {
    id_empresa?: number
    cnpj_empresa: string
    razao_social_empresa: string
    nome_fantasia_empresa: string
    logradouro_empresa: string
    numero_empresa: string
    complemento_empresa: string
    bairro_empresa: string
    codigo_municipal_empresa: string
    municipio_empresa: string
    uf_empresa: string
    cep_empresa: string
    telefone_empresa: string
    inscricao_estadual_empresa: string
    certificado_empresa: string
    banco_empresa: string
    status_empresa: string
    email_empresa?: string | null
    versao_banco_empresa?: number | null
    usuario_empresa?: usuario_empresaUncheckedCreateNestedManyWithoutEmpresasInput
  }

  export type empresasCreateOrConnectWithoutModulo_empresaInput = {
    where: empresasWhereUniqueInput
    create: XOR<empresasCreateWithoutModulo_empresaInput, empresasUncheckedCreateWithoutModulo_empresaInput>
  }

  export type modulosCreateWithoutModulo_empresaInput = {
    nm_modulo?: string | null
  }

  export type modulosUncheckedCreateWithoutModulo_empresaInput = {
    id_modulo?: number
    nm_modulo?: string | null
  }

  export type modulosCreateOrConnectWithoutModulo_empresaInput = {
    where: modulosWhereUniqueInput
    create: XOR<modulosCreateWithoutModulo_empresaInput, modulosUncheckedCreateWithoutModulo_empresaInput>
  }

  export type empresasUpsertWithoutModulo_empresaInput = {
    update: XOR<empresasUpdateWithoutModulo_empresaInput, empresasUncheckedUpdateWithoutModulo_empresaInput>
    create: XOR<empresasCreateWithoutModulo_empresaInput, empresasUncheckedCreateWithoutModulo_empresaInput>
    where?: empresasWhereInput
  }

  export type empresasUpdateToOneWithWhereWithoutModulo_empresaInput = {
    where?: empresasWhereInput
    data: XOR<empresasUpdateWithoutModulo_empresaInput, empresasUncheckedUpdateWithoutModulo_empresaInput>
  }

  export type empresasUpdateWithoutModulo_empresaInput = {
    cnpj_empresa?: StringFieldUpdateOperationsInput | string
    razao_social_empresa?: StringFieldUpdateOperationsInput | string
    nome_fantasia_empresa?: StringFieldUpdateOperationsInput | string
    logradouro_empresa?: StringFieldUpdateOperationsInput | string
    numero_empresa?: StringFieldUpdateOperationsInput | string
    complemento_empresa?: StringFieldUpdateOperationsInput | string
    bairro_empresa?: StringFieldUpdateOperationsInput | string
    codigo_municipal_empresa?: StringFieldUpdateOperationsInput | string
    municipio_empresa?: StringFieldUpdateOperationsInput | string
    uf_empresa?: StringFieldUpdateOperationsInput | string
    cep_empresa?: StringFieldUpdateOperationsInput | string
    telefone_empresa?: StringFieldUpdateOperationsInput | string
    inscricao_estadual_empresa?: StringFieldUpdateOperationsInput | string
    certificado_empresa?: StringFieldUpdateOperationsInput | string
    banco_empresa?: StringFieldUpdateOperationsInput | string
    status_empresa?: StringFieldUpdateOperationsInput | string
    email_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    versao_banco_empresa?: NullableIntFieldUpdateOperationsInput | number | null
    usuario_empresa?: usuario_empresaUpdateManyWithoutEmpresasNestedInput
  }

  export type empresasUncheckedUpdateWithoutModulo_empresaInput = {
    id_empresa?: IntFieldUpdateOperationsInput | number
    cnpj_empresa?: StringFieldUpdateOperationsInput | string
    razao_social_empresa?: StringFieldUpdateOperationsInput | string
    nome_fantasia_empresa?: StringFieldUpdateOperationsInput | string
    logradouro_empresa?: StringFieldUpdateOperationsInput | string
    numero_empresa?: StringFieldUpdateOperationsInput | string
    complemento_empresa?: StringFieldUpdateOperationsInput | string
    bairro_empresa?: StringFieldUpdateOperationsInput | string
    codigo_municipal_empresa?: StringFieldUpdateOperationsInput | string
    municipio_empresa?: StringFieldUpdateOperationsInput | string
    uf_empresa?: StringFieldUpdateOperationsInput | string
    cep_empresa?: StringFieldUpdateOperationsInput | string
    telefone_empresa?: StringFieldUpdateOperationsInput | string
    inscricao_estadual_empresa?: StringFieldUpdateOperationsInput | string
    certificado_empresa?: StringFieldUpdateOperationsInput | string
    banco_empresa?: StringFieldUpdateOperationsInput | string
    status_empresa?: StringFieldUpdateOperationsInput | string
    email_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    versao_banco_empresa?: NullableIntFieldUpdateOperationsInput | number | null
    usuario_empresa?: usuario_empresaUncheckedUpdateManyWithoutEmpresasNestedInput
  }

  export type modulosUpsertWithoutModulo_empresaInput = {
    update: XOR<modulosUpdateWithoutModulo_empresaInput, modulosUncheckedUpdateWithoutModulo_empresaInput>
    create: XOR<modulosCreateWithoutModulo_empresaInput, modulosUncheckedCreateWithoutModulo_empresaInput>
    where?: modulosWhereInput
  }

  export type modulosUpdateToOneWithWhereWithoutModulo_empresaInput = {
    where?: modulosWhereInput
    data: XOR<modulosUpdateWithoutModulo_empresaInput, modulosUncheckedUpdateWithoutModulo_empresaInput>
  }

  export type modulosUpdateWithoutModulo_empresaInput = {
    nm_modulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modulosUncheckedUpdateWithoutModulo_empresaInput = {
    id_modulo?: IntFieldUpdateOperationsInput | number
    nm_modulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modulo_empresaCreateWithoutModulosInput = {
    id_modulo_me: number
    empresas: empresasCreateNestedOneWithoutModulo_empresaInput
  }

  export type modulo_empresaUncheckedCreateWithoutModulosInput = {
    id_modulo_me: number
  }

  export type modulo_empresaCreateOrConnectWithoutModulosInput = {
    where: modulo_empresaWhereUniqueInput
    create: XOR<modulo_empresaCreateWithoutModulosInput, modulo_empresaUncheckedCreateWithoutModulosInput>
  }

  export type modulo_empresaCreateManyModulosInputEnvelope = {
    data: modulo_empresaCreateManyModulosInput | modulo_empresaCreateManyModulosInput[]
    skipDuplicates?: boolean
  }

  export type modulo_empresaUpsertWithWhereUniqueWithoutModulosInput = {
    where: modulo_empresaWhereUniqueInput
    update: XOR<modulo_empresaUpdateWithoutModulosInput, modulo_empresaUncheckedUpdateWithoutModulosInput>
    create: XOR<modulo_empresaCreateWithoutModulosInput, modulo_empresaUncheckedCreateWithoutModulosInput>
  }

  export type modulo_empresaUpdateWithWhereUniqueWithoutModulosInput = {
    where: modulo_empresaWhereUniqueInput
    data: XOR<modulo_empresaUpdateWithoutModulosInput, modulo_empresaUncheckedUpdateWithoutModulosInput>
  }

  export type modulo_empresaUpdateManyWithWhereWithoutModulosInput = {
    where: modulo_empresaScalarWhereInput
    data: XOR<modulo_empresaUpdateManyMutationInput, modulo_empresaUncheckedUpdateManyWithoutModulosInput>
  }

  export type empresasCreateWithoutUsuario_empresaInput = {
    cnpj_empresa: string
    razao_social_empresa: string
    nome_fantasia_empresa: string
    logradouro_empresa: string
    numero_empresa: string
    complemento_empresa: string
    bairro_empresa: string
    codigo_municipal_empresa: string
    municipio_empresa: string
    uf_empresa: string
    cep_empresa: string
    telefone_empresa: string
    inscricao_estadual_empresa: string
    certificado_empresa: string
    banco_empresa: string
    status_empresa: string
    email_empresa?: string | null
    versao_banco_empresa?: number | null
    modulo_empresa?: modulo_empresaCreateNestedManyWithoutEmpresasInput
  }

  export type empresasUncheckedCreateWithoutUsuario_empresaInput = {
    id_empresa?: number
    cnpj_empresa: string
    razao_social_empresa: string
    nome_fantasia_empresa: string
    logradouro_empresa: string
    numero_empresa: string
    complemento_empresa: string
    bairro_empresa: string
    codigo_municipal_empresa: string
    municipio_empresa: string
    uf_empresa: string
    cep_empresa: string
    telefone_empresa: string
    inscricao_estadual_empresa: string
    certificado_empresa: string
    banco_empresa: string
    status_empresa: string
    email_empresa?: string | null
    versao_banco_empresa?: number | null
    modulo_empresa?: modulo_empresaUncheckedCreateNestedManyWithoutEmpresasInput
  }

  export type empresasCreateOrConnectWithoutUsuario_empresaInput = {
    where: empresasWhereUniqueInput
    create: XOR<empresasCreateWithoutUsuario_empresaInput, empresasUncheckedCreateWithoutUsuario_empresaInput>
  }

  export type usuariosCreateWithoutUsuario_empresaInput = {
    nm_usuario?: string | null
    ultimo_nome_usuario?: string | null
    email_usuario?: string | null
    senha_usuario?: string | null
    celular_usuario?: string | null
    status_usuario?: string | null
  }

  export type usuariosUncheckedCreateWithoutUsuario_empresaInput = {
    id_usuario?: number
    nm_usuario?: string | null
    ultimo_nome_usuario?: string | null
    email_usuario?: string | null
    senha_usuario?: string | null
    celular_usuario?: string | null
    status_usuario?: string | null
  }

  export type usuariosCreateOrConnectWithoutUsuario_empresaInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutUsuario_empresaInput, usuariosUncheckedCreateWithoutUsuario_empresaInput>
  }

  export type empresasUpsertWithoutUsuario_empresaInput = {
    update: XOR<empresasUpdateWithoutUsuario_empresaInput, empresasUncheckedUpdateWithoutUsuario_empresaInput>
    create: XOR<empresasCreateWithoutUsuario_empresaInput, empresasUncheckedCreateWithoutUsuario_empresaInput>
    where?: empresasWhereInput
  }

  export type empresasUpdateToOneWithWhereWithoutUsuario_empresaInput = {
    where?: empresasWhereInput
    data: XOR<empresasUpdateWithoutUsuario_empresaInput, empresasUncheckedUpdateWithoutUsuario_empresaInput>
  }

  export type empresasUpdateWithoutUsuario_empresaInput = {
    cnpj_empresa?: StringFieldUpdateOperationsInput | string
    razao_social_empresa?: StringFieldUpdateOperationsInput | string
    nome_fantasia_empresa?: StringFieldUpdateOperationsInput | string
    logradouro_empresa?: StringFieldUpdateOperationsInput | string
    numero_empresa?: StringFieldUpdateOperationsInput | string
    complemento_empresa?: StringFieldUpdateOperationsInput | string
    bairro_empresa?: StringFieldUpdateOperationsInput | string
    codigo_municipal_empresa?: StringFieldUpdateOperationsInput | string
    municipio_empresa?: StringFieldUpdateOperationsInput | string
    uf_empresa?: StringFieldUpdateOperationsInput | string
    cep_empresa?: StringFieldUpdateOperationsInput | string
    telefone_empresa?: StringFieldUpdateOperationsInput | string
    inscricao_estadual_empresa?: StringFieldUpdateOperationsInput | string
    certificado_empresa?: StringFieldUpdateOperationsInput | string
    banco_empresa?: StringFieldUpdateOperationsInput | string
    status_empresa?: StringFieldUpdateOperationsInput | string
    email_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    versao_banco_empresa?: NullableIntFieldUpdateOperationsInput | number | null
    modulo_empresa?: modulo_empresaUpdateManyWithoutEmpresasNestedInput
  }

  export type empresasUncheckedUpdateWithoutUsuario_empresaInput = {
    id_empresa?: IntFieldUpdateOperationsInput | number
    cnpj_empresa?: StringFieldUpdateOperationsInput | string
    razao_social_empresa?: StringFieldUpdateOperationsInput | string
    nome_fantasia_empresa?: StringFieldUpdateOperationsInput | string
    logradouro_empresa?: StringFieldUpdateOperationsInput | string
    numero_empresa?: StringFieldUpdateOperationsInput | string
    complemento_empresa?: StringFieldUpdateOperationsInput | string
    bairro_empresa?: StringFieldUpdateOperationsInput | string
    codigo_municipal_empresa?: StringFieldUpdateOperationsInput | string
    municipio_empresa?: StringFieldUpdateOperationsInput | string
    uf_empresa?: StringFieldUpdateOperationsInput | string
    cep_empresa?: StringFieldUpdateOperationsInput | string
    telefone_empresa?: StringFieldUpdateOperationsInput | string
    inscricao_estadual_empresa?: StringFieldUpdateOperationsInput | string
    certificado_empresa?: StringFieldUpdateOperationsInput | string
    banco_empresa?: StringFieldUpdateOperationsInput | string
    status_empresa?: StringFieldUpdateOperationsInput | string
    email_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    versao_banco_empresa?: NullableIntFieldUpdateOperationsInput | number | null
    modulo_empresa?: modulo_empresaUncheckedUpdateManyWithoutEmpresasNestedInput
  }

  export type usuariosUpsertWithoutUsuario_empresaInput = {
    update: XOR<usuariosUpdateWithoutUsuario_empresaInput, usuariosUncheckedUpdateWithoutUsuario_empresaInput>
    create: XOR<usuariosCreateWithoutUsuario_empresaInput, usuariosUncheckedCreateWithoutUsuario_empresaInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutUsuario_empresaInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutUsuario_empresaInput, usuariosUncheckedUpdateWithoutUsuario_empresaInput>
  }

  export type usuariosUpdateWithoutUsuario_empresaInput = {
    nm_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    senha_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    celular_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    status_usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosUncheckedUpdateWithoutUsuario_empresaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nm_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_nome_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    senha_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    celular_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    status_usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuario_empresaCreateWithoutUsuariosInput = {
    empresas: empresasCreateNestedOneWithoutUsuario_empresaInput
  }

  export type usuario_empresaUncheckedCreateWithoutUsuariosInput = {
    id_ue?: number
    id_empresa_ue: number
  }

  export type usuario_empresaCreateOrConnectWithoutUsuariosInput = {
    where: usuario_empresaWhereUniqueInput
    create: XOR<usuario_empresaCreateWithoutUsuariosInput, usuario_empresaUncheckedCreateWithoutUsuariosInput>
  }

  export type usuario_empresaCreateManyUsuariosInputEnvelope = {
    data: usuario_empresaCreateManyUsuariosInput | usuario_empresaCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type usuario_empresaUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: usuario_empresaWhereUniqueInput
    update: XOR<usuario_empresaUpdateWithoutUsuariosInput, usuario_empresaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<usuario_empresaCreateWithoutUsuariosInput, usuario_empresaUncheckedCreateWithoutUsuariosInput>
  }

  export type usuario_empresaUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: usuario_empresaWhereUniqueInput
    data: XOR<usuario_empresaUpdateWithoutUsuariosInput, usuario_empresaUncheckedUpdateWithoutUsuariosInput>
  }

  export type usuario_empresaUpdateManyWithWhereWithoutUsuariosInput = {
    where: usuario_empresaScalarWhereInput
    data: XOR<usuario_empresaUpdateManyMutationInput, usuario_empresaUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type modulo_empresaCreateManyEmpresasInput = {
    id_modulo_me: number
  }

  export type usuario_empresaCreateManyEmpresasInput = {
    id_ue?: number
    id_usuario_ue: number
  }

  export type modulo_empresaUpdateWithoutEmpresasInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
    modulos?: modulosUpdateOneRequiredWithoutModulo_empresaNestedInput
  }

  export type modulo_empresaUncheckedUpdateWithoutEmpresasInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
  }

  export type modulo_empresaUncheckedUpdateManyWithoutEmpresasInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_empresaUpdateWithoutEmpresasInput = {
    usuarios?: usuariosUpdateOneRequiredWithoutUsuario_empresaNestedInput
  }

  export type usuario_empresaUncheckedUpdateWithoutEmpresasInput = {
    id_ue?: IntFieldUpdateOperationsInput | number
    id_usuario_ue?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_empresaUncheckedUpdateManyWithoutEmpresasInput = {
    id_ue?: IntFieldUpdateOperationsInput | number
    id_usuario_ue?: IntFieldUpdateOperationsInput | number
  }

  export type modulo_empresaCreateManyModulosInput = {
    id_modulo_me: number
  }

  export type modulo_empresaUpdateWithoutModulosInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
    empresas?: empresasUpdateOneRequiredWithoutModulo_empresaNestedInput
  }

  export type modulo_empresaUncheckedUpdateWithoutModulosInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
  }

  export type modulo_empresaUncheckedUpdateManyWithoutModulosInput = {
    id_modulo_me?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_empresaCreateManyUsuariosInput = {
    id_ue?: number
    id_empresa_ue: number
  }

  export type usuario_empresaUpdateWithoutUsuariosInput = {
    empresas?: empresasUpdateOneRequiredWithoutUsuario_empresaNestedInput
  }

  export type usuario_empresaUncheckedUpdateWithoutUsuariosInput = {
    id_ue?: IntFieldUpdateOperationsInput | number
    id_empresa_ue?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_empresaUncheckedUpdateManyWithoutUsuariosInput = {
    id_ue?: IntFieldUpdateOperationsInput | number
    id_empresa_ue?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EmpresasCountOutputTypeDefaultArgs instead
     */
    export type EmpresasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpresasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModulosCountOutputTypeDefaultArgs instead
     */
    export type ModulosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModulosCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use modulo_empresaDefaultArgs instead
     */
    export type modulo_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = modulo_empresaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use modulosDefaultArgs instead
     */
    export type modulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = modulosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuario_empresaDefaultArgs instead
     */
    export type usuario_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuario_empresaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuariosDefaultArgs instead
     */
    export type usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuariosDefaultArgs<ExtArgs>

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