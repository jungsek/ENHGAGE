
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/common/Button";
import { IMAGES } from "@/constants/assets";
import { useAppStore } from "@/store/useAppStore";

export const SignInScreen = () => {
    const { setStep } = useAppStore();

    return (
        <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto">
            <div className="p-4">
                <button
                    onClick={() => setStep("welcome")}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <ChevronLeft size={32} strokeWidth={3} />
                </button>
            </div>
            <div className="flex-1 px-6 flex flex-col items-center pt-4">
                <h2 className="text-2xl font-feather text-gray-700 mb-8 text-center">
                    create your account
                </h2>

                <div className="w-full space-y-4">
                    <Button
                        variant="outline"
                        onClick={() => setStep("profile")}
                        fullWidth
                        uppercase={false}
                        className="text-gray-700 text-lg font-bold"
                    >
                        <div className="flex items-center justify-center gap-2 w-full">
                            <span>Login with</span>
                            <img
                                src={IMAGES.singpassLogo}
                                alt="Singpass"
                                className="h-[18px] object-contain translate-y-[1px]"
                            />
                        </div>
                    </Button>

                    <div className="flex items-center gap-4 my-2">
                        <div className="h-[2px] bg-gray-200 flex-1 rounded-full"></div>
                        <span className="text-gray-300 text-sm font-extrabold uppercase">
                            or
                        </span>
                        <div className="h-[2px] bg-gray-200 flex-1 rounded-full"></div>
                    </div>

                    <Button
                        variant="outline"
                        onClick={() => setStep("profile")}
                        fullWidth
                        uppercase={false}
                        className="text-gray-700 text-lg font-bold"
                        leftIcon={
                            <img
                                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                                alt="Google"
                                className="h-5 w-5 object-contain"
                            />
                        }
                    >
                        Continue with Google
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => setStep("profile")}
                        fullWidth
                        uppercase={false}
                        className="text-gray-700 text-lg font-bold"
                        leftIcon={
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                alt="Apple"
                                className="h-5 w-5 object-contain"
                            />
                        }
                    >
                        Continue with Apple
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => setStep("profile")}
                        fullWidth
                        uppercase={false}
                        className="text-gray-700 text-lg font-bold"
                        leftIcon={
                            <img
                                src="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png"
                                alt="Gmail"
                                className="h-5 w-5 object-contain"
                            />
                        }
                    >
                        Continue with Email
                    </Button>
                </div>

                <p className="mt-auto mb-8 text-xs text-center text-gray-400 max-w-xs mx-auto font-bold font-din">
                    By continuing, you agree to our Terms of Service &
                    Privacy Policy
                </p>
                <div className="h-12"></div>
            </div>
        </div>
    );
};
