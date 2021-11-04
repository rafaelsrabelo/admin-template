import Title from "./Title";

interface NavBarProps {
    title: string
    subtitle: string
}

export default function NavBar(props: NavBarProps) {
    return (
        <div>
            <Title title={props.title} subtitle={props.subtitle} />
        </div>
    )
} 