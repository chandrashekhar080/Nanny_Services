import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Card, CardContent } from "../../../../components/ui/card";

export const LoginFormSection = (): JSX.Element => {

const navigate = useNavigate();
const [error,setError] = React.useState<string>("");
const [selectedUser, setSelectedUser] = React.useState<string>("");

const userType = localStorage.getItem("UserType");
console.log(userType);


const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     if (selectedUser === ""){
        setError("Please select user type!");
        return;
     }
    
     if (!localStorage.getItem("UserType")){
        setError("Please Register first!");
        return;
     }   
     if(!userType) return;
     if(userType === "family") navigate("/family");
     if(userType === "care-giver") navigate("/care-giver");
}

  return (
    <section className="flex flex-col justify-center items-center w-full h-full px-5 sm:px-6 py-10 bg-[#f8f8f8]">
      <Card className="w-full max-w-[510px] rounded-xl shadow-[0px_0px_20px_#ef4a6b1a] bg-white overflow-hidden">
        <CardContent className="flex flex-col items-center gap-3 p-4 sm:p-8">
          {/* Header */}
          <div className="flex flex-col gap-1 w-full">
            <h1 className="font-bold text-lg [font-family:'Poppins',Helvetica] text-heading">
              Log in
            </h1>
            <p className="text-sm text-description [font-family:'Poppins',Helvetica]">
              Enter your email to log in
            </p>
          </div>

          {/* Form */}
          <form  onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            {/* Login as */}
            <div className="flex flex-col gap-1.5 w-full">
              <Label
                htmlFor="login-as"
                className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-base"
              >
                Login as
              </Label>
              <Select value={selectedUser} onValueChange={(value)=>setSelectedUser(value)}>
                <SelectTrigger
                  id="login-as"
                  className={`w-full bg-white rounded-lg border border-[#ededed] [font-family:'Poppins',Helvetica] font-normal text-heading text-sm`}
                >
                  <SelectValue placeholder="Select user type"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="family"
                    className="[font-family:'Poppins',Helvetica] font-normal text-heading text-sm"
                  >
                    Family
                  </SelectItem>
                  <SelectItem
                    value="care-giver"
                    className="[font-family:'Poppins',Helvetica] font-normal text-heading text-sm"
                  >
                    Caregiver
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 w-full">
              <Label
                htmlFor="email"
                className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-base"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter email"
                className={`w-full bg-white rounded-lg border border-[#ededed] [font-family:'Poppins',Helvetica] font-normal text-description text-sm px-4`}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5 w-full">
              <Label
                htmlFor="password"
                className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-base"
              >
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                className={`w-full bg-white rounded-lg border border-[#ededed] [font-family:'Poppins',Helvetica] font-normal text-description text-sm px-4`}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}

            {/* Submit */}
            <Button
              type="submit"
              className={`w-full bg-primary-1 hover:bg-primary-1/90 text-white rounded-lg`}
            >
              Login
            </Button>
          </form>

          {/* Terms */}
          <p className="text-xs text-center text-sub-heading [font-family:'Poppins',Helvetica]">
            <span className="text-[#1e1e1e]">By continuing, you agree to our </span>
            <span onClick={() => navigate("/terms-of-service")} className="text-[#ff999a] cursor-pointer">Terms of Use</span>
            <span className="text-[#1e1e1e]"> and </span>
            <span onClick={() => navigate("/privacy-policy")} className="text-[#ff999a] cursor-pointer">Privacy Policy</span>
          </p>

          {/* Social Login */}
          <div className="flex flex-col gap-3 w-full">
            <Button
              variant="outline"
              className={`w-full bg-white rounded-xl border border-[#b7b7b7] flex items-center justify-center gap-3 hover:bg-white/90`}
            >
              <img className="w-6 h-6" alt="Google" src="/assets/img/google-icon.png" />
              <span className="[font-family:'Poppins',Helvetica] font-medium text-heading text-sm">
                Continue with Google
              </span>
            </Button>

            <Button
              variant="outline"
              className={`w-full bg-white rounded-xl border border-[#b7b7b7] flex items-center justify-center gap-3 hover:bg-white/90`}
            >
              <img className="w-6 h-6" alt="Apple" src="/assets/img/apple-icon.png" />
              <span className="[font-family:'Poppins',Helvetica] font-medium text-heading text-sm">
                Continue with Apple
              </span>
            </Button>
          </div>

          {/* Register link */}
          <div className="flex gap-1 justify-center w-full">
            <p className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-sm">
              Don't have an account?
            </p>
            <Link
              to="/join-now"
              className="[font-family:'Poppins',Helvetica] font-bold text-[#ff999a] text-sm cursor-pointer hover:underline"
            >
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
