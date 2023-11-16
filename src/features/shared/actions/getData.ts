import {config} from "@/config/api";

export async function getData<T>(uri: string)
{
    const res = await fetch(`${config.urlBase}/${uri}`)

    if (!res.ok)
    {
        throw new Error('Failed to fetch data')
    }

    return (await res.json()).data as T
}
