import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

/**
 * Métodos HTTP: Get, Post, Put, Patch and Delete
 */

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany()
  return habits
})

app.listen({
  port: 3334,
}).then(() => {
  console.log('HTTP server running')
})