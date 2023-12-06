export function Jumbotron({id,style,className,children}) {
    const bgStyle = style ?? { backgroundColor: "#e9ecef" };
    return (
        <div id={id} className={`py-3 ${className}`} style={bgStyle}>
            <div className='container py-5'>
                {children}
            </div>
        </div>
    );
}