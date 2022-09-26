import * as Dialog from '@radix-ui/react-dialog'

// COMPONENTE DO BOTÃO PARA ATIVAR O MODAL

export function SignUp(){
    return(
        <div> 
        
            <Dialog.Trigger className=" w-40 h-12 mt-[31px] rounded-xl bg-[#6C63FF] text-white">
                Inscreva-se
            </Dialog.Trigger>
        </div>
    )
}