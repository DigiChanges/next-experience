
import Layout from "@/layout/Layout";
import {IItemApiResponse} from "@/features/items/models";
import {getData} from "@/features/shared/actions/getData";
import {ItemsTemplate} from "@/features/items/template/ItemsTemplate";

export default async function Page()
{
    const data = await getData<IItemApiResponse[]>('api/items');

    return (
        <>
            <Layout className={''}>
                <ItemsTemplate items={data}/>
            </Layout>
        </>
  )
}
