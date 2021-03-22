
export interface ButtonProp {
    children: any;
    onClick?: (e: any) => void
}

export const Button = (props: ButtonProp) => {
    return <button onClick={props.onClick}>
        {props.children}
    </button>
}