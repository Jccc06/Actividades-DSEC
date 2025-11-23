import './css/style.css';

export default function Card({props}){
    return(
        <>
            <card>
                <div>
                   <h2> {props.titulo} </h2>
                   {props.children}
                </div>
            </card>
        </>
    );
}