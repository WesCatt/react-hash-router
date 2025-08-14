export const Link = ({to, children, ...res}) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.hash = to;
    }
    return (
        <a href={`#${to}`} onClick={handleClick} {...res}>{children}</a>
    )
}