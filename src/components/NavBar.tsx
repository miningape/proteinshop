import React from 'react';
import Link from 'next/link';

type NavBarProps = {
  // Add any props you want your navigation bar to have here.
  // For example, you may want to add a `theme` prop to style the navigation bar
  // based on the current theme.
  theme: 'light' | 'dark';
  links: Array<{
    href: string;
    label: string;
  }>;
};

const NavBar: React.FC<NavBarProps> = ({ theme, links }) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
                <span className={`nav-link nav-link-${theme}`}>{link.label} </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;