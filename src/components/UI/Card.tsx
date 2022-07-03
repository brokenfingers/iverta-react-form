import classes from './Card.module.css'

interface Props {
    children: React.ReactNode;
    className: string
}

// const Card: React.FC<Props> = (props) => {

const Card = (props: Props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>

}

export default Card;