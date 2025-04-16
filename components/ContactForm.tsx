"use client";

import { sendData, TsendData } from "@/lib/types";
import styles from "./ContactForm.module.css";
import lotos from "@/public/yamako_lotos_contact.svg";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TsendData>({ resolver: zodResolver(sendData) });
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(data: TsendData) {
    const URL = process.env.NEXT_PUBLIC_URL as string;
    try {
      const res = await fetch(`${URL}/api/send`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setError("message", { message: "ups! coś poszło nie tak" });
        throw new Error(res.statusText);
      } else {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 2000);
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputContainer}>
          <div>
            <input {...register("name")} type="text" placeholder="Imię" />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>
          <div>
            <input {...register("email")} type="email" placeholder="Email" />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
        </div>
        <textarea {...register("message")} placeholder="Treść wiadomości" />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          onClick={() => window.dataLayer?.push({ event: "submitted" })}
        >
          Wyślij
        </button>
        <Image src={lotos} alt="lotos" className={styles.lotos} />
      </form>
      <AnimatePresence>
        {isSuccess && (
          <motion.p
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "130%" }}
            className={styles.success}
          >
            wysłano!
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}
