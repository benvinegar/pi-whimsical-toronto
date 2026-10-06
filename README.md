# pi-whimsical-toronto

Toronto-inspired working messages for the [Pi coding agent](https://github.com/earendil-works/pi).

> [!IMPORTANT]
> The text in this repo was 100% AI-generated vibe slop from Kimi K2.5 in March 2026; consider it a historical account of what was in the weights. The repository owner does not endorse the content.

Instead of a generic working indicator, Pi rotates through lines such as:

```text
Mossin' on these tokens rn...
Bare computation happening styll...
Wagwan with this stack trace...
Toque on, brain engaged...
```

## Install

Install directly from GitHub:

```bash
pi install git:github.com/benvinegar/pi-whimsical-toronto
```

Then restart Pi or run `/reload` in an active session.

To try it for one invocation without saving it:

```bash
pi -e git:github.com/benvinegar/pi-whimsical-toronto
```

## Usage

No configuration or commands are required. The extension automatically:

1. chooses a random message when a turn starts;
2. displays it in Pi's working indicator; and
3. clears it when the turn ends.

If another extension also changes the working message, the last loaded handler wins.

## Remove

```bash
pi remove git:github.com/benvinegar/pi-whimsical-toronto
```

## Development

```bash
git clone https://github.com/benvinegar/pi-whimsical-toronto.git
cd pi-whimsical-toronto
pnpm install
pnpm check
```

Try the local checkout in Pi:

```bash
pi -e .
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please keep additions playful, concise, and suitable for a working-status line.

## Security

Pi extensions execute with the same operating-system permissions as Pi. Review extensions before installing them. To report a vulnerability, see [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE)
