import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // styled-components SWC ilə aktivləşdirilir
  },
  images: {
    domains: ["example.com"], // lazım olsa domen əlavə edə bilərsən
  },
};

export default nextConfig;
