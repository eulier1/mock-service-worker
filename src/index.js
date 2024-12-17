import { server } from "./mocks/node.js";

server.listen()

async function app() {
    const response = await fetch('https://example.com/user')
    const data = await response.json()
    console.log(data)
}

app()