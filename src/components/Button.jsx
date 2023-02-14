import '../styles/app.scss';

export function Button({text, value, type, className}) {
    return <button className={className} value={value} type={type}> {text} </button>
}