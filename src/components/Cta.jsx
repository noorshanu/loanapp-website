import React from "react";

function Cta() {
  return (
    <section class="bg-gradient-to-r from-[#ca0018] via-[#d7142b] to-[#7d0210] rounded-2xl container-wrapper  ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
          About Loan
          </h2>
          <p class="mb-6 font-light text-white dark:text-white md:text-lg">
          Alkhair Loan’s online personal loans offer a fast, convenient, and affordable financing solution that helps borrowers achieve their goals and overcome financial challenges. By providing flexible and accessible funding, Alkhair Loan empowers borrowers to manage unexpected expenses, seize opportunities, and enjoy stress-free moments that might otherwise be difficult to attain. With a focus on delivering value and meeting diverse needs, Alkhair Loan’s personal loans are designed to make life easier and more enjoyable, providing the financial tools needed to live one's best life.
          </p>
          <a
            href="/"
            class="text-black btn-main px-8 py-2 font-bold  rounded-lg text-sm  mr-2 mb-2  focus:outline-none "
          >
            Join Us Today{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
