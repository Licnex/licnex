import { Flex, Heading, SmartImage, SmartLink, Text } from '@/once-ui/components';
import { Posts } from '@/components/blog/Posts';
import { baseURL, blog, routes } from '@/app/resources'
import { Metadata } from 'next';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
): Promise<Metadata> {

	const title = blog.title;
	const description = blog.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Blog() {
	return (
		<Flex
			fillWidth maxWidth="m"
			direction="column">
			<Heading
				marginBottom="l"
				variant="display-strong-s">
				{blog.title}
			</Heading>
			<Posts range={[1,2]}/>
		</Flex>
	);
}
