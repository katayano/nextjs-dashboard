import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { email, z } from 'zod';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    // Add Credentials provider for username/password authentication
    // 他にもOAuthやemail認証なども追加できる
    providers: [Credentials({
        async authorize(credentials) {
            const parsedCredentials = z
                .object({
                    email: z.string().email(),
                    password: z.string().min(6)
                })
                .safeParse(credentials);
        },
    }),
    ],
});