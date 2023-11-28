import {config} from "@/config/api";

export async function getData<T>(uri: string)
{
    console.log('entre');
    
    const res = await fetch(`${config.urlBase}/${uri}`)
 console.log(res);
 
    if (!res.ok)
    {
        throw new Error('Failed to fetch data')
    }

    return (await res.json()).data as T
}
