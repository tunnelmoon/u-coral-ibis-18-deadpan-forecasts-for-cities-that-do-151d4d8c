[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/tunnelmoon/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/tunnelmoon/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

# Deadpan Forecasts for Cities That Do Not Exist

A make.fun bounty entry. One absurd but believable weather line for an invented city, delivered in the voice of a dry TV meteorologist.

## The forecast

> Tarnwick sees a high of 61 and a low of 58, with a 90 percent chance of rain that falls sideways out of sheer spite.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, after validating it is a single line of 1 to 160 characters.

## Run

```sh
node main.ts
```

## License

MIT. See [LICENSE](LICENSE).
