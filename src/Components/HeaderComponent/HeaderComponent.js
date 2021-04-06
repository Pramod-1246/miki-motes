import './HeaderComponent.css';

function HeaderComponent() {
    return(
        <header>
            <div className="header-title">
                <h1>MIKI MOTTES</h1>
                <h2>ILLUSTRATOR, ANIMATOR, DESIGNER</h2>
            </div>
            <ul>
                <li className="btn-facebook">
                    <a href="https://www.facebook.com/MikiMottesDesign">Facebook</a>
                </li>
                <li className="btn-twitter">
                    <a href="https://twitter.com/mikimottes">Twitter</a>
                </li>
                <li className="btn-pintrest">
                    <a href="https://pintrest.com/mikimottes">Pintrest</a>
                </li>
                <li className="btn-dribble">
                    <a href="https://dribble.com/mikimottes">Dribble</a>
                </li>
                <li className="btn-etsy">
                    <a href="https://shop.simplehappykitchen.com">Etsy</a>
                </li>
            </ul>
        </header>
    );
}

export default HeaderComponent;