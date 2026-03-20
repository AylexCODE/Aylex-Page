import React, { useState } from 'react';

import LoadingScreen from '../../../components/Loader/LoadingScreen';

function Minecraft(){
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() =>{
        setIsLoading(false);
    }, 2000);

    return (
        <main className="h-dvh w-dvh grid place-items-center scrollbar-hidden-global">
        {isLoading === false ? (
            <>
            <p>Hello World</p>
            </>
        ) : (
            <LoadingScreen />
        )}
        </main>
    );
}

export default Minecraft;