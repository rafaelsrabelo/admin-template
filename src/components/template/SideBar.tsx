import { IconAdjust, IconHome, IconLogout, IconNotification } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideBar() {
    return (
        <aside className={`
            flex flex-col
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className={`
                flex-grow
            `}>
                <MenuItem url="/" text="Inicio" icon={IconHome} />
                <MenuItem url="/ajustes" text="Ajustes" icon={IconAdjust} />
                <MenuItem url="/notificacoes" text="Notificações" icon={IconNotification} />
            </ul>
            <ul>
                <MenuItem 
                    text="Sair" icon={IconLogout} 
                    onClick={() => console.log('logout')}
                    className={`
                        text-red-600
                        hover:bg-red-400 hover:text-white
                    `} 
                />
            </ul>
        </aside>
    )
}