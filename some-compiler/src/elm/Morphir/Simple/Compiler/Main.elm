port module Morphir.Simple.Compiler.Main exposing (..)

import Json.Decode as Decode exposing (field, string)
import Json.Encode as Encode


port buildFromScratch : (Encode.Value -> msg) -> Sub msg


port reportProgress : String -> Cmd msg


type alias Flags =
    ()


type alias Model =
    ()


type Msg
    = BuildFromScratch Decode.Value


init : Flags -> ( Model, Cmd Msg )
init _ =
    ( (), Cmd.none )


main : Platform.Program () () Msg
main =
    Platform.worker
        { init = \_ -> ( (), Cmd.none )
        , update = update
        , subscriptions = subscriptions
        }


subscriptions : () -> Sub Msg
subscriptions _ =
    Sub.batch
        [ buildFromScratch BuildFromScratch ]


update : Msg -> () -> ( (), Cmd Msg )
update msg model =
    ( model, Cmd.batch [ process msg, report msg ] )


process : Msg -> Cmd Msg
process msg =
    Cmd.none


report : Msg -> Cmd Msg
report msg =
    case msg of
        BuildFromScratch value ->
            reportProgress "Building from scratch"
