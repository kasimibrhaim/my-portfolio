import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import Image from "next/image";
import pfp from '../images/pfp1.jpg'
import Link from "next/link";

const formSchema = z.object({
  nameSurname: z.string().min(1, { message: "Full name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  // phone: z
  //   .string()
  //   .min(1, { message: "Phone is required" })
  //   .regex(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6,15}[0-9]{1}$/, {
  //     message: "Must be a valid phone number",
  //   }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type FormData = z.infer<typeof formSchema>;

export default function Form() {
  const [result, setResult] = useState<string>();
  const [resultColor, setResultColor] = useState<string>();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    // You can set default values for the form here for testing purposes
    // defaultValues: {
    //   nameSurname: "John Doe",
    //   email: "john@joe.com",
    //   phone: "5555555555",
    //   message:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    // },
  });
  const processForm = async (data: FormData) => {
    const token = await recaptchaRef?.current?.executeAsync();
    recaptchaRef?.current?.reset();
    // @ts-ignore-next-line
    data["token"] = token || "";
    const config = {
      method: "post",
      url: "/api/form",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        // Handle success. You can change the message to whatever you want.
        setResult(
          "Your message has been sent. Thank you for Getting in touch with me. I will get back to you as soon as possible."
        );
        setResultColor("text-green-500");
        // Reset the form after successful submission
        reset();
      }
    } catch (err: any) {
      // Handle errors. You can change the message to whatever you want.
      setResult(err.response.data.message + ": " + err.response.statusText);
      setResultColor("text-red-500");
    }
  };

  return (
    <div className=" flex flex-col lg:flex-row ">
    <div className="w-full lg:w-1/2">
    <div className="flex flex-col p-2 relative overflow-hidden sm:p-2">
    <div className="px-12 py-4 max-w-3xl ">
  <div className="bg-white dark:bg-gray-50/5 shadow-lg rounded-sm py-6 px-5">
    <h2 className="text-lg font-bold mb-2">Contact and & hire Kasim Ibrahim</h2>
    <p className="text-gray-600 dark:text-gray-400">You have the power to rock that form conversion rate.</p>
  </div>
  </div>
</div> 
    <form className="px-12 py-4 max-w-3xl " onSubmit={handleSubmit(processForm)} noValidate>
      <div className="mb-4">
        <div className="relative">
          {errors.nameSurname?.message ? (
            <FiUser className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2 text-red-500" />
          ) : (
            <FiUser className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2" />
          )}
          <input
            className={`shadow appearance-none outline-none border rounded w-full border-gray-800/5 py-2 pl-10  leading-tight duration-300
          ${errors.nameSurname?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
            type="text"
            placeholder="Full name"
            {...register("nameSurname")}
          />
        </div>
        {errors.nameSurname?.message && (
          <div className="text-red-500 text-xs mt-1">
            {errors.nameSurname?.message}
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className="relative">
          {errors.email?.message ? (
            <FiMail className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2 text-red-500" />
          ) : (
            <FiMail className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2" />
          )}
          <input
            className={`shadow appearance-none outline-none border rounded w-full border-gray-800/5 py-2 pl-10  leading-tight duration-300
          ${errors.email?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        {errors.email?.message && (
          <div className="text-red-500 text-xs mt-1">
            {errors.email?.message}
          </div>
        )}
      </div>
      {/* <div className="mb-4">
        <div className="relative">
          {errors.phone?.message ? (
            <FiPhone className="w-6 h-6 text-red-500 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2" />
          ) : (
            <FiPhone className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2" />
          )}
          <input
            className={`shadow appearance-none outline-none border rounded border-gray-800/5 w-full py-2 pl-10 text-gray-700 leading-tight duration-300
          ${errors.phone?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
            type="tel"
            placeholder="Phone"
            {...register("phone")}
          />
        </div>
        {errors.phone?.message && (
          <div className="text-red-500 text-xs mt-1 ">
            {errors.phone?.message}
          </div>
        )}
      </div> */}
      <div className="mb-4">
        <textarea
          className={`shadow appearance-none outline-none border rounded border-gray-800/5 w-full py-2 px-3  leading-tight duration-300
          ${errors.message?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
          placeholder="Message"
          rows={5}
          {...register("message")}
        ></textarea>
        {errors.message?.message && (
          <div className="text-red-500 text-xs mt-1">
            {errors.message?.message}
          </div>
        )}
      </div>
      <div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          size="invisible"
          ref={recaptchaRef}
          hl="en"
        />
      </div>
      <div className="flex gap-10 items-center justify-between">
        <button
          className={`${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          } bg-blue-600 hover:bg-green-400 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline duration-300`}
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit(processForm)}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        {isSubmitSuccessful && (
          <div className={`text-right ${resultColor}`}>{result}</div>
        )}
      </div>
    </form>
    </div>
    <div className="w-full lg:w-1/2 ">
    <div className="flex flex-col p-2 relative overflow-hidden sm:p-2">
    <div className="px-10 py-4 max-w-xl ">
    <Image src={pfp} alt={""} className="xl:w-[400px] xl:h-[300px]" />
    <h1 className="text-lg font-bold mb-2 text-gray-500">Contact info</h1>
    <h1 className="text-sm text-gray-600">Contact Kasim Ibrahim</h1>
    <hr className="my-4 border-gray-600 "/>
    <div className="my-4">
    <p className="text-gray-600 my-4"><span className="font-bold">Company:</span> 
    <span className="ml-1">Taifa Ai Consulting </span>
    </p>
    <p className="text-gray-600 my-4"><span className="font-bold">WhatsApp:</span> 
    <span className="ml-1">+254720166635 </span>
    </p>
    <p className="text-gray-600 my-4"><span className="font-bold">Address:</span> 
    <span className="ml-1">Nairobi, Kenya </span>
    </p>
    </div>
    <div>
      <h1 className="text-lg font-bold mb-2 text-gray-500">
        Social Networks
      </h1>
      <hr className="my-4 border-gray-600 "/>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 text-blue-400">
    <Link href={'https://www.linkedin.com/in/ibrahim-kasim/'}className="hover:underline" target="_blank">LinkedIn</Link>
    <Link href={"https://github.com/kasimibrhaim"}className="hover:underline" target="_blank">Github</Link>
    </div>
  </div>
</div> 
    </div>
    </div>
  );
}
