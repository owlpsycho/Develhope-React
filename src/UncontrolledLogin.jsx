export function UncontrolledLogin (){
    function handleSubmit(event) {
        event.preventDefault()

        // METODO 1
        // const username = event.target.elements.namedItem("username").value
        // const password = event.target.elements.namedItem("password").value
        // const remember = event.target.elements.namedItem("remember").checked

        // const data = {
        //     username,
        //     password,
        //     remember
        // }


        // METODO 2
        const formData = new formData(event.targer)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            remember: formData.get("remember") === "on" ? true : false
        }

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