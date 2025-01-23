import AllProductMap from "@/app/all-products/[product]/allProductMap";
import { allProductMainData } from "@/app/all-products/[product]/allProductMainData";
import NotFound from "@/app/404"; // صفحه‌ی 404

export function generateMetadata({ params, searchParams }, parent) {
    // گرفتن داده‌ها
    const productData = allProductMainData[`/all-products/${params['product']}`]?.data;

    // اگر داده‌ها نباشند، هیچ متا دیتا رو بازنگردونیم
    if (!productData || productData.length === 0) {
        return {
            title: 'صفحه مورد نظر پیدا نشد',
            description: 'داده‌ای برای این محصول پیدا نشد.',
            seoKeywords: '',
            robots: {
                index: false,
                follow: false,
                nocache: false,
                nofollow: true,
                noindex: true
            },
            googleBot: {
                index: false,
                follow: false,
                noimageindex: false,
                nofollow: true,
                noindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        };
    }

    // در صورت وجود داده‌ها، متا دیتا رو به طور معمول برمی‌گردونیم
    const { seoTitle, seoDescription, seoKeywords } = productData[0];

    return {
        title: seoTitle,
        description: seoDescription,
        seoKeywords: seoKeywords,
        robots: {
            index: false,
            follow: false,
            nocache: false,
            nofollow: true,
            noindex: true
        },
        googleBot: {
            index: false,
            follow: false,
            noimageindex: false,
            nofollow: true,
            noindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    };
}

export default async function Page({ params }) {
    const productData = allProductMainData[`/all-products/${params['product']}`]?.data;

    // بررسی اگر داده‌ها موجود نیستند
    if (!productData || productData.length === 0) {
        return <NotFound />;
    }

    return (
        <>
            <AllProductMap
                slug={`/all-products/${params['product']}`}
                data={productData}
            />
        </>
    );
}
