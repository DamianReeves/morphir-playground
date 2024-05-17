// export declare const Main: {
//     init: (flags?: any) => ElmApp
// }

export namespace Main {

    interface ElmApp extends Object {
        ports: Ports;
    }

    interface Args {
        node?: HTMLElement;
        flags?: any;
    }

    interface Subscribe<T> {
        subscribe(callback: (value: T) => any): void;
        unsubscribe(callback: (value: T) => any): void;
    }

    interface Send<T> {
        send(value: T): void;
    }

    function init(args: Args): ElmApp;

    interface Ports {
        buildFromScratch: Send<any>;
        reportProgress: Subscribe<string>;
    }
}

function init(args: Main.Args): Main.ElmApp;


// export declare class Main {
//     init(flags?: any): ElmApp;

// }



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