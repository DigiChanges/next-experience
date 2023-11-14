import "./page.css";

import WelcomeTemplate from "@/features/welcome/template/WelcomeTemplate";
import Layout from "@/layout/Layout";

export default function Page()
{
    return (
        <Layout className="section">
            <WelcomeTemplate />
        </Layout>
    )
}
