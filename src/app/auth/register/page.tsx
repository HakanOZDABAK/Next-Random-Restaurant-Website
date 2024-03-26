/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { useState } from 'react';

interface Register {

    userName:string,
    email:string,
    password:string,
    rePassword:string
}

const RegisterPage = () => {
    const [registerForm, setRegisterForm] = useState<Register>({
        userName:"",
        email:"",
        password:"",
        rePassword:""
    });
    const [checked, setChecked] = useState(false);
    const router = useRouter()
    const handleToRoute =(path:string) =>{
        router.push(path)
    }
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden');

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
                            <span className="text-600 font-medium">Sign up to continue</span>
                        </div>

                        <div>
                        <label htmlFor="username1" className="block text-900 text-xl font-medium mb-2">
                                Username
                            </label>
                            <InputText id="username1" type="text" placeholder="UserName" className="w-full md:w-30rem mb-5" value={registerForm.userName} onChange={(e) => setRegisterForm({...registerForm, userName: e.target.value})} style={{ padding: '1rem' }} />
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                Email
                            </label>
                            <InputText id="email1" type="text" placeholder="Email address" className="w-full md:w-30rem mb-5" value={registerForm.email} onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})} style={{ padding: '1rem' }} />

                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Password
                            </label>
                            <Password inputId="password1" value={registerForm.password} onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>
                            <label htmlFor="password2" className="block text-900 text-xl font-medium mb-2">
                                Re-Password
                            </label>
                            <InputText id="password2" type="text" placeholder="RePassword" className="w-full md:w-30rem mb-5" value={registerForm.rePassword} onChange={(e) => setRegisterForm({...registerForm, rePassword: e.target.value})} style={{ padding: '1rem' }} />
                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <div className="flex align-items-center">
                                    <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked ?? false)} className="mr-2"></Checkbox>
                                    <label htmlFor="rememberme1">Remember me</label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                    Forgot password?
                                </a>
                            </div>
                            <Button label="Sign Up" className="w-full p-3 text-xl" onClick={() => registerForm.password===registerForm.rePassword?console.log(registerForm):alert("Başarısız")}></Button>
                            <Button label="Sign In" severity="secondary" outlined className="w-full p-3 text-xl mt-3" onClick={() => handleToRoute("/auth/login")}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;