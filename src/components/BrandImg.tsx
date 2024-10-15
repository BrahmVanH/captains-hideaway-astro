import * as React from 'react';
import logo_no_trees from '../img/svg/logo_no_trees.svg?url';
import logo_with_trees from '../img/svg/logo.svg?url';

const BrandImg: React.FC = () => {
	const [isSmallView, setIsSmallView] = React.useState(false);

	const logoWidth = 125;
	const mobileLogoWidth = 75;

	const handleResize = React.useCallback(() => {
		setIsSmallView(window.innerWidth < 768);
	}, []);

	React.useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return <>{isSmallView ? <img src='/img/svg/logo.svg' alt='Brand' width={logo_with_trees} /> : <img src={logo_no_trees} alt='Brand' width={logoWidth} />}</>;
};

export default BrandImg;
