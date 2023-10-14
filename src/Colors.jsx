import Color from './Color'

const Colors = () => {
           

    return (
        <>
            <ul>
                <Color items={[
                    {id:1, name:"Rosso"},
                    {id:2, name:"Nero"},
                    {id:3, name:"Viola"},
                    {id:4, name:"Bianco"},
                    {id:5, name:"Arancione"}
                ]}/>
        </ul>
        </>
    )
}

export default Colors;