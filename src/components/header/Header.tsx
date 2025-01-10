import HeaderLogo from "./HeaderLogo";
import HeaderCart from "./HeaderCart";
import HeaderCartDetails from "./HeaderCartDetails";
import HeaderDropDown from "./HeaderDropdown";
import Avatar from "../generalComponents/Avatar";
import HeaderFrame from "./HeaderFrame";
import HeaderNovbar from "./HeaderNovbar";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
	return (
		<header>
		<HeaderNovbar>
			<HeaderLogo/>
			<HeaderMenu/>
			<HeaderFrame>
			<HeaderDropDown>
			<HeaderCart/>
			<HeaderCartDetails/>
			</HeaderDropDown>
			<Avatar/>
			</HeaderFrame>
		</HeaderNovbar>
		</header>
	)
};
export default Header;