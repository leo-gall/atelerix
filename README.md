# Atelerix
**Atelerix** (Latin name of the African hedgehog) is a simple CLI that allows you to represent Posthog feature flags as code and make them reproducible. I built it because I was annoyed that the Posthog feature flags JSON editor was so small. I also found that in open source projects where state is stored in feature flags, it can be difficult for contributors to develop because they have to reproduce the JSON schema exactly.

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
