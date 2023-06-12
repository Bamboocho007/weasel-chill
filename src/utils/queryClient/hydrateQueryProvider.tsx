"use client";

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

function HydrateClientProvider(props: HydrateProps) {
  return <RQHydrate {...props} />;
}

export default HydrateClientProvider;
