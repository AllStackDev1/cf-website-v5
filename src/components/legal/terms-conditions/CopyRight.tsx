import Title from "./Title";

export default function CopyRight() {
  const data = [
    "Your physical or electronic signature;",
    "Identification of the copyrighted work(s) that you claim to have been infringed;",
    "Identification of the material on our Website or App that you claim is infringing and that you request us to remove;",
    "Sufficient information to permit us to locate such material;",
    "Your address, telephone number, and email address;",
    "A statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; and",
    "A statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner."
  ];
  return (
    <div>
      <Title no="16." name="COPYRIGHT INFRINGEMENT/DMCA NOTICE" />
      <div className=" text-base text-custom_black-900-900 sm:text-xl text-left space-y-4">
        <p>
          If you believe that any content on our Website or App violates your copyright, and you wish to have the allegedly infringing material
          removed, the following information in the form of a written notification (pursuant to the Digital Millennium Copyright Act of 1998 (“
          <u>DMCA Takedown Notice</u>”) must be provided to our designated Copyright Agent.
        </p>

        <ol className="list-[lower-alpha] space-y-2 ml-12">
          {data.map((dd, ii) => (
            <li key={ii} dangerouslySetInnerHTML={{ __html: dd }} />
          ))}
        </ol>

        <p>
          Complete Farmer’s Copyright Agent to receive DMCA Takedown Notices is Peter Yefi{" "}
          <a href="mailto:dmca@completefarmer.com" className="hover:underline text-blue-600 dark:text-blue-500">
            dmca@completefarmer.com
          </a>{" "}
          at Complete Farmer, Attn: DMCA Notice, Completefarmer Technologies Inc., 03 Abeasi Street, Accra, Ghana. You acknowledge that for us to be
          authorized to take down any content, your DMCA Takedown Notice must comply with all the requirements of this Section. Please note that,
          pursuant to 17 U.S.C. § 512(f), any misrepresentation of material fact (falsities) in a written notification automatically subjects the
          complaining party to liability for any damages, costs and attorney’s fees incurred by Complete Farmer in connection with the written
          notification and allegation of copyright infringement.
        </p>
      </div>
    </div>
  );
}
