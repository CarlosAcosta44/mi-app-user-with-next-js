import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites(){
    const userApiTarget = (process.env.USERS_API_TARGET ?? "http://localhost:3000").replace(/\/$/, "");
    return [
      {
        source: "/api/users",
        destination: `${userApiTarget}/api/users`,
      },
      {
        source: "/api/users/:path*",
        destination: `${userApiTarget}/api/users/:path*`,  
      }
    ];
  }
};

export default nextConfig;
