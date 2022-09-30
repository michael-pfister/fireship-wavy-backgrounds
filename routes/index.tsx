import { Head } from "$fresh/runtime.ts";
import { css } from "twind/css";
import { apply, tw } from "twind";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nice Curves</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js">
        </script>
      </Head>
      <section class="bg-blue-700">
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          cupiditate placeat ipsum alias voluptatibus fugiat, nostrum laboriosam
          ipsa? A officiis hic eius iste facere libero dolorem modi illo
          eligendi in.
        </p>
        <div
          class={tw`absolute h-56 w-full bottom-0 ${
            css({
              "&::before, &::after": apply`${
                css({ "content": "''" })
              } block absolute w-[55%] h-full rounded-[100% 50%]`,
              "&::before": apply`bg-blue-700 translate-y-20 -z-10`,
              "&::after":
                apply`bg-[#222] absolute right-0 translate-y-[9.7rem]`,
            })
          }`}
        />
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>
          Tempora, in. Quae ad veniam sint aliquam, eius temporibus voluptate
          perferendis quas odio, iusto dolores est beatae? Blanditiis ducimus
          exercitationem repellendus, accusantium reiciendis id distinctio
          reprehenderit qui dolores voluptatem libero.
        </p>
      </section>
      <section
        class={tw`${
          css({
            "&::before": apply`${
              css({ content: "''" })
            } absolute w-full h-[110%] bg-[#111] -z-10 rounded-t-[100%] -translate-y-32`,
          })
        }`}
      >
        <h1>Nice Curves</h1>
        <p>
          Quas sapiente voluptatum optio rerum architecto eos, eaque fugiat. Nam
          tempora, excepturi expedita, amet eius accusantium mollitia fugit
          praesentium repellat debitis dolor cumque, velit minima! Sunt
          doloremque corrupti aliquid nihil?
        </p>
      </section>
      <section class="bg-red-500 pt-56">
        <h1>Nice Curves</h1>
        <p>
          Fuga necessitatibus soluta neque non dignissimos, beatae expedita
          ipsam, nihil, id corrupti optio perferendis quisquam perspiciatis
          autem laborum facere velit rem molestias? Totam dignissimos quod
          impedit aspernatur modi, maxime temporibus!
        </p>
        <div class="custom-shape-divider-top-1664554851">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            >
            </path>
          </svg>
        </div>
      </section>
      <section class="pt-40 sm:pt-52 md:pt-[300px] lg:pt-[500px]">
        <h1>Nice Curves</h1>
        <p>
          Id eius asperiores impedit totam aliquid illum, hic unde doloremque
          similique eligendi facere molestiae eos. Pariatur ullam sunt nostrum
          blanditiis. Libero, vel cumque provident iure autem fuga minima
          repellendus modi?
        </p>
        <div
          class={tw`absolute -z-10 top-0 w-full bg-no-repeat bg-center bg-cover ${css`aspect-ratio: 960/540 ; background-image: url('./layered-waves-haikei.svg');`}`}
        >
        </div>
      </section>
      <div
        aria-hidden="true"
        class={tw`w-full bg-no-repeat bg-center bg-cover ${css`aspect-ratio: 900/250; background-image: url('./layered-waves-haikei-pink.svg');`}`}
      >
      </div>
      <section class="bg-pink-600 overflow-hidden">
        <div class="absolute flex flex-col items-center gap-5 px-4 sm:px-[20vw] z-10">
          <h1 class="text-3xl sm:text-5xl">Nice Curves</h1>
          <p>
            Rerum dolores quisquam maxime aliquam voluptate. Doloremque, sint
            delectus? Quaerat obcaecati repudiandae amet alias eius excepturi,
            tenetur corporis nemo magnam eaque est perferendis aliquam dolor ex,
            asperiores, delectus sed cumque!
          </p>
        </div>
        <svg
          id="visual"
          class="scale-[1.6] md:scale-[1.8] absolute -translate-y-8 -translate-x-4 md:-translate-y-16"
          viewBox="0 0 900 250"
          width="900"
          height="250"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(467.63819720415455 136.72722496006693)">
            <path
              id="blob1"
              d="M42.6 -47.5C55.8 -29.5 67.4 -14.7 70.8 3.4C74.1 21.4 69.2 42.9 56.1 55.6C42.9 68.2 21.4 72.1 -1.2 73.3C-23.8 74.5 -47.6 72.9 -67.6 60.3C-87.6 47.6 -103.8 23.8 -106.6 -2.8C-109.5 -29.5 -98.9 -58.9 -78.9 -76.9C-58.9 -94.9 -29.5 -101.5 -7.4 -94.1C14.7 -86.7 29.5 -65.5 42.6 -47.5"
              fill="#BB004B"
            >
            </path>
          </g>
          <g transform="translate(447.4095433065923 132.60512223523614)">
            <path
              id="blob2"
              class="hidden"
              d="M75.1 -73.8C91.3 -58.9 94.1 -29.5 91.8 -2.4C89.4 24.7 81.8 49.5 65.7 59.9C49.5 70.3 24.7 66.4 -1.4 67.8C-27.6 69.3 -55.2 76 -70.8 65.6C-86.5 55.2 -90.2 27.6 -85.3 4.9C-80.3 -17.7 -66.7 -35.4 -51 -50.2C-35.4 -65 -17.7 -77 5.9 -82.9C29.5 -88.8 58.9 -88.6 75.1 -73.8"
              fill="#BB004B"
            >
            </path>
          </g>
        </svg>
      </section>
      <div
        aria-hidden="true"
        class={tw`w-full rotate-180 bg-no-repeat bg-center bg-cover ${css`aspect-ratio: 900/250; background-image: url('./layered-waves-haikei-pink.svg');`}`}
      >
      </div>
      <section>
        <h1>Nice Curves</h1>
        <p>
          Facilis ab doloribus aspernatur, repellendus, dicta libero aliquam
          vitae itaque magnam, veniam excepturi sed! Maiores debitis officiis,
          alias mollitia voluptates tempora illum at? Asperiores magni similique
          iusto accusantium culpa excepturi.
        </p>
      </section>
      <script>
        {`const tween = KUTE.fromTo(
          '#blob1',
          { path: '#blob1' },
          { path: '#blob2' },
          { repeat: 999, duration: 3000, yoyo: true }
        ).start();`}
      </script>
    </>
  );
}
