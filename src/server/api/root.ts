import { createTRPCRouter } from "./trpc";
import { guideData } from "./routers/guideData";
import { adminRouter } from "./routers/adminRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  guide: guideData,
  admin: adminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
