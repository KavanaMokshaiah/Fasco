// src/components/organisms/LoginForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputAtom from "../atoms/InputAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import styles from "../../styles/organisms/LoginForm.module.scss";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    toast.success("Login Successfully!");
    setTimeout(() => navigate("/home"), 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <InputAtom
        label="Email"
        type="email"
        variant="standard"
        {...register("email", { required: true })}
      />
      {errors.email && <p className={styles.error}>Email is required</p>}

      <InputAtom
        label="Password"
        type="password"
        variant="standard"
        {...register("password", { required: true })}
      />
      {errors.password && <p className={styles.error}>Password is required</p>}
      <br></br>
      <ButtonAtom
        type="submit"
        variant="contained"
        className={styles.blackButton}
      >
        Sign In
      </ButtonAtom>
      <br></br>
      <ButtonAtom
        type="button"
        variant="contained"
        className={styles.registerButton}
      >
        Register Now
      </ButtonAtom>

      <div className={styles.formLinks}>
        <a href="#">Forget Password?</a>
      </div>

      <div className={styles.info}>
        <p>FASCO Terms & Codnitions</p>
      </div>
    </form>
  );
};

export default LoginForm;
