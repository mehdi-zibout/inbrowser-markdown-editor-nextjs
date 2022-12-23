import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { useState } from "react";
import MainComponent from "./MainComponent";

const Home: NextPage = () => {
  const [isLight, setIsLight] = useState(
    typeof window === "undefined"
      ? false
      : () => {
          const x = localStorage.getItem("theme");
          if (x === "dark") return false;
          if (x === "light") return true;
          localStorage.setItem("theme", "dark");
          return false;
        }
  );
  const session = useSession();
  const initDocs = trpc.docs.getDocs.useQuery(
    undefined, // no input
    { enabled: session.data?.user !== undefined }
  );
  const feed: { data: ClientDocument[] } = {
    data: [
      {
        notinDb: true,
        updatedAt: new Date(),
        title: "welcome",
        content:
          "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
      },
      {
        notinDb: true,
        updatedAt: new Date(),
        title: "untitled-document",
        content: "",
      },
    ],
  };

  if (
    session.status === "loading" ||
    (session.status === "authenticated" && initDocs.isLoading)
  ) {
    // add unmount fade out
    return (
      <div className="flex h-screen w-screen  items-center justify-center bg-800 ">
        <svg
          width="130"
          height="12"
          className="scale-[2] animate-pulse "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M.75 11c.075-.56.147-1.12.218-1.68.07-.56.145-1.168.224-1.823l.443-3.585c.085-.645.163-1.255.232-1.83L2.086.305h2.497c.24.61.47 1.193.687 1.75.217.558.433 1.112.649 1.662l1.274 3.27h.165l1.238-3.262.626-1.65c.208-.546.427-1.136.656-1.77h2.468a1660.544 1660.544 0 0 0 .457 3.615l.458 3.6c.08.65.156 1.25.229 1.8.072.55.143 1.11.213 1.68h-2.347c-.09-.75-.178-1.463-.263-2.138-.085-.675-.162-1.308-.232-1.897l-.315-2.535h-.165l-.93 2.722c-.225.67-.451 1.334-.679 1.991-.227.658-.439 1.276-.634 1.856H6.502a322.988 322.988 0 0 0-.952-2.523c-.17-.448-.337-.887-.502-1.317L4.013 4.43h-.165L3.54 6.95c-.07.595-.146 1.232-.229 1.91l-.258 2.14H.75Zm19.017 0a578.89 578.89 0 0 0 1.186-3.623L22.16 3.71c.215-.665.41-1.264.585-1.797.175-.532.35-1.069.525-1.609h3.18a469.731 469.731 0 0 0 1.11 3.406l1.193 3.675c.195.59.393 1.197.596 1.822l.581 1.792h-2.55a515.072 515.072 0 0 0-.982-3.45l-1.47-5.152h-.18l-1.486 5.1c-.16.555-.328 1.136-.506 1.744l-.514 1.758h-2.475Zm2.58-2.236.263-1.845h4.777l.21 1.846h-5.25ZM36.28 11V.303h4.103c.87 0 1.606.097 2.208.29.603.192 1.06.513 1.373.963.312.45.468 1.063.468 1.838 0 .615-.12 1.167-.363 1.657s-.632.878-1.166 1.163c-.535.284-1.236.427-2.1.427l.952-.9 1.455 2.145.72 1.061.746 1.103c.243.357.456.673.642.948H42.52c-.27-.42-.53-.822-.78-1.207-.25-.385-.492-.76-.727-1.125l-1.733-2.73 1.462 1.117H38.26V5.293h1.785c.4 0 .736-.049 1.009-.146.272-.098.478-.264.618-.499s.21-.558.21-.968c0-.304-.044-.55-.134-.738a1.092 1.092 0 0 0-.364-.439 1.314 1.314 0 0 0-.51-.21 3.08 3.08 0 0 0-.567-.052h-3.36L38.703.694V11H36.28Zm21.538 0c-.33-.476-.642-.922-.934-1.34-.293-.417-.579-.828-.859-1.233l-1.41-2.018h-.69V4.475h.66l1.26-1.65a293.263 293.263 0 0 0 1.92-2.52h2.843a323.846 323.846 0 0 0-2.693 3.315L56.22 5.712l-.045-1.088 1.883 2.603a1120.463 1120.463 0 0 1 1.904 2.633c.316.434.593.815.833 1.14h-2.977Zm-6.158 0V.303h2.46V11h-2.46Zm15.478 0V.303H71.39c.815 0 1.54.118 2.175.353.635.235 1.171.58 1.609 1.035a4.525 4.525 0 0 1 1.001 1.669c.23.657.345 1.408.345 2.253 0 .755-.101 1.46-.304 2.112a4.523 4.523 0 0 1-.967 1.713c-.443.49-1.026.873-1.751 1.148-.726.275-1.61.412-2.656.412H67.138Zm2.467-1.973h1.23c.77 0 1.381-.15 1.834-.45.452-.3.779-.71.978-1.23.2-.52.3-1.108.3-1.763 0-.494-.058-.944-.176-1.35a2.869 2.869 0 0 0-.54-1.046 2.374 2.374 0 0 0-.926-.675c-.375-.157-.823-.236-1.343-.236h-1.357V9.027Zm18.635 2.175c-.965 0-1.8-.149-2.505-.446-.705-.298-1.285-.705-1.74-1.223a5.116 5.116 0 0 1-1.016-1.773 6.574 6.574 0 0 1-.334-2.1c0-1.04.206-1.982.619-2.824A4.743 4.743 0 0 1 85.109.83c.817-.495 1.839-.743 3.064-.743.93 0 1.742.144 2.437.431a4.759 4.759 0 0 1 1.736 1.196c.463.51.809 1.1 1.039 1.77.23.67.345 1.39.345 2.16 0 1.065-.211 2.015-.634 2.85a4.769 4.769 0 0 1-1.856 1.98c-.815.486-1.815.728-3 .728Zm-.037-2.033c.495 0 .927-.093 1.297-.28.37-.188.677-.447.922-.777.246-.33.43-.706.552-1.129.122-.422.183-.869.183-1.338 0-.495-.066-.957-.198-1.384a3.428 3.428 0 0 0-.578-1.121 2.67 2.67 0 0 0-.926-.75 2.796 2.796 0 0 0-1.252-.27c-.486 0-.914.092-1.287.277a2.63 2.63 0 0 0-.933.769c-.25.327-.44.704-.57 1.128a4.59 4.59 0 0 0-.195 1.35c0 .475.062.924.187 1.347.125.422.311.797.559 1.125.247.327.557.585.93.772.372.188.808.281 1.308.281ZM102.105 11l-.45-1.698c-.16-.603-.31-1.162-.45-1.677l-.885-3.36a559.983 559.983 0 0 1-1.05-3.96h2.782a1464.078 1464.078 0 0 0 .855 4.125l.743 3.638h.188l.765-3.683c.09-.42.183-.863.28-1.33l.297-1.407.285-1.343h2.632a1211.281 1211.281 0 0 0 .886 4.095l.794 3.668h.18l.758-3.69c.13-.63.269-1.307.416-2.032l.416-2.04h2.79c-.175.635-.356 1.302-.543 2.002-.188.7-.361 1.345-.522 1.935l-.915 3.382c-.144.53-.297 1.096-.457 1.696-.16.6-.313 1.16-.458 1.68h-3c-.14-.6-.287-1.23-.442-1.887-.155-.657-.3-1.284-.435-1.878l-.795-3.39h-.188l-.764 3.39c-.13.59-.272 1.217-.424 1.882-.153.665-.297 1.292-.431 1.882h-2.858Zm18.605 0V.304h2.153c.5.73.972 1.42 1.417 2.067l1.335 1.946 1.74 2.52h.18V.304h2.317V11h-2.13c-.41-.6-.84-1.225-1.29-1.875l-1.477-2.13-1.763-2.55h-.172V11h-2.31Z"
            fill="#FFF"
          />
        </svg>
      </div>
    );
  }
  if (session.status === "authenticated" && initDocs.isSuccess)
    feed.data = initDocs.data;
  return (
    <>
      <Head>
        <title>In-browser markdown editor</title>
        <meta
          name="description"
          content="A full stack solution to Frontend Mentor in-browser markdown editor challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainComponent
        isLight={isLight}
        setIsLight={setIsLight}
        sessionData={session.data}
        initDocs={feed.data}
      />
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();
//   const docs = trpc.docs.getDocs.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );
//   return (
// <div className="flex flex-col items-center justify-center gap-4">
//   <p className="text-2xl text-white text-center">
//     {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//   </p>

//   <button
//     className="bg-white/10 text-white hover:bg-white/20 rounded-full px-10 py-3 font-semibold no-underline transition"
//     onClick={sessionData ? () => signOut() : () => signIn()}
//   >
//     {sessionData ? "Sign out" : "Sign in"}
//   </button>
// </div>
//     <div className=""></div>
//   );
// };

export type ClientDocument = {
  notinDb?: boolean;
  updatedAt: Date;
  title: string;
  content: string;
};
