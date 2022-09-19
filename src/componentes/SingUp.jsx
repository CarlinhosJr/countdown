import * as Dialog from '@radix-ui/react-dialog'

export function SignUp(){
    return(
        <div> {/*DIV BOX INFO (ver borda top gradients)*/}
        
            <Dialog.Trigger className=" w-40 h-12 mt-[31px] rounded-xl bg-[#6C63FF] text-white">
                Inscreva-se
            </Dialog.Trigger>
        </div>
    )
}