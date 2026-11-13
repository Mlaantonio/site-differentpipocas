// src/app/actions.ts
'use server'

import { prisma } from '../lib/prisma'

export async function enviarMensagem(formData: FormData) {
  const nome = (formData.get('nome') as string) || 'Visitante'
  const contato = (formData.get('contato') as string) || 'Não informado'
  const mensagem = formData.get('mensagem') as string

  if (!mensagem) return { erro: 'Mensagem em branco' }

  try {
    await prisma.mensagens.create({
      data: {
        nome,
        contato,
        mensagem,
      },
    })

    return { sucesso: true }
  } catch {
    return { erro: 'Falha ao salvar a mensagem' }
  }
}