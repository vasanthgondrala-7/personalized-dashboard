import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Demo',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'candidate' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        // Demo: accept any username/password — in production validate properly
        if (credentials?.username) {
          return { id: 1, name: credentials.username }
        }
        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || 'dev-secret',
  session: { strategy: 'jwt' }
})
