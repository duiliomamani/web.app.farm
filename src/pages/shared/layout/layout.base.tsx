import React, { CSSProperties } from "react";

import '../../../index.scss';
// import Loading from "../../components/common/loading.component";

interface Props {
    children?: any;
    className?: string;
    style?: CSSProperties
}

const LayoutBase: React.FC<Props>  = (props): any => {
    // const [isLoading, setIsLoading] = useState(true)
  
    // useEffect(() => {
    //   setTimeout(() => setIsLoading(false), 1000)
    // }, [])

    // if (isLoading) {
    //     return (<main key="main" className="vh-100"><Loading /></main>)
    // }

    return (<main key="main" className={`vh-100 ${props.className}`} style={props.style}>{props.children}</main>);
};

export default LayoutBase;