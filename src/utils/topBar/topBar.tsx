"use client"
export default function TopBar({ show, setShow }: any) {
    // const [show, setShow] = useState(false);
    return (
        <header className={`header ${show ? 'space-toggle' : null} z-10`}>
            <div className='header-toggle' onClick={() => setShow(!show)}>
                <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
            </div>
        </header>
    );
};




