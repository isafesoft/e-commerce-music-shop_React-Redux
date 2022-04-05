import Footer from "./Footer";
import Header from "./Header";


const Layout = ({children , path, title}) => {

    return(
        <>
            <Header path={path} title= {title}/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout