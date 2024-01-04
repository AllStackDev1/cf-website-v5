import Title from "./Title";

export default function Conducts() {
  const data = [
    {
      title: "Required Conduct",
      list: [
        "Comply with all applicable laws, including, without limitation, tax laws, export control laws and regulatory requirements;",
        "Provide accurate information to Complete Farmer and update from time to time as may be necessary;",
        "Review our <a href='/legal/privacy-policy class='hover:underline text-blue-600 dark:text-blue-500'>Privacy Policy</a>; and",
        "Review and comply with notices sent by Complete Farmer, if any, concerning our Website or App."
      ]
    },
    {
      title: "Prohibited Conduct",
      list: [
        "Creating more than one Account;",
        `Duplicate, license, sublicense, publish, broadcast, transmit, distribute, perform, display, sell, rebrand, otherwise transfer or
        commercially exploit our Website or App (excluding any User content);`,
        `Reverse engineer, decompile, disassemble, decipher, capture screen shots, or otherwise attempt to derive the source code for any
        underlying intellectual property used to provide our Website or App, or any part thereof;`,
        `Utilize information, content or any data you view on and/or obtain from our Website or App to provide any service that is competitive
        with us;`,
        `Imply or state, directly or indirectly, that you are affiliated with or endorsed by Complete Farmer unless you have entered into a
        written agreement with us;`,
        `Adapt, modify, or create derivative works based on our Website or App or technology underlying our Website or App, or other users’
        content, in whole or in part;`,
        "Rent, lease, loan, trade, sell/re-sell access to our Website or App or any information therein, or the equivalent, in whole or part;",
        "Access, reload, or “refresh” or make any other request to transactional servers that are beyond generally accepted usage of web-based applications;",
        `Use manual or automated software, devices, scripts robots, other means or processes to “scrape”, “crawl” or “spider” any web pages
        contained in the Website;`,
        "Use automated methods to add contacts or send messages;",
        "Engage in “framing”, “mirroring”, or otherwise simulating the appearance or function of our Website;",
        "Attempt to or actually access our Website or App by any means other than through the interface provided by Complete Farmer;",
        "Attempt to or actually override any security component included in or underlying our Website or App;",
        `Engage in any action that interferes with the proper working of or places an unreasonable load on our infrastructure, including but
        not limited to unsolicited communications, attempts to gain unauthorized access, or transmission or activation of computer viruses;`,
        `Remove any copyright, trademark, or other proprietary rights notices contained in or on our Website or App, including those of both
        Complete Farmer or any of our licensors;`,
        "Use any information obtained from our Website or App to harass, abuse, or harm another user; or",
        `Engage in any action or promote any content that is harmful, offensive, illegal, unlawful, discriminatory, dangerous, profane, or
        abusive.`
      ]
    }
  ];
  return (
    <div>
      <Title no="10." name="REQUIRED CONDUCT AND PROHIBITED CONDUCT " />
      <div className=" text-base text-custom_black-900-900 sm:text-xl text-left space-y-4">
        <p>As a condition to access our Website or App, you agree to this Agreement and to strictly observe the following: </p>

        <ol className="list-[lower-alpha] space-y-6 ml-12">
          {data.map((d, i) => (
            <li key={i} className="space-y-4">
              <span>{d.title}</span>
              <ol className="list-[lower-roman] space-y-1 ml-4">
                {d.list.map((dd, ii) => (
                  <li key={ii} dangerouslySetInnerHTML={{ __html: dd }} />
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
