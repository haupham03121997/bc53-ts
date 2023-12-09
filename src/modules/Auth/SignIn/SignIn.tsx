import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { signinAPI } from "../../../apis/user.api";

interface FormValues {
  taiKhoan: string;
  matKhau: string;
}

const SignIn: React.FC = (): JSX.Element => {
  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
  });

  const { data, isPending } = useMutation({
    mutationFn: (values: FormValues) => signinAPI(values),
  });

  const onSubmit = (formValues: FormValues) => {
    console.log("formValues", formValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Tài khoản"
          style={{ padding: 16, width: 500, marginBottom: 24 }}
          {...register("taiKhoan")}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          style={{ padding: 16, width: 500, marginBottom: 24 }}
          {...register("matKhau")}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            backgroundColor: "green",
            color: "#fff",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default SignIn;
