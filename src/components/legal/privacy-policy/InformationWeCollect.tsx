import Title from "./Title";

export default function InformationWeCollect() {
  return (
    <div>
      <Title name="Information We Collect Automatically from Our Services" />
      <div className=" text-base text-custom_black-900-900 sm:text-xl text-left  space-y-1.5">
        When you access or use our Services, we automatically collect information about you as follows:
        <br />
        <br />
        Log Information: We log information about your use of our Services, including the type of browser you use, access times, pages viewed, your IP
        address and the page you visited before navigating to our Services.
        <br />
        <br />
        Device Information: We collect information about the computer or mobile device you use to access our Services, including the hardware model,
        operating system and version, unique device identifiers and mobile network information.
        <br />
        <br />
        Location Information: We may collect your location information from your mobile device with your prior consent. Also, we have incorporated
        Google Maps into our Services, and you may consent to the collection of location information by Google Maps in connection with your use of
        this maps&#39; service. Any information collected via your use of Google Maps will be transmitted directly to Google and is not collected by Us.
        Please refer to Google&#39;s Privacy Policy for details about their collection, use and sharing of this information. If you initially consent to
        the collection of location information by Complete Farmer or Google Maps within our mobile application, you may be able to subsequently stop
        the collection of information through your device operating system settings or through your online account settings. If either of these
        opt-out options are not available to you, you may also disable location information by following the standard uninstall process to remove our
        mobile application from your device.
        <br />
        <br />
        How We Respond to &#39;Do not Track&#39; Signals: We allow &#39;Do not Track&#39; browser configurations. We use cookies and other tracking technologies, and
        &#39;Do not Track&#39; status may alter the available services with certain browsers, when these tracking functionalities are used to provide
        services. We do not alter the information our applications attempt to collect based on your &#39;Do not Track&#39; configuration.
      </div>
    </div>
  );
}


