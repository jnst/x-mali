# x-mali

eXample [Mali](https://mali.js.org/)

## Run server

```bash
$ yarn install
```

```bash
$ yarn start
LoL service running on 127.0.0.1:50051
```

## Run client

```bash
$ go get github.com/fullstorydev/grpcurl
$ go install github.com/fullstorydev/grpcurl/cmd/grpcurl
```

```bash
$ grpcurl -plaintext -proto league_of_legends.proto localhost:50051 lol.LoL/ListChampion
{
  "champions": [
    {
      "type": "ASSASSIN",
      "name": "Akali",
      "message": "If you look dangerous, you better be dangerous."
    },
    {
      "type": "MAGE",
      "name": "Kennen",
      "message": "The Heart of the Tempest beats eternal...and those beaten remember eternally."
    }
  ]
}
```
