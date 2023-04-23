import React from 'react';
import Link from 'next/link';

function Creator() {
  return (
    <div>
      <h1>Creator Page</h1>
      <Link href="/creator/newpodcast" passHref={true} legacyBehavior={true}><a>Go to podcast upload</a></Link>
    </div>
  );
}

export default Creator;
