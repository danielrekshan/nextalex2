import React from 'react';
import Link from 'next/link';

function Header(props) {

	return <React.Fragment>
        <Link href='/'>New Alexandria</Link>
        <Link href='/commentaries'>Commentaries</Link>
        <Link href='/texts'>Texts</Link>
        <Link href='/about'>About</Link>

	</React.Fragment>
}

export default Header;