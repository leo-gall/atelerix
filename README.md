# Posthog as Code
**Posthog as Code** (short: “phac”) is a simple CLI that allows you to convert the state of your Posthog application into code and thus make it reproducible. I built it because I was annoyed that the Posthog feature flags JSON editor was so small. I also found that in open source projects where state is stored in feature flags, it can be difficult for contributors to develop because they have to reproduce the JSON schema exactly.

## Developing

```sh
# Run dev version
pnpm start

# Build production version
pnpm build

# Package as tarball (optional)
pnpm pack

# Install globally
pnpm link --global
```