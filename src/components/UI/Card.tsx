import classes from './Card.module.css'

interface Props {
    children: JSX.Element;
    className: string
}

// const Card: React.FC<Props> = (props) => {

const Card = (props: Props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>

}

export default Card;