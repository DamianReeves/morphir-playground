module Morphir.Simple.Compiler.Settings exposing (..)

import Json.Decode as Decode exposing (Decoder)


type alias PackageInfo =
    { name : String
    }


decodePackageInfo : Decoder PackageInfo
decodePackageInfo =
    Decode.map PackageInfo
        (Decode.field "name" Decode.string)
