import List from "@/features/items/organisms/List";
import Layout from "@/features/Layout";
import {IItemApiResponse} from "@/features/items/models";
import {getData} from "@/features/shared/actions/getData";


export default async function Page()
{
    const data = await getData<IItemApiResponse[]>('api/items')

    return (
        <>
            <Layout className={''}>
                {/*{ <List starships={data}/> }*/}
            </Layout>
        </>
  )
}
