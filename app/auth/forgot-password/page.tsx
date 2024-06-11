
import { CardWrapper } from '@/components/auth/card-wrapper';
import { ResetPasswordForm } from '@/components/auth/reset-password-form';
import { DarkMode } from "@/components/ui/dark-mode";
const ResetPasswordPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
    <div className="hidden md:flex flex-col items-center justify-center  text-white">
      <img src="/white-bg.webp" alt="Geometry" className="w-full h-[100vh] object-cover" />
      <div className="absolute top-[0] left-[0]">
        <img src="/logo.png" alt="Company Logo" className="w-[10rem] h-[10rem]" />
      </div>
      <div className="absolute top-[1rem] right-[1rem]">
        <DarkMode />
      </div>
    </div>
    <ResetPasswordForm />
  </div>
  );
}

export default ResetPasswordPage;