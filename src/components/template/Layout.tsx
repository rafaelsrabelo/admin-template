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
        <div>
            <SideBar />
            <NavBar title={props.title} subtitle={props.subtitle}/>
            <Content>
                {props.children}
            </Content>
        </div>
    )
} 