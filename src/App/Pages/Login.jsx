import axios from 'axios';
import LogoIcon from '../../Assets/logoIcon.svg';
import { useAuth } from '../Components/Authenticator.jsx';
import { useState } from 'react';
import Wave from '../Components/Wave';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const Login = () => {
    const { loginData, setLoginData } = useAuth();

    const [message, setMessage] = useState('');

    const AuthRequest = async (data) => {
        const formData = new URLSearchParams();
        formData.append('username', data.target.form.username.value);
        formData.append('password', data.target.form.password.value);

        try {
            const result = await axios.post(
                'http://localhost:3000/login',
                formData
            );
            sessionData(result.data);
        } catch (err) {
            setMessage('Du skal indsætte dit email og password !');
        }
    };

    const sessionData = (data) => {
        if (data) {
            sessionStorage.setItem('token', JSON.stringify(data));
            setLoginData(data);
        }
    };

    const logOut = () => {
        sessionStorage.removeItem('token');
        setLoginData('');
    };

    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="font-mulish w-full flex flex-col md:flex-row justify-center items-center mt-16 md:h-72 md:mt-44">
                <div className="md:pr-44 md:pt-0 md:pb-20 flex flex-col items-center">
                    <img className="w-12" src={LogoIcon} />
                    <p className="text-3xl text-center pt-5 pb-7">
                        Log ind på Affaldsguiden <br></br> for at anmelde
                        stationer
                    </p>
                </div>
                {!loginData && !loginData.username ? (
                    <div>
                        <form className="flex flex-col text-center text-lg md:text-start gap-5 w-96 ">
                            <h1 className="text-4xl text-main-dark-green">
                                Log ind
                            </h1>
                            <input
                                type="email"
                                id="username"
                                placeholder="E-mail"
                                className="p-4 border-2 border-main-gray border-opacity-20 rounded-3xl outline-main-green"
                            />
                            <div className=" relative">
                                <input
                                    type={visible ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Password"
                                    className="w-full p-4 border-2 border-main-gray border-opacity-20 rounded-3xl outline-main-green"
                                />
                                <div
                                    onClick={() => setVisible(!visible)}
                                    className="w-8 absolute top-4 right-5 cursor-pointer"
                                >
                                    {' '}
                                    {visible ? (
                                        <EyeIcon className="text-main-dark-green" />
                                    ) : (
                                        <EyeSlashIcon className="text-main-dark-green" />
                                    )}
                                </div>
                            </div>
                            {message && <div>{message}</div>}
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={AuthRequest}
                                    className="text-xl text-main-white bg-main-dark-green p-3 mb-10 w-44 rounded-xl transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold"
                                >
                                    Log ind
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <p className="text-5xl pr-2">Du er logget ind !</p>
                        <button
                            onClick={logOut}
                            className="mt-10 text-xl text-main-white bg-main-dark-green p-3 w-44 rounded-xl transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold"
                        >
                            Log ud
                        </button>
                    </div>
                )}
            </div>
            <Wave />
        </>
    );
};

export default Login;
