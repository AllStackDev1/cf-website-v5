import Title from "./Title";

export default function PrivacyPolicy() {
  return (
    <div>
      <Title no="4." name="PRIVACY POLICY" />
      <p className=" text-base text-custom_black-900-900 sm:text-xl text-left  space-y-1.5">
        Our{" "}
        <a href="/legal/privacy-policy" className="hover:underline text-blue-600 dark:text-blue-500">
          Privacy Policy
        </a>{" "}
        describes how we handle the personal and business information you provide to us when you register for our Website or App. You understand that
        through your use of our Website or App, you consent to the collection and use (as set forth in our{" "}
        <a href="/legal/privacy-policy" className="hover:underline text-blue-600 dark:text-blue-500">
          Privacy Policy
        </a>
        ) of this information, including the transfer of this information to the US, and/or other countries for storage, processing and use by
        Complete Farmer and our affiliates. PLEASE REVIEW OUR PRIVACY POLICY CAREFULLY.
      </p>
    </div>
  );
}
