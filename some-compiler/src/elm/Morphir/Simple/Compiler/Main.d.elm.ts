export let Main: Main;

export interface ElmApp extends Object {
    ports: {}
}

export interface Main {
    init(flags?: any): ElmApp;

}


/*
 * Prelude
*/

export type Unit =
    {
        variant: "()"
    }

export type Maybe<T>
    = {
        variant: "Just"
        , _0: T
    }
    | {
        variant: "Nothing"
    }

export type Result<E, T>
    = {
        variant: "Ok"
        , _0: T
    }
    | {
        variant: "Err"
        , _0: E
    }