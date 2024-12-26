import Link from "next/link";

export default async function Home() {
	const url = await fetch("https://jsonplaceholder.typicode.com/users");
	const res = await url.json();
	console.log(res);
	return (
		<main>
			{res.map((user: any, index: number) => (
				<div key={index}>
					<Link href={`${user.id}`}>
						<h1 className='text-6xl'>
							{user.id} &nbsp; &nbsp;
							{user.name}
						</h1>
					</Link>
				</div>
			))}
		</main>
	);
}
