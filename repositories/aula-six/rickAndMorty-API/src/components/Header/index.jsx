export const Header = ({logoGitHub}) => {
    return(
        <header>
            <div className="header-wrapper">
                <a href=""><span>Rodrigo Junior</span>
                <img src={logoGitHub} alt="Logo do github" />
                </a>
            </div>
        </header>
    )
}