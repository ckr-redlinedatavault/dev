// Normalize optional basePath for deployments under a subpath (e.g., /portal)
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const normalizedBasePath =
  rawBasePath && rawBasePath !== "/"
    ? rawBasePath.startsWith("/")
      ? rawBasePath
      : `/${rawBasePath}`
    : undefined;

const nextConfig: any = {
  turbopack: {
    root: __dirname,
  },
  basePath: normalizedBasePath,
  assetPrefix: normalizedBasePath,
  trailingSlash: true,
};

export default nextConfig;
