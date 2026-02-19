import { useNavigate } from 'react-router-dom';

function ErrorPage(){
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/", { replace: true });
    }, 5000);

    return (
        <main className="h-dvh w-dvw grid place-items-center text-base scrollbar-hidden-global">
            <p><span className="text-2xl">404</span>Error Page Not Found!</p>
        </main>
    );
}

export default ErrorPage;