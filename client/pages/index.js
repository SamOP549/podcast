import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Welcome to podcast</h1>
      <Link href="/creator/dashboard" passHref={true} legacyBehavior={true}><a>Go to Creator Page</a></Link>
    </div>
  );
}

export default Home;


