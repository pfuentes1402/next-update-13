import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Abouut page',
 description: 'SEO Description',
};

export default function AboutPage() {
    return <>
        <span className="text-6xl">AboutPage </span>
    </>
}
