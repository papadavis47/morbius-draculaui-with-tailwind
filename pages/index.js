import Head from "next/head";
import Image from "next/image";
import { Divider, Box, Heading, Paragraph, Text } from "@dracula/dracula-ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Morbius - A Fan Page - with DraculaUI</title>
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
      </div>
    </>
  );
}
