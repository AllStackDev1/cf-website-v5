import Title from "./Title";

export default function InformationWithOthers() {
  return (
    <div>
      <Title name="Information from Other Sources" />
      <div className=" text-base text-custom_black-900-900 sm:text-xl text-left  space-y-1.5">
        We may collect Personal Information from non-affiliated third parties, such as statutory authorities, to verify your identity and for fraud
        prevention purposes when you create an account. It may include your prior address and names. The information may come from you or our
        affiliates and third parties. When providing Personal Information about others like employees, dependents, you must obtain their consent prior
        to your disclosure to Us.
        <br />
        <br />
        We may allow others to provide analytic services on our behalf and to serve advertisements on our behalf across the internet. These entities
        may use cookies, web beacons and other technology to collect information. For more information about interest-based ads, or to opt out of
        having your web browsing information used for behavioral advertising purposes, please visit their websites to view their cookie policies.
      </div>
    </div>
  );
}


