import { register } from 'module';
import React,{useState} from 'react'

interface InputProps {
    label?: string;
    placeholder?: string;
    register?: any;
    error?: any;
  }

const Password:React.FC<InputProps>  = ({
    label,
    placeholder,
    register,
    error,
}) => {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
    <div className="form-group">
    <label className="text-[#000000] text-sm font-bold">{label}</label>
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        className="w-full border-2 border-[#707070] placeholder-[#707070]  rounded-s-2xl rounded-e-2xl  "
        placeholder={placeholder}
        {...register}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <i className="fas fa-eye-slash text-gray-400"></i>
        ) : (
          <i className="fas fa-eye text-gray-400"></i>
        )}
      </button>
    </div>
    {error && <p className="text-red-500">{error.message}</p>}
  </div>
  </>
  )
}

export default Password