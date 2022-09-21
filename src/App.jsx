
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css';
import { SignUp } from './componentes/SingUp';
import { CreateModal } from './componentes/CreateModal';
import CountDown from './componentes/CountDown';





function App() {
  return (
    <div>
      <div>
        <img src="./top-image.svg" className="w-full" alt="" />
      </div>

      <div className="flex items-center justify-around mt-14">
        <div>
          <h1 className="text-4xl text-green-500 font-bold text-center">READY TO LAUNCH IN...</h1>
          <div className="flex justify-around gap-8 mt-8 px-8 text-sm font-light">
            <p>Dias</p>
            <p>Horas</p>
            <p>Minutos</p>
            <p>Segundos</p>
          </div>
          <CountDown/>
          <div className="flex flex-col items-center mt-12 mb-[39px]">
            <p>Increva-se para saber mais sobre o lançamento</p>
            <Dialog.Root>
              <SignUp/>
              <CreateModal></CreateModal>
            </Dialog.Root>
          </div>
        </div>
        <img src="./rocket.svg" alt="" />
      </div>
      <div>
        <img src="bottom-image.svg" className="w-full" alt="" />
      </div>
      
    </div>
  )
}

export default App


