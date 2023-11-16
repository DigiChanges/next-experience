
import Layout from "@/layout/Layout";
import {IItemApiResponse} from "@/features/items/models";
import {getData} from "@/features/shared/actions/getData";
import {List} from "@/features/items/organisms/List";

export default async function Page()
{
    const data = await getData<IItemApiResponse[]>('api/items');

    return (
        <>
            <Layout className={''}>
                { <List items={data}/> }
            </Layout>
        </>
  )
}
