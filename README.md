### NFT Marketplace Frontend

## Techstack

- Next.js v14 (React 18)
- Thirdweb Wallet (Custodial Wallet & Authentication)
- Ethers.js v6
- Tailwind CSS with Shadcn/UI
- React Hook Form

### Authentication

Currently using Thirdweb in-house authentication solution.
To consider integrating Auth0 OIDC with Thirdweb Embedded Wallet in the future.

## To be determined

- Redux/Zustand/MobX (State Management)
- React Query v5

## To-do List

- SEO Optimization
- Auth0 OIDC authentication integration with Thirdweb Embedded Wallet

## How to run

1. Install node modules

```
npm i
```

2. Run development environment

```
npm run dev
```

## Responsive Design React Server Components (RSC)

Responsive design relies heavily on client-side or browser information to render appropriately. With the shift to RSC, there's currently no perfect solution but various workarounds. This project is using [@artsy/fresnel](https://github.com/artsy/fresnel) to do an initial rendering for all breakpoints and removing the unwanted dom elements on receiving the breakpoint in use.

The MediaLoader component (overlay loading screen) is added to compensate for the brief flickering due to the initial rendering.

## Caching with Next.js

Nextjs employed [caching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating) with `fetch` to improve performance. Depending on circumstances, data might not be updated as expected. On the other hand, one-off data especially with authentication should not be cache. Check `api.ts` for pre-build API calls.

## Shadcn/UI

Shadcn/UI is not like the typical UI component package where the entire component package is installed in node modules, components are added as needed. Any components that is required but not available in the <i>component library</i> can be taken from [Shadcn/UI](https://ui.shadcn.com/docs/components/accordion). The main idea here is that the style will not be tightly coupled, we own the components and have the flexibility to make changes to the original component to fit our needs.

### Component Library

'/src/components/ui' is the directory of the Shadcn/UI component library where all components copy/paste or install from [Shadcn/UI](https://ui.shadcn.com/docs/components/accordion) will be located.

<i>Note: While we have the flexibility to make changes in the library, it means that only fundamental changes should be made here that is meant to work across the board.</i>
