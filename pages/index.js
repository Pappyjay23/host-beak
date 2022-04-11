import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import InputForm from "../components/InputForm";
import ShortBorder from "/public/images/border-accessory.png";

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

			<main className='flex w-full relative'>
				<div className='bg-heroImg h-screen w-full relative'>
					<p className='w-[40%] text-2xl absolute bottom-48 left-[30%] text-white'>
						Building exceptional services with Back Office Support and Business
						Perfomance
					</p>
				</div>
				<div className='w-full p-12'>
					<form>
						<h3 className='font-bold text-xl text-deep-blue mb-1'>
							Create Account
						</h3>
						<p className='text-grey mb-8'>Build an exceptional business</p>
						<div className='flex w-full justify-between mb-6'>
							<div className='w-[48%] flex flex-col'>
								<InputForm
									title='First Name'
									type='text'
									id='first-name'
									placeholder='Enter your first name'
								/>
							</div>
							<div className='w-[48%] flex flex-col'>
								<InputForm
									title='Last Name'
									type='text'
									id='last-name'
									placeholder='Enter your last name'
								/>
							</div>
						</div>
						<div className='mb-6'>
							<InputForm
								title='Phone Number'
								type='number'
								id='phone-no'
								placeholder='Enter your phone number'
							/>
						</div>
						<div className='mb-6'>
							<InputForm
								title='Email Address'
								type='email'
								id='email'
								placeholder='Enter your email'
							/>
						</div>
						<div className='mb-6'>
							<InputForm
								title='Password'
								type='password'
								id='password'
								placeholder='Enter your password'
							/>
						</div>
						<div className='mb-6 flex justify-between w-full'>
							<div className='flex items-center'>
								<input
									type='checkbox'
									className='border-border-grey bg-box-grey mr-2 flex items-center'
								/>
								<p className='text-xs'>Remember me</p>
							</div>
							<Link href='/'>
								<a className='text-xs text-light-blue'>Forgot Password?</a>
							</Link>
						</div>
						<Link href='/dashboard'>
							<a>
								<button
									type='submit'
									className='text-white bg-light-blue py-4 rounded-md mb-4 w-full flex justify-center'>
									Sign Up
								</button>
							</a>
						</Link>
						<div className='flex justify-between'>
							<Image
								src={ShortBorder}
								alt='Short Border'
								width={150}
								height={2}
								objectFit='contain'
							/>
							<p className='text-xs'>
								Got an account?{" "}
								<Link href='/'>
									<a className='ml-2 text-light-blue'>Sign in</a>
								</Link>
							</p>
							<Image
								src={ShortBorder}
								alt='Short Border'
								width={150}
								height={2}
								objectFit='contain'
							/>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}
