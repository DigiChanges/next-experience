import "./page.css";

import Welcome from "@/features/Welcome";
import Layout from "@/features/Layout";

export default function Page()
{
    return (
        <Layout className="section">
            <Welcome />
        </Layout>
    )
}
