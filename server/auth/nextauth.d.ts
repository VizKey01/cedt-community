/* eslint-disable @typescript-eslint/no-unused-vars */
import { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import type ReturnedUserData from "~/server/auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user?: {
            id: string
            _token: string
        }
    }

    interface User {
        id: string
        _token: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        _token: string
    }
}