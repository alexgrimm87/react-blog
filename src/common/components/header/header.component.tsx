import {FC} from "react";
import {Link, NavLink} from "react-router-dom";
import clsx from "clsx";
import {useAuth} from "../../../modules/auth/hooks/use-auth";
import {Container} from "../container/container.component";

interface HeaderProps {}

export const Header:FC<HeaderProps> = () => {
  const {isLoggedIn, logOut} = useAuth();

  const navLinkClasses = ({isActive}: {isActive: boolean}) =>
    clsx('py-navItem hover:text-black/60 hover:no-underline', {
      'text-black/30': !isActive,
      'text-black/80': isActive
  });

  return (
    <header>
      <nav className="px-2 py-4">
        <Container>
          <div className="flex justify-between items-center">
            <Link to="/" className="font-titillium text-2xl mr-8 text-blog-green">react blog</Link>
            <ul className="pl-0 mb-0 list-none flex">
              <li>
                <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
              </li>
              {isLoggedIn ? (
                <li className="ml-4">
                  <NavLink
                    to="/"
                    onClick={logOut}
                    className="py-navItem text-black/30 hover:text-black/60 hover:no-underline">
                    Log out
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="ml-4">
                    <NavLink to="/sign-in" className={navLinkClasses}>Sign in</NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink to="/sign-up" className={navLinkClasses}>Sign up</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};
