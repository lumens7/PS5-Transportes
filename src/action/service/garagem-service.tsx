'use server'
import {prisma} from '@/lib/prisma'

export default async function CriarGaragem(prevState: any,formData:FormData){

    const nome_garagem = formData.get('nome_garagem') as string
    const rua = Number(formData.get('rua'))
    const bairro = formData.get('bairro') as string
    const numero = formData.get('numero') as string
    const cep = formData.get('cep') as string

    await prisma.cadastro_garagem.create({
        data:{
            nome_garagem,
            rua,
            bairro,
            numero,
            cep,
        },
    })
    console.log("GARAGEM CADASTRADA")

    return {sucesso:true}
}
