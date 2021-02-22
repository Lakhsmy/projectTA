<template>
  <div class="h-full w-ful">
    <!-- <img
      src="https://th.bing.com/th/id/R7eacd3594a4ff3ebd5326029bccc9ba1?rik=Z%2fNH3Ps6j%2f9DFA&riu=http%3a%2f%2fupj.ac.id%2fupload%2fmodule%2fgallery3%2fgallery68.jpg&ehk=yPhVP1qMo3pAWbmzb6n4hwFBJ9wIFopCN%2bQ9lM6QnH4%3d&risl=&pid=ImgRaw"
    /> -->
    <section class="flex py-20 bg-blue-600">
      <div class="container px-4 mx-auto">
        <div class="flex max-w-md mx-auto flex-col text-center">
          <div class="flex justify-between items-center mb-12 lg:mb-20">
            <a class="text-3xl font-semibold leading-none" href="/login#/login"
              ><img
                class="h-10"
                src="metis-assets/logos/metis/metis.svg"
                alt=""
                width="auto"/></a
            ><a
              class="inline-block px-4 py-3 text-xs text-white hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
              href="/login#/login"
              >Sign In</a
            >
          </div>
          <div class="mt-0 mb-8 p-8 bg-white rounded">
            <span class="text-sm text-blueGray-400">Sign Up</span>
            <h4 class="mb-6 text-3xl">Create an account</h4>
            <div class="flex -mx-3">
              <!-- <div class="flex w-1/2 px-3">
                <div class="flex w-full mb-4 px-4 bg-blueGray-50 rounded">
                  <input
                    class="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="text"
                    placeholder="First name"
                  />
                </div>
              </div> -->
              <!-- <div class="flex w-1/2 px-3">
                <div class="flex w-full mb-4 px-4 bg-blueGray-50 rounded">
                  <input
                    class="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div> -->
            </div>
            <div class="flex mb-4 px-4 bg-blueGray-50 rounded">
              <input
                class="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                type="email"
                placeholder="name@email.com"
              />
              <svg
                class="h-6 w-6 ml-4 my-auto text-blueGray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                ></path>
              </svg>
            </div>
            <div class="flex mb-6 px-4 bg-blueGray-50 rounded">
              <input
                class="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                type="password"
                placeholder="Enter your password"
              />
              <button class="ml-4">
                <svg
                  class="h-6 w-6 my-auto text-blueGray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              class="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
            >
              Sign Up
            </button>
          </div>
          <div>
            <p class="text-xs text-blue-200 text-center">
              <a class="underline hover:text-blue-100" href="#"
                >Police privacy</a
              >
              and
              <a class="underline hover:text-blue-100" href="#">Terms of Use</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Register"
};
</script>
