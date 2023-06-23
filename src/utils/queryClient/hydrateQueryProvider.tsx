"use client";

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

export function HydrateClientProvider(props: HydrateProps) {
  return <RQHydrate {...props} />;
}
