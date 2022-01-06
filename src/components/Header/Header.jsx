import Buttons from "../Buttons/Buttons";
import "./header.css";
export default function Header({ title }) {

    const onClick = () => {
        console.log('click')
    }
    return (
        <div>
            <h2 className="titre">{title}</h2>
            <Buttons color='white' text='Ajouter' onClick={onClick} />
            <Buttons color='white' text='Exporter' />
            <Buttons color='white' text='Importer' />

        </div>
    )
}

Header.defaultProps = {
    title: 'Maint App',
}
