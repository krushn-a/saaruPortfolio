import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Krushna Portfolio",
        title:
            "Krushna Prasad Marndi | Game Developer | Unity, C++, C# in Jabalpur",
        description:
            "Discover Krushna Prasad Marndi, an Electronics and Communication undergrad with strong foundation in C++ and system design. Experienced in building interactive systems (games, simulations) with focus on performance, real-time problem solving, and user-centric design. Explore the portfolio showcasing Unity game projects including Left In The Dark, Hungry Rabbit, Hells Kitchen, and Midnight Crumbs.",
        images: [
            {
                url: "/og-image.webp",
                alt: "Krushna Prasad Marndi | Game Developer | Unity, C++, C#",
                height: 630,
                width: 1200,
            },
        ],
    },
    title:
        "Krushna Prasad Marndi | Game Developer | Unity, C++, C# in Jabalpur",
    description:
        "Discover Krushna Prasad Marndi, an Electronics and Communication undergrad with strong foundation in C++ and system design. Experienced in building interactive systems (games, simulations) with focus on performance, real-time problem solving, and user-centric design. Explore the portfolio showcasing Unity game projects including Left In The Dark, Hungry Rabbit, Hells Kitchen, and Midnight Crumbs.",
    keywords:
        "Krushna Prasad Marndi, Game Developer, Unity Developer, C++ Developer, C# Developer, Unity Engine, Blender, Game Development, Interactive Systems, Visual Novel, Portfolio, Jabalpur, Madhya Pradesh, India, PDPM IIITDM Jabalpur, OOP, Design Patterns, System Optimization, Collision Detection",
    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    authors: {
        name: "Krushna Prasad Marndi",
        url: "https://github.com/codeofkrushna",
    },
};
