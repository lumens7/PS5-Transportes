'use client'
import Popup from "@/modal/modal_cadastro_garagem/popup"
import './conteudo_modal.css'
import CriarGaragem from "@/action/service/garagem-service";
import { useActionState } from 'react'
import { useEffect} from "react";

const inicializarForm = {sucesso: false}

export default function ModalGaragem({ isOpen, onClose }:any){

    const [state,formAction] = useActionState(CriarGaragem,inicializarForm)
    

        useEffect(()=>{
            if (state.sucesso == true && isOpen == true){
                onClose()
                
            }else{
                state.sucesso = false
            }

        },[state.sucesso,onClose])
    
    return(
        <div className="modal_garagem">
            
            <Popup isOpen = {isOpen} onClose={onClose}>
                <div className="conteudo_modal">
                    <form  action={formAction}>
                        <label htmlFor="#">Cadastro de Garagem</label>
                        <input type="text" name="nome_garagem" placeholder="Nome Garagem" />
                        <input type="text" name="rua" placeholder="rua" />
                        <input type="text" name = "bairro" placeholder="bairro" />
                        <input type="text" name = "numero" placeholder="numero" />
                        <input type="text" name = "cep" placeholder="CEP" />
                        <button type="submit">Salvar Garagem</button>
                    </form>

                </div>             
            </Popup>

        </div>
    )


}