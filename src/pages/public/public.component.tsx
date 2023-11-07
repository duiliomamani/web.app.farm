import LayoutBase from '../shared/layout/layout.base';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';

const Public = () => {
    return (
        <LayoutBase >
            <Header />
            <Home />
            <Footer />
        </LayoutBase>
    );
};

export default Public;
