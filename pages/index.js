import Head from "next/head";
import FormContainer from "../components/FormContainer";

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>HostBeak Sign Up</title>
				<meta
					name='description'
					content='HostBeak is a web store for building an exceptional business'
				/>
				<link rel='icon' href='images/host-beak-logo.png' />
			</Head>

			<main className='flex w-full h-full relative'>
				<div className='hidden lg:flex md:bg-heroImg bg-cover bg-center bg-no-repeat h-screen w-full relative'>
					<p className='w-[50%] text-2xl absolute bottom-28 left-[30%] text-white'>
						Building exceptional services with Back Office Support and Business
						Perfomance
					</p>
				</div>
				<div className='w-full bg-heroImg bg-cover bg-center bg-no-repeat lg:bg-none'>
					<FormContainer />
				</div>
			</main>
		</div>
	);
}
