'use server'
import {prisma} from '@/lib/prisma'

export default async function CriarGaragem(prevState: any,formData:FormData){

    const nome_garagem = formData.get('nome_garagem') as string
    const rua = formData.get('rua') as string
    const bairro = formData.get('bairro') as string
    const numero =  Number(formData.get('numero'))
    const cep = formData.get('cep') as string

    console.log(Object.keys(prisma))
    
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
