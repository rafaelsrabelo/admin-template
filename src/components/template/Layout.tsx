import Content from "./Content";
import NavBar from "./Navbar";
import SideBar from "./SideBar";

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex h-screen w-screen
        `}>
            <SideBar />
            <div className={`
                flex flex-col w-full p-7
                bg-gray-300
            `}>
                <NavBar title={props.title} subtitle={props.subtitle}/>
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
} 