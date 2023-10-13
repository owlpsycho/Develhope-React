export function UncontrolledLogin (){
    function handleSubmit(event) {
        event.preventDefault()

        //METODO 1
        //(sintassi standard)
        // const username = event.target.elements.namedItem("username").value
        // const password = event.target.elements.namedItem("password").value
        // const remember = event.target.elements.namedItem("remember").checked

        //(altra sintassi)
        // const username = event.target.username.value
        // const password = event.target.password.value
        // const remember = event.target.remember.checked


        // const data = {
        //     username,
        //     password,
        //     remember
        // }


        // METODO 2
        const formData = new formData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            remember: formData.get("remember") === "on" ? true : false
        }
        //VANTAGGI: È facile da usare, gestisce dati di form piû complessi e supportata da tutti i principali browser
        //SVANTAGGI: Non supportato da browser più vecchi ed è più difficile eseguire il debug
        

        console.log(data);

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="username" />
                <input name="password" type="password"/>
                <input name="remember" type="checkbox" />
                <button>Login</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
}