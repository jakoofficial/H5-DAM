// @ts-ignore
export async function load({ fetch }) {
    const res = await fetch('http://127.0.0.1:8000/api/hello');

    if (!res.ok) {
        throw new Error('FastAPI request failed');
    }

    const data = await res.json();
    console.log(data)

    return {
        message: data.Hello
    };
}
