import Link from 'next/link'

interface MenuItemProps {
    url?: string
    onClick?: (event: any) => void
    className?: string
    text: string
    icon: any
}
export default function MenuItem(props: MenuItemProps) {

    function renderizarLink() {
        return (
            <a className={`
                flex flex-col justify-center items-center text-gray-600
                h-20 w-20 ${props.className}
            `}>
                {props.icon}
                <span className={`
                    text-xs font-light 
                `}>
                    {props.text}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            hover:bg-gray-100 
            cursor-pointer
        `}>
            {props.url ? (
            <Link href={props.url}>
                {renderizarLink()}
            </Link>
            ) :(
                renderizarLink()
            )}

        </li>
    )
}