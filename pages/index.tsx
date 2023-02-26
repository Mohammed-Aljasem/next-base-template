import Link from 'next/link'
import PageLayout from "../components/wrappers/PageLayout";

const IndexPage = () => (
  <PageLayout meta_title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </PageLayout>
)

export default IndexPage
