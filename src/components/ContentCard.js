import ProductLink from "@/components/ProductLink"
import guideData from "@/data/sc_data.json";
import Link from "next/link";
import Image from "next/image";
import formatSlug from "@/lib/formatSlug"

export default function ContentCard({content  }) {
    console.log(content)

    let thumbnail = content?.products?.[0]?.product?.thumbnail;
    if (!thumbnail) {
        thumbnail = content?.product?.thumbnail;
        if (!thumbnail) {
            return null;
        }
    }

    // console.log(content.products[0])
    const guides = guideData.posts;
    return (
        <div className="bg-neutral-content text-secondary p-10 m-2 rounded-lg flex flex-col">
            <div className="flex-row items-center flex p-2" m-2>

                <Image src={thumbnail}
                   alt={content.title}
                   width="0"
                   height="0"
                   sizes="100vw"
                   className="h-40 w-40 self-center m-2"></Image>
                <div className="flex flex-col p-1 m-1">
                    <h2 className="prose-xl "><Link href={formatSlug(content.slug)}>{content.title}</Link></h2>
                    <p> {content.content.slice(0,250) }...</p>
                    <div className="flex flex-row-reverse p-1 m-1">
                        <Link href={formatSlug(content.slug)}><btn className="btn btn-primary self-center">Check It Out</btn></Link>
                    </div>

                </div>

            </div>




        </div>
    )
}