import React from 'react';

const Test = React.lazy(() => import(/* webpackChunkName: "test" */'./test-comp'));
export default function Login() {
    return (
        <div>
            Login
            <React.Suspense fallback={<div>Loading...</div>}>
                <Test/>
            </React.Suspense>
        </div>
    );
}
