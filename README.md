# React Flows

## Description

User friendly reusable flows for common frontend use-cases. Powered by Tailwind, NextJS, ShadcnUI and React Query.

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```

## Requirement Analysis

### Functional Requirements

- Implement an HTTP reverse proxy that analyzes observed HTTP transactions for suspicious client activity;
- Flags requests as potentially malicious based on two or more heuristics;
- Structure the proxy output to a log as machine-consumable data for analysis by a separate system.

### Non-Functional Requirements

- Simplicity: Focus on a simple design.
- Flexibility: The package should be flexible and allow its flows to be reused on multiple contexts.
- Performance: Each flow should have a Light House overall score greater than 90.
- Analytics: The flows should support different analytics providers abstracting then via an analytics layer.

## How to run this project

To execute this project, first copy the `.env.example` file and rename it to `.env`:

```sh
$ cp .env.example .env
```

Then, if you have docker installed on your machine, build the application containers with:

```sh
$ docker compose up
```

**P.S.**: If necessary, use the --build flag to enforce docker compose to rebuild the image

Finally, access the application by opening the following URL in your browser:

```
http://localhost:3000
```

## TO-DO

- [] Optimize docker images;
- [X] Flags requests as potentially malicious;
- [X] Implement more heuristics for maliciousness;
- [] Increase test coverage;
- [] Move blocklist to a NoSQL solution;
- [] Move token bucket to a Redis/Mem Cache;
- [] Add E2E tests.

## References

- [Rate Limiting Algorithms explained with code](https://blog.algomaster.io/p/rate-limiting-algorithms-explained-with-code);
- [Rate Limiting Design System Interview](https://www.youtube.com/watch?v=dpEOhfEEoyw);
- [Reverse Proxy vs API Gateway vs Load Balancer](https://www.youtube.com/watch?v=RqfaTIWc3LQ);
- [Microservices Correlation Id](https://hilton.org.uk/blog/microservices-correlation-id); 
- [Dockerizing PNPM Workspaces](https://pnpm.io/next/docker).
