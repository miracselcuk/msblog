import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    const navbar = [
        { name: "All Posts", link: "/allposts" },
        { name: "Random Post", link: "/randompost" },
        { name: "Contact", link: "/contact" }
    ]

    return (
        <header className='w-full bg-color1 p-6 shadow-xl'>
            <div className='flex items-center space-x-8 mx-auto w-8/12 justify-between'>
                <div>
                    <Link href="/" className='flex space-x-3'>
                        <Image src="blog.svg" alt='msblog-logo' width={32} height={32} />
                        <span className="flex items-center text-3xl text-text font-mono">msblog</span>
                    </Link>
                </div>
                <nav>
                    <ul className='flex space-x-6 text-text'>
                        <li>Explore</li> {/* <-- TODO: Toggle dropdown menu --> */}
                        {navbar.map((item) => (
                            <Link href={item.link}>
                                <li>{item.name}</li>
                            </Link>
                        ))}
                        <li>
                            <Image src="search.svg" alt='msblog-logo' width={24} height={24} />
                            {/* <-- TODO: Search function --> */}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header