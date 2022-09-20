import * as Dialog from '@radix-ui/react-dialog'

export function CreateModal(){
    return(
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/40 inset-0 fixed"/>

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -translate- rounded-lg w-[488px] shadow-lg shadow-black/30">
                <form>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Seu nome:</label>
                        <input type="text" name="" id="" placeholder='Digite seu nome' className="bg-zinc-200 py-3 px-4 rounded text-sm text-black placeholder:text-zinc-700" required/>
                    </div>
                    <div className="mt-6 flex flex-col gap-2">
                        <label htmlFor="">Seu email:</label>
                        <input type="email" name="" id="" placeholder='Digite seu email' className="bg-zinc-200 py-3 px-4 rounded text-sm text-black placeholder:text-zinc-700" required/>
                    </div>

                    <footer className="mt-6 flex justify-end gap-4">
                        <Dialog.Close className="bg-red-500 rounded-md px-5 h-12 font-semibold hover:bg-red-600">Close</Dialog.Close>
                        <button type="submit" className="bg-emerald-500 rounded-md px-5 h-12 font-semibold flex items-center gap-3 hover:bg-emerald-600">Send</button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}