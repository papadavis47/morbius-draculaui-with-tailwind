import Head from "next/head";
import Image from "next/image";
import { Divider, Box, Heading, Paragraph, Text } from "@dracula/dracula-ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Morbius - A Fan Page</title>
        <meta name='description' content='A Fan Page using Tailwind and DraculaUI' />
        <link rel='icon' href='/dracula-fav.ico' />
      </Head>
      <div className='flex flex-col items-center h-screen w-screen bg-black'>
        <div className='flex flex-col items-center mt-4 py-4'>
          <Heading color='red'>Morbius</Heading>
          <Box color='yellowPink' p='md' className='mt-6 rounded-2xl'>
            <Text color='blackSecondary'>A new film from Marvel!</Text>
          </Box>
        </div>
        <Box m='md' className='w-1/2'>
          <Divider color='orange' />
        </Box>
        <Image
          src='/morbius-poster.jpg'
          alt='Morbius-Movie Poster'
          height={300}
          width={200}
          quality='90'
          className='hover:scale-75 transition-transform'
        />
      </div>
    </>
  );
}
