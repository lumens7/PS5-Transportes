'use client'
import Popup from "@/modal/modal_cadastro_garagem/popup"
import './conteudo_modal.css'
import CriarGaragem from "@/action/service/garagem-service" // <- nome mais claro
import { useActionState } from 'react'
import { useEffect } from "react"

const inicializarForm = { sucesso: false }

export default function ModalGaragem({ isOpen, onClose }: any) {
    const [state, formAction] = useActionState(CriarGaragem, inicializarForm)

    useEffect(() => {
        if (state.sucesso && isOpen) {
            onClose()
        }
        // Não modifique o state diretamente!
    }, [state.sucesso, isOpen, onClose])

    return (
        <div className="modal_garagem">
            <Popup isOpen={isOpen} onClose={onClose}>
                <div className="conteudo_modal">
                    <form action={formAction}>
                        <h2>Cadastro de Garagem</h2>
                        <input type="text" name="nome_garagem" placeholder="Nome da Garagem" required />
                        <input type="text" name="rua" placeholder="Rua" required />
                        <input type="text" name="bairro" placeholder="Bairro" required />
                        <input type="number" name="numero" placeholder="Número" required />
                        <input type="text" name="cep" placeholder="CEP" required pattern="\d{8}" />
                        <button type="submit">Salvar Garagem</button>
                    </form>
                </div>
            </Popup>
        </div>
    )
}
