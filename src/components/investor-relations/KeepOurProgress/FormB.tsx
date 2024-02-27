import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";

import useYupValidationResolver from "@hooks/useYupValidationResolver";

import { Button, Input, Textarea } from "@components/utils";
import { getInTouch } from "@utils/api";

// import {  } from "@utils/api";

type Inputs = {
  email: string;
  subject: string;
  message: string;
};

const schema = yup
  .object()
  .shape({
    message: yup.string().required(),
    subject: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const FormB = () => {
  const resolver = useYupValidationResolver(schema);

  const defaultValues = {
    email: "",
    subject: "",
    message: "",
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<Inputs>({
    resolver,
    defaultValues,
  });


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await getInTouch({
        to: "info@completefarmer.com",
        subject: data.subject,
        text: `
        ${data.message}

        Warm regards,
        ${data.email}  
        `,
      });

      if (res.statusCode === 200) {
        reset({});
        toast(res.message, { type: "success" });
        // ReactGA.event({
        //   category: "Button Click",
        //   action: "Send"
        // });

        // window.metapixelfunction("send", "details_send", {});

        // window.dataLayer.push({
        //   event: "details_send"
        // });
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      toast(error.message || error?.data?.message || "Unknown server error", {
        type: "error",
      });
    }
  };


  return (
    <div className="w-full xl:w-1/2 flex flex-col items-end">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full xl:w-[400px] p-6 rounded-lg bg-white space-y-14"
      >
        <div className="flex flex-col justify-start items-start space-y-4">
          <Input
            title="Email"
            id="email"
            className="bg-white"
            {...register("email")}
            placeholder="Enter email address"
          />

          <Input
            id="subject"
            title="Subject"
            className="bg-white"
            {...register("subject")}
            placeholder="Enter subject"
          />

          <Textarea
            title="Message"
            id="message"
            {...register("message")}
            className="bg-white"
            placeholder="500 maximum characters"
          />
        </div>

        <Button
          type="submit"
          title="Submit"
          isLoading={isSubmitting}
          isDisabled={!isDirty || !isValid}
          className="xl:!w-fit px-8 py-4 !rounded-xl"
        />
      </form>
    </div>
  );
};

export default FormB;
